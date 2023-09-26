import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Country } from '../../../types/country.type';

export interface CountriesSlice {
  filteredCountries: Country[];
  countries: Country[];
}

const initialState: CountriesSlice = {
  filteredCountries: [],
  countries: [],
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state.countries = action.payload
    },
    setFilteredCountries: (state, action: PayloadAction<Country[]>) => {
      state.filteredCountries = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFilteredCountries, setCountries } = countriesSlice.actions

export default countriesSlice.reducer