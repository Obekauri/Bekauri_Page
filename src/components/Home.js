// React Router's hook to navigate around
import { useNavigate } from 'react-router-dom'
import DesktopImage from '../data/images/0_l1Wxf8h2AkXqYiEf.jpg'
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
          <span>Hi, It's Omar <h1 className='store-header'> <i className='Bfont'>Bek</i>auri! </h1></span> <br />
          <div className='social-icons'>
            <a href='https://www.linkedin.com/in/omar-bekauri/' target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-linkedin'></i></a>
            <a href='https://github.com/Obekauri' target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-github'></i></a>
          </div>
      </h1>

      </section>

      <img
        className='home-image'
        src={DesktopImage}
        alt='store front'
      />
      <h1 
        className='secondIntro'>
          Some Text here
      </h1>
    </div>
  )
}