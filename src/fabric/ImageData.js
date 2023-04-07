'use strict'

const ImageService = require("../services/ImageService")

class ImageData {

    async getAvatarImage(gender) {
        try {
            return await ImageService.getAvatar(gender);
        } catch (_) {
            return ''
        }

    }

    async getImageRandom(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'abstract')
        } catch (_) {
            return ''
        }
    }

    async getCarImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'cars')
        } catch (_) {
            return ''
        }

    }

    async getAnimalImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'animals')
        } catch (_) {
            return ''
        }

    }

    async getCityImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'city')
        } catch (_) {
            return ''
        }
    }

    async getCatImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'cats')
        } catch (_) {
            return ''
        }

    }

    async getBusinessImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'business')
        } catch (_) {
            return ''
        }

    }

    async getFashionImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'fashion')
        } catch (_) {
            return ''
        }

    }

    async getFoodImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'food')
        } catch (_) {
            return ''
        }

    }

    async getNatureImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'nature')
        } catch (_) {
            return ''
        }

    }

    async getNightlifeImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'nightlife')
        } catch (_) {
            return ''
        }

    }

    async getPeopleImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'people')
        } catch (_) {
            return ''
        }

    }

    async getSportsImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'sports')
        } catch (_) {
            return ''
        }

    }

    async getTechnicsImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'technics')
        } catch (_) {
            return ''
        }

    }

    async getTransportImage(width = 640, height = 480) {
        try {
            return await ImageService.getImage(width, height, 'transport')
        } catch (_) {
            return ''
        }

    }
}

module.exports = ImageData;