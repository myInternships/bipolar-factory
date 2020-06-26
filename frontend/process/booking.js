import FacilityCard from "../components/FacilityCard"
import Timeslot from "../model/Timeslot"
import Facility from "../model/Facility"

export const bookSlot = ({facility, timeslot}) => {
    // if (Timeslot) NOT used by more than (Facility.max_users) people

    Timeslot.add(timeslot)
    Facility.increaseUserCount()
    // add (Timeslot) to Timeslots
    // Facility.current_users++
}