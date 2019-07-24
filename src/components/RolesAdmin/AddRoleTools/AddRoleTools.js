import React, {Component} from 'react'
import styles from './AddRoleTools.module.scss'
import RoleNameField from './RoleNameField/RoleNameField'
import OptionCheckbox from './OptionCheckbox/OptionCheckbox'
import AddRoleButton from './AddRoleButton/AddRoleButton'

class AddRoleTools extends Component {
    constructor() {
        super()
        this.state = {
            selectedPermissions: [],
            readyToAdd: false,
            inputValue: ""
        }
        this.updateSelectedPermissions = this.updateSelectedPermissions.bind(this)
        this.createRoleObject = this.createRoleObject.bind(this)
        this.getInputValue = this.getInputValue.bind(this)
        this.checkReady = this.checkReady.bind(this)
    }

    getInputValue(val) {
        this.setState({ inputValue: val })
        this.checkReady()
    }

    checkReady() {
        const newRoleName = this.state.inputValue
        const existingNames = this.props.data.rolesData.map(data => data.name)
        if (existingNames.includes(newRoleName) || newRoleName === "" || this.state.selectedPermissions.length === 0) {
            this.setState({ readyToAdd: false })
        } else {
            this.setState({ readyToAdd: true })
        }
    }

    updateSelectedPermissions(permId,isChecked) {
        if (isChecked) {
            this.setState(prevState => ({
                selectedPermissions: [...prevState.selectedPermissions, permId]
            }),() => this.checkReady())
        } else {
            this.setState(prevState => ({
                selectedPermissions: prevState.selectedPermissions.filter(f => f !== permId)
            }),() => this.checkReady())
        }
    }

    createRoleObject() {
        const maxId = Math.max(...this.props.data.rolesData.map(m => m.id), 0)
        const newRoleObject = {
            "id": maxId + 1,
            "name": this.state.inputValue,
            "assigned_user_count": 0,
            "permission_ids": this.state.selectedPermissions
        }
        this.props.addNewRole(newRoleObject)
        this.setState({ readyToAdd: false })
    }

    render() {
        
        const permissionsList = this.props.data.permissionsData.map(permission =>
            <OptionCheckbox
                key={permission.id}
                value={permission.id}
                name={permission.name}
                handleChange={this.updateSelectedPermissions}
            />)
        
            return (
                <div className={styles['add-role-tools']}>
                    
                    <div className={styles['add-role-tools-body']}>
                        <div className={styles['overview']}>
                            <h3>Create new role</h3>
                            <p>
                                As an admin, you can create new roles with specific permissions to assign to new and existing users.
                            </p>
                        </div>
            
                        <div className={styles['name-input']}>
                            <RoleNameField sendValue={this.getInputValue} />
                        </div>

                        <div className={styles['options-list']}>
                            <h3>Permissions</h3>
                            {permissionsList}
                        </div>
                    </div>
        
                    <div className={styles['add-role-tools-footer']}>
                        <AddRoleButton clickable={!this.state.readyToAdd} handleClick={this.createRoleObject} />
                    </div>
        
                </div>
            )
        }
}

export default AddRoleTools