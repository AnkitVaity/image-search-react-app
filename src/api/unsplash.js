import axios from 'axios';

export default axios.create({ 
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID G1accZ9BFpDOJuicd32Pn99Pf785LoTMYStsENrXKr8' 
    }
});

