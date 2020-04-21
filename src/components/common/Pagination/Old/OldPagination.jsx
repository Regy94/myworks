import React from 'react';
import styles from './OldPagination.module.css'


const OldPagination = (props) => {

    const pages = [];

    const lastPage=Math.ceil(props.totalItemCount/props.pageSize);

    const currentPage = props.currentPage;

    for ( let i=(currentPage-3); i<=(currentPage===lastPage?lastPage:currentPage+3); i++) {pages[i-1]=i}

    return(
        <div className={styles.pages}>
            <div className={styles.pages__title}>Pages:</div>
            {pages.map( (page, idx) => {
                return <div key={idx} className={props.currentPage === page? styles.pages__active:styles.pages__item} onClick={ () => {props.OnChangePage(page)} }>
                            {page}
                        </div>
                })}
            <div className={styles.pages__item} onClick={ () => {props.OnChangePage(currentPage+6)}}>
                ...
            </div>
            <div className={styles.pages__item} onClick={ () => {props.OnChangePage(lastPage)}}>
                {lastPage}
            </div>
        </div>
    )
}

export default OldPagination