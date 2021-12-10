import { Button, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const SkipModalCmp = ({handleModal}) => {
  // console.log(handleModal)
  const [show, setShow] = useState(handleModal);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
      setShow(handleModal)
  }, [handleModal])
  return (
    
 <>

      <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>SKIP QUESTIONS</Modal.Title> */}
        </Modal.Header>
        <Modal.Body >
            <p className="border-0 m-0 p-0 font-weight-bold">you are done with each and every question of this quiz</p>
            <p className="border-0 m-0 p-0 font-weight-bold">now we are showing you questions which you skipped</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{backgroundColor:"#348F50"}} onClick={handleClose}>
            Okay
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}





export default SkipModalCmp;
