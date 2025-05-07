import {useState} from 'react'
import supportImg from '../assets/icon-24hr.png'
import guideImg from '../assets/icon-book.png'
import ambassadorImg from '../assets/icon-ambassador.png'
import androidImg from '../assets/android-en.png'
import gamecareImg from '../assets/footer/gamcare.png'
import ageImg from '../assets/footer/age-limit.png'
import regulationsImg from '../assets/footer/regulations.png'
import pay16 from '../assets/footer/pay16.png'
import pay17 from '../assets/footer/pay17.png'
import pay18 from '../assets/footer/pay18.png'
import pay20 from '../assets/footer/pay20.png'
import pay47 from '../assets/footer/pay47.png'
import licenseImg from '../assets/footer/gaming_license.png'


const Footer = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

  return (
    <div className="footer bg-gray-800 text-white py-8 px-60">

        <div className=" mx-auto p-4 rounded-lg ">
            <div className={`relative overflow-hidden text-sm text-gray-300 ${!isExpanded ? 'max-h-[400px]' : ''}`}>

                <p className="mb-4">
                India's online gaming landscape is booming, offering a diverse array of platforms where players can indulge in everything from sports betting to casino games. Whether you're into cricket, football, or prefer the thrill of a live casino, India's leading gaming platforms have you covered.
                </p>

                <h3 className="font-bold text-base mb-2 text-white">Diverse Gaming Options for Every Player</h3>
                <p className="mb-4">
                India's gaming platforms are renowned for their variety, catering to players with different tastes and preferences. From traditional sports betting to modern online casino games, the options are endless.
                </p>

                <h3 className="font-bold text-base mb-2 text-white">Safe and Secure Gaming Environment</h3>
                <p className="mb-4">
                When it comes to online gaming, security is a top concern for players. India's leading platforms prioritize player safety by partnering with trusted providers.
                </p>

                <h3 className="font-bold text-base mb-2 text-white">Teams and Promotions to Boost Your Gameplay</h3>
                <p className="mb-4">
                One of the biggest draws of online gaming is the variety of bonuses and promotions on offer. India's top platforms are no exception, offering generous welcome bonuses, cashback offers, and more.
                </p>

                <h3 className="font-bold text-base mb-2 text-white">Referral Programs: Share the Fun and Earn Rewards</h3>
                <p className="mb-4">
                Online gaming is even more fun when you can share it with friends. Many of India's top platforms offer referral programs that allow you to invite friends to join the action.
                </p>

                <h3 className="font-bold text-base mb-2 text-white">Mobile Gaming: Play Anytime, Anywhere</h3>
                <p className="mb-4">
                In today's fast-paced world, the ability to game on the go is essential. India's leading platforms understand this and have optimized their games for mobile play.
                </p>

                <h3 className="font-bold text-base mb-2 text-white">Join India's Leading Gaming Platforms Today</h3>
                <p className="mb-4">
                With such a diverse range of options and top-notch providers, there's never been a better time to join India's online gaming community.
                </p>

                <p className="mb-4">
                Customer support is another crucial factor that players consider when choosing a gaming platform. Leading platforms in India offer 24/7 assistance through live chat, email, and phone support to ensure a smooth experience.
                </p>
                <p className="mb-4">
                Additionally, these platforms often support responsible gaming initiatives, helping players maintain a healthy balance between entertainment and real life.
                </p>
                <p className="mb-4">
                The rise in mobile gaming also means that these platforms are constantly improving their apps and mobile web versions for performance and accessibility.
                </p>

                {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-800 via-gray-800/60  to-gray-800/10 to-80% pointer-events-none"></div>
                )}
            </div>

            <button
                onClick={toggleExpand}
                className="mt-4 px-6 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-medium rounded-lg transition-colors duration-200 block mx-auto"
            >
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-center">
            <div className='flex flex-col items-center justify-center'>
                <img src={supportImg} alt="support" />
                <div>
                    <h4>Customer Support</h4>
                    <p>available 24/7 to support you</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={guideImg} alt="guide" />
                <div>
                    <h4>New Member Guide</h4>
                    <p>Check out FAQ and guides</p>
                    <p>Explore Now</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={ambassadorImg} alt="brand ambassador" />
                <div>
                    <h4>Brand Ambassador</h4>
                    <p>Play with celebrity</p>
                    <p>Have Fun Now</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <a href="https://sky247.bet/Mappdownload">
                    <img src={androidImg} alt="download app" />
                </a>
            </div>

        </div>

        <div className="grid grid-flow-col items-stretch gap-8 mt-14 text-center text-gray-400 border-t border-gray-700 mt-14 pt-6">
            <div className="flex flex-col justify-start gap-3">
                <h4 className='text-left'>Responsible Gaming</h4>
                <div className='flex justify-start w-full gap-2'>
                    <img src={gamecareImg} alt="" />
                    <img src={ageImg} alt="" />
                    <img src={regulationsImg} alt="" />
                </div>
            </div>

            <div className="flex flex-col justify-start gap-3">
                <h4 className='text-left'>Payment Methods</h4>
                <div className='flex justify-start align-center gap-2'>
                    <img src={pay16} alt="" className='h-8'/>
                    <img src={pay17} alt="" className='h-8' />
                    <img src={pay18} alt="" className='h-8' />
                    <img src={pay20} alt="" className='h-8' />
                    <img src={pay47} alt="" className='h-8' />
                </div>
            </div>
            <div>
                <h4 className='text-left'>Community Websites</h4>
            </div>

            <div className="flex flex-col items-center gap-3">
                <h4>Gaming License</h4>
                <img src={licenseImg} alt="" className='h-6'/>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-14 pt-6 gap-6">
            <div className="flex items-center gap-3">
                <img src="https://imagedelivery.net/HUCIz1_hKgf2q2UoNlOq1w/f7b28f7c-6c1a-437d-2727-f94e0fefca00/public" 
                alt="Site Logo" 
                className="w-32 h-auto" />
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 text-sm text-gray-400">
                <div className="flex gap-4 flex-wrap justify-center md:justify-end">
                <a href="#" className="hover:text-white transition">Affiliate</a>
                <a href="#" className="hover:text-white transition">Responsible Gaming</a>
                <a href="#" className="hover:text-white transition">About Us</a>
                <a href="#" className="hover:text-white transition">Contact</a>
                </div>
                <p className="text-xs mt-2 text-center md:text-right">
                © 2024sky247.bet All rights reserved.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Footer