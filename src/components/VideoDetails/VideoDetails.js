import React from 'react';
import './VideoDetails.css';

function VideoDetails({ video }) {
    const { snippet, statistics } = video;

    return (
        <div className="video-details">
            <h3>{snippet.title}</h3>
            <p>{snippet.description}</p>
            <p><strong>Channel:</strong> {snippet.channelTitle}</p>
            {statistics ? (
                <>
                    <p><strong>Views:</strong> {statistics.viewCount}</p>
                    <p><strong>Likes:</strong> {statistics.likeCount}</p>
                </>
            ) : (
                <p>No statistics available</p>
            )}
        </div>
    );
}

export default VideoDetails;
