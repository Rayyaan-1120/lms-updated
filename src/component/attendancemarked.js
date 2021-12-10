import React,{useState,useEffect} from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import styles from './attendancemarked.module.css'
import Modal from 'react-awesome-modal';


const Attendancemarked = () => {

    const [visible,setVisible] = useState(false)


    useEffect(() => {
        setVisible(true)
    },[visible])

    return (
        <div >
            <div style={styles.maindiv}>
                <Modal
                visible={visible}
                width="300"
                height="300"
                effect="fadeInUp"
                onClickAway={() => {
                    setVisible(false)
                }}
                
                >
                <FaCheckCircle />
                <h1 style={{ color: '#fff', fontSize: '2rem' }}>Your attendance has been marked</h1>
                </Modal>
            </div>
        </div>
    )
}

export default Attendancemarked