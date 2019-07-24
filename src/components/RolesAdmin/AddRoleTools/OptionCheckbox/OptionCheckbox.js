import React from 'react'
import styles from './OptionCheckbox.module.scss'

const PermissionOption = (props) => {

    return (
        <label className={styles['option-checkbox']}>
            {props.name}
            <input
                type="checkbox"
                name={props.name}
                value={props.value}
                onClick={(e) => { props.handleChange(props.value, e.target.checked ? true : false )}}
            />
            <span className={styles['checkmark']}></span>
            </label>
    )
}

export default PermissionOption