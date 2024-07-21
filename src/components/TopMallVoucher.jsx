import React from 'react'

const items = [
    {
        id: "topup",
        src: "https://img.lazcdn.com/us/domino/746c05bc-701c-4072-8f88-d0e92f49c3d1_MY-240-36.jpg_500x500q80.jpg_.webp",
        text: "Top up & pay bills"
    },
    {
        id: "lazmall",
        src: "https://img.lazcdn.com/g/icms/images/ims-web/b63063bc-be69-43a4-b839-574e5702bab1.png_500x500q80.png_.webp",
        text: "Shop best brands"
    },
    {
        id: "vouchers",
        src: "https://img.lazcdn.com/us/domino/482c671f-dbe9-448c-ba15-56156d2aa71c_MY-240-36.png_500x500q80.png_.webp",
        text: "Collect and redeem"
    }
]

const TopMallVoucher = () => {
  return (
    <>
        <div className='grid grid-cols-3 gap-x-2 md:gap-x-4 lg:gap-x-6'>
            {
                items.map(item => (
                    <div key={item.id} className='flex flex-col p-3 md:px-5 md:py-3 xl:px-7 border rounded-md border-laz-gray bg-white'>
                        <img src={item.src} alt={item.id} className='w-full max-w-40 h-auto object-contain object-center mb-1.5'/>
                        <p className='text-xs text-laz-gray hover:text-gray-500 transition-colors ease-linear delay-75'>{item.text}</p>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default TopMallVoucher