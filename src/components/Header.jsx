import Logo from '../assets/logo.svg'


function Header() {
    return(
        <div className='header'>
            <img className='header_logo' src={Logo} alt="SportSee logo"/>
            <p>Accueil</p>
            <p>Profil</p>
            <p>Réglage</p>
            <p>Communauté</p>
        </div>
        
    )
}

export default Header;