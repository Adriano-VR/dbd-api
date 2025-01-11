// filepath: /c:/Users/Adriano-V-R/Desktop/apiDBD/dbd-api/src/http/http.js
import axios from 'axios';

const url = '/api/characters';
const urlPerks = '/api/randomperks?role=survivor';


export const getData = async (retries = 3, delay = 1000) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 429 && retries > 0) {
            console.warn(`Retrying... (${retries} retries left)`);
            await new Promise(res => setTimeout(res, delay));
            return getData(retries - 1, delay * 2);
        } else {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
};



export const getPerksRandom = async (retries = 3, delay = 1000) => {
    try {
        const response = await axios.get(urlPerks);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 429 && retries > 0) {
            console.warn(`Retrying... (${retries} retries left)`);
            await new Promise(res => setTimeout(res, delay));
            return getPerksRandom(retries - 1, delay * 2);
        } else {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
};


