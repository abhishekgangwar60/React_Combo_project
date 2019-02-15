import axios from './../../api/unsplash';


/***
 * Fetches images from Unsplash APi of Given search term
 */
export const fetchImages = async (term) => {
    return await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
    });
}