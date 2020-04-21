import React, { useState } from 'react';

import ProfileEditForm from './ProfileEditForm/ProfileEditForm'
import ProfileInfoData from './ProfileInfoData/ProfileInfoData'
import Loader from '../../common/loader/loader';

const ProfileContainerData = (props) => {

    const [editMode, setEditMode] = useState(false)

    const onSubmit = (FormData) => {
        props.updateProfile(FormData, setEditMode)
        // setEditMode(false)
    }

    return (
        props.toggleProfileUpdateLoading
            ? <div className="block-center"><Loader/></div>
            :<div>
                {editMode
                        ?<ProfileEditForm {...props} initialValues={props.profile} onSubmit={onSubmit}/>
                        :<ProfileInfoData {...props} setEditMode={setEditMode} />
                }
            </div>
    )
}

export default ProfileContainerData;

