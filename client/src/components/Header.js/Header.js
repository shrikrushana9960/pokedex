import React,{useState} from 'react'
import { Avatar } from 'antd';
 const Header = () => {
    const [login, setLogin] = useState(false);
    if(localStorage.getItem("login")==="true")
    {
        setLogin(true);
    }
    return (
      <div style={{ display: "flex", height: "100px", width: "100%" }}>
        <Avatar
          size={64}
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Favtar&psig=AOvVaw0BWQXIN0mL5axf4uczXKb6&ust=1631960611103000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDh65rlhfMCFQAAAAAdAAAAABAD"
        ></Avatar>
      </div>
    );
}

export default Header;