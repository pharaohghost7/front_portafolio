import React from 'react'
import fundacionLogo from '/fundacion.png'


export const Login = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
        
        <a href="#" target="_blank">
          <img src={fundacionLogo} 
          className="object-center h-[20em] p-6 hover:shadow-xl shadow-(color: #10433B) " 
          alt="Fundación logo" />
        </a>
      </div>
      <h1 className='text-center mt-4 text-5xl font-extrabold text-[#10433B]'>Bienvenido a Fuindein</h1>
    </>
      
  )
}
