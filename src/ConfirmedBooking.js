export default function ConfirmedBooking(props){
    return (
        <div>
            <h1>Your Booking is Confrimed</h1>
            <p>{props.bookingInfo.date}</p>
        </div>
    )
}