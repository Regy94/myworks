import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {addPostActionCreator} from './../../../data/profile-reducer';
import { postsSelector } from '../../../data/selectors/profile-selectors';

const mapStateToProps = (state) => {
    return {
        posts: postsSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => { dispatch(addPostActionCreator(postText)) }
    }
}


const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
