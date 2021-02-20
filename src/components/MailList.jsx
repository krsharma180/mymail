import React , {useState,useEffect} from 'react'
import "../css/mailList.css";
import { Checkbox } from "antd";
import { CaretDownFilled,SendOutlined,SettingOutlined } from "@ant-design/icons";
import Mailrow from "./Mailrow";
import { useHistory,useLocation } from "react-router-dom";

function MailList(props) {

        const [mails,setMails] = useState([
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Inbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Outbox'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Sent Items'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Drafts'},
            {title:'test@gmail.com', timestamp:'12th August 2020',
            description:'This is a test message body',subject:'This is sample mail',folder:'Favorites'},
        ])

        const history=useHistory();
        const location = useLocation();
        useEffect(() => {

            const currentPath = location.pathname;
          const searchParams = new URLSearchParams(location.search);
 
            if(currentPath=='/'){
                history.push('/Inbox')
            }

        }, [location]);

    return (
        <div className='emailList'>
            <div className="emailList_settings">
                <div className="emailList_settings_left">
                <Checkbox></Checkbox>
                <CaretDownFilled></CaretDownFilled>
                <SendOutlined></SendOutlined>
                </div>

                <div className="emailList_settings_right">
                <SettingOutlined></SettingOutlined>
                </div>
            </div>

            <div className="emailList_list">

                {mails.map(i=>{
                    if(location.pathname== '/'+i.folder){
                        return(
                            <Mailrow title={i.title}
                        description={i.description} subject={i.subject}
                        timestamp={i.timestamp}></Mailrow>
                        )
                    }
                })}
                    
                      {/* <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>

<Mailrow title='test@gmail.com'
                    description='This is a test message body' subject='This is sample mail'
                    timestamp='12th August 2020'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>


<Mailrow title='test@gmail.com'
                    description='This is a test message body' subject='This is sample mail'
                    timestamp='12th August 2020'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow>
                      <Mailrow title='test@gmail.com' timestamp='12th August 2020'
                    description='This is a test message body' subject='This is sample mail'></Mailrow> */}
            </div>
        </div>
    )
}

export default MailList
