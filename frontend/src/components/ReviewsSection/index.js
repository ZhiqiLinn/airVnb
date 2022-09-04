import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

import './Reviews.css'
import CreateReviewModal from '../CreateReviewModal';

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
    const findAvg = (item) =>{
        const ratings = allReviews.map(review => review[item])
        const averageRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length)
        return Number(averageRating).toFixed(1)

    }
    
    const cleanlinessAvg = findAvg('cleanliness')
    const communicationAvg = findAvg('communication')
    const checkInAvg = findAvg('checkIn')
    const AccuracyAvg = findAvg('Accuracy')
    const LocationAvg = findAvg('Location')
    const ValueAvg = findAvg('Value')

    const avgForAllRating = ((
        Number(cleanlinessAvg)
        + Number(communicationAvg) 
        + Number(checkInAvg) 
        + Number(AccuracyAvg) 
        + Number(LocationAvg) 
        + Number(ValueAvg) )/6).toFixed(1)
    
    
    const ratings = [{'name':"Cleanliness",'avg': cleanlinessAvg}, 
        {'name':'Communication', 'avg': communicationAvg}, 
        {'name':'Check In', 'avg': checkInAvg}, 
        {'name':'Accuracy', 'avg': AccuracyAvg}, 
        {'name':'Location', 'avg': LocationAvg}, 
        {'name':'Value', 'avg': ValueAvg}]

        console.log(ratings)
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

    // console.log(findUserPic(1))

    return(
        <>{ allReviews && 
            <>
            <div>
                <br></br>
                <i className="fa-solid fa-star fa-sm"></i>{avgForAllRating} · {allReviews.length} reviews
            </div>
            <div className="rating-container">  
                {ratings.map(rating => (
                    <div  key={rating.name}>
                        <div className='single-rating'>
                        <p style={{width:"100px"}}>{rating.name}</p>
                        <ProgressBar
                            completed={(rating.avg / 5) * 100}
                            bgColor='black'
                            isLabelVisible={false}
                            height='5px'
                            width='250px'
                            className='progress-bar'
                        />
                        <p>{rating.avg}</p>

                        </div>
                    </div>
                ))
                
                }
            </div>
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
                <hr></hr>
    
        </>
        }
        </>
    )
}

export default ReviewsSection