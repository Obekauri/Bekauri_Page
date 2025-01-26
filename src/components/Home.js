// We'll need React Router's hook to navigate around
import { useNavigate } from 'react-router-dom'
import DesktopImage from '../data/images/0_l1Wxf8h2AkXqYiEf.jpg'

export default function Home() {
  const navigate = useNavigate()

  // 👉 STEP 5 - Build a click handler that will imperatively navigate us to /items-list
  const routeToShop = () => {
    console.log('Submitting...')
    navigate('items-list')
  }

  return (
    <div className='home-wrapper'>
      <h1 
        className='firstIntro'>
          Hi, I’m Omar Bekauri! 🌟 <br />
          I build more than just software. <br />
          I create experiences that connect people, solve problems, and inspire change. <br />
          With 8 years of experience as a Full Stack and Data Engineer, <br />
          I merge creativity with technology to craft impactful solutions.
      </h1>
      <img
        className='home-image'
        src={DesktopImage}
        alt='store front'
      />
      <h1 
        className='secondIntro'>
          From pixels on a screen to backend logic, <br />
          every line of code I write tells a story of innovation and precision.<br />
          Ready to bring bold ideas to life? Let’s make it happen! 🚀
      </h1>
      <button onClick={routeToShop} className='md-button shop-button'>
        More
      </button>
    </div>
  )
}