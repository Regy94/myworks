import React from 'react';
import classNames from 'classnames/bind';
import TextareaAutosize from 'react-textarea-autosize';
import {hot} from 'react-hot-loader/root';

import styles from './Textarea.module.scss';

const Textarea = (props) => {

    const {meta,input,width,autosize,placeholder} = props;

    const getSize =  (type) => {
        const sizes = {
            long: 'long',
            default: 'normal'
        };
        return (sizes[type] || sizes['default']);
    }

    const areaWidth = getSize(width);

    const cx = classNames.bind(styles);

    const showError=meta.error && meta.touched;

    const textareaClassName = cx (
    'initialTextarea', {
        errorBorder: showError,
        longArea: areaWidth ==='long',
        normalArea: areaWidth === 'normal'
    });

    return (
        <div className={styles.wrapper}>
            {
                autosize ? (
                    <TextareaAutosize placeholder={placeholder} {...input} className={textareaClassName} />
                ) : (
                    <textarea {...input} placeholder={placeholder} className={textareaClassName} />
                    )
            }
            {showError && <div className={styles.errorText} >{meta.error}</div>}
        </div>
    )
}

Textarea.defaultProps = {autosize:false}

export default hot(Textarea)