import axios from 'axios'

const api_base_url = window.location.origin.includes('localhost') ? 'http://localhost:3000' : 'https://kbshealthcare.com'
// https://kbshealthcare.com/
export default {
    sendMail(payload) {
        const url = `${api_base_url}/itsupport/send-mail`
        return axios.post(url, payload ,{ cache: false });
    }
}