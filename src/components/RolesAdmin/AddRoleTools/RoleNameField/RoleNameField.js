import React, { Component } from 'react'
import styles from './RoleNameField.module.scss'

class RoleNameField extends Component {
    constructor() {
        super()
        this.state = {
            inFocus: false,
        }
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }

    onFocus = () =>  {
        this.setState({ inFocus: true })
    }
    
    onBlur = () =>  {
        this.setState({ inFocus: false })
    }


    render() {

        const style = { display: this.state.inFocus ? 'block' : 'none'}

        return (
            <div className={styles['role-name-field']}>
                <label style={style}>Role Name</label>
                <input
                    id="newRoleName"
                    name="Role Name"
                    type="text"
                    autoComplete="off"
                    placeholder={this.state.inFocus ? 'i.e. Admin the Giant' : 'Role Name'}
                    onFocus={this.onFocus} onBlur={this.onBlur}
                    onKeyUp={(e) => this.props.sendValue(e.target.value)}
                />
                <div className={styles['edge']} ></div>
            </div>
        )
    }
}

export default RoleNameField
