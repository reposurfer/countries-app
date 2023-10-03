import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Country } from '../../../types/country.type';

export interface CountriesSlice {
  displayCountries: Country[];
  allCountries: Country[];
  isLoading: boolean;
}

const initialState: CountriesSlice = {
  displayCountries: [],
  allCountries: [],
  isLoading: false,
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setAllCountries: (state, action: PayloadAction<Country[]>) => {
      state.allCountries = action.payload
    },
    setDisplayCountries: (state, action: PayloadAction<Country[]>) => {
      state.displayCountries = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDisplayCountries, setAllCountries, setIsLoading } = countriesSlice.actions

export default countriesSlice.reducer