import React,{useState} from "react";
import styles from "./allassignments.module.css";
import Modal from 'react-awesome-modal'
import {FaEdit} from 'react-icons/fa'
import {useDispatch,useSelector} from 'react-redux'
import {givestdmarks} from '../../Redux/action/adminassignment'

function Stdassignmentsstatus({ data, course, batch,assignmentName,maxmarks,id }) {

  const dispatch = useDispatch()

    const [show,setshow] = useState(false)
    const [input,setinput] = useState(0)

    
    console.log(input)

    const findstddata = (rollNo) => {


      setshow(true)
      const filterate = data.find(entry => entry.rollNo === rollNo)
      

    }

  return (
      <>
      
      
    <div className={styles.mainmodal}>
      <div className={styles.stdgreendiv}>
        <h5>{course}</h5>
        <h5>Batch: {batch}</h5>
      </div>
      {data != [] &&
        data.map((entry, i) => {
          
          return (
              <>
              
            <Modal
            visible={show}
            width="500"
            height="300"
            effect="fadeInDown"
            onClickAway={() => {
                setshow(false)
        
            }}
            >
      
             <div className={styles.secondmodal}>
                 <h2>assignment link</h2>
                 <div>
                 <input type="text" value={entry.assignmentLink}/>
                 </div>
                 <h2>Marks</h2>
                 <div>
                 <input type="number" onChange={(e) => {
                   
                   setinput(e.target.value)
                  
                   }} value={input} required max={Number(maxmarks)}/>
                 </div>
                 <div>
                     <button className={styles.btn} onClick={() => {dispatch(givestdmarks(id,entry.rollNo,entry.obtainMarks=input,assignmentName))
                      console.log(entry.rollNo)
                    }}>Submit marks</button>
                 </div>
             </div>
            </Modal>
            <div key={i} className={styles.stdwhitediv}>
              <div>
                <h5>{entry.stdName}</h5>
              </div>
              <div className={styles.editicon}>
                <h5>{entry.rollNo}</h5>
                <FaEdit onClick={() => setshow(true)}/>

              </div>

            </div>
            </>
          );
        })}
    </div>
    </>
  );
}

export default Stdassignmentsstatus;
