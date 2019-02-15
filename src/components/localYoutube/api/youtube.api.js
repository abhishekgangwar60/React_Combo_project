import axios from 'axios';

const KEY = 'AIzaSyBGc9EcRr-Lf4PSc6p6JZXLlIAWz5Bv2Uo';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxresults: 10,
        key: KEY
    }
})