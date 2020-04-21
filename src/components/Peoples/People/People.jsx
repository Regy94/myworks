import React from 'react';

import styles from './People.module.css';
import { NavLink } from 'react-router-dom';

const People = (props) => {

    return (
        <div className={styles.people}>
            <NavLink to={'/profile/'+props.id}>
                <div className={styles.people__photo}>
                    <img src={props.photo} alt='' className={styles.people__img}/>
                </div>
            </NavLink>
            <div className={styles.people__info}>
                <div className={styles.peoples__fullname}>{props.fullname}</div>
                <div className={styles.people__btn}>
                    {props.followed

                        ? <button disabled={props.disableIDs.some(id => id ===props.id)}
                            onClick={() => {
                                props.unfollowTC(props.id)
                            }}>Unfollow</button>

                        : <button disabled={props.disableIDs.some(id => id ===props.id)}
                            onClick={() => {
                                props.followTC(props.id)
                            }}>Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default People;