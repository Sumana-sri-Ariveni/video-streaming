import React from 'react';
import './Sidebar.css';
import SidebarRow from '../SidebarRow/SidebarRow';
import HomeRounded from '@mui/icons-material/HomeRounded';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

function Sidebar() {
    const sidebarItems = [
        { 
            Icon: HomeRounded, 
            title: "Home", 
            selected: true ,
        },
        {
            Icon: WhatshotRoundedIcon, 
            title: "Shorts" ,

        },
        { 
            Icon: SubscriptionsRoundedIcon, 
            title: "Subscription" ,
        },

        {
            Icon: VideoLibraryRoundedIcon,
            title: "Your Channel",
         },
        {
            Icon: HistoryRoundedIcon,
            title: "History", 
        },
        { 
            Icon: OndemandVideoRoundedIcon,
            title: "Your Videos" ,
        },
        { 
            Icon: PlaylistPlayRoundedIcon, 
            title: "Playlist" ,
        },
        { 
            Icon: WatchLaterRoundedIcon, 
            title: "Watch later" ,
        },
        { 
            Icon: ThumbUpAltRoundedIcon, 
            title: "Liked Videos" ,
        },
        { 
            Icon: ExpandMoreRoundedIcon, 
            title: "Show more",
        }
    ];

    return (
        <div className='sidebar'>
            {sidebarItems.slice(0, 3).map((each) => (
                <SidebarRow sidebarDetails={each} />
            ))}
            <hr />
            {sidebarItems.slice(3).map((each) => (
                <SidebarRow  sidebarDetails={each} />
            ))}
            <hr />
        </div>
    ); 
}

export default Sidebar;
