// to call out to the API

import axios from 'axios';

export const retreiveDossiersPromise = () => {
    return axios.get(`http://5ca799328e58df001460368c.mockapi.io/dossiers`);
}

// export const addItemToDossierById = (id) => {
//     return (
//         axios
//         .get(`http://5ca799328e58df001460368c.mockapi.io/dossiers/W${id}`)
//         .then ((response) => {
//             console.log(response);
//             axios.put(`http://5ca799328e58df001460368c.mockapi.io/dossiers/${id}`)
//         })
// )
// }