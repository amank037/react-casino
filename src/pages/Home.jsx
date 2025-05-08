import React, { useState, useEffect, useRef } from 'react'
import public1 from '../assets/home/public.png'
import public2 from '../assets/home/public2.jpeg'
import public3 from '../assets/home/public3.png'
import public4 from '../assets/home/public4.png'

const Home = () => {
  const heroImages = [
    public1, 
    public2, 
    public3, 
    public4
  ]

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const heroContainerRef = useRef(null)

  // Hero image scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(timer) 
  }, [heroImages.length])

  const secondScrollerImages1 = [
    'https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/9e13aac0-d12f-4fb9-6b0b-803f29f25300/public',
    'https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/233feb73-462f-4e69-2460-cb119e7f2800/public',
  ]

  const secondScrollerImages2 = [
    'https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/af23534c-2be7-4139-a6de-251458387e00/public',
    'https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/c3274d17-368c-4675-0ba9-5fe834ec8c00/public',
  ]

  const [currentSecondScrollerIndex1, setCurrentSecondScrollerIndex1] = useState(0)
  const [currentSecondScrollerIndex2, setCurrentSecondScrollerIndex2] = useState(0)
  const scroller1Ref = useRef(null)
  const scroller2Ref = useRef(null)

  // Scroller 1 effect
  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrentSecondScrollerIndex1((prevIndex) => (prevIndex + 1) % secondScrollerImages1.length)
    }, 2000)
    return () => clearInterval(timer1)
  }, [secondScrollerImages1.length])

  // Scroller 2 effect
  useEffect(() => {
    const timer2 = setInterval(() => {
      setCurrentSecondScrollerIndex2((prevIndex) => (prevIndex + 1) % secondScrollerImages2.length)
    }, 2000)
    return () => clearInterval(timer2)
  }, [secondScrollerImages2.length])

  return (
    <div className="home w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full relative mt-0 h-auto sm:h-[32rem]">
        <div className="w-full relative h-auto sm:h-[32rem] overflow-hidden">
          <div 
            ref={heroContainerRef}
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{
              width: `${heroImages.length * 100}%`,
              transform: `translateX(-${currentHeroIndex * (100 / heroImages.length)}%)`
            }}
          >
            {heroImages.map((image, index) => (
              <div 
                key={index}
                className="w-full h-full flex-shrink-0"
                style={{ width: `${100 / heroImages.length}%` }}
              >
                <img
                  src={image}
                  alt={`Hero image ${index + 1}`}
                  className="w-full h-full object-cover max-h-[32rem]"
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroIndex(index)}
                className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                  index === currentHeroIndex ? 'bg-blue-500 w-4' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="bg-blue-600 w-full py-2 text-left px-4 md:px-[18rem] text-white">
        <span className="ml-4">🔊</span>
      </div>

      {/* Image Scrollers Section */}
      <div className="bg-home-grey w-full flex justify-center px-4">
        <div className='w-full max-w-[75rem] grid grid-cols-1 md:grid-cols-2 gap-4 py-8'>
          
          <div className="py-4 w-full">
            <div className="relative w-full h-96 overflow-hidden">
              <div 
                ref={scroller1Ref}
                className="flex h-full transition-transform duration-1000 ease-in-out"
                style={{
                  width: `${secondScrollerImages1.length * 100}%`,
                  transform: `translateX(-${currentSecondScrollerIndex1 * (100 / secondScrollerImages1.length)}%)`
                }}
              >
                {secondScrollerImages1.map((image, index) => (
                  <div 
                    key={index}
                    className="w-full h-full flex-shrink-0"
                    style={{ width: `${100 / secondScrollerImages1.length}%` }}
                  >
                    <img
                      src={image}
                      alt={`Scroller 1 image ${index + 1}`}
                      className="w-full h-full object-cover max-h-96"
                    />
                  </div>
                ))}
              </div>
              
              {/* Scroller Controls */}
              <div className="absolute top-0 left-0 right-0 bg-blue-500 h-12 flex items-center justify-between px-2">
                <div className="text-white font-bold">Favourites</div>
                <div className="flex">
                  <button
                    onClick={() => {
                      setCurrentSecondScrollerIndex1(
                        (prevIndex) => (prevIndex - 1 + secondScrollerImages1.length) % secondScrollerImages1.length
                      )
                    }}
                    className="bg-transparent text-white px-4 py-1 flex items-center justify-center hover:bg-blue-600 rounded transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => {
                      setCurrentSecondScrollerIndex1(
                        (prevIndex) => (prevIndex + 1) % secondScrollerImages1.length
                      )
                    }}
                    className="bg-transparent text-white px-4 py-1 flex items-center justify-center hover:bg-blue-600 rounded transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="py-4 w-full">
            <div className="relative w-full h-96 overflow-hidden">
              <div 
                ref={scroller2Ref}
                className="flex h-full transition-transform duration-1000 ease-in-out"
                style={{
                  width: `${secondScrollerImages2.length * 100}%`,
                  transform: `translateX(-${currentSecondScrollerIndex2 * (100 / secondScrollerImages2.length)}%)`
                }}
              >
                {secondScrollerImages2.map((image, index) => (
                  <div 
                    key={index}
                    className="w-full h-full flex-shrink-0"
                    style={{ width: `${100 / secondScrollerImages2.length}%` }}
                  >
                    <img
                      src={image}
                      alt={`Scroller 2 image ${index + 1}`}
                      className="w-full h-full object-cover" // Changed from object-fill
                    />
                  </div>
                ))}
              </div>
              
              {/* Scroller Controls */}
              <div className="absolute top-0 left-0 right-0 bg-blue-500 h-12 flex items-center justify-between px-2">
                <div className="text-white font-bold">Favourites</div>
                <div className="flex">
                  <button
                    onClick={() => {
                      setCurrentSecondScrollerIndex2(
                        (prevIndex) => (prevIndex - 1 + secondScrollerImages2.length) % secondScrollerImages2.length
                      )
                    }}
                    className="bg-transparent text-white px-4 py-1 flex items-center justify-center hover:bg-blue-600 rounded transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => {
                      setCurrentSecondScrollerIndex2(
                        (prevIndex) => (prevIndex + 1) % secondScrollerImages2.length
                      )
                    }}
                    className="bg-transparent text-white px-4 py-1 flex items-center justify-center hover:bg-blue-600 rounded transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>              
      </div>
    </div>
  )
}

export default Home