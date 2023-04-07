const SportsData = require('../fabric/SportsData');
const { it, expect } = require('@jest/globals');
let sportsData = new SportsData();

describe('Teste for MarketData generator', () => {

    it('Espect to be a instace of a class', () => {
        expect(sportsData).toBeInstanceOf(SportsData)
    })

    it('Get random team', () =>{
        let sport = sportsData.getRandomBrazilianTeam();
        expect(typeof sport).toEqual('string');
        expect(sport.length).toBeGreaterThan(0);
    })

    it('Get random championship', () =>{
        let sport = sportsData.getRandomChampionShip();
        expect(typeof sport).toEqual('string');
        expect(sport.length).toBeGreaterThan(0);
    })

    it('Get random stadiums', () =>{
        let sport = sportsData.getRandomStadium();
        expect(typeof sport).toEqual('string');
        expect(sport.length).toBeGreaterThan(0);
    })

    it('Get random random football match', () =>{
        let sport = sportsData.randomFootballMatch();
        expect(typeof sport).toEqual('string');
        expect(sport.length).toBeGreaterThan(0);
        expect(sport).toContain('X')
    })

    
    it('Get random random football position', () =>{
        let sport = sportsData.soccerPosition();
        expect(typeof sport).toEqual('string');
        expect(sport.length).toBeGreaterThan(0);
    })


    it('Get random random football team', () =>{
        let sport = sportsData.soccerFullTeam();
        expect(typeof sport).toEqual('object');
        expect(sport).toHaveProperty('name')
        expect(sport).toHaveProperty('team')
        expect(typeof sport.team).toEqual('object');
    })

    it('Get random random basket Team', () =>{
        let sport = sportsData.basketTeam();
        expect(typeof sport).toEqual('string');
        expect(sport.length).toBeGreaterThan(0);
    })
    
    it('Get random random basket match', () =>{
        let sport = sportsData.basketTeamMatch();
        expect(typeof sport).toEqual('string');
        expect(sport.length).toBeGreaterThan(0);
        expect(sport).toContain('X')
    })
})