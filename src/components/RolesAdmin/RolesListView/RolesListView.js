import React, { Component } from 'react'
import RolesListItem from './RolesListItem'
import styles from './RolesListView.module.scss'

class RolesListView extends Component {

    render() {

        const getState = this.props.data

        let rolesContent
        if (getState.isLoading) {
            rolesContent = <tr><td><h3>Loading...</h3></td></tr>
        } else {
            rolesContent = getState.rolesData.map(data =>
                <RolesListItem
                    key={data.id}
                    style={styles}
                    name={data.name}
                    userCount={data.assigned_user_count}
                    permissionsList={this.props.permissionNames(data.permission_ids)}
                />
            )
        }

        return (
            <table className={styles['roles-list-container']}>
                <thead>
                <RolesListItem
                    style={styles}
                    tHead={true}
                    name="Role"
                    userCount="Users"
                    permissionsList="Permissions"
                    />
                </thead>
                <tbody>
                {rolesContent}
                </tbody>
            </table>
            
        )
    }
}

export default RolesListView

