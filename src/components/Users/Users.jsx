import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';



let Users = ({page, totalUserCount, onPageChanged, pageSize, users, ...props}) => {

    return <div >
       
        <Paginator page={page} onPageChanged={onPageChanged} totalItemsCount={totalUserCount} pageSize ={pageSize} />
        <div>
        {
            users.map(u => <User 
                user = {u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                unfollow = {props.unfollow}
                follow = {props.follow}
                 />)
                
        }</div>
    </div>
}

export default Users;