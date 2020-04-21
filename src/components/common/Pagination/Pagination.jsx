import React, { useState, useEffect } from 'react';
import styles from './Pagination.module.css'


const Pagination = ({
    totalItemCount,
    usersTotalCount,
    pageSize,
    currentPage,
    portionSize = 10,
    OnChangePage
}) => {

    const pages = [];

    const lastPage=Math.ceil(totalItemCount/pageSize);

    for ( let i=1; i<=lastPage; i++) {pages[i]=i}

    const [portionNumber, setPortionNumber] = useState(1)

    const lastPortionNumber=Math.ceil(lastPage/portionSize);

    const rightPortionNumber = portionNumber*portionSize;

    const leftPortionPageNumber = (portionNumber*portionSize) - portionSize + 1

    return(
        <div className={styles.pages}>
            {portionNumber>1 && <button onClick={()=> setPortionNumber(portionNumber-1)}>Prev</button>}
            {pages
                .filter( page => page<=rightPortionNumber && page>= leftPortionPageNumber)
                .map( page => {
                return <div className={currentPage === page? styles.pages__active:styles.pages__item} onClick={ () => {OnChangePage(page)} }>
                            {page}
                        </div>
                })}
            <div className={styles.pages__item} onClick={ () => {OnChangePage(lastPage)}}>
                ... {lastPage}
            </div>
            {lastPortionNumber>portionNumber &&<button onClick={() => setPortionNumber(portionNumber+1)}>Next</button>}
        </div>
    )
}

export default Pagination