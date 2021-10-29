import { BiCamera, IoClose } from "react-icons/all";
import React, { useState } from "react";
// import Button from "../Button";
import './uploadImage.scss';
const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
    const stylingInput = {
        display: 'none',
        height: '300px',
    }
  return (
    <div className='render-image'>
        
      <label htmlFor="message">Add image (Optional)</label>
      {selectedImage && (
        <div className='image-info'>
        <img alt="not fount" width={"360px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        {/* <Button title='Remove'  onClick={()=>setSelectedImage(null)}/> */}
            <div className="close-img" onClick={()=>setSelectedImage(null)}>
                <IoClose/>
            </div>
        </div>
      )}
      <br />
     
      <br /> 
        <div className="group-form myImage-upload" style={selectedImage ? stylingInput : null}>
        <div className="camera-icon">
                <BiCamera />
            </div>
            <input
                style={selectedImage ? stylingInput : null}
                type="file"
                name="myImage"
                onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]
                    
                );
                }}
            />
        </div>
    </div>
  );
};

export default UploadAndDisplayImage;