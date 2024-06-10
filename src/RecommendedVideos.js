import React from 'react'

import './RecommendedVideos.css'

import VideoCard from './VideoCard'

const youtubeList = [
    {
        title : "College Hostel Management Website @vanguards",
        views : "2.1 Views",
        timestamp : "5 days ago",
        channelImage : "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
        channel : "SriTechTalks",
        image : "https://i9.ytimg.com/vi_webp/reOl5GBMjsg/mq2.webp?sqp=CMjokbMG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGA8gYyhlMA8=&rs=AOn4CLBxvjBivIU99T-6x3K4_vWNJl2qKw",
    },
    {
        title :"Creating a Telegram Chatbot @Food API",
        views : "2.1 Views",
        timestamp : "5 weeks ago",
        channelImage : "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
        channel : "SriTechTalks",
        image : "https://i9.ytimg.com/vi_webp/ju6qUyCDFh8/mq2.webp?sqp=CKDtkbMG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFggNyh_MA8=&rs=AOn4CLBHCIn-10ZDrS_Obvp5vba48gjzpQ",
    },
    {
        title : "How to Build a Food API Telegram Chatbot  Connect with Firestore Database",
        views : "1.1 Views",
        timestamp : "8 weeks ago",
        channelImage : "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain",
        channel : "SriTechTalks",
        image : "https://i9.ytimg.com/vi_webp/hkQLEEcxVK8/mq2.webp?sqp=CKDtkbMG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGE4gWihlMA8=&rs=AOn4CLCrpedMJYW9-locuIyFDJPBLD3FBg",
   
    }
]


function RecommendedVideos() {

    return(
        <div className='recommendedvideos'>
            <h2>Recommended</h2>

            <div className='recommendedvideos_videos'>
                {
                    youtubeList.map(each => (
                        <VideoCard videoDetails={each} />
                    )
                        
                    )
                }             
                 
                       

                {/* <VideoCard
                    tile = "How to Build a Food API Telegram Chatbot  Connect with Firestore Database"
                    views = "1.1 Views"
                    timestamp = "8 weeks ago"
                    channelImage = "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain"
                    channel = "SriTechTalks"
                    image = "https://i9.ytimg.com/vi_webp/hkQLEEcxVK8/mq2.webp?sqp=CKDtkbMG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGE4gWihlMA8=&rs=AOn4CLCrpedMJYW9-locuIyFDJPBLD3FBg"
                />   


                <VideoCard
                    tile = "How to Build a Food API Telegram Chatbot  Connect with Firestore Database"
                    views = "2.0 Views"
                    timestamp = "1 weeks ago"
                    channelImage = "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain"
                    channel = "SriTechTalks"
                    image = "https://i.ytimg.com/an_webp/tw5SybhCav4/mqdefault_6s.webp?du=3000&sqp=CObHkbMG&rs=AOn4CLCuawkPMmxYGfTyLTPu_u7LG0E4QQ"
                />   


                <VideoCard
                    tile = "How to Build a Food API Telegram Chatbot "
                    views = "2.8 Views"
                    timestamp = "4 weeks ago"
                    channelImage = "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain"
                    channel = "SriTechTalks"
                    image = "https://i9.ytimg.com/vi_webp/-SDrZZQpZlI/mq3.webp?sqp=CMzvkbMG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDUgZChlMA8=&rs=AOn4CLBKL03pFZaBQB5Mz50MmhA9C2A--Q"
                />   


                <VideoCard
                    tile = "Sports scheduler website"
                    views = "2.8 Views"
                    timestamp = "2 weeks ago"
                    channelImage = "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain"
                    channel = "SriTechTalks"
                    image = "https://www.gstatic.com/youtube/img/promos/growth/1fff1c4fc4441b607c2c37cf54d64540eabd450d205a81321c8aa48ddaa4e456_1280x720.jpeg"
                />   


                <VideoCard
                    tile = "Game Scheduler"
                    views = "2.2 Views"
                    timestamp = "5 weeks ago"
                    channelImage = "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain"
                    channel = "SriTechTalks"
                    image = "https://i9.ytimg.com/vi/-SDrZZQpZlI/mqdefault.jpg?sqp=CMzvkbMG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBUgYyhlMA8=&rs=AOn4CLDmz19C34L2JJijvXFTurJLjhzDxQ"
                />   


                <VideoCard
                    tile = "Sports scheduler website"
                    views = "2.0 Views"
                    timestamp = "5 weeks ago"
                    channelImage = "https://th.bing.com/th/id/OIP.WOkyIvBdaQw8iX9L4h7RawHaEK?rs=1&pid=ImgDetMain"
                    channel = "SriTechTalks"
                    image = "https://i9.ytimg.com/vi_webp/aRCTtxUIYkQ/mq2.webp?sqp=CMzvkbMG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEMgSyhlMA8=&rs=AOn4CLBasDPxvRRH--C8X5B2G_NbPCSK6A"
                />      
 */}

                
 
            </div>
 
        </div>
    )

}

export default RecommendedVideos;