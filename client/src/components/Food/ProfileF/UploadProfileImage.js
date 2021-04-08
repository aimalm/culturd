  
import React, { useState } from "react";
//import {updateUser} from "../../Axois/Axois"

  function UploadProfileImage() {
  
  
  const [fileData, setFileData] = useState();
  
    const fileChangeHandler = (e) => {
      setFileData(e.target.files[0]);
    };
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
  
      // Handle File Data from the state Before Sending
      const data = new FormData();
  
      data.append("ProfilePicture", fileData);
  
      fetch("http://localhost:5000/culturd_api/Em3Wi5va8is15/user/email/606b81fb64e2e1370c045b68", {
        method: "PATCH",
        body: data,
      })
        .then((result) => {
          console.log("File Sent Successful");
        })
        .catch((err) => {
          console.log(err.message);
        });
      }
        
    return (
    <div>
        <form onSubmit={onSubmitHandler}>
          <input type="file" onChange={fileChangeHandler} />
          <br />
          <br />
          <button type="submit">Confirm</button>
        </form>
  
  
      </div>
    );
  }
  
  export default UploadProfileImage;