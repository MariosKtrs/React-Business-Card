import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faEnvelope,faLinkedin)

export default function Main () {
    return(
        <div className="main">
            <img src="https://scontent.fath7-1.fna.fbcdn.net/v/t1.6435-9/45060154_1966316640125242_2725835001957449728_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=k-MhmaaHrkMAX9w8TNz&_nc_ht=scontent.fath7-1.fna&oh=00_AfAbKkLTAw9DXD08Z1JoQYiDaJEkSHQh7_GnUnHkPuXivA&oe=63D27AA7"></img>
            <div className="my-info">
                <h4>Marios Katsaros</h4>
                <p>Frontend Developer</p>
                <a href="https://example.com">My Website</a>
            </div>
            <div className="buttons">
                <a className="email-button"  href="mailto:mskatsaros@outlook.com">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <p>Email</p>       
                </a>
                <a className="linkedin-button" href="https://example.com">
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <p>Linkedin</p>         
                </a>
            </div>
        </div>
    )
}