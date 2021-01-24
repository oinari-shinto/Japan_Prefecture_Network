const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        {id :1, message : "It's best Japanese guide Post Tokyo", likeCount : 15, img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Tokyo_Metropolis.svg/120px-Flag_of_Tokyo_Metropolis.svg.png'/>},
        {id :2, message : 'First publication release Post Chiba', likeCount : 25, img : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Chiba%2C_Chiba.svg/100px-Flag_of_Chiba%2C_Chiba.svg.png'></img>}
      ],
    newPostText: 'Samurai',
    profile: null
};


const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0,
                img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flag_of_Misato%2C_Saitama.svg/100px-Flag_of_Misato%2C_Saitama.svg.png'/>
            };
            return {
                ...state,
                posts : [...state.posts, newPost ],
                newPostText : ''
            };

        }
        case UPDATE_NEW_POST_TEXT: {
           return {
                ...state,
                newPostText : action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, 
                profile : action.profile
            } 
        }
        
        default:
            return state; 
    }

}
export const addPostCreator = () => ({type :  ADD_POST})    
export const updateNewPostTextCreator = (text) => ({type : UPDATE_NEW_POST_TEXT, newText : text})
export const setUserProfile = (profile) => ({type : SET_USER_PROFILE,  profile})

export default profileReducer;

