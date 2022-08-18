import React, { useState} from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Moment from 'react-moment';
import './booking.scss';

    
const Booking = () => {
    const [date, setDate] = useState(new Date());
    const [value, setValue] = useState(true);
    const [time, setTime] = useState();



    const handleChange=((newValue)=>{
        setValue(newValue)
    })
    const handleChanged=((newValue)=>{
        setDate(newValue)
    })
    return (
        <div className='calendarr'>

            <h1 className='cheader'>Book a Photo Session</h1>
            
            <div className='calendardiv'>
                    <div className='calendarshow'>
                        <h5 className='selectday' >Select day and time</h5>               
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={4} sx={{padding:'1rem'}}>
                                <MobileDatePicker
                                label="Select date"
                                inputFormat="MM/dd/yyyy"
                                value={date}
                                onChange={handleChanged}
                                renderInput={(params) => <TextField {...params} />}
                                />
                                <TimePicker
                                label="Select time"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                                />
                                
                            </Stack>
                        </LocalizationProvider>
                    </div>
                    <div className='topss'>
                        <div className='selectday'>
                            <p>Selected day: <h2 className='ssday'>{date.toDateString()}</h2> </p>
                            <p>Selected time: <h2 className='ssday'><Moment format='HH:mm'>{value.toString()}</Moment></h2> </p>  
                        </div>
                        <div className='bookk'>
                            <h6 className='bbkk'>NB: You have to pay a deposit fee to fully book a session</h6>
                            <button className='btn-grad '>Book</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Booking;