import { PickerOverlay } from "filestack-react";
import React from "react";


const MY_API_KEY = process.env.REACT_APP_API_KEY;

console.log(MY_API_KEY);

function FilePicker({ setShowPicker, setUploadDone, setPicturePath }) {
  return (
    <div>
    
    <PickerOverlay
    
    
      apikey={MY_API_KEY}
      onUploadDone={(res) => {
        setShowPicker(false);
        setUploadDone(true);
        setPicturePath(res.filesUploaded[0].url);
        
        console.log(res.filesUploaded[0].url);
      }}
      onError={(e) => console.log(MY_API_KEY)}
    />
    </div>
  );
}

export default FilePicker;
