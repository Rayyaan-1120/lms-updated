import React from "react";
import ceoImg from "../../images/muhammadalimughal.jpeg";
const Message = () => {
  return (
    <div>
      <div className="message-title-container"><h3 className= 'text-center section-title'> ~~~ CEO Message ~~~</h3></div>
      <div className="message-container">
        <div className="row">
          <div className="col-lg-8 col-md-4 justify main-message-text-container">
            <h4 className = 'message-heading'>CEO Muhammad Ali Mughal</h4>
            <div className = 'message-text-container'>
              <p className = 'message-text'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-2 messsage-img-container">
            <img className ='message-img' src={ceoImg} alt="CEO" width="auto" height= '250px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
