import React from 'react'
import "../css/mail.css";
import { ArrowLeftOutlined,DeleteOutlined,SendOutlined,MenuOutlined,PrinterOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function Mail() {
    const history = useHistory();

    return (
        <div className='mail'>
            <div className="mail_tools">
                <div className="mail_tools_left">
                <ArrowLeftOutlined onClick={()=>{history.goBack()}} className='backbtn'/>
                <DeleteOutlined style={{cursor:'pointer'}}/>
                <SendOutlined style={{cursor:'pointer'}}/>
                <MenuOutlined style={{cursor:'pointer'}}/>
                </div>
                <div className="mail_tools_right">
                <PrinterOutlined style={{cursor:"pointer"}}/>
                </div>
            </div>

            <div className='mailcontent'>
                <div className="mailcontent_header">
                    <h2>This is a sample subject</h2>
                    {/* <p>Title</p>
                    <p>10 PM </p> */}
                </div>
                <div className="mailcontent_body">
                    <p>
                        This is the main message of the mail
                        <br></br>
                        <br></br>

                        Best Regards, Kartik
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Mail
