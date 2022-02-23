import axios from "axios";
console.log(process.env.REACT_APP_YT_KEY);
const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyAkX0mjQt1EPhoy9CKm1FD3pUu79Z6ffuk'
    }
})

export default request