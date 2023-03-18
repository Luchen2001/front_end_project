export default function ConfirmedBooking(props){
    return (
        <div className="confirm">
            <h2>Your Booking is Confrimed</h2>
            <h3>Date:  {props.bookingInfo.date}</h3>
            <h3>Time:  {props.bookingInfo.time}</h3>
            <h3>Number of guest: {props.bookingInfo.guest}</h3>
            <h3>Occasion: {props.bookingInfo.occassion}</h3>
        </div>
    )
}