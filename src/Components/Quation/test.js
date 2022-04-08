import {useState} from 'react'
export default function Mytest() {


    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
  
    const handleOnChange = () => {
        setIsChecked(!isChecked)
    };
    const handleOnChange2 = () => {
        setIsChecked2(!isChecked2)
    };
    const handleOnChange3 = () => {
        setIsChecked3(!isChecked3)
    };
  
    return (
      <div className="App">
        Select your pizza topping:
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked}
            onChange={handleOnChange}
          />
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked2}
            onChange={handleOnChange2}
          />
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked3}
            onChange={handleOnChange3}
          />
          Paneer
        </div>
        <div className="result">
          Above checkbox is {(isChecked && isChecked2 && isChecked3)  ? "checked" : "un-checked"}.
        </div>
      </div>
    );
  }