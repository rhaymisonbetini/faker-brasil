'use strict'
const Netmask = require('netmask').Netmask
const InternetHelpers = require('../helpers/InternetHelpers')
const RandomArrayElement = require('../services/RandomArrayElement');

class InternetData {

    /**
    * return a fake ip string
    * @returns {String}
    */
    ip() {
        return (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));
    }

    /**
     * create a netWork fake datas
     * @param {String} ip
     * @return {Object}
     */
    network(ip = null) {
        const IP = ip ?? this.ip()
        var block = new Netmask(IP);
        return {
            ip: block.base,
            maske: block.mask,
            bitmask: block.bitmask,
            hostmask: block.hostmask,
            broadcast: block.broadcast,
            size: block.size,
            first: block.first,
            las: block.last,
        }
    }

    /**
     * return a http or https domain
     * @param {string} domain 
     * @param {bool} https 
     * @returns {string}
     */
    domain(domain = null, https = false) {
        let prefix = https ? 'http://' : 'https://';
        let types = ['.com.br', '.net', '.com', '.pt']
        if (domain) {
            domain = prefix + domain + RandomArrayElement.randomElement(types)
        } else {
            domain = prefix + RandomArrayElement.randomElement(InternetHelpers.domains()) + RandomArrayElement.randomElement(types)
        }
        return RandomArrayElement.removeAcc(RandomArrayElement.removeAllEmptySpaceFromString(domain).toLowerCase())
    }

}

module.exports = InternetData 