
export default function BookingFrom(props){
    const [bookingInfo, setBookingInfo] = props.bookingState

    const handleDate = e =>{
        setBookingInfo({...bookingInfo,date:e.target.value})
        dispatch({date:e.target.value})
    }
    const handleTime = e =>{
        setBookingInfo({...bookingInfo,time:e.target.value})
        
    }
    const handleGuest = e =>{
        setBookingInfo({...bookingInfo,guest:e.target.value})
    }
    const handleOccassion = e =>{
        setBookingInfo({...bookingInfo,occassion:e.target.value})
    }

    const [availableTimes, dispatch]= props.timesState
    

    return(
        <div>
            <form>
                <div>
                    <label for="res-date">Choose date</label>
                    <input type="date" id="res-date" onChange={handleDate}></input>
                </div>
                <div>
                    <label for = "res-time">Choose time</label>
                    <select id="res-time" onChange={handleTime} >
                        {availableTimes.map(t=>
                        <option>
                            {t}
                        </option>
                            )}
                    </select>
                </div>
                <div>
                    <label for="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleGuest}></input>
                </div>
                <div>
                    <label for="occasion">Occasion</label>
                    <select id="occasion" onChange={handleOccassion}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <button type="submit" onClick={e=>{e.preventDefault();props.submitForm(bookingInfo)}}>Make Your reservation</button>
            </form>
        </div>
    )
}