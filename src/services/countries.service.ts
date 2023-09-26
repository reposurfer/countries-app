import api from "../lib/api";

/**
 * @returns List of all countries
 */
const getAllCountries = () => {
    return api.countries.list();
}

export { getAllCountries };