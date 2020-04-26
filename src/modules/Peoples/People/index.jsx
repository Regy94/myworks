import React from 'react';

import Button from '../../../components/common/Button';

import styles from './People.module.scss';
import { NavLink } from 'react-router-dom';


const People = (props) => {

    const {id, photo, fullname, followed, disableIDs, unfollow, follow} = props;

    const funcDisableIDs = disableIDs.some(newId => newId === id);

    const handleUnfollow = (event) => {
        event.preventDefault()
        unfollow(id)
    }

    const handleFollow = (event) => {
        event.preventDefault()
        follow(id)
    }

    return (
        <NavLink className={styles.navLink} to={'/profile/'+id}>
            <div className={styles.people}>

                <div className={styles.people__photo}>
                    <img src={photo} alt='userPhoto' className={styles.people__img}/>
                </div>

                <div className={styles.people__info}>
                    <div className={styles.peoples__fullname}>{fullname}</div>

                    <div className={styles.people__btn}>
                        {followed ? (
                                <Button isActive={true} size="s" disabled={funcDisableIDs} onClick={handleUnfollow}>
                                    Unfollow
                                </Button>
                            ) : (
                                <Button size="s" disabled={funcDisableIDs} onClick={handleFollow}>
                                    Follow
                                </Button>
                            )
                        }
                    </div>
                </div>

            </div>
        </NavLink>
    )
}

export default People;