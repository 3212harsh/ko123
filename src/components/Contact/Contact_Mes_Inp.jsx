import React from 'react'

const Contact_Mes_Inp = (props) => {
    const { value, setvalue, type } = props;
    
    return (
        type === 'textarea' ? (
            <textarea 
                value={value} 
                onChange={(e) => setvalue(e.target.value)} 
                className='w-full h-24 border-[1px] border-zinc-300'
            />
        ) : (
            <input 
                type={type ? type : "text"} 
                value={value} 
                onChange={(e) => setvalue(e.target.value)} 
                className='w-full h-12 border-[1px] border-zinc-300' 
            />
        )
    );
}

export default Contact_Mes_Inp;
