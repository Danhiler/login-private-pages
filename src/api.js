import axios from 'axios'


function userSignup({username, password}) {
    return axios.post(`http://localhost:4000/users`,
        {
            username: username,
            password: password
        }).then((res)=>res.data)
}

function userLogin({username, password}) {
    return axios.put(`http://localhost:4000/users`,
        {
            username: username,
            password: password
        }).then((res)=>res.data)
}


const api = {userSignup,userLogin}
export default api