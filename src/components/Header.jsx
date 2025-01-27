import Logo from '../assets/logo.svg'


function Header() {
    return(
        <div className='header'>
            <img src={Logo} alt="SportSee logo"/>
            <p>Accueil</p>
            <p>Profil</p>
            <p>Réglage</p>
            <p>Communauté</p>
        </div>
        
    )
}

export default Header;