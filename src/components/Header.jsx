import React from "react";
import "../css/header.css";
import { Avatar } from 'antd';
import { MenuOutlined,SearchOutlined,
    CaretDownOutlined,AppstoreOutlined,NotificationOutlined  } from "@ant-design/icons";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
            <MenuOutlined size={100} style={{cursor:"pointer"}} />
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"></img> */}
      </div>

      <div className="header_middle">
            <SearchOutlined />
            <input type="text" placeholder="Search Mails"></input>
            <CaretDownOutlined style={{cursor:"pointer"}}/>
      </div>

      <div className="header_right">
            <AppstoreOutlined style={{cursor:"pointer"}} />
            <NotificationOutlined style={{cursor:"pointer"}}/>
            <Avatar style={{cursor:"pointer"}}
      src={<img width="30px" height="30px" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    />
      </div>
    </div>
  );
}

export default Header;
