const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()


const router = jsonServer.router('./db.json')

const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

const SECRET_KEY = '123456789'
const expiresIn = '1h'

// Create a token from a payload
function createToken(payload){
    return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token
function verifyToken(token){
   return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function isAuthenticated({email, password}){
return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

function getUserId(token) {
  const {email, password} = verifyToken(token);
  const userIfro = userdb.users.filter(user => user.email === email && password === user.password);
  return userIfro[0].id;
}

server.post('/auth/login', (req, res) => {
    const {email, password} = req.body
    if (isAuthenticated({email, password}) === false) {
        const status = 401
        const message = 'Incorrect email or password'
        res.status(status).json({status, message})
        return
    }
    const access_token = createToken({email, password})
    const userIfro = userdb.users.filter(user => user.email === email && password === user.password)
    const userId= userIfro[0].id
    const userName= userIfro[0].name
    res.status(200).json({access_token,userId,userName})
})

server.get('/auth/me', (req,res) => {
    const {email, password} = verifyToken(req.headers.authorization.split(' ')[1]);
    if (email && password) {
      const userIfro = userdb.users.filter(user => user.email === email && password === user.password)
      const userId= userIfro[0].id
      const userName= userIfro[0].name
      res.status(200).json({userId,userName})
      return
    }
    const status = 401
    const message = 'Not autorized!'
    res.status(status).json({status, message})
  }
)

server.use(/^(?!\/auth).*$/,  (req, res, next) => {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      const status = 401
      const message = 'Bad authorization header'
      res.status(status).json({status, message})
      return
    }
    try {
       verifyToken(req.headers.authorization.split(' ')[1])
       next()
    } catch (err) {
      const status = 401
      const message = 'Error: access_token is not valid'
      res.status(status).json({status, message})
    }
})

server.use('/', (req,res,next) => {

  const token=req.headers.authorization.split(' ')[1]
  const userId= getUserId(token)

  if (req.method === 'PUT' || req.method === 'POST') {
    if (req.path === '/profile' && req.method === 'PUT' ) {
        res.redirect(`/profile/${userId}`)
        return
    } else if (!req.path.includes('/profile')) {
        req.body.profileId= userId;
    }
  }

  if (req.method === 'GET' && req.path === '/messages') {
    res.redirect(`profile/${userId}/messages`)
    return
  }

  if (req.method === 'GET' && req.path.includes('/posts') && !req.path.includes('profile') ) {
    const Uid = req.path.substring(7,req.path.length)
    res.redirect(`profile/${Uid}/posts`)
    return

  }

  if (req.method === 'GET' && req.path === '/peoples') {
    res.redirect(`profile/`)
    return
  }

  next()
})

server.use('/auth/logout', (req,res,next) => {
  const status = 200
  const message = 'User logout!'
  res.status(status).json({status, message})
  next()
})

server.use(router)

server.listen(3001, () => {
  console.log('Run Auth API Server')
})
