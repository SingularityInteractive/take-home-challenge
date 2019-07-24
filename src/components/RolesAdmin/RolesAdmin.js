import React, { Component } from 'react'
import styles from './RolesAdmin.module.scss'
import AddRoleTools from './AddRoleTools/AddRoleTools'
import RolesListView from './RolesListView/RolesListView'

class RolesAdmin extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            rolesData: [],
            permissionsData: []
        }
        this.getPermissionNames = this.getPermissionNames.bind(this)
        this.addNewRole = this.addNewRole.bind(this)
    }

    componentDidMount() {
        Promise.all([fetch("https://code-challenge-api.github59.now.sh/api/roles.json"),
        fetch("https://code-challenge-api.github59.now.sh/api/permissions.json")
        ])
            .then(([roles, permissions]) => Promise.all([roles.json(), permissions.json()]))
            .then(([rolesFetched,permissionsFetched]) => {
                this.setState({
                    isLoading: false,
                    rolesData: rolesFetched.data,
                    permissionsData: permissionsFetched.data
                })
            })
    }

    getPermissionNames(ids) {
        const permissionNames = this.state.permissionsData.filter(f => ids.includes(f.id))
        const pCount = permissionNames.length
        return permissionNames.map((data,i) => pCount === i+1 ? `${data.name}` : `${data.name}; `)
    }

    addNewRole(roleObject) {
        this.setState( prevState => ({
            rolesData: [...prevState.rolesData, roleObject]
        }))
    }

    render() {
        return (
            <section className={styles['roles-admin']}>
                <div className={styles['admin-sidebar']}>
                    <AddRoleTools data={this.state} addNewRole={this.addNewRole} />
                </div>
                <div className={styles['admin-main']}>
                    <RolesListView data={this.state} permissionNames={this.getPermissionNames}/>
                </div>
            </section>
        )
    }

}

export default RolesAdmin