import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Country } from '../../../types/country.type';

export interface CountriesSlice {
  value: Country[];
}

const initialState: CountriesSlice = {
  value: [],
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCountries } = countriesSlice.actions

export default countriesSlice.reducer