import React from 'react'
import styles from './AddRoleButton.module.scss'

const AddRoleButton = (props) => {

    return (
        <button className={styles['add-role-button']} disabled={props.clickable} onClick={() => props.handleClick()}>Add new role</button>
    )
   
}

export default AddRoleButton