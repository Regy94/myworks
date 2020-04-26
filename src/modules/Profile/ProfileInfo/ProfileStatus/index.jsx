import React, { useState, useEffect } from 'react';

import Loader from '../../../../components/common/Loader';

import styles from './ProfileStatus.module.scss'

const ProfileStatusHook = (props) => {

    const {status, isUserProfile, isStatusLoading, updateStatus} = props;

    const [editMode, setEditMode] = useState(false)
    const [localStatus, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(status)
    }, [status])

    const activateEditStatus = () => {
        isUserProfile && setEditMode(true)
    }

    const deActivateEditStatus = () => {
        setEditMode(false);
        updateStatus(localStatus)
    }

    const onInputChange = (event) => {
        setStatus(event.target.value)
    }

    return (
        <div className={styles.status} onClick={activateEditStatus}>
            {editMode ? (
                    <div>
                        <input className={styles.status__input}
                            autoFocus="true"
                            onBlur={deActivateEditStatus}
                            onChange={onInputChange}
                            value={localStatus} />
                    </div>
                ) : (
                    <div className={styles.status__text}>
                        {
                            isStatusLoading ? (
                                <div className={styles.status__loader}><Loader size='s'/></div>
                            ) : (
                                status
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}


export default ProfileStatusHook