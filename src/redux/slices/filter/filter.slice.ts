import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterOptions {
    name: boolean;
    region: boolean;
    capital: boolean;
}

export interface FilterSlice {
    isOpen: boolean;
    options: FilterOptions;
}

const initialState: FilterSlice = {
    isOpen: false,
    options: { name: true, region: true, capital: true },
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
        setNameOption: (state, action: PayloadAction<boolean>) => {
            state.options.name = action.payload
        },
        setRegionOption: (state, action: PayloadAction<boolean>) => {
            state.options.region = action.payload
        },
        setCapitalOption: (state, action: PayloadAction<boolean>) => {
            state.options.capital = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setIsOpen, setNameOption, setRegionOption, setCapitalOption } = filterSlice.actions

export default filterSlice.reducer