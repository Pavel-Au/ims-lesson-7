import axios from "axios";
const API = "https://restcountries.com/v3.1";

const countriesService = {
  get: () => {
    const filter = "name,capital,population,translations,flags";
    return axios.get(`${API}/all?fields=${filter}`).then(({ data }) => data);
  },
  getDetails: (country) =>
    axios.get(`${API}/name/${country}`).then(({ data }) => data[0]),
  removeCountry: (country) => Promise.resolve(country),
};

export default countriesService;
