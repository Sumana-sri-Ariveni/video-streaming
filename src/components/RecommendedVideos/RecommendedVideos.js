// import React from 'react'

// import './RecommendedVideos.css'

// import VideoCard from '../VideoCard/VideoCard'

// const youtubeList = [
//     {
//         title : "College Hostel Management Website @vanguards",
//         views : "2.1 Views",
//         timestamp : "5 days ago",
//         channelImage : "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
//         channel : "SriTechTalks",
//         image : "https://i9.ytimg.com/vi_webp/IPh6pcMlVGY/mq2.webp?sqp=CKiIlrMG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGQgZChkMA8=&rs=AOn4CLA2nIE32AH5EeVzuY93D9y01KTS2Q",
//     },
//     {
//         title :"Creating a Telegram Chatbot @Food API",
//         views : "2.1 Views",
//         timestamp : "5 weeks ago",
//         channelImage : "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
//         channel : "SriTechTalks",
//         image : "https://i9.ytimg.com/vi_webp/IPh6pcMlVGY/mq2.webp?sqp=CKiIlrMG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGQgZChkMA8=&rs=AOn4CLA2nIE32AH5EeVzuY93D9y01KTS2Q",
//      },
//     {
//         title : "How to Build a Food API Telegram Chatbot  Connect with Firestore Database",
//         views : "1.1 Views",
//         timestamp : "8 weeks ago",
//         channelImage : "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
//         channel : "SriTechTalks",
//         image : "https://i9.ytimg.com/vi_webp/IPh6pcMlVGY/mq2.webp?sqp=CKiIlrMG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGQgZChkMA8=&rs=AOn4CLA2nIE32AH5EeVzuY93D9y01KTS2Q",
//     }
// ]


// function RecommendedVideos() {

//     return(
//         <div className='recommendedvideos'>
//             <h2>Recommended</h2>

//             <div className='recommendedvideos_videos'>
//                 {
//                     youtubeList.map(each => (
//                         <VideoCard videoDetails={each} />
//                     )
                        
//                     )
//                 }             

//                 <video className='video-dim' controls >
//                     <source src="https://videos.pexels.com/video-files/20683835/20683835-sd_540_960_30fps.mp4" type='video/mp4'/>
//                 </video>
 
//             </div>
 
//         </div>
//     )

// }

// export default RecommendedVideos;





import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './RecommendedVideos.css';
    
    const youtubeList = [
        {
            title: "College Hostel Management Website @vanguards",
            views: "2.1M Views",
            timestamp: "5 days ago",
            channelImage: "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
            channel: "SriTechTalks",
            image: "/assets/img1.png",
            videoId: "https://youtu.be/D4a1IYH17PI",
        },
        // Add more video objects here...

        {
            title: "Connect Website With Firestore Database.",
            views: "2.1M Views",
            timestamp: "5 days ago",
            channelImage: "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
            channel: "SriTechTalks",
            image:"/assets/img2.png",
            videoId: "https://youtu.be/-SDrZZQpZlI",
        },
        { 
            title: "College Hostel management System ",
            views: "2.1M Views",
            timestamp: "5 days ago",
            channelImage: "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
            channel: "SriTechTalks",
            image: "/assets/img3.png",
            videoId: "https://youtu.be/reOl5GBMjsg",
        },
        {
            title: "How to create signup form and connected with Firebase,Database",
            views: "2.1M Views",
            timestamp: "5 days ago",
            channelImage: "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
            channel: "SriTechTalks",
            image: "/assets/img4.png",
            videoId: "https://youtu.be/IPh6pcMlVGY",
        },
    
        {
            title: "Creating a Telegram Chatbot @Food API",
            views: "2.1M Views",
            timestamp: "5 days ago",
            channelImage: "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
            channel: "SriTechTalks",
            image: "/assets/img5.png",
            videoId: "https://youtu.be/ju6qUyCDFh8",
        },
    
        {
            title: "How to Build a Food API Telegram Chatbot with Firestore Database" ,
             views: "2.1M Views",
            timestamp: "5 days ago",
            channelImage: "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
            channel: "SriTechTalks",
            image: "/assets/img6.png",
            videoId: "https://youtu.be/hkQLEEcxVK8",
        },
    
        {
            title: "Connect Website with database",
            views: "2.1M Views",
            timestamp: "5 days ago",
            channelImage: "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
            channel: "SriTechTalks",
            image: "/assets/img7.png",
            videoId: "https://youtu.be/-SDrZZQpZlI",
        },
    
        {
            title: "How to connect website with Database",
            views: "2.1M Views",
            timestamp: "5 days ago",
            channelImage: "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
            channel: "SriTechTalks",
            image: "/assets/img8.png",
            videoId: "https://youtu.be/4T2N6DJ7fPk",
        },
    
        {
            title: "How to store Authencation Data in Database",
            views: "2.1M Views",
            timestamp: "5 days ago",
            channelImage: "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
            channel: "SriTechTalks",
            image : "/assets/img9.png",
            videoId: "https://youtu.be/IPh6pcMlVGY",
        },
    ];
    
     
    function RecommendedVideos() {
        const handleVideoSelect = (videoId) => {
            // Implement logic to display the video
            console.log("Video selected:", videoId);
        };
    
        const rows = [];
        for (let i = 0; i < youtubeList.length; i += 3) {
            const videosInRow = youtubeList.slice(i, i + 3).map((video) => (
                <VideoCard 
                    key={video.title} 
                    videoDetails={video} 
                    onVideoSelect={handleVideoSelect} 
                />
            ));
            rows.push(
                <div className="recommendedVideos_row" key={i}>
                    {videosInRow}
                </div>
            );
        }
    
        return (
            <div className='recommendedVideos'>
                {rows}
            </div>
        );
    }
    
    export default RecommendedVideos;