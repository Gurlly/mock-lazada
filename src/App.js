
import usePreline from './hooks/usePreline'
import useTimer from './hooks/useTimer';

import Nav from './components/Nav';
import Carousel from './components/Carousel';
import TopMallVoucher from './components/TopMallVoucher';
import ItemCard from './components/ItemCard';

import items from './data/data.json'

import appStore from './resources/appstore.png'
import googleStore from './resources/googlestore.png'

function App() {

  usePreline();
  const {
    hour,
    minute,
    second,
    formatTime
  } = useTimer()

  return (

    <div className="App w-full h-full flex flex-col">

      <header className='w-full bg-laz-light p-3 lg:py-5 sticky top-0 right-0 z-[100]'>
        <Nav />
      </header>

      <main className='flex-1 bg-zinc-50 p-3 lg:px-0 lg:py-5'>
        <Carousel/>
        <section className='lg:container lg:mx-auto mt-3 lg:mt-7 mb-10'>
          <TopMallVoucher />
        </section>

        <section className='lg:container lg:mx-auto mb-28'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl lg:text-2xl text-laz-header-two'>Flash Sale</h2>
            <div className='flex items-center gap-x-1.5'>
              <div className='px-2.5 py-2 border bg-laz-red text-laz-light font-semibold'>{formatTime(hour)}</div>
              :
              <div className='px-2.5 py-2 border bg-laz-red text-laz-light font-semibold'>{formatTime(minute)}</div>
              :
              <div className='px-2.5 py-2 border bg-laz-red text-laz-light font-semibold'>{formatTime(second)}</div>
            </div>
          </div>
          <hr className="border-laz-header-two my-2.5" />
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3'>
            {
              items.map (item => (
                item.id <= 6 ?  <ItemCard item={item} key={item.id}/> : ""
              ))
            }
          </div>
        </section>

        <section className='lg:container lg:mx-auto mb-14'>
          <h2 className='text-xl lg:text-2xl text-laz-header-two mb-5'>Shop Now</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 gap-y-5 lg:gap-y-8'>
            {
              items.map (item => (
                <ItemCard item={item} key={item.id}/>
              ))
            }
            <div className='col-span-full flex justify-center mt-5'>
              <button className='w-3/12 min-w-60 py-2 border border-cyan-600'>
                <p className='text-cyan-600'>Load More</p>
              </button>
            </div>
          </div>
        </section>

        <section className='lg:container lg:mx-auto'>
          <hr className="border-laz-gray mb-3" />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <img className='cursor-pointer' src='https://img.lazcdn.com/g/tps/images/ims-web/TB1HihoCy_1gK0jSZFqXXcpaXXa.jpg_2200x2200q80.jpg_.webp' alt="ads-1" />
            <img className='cursor-pointer' src='https://img.lazcdn.com/g/icms/images/ims-web/9993a552-26e3-4ba1-9d22-68da980db104.png_2200x2200q80.png_.webp' alt="ads-1" />
            <img className='cursor-pointer' src='https://img.lazcdn.com/g/icms/images/ims-web/acf6c9b1-2d35-426e-b4af-f6b56f61c209.jpg_2200x2200q80.jpg_.webp' alt="ads-1" />
          </div>
        </section>
      </main>

      <footer className='p-3 lg:px-0 lg:py-5 bg-zinc-50'>
        <section className='lg:container lg:mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-x-3 gap-y-7 pt-8'>
            <div className='text-laz-blue md:col-span-1 lg:col-span-2'>
              <h5 className='mb-2 text-lg font-semibold'>Customer Care</h5>
              <ul className='text-xs'>
                <li>
                  <a href='#sampleLink'>Help Center</a>
                </li>
                <li>
                  <a href='#sampleLink'>How to Buy</a>
                </li>
                <li>
                  <a href='#sampleLink'>Shipping & Delivery</a>
                </li>
                <li>
                  <a href='#sampleLink'>International Product Policy</a>
                </li>
                <li>
                  <a href='#sampleLink'>Return & Refund</a>
                </li>
                <li>
                  <a href='#sampleLink'>Quesiton?</a>
                </li>
                <li>
                  <a href='#sampleLink'>Contact Us</a>
                </li>
              </ul>
            </div>
            <div className='text-laz-blue md:col-span-1 lg:col-span-2'>
              <h5 className='mb-2 text-lg font-semibold'>Lazada</h5>
              <ul className='text-xs'>
                <li>
                  <a href='#sampleLink'>About Lazada</a>
                </li>
                <li>
                  <a href='#sampleLink'>Affliate Program</a>
                </li>
                <li>
                  <a href='#sampleLink'>Laffiliate Academy</a>
                </li>
                <li>
                  <a href='#sampleLink'>Careers</a>
                </li>
                <li>
                  <a href='#sampleLink'>Terms and Conditions</a>
                </li>
                <li>
                  <a href='#sampleLink'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#sampleLink'>Press & Media</a>
                </li>
                <li>
                  <a href='#sampleLink'>Itellectual Property Protection</a>
                </li>
              </ul>
            </div>
            <div className='grid grid-rows-2 col-span-2 md:col-span-1 lg:col-span-4'>
              <div className='flex gap-x-3 h-fit'>
                <img className='w-14 h-14' src="https://www.howwesell.asia/id/yukjualanonline/wp-content/uploads/2022/03/Lazada-Master-Brand-Assets-Full-Vertical-Lazada-Heart-Shape-Logo-Blue.png" alt="Lazada Logo" />
                <div className='h-fit'>
                  <h4 className='text-laz-orange'>Always better</h4>
                  <h5 className='text-[0.8rem] text-laz-blue'>Download the App</h5>
                </div>
              </div>
              <div className='flex gap-3 mt-3 md:mt-0'>
                <a 
                href="https://bit.ly/lazada-ios-app?spm=a2o4l.homepage.footer_top.app_store.29b8ca18CxwqiE"
                target="_blank"
                rel="noreferrer"
                >
                  <img 
                  className='w-40 h-12'
                  src={appStore} 
                  alt="download app store" />
                </a>
                <a 
                href="https://bit.ly/lazada-android-app?spm=a2o4l.homepage.footer_top.android.239eca18brJNsG"
                target="_blank"
                rel="noreferrer"
                >
                  <img 
                  className='w-40 h-12'
                  src={googleStore} 
                  alt="download google store" />
                </a>
              </div>
            </div>
        </section>
        <section className='lg:container lg:mx-auto grid grid-cols-1 md:grid-cols-3 items-center pt-10 lg:pt-16 pb-5 gap-8'>
            <div>
              <h3 className='text-laz-header mb-2'>Lazada Southeast Asia</h3>
              <div className='flex items-center gap-x-3'>
                {
                  [
                    "https://clipground.com/images/indonesia-flag-png-5.png", 
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/2800px-Flag_of_Malaysia.svg.png", 
                    "https://cdn.wallpapersafari.com/32/85/PlBqih.jpg", 
                    "https://th.bing.com/th/id/OIP.Ymtjhm-5MxX5-De2985weAHaE8?rs=1&pid=ImgDetMain",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png",
                    "https://th.bing.com/th/id/OIP.tVM5VTTIcoeuqLziZxDmGwHaE7?rs=1&pid=ImgDetMain"
                  ].map((url, index) => (
                    <Flags src={url} key={index}/>
                  ))
                }
              </div>
            </div>

            <div>
              <h3 className='text-laz-header mb-2'>Follow Us</h3>
              <div className='flex items-center gap-x-3'>
                {
                  [
                    {
                      src: "https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01Wdetn224xMIRNihao_!!6000000007457-2-tps-34-34.png",
                      link: "https://www.facebook.com/LazadaPhilippines?spm=a2o4l.homepage.sns.d_fbk.239eca18brJNsG"
                    },
                    {
                      src: "https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01D6oQr31GPG1ONK9jd_!!6000000000614-2-tps-34-34.png",
                      link: "https://www.linkedin.com/company/lazada/mycompany/?spm=a2o4l.homepage.sns.d_lnk.29b8ca18Qtm7XJ"
                    },
                    {
                      src: "https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01zt1zOu1zsFnzoIWje_!!6000000006769-2-tps-34-34.png",
                      link: "https://www.youtube.com/@LazadaPhilippines?spm=a2o4l.homepage.sns.d_ytb.29b8ca18Qtm7XJ"
                    },
                    {
                      src: "https://img.lazcdn.com/g/tps/imgextra/i4/O1CN011gka8L1E0PIZlHK7e_!!6000000000289-2-tps-34-34.png",
                      link: "https://www.instagram.com/lazadaph/?spm=a2o4l.homepage.sns.d_ins.29b8ca18Qtm7XJ"
                    },
                    {
                      src: "https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01bSHOIg1O2N9lO20XK_!!6000000001647-2-tps-34-34.png",
                      link: "https://twitter.com/LazadaPH?spm=a2o4l.homepage.sns.d_twr.29b8ca18Qtm7XJ"
                    },
                    {
                      src: "https://img.lazcdn.com/g/tps/imgextra/i4/O1CN0193C9ay1QIykTmUlwk_!!6000000001954-2-tps-34-34.png",
                      link: "https://www.tiktok.com/@lazadaph?spm=a2o4l.homepage.sns.d_tkk.29b8ca18Qtm7XJ"
                    },
                  ].map((social, index) => (
                    <Socials src={social.src} link={social.link} key={index}/>
                  ))
                }
              </div>
            </div>

            <div className='text-sm text-laz-gray'>
                <h5>© Lazada 2024</h5>
            </div>
        </section>  
      </footer>

    </div>
  );
}

const Flags = ({src}) => {
  return(
    <img 
    className='w-8 h-8 rounded-full border border-laz-gray object-cover object-center cursor-pointer'
    src={src}
    alt="flags"
    />
  )
}

const Socials = ({src, link}) => {
  return (
    <a
    className='w-8 h-8 rounded-full object-cover object-center cursor-pointer'
    href={link}
    target="_blank"
    rel="noreferrer"
    >
      <img
      src={src}
      alt="social media icon"
      />
    </a>
  )
}

export default App;
