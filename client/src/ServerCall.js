import axios from 'axios';
const baseUrl="http://localhost:2020/"
class ServerCall{
    static fnGetReq(url){
        return axios.get(baseUrl+url);
    }
    static fnPostReq(url,data){
        return axios.post(baseUrl+url,data);
    }
}

export default ServerCall;