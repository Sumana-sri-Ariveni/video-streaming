// import React from 'react';
 
// import './VideoCard.css';

// import Avatar from '@mui/material/Avatar';

// const VideoCard = (props) => {
//     const {videoDetails} = props
//     const { image, title, channel, views, timestamp, channelImage } = videoDetails
//     const videoRendered = () => {
//         return (
//             <div>
//                 <video className='video-dim' controls >
//                     <source src="https://videos.pexels.com/video-files/20683835/20683835-sd_540_960_30fps.mp4" type='video/mp4'/>
//                 </video>
//             </div>
//         )
//     }
//     return (
//         <div className='videocard' onClick={videoRendered}>
//             <img src={image} alt="" onClick={videoRendered}/>
//             <div className='videocard_info'>
//                 <Avatar className='videocard_avatar' alt={channel} src={channelImage} />
//                 <div className='video_text'>
//                     <h4>{title}</h4>
//                     <p>{channel}</p>
//                     <p>
//                         {views} • {timestamp}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default VideoCard;



import React from 'react';
import './VideoCard.css';
import Avatar from '@mui/material/Avatar';
 

const VideoCard = ({ videoDetails }) => {
    const { image, title, channel, views, timestamp, channelImage, videoId } = videoDetails;

    const handleClick = () => {
        // Play the video
        window.open(videoId);
    };

    return (
        <div className='videocard' onClick={handleClick}>
            <img src={image} alt="" />
            <div className='videocard_info'>
                <Avatar className='videocard_avatar' alt={channel} src={channelImage} />
                <div className='video_text'>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
