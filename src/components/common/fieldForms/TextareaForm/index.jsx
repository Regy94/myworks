import React from 'react';
import styles from './TextareaForm.module.css'

const TextareaForm = ({input, meta, ...props}) => {

    const showError=meta.error && meta.touched;

    return (
        <div>
            <textarea {...input} {...props} className={showError && styles.errorBorder}/>
            {showError && <div className={styles.errorText} >{meta.error}</div>}
        </div>
    )
}

export default TextareaForm