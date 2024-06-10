 
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import './Header.css';

function Header({ setSearchResults, inputRef }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async () => {
        const apiKey = 'AIzaSyDfWDmVYnNyG8Ku-cQp6QsFpPfx5fb2IXA';
        const baseUrl = 'https://www.googleapis.com/youtube/v3/search';

        try {
            const searchResponse = await axios.get(baseUrl, {
                params: {
                    part: 'snippet',
                    maxResults: 50,
                    q: searchQuery,
                    key: apiKey
                }
            });

            const videoIds = searchResponse.data.items.map(item => item.id.videoId).join(',');

            const videosResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    part: 'snippet,statistics',
                    id: videoIds,
                    key: apiKey
                }
            });

            setSearchResults(videosResponse.data.items);
        } catch (error) {
            console.error("Error fetching search results", error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <img 
                    className="header-logo"
                    src="https://th.bing.com/th/id/OIP.3FDms2N8CJkphnDbQV46mQHaHa?rs=1&pid=ImgDetMain" 
                    alt="logo"
                />
            </div>

            <div className="header_input">
                <input 
                    ref={inputRef}
                    className="input__"
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <SearchIcon 
                    className="header_inputButton"
                    onClick={handleSearch}
                />
            </div>
            
            <div className="header_icons">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar
                    src="https://avatars.githubusercontent.com/u/110623376?s=400&u=af4bd79eda7939074a3a7995348e21969610ba2b&v=4" 
                    alt="profile"
                />
            </div>
        </div>
    );
}

export default Header;
