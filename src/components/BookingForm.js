import React from 'react';
import "../App.css";
import { useEffect, useState } from "react";


export default function BookingForm(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.submitForm();
    }
    

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    function handleChange(e) {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="selected-date">Choose a date</label>
                            <input id='selected-date' value={date} type='date' onChange={(e) => handleChange(e.target.value)}required />
                        </div>

                        <div>
                            <label htmlFor="selected-time">Choose a time</label>
                            <select id = "selected-time" value = {time} onChange={(e) => setTime(e.target.value)}>
                                <option value = "">choose</option> {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor='selected-guests'>Guests</label>
                            <input id = "selected-guests" min="1" value = {guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor='selected-occasion'>Occasion</label>
                            <select id = "selected-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Business</option>
                            </select>
                        </div>

                        <div>
                            <input aria-label='On Click' type="submit" value="Reserve"></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );

};