import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './Reviews.css'

const ReviewsSection = ({allReviews, users}) => {
    const dispatch = useDispatch();

    //-------------------------GET DATE IN CORRECT FORMAT
    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
      }
    const correctDateFormat = (date) => {
        let currDate = new Date(date);
        let mm = currDate.getMonth()
        let month = months[mm]
        let year = currDate.getFullYear();
        return `${month}, ${year}`
    }

    //-------------------------GET AVG RATING
    const ratings = allReviews.map(review => review.rating)
    const averageRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length)
    let avgRating = Number(averageRating)


    //-------------------------GET USER'S INFO
    const findUserName = (userId) => {
        let result = users.filter(user => user.id === userId);
        console.log(result)
        return result[0]?.username
    }

    const findUserPic = (userId) => {
        let result = users.filter(user => user.id === userId)
        console.log(result)

        return result[0]?.profilePic
    }

    console.log(findUserPic(1))

    return(
        <>{ allReviews && 
            <>
            <div><i className="fa-solid fa-star fa-sm"></i>{avgRating} · {allReviews.length} reviews</div>
                <div className='reviews-layout'>
                    { allReviews.map( review =>(

                        <div key={review.id} className="single-review">
                            <div className='review-user-details'>
                                <div><img className="review-img" src={findUserPic(review.userId)} alt={review.id}></img></div>
                                <div>
                                    <div>{findUserName(review.userId)}</div>
                                    <div>{correctDateFormat(review.updatedAt)}</div>
                                </div>
                            </div>
                                <div>{review.content}</div>
                        </div>
                    ))
                    }
            </div>
                </>
        }
        </>
    )
}

export default ReviewsSection