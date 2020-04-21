import React from 'react';

import styles from './Peoples.module.css';
import userPhoto from './../../assets/images/user.png';
import People from './People/People';
import Loader from '../common/loader/loader'
import Pagination from '../common/Pagination/Pagination';

const Peoples = (props) => {

    let peoplesArray = props.peoples.map( p =>
        <People
            id={p.id}
            photo={p.photos.small !=null ? p.photos.small : userPhoto}
            fullname={p.name}
            followed={p.followed}
            disableBtn={props.disableBtn}
            disableIDs={props.disableIDs}
            followTC={props.followTC}
            unfollowTC={props.unfollowTC}
        />);

    return (
        <div className={styles.peoples}>
            {
                props.isLoading && <div className={styles.peoples__loader}><Loader /></div>
            }
            <div className={styles.peoples__arr}>{peoplesArray}</div>
            <Pagination
                currentPage={props.currentPage}
                totalItemCount={props.usersTotalCount}
                pageSize={props.pageSize}
                OnChangePage={props.OnChangePage}
                 />
        </div>
    )
}

export default Peoples;