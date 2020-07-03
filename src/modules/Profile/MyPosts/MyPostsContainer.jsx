import {connect} from 'react-redux';
import {hot} from 'react-hot-loader/root';

import MyPosts from '.';

import {addPostActionCreator, getPostsTC} from '../../../data/profile-reducer';
import { postsSelector } from '../../../data/selectors/profile-selectors';

const mapStateToProps = (state) => {
    return {
        posts: postsSelector(state)
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: (postText) => { dispatch(addPostActionCreator(postText)) },
//         getPosts: getPostsTC()
//     }
// }

const MyPostsContainer = connect (mapStateToProps, { getPosts: getPostsTC } ) (MyPosts);

export default hot (MyPostsContainer);
