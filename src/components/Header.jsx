import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom"
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import icon from '../assets/icons8-forum-24.png'
import sponsor1 from '../assets/icons8-arsenal-fc-48.png'
import sponsor2 from '../assets/icons8-liverpool-fc-48.png'
import sponsor3 from '../assets/icons8-chelsea-fc-48.png'
import sponsor4 from '../assets/icons8-real-madrid-48.png'
import mobileIcon from '../assets/icons8-android-phone-48.png'
import homeIcon from '../assets/icons8-home-50.png'
import bdImg from '../assets/BD.png'

const sponsorLogos = [sponsor1, sponsor2, sponsor3, sponsor4]

const Header = () => {
    const [currentTime, setCurrentTime] = useState('')
    const [showLangMenu, setShowLangMenu] = useState(false)
    const [currentPair, setCurrentPair] = useState(0)

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            
            const indiaTime = now.toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                timeZone: 'Asia/Kolkata',
              });

            const offsetMinutes = -now.getTimezoneOffset()
            const offsetHours = Math.floor(offsetMinutes / 60)
            const offsetRemainder = Math.abs(offsetMinutes % 60)
            const gmtOffset = `GMT${offsetHours >= 0 ? '+' : '-'}${Math.abs(offsetHours)}:${offsetRemainder.toString().padStart(2, '0')}`

            setCurrentTime(`${indiaTime} ${gmtOffset}`)
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    const toggleLangMenu = () => setShowLangMenu(prev => !prev)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPair((prev) => (prev + 1) % 2)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900">

        <div className="top-bar bg-neutral-800 text-gray-300 flex items-center justify-center">
            <div className="flex justify-between items-center h-8 w-[75rem]">
                <div className="flex items-center gap-4 text-base h-full">
                    <span>{currentTime}</span>
                    <div className='flex align-center justify-center bg-gray-500 h-full px-2'>
                        <img src={bdImg} alt="" className='h-full p-1'/>
                        <button onClick={toggleLangMenu} className='bg-gray-500 h-full px-2'>English</button>
                    </div>
                </div>
                <div>
                    <button className="flex items-center gap-1">
                        <img src={icon} alt="forum" className="size-4" />
                        <span className="text-lg">Forums</span>
                    </button>
                </div>
            </div>
        </div>
        {showLangMenu && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white text-black px-6 py-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg mb-2">Choose Language</p>
                <div className="flex flex-col gap-2">
                <button className="hover:bg-gray-200 p-2 rounded">English</button>
                <button className="hover:bg-gray-200 p-2 rounded">Hindi</button>
              </div>
            </div>
          </div>
        )}

        <div className='bg-gradient-to-t from-blue-900 to-sky-600 py-2 flex items-center justify-center'>
            <div className='flex justify-between items-center w-[75rem]'>
                <div className="flex items-center gap-10">
                    <img 
                    src="https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/f7b28f7c-6c1a-437d-2727-f94e0fefca00/public" 
                    alt="logo" 
                    className='flex items-center'/>

                    <div className="w-64 overflow-hidden flex align-right">
                        <div className="flex transition-all duration-1000 ease-in-out">
                            <img 
                            src={sponsorLogos[currentPair * 2]} 
                            alt="Sponsor 1" 
                            className="object-fill" />
                            <img src={sponsorLogos[currentPair * 2 + 1]} 
                            alt="Sponsor 2" 
                            className="object-fill" />
                        </div>
                    </div>
                </div>

                <ul className='flex gap-4'>
                    <li>
                        <Link to="/login">
                            <button className="text-white px-4 py-2 hover:border rounded">Login</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            <button className="text-white px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-500">Signup</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>


        {/* <div className=' h-10 bg-gray-800 flex items-center justify-center'>
            <ul className="flex text-white items-center justify-between h-full w-[75rem] ">
                <li className='flex items-center gap-4 h-full'>
                    <button className="glow-border">
                        <a href="/">
                        <img src={homeIcon} alt="" className='h-6' /></a>
                    </button>
                    <button className="glow-border">
                        <a href="/Mappdownload"><img src={mobileIcon} alt="" className='h-6' /></a>
                    </button>
                </li>

                <li className="grid grid-cols-8 grid-rows-1 items-center justify-between justify-items-stretch divide-x divide-gray-600 h-full w-full">
                    <li className="relative group h-full">
                        <a href="#" className="hover:text-blue-400 flex items-center gap-1 glow-border h-full w-full justify-center">
                        Sports <i className="icon-angle-down"></i>
                        </a>
                        <div className="absolute hidden group-hover:flex flex-col bg-gray-900 shadow-lg p-2 z-50 w-48">
                        <a href="#" className="hover:bg-gray-700 px-4 py-2">Exchange</a>
                        <a href="#" className="hover:bg-gray-700 px-4 py-2">Sportsbook</a>
                        <a href="#" className="hover:bg-gray-700 px-4 py-2">Virtual</a>
                        <a href="#" className="hover:bg-gray-700 px-4 py-2">Horse Racing</a>
                        </div>
                    </li>

                    <li className='flex items-center justify-center h-full'>
                        <a href="/games/LIVE/ALL" className="hover:text-blue-400 glow-border h-full w-full flex items-center justify-center">Casino</a>
                    </li>

                    <li className='flex items-center justify-center h-full'>
                        <a href="/games/SLOT/ALL" className="hover:text-blue-400 glow-border h-full w-full flex items-center justify-center">Slot</a>
                    </li>

                    <li className='flex items-center justify-center h-full'>
                        <a href="/games/TABLE/ALL" className="hover:text-blue-400 glow-border h-full w-full flex items-center justify-center">Table</a>
                    </li>

                    <li className='flex items-center justify-center h-full'>
                        <a href="/games/FH/ALL" className="hover:text-blue-400 glow-border h-full w-full flex items-center justify-center">Fishing</a>
                    </li>

                    <li className='flex items-center justify-center h-full'>
                        <a href="/promotions" className="hover:text-blue-400 glow-border h-full w-full flex items-center justify-center">Promotions</a>
                    </li>

                    <li className='flex items-center justify-center h-full'>
                        <a href="/vip" className="hover:text-blue-400 glow-border h-full w-full flex items-center justify-center">VIP</a>
                    </li>

                    <li className='flex items-center justify-center h-full'>
                        <a href="/referral" className="hover:text-blue-400 glow-border h-full w-full flex items-center justify-center">Referral</a>
                    </li>
                </li>

            </ul>

        </div> */}



            {/* Navigation with reduced borders */}
