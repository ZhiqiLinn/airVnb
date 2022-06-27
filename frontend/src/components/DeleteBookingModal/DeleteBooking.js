import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { deleteOneBooking } from "../../store/booking";


const DeleteBooking = ({booking, hideForm}) => {
    console.log("currentBooking PROPS", booking)
    // console.log("showModal PROPS", setShowModal)

    const history = useHistory();
    const dispatch = useDispatch();

    const currentSessionUser = useSelector(state => state.session.user.id)

    const handleDelete = () => {
        dispatch(deleteOneBooking(booking))
        history.push('/')
    }

    const handleCancel = (e) => {
        e.preventDefault();
        hideForm();
        history.push(`/bookings/${booking.id}`);
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