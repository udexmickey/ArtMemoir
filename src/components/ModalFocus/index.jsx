import React, { useState} from 'react';
 import './focustest.scss'

function ModalFocus() {

const [valueData, setValueData] = useState('selete');
const [dynamicClasses, setDynamicClasses] = React.useState([
    "dynamicClass1", "dynamicClass2"
]);

  const onClickHandler = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
        const particularValue = event.target.options[selectedIndex].getAttribute('data-key')
        const tester = event.target.options[selectedIndex]
        // document.getElementsByClassName("demo").innerHTML = x;

        console.log(selectedIndex)
        console.log(tester)

        if (selectedIndex == 1 ) {
            // event.target.options[selectedIndex].style.color = 'blue';
                setDynamicClasses([...dynamicClasses, newClass])
            return setValueData(particularValue)
        }
        if (selectedIndex == 2 ) {
            event.target.options[selectedIndex].style.color = 'yellow !important';
            return setValueData(particularValue)
        }
        // else{
        //     return setValueData(particularValue)
        // }
  }
  return (
    <div>
      <select onChange = {onClickHandler}>
       <option key=" '' " data-key=" ">Select </option> 
       <option key="1" data-key="1">One</option> 
       <option key="2" data-key="2">Two</option>             
       <option key="3" data-key="3">Three</option>             
       <option key="4"  data-key="4">Four</option>             
    </select> 

        <div className='want'>
            <div className="">
                Display Value
                {/* <h1 className={ valueData ? `demo` : `test`} >{valueData}</h1> */}
            </div>
        </div>
     </div>
  );
};
 
export default ModalFocus;
