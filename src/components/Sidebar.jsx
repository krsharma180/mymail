import React,{useState,useEffect} from 'react'
import '../css/sidebar.css';
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { PlusOutlined,InboxOutlined,CodeSandboxOutlined
    ,FolderOutlined,SendOutlined } from "@ant-design/icons";
import SidebarOption from "./SidebarOption";


function Sidebar() {
    let [options,setOptions]=useState([])
    const history=useHistory();
    useEffect(()=>{
        setOptions([{title:'Inbox',number:'55',Icon:InboxOutlined,selected:true},
        {title:'Drafts',number:'3',Icon:InboxOutlined,selected:false},
        {title:'Outbox',number:'5',Icon:InboxOutlined,selected:false},
        {title:'Sent Items',number:'6',Icon:InboxOutlined,selected:false},
        {title:'Favorites',number:'67',Icon:InboxOutlined,selected:false}])
    },[])

    const onOptionClick=(title)=>{

        setOptions(prev=>{
            let obj=prev.find(x=>x.title===title)
            let others=prev.filter(x=>x.title!==obj.title)
            if(obj){
                obj.selected=true;
                others.forEach(k=>k.selected=false)
            }

            return [...prev]
        })
        history.push('/'+title)
    }

    return (
        <div className='sidebar'>
            <button className='btnCompose' ><PlusOutlined></PlusOutlined> Compose</button>

            {options.map(i=>{
                return(
            <SidebarOption onOptionClick={()=>onOptionClick(i.title)} key={i.title} 
            selected={i.selected} Icon={i.Icon} title={i.title} number={i.number}></SidebarOption>
                )
            })}
            {/* <SidebarOption selected={true} Icon={InboxOutlined} title='Inbox' number='55'></SidebarOption>
            <SidebarOption Icon={CodeSandboxOutlined} title='Drafts' number='3'></SidebarOption>
            <SidebarOption Icon={SendOutlined} title='Outbox' number='5'></SidebarOption>
            <SidebarOption Icon={SendOutlined} title='Sent Items' number='6'></SidebarOption>
            <SidebarOption Icon={FolderOutlined} title='Favorites' number='67'></SidebarOption> */}

        </div>
    )
}

export default Sidebar
