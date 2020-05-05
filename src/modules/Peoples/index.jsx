import React from 'react';
import {hot} from 'react-hot-loader/root';
import classNames from 'classnames/bind';

import People from './People/';
import Loader from '../../components/common/Loader'
import Pagination from '../../components/common/Pagination';

import userPhoto from './../../assets/images/user.png';

import styles from './Peoples.module.css';

const Peoples = (props) => {

    const {
        peoples,
        pageSize,
        usersTotalCount,
        currentPage,
        isLoading,
        disableIDs,
        disableBtn,
        handleChangePage,
        unfollow,
        follow
    } = props;

    const peoplesArray = peoples.map(people => {

        const currentUserPhoto = people.photos.small !== null ? people.photos.small : userPhoto;

        return (
            <People
                id={people.id}
                photo={currentUserPhoto}
                fullname={people.name}
                followed={people.followed}
                disableBtn={disableBtn}
                disableIDs={disableIDs}
                follow={follow}
                unfollow={unfollow}
                key={people.id}
            />
        )
    });

    const cx = classNames.bind(styles);

    const peoplesArrClassName = cx (
        'peoples__arr', {
            disabledPeoples: isLoading
        }
    );

    const isHidePagination = peoples.length === 0

    return (
        <div className={styles.peoples}>
            { isLoading && (
                <div className={styles.peoples__loader}>
                    <Loader />
                </div>
            )}

            <div className={peoplesArrClassName}>{peoplesArray}</div>

            { !isHidePagination &&
                <Pagination
                currentPage={currentPage}
                totalItemCount={usersTotalCount}
                pageSize={pageSize}
                handleChangePage={handleChangePage}
                />
            }

        </div>
    )
}

export default hot (Peoples);