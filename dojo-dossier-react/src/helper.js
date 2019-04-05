// to call out to the API

import axios from 'axios';

export const retreiveDossiersPromise = () => {
    return axios.get(`http://5ca799328e58df001460368c.mockapi.io/dossiers`);
}

// export const updateDossiersPromise ()