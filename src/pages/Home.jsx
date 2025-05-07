import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrentSecondScrollerIndex1((prevIndex) => (prevIndex + 1) % secondScrollerImages1.length)
    }, 3000)

    const timer2 = setInterval(() => {
      setCurrentSecondScrollerIndex2((prevIndex) => (prevIndex + 1) % secondScrollerImages2.length)
    }, 3000)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
    }
  }, [secondScrollerImages1.length, secondScrollerImages2.length])

  return (
    <div className="home">
      <div className="w-full relative mt-0 h-[32rem]">
        <div className="w-full relative h-[32rem]">
          <div className="relative w-full h-[32rem] overflow-hidden">
            <img
              src={heroImages[currentHeroIndex]}
              alt={`Hero image ${currentHeroIndex + 1}`}
              className="w-full h-full object-fill"
            />
          
          </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${index === currentHeroIndex ? 'bg-blue-500' : 'bg-gray-500'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      </div>

      <div className="bg-blue-600 w-full py-2 text-center text-white">
        <span className="ml-4">🔊</span>
      </div>

      <div className="bg-home-grey flex justify-center">

        <div className='w-[75rem] grid grid-cols-2 grid-rows-1 gap-4  py-8'>
          <div className="py-4">
            <div className="relative w-full h-96">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${secondScrollerImages1[currentSecondScrollerIndex1]})` }}
              ></div>
              {/* Blue header bar */}
              <div className="absolute top-0 left-0 right-0 bg-blue-500 h-12 flex items-center justify-between px-2">
                <div className="text-white font-bold">Favourites</div>
                <div className="flex">
                  <button
                    onClick={() => setCurrentSecondScrollerIndex1(
                      (prevIndex) => (prevIndex - 1 + secondScrollerImages1.length) % secondScrollerImages1.length
                    )}
                    className="bg-transparent text-white px-4 py-1 flex items-center justify-center"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setCurrentSecondScrollerIndex1(
                      (prevIndex) => (prevIndex + 1) % secondScrollerImages1.length
                    )}
                    className="bg-transparent text-white px-4 py-1 flex items-center justify-center"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="py-4">
            <div className="relative w-full h-96">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${secondScrollerImages2[currentSecondScrollerIndex2]})` }}
              ></div>
              {/* Blue header bar */}
              <div className="absolute top-0 left-0 right-0 bg-blue-500 h-12 flex items-center justify-between px-2">
                <div className="text-white font-bold">Favourites</div>
                <div className="flex">
                  <button
                    onClick={() => setCurrentSecondScrollerIndex2(
                      (prevIndex) => (prevIndex - 1 + secondScrollerImages2.length) % secondScrollerImages2.length
                    )}
                    className="bg-transparent text-white px-4 py-1 flex items-center justify-center"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setCurrentSecondScrollerIndex2(
                      (prevIndex) => (prevIndex + 1) % secondScrollerImages2.length
                    )}
                    className="bg-transparent text-white px-4 py-1 flex items-center justify-center"
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