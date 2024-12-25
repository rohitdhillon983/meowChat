import React from 'react'
import {
    Add as AddIcon,
    Menu as MenuIcon,
    Search as SearchIcon,
    Group as GroupIcon,
    Logout as LogoutIcon,
    Notifications as NotificationsIcon,
    Person2,
    Mode,
  } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    setIsNewGroup,
    setIsNotification,
    setIsSearch,
  } from "../../redux/reducers/misc";

const Footer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { notificationCount } = useSelector((state) => state.chat);

    const openSearch = () => dispatch(setIsSearch(true));
    const openNewGroup = () => {
        dispatch(setIsNewGroup(true));
    };
    const openNotification = () => {
        dispatch(setIsNotification(true));
        dispatch(resetNotificationCount());
    };
    
    const navigateToGroup = () => navigate("/groups");
    const handleNavigate =()=>navigate("/profile");
  return (<>
    <div className='dark:bg-black dark:text-white min-[426px]:hidden py-2 border-t-2'>
      <div>
      <div className=" flex justify-center items-center gap-4">
              <div className='hover:text-gray-600 z-20 ' onClick={openSearch}><SearchIcon />
              </div>

              <div className='hover:text-gray-600 z-20' onClick={openNewGroup}><AddIcon />
            </div>

              <div className='hover:text-gray-600 z-20' onClick={navigateToGroup}><GroupIcon />
            </div>

              <div className='hover:text-gray-600 z-20' onClick={openNotification}
                value={notificationCount}><NotificationsIcon />
            </div>

              <div className='hover:text-gray-600 z-20' onClick={handleNavigate}>
                <Person2></Person2>
              </div>
              
            </div>
      </div>
    </div>
    <div className='dark:bg-black dark:text-gray-400 text-center max-[425px]:hidden'>
        <p>@2024 All rights reserver. Developed by <a className='dark:text-white' href='https://rohit-dhillon.netlify.app/'>rohit dhillon</a></p>
    </div>
    </>
  )
}

export default Footer
