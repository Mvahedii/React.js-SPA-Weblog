import axios from 'axios'


const instance = axios.create({
    // baseURL:'https://jsonplaceholder.typicode.com'
})

instance.interceptors.request.use(
    (request) => {
        request.url='https://jsonplaceholder.typicode.com' + request.url
        return request
    },
    (err) => {
        console.log(err)
        return Promise.reject(err);

    })

axios.interceptors.response.use(
    (response) => {
        console.log(response)
        return response

    }, (err) => {
        console.log(err)
        return Promise.reject(err);
    })




export default instance