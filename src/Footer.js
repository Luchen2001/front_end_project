import logo from './image/footer.png'
export default function Footer(){
    const nav = [
        {name: 'Home', url:'/#Home'},
        {name: 'About', url:'/#About'},
        {name: 'Menu', url:'/#Menu'},
        {name: 'Reservation', url:'/#Reservation'},
        {name: 'Order Online', url:'/#Order'},
        {name: 'Login', url:'/#Login'},
    ]
    const contact = [
        {name:'Address'},
        {name:'phone number'},
        {name:'email'}
    ]
    return(
        <div className='footer' id ="grid">
            <img src = {logo} alt='logo'/>
            <div>
                <h3>Doormat Navigation</h3>
                {nav.map(nav=>
                    <div >
                    <a href = {nav.url} className='footer_link' key ={nav.name}>
                        {nav.name}
                    </a>
                    </div>
                    )}
            </div>
            <div>
                <h3>Contact</h3>
                {nav.map(nav=>
                    <div>
                    <a className='footer_link' key ={nav.name}>
                        {nav.name}
                    </a>
                    </div>
                    )}
            </div>
            <div>
                <h3>Social Media link</h3>
                {nav.map(nav=>
                    <div>
                    <a className='footer_link' key ={nav.name}>
                        {nav.name}
                    </a>
                    </div>
                    )}
            </div>
        </div>
    )
}