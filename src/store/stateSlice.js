import { createSlice } from "@reduxjs/toolkit";
import { searchByWord } from "./stateAction";

const stateSlice = createSlice({
    name: "app",
    // Global state
    initialState: {
        // Theme state
        darkMode: false,
        // Font state
        font: {},
        // Dropdown state
        dropDown: false,
        // searchWord state
        searchWord: "",
        // Error messages state
        messages: "",
        // Api loading state
        loading: false,
        // Api response state
        wordData: [],
        // Api success state
        success: false,
        // Api failure state
        error: false,
        // Input form value state
        formWord: ""
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode
        },
        setFont: (state, action) => {
            state.font = action.payload
        },
        toggleDropDown: (state) => {
            state.dropDown = !state.dropDown
        },
        setSearchWord: (state, action) => {
            state.searchWord = action.payload
        },
        setFormWord: (state, action) => {
            state.formWord = action.payload
        },
        setFavTheme: (state, action) => {
            state.darkMode = action.payload
        },
        reset: (state) => {
            state.wordData = [];
            state.success = false;
            state.error = false;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchByWord.pending, (state) => {
            state.loading = true
            state.error=false;
            state.wordData=[]
        })
        .addCase(searchByWord.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.error=false;
            state.wordData = action.payload
        })
        .addCase(searchByWord.rejected, (state, action) => {
            state.loading = false
            state.success = false
            state.messages = action.payload
            state.error=true;
            state.wordData=[]
        })
    },
})

export default stateSlice.reducer
export const { toggleTheme, setFont, toggleDropDown, setSearchWord, setFormWord, setFavTheme, reset } = stateSlice.actions