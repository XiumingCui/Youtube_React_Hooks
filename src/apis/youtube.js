import axios from 'axios';

const KEY = 'AIzaSyAVMMmMlYF4MBkLP48I6YSABuOz2IVYWaI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


