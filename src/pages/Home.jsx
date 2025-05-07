import React, { useState, useEffect } from 'react'

const Home = () => {
  const heroImages = [
    'https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/541813e7-073a-43dc-7936-a5eca4ce4f00/public',
    'https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/299ace0a-6d14-4bd6-b973-a75ea433e000/public',
    'https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/b15de643-4f2d-409b-2cbb-427d6d6bc700/public',
    'https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/299ace0a-6d14-4bd6-b973-a75ea433e000/public',
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
      <div className="w-full relative mt-0">
        <div className="relative w-full h-[80vh] min-h-[500px] overflow-hidden"> 
          <div
            className="w-full h-full bg-cover bg-center object-cover"
            style={{ 
              backgroundImage: `url(${heroImages[currentHeroIndex]})`,
              backgroundPosition: 'center center' 
            }}
          ></div>
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

      <div className="bg-blue-600 w-full py-2 text-center text-white">
        <span className="ml-4">🔊</span>
      </div>

      <div className='grid grid-cols-2 grid-rows-1 gap-4 px-60 py-8'> {/* Added padding top and bottom */}
        <div className="py-4">
          <div className="relative w-full h-[500px]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${secondScrollerImages1[currentSecondScrollerIndex1]})` }}
            ></div>

            <div className="absolute top-0 left-0 right-0 bg-lightblue-500 h-4"></div>

            <div className="absolute top-0 right-0 flex items-center gap-4 p-4">
              <button
                onClick={() =>
                  setCurrentSecondScrollerIndex1(
                    (prevIndex) => (prevIndex - 1 + secondScrollerImages1.length) % secondScrollerImages1.length
                  )
                }
                className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full"
              >
                &#8592;
              </button>
              <button
                onClick={() =>
                  setCurrentSecondScrollerIndex1((prevIndex) => (prevIndex + 1) % secondScrollerImages1.length)
                }
                className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>

        <div className="py-4">
          <div className="relative w-full h-[500px]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${secondScrollerImages2[currentSecondScrollerIndex2]})` }}
            ></div>

            <div className="absolute top-0 left-0 right-0 bg-lightblue-500 h-4"></div>

            <div className="absolute top-0 right-0 flex items-center gap-4 p-4">
              <button
                onClick={() =>
                  setCurrentSecondScrollerIndex2(
                    (prevIndex) => (prevIndex - 1 + secondScrollerImages2.length) % secondScrollerImages2.length
                  )
                }
                className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full"
              >
                &#8592;
              </button>
              <button
                onClick={() =>
                  setCurrentSecondScrollerIndex2((prevIndex) => (prevIndex + 1) % secondScrollerImages2.length)
                }
                className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home