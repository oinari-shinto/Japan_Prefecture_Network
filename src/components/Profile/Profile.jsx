import React from 'react';
import MyPost from './MyPost/MyPost';
import s from'./Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Dialogs from '../Dialogs/Dialogs';





const Profile = (props) => {

  
  



  
  
  return (
  <div>
   <ProfileInfo />
   <MyPost posts={props.posts}/>

  
  </div>


  )
}
  
export default Profile;

    

  
  
  
