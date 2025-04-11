import React from 'react'

function Button({
  children,
  type='button',
  bgColor='bg-yellow-800',
  className='',
  onClick,
  ...props
}) {
  return (
    <button type={type} className={`px-5 py-2.5 text-base font-medium rounded-lg h-10 text-white ${bgColor}  transition-all ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button