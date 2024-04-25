import React from 'react'

const Heading = ({children}) => {
  return (
    <div className="bg-blue w-full py-10">
        <div className="text-center mx-auto">
          <p className="text-white font-bold text-3xl">{children}</p>
        </div>
      </div>
  )
}

export default Heading
