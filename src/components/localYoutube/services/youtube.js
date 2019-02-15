import youtube from '../api/youtube.api';

export const fetchVideosFromYoutube = async (term) => {
    return await youtube.get('/search', {
        params: {
            q: term
        }
    })
}