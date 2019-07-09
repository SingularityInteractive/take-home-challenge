import React from 'react'

const RolesListItem = (props) => {
    if (props.tHead === true) {
        return (
            <tr className={props.style['roles-list-head']}>  
                <th className={props.style['role-name']}><input type="checkbox" /><div className={props.style['text']}>{props.name}</div></th>
                <th className={props.style['user-count']}>{props.userCount}</th>
                <th className={props.style['permissions-list']}>{props.permissionsList}</th>
            </tr>
        )
    }
    return (
        <tr className={props.style['roles-list-row']}>  
            <td className={props.style['role-name']}><input type="checkbox" /><div className={props.style['text']}>{props.name}</div></td>
            <td className={props.style['user-count']}>{props.userCount}</td>
            <td className={props.style['permissions-list']}>{props.permissionsList}</td>
        </tr>
    )
}

export default RolesListItem