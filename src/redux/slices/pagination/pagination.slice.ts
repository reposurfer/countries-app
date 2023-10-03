import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PaginationSlice {
    selectedPage: number,
    countriesPerPage: number
}

const initialState: PaginationSlice = {
    selectedPage: 1,
    countriesPerPage: 12
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setSelectedPage: (state, action: PayloadAction<number>) => {
            state.selectedPage = action.payload
        },
        setCountriesPerPage: (state, action: PayloadAction<number>) => {
            state.countriesPerPage = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedPage, setCountriesPerPage } = paginationSlice.actions

export default paginationSlice.reducer