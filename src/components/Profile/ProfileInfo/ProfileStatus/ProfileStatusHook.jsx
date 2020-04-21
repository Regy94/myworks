import React, { useState, useEffect } from 'react';

import styles from './ProfileStatus.module.css'
import Loader from '../../../common/loader/loader';


const ProfileStatusHook = (props) => {


    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditStatus = () => {
        props.isUserProfile && setEditMode(true)
    }

    const deActivateEditStatus = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onInputChange = (event) => {
        setStatus(event.target.value)
    }

    return (
        <div className={styles.status} onClick={activateEditStatus}>
            {editMode ? (
                    <div>
                        <input className={styles.status__input}
                            autoFocus='true'
                            onBlur={deActivateEditStatus}
                            onChange={onInputChange}
                            value={status} />
                    </div>
                ) : (
                    <div className={styles.status__text}>
                        {
                            props.isStatusLoading
                            ? <div className={styles.status__loader}><Loader size='s'/></div>
                            : props.status
                        }
                    </div>
                )
            }
        </div>
    )
}


export default ProfileStatusHook