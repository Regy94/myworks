import React from 'react';

import styles from './ProfileStatus.module.css'
import Loader from '../../common/loader/loader';

class ProfileStatus extends React.Component {

    state= {
        editMode: false,
        status: this.props.status
    }

    activateEditStatus = () => {
        this.setState ({
            editMode: true
        })
    }

    deActivateEditStatus = () => {
        this.setState ({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onInputChange = (event) => {
        this.setState({status: event.currentTarget.value})
    }

    componentDidUpdate (prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div className={styles.status} onClick={this.activateEditStatus}>
                {this.state.editMode ? (
                        <div>
                            <input className={styles.status__input} onChange={this.onInputChange}
                                autoFocus='true' onBlur={this.deActivateEditStatus} value={this.state.status} />
                        </div>
                    ) : (
                        <div className={styles.status__text}>
                            {
                                this.props.isStatusLoading
                                ? <div className={styles.status__loader}><Loader size='s'/></div>
                                : this.props.status
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ProfileStatus