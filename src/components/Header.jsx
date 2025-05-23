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
import exchangeImg from '../assets/navbar/exchange_inr_01.png'
import sportsImg from '../assets/navbar/i-sports_inr_01.png'
import virtualImg from '../assets/navbar/virtual_inr_01.png'
import horsebookImg from '../assets/navbar/horsebook_inr_01.png'

import '../assets/Header.css'


const sponsorLogos = [sponsor1, sponsor2, sponsor3, sponsor4]

const Header = () => {
    const [currentTime, setCurrentTime] = useState('')
    const [showLangMenu, setShowLangMenu] = useState(false)
    const [currentPair, setCurrentPair] = useState(0)
    const [showSportsMenu, setShowSportsMenu] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

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
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const transformValue = `translateX(-${currentPair * 100}%)`

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-neutral-900">

        <div className="hidden sm:flex top-bar bg-neutral-800 text-gray-300 items-center justify-center">
            <div className="flex justify-between items-center h-8 w-full max-w-[75rem] px-4">
                <div className="flex items-center gap-4 text-base h-full">
                    <span className="hidden sm:inline">{currentTime}</span>
                    <div className='flex align-center justify-center bg-gray-500 h-full px-2'>
                        <img src={bdImg} alt="" className='h-full p-1'/>
                        <button onClick={toggleLangMenu} className='bg-gray-500 h-full px-2'>English</button>
                    </div>
                </div>
                <div>
                    <button className="flex items-center gap-1">
                        <img src={icon} alt="forum" className="size-4" />
                        <span className="text-lg hidden sm:inline">Forums</span>
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

        <div className='bg-gradient-to-t from-blue-900 to-sky-600 py-2 flex items-center justify-center border-b-[1px] border-header-border-blue'>
            <div className='flex justify-between items-center w-full max-w-[75rem] px-4'>
                <div className="flex items-center gap-2 sm:gap-10">
                    <img 
                        src="https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/f7b28f7c-6c1a-437d-2727-f94e0fefca00/public" 
                        alt="logo" 
                        className='h-8 sm:h-auto max-w-[120px] sm:max-w-none'
                    />

                    <div className="w-12 sm:w-24 overflow-hidden">
                        <div 
                          className="flex transition-transform duration-1000 ease-in-out" 
                          style={{ transform: transformValue }}
                        >
                          <img
                            src={sponsorLogos[0]}
                            alt="Sponsor 1"
                            className=" object-fill flex-shrink-0" 
                          />
                          <img 
                             src={sponsorLogos[1]}
                            alt="Sponsor 2"
                            className=" object-fill flex-shrink-0" 
                          />
                          <img
                            src={sponsorLogos[2]}
                            alt="Sponsor 3"
                            className=" object-fill flex-shrink-0" 
                          />
                          <img 
                            src={sponsorLogos[3]}
                            alt="Sponsor 4"
                            className=" object-fill flex-shrink-0" 
                          />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button 
                        className={`sm:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 ${showMobileMenu ? 'active' : ''}`}
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${showMobileMenu ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${showMobileMenu ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${showMobileMenu ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                </div>

                <ul className='hidden sm:flex gap-2 sm:gap-4'>
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

        <div className={`sm:hidden fixed inset-0 bg-neutral-900/95 z-40 transition-transform duration-300 overflow-y-auto pb-20 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="pt-20 px-4 pb-4">
                <ul className="text-white space-y-6">
                    <li><a href="/" className="flex items-center gap-3 text-lg"><img src={homeIcon} alt="" className='h-6' /> Home</a></li>
                    <li><a href="/Mappdownload" className="flex items-center gap-3 text-lg"><img src={mobileIcon} alt="" className='h-6' /> Mobile App</a></li>
                    <li><a href="#" className="block py-2 text-lg">Sports</a></li>
                    <li><a href="/games/LIVE/ALL" className="block py-2 text-lg">Casino</a></li>
                    <li><a href="/games/SLOT/ALL" className="block py-2 text-lg">Slot</a></li>
                    <li><a href="/games/TABLE/ALL" className="block py-2 text-lg">Table</a></li>
                    <li><a href="/games/FH/ALL" className="block py-2 text-lg">Fishing</a></li>
                    <li><a href="/promotions" className="block py-2 text-lg">Promotions</a></li>
                    <li><a href="/vip" className="block py-2 text-lg">VIP</a></li>
                    <li><a href="/referral" className="block py-2 text-lg">Referral</a></li>
                </ul>
            </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-gray-800 p-2 flex justify-center gap-2 sm:hidden z-50">
            <Link to="/login" className="w-1/2 max-w-[140px]">
                <button className="w-full text-white px-3 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors text-sm">
                    Login
                </button>
            </Link>
            <Link to="/signup" className="w-1/2 max-w-[140px]">
                <button className="w-full text-black px-3 py-2 rounded bg-yellow-500 hover:bg-yellow-400 transition-colors text-sm">
                    Signup
                </button>
            </Link>
        </div>

        <div className='hidden sm:flex h-10 bg-head-grey items-center justify-center relative'>
          <ul className="flex text-white items-center justify-between h-full w-full max-w-[75rem] px-4">
            <li className='flex items-center gap-2 sm:gap-4 h-full'>
              <button className="glow-border relative h-full flex items-center">
                <div className="px-2 h-[80%] flex items-center"> 
                  <a href="/">
                    <img src={homeIcon} alt="" className='h-6' />
                  </a>
                </div>
              </button>
              <button className="glow-border relative h-full flex items-center">
                <div className="px-2 h-[80%] flex items-center"> 
                  <a href="/Mappdownload">
                    <img src={mobileIcon} alt="" className='h-6' />
                  </a>
                </div>
              </button>
            </li>

            <li className="text-xs sm:text-sm grid grid-cols-4 sm:grid-cols-8 grid-rows-2 sm:grid-rows-1 items-center justify-between justify-items-stretch h-full w-full">
              <li className="relative h-full">
                <div className="glow-border h-full w-full flex items-center justify-center" 
                onMouseEnter={() => setShowSportsMenu(true)}
                    onMouseLeave={() => setShowSportsMenu(false)}>
                  <div className="h-[30%] flex items-center justify-center w-full border-l border-r border-gray-300 border-solid">
                    <a 
                      href="#" 
                      className="hover:text-blue-400 flex items-center gap-1"
                    >
                      Sports <i className="icon-angle-down"></i>
                    </a>
                  </div>
                </div>
              </li>

              <li className='flex items-center justify-center h-full'>
                <div className="glow-border h-full w-full flex items-center justify-center">
                  <div className="h-[30%] flex items-center justify-center w-full border-l border-r border-gray-300 border-solid"> {/* Inner container with reduced height */}
                    <a href="/games/LIVE/ALL" className="hover:text-blue-400">Casino</a>
                  </div>
                </div>
              </li>

              <li className='flex items-center justify-center h-full'>
                <div className="glow-border h-full w-full flex items-center justify-center">
                  <div className="h-[30%] flex items-center justify-center w-full border-l border-r border-gray-300 border-solid"> {/* Inner container with reduced height */}
                    <a href="/games/SLOT/ALL" className="hover:text-blue-400">Slot</a>
                  </div>
                </div>
              </li>

              <li className='flex items-center justify-center h-full'>
                <div className="glow-border h-full w-full flex items-center justify-center">
                  <div className="h-[30%] flex items-center justify-center w-full border-l border-r border-gray-300 border-solid"> {/* Inner container with reduced height */}
                    <a href="/games/TABLE/ALL" className="hover:text-blue-400">Table</a>
                  </div>
                </div>
              </li>

              <li className='flex items-center justify-center h-full'>
                <div className="glow-border h-full w-full flex items-center justify-center">
                  <div className="h-[30%] flex items-center justify-center w-full border-l border-r border-gray-300 border-solid"> {/* Inner container with reduced height */}
                    <a href="/games/FH/ALL" className="hover:text-blue-400">Fishing</a>
                  </div>
                </div>
              </li>

              <li className='flex items-center justify-center h-full'>
                <div className="glow-border h-full w-full flex items-center justify-center">
                  <div className="h-[30%] flex items-center justify-center w-full border-l border-r border-gray-300 border-solid"> {/* Inner container with reduced height */}
                    <a href="/promotions" className="hover:text-blue-400">Promotions</a>
                  </div>
                </div>
              </li>

              <li className='flex items-center justify-center h-full'>
                <div className="glow-border h-full w-full flex items-center justify-center">
                  <div className="h-[30%] flex items-center justify-center w-full border-l border-r border-gray-300 border-solid"> {/* Inner container with reduced height */}
                    <a href="/vip" className="hover:text-blue-400">VIP</a>
                  </div>
                </div>
              </li>

              <li className='flex items-center justify-center h-full'>
                <div className="glow-border h-full w-full flex items-center justify-center">
                  <div className="h-[30%] flex items-center justify-center w-full border-l border-r border-gray-300 border-solid"> {/* Inner container with reduced height */}
                    <a href="/referral" className="hover:text-blue-400">Referral</a>
                  </div>
                </div>
              </li>
            </li>
          </ul>
          
          {showSportsMenu && (
            <div 
              className="absolute left-0 top-full bg-footer-grey shadow-lg w-full z-50"
              onMouseEnter={() => setShowSportsMenu(true)}
              onMouseLeave={() => setShowSportsMenu(false)}
            >
              <div className="absolute bottom-0 left-0 w-full bg-nav-gray z-0 h-10"></div>
              <div className="flex justify-center w-full overflow-x-auto">
                <div className="flex justify-between min-w-[75rem] px-4 z-10">

                  <div className="hover:bg-gradient-to-b hover:from-yellow-400/30 hover:to-footer-grey  pt-2 rounded transition-colors flex flex-col justify-between card-nav">
                    <span className="text-white font-medium text-lg block mb-2 pl-2 border-l-2 border-yellow-400">  Exchange</span>
                    <a href="#" className="flex flex-col justify-between">
                      <img src={exchangeImg} alt="Exchange" className="w-64 h-64  object-contain" />
                      <a className="bg-nav-gray text-white w-[120%] ml-[-10%] mr-[-10%] hover:bg-blue-300 text-center w- flex z-70 play-button h-10 items-center justify-center "
                      style={{
                        clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)"
                      }}
                      >Play Now</a>
                    </a>
                  </div>

                  <div className="hover:bg-gradient-to-b hover:from-yellow-400/30 hover:to-footer-grey pt-2 rounded transition-colors flex flex-col justify-between card-nav">
                    <span className="text-white font-medium text-lg block mb-2 pl-2 border-l-2 border-yellow-400">  Sportsbook</span>
                    <a href="#" className="flex flex-col justify-between">
                      <img src={sportsImg} alt="Sportsbook" className="w-64 h-64  object-contain" />
                      <a className="bg-nav-gray text-white w-[120%] ml-[-10%] mr-[-10%] hover:bg-blue-300 text-center flex z-70 play-button h-10 items-center justify-center "
                      style={{
                        clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)"
                      }}
                      >Play Now</a>
                    </a>
                  </div>

                  <div className="hover:bg-gradient-to-b hover:from-yellow-400/30 hover:to-footer-grey pt-2 rounded transition-colors flex flex-col justify-between card-nav">
                    <span className="text-white font-medium text-lg block mb-2 pl-2 border-l-2 border-yellow-400">  Virtual</span>
                    <a href="#" className="flex flex-col justify-between">
                      <img src={virtualImg} alt="Virtual" className="w-64 h-64  object-contain" />
                      <a className="bg-nav-gray text-white w-[120%] ml-[-10%] mr-[-10%] hover:bg-blue-300 text-center flex z-70 play-button h-10 items-center justify-center "
                      style={{
                        clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)"
                      }}
                      >Play Now</a>
                    </a>
                  </div>

                  <div className="hover:bg-gradient-to-b hover:from-yellow-400/30 hover:to-footer-grey pt-2 rounded transition-colors flex flex-col justify-between card-nav">
                    <span className="text-white font-medium text-lg block pl-2 border-l-2 border-yellow-400">  Horse Racing</span>
                    <a href="#" className="flex flex-col justify-between">
                      <img src={horsebookImg} alt="Horse Racing" className="w-64 h-64  object-contain" />
                      <a className="bg-nav-gray text-white w-[120%] ml-[-10%] mr-[-10%] hover:bg-blue-300 text-center flex z-70 play-button h-10 items-center justify-center "
                      style={{
                        clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)"
                      }}
                      >Play Now</a>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
    </header>
  )
}

export default Header
