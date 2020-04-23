import React from 'react';

import { Field, reduxForm } from 'redux-form';

const AddNewPostForm = ({handleSubmit}) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field  component="textarea" name="postText"/>
                <button>Add post</button>
            </form>
        </div>
    )
}

export default reduxForm({form: 'newPostForm'})(AddNewPostForm)
