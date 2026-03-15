
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'; 
    

const Social = () => {
  return (
    <div className='hero-social'>
      
      <a href="https://www.linkedin.com/in/pramay-nandoriya/" className='home-social-icon' target='_blank'>
      <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://github.com/PramayNandoriya" className='home-social-icon' target='_blank'>
      <FontAwesomeIcon icon={faGithub} />
      </a>


    </div>
  )
}

export default Social
