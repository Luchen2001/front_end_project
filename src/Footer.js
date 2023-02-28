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
        {name:'Address'}
    ]
    return(
        <div className='footer'>
            <img src = {logo} alt='logo'/>
        </div>
    )
}