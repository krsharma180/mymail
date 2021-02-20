import React from 'react'
import '../css/sidebarOption.css'


function SidebarOption({Icon,title,number,selected,onOptionClick}) {
    return (
        <div onClick={()=>onOptionClick()} className={`sidebar_option ${selected && 'sidebar_option_active'}`}>
            <Icon className='icon'></Icon>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
