import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3e1eaef4a25d3ee9ff4b370be44dedb9038cd9d4064a012ba53ebb6896a6290b'
    }
})