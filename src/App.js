import React, { useState, useRef } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import Menucontent from './components/Menucontent/Menucontent';
import ReactPlayer from 'react-player';
import VideoDetails from './components/VideoDetails/VideoDetails';
import './App.css';

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showSidebar, setShowSidebar] = useState(true);
    const inputRef = useRef(null);

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
        setShowSidebar(false);
    };

    const handleCloseVideo = () => {
        setSelectedVideo(null);
        setShowSidebar(true);
    };

    return (
        <div className="app">
            <Header setSearchResults={setSearchResults} inputRef={inputRef} />
            <div className="content">
                <Menucontent 
                    setSearchResults={setSearchResults} 
                    setSelectedVideo={setSelectedVideo} 
                    setShowSidebar={setShowSidebar} 
                    inputRef={inputRef} 
                    onVideoSelect={handleVideoSelect} // Pass function to handle video play
                />
                {selectedVideo ? (
                    <div className="video_player">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                            controls
                            playing
                            width="80%"
                            height="70vh"
                        />
                        <button className="close_button" onClick={handleCloseVideo}>Close</button>
                        <VideoDetails video={selectedVideo} />
                    </div>
                ) : (
                    <div className="search_results">
                        {searchResults.map((item) => (
                            <div
                                key={item.id.videoId}
                                className="search_result_item"
                                onClick={() => handleVideoSelect(item)}
                            >
                                <img
                                    src={item.snippet.thumbnails.medium.url}
                                    alt={item.snippet.title}
                                />
                                <div>
                                    <h3>{item.snippet.title}</h3>
                                    <p>{item.snippet.channelTitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {showSidebar && !searchResults.length && (
                <div className="app_page">
                    <Sidebar />
                    <RecommendedVideos onVideoSelect={handleVideoSelect} />
                </div>
            )}
        </div>
    );
}

export default App;
