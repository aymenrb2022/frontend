import React from 'react'

const Custominput = (props) => {
  const {type , placeholder , classname,value,onChange,onBlur,name} = props;
  return (
    <div>
     <input
      type={type}
      name={name} 
     className={`form-control ${classname} `}
     placeholder={placeholder} 
     value={value}
     onChange={onChange}
     onBlur={onBlur}
     />
     
    </div>
  )
}

export default Custominput