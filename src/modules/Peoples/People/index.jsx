import React from 'react';

import styles from './People.module.css';
import { NavLink } from 'react-router-dom';

const People = (props) => {

    const {id, photo, fullname, followed, disableIDs, unfollow, follow} = props;

    const funcDisableIDs = disableIDs.some(newId => newId === id);

    const handleUnfollow = () => unfollow(id)

    const handleFollow = () => follow(id)

    return (

        <div className={styles.people}>

            <NavLink to={'/profile/'+id}>
                <div className={styles.people__photo}>
                    <img src={photo} alt='' className={styles.people__img}/>
                </div>
            </NavLink>

            <div className={styles.people__info}>

                <div className={styles.peoples__fullname}>{fullname}</div>

                <div className={styles.people__btn}>
                    {followed ? (
                            <button disabled={funcDisableIDs} onClick={handleUnfollow}>
                                Unfollow
                            </button>
                        ) : ( <button disabled={funcDisableIDs} onClick={handleFollow}>
                                Follow
                            </button>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default People;