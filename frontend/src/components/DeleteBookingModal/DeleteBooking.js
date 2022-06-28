import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { deleteOneBooking, getAllBookings} from "../../store/booking";
import { useEffect } from "react";


const DeleteBooking = ({booking, hideForm}) => {
    console.log("currentBooking PROPS", booking)
    // console.log("showModal PROPS", setShowModal)

    const history = useHistory();
    const dispatch = useDispatch();


      
    const handleDelete = () => {
        dispatch(deleteOneBooking(booking))
        hideForm();
        history.push(`/users/${booking.userId}/bookings`)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        hideForm();
    };

    return(
        <div>
            <div>
                <h2>Do you really want to delete your booking? This process cannot be undone.</h2>
                <div>
                    <button className="btn" type="button" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
                <div>
                <button className="btn" type='button' onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteBooking