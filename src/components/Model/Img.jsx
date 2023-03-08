import React from 'react'
import profile from "../../assets/me.jpg";

const Img = () => {

    
    return (
      <>
        <div className="box__img">
          <div className="img_box">
            <img src={profile} alt="profile" />
          </div>
          <div className="content">
            <h2 className="font-bold text-center ">
              Khaled Nashwan <br />
              <span>Front End | React Js </span>
            </h2>
          </div>
        </div>
      </>
    );
}

export default Img