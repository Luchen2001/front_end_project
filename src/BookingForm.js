import { useState } from "react";
export default function BookingFrom(props){
    const [bookingInfo, setBookingInfo] = props.bookingState

    const handleDate = e =>{
        setBookingInfo({...bookingInfo,date:e.target.value});
        dispatch({date:e.target.value});

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

    //validation
    const [touch, setTouch] = useState(false); 

    const getIsFormValid = () => { 
        return ( 
          bookingInfo.occassion !== "Occassion" &&
          bookingInfo.date!==""&&
          bookingInfo.time!==""&&
          bookingInfo.guest>0
        ); 
      }; 

    

    return(
        <div className="bookingForm">
            <form>
                <div>
                    <label htmlFor="date">Choose date:</label>
                    <input type="date" id="date" name="date" onChange={handleDate} ></input>
                </div>

                <div>
                    <label for = "res-time">Choose time:</label>
                    <select id="res-time" name="time" onChange={handleTime}>
                        {availableTimes.map(t=>
                        <option>
                            {t}
                        </option>
                            )}
                    </select>
                </div>
                <div>
                    <label for="guests">Number of guests:</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests"  onChange={handleGuest} onBlur={()=>setTouch(true)}></input>
                </div>
                <div className="error">
                    {touch&&bookingInfo.guest==0?<p className="errorMsg">please enter the number of people</p>:null}
                </div>
                <div className="error">
                    {touch&&(bookingInfo.guest<0||bookingInfo.guest>=10)?<p className="errorMsg">only available for 0-10 seats</p>:null}
                </div>
                <div>
                    <label for="occasion">Occasion:</label>
                    <select id="occasion" onChange={handleOccassion}>
                        <option>Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                    <button type="submit" disabled={!getIsFormValid()} onClick={e=>{e.preventDefault();props.submitForm(bookingInfo)}}>Make Your reservation</button>
                </div>
            </form>
        </div>
    )
}