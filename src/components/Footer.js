import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter,faFacebook,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faTwitter,faFacebook,faInstagram,faGithub)

export default function Footer () {
    return (
       
        <div className="footer">
                <a className="icon-holder" href="https://twitter.com/marios_ktsr" target="_blank">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a className="icon-holder" href="https://www.facebook.com/marios.katsaros.9" target="_blank">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a className="icon-holder" href="https://www.instagram.com/marios_ktsr/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a className="icon-holder" href="https://github.com/MariosKtrs" target="_blank">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        
    )
}