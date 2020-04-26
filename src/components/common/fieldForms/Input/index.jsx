import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss'

const Input = (props) => {

    const {
        input,
        labelText,
        meta,
        type,
        isCombine
    } = props;

    const showError=meta.error && meta.touched;

    const isEmptyField = meta.dirty;

    const cx = classNames.bind(styles);

    const wrapperClassName = cx ({
        normal: !isCombine,
        combine: isCombine,
        combineError: isCombine && showError
    });

    const inputClassName = cx({
        combine__input: isCombine,
        normal__input: !isCombine,
        errorBorder: showError && !isCombine,
        notEmptyInput: isEmptyField && isCombine
    });

    const labelClassName = cx({
        combine__label: isCombine,
        normal__label: !isCombine,
        notEmptyLabel: isEmptyField && isCombine
    });

    const errorMessage = showError && <div className={styles.input__error} >{ meta.error }</div>;

    return (
        <>
            <div className={wrapperClassName}>

                <input
                    {...input}
                    type={type}
                    className={inputClassName}
                    id={input.name}
                />

                <label className={labelClassName} htmlFor={input.name}>{labelText}</label>

                {!isCombine && errorMessage}

            </div>
            {isCombine && errorMessage}
        </>
    )
}

Input.defaultProps = { isCombine: false }

export default Input