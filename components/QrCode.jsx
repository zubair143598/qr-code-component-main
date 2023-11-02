import React from 'react'

const QrCode = () => {
  return (
    <div 
    className="flex bg-blue-100 h-screen items-center justify-center"
    >
        <div className='p-3 w-[300px] text-center bg-white rounded-[15px]'>
            <img src="./assets/image-qr-code.png" className='w-[290px] rounded-[15px]' alt="" />
            <p className='mt-4 text-[21px] font-bold '>Improve your front-end skills by building projects</p>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skill to the next level</p>
        </div>
    </div>
  )
}

export default QrCode