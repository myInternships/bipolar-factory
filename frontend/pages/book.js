import React, { useState } from 'react'
import { TimePicker, Select, Card, Button } from 'antd'

import Moment from 'react-moment';
import moment from 'moment'
import { bookSlot } from '../process/booking';

const { Option } = Select;
const { Meta } = Card;

const getAllFacilities = require('../model/Facility').getAllFacilities

const book = ({ facility }) => {
    const format = 'HH:mm';

    const [state, setstate] = useState({
        facility: facility || "gym",
        timeslot: moment('12:08', format)
    })

    const bookFacility = () => {
        console.log({ ...state, timeslot: state.timeslot.toDate() })
        bookSlot({ ...state, timeslot: state.timeslot.toDate() })
    }

    const facilityOptions = async () => await getAllFacilities().map(facility => <Option value={facility.type}>{facility.type}</Option>)

    return (
        <Card style={{ width: 300 }}>

            <b>Facility Booker</b>

            <br/><br/>

            {/* timeslot picker */}
            <TimePicker
                value={state.timeslot}
                onChange={(e) => {
                    setstate({ timeslot: e })
                }}
                format={format}
            />
            
            <br/><br/>

            {/* confirm button */}
            <Button type="primary" onClick={bookFacility}>Book Slot!</Button>
        </Card>
    )
}

export default book
