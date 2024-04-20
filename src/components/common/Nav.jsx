import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { BsChatText } from "react-icons/bs";


import { BsPerson } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import '../../css/common/Nav.css'

export default function Nav() {
  const [activeIcon, setActiveIcon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    switch (window.location.pathname) {
      case '/main':
        setActiveIcon('home');
        break;
      case '/post':
        setActiveIcon('plus');
        break;
      case '/mypage':
        setActiveIcon('mypage');
        break;
      default:
        setActiveIcon(null);
    }
  }, [navigate]);

  const handlePlusButtonClick = () => {
    navigate('/post');
  }

  const handleMypageClick = () => {
    navigate('/mypage');
  }

  const handelHomeButtonClick = () => {
    navigate('/main');
  }

  const handleSearchClick = () => {
    setActiveIcon('search');
  }

  const handleChatClick = () => {
    setActiveIcon('chat');
  }

  return (
    <div className='Nav_bar'>
      <AiOutlineHome size='25' color={activeIcon === 'home' ? '#F5CA00' : '#000'} onClick={handelHomeButtonClick} />
      <MdOutlineLocalLaundryService size='28' color={activeIcon === 'search' ? '#F5CA00' : '#000'} onClick={handleSearchClick} />
      <BsChatText size='25' color={activeIcon === 'chat' ? '#F5CA00' : '#000'} onClick={handleChatClick} />
      <BsPerson size='25' color={activeIcon === 'mypage' ? '#F5CA00' : '#000'} onClick={handleMypageClick} />
    </div>
  );
}