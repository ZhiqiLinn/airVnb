import React, { useState,useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllListings } from '../../store/listing';
import { NavLink, useHistory } from 'react-router-dom';
import "./SearchBar.css"

const SearchBarPage = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const allListingsArr = Object.values(useSelector(state => state.listingState.listingData))
    const searchTypeSelections = ['name','city']
    const [query, setQuery] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [searchType, setSearchType] = useState(searchTypeSelections[0])
    
    //------------FILTER KEYWORDS FROM ALL LISTING------------
    const handleSubmit = () => {
        if(query !== ''){
        history.push(`/search/${query}`)}
    }

    //-----------FILL THE LISITNGSDATA STATE-------------------
    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch]);

    //-----------DROPDOWN MENU---------------------------------
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true)
    }


    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        }

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu]);

    console.log(searchType)

    return(
        <div >
            <form onSubmit={handleSubmit}>
                <div className="search">
                    <input 
                            type="text" 
                            className="search-bar" 
                            placeholder="Search listing title"
                            value={query}
                            onChange={event => {
                                openMenu()
                                setQuery(event.target.value)
                            }}
                            required

                            />
                        <select
                            className="search-bar" 
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value)}
                        >
                            {searchTypeSelections.map(type =>
                                <option value={type} key={type}>{type}</option>
                            )}
                        </select>
                        <button type='submit' style={{backgroundColor:'white', border:'none'}}>
                            <img className="search-icon" onClick={handleSubmit} src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png">
                            </img>
                        </button>
                </div>
            </form>
            {showMenu &&
                <div className="search-bar-drop-down-menu">
                    <p>Listing Result...</p>
                    {query && allListingsArr.filter(listing => {
                        if (query === "") {
                            //if query is empty
                            return listing;
                        } else if (listing[searchType].toLowerCase().includes(query.toLowerCase())) {
                            //returns filtered array
                            return listing;
                        }
                    }).map((listing, index) => (
                        <NavLink to={`/listings/${listing.id}`} onClick={() => setQuery("")} style={{ textDecoration: 'none', color: 'black' }}>
                            <div key={index} className="drop-down-unit">
                                <p>{listing.name} - {listing.city}, {listing.state}</p>
                            </div>
                        </NavLink>
                    )
                    )
                    }
                </div>
            }
        </div>
    )
    };

export default SearchBarPage;