import logo from './image/logo.svg';
export default function Header(){
    const nav = [
        {name: 'Home', url:'/#Home'},
        {name: 'About', url:'/#About'},
        {name: 'Menu', url:'/#Menu'},
        {name: 'Reservation', url:'/#Reservation'},
        {name: 'Order', url:'/#Order'},
        {name: 'Login', url:'/#Login'},
    ]
    return (
        <div className = 'header'>
            <img src = {logo} alt='logo'/>
            <nav>
                {
                    nav.map(nav=>
                        <a href={nav.url} key={nav.name} className='header-nav'>
                            {nav.name}
                        </a>
                    )
                }
            </nav>
        </div>
    );
}