import React from 'react'
import styles from './AppHeader.module.scss'

const AppHeader = () => {
    return (
        <div className={styles['admin-bar']}>
            <h1>Admin</h1>
            <div>
                <img src="http://placekitten.com/200/200" alt="user profile" />
            </div>
        </div>
    )
}

export default AppHeader