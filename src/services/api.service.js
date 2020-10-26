import axios from 'axios'

const api_base_url = 'http://localhost:3000'; /// window.location.origin.includes('localhost')

export default {
    sendMail(payload) {
        const url = `${api_base_url}/itsupport/send-mail`
        return axios.post(url, payload ,{ cache: false });
    }
}