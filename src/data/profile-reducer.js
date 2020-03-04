
const profileReducer = (state, action) => {
    debugger;
    switch (action.type) {

        case 'ADD-POST':
            let newPost = {
                id: 3,
                header: 'Header 3',
                text: state.writtenPostText
            };
            state.posts.push(newPost);
            state.writtenPostText = '';
            return state;

        case 'UPDATE-POST-TEXT':
            state.writtenPostText=action.newPostText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'});

export const updatePostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-POST-TEXT',
        newPostText: text
    }
};

export default profileReducer;