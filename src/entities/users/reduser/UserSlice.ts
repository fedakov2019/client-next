<<<<<<< HEAD
=======

>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
import { IUser } from "@/features/auth/model/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchSesion } from "../user-api";
import { RootStore } from "@/entities/store";

interface UserState {
<<<<<<< HEAD
  users: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: { id: 0, login: "", rolesId: 0, valueRole: "", iat: 0, exp: 0 },
  isLoading: false,
  error: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSesion.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.error = "";
        state.users = action.payload;
      })
      .addCase(fetchSesion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSesion.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ? action.error.message : "";
      });
  },
});
export const userSelector = (state: RootStore) => state.userReduser;
export default userSlice.reducer;
=======
    users:IUser;
    isLoading: boolean;
    error:string;
    
}

const initialState: UserState={
    users:{id: 0,
        login: '',
        rolesId: 0,
        valueRole: '',
        iat: 0,
        exp: 0},
    isLoading:false,
    error:''

}
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchSesion.fulfilled,(state, action:PayloadAction<IUser>)=>{
         state.isLoading =false;
         state.error='';
         state.users =action.payload;
         
        })
        .addCase(fetchSesion.pending,(state)=>{
            state.isLoading =true;
            
            
           })
        .addCase(fetchSesion.rejected,(state, action)=>{
            state.isLoading =false;
            state.error = action.error.message?action.error.message:''
            
            
            
           });

    },
        
       
    
});
export const userSelector = (state: RootStore) => state.userReduser;
export default userSlice.reducer;
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
