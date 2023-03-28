/* import axios from "axios";
const functions = {
    fetchUser: () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.data)
    }
}
module.exports = functions; */
const axios = require('axios');
const functions = {
    fetchUser: () =>
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error')
};

module.exports = functions;