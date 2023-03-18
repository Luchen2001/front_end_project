import BookingFrom from "./BookingForm"
export default function Reservation(props){
    
    return (
        <div>
            <BookingFrom bookingState = {props.bookingState} timesState = {props.timesState} submitForm = {props.submitForm}/>
            
        </div>
    )
}