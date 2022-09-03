import { NavLink } from "react-router-dom"

const UserProfile = () => {


    return(
        <div>
            <div>
            <NavLink to="/users/bookings">View All Bookings</NavLink>
            </div>
            <div>
            <NavLink to="/users/listings">View All Listings</NavLink>
            </div>
        </div>
    )
}

export default UserProfile