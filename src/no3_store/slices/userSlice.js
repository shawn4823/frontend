import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { userTotalGetApi } from "../apis/user.api"


export const userTotalGetSlice = createAsyncThunk(  //middleware 
    "userTotalGetSlice",
    async (_, thunkApi) => {
        try {

            return await userTotalGetApi()
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)



const initialState = {
    users: [],
    username: '',
    isLogin: false,
    loading : false,        
    error : null    
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload
            state.isLogin = true
        },

        register: (state, action) => {
            state.users = [
                ...state.users,
                {
                    id: action.payload.id,
                    username: action.payload.user.username,
                    password: action.payload.user.password
                }
            ]
        },
        logout: (state) => {
            state.isLogin = false,
                state.username = ""
        }
    },
    extraReducers: (builder) => {       // api를 받으면 아래 처럼 설정 get 방식이다.
        builder
            .addCase(userTotalGetSlice.pending, (state) => {
                state.loading = true 
                state.error = null    //get 방식이라 //뭔가 로딩이 되는 과정 
            })
            .addCase(userTotalGetSlice.fulfilled, (state, action) => {
                state.users = action.payload    //get 방식이라 // 실행이 되는 과정
                state.loading = false
            })
            .addCase(userTotalGetSlice.rejected, (state, action) => {
                state.error = action.payload    //get 방식이라
                state.loading = false
            })
    }
})

export const { login, register, logout } = userSlice.actions;
export default userSlice.reducer;