import React, { useState } from 'react';

import ProfileEditForm from './ProfileEditForm'
import ProfileInfoData from './ProfileInfoData'
import Loader from '../../../components/common/Loader';

const ProfileContainerData = (props) => {

    const [editMode, setEditMode] = useState(false)

    const onSubmit = (FormData) => {
        props.updateProfile(FormData, setEditMode)
    }

    return (
        props.toggleProfileUpdateLoading ? (
            <div className="block-center"><Loader /></div>
        ) : (
            <div>
                {
                    editMode ? (
                        <ProfileEditForm {...props} initialValues={props.profile} onSubmit={onSubmit}/>
                    ) : (
                        <ProfileInfoData {...props} setEditMode={setEditMode} />
                    )
                }
            </div>
        )
    )
}

export default ProfileContainerData;

