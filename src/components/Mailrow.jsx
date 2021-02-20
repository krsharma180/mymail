import React from 'react'
import "../css/mailrow.css";
import { Checkbox } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";


function Mailrow({id,title,subject,description,isRead,timestamp}) {
    const history = useHistory();

    return (
        <div onClick={()=>{history.push('/Mails')}} className='mailRow'>
            <div className="emailrow_options">
                <Checkbox></Checkbox>
                <StarOutlined />
            </div>
            <div className='mailRow_content'>
                <h4 className="emailrow_title">
                    {title}
                </h4>   
                <div className="emailrow_message">
                    <h5>{subject}</h5>
                </div>
                <div className='emailrow_description'>
                    <p>{"- " + description}</p>
                </div>
            </div>

            <div className="mailrow-end">
                <h6>{timestamp}</h6>
            </div>
        
        </div>
    )
}

export default Mailrow
