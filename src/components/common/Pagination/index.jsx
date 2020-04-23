import React, { useState } from 'react';

import styles from './Pagination.module.css'

const Pagination = ({
    totalItemCount,
    usersTotalCount,
    pageSize,
    currentPage,
    portionSize,
    handleChangePage
}) => {

    const pages = [];

    const lastPage=Math.ceil(totalItemCount / pageSize);

    for ( let i = 1; i <= lastPage; i++) {
        pages[i] = i
    }

    const [portionNumber, setPortionNumber] = useState(1);

    const lastPortionNumber=Math.ceil(lastPage / portionSize);

    const rightPortionNumber = portionNumber * portionSize;

    const leftPortionPageNumber = (portionNumber * portionSize) - portionSize + 1;

    const handlePrevPage = () => setPortionNumber(portionNumber - 1);
    const handleNextPage = () => setPortionNumber(portionNumber + 1);
    const handleLastPage = () => handleChangePage(lastPage);


    return(
        <div className={styles.pages}>
            {portionNumber > 1 && <button onClick={handlePrevPage}>Prev</button>}

            {pages
                .filter( page => page <= rightPortionNumber && page >= leftPortionPageNumber)
                .map( page => {
                    const currClassName = currentPage === page ? styles.pages__active : styles.pages__item;
                    const handleCurrPage = () => handleChangePage(page)

                    return (
                        <div className={ currClassName } onClick={ handleCurrPage } key={page}>
                            {page}
                        </div>
                    )
                })
            }

            <div className={styles.pages__item} onClick={ handleLastPage }>
                ... {lastPage}
            </div>

            {lastPortionNumber>portionNumber && <button onClick={handleNextPage}>Next</button>}
        </div>
    )
}

Pagination.defaultProps = {
    portionSize: 10
}

export default Pagination