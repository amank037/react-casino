import {useState} from 'react'
import supportImg from '../assets/support.svg'

const Support = () => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div
        className='fixed bottom-6 right-6 z-50 cursor-pointer transition-all duration-300'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div className='relative w-16 h-16'>
            <img 
            src={supportImg} 
            alt="support" 
            className={`w-full h-full p-2 object-contain transition-transform duration-300 bg-black rounded-full ${
            isHovered ? 'scale-110' : 'scale-100'
            }`}
            />
        </div>
    </div>
  )
}

export default Support