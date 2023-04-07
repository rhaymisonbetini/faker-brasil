'use strict';
const axios = require('axios')
const FLICKR = 'https://loremflickr.com/json/'
const XSGAMES = 'https://xsgames.co/randomusers/avatar.php?g='

class ImageService {

    static async getImage(width, height, type = 'abstract') {
        let image = await axios.get(`${FLICKR}${width}/${height}/${type}`)
        return image.data.file;
    }

    static async getAvatar(gender) {
        let avatar = await axios.get(XSGAMES + gender);
        return avatar.request.res.responseUrl;
    }

}

module.exports = ImageService;