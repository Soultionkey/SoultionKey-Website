import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import NavigationItems from '../Navigation/NavigationItems/NavigationitItems';
import './ExitPopUp.css';
const ExitPopUp = (props) => {
    let attachedclasses = ["ExitPopUp", "Close"];
    let bubbleclasses=["speech-bubble","Close"];
    let dataclasses=["exit-data-section","Close"];
    if (props.open) {
        attachedclasses = ["ExitPopUp", "Open"];
        bubbleclasses=["speech-bubble","Open"];
        dataclasses=["exit-data-section","Open"];

    }
    
    return (
        <div>
        <Backdrop show={props.open} clicked={props.closed} />
       
        <div className={attachedclasses.join(' ')}>           
        <div  className={bubbleclasses.join(' ')}>
        <div  className={dataclasses.join(' ')}></div> 
        </div>
      
        </div>
     
        </div>
    );

};

export default ExitPopUp;
