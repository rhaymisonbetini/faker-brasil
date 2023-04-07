const MusicData = require('../fabric/MusicData');
const { it, expect } = require('@jest/globals');
let musicData = new MusicData();

describe('Teste for MusicDatas generator', () => {

    it('Espect to be a instace of a class', () => {
        expect(musicData).toBeInstanceOf(MusicData)
    })

    it('Get random musicFestival', () =>{
        let music = musicData.musicFestival();
        expect(typeof music).toEqual('string');
        expect(music.length).toBeGreaterThan(0);
    })

    it('Get random eventsHouse', () =>{
        let music = musicData.eventsHouse();
        expect(typeof music).toEqual('string');
        expect(music.length).toBeGreaterThan(0);
    })


    it('Get random random musicalStyle', () =>{
        let music = musicData.musicalStyle();
        expect(typeof music).toEqual('string');
        expect(music.length).toBeGreaterThan(0);
    })

    
    it('Get random random guitars', () =>{
        let music = musicData.guitars();
        expect(typeof music).toEqual('string');
        expect(music.length).toBeGreaterThan(0);
    })


    it('Get random random percussionMusicalInstrument', () =>{
        let music = musicData.percussionMusicalInstrument();
        expect(typeof music).toEqual('string');
        expect(music.length).toBeGreaterThan(0);
    })

    it('Get random random windMusicalInstrument', () =>{
        let music = musicData.windMusicalInstrument();
        expect(typeof music).toEqual('string');
        expect(music.length).toBeGreaterThan(0);
    })

    it('Get random random stringMusicalInstrument', () =>{
        let music = musicData.stringMusicalInstrument();
        expect(typeof music).toEqual('string');
        expect(music.length).toBeGreaterThan(0);
    })

    it('Get random random eletronicMusicalInstrument', () =>{
        let music = musicData.eletronicMusicalInstrument();
        expect(typeof music).toEqual('string');
        expect(music.length).toBeGreaterThan(0);
    })

})