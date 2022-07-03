import React, { useState,useEffect , useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllListings } from '../../store/listing';
import { Link, NavLink, Route, Switch, useHistory } from 'react-router-dom';
import "./SearchBar.css"
import searchIcon from '../../images/search.png';
import closeIcon from '../../images/close.png';
import SearchBarResultPage from './SearchBarResultPage';
import {ModalContext} from "../../context/Modal"
const SearchBarPage = ({hideform}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allListings = useSelector(state => state.listingState.listingData)  

    const allListingsArr = Object.values(allListings)

    const {filteredData, setFilteredData} = useContext(ModalContext)
    console.log("THIS IS FILTERED DATA IN SEARCH BAR,", filteredData)
    //------------HANDLE SUBMIT------------
    const handleSubmit = (e) => {
        e.preventDefault();
        hideform();
        history.push("/search-result")
    }
    //------------FILTER KEYWORDS FROM ALL LISTING------------
    let newFilter;
    const handleFilter = (e) => {
        const searchWord = e.target.value
        if(searchWord.length === 0) newFilter=[];
        newFilter = allListingsArr.filter(listing => {
            return listing.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilteredData(newFilter);
    }


    //-----------FILL THE LISITNGSDATA STATE-------------------
    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch]);

    return(
            <div className="search-bar-div">
                <label>
                    <h1>Search Your Listing Today!</h1>
                    <br></br>
                <input 
                    className="search-input"
                    type="text"
                    placeholder='Enter a Listing Title...'
                    onChange={handleFilter} 
                 />

                </label>
                <div className='glass'>
                    <div>
                        <img height="30px" width="30px" src={searchIcon} alt='search' onClick={handleSubmit} ></img>   
                    </div>
                </div>
            
            </div>

    )
    };

export default SearchBarPage;