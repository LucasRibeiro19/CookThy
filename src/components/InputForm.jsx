import React from 'react'

function InputForm({desc, value, onChange, type, required, label}) {
  return (
    <div style={{display:'flex', justifyContent: 'space-between'}}>
        <label style={{marginRight: '15px'}} htmlFor={desc}>{label}</label>
        <input
        type={type}
        id={desc}
        value={value}
        onChange={onChange}
        name={desc}
        required={required}
        style={{marginBottom: '15px'}}
        />
    </div>
  )
}

export default InputForm