import React from 'react'

export default function Error({children} : {children:React.ReactNode}) {
  return (
    <div>
        <p className=' text-center bg-red-600 py-2 text-white font-bold mb-3'>
          {children}
        </p>
    </div>
  )
}
