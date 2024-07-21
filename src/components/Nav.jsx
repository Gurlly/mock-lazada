
import { useCart } from "../hooks/useCart";

import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

const Nav = () => {

    const {
        cartItems, 
        clearCart
    } = useCart();

  return (
    <>
        <nav className='lg:container lg:mx-auto flex justify-between items-center'>
            <a href="/"> 
                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB19SB7aMFY.1VjSZFnXXcFHXXa.png" alt="Lazada Logo" className='w-32 h-auto' /> 
            </a>
            <div className="flex items-center gap-x-2 lg:gap-x-5">
                <button 
                className="p-1.5 bg-laz-orange rounded-md text-laz-light font-semibold"
                data-hs-overlay="#search-modal"
                >
                    <IoSearch  className="text-xl lg:text-2xl"/>
                </button>
                <div className="hs-dropdown [--trigger:hover] relative inline-flex">
                    <button 
                    id="hs-dropdown-hover-event"
                    type="button" 
                    className="relative inline-flex justify-center items-center p-2 rounded-md text-laz-blue">
                        <LuShoppingCart className="text-2xl lg:text-3xl"/>
                        <span className="absolute top-2.5 end-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white">{cartItems.length}</span>
                    </button>

                    <div 
                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" 
                    aria-labelledby="hs-dropdown-hover-event">
                        {
                            cartItems.map(item => (
                                <a 
                                className="flex items-center text-sm mb-2 py-2 px-3" 
                                href="/"
                                key={item.id}>
                                    <div className="flex gap-x-3">
                                        <img src={item.src} alt={`cart item ${item.id}`} className="w-20 h-auto object-cover object-center" />        
                                        <div className="flex flex-col justify-around">
                                            <h2 className="text-laz-header font-semibold">{item.name}</h2>
                                            <p className="text-laz-orange font-semibold">&#8369; {item.price}</p>
                                        </div>                               
                                    </div>
                                </a>
                            ))
                        }
                        <div className={`mt-5 py-2 px-3 items-center justify-end gap-x-3 ${cartItems.length === 0 ? "hidden" : "flex"}`}>
                            <button className="w-28 py-1 border rounded-lg border-laz-gray font-semibold text-laz-light bg-gradient-to-r from-laz-red via-laz-orange to-laz-banner">
                                Checkout
                            </button>
                            <button 
                            className="w-28 py-1 border rounded-lg border-laz-gray bg-laz-gray font-semibold text-laz-light"
                            onClick={() => clearCart()}>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
        
                <div id="search-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                        <div className="w-full flex flex-col bg-white rounded-xl pointer-events-auto">
                            <div className="flex items-center justify-between py-3 px-4">
                                <h3 className="font-semibold">
                                    Search Item
                                </h3>
                                <button 
                                type="button" 
                                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" 
                                data-hs-overlay="#search-modal">
                                    <span className="sr-only">Close</span>
                                    <IoMdClose size={20}/>
                                </button>
                            </div>
                            <div className="flex items-center py-5 px-4">
                                <input 
                                type="text" 
                                className="p-2 border border-r-0 w-full border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
                                placeholder="Search..." 
                                />
                                <button 
                                className="p-2 bg-laz-orange border border-l-0 border-gray-300 text-laz-light font-semibold"
                                >
                                    <IoSearch  size={20}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </nav>
    </>
  )
}

export default Nav