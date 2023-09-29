import { Country } from "../types/country.type";

export function filterCountryByName(country: Country, input: string): boolean {
    return country.name.common.toLowerCase().includes(input.toLowerCase());
}

export function filterCountryByRegion(country: Country, input: string): boolean {
    return country.region.toLowerCase().includes(input.toLowerCase());
}

export function filterCountryByCapital(country: Country, input: string): boolean {
    if (!country.capital) return false;
    return country.capital.join(' ').toLowerCase().includes(input.toLowerCase());
}