// import React from 'react';
// import './SidebarRow.css';

// const SidebarRow = (props) => {
//     const {sidebarDetails} = props
//     const { Icon, title, selected }= sidebarDetails
//     return (
//         <div className={`sidebarRow ${selected ? 'selected' : ''}`}>
//             <Icon className="sidebarRow_icon" />
//             <h2 className="sidebarRow_title">{title}</h2>
//         </div>
//     );
// }

// export default SidebarRow;

import React from 'react';
import './SidebarRow.css';

const SidebarRow = ({ sidebarDetails, handleClick }) => {
    const { Icon, title, selected } = sidebarDetails;

    const handleRowClick = () => {
        if (handleClick) {
            handleClick(title); // Pass the title to the parent component
        }
    };

    return (
        <div className={`sidebarRow ${selected ? 'selected' : ''}`} onClick={handleRowClick}>
            <Icon className="sidebarRow_icon" />
            <h2 className="sidebarRow_title">{title}</h2>
        </div>
    );
}

export default SidebarRow;

