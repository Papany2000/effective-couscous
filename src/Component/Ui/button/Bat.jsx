import React  from "react";
 import style from './Bat.module.css'

const Bat  = ({children, ...props}) => {
    
    return (
       <button {...props} className = {style.Btn}>  {/*children из Аpp в пропс а в компоненте из пропсов деструктуризацией {}*/}
           {children}
       </button>
      );
}
export default Bat