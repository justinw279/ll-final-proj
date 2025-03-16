import React from 'react';
import { useEffect, useState, useReducer } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';


export default function Main() {

    const seedRandom = function(seed) {
        let a = 34359738337;
        let b = 185852;
        let c = seed % a;

        return function() {
            return (c = c * b % a) / a;
        }
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seedRandom(date.getDate());

        let i = 17

        for (i = 17; i < 24; i++) {
                result.push(i + ':00');
        }

        if (random() > .5) {
            result.push(i + ":30");
        }

        return result;
    }

    const submitAPI = function(data) {
        return true;
    }
    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())}
    }

    const navigate = useNavigate();

    function submitForm(data) {
        if (submitAPI(data)) {
            navigate("/confirmed");
        }
    }


    return (
        <main>
            <Routes>
                <Route path='/' element={<Header />}/>
                <Route 
    path='/booking' 
    element={<Booking 
        availableTimes={state} 
        dispatch={dispatch} 
        submitForm={submitForm}/>}
/>                <Route path='/confirmed' element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    )
}