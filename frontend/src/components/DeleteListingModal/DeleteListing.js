import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { deleteOneListing } from "../../store/listing";


const DeleteListing = ({currentListing, setShowModal}) => {
    // console.log("currentListing PROPS", currentListing)
    // console.log("showModal PROPS", setShowModal)

    const history = useHistory();
    const dispatch = useDispatch();

    const currentSessionUser = useSelector(state => state.session.user.id)

    const handleDelete = () => {
        dispatch(deleteOneListing(currentListing))
        window.open('/listings/delete', '_blank')
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false)
        history.push(`/listings/${currentListing.id}`);
    };

    return(
        <div>
            <div>
                <h2>Do you really want to delete your listing? This process cannot be undone.</h2>
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

export default DeleteListing