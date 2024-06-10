// import React from "react";
// import axios from 'axios';

// import './Menucontent.css';

// const Menucontent = ({ setSearchResults, setSelectedVideo, setShowSidebar, inputRef }) => {
//     const fetchVideosByCategory = async (category) => {
//         try {
//             const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//                 params: {
//                     part: 'snippet',
//                     maxResults: 50,
//                     q: category,
//                     type: 'video',
//                     key: 'AIzaSyAIub1_Oug4LB2wB9C6ETeP3U8PSVTDIZU' // Replace with your actual YouTube API key
//                 }
//             });
//             return response.data.items;
//         } catch (error) {
//             console.error("Error fetching videos by category:", error);
//             return [];
//         }
//     };

//     const handleCategoryClick = async (category) => {
//         if (category === 'ALL') {
//             setSearchResults([]);
//             setSelectedVideo(null);
//             setShowSidebar(true);
//             if (inputRef.current) {
//                 inputRef.current.focus();
//             }
//         } else {
//             const videos = await fetchVideosByCategory(category);
//             setSearchResults(videos);
//             setSelectedVideo(null);
//             setShowSidebar(true);
//             if (inputRef.current) {
//                 inputRef.current.focus();
//             }
//         }
//     };

//     return (
//         <div className="render_start_page">
//             {['ALL', 'Traditional Music', 'News', 'Telugu Cinema', 'Computer Programming', 'Gaming','Recent Uploads', 'Tech' ,' songs','Politics','News','Web Series','Movies'].map((category) => (
//                 <button key={category} className="home_button" onClick={() => handleCategoryClick(category)}>
//                     {category}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default Menucontent;


 // Menucontent.js
 
 //'AIzaSyDfWDmVYnNyG8Ku-cQp6QsFpPfx5fb2IXA
 



 import React from "react";
import axios from 'axios';

import './Menucontent.css';

const Menucontent = ({ setSearchResults, setSelectedVideo, setShowSidebar, inputRef }) => {
    const fetchVideosByCategory = async (category) => {
        const apiKey = 'AIzaSyDfWDmVYnNyG8Ku-cQp6QsFpPfx5fb2IXA'; // Replace with your YouTube API key
        const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
        try {
            const response = await axios.get(baseUrl, {
                params: {
                    part: 'snippet',
                    maxResults: 50,
                    q: category,
                    type: 'video',
                    key: apiKey
                }
            });
            const videoIds = response.data.items.map(item => item.id.videoId).join(',');

            const videosResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    part: 'snippet,statistics',
                    id: videoIds,
                    key: apiKey
                }
            });

            setSearchResults(videosResponse.data.items);
        } catch (error) {
            console.error("Error fetching videos by category:", error);
        }
    };

    const handleCategoryClick = async (category) => {
        if (category === 'ALL') {
            setSearchResults([]);
            setSelectedVideo(null);
            setShowSidebar(true);
            if (inputRef.current) {
                inputRef.current.focus();
            }
        } else {
            await fetchVideosByCategory(category);
            setSelectedVideo(null);
            setShowSidebar(true);
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    return (
        <div className="render_start_page">
            {['ALL', 'Traditional Music', 'News', 'Telugu Cinema', 'Computer Programming', 'Gaming', 'Recent Uploads', 'Tech', 'Songs', 'Politics', 'Web Series', 'Movies'].map((category, index) => (
                <button key={index} className="home_button" onClick={() => handleCategoryClick(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Menucontent;