<div className='h-10 bg-gray-800 flex items-center justify-center'>
  <ul className="flex text-white items-center justify-between h-full w-[75rem]">
    <li className='flex items-center gap-4 h-full'>
      <button className="glow-border relative h-full flex items-center">
        <div className="px-2 h-[80%] flex items-center"> {/* Inner container with reduced height */}
          <a href="/">
            <img src={homeIcon} alt="" className='h-6' />
          </a>
        </div>
      </button>
      <button className="glow-border relative h-full flex items-center">
        <div className="px-2 h-[80%] flex items-center"> {/* Inner container with reduced height */}
          <a href="/Mappdownload">
            <img src={mobileIcon} alt="" className='h-6' />
          </a>
        </div>
      </button>
    </li>

    <li className="grid grid-cols-8 grid-rows-1 items-center justify-between justify-items-stretch divide-x divide-gray-600 h-full w-full">
      <li className="relative group h-full">
        <div className="glow-border h-full w-full flex items-center justify-center">
          <div className="h-[80%] flex items-center justify-center w-full"> {/* Inner container with reduced height */}
            <a href="#" className="hover:text-blue-400 flex items-center gap-1">
              Sports <i className="icon-angle-down"></i>
            </a>
          </div>
        </div>
        <div className="absolute hidden group-hover:flex flex-col bg-gray-900 shadow-lg p-2 z-50 w-48">
          <a href="#" className="hover:bg-gray-700 px-4 py-2">Exchange</a>
          <a href="#" className="hover:bg-gray-700 px-4 py-2">Sportsbook</a>
          <a href="#" className="hover:bg-gray-700 px-4 py-2">Virtual</a>
          <a href="#" className="hover:bg-gray-700 px-4 py-2">Horse Racing</a>
        </div>
      </li>

      <li className='flex items-center justify-center h-full'>
        <div className="glow-border h-full w-full flex items-center justify-center">
          <div className="h-[80%] flex items-center justify-center w-full"> {/* Inner container with reduced height */}
            <a href="/games/LIVE/ALL" className="hover:text-blue-400">Casino</a>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-center h-full'>
        <div className="glow-border h-full w-full flex items-center justify-center">
          <div className="h-[80%] flex items-center justify-center w-full"> {/* Inner container with reduced height */}
            <a href="/games/SLOT/ALL" className="hover:text-blue-400">Slot</a>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-center h-full'>
        <div className="glow-border h-full w-full flex items-center justify-center">
          <div className="h-[80%] flex items-center justify-center w-full"> {/* Inner container with reduced height */}
            <a href="/games/TABLE/ALL" className="hover:text-blue-400">Table</a>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-center h-full'>
        <div className="glow-border h-full w-full flex items-center justify-center">
          <div className="h-[80%] flex items-center justify-center w-full"> {/* Inner container with reduced height */}
            <a href="/games/FH/ALL" className="hover:text-blue-400">Fishing</a>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-center h-full'>
        <div className="glow-border h-full w-full flex items-center justify-center">
          <div className="h-[80%] flex items-center justify-center w-full"> {/* Inner container with reduced height */}
            <a href="/promotions" className="hover:text-blue-400">Promotions</a>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-center h-full'>
        <div className="glow-border h-full w-full flex items-center justify-center">
          <div className="h-[80%] flex items-center justify-center w-full"> {/* Inner container with reduced height */}
            <a href="/vip" className="hover:text-blue-400">VIP</a>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-center h-full'>
        <div className="glow-border h-full w-full flex items-center justify-center">
          <div className="h-[80%] flex items-center justify-center w-full"> {/* Inner container with reduced height */}
            <a href="/referral" className="hover:text-blue-400">Referral</a>
          </div>
        </div>
      </li>
    </li>
  </ul>
</div>

        

    </header>
  )
}

export default Header