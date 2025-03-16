import React from 'react';
import "../App.css";
import { useEffect, useState } from "react";
import BookingForm from './BookingForm';

export default function Booking(props) {
    return (
        <BookingForm 
            availableTimes={props.availableTimes} 
            dispatch={props.dispatch} 
            submitForm={props.submitForm} 
        />
    );
}
