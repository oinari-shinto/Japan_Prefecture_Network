import { stopSubmit } from "redux-form";
import { profileApi, userApi } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id :1, message : "It's best Japanese guide Post Tokyo", likeCount : 15, img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Tokyo_Metropolis.svg/120px-Flag_of_Tokyo_Metropolis.svg.png'/>},
        {id :2, message : 'First publication release Post Chiba', likeCount : 25, img : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Chiba%2C_Chiba.svg/100px-Flag_of_Chiba%2C_Chiba.svg.png'></img>}
      ],
    newPostText: 'Samurai',
    profile: null,
    status: "",
};


const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likeCount: 0,
                img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flag_of_Misato%2C_Saitama.svg/100px-Flag_of_Misato%2C_Saitama.svg.png'/>
            };
            return {
                ...state,
                posts : [...state.posts, newPost ],
                
            };

        }
        
        case SET_USER_PROFILE: {
            return {
                ...state, 
                profile : action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state, 
                status : action.status
            };
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        
        default:
            return state; 
    }

}
export const addPostCreator = (newPostText) => ({type :  ADD_POST, newPostText})    
export const setUserProfile = (profile) => ({type : SET_USER_PROFILE,  profile})
export const setStatus = (status) => ({type : SET_STATUS,  status})
export const deletePost = (postId) => ({type : DELETE_POST,  postId})
export const savePhotoSuccess = (photos) => ({type : SAVE_PHOTO_SUCCESS,  photos})


export const getUserProfile = (userId) => async (dispatch) => {
       
       let response = await userApi.getProfile(userId);
        dispatch(setUserProfile(response.data));   
    }  

export const getStatus = (userId) => async (dispatch) => {
       
    let response = await profileApi.getStatus(userId);
    dispatch(setStatus(response.data)); 
}

export const  updateStatus = (status) => async (dispatch) => {
    //try {} catch (error) {}   
    let response = await profileApi.updateStatus(status);
    if(response.data.resultCode === 0) {
         dispatch(setStatus(status)); 
    }
}  
export const  savePhoto = (file) => async (dispatch) => {
       
    let response = await profileApi.savePhoto(file);

    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos)); 
    }
}

export const  saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileApi.saveProfile(profile);

    if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId)); 
    }
    else {
        let message = response.data.messages[0];
        let action = stopSubmit('edit-profile', {_error: message});
        dispatch(action);
    }
}


export default profileReducer;

