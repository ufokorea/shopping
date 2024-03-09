import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const itemList=["Woman","Man","Divided", "신생아/유아", "H&M", "Sale", "지속가능성"];

const NavBar = ({auth,setAuth}) => {

    const navigate = useNavigate();
    
    const gotoLogin =() => {
        if(auth) {
            setAuth(false)
            navigate(`/login`);
        } else {
            navigate(`/login`);
        }
    }

    const getKeySearch =(event) => {
        if(event.key == "Enter" ) {
            navigate(`/?q=${event.target.value}`);
            event.target.value = null;
        }
    }

    const gotoHome=()=>{
        navigate(`/`);
    }        
  return (
    <div>
        <div className="nav_top">
            <div>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="login_area" onClick={gotoLogin} > 
                {auth ? "로그아웃":"로그인"}
            </div>
        </div>
        <div className="nav_mid" onClick={gotoHome}>
            <img className="main_image" src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg" />
        </div>
        <div className="list_area">
            <div>
                <ul className="item_display">
                    {itemList.map((item) => <li>{item}</li>)}
                </ul>
            </div>
            <div className="search_area">
                <div >
                    <FontAwesomeIcon icon={faSearch} className="searchIcon"/> <input type="text" className="input_box" onKeyPress={(event)=>getKeySearch(event)}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
