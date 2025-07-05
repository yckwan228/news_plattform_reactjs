import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../style/SearchBar.css'; // Importieren Sie einen CSS-Style

const SearchBar = () => {
    const [keyword, setKeyword] = useState('');

    const handleSearchInputChange = (event) => {
        setKeyword(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching for: ${keyword}`);
        // Add your search functionality here
    }


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Ein EventListener, um die Fenstergröße zu überwachen
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup, um den EventListener zu entfernen, wenn die Komponente nicht mehr gerendert wird
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

        <div>

            {windowWidth <= 768 ? (

                <div className='search'>

                    <form onSubmit={handleSearchSubmit} className='searchForm'>
                        <input
                            className='searchInput'
                            type="text"
                            placeholder="搜尋關鍵字"
                            value={keyword}
                            onChange={handleSearchInputChange}
                        />

                    </form>
                        <SearchIcon type="submit" className='searchBtn' />
                    </div>

        

            ) : (


                <div className='search'>

                    <form onSubmit={handleSearchSubmit} className='searchForm'>
                        <input
                            className='searchInput'
                            type="text"
                            placeholder="搜尋關鍵字"
                            value={keyword}
                            onChange={handleSearchInputChange}
                        />
                        <SearchIcon type="submit" className='searchBtn' />
                    </form>

                </div>

            )}

        </div>

    );
}


export default SearchBar;