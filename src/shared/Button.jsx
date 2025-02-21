import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
    const {title,color,path} = props;
    const navigate = useNavigate();
  return (
    <button className={`border-[1px] border-${color}-700 w-fit rounded-md text-${color}-700 px-5 py-2 hover:bg-${color}-700 hover:text-white `} onClick={()=>(navigate(path))}>
        {title}
    </button>
  )
}

export default Button
