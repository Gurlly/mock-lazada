import React from 'react'

const Carousel = () => {
  return (
    <>
        <section className='lg:container lg:mx-auto'>
            <div data-hs-carousel='{
                "loadingClasses": "opacity-0",
                "isAutoPlay": true
            }' className="relative">
                <div className="hs-carousel relative overflow-hidden w-full min-h-96 xl:h-[33rem] bg-white">
                    {/** Items */}
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100">
                                <img className='w-full h-full object-fill' src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01EOJVA71yVz48SmCYC_!!6000000006585-0-tps-1976-688.jpg_2200x2200q80.jpg_.webp"  alt="item-1" />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                        <div className="flex justify-center h-full bg-gray-100">
                                <img className='w-full h-full object-fill' src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN0149qk7q1mVjSSdlQab_!!6000000004960-0-tps-1976-688.jpg_2200x2200q80.jpg_.webp"  alt="item-2" />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                        <div className="flex justify-center h-full bg-gray-100">
                                <img className='w-full h-full object-fill' src="https://img.lazcdn.com/g/tps/imgextra/i1/O1CN01UUBP7Q1QWildIPEeg_!!6000000001984-0-tps-1976-688.jpg_2200x2200q80.jpg_.webp"  alt="item-3" />
                            </div>
                        </div>
                    </div>
                </div>
                {/** Buttons */}
                <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg">
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                    <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    </span>
                </button>
            </div>
        </section>
    </>
  )
}

export default Carousel