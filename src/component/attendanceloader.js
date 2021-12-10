import React from 'react'
import styles from './attendanceloader.module.css'

function Attendanceloader() {
    return (
        <div style={{height:'100vh',position:'fixed',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',zIndex:15,backgroundColor:"#000",opacity:0.5}}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Attendanceloader
