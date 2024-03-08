import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const itemList=["Woman","Man","Child","Social"];

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
        
  return (
    <div>
        <div className="nav_top">
            <div>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div onClick={gotoLogin}>
                {auth ? "로그아웃":"로그인"}
            </div>
        </div>
        <div className="nav_mid">
            <img className="main_image" src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg" />
        </div>
        <div className="list_area">
            <div>
                <ul className="item_display">
                    {itemList.map((item) => <li>{item}</li>)}
                </ul>
            </div>
            <div>
            <FontAwesomeIcon icon={faSearch} /> <input type="text"/>
            </div>
        </div>
    </div>
  )
}

export default NavBar
