import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter,faFacebook,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faTwitter,faFacebook,faInstagram,faGithub)

export default function Description () {
    return(
        <div className="description">
            <div className="first-part">
                <h5>About</h5>
                <p>My Name is Marios Katsaros. I am currently studying Informatics and Computer Engineering at the University of West Attica. 
               </p>
                <h5>Interests</h5>
                <p>I like lifting weights, hanging out with my friends and playing games that test my intelligence. I aspire to become a front-end developer and turn simple concepts into reality.
                </p>
            </div>
            <div className="second-part">
                <a className="icon-holder" href="https://twitter.com/marios_ktsr">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a className="icon-holder" href="https://www.facebook.com/marios.katsaros.9">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a className="icon-holder" href="https://www.instagram.com/marios_ktsr/">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a className="icon-holder" href="https://github.com/MariosKtrs">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        </div>
    )
}