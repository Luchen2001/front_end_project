import './App.css';
import Footer from './Footer';

import { Route, Routes, Link } from 'react-router-dom';
import BookingPage from './BookingForm';
import logo from './image/logo.svg';
import Home from './Home';
import Reservation from './Reservation';
import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  const nav = [
    {name: 'Home', url:'/'},
    {name: 'About', url:'/About'},
    {name: 'Menu', url:'/Menu'},
    {name: 'Reservation', url:'/Reservation'},
    {name: 'Order Online', url:'/Order'},
    {name: 'Login', url:'/Login'},
  ]
  const contact = [
      {name:'Address'},
      {name:'phone number'},
      {name:'email'}
  ]
  const [bookingInfo, setBookingInfo] = useState([
        { date: "", time: "", guest:1, occassion:"" }
      ]);

  const updateTimes = (state, action) => {
      const date = new Date(action.date)
      state = fetchAPI(date)
      return state
  }

  const initializeTimes = []
  const [availableTimes, dispatch] = useReducer( updateTimes, initializeTimes)

  const navigate = useNavigate();
  const submitForm = function(formData){
      const response = submitAPI(formData);
      if (response == true){
        navigate("/BookingConfirmed")
      }
  }
  return (
    <>
      <head>
        <title>little lemon</title>
        <meta name="description" content="the booking website for little lemon restaurant"/>
        <meta name="og:title" content="little lemon"/>
        <meta name="og:description" content="the booking website for little lemon restaurant"/>
        <meta name="og:image" content="https://i.pinimg.com/564x/93/ee/18/93ee18cd5a5d4b23527529e6a016c8f5.jpg"/>
      </head>
      <main className='app'>
        <div className = 'header'>
            <img src = {logo} alt='logo'/>
            <nav>
                {
                    nav.map(nav=>
                        <Link to = {nav.url} key={nav.name} className='header-nav' >
                            {nav.name}
                        </Link>
                    )
                }
            </nav>
        </div>
        <Routes>
                <Route path = "/" element={<Home/>}></Route>
                <Route path = "/Reservation" element={<Reservation  bookingState = {[bookingInfo, setBookingInfo]} timesState = {[availableTimes, dispatch]} submitForm = {submitForm}/>}></Route>
                <Route path = "/BookingConfirmed" element={<ConfirmedBooking bookingInfo = {bookingInfo}/>}></Route>
        </Routes>
        <Footer/>
      </main>
    </>
  );
}

export default App;
