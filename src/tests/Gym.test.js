const GymData = require('../fabric/GymData');
const { it, expect } = require('@jest/globals');
let gymData = new GymData();

describe('Teste for GymData generator', () => {

    it('Espect to be a instace of a class', () => {
        expect(gymData).toBeInstanceOf(GymData)
    })

    it('Get a gym radom name', () => {
        let gym = gymData.gymName();
        expect(typeof gym).toEqual('string');
    })

    it('Get a gym machine radom name', () => {
        let gym = gymData.machineGymName();
        expect(typeof gym).toEqual('string');
    })

    it('Get a gym exercise radom name', () => {
        let gym = gymData.radomExerciseName();
        expect(typeof gym).toEqual('string');
    })

    it('Get a gym exercise group ', () => {
        let gym = gymData.exerciseGroup(0);
        expect(gym).toBeInstanceOf(Array)
        expect(gym[0]).not.toBeNull()
    })

    it('Get a gym techinique random name', () => {
        let gym = gymData.speciaTechniques();
        expect(typeof gym).toEqual('string');
    })

    it('Get a radom workout', () => {
        let gym = gymData.radomWorkout();
        expect(gym).toBeInstanceOf(Array)
        expect(gym[0]).not.toBeNull()
        expect(gym[0]).toHaveProperty('name')
        expect(gym[0]).toHaveProperty('especialTechnique')
        expect(gym[0]).toHaveProperty('serie')
    })

    it('Get a radom workout', () => {
        let gym = gymData.generateGivemWorkout(gymData.radomWorkout());
        expect(gym).toBeInstanceOf(Array)
        expect(gym[0]).not.toBeNull()
        expect(gym[0]).toHaveProperty('name')
        expect(gym[0]).toHaveProperty('especialTechnique')
        expect(gym[0]).toHaveProperty('serie')
    })

    it('Get a radom week workout', () => {
        let gym = gymData.weekWorkout();
        expect(gym).toBeInstanceOf(Array)
        expect(gym['monday'][0]).not.toBeNull()
        expect(gym['monday'][0]).toHaveProperty('name')
        expect(gym['monday'][0]).toHaveProperty('especialTechnique')
        expect(gym['monday'][0]).toHaveProperty('especialTechnique')
    })
})