const axios = require('axios');

const api = {
    async userName(userResponse) {
        try {let response = await axios

        //URL
        .get('https://api.github.com/users/${userResponse.username}');
        return response.data;
    }
        catch (error) {
            console.log(error);
        }
    }
};

module.exports = api;