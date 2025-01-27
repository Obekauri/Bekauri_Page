// We'll need React Router's hook to navigate around
import { useNavigate } from 'react-router-dom'
import DesktopImage from '../data/images/0_l1Wxf8h2AkXqYiEf.jpg'
import NYC1 from '../data/images/IMG_0719.jpg'
import NYC2 from '../data/images/IMG_0723.jpg'

export default function Home() {
  const navigate = useNavigate()

  // 👉 STEP 5 - Build a click handler that will imperatively navigate us to /items-list
  const routeToShop = () => {
    console.log('Submitting...')
    navigate('items-list')
  }

  return (
    <div className='home-wrapper'>
      <section className='home'>
      <img
        className='NYC2-image'
        src={NYC2}
        alt='store front'
      />
      <h1 
        className='firstIntro'>
          <span>Hi, I’m Omar <h1 className='store-header'> <i className='Bfont'>Bek</i>auri! 🌟</h1></span> <br />
          <span>
            I build more than just software. <br />
            I create experiences that connect people, solve problems, and inspire change. <br />
            With 8 years of experience as a Full Stack and Data Engineer, <br />
            I merge creativity with technology to craft impactful solutions.
          </span>
      </h1>
      </section>

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
      <img
        className='NYC1-image'
        src={NYC1}
        alt='store front'
      />
      <button onClick={routeToShop} className='md-button shop-button'>
        More
      </button>
    </div>
  )
}