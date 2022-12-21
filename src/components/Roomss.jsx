import React from 'react'

const Roomss = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100  m-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className=' lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>“We fell in love with Chablé’s signature property in the Yúcatan, but this beach enclave on the Riviera Maya has stirred wanderlust within us,” says Marchant.</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className=' object-cover row-span-2 w-[400px] h-[400px]' src="https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <img className=' object-cover row-span-2 w-[400px] h-[400px]' src="https://images.pexels.com/photos/6969824/pexels-photo-6969824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
     


        </div>
    </div>
  )
}

export default Roomss