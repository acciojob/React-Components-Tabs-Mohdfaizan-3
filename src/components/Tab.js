import React from "react";

const Tab = ({TabName}) => {
    return (
        <div id={`${TabName}-tab`} >
         {TabName}
        </div>
    )
}

export default Tab;