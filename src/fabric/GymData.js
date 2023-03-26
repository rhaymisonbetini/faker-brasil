'use strict'

const RandomArrayElement = require('../services/RandomArrayElement');
const GymHelpers = require('../helpers/GymHelpers')

class GymData {

    /**
     * return a radom gym name
     * @returns {Array<string>}
     */
    gymName() {
        return RandomArrayElement.randomElement(GymHelpers.gymName())
    }


    /**
    * return a radom machine name
    * @returns {Array<string>}
    */
    machineGymName() {
        return RandomArrayElement.randomElement(GymHelpers.machineName())
    }


    /**
    * return a radom exercise name
    * @returns {Array<string>}
    */
    radomExerciseName() {
        return RandomArrayElement.randomElement(GymHelpers.typesOfExercise()[RandomArrayElement.randoNumberIn(0, 6)])
    }

    /**
     * get a list o exercise type.
     * 0 - coxa.
     * 1 - panturrilha.
     * 2 - peitoral.
     * 3 - dorsal.
     * 4 - deltoides.
     * 5 - biceps.
     * 6 - triceps.
     * @param {number} type 
     * @returns {Array<string>}
     */
    exerciseGroup(type) {
        return GymHelpers.typesOfExercise()[type]
    }

    /**
    * return a radom name of special technique 
    * @returns {Array<string>}
    */
    speciaTechniques() {
        return RandomArrayElement.randomElement(GymHelpers.speciaTechniques())
    }

    /**
     * return a array of objecy with a random train
     * @returns {Array<object>}
     */
    radomWorkout() {
        let randomWorkout = GymHelpers.typesOfExercise()[RandomArrayElement.randoNumberIn(0, 6)]
        let workout = []
        for (let i = 0; i < randomWorkout.length; i++) {
            workout.push({
                name: randomWorkout[i],
                especialTechnique: this.speciaTechniques(),
                serie: RandomArrayElement.randomElement(GymHelpers.series())
            })
        }
        return workout;
    }

    /**
     * generate a train with a give array of workouts
     * @param {Array<string>} workout 
     * @returns 
     */
    generateGivemWorkout(workout) {
        let generated = [];
        for (let i = 0; i < workout.length; i++) {
            generated.push({
                name: workout[i],
                especialTechnique: this.speciaTechniques(),
                serie: RandomArrayElement.randomElement(GymHelpers.series())
            })
        }
        return generated;
    }

    /**
     * return array with array when the arrat key is a day of the week. and a object inside with a workout
     * [
        monday: [
            {
            name: 'flexão de braço fechado (Apoio mãos fechadas)',
            especialTechnique: 'Drop-set',
            serie: '5x15'
            },
            {
            name: 'Tríceps coice com halteres',
            especialTechnique: 'Sem técnica especial',
            serie: '4x12'
            },
            {
            name: 'Mergulho com mãos apoiadas no banco',
            especialTechnique: 'Pós-exaustao',
            serie: '5,20'
            }
    ],
     * @returns {Array<Array<object>>}
     */
    weekWorkout() {
        let weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let exercise = RandomArrayElement.shuffleArray([0, 1, 2, 3, 4, 6]);
        let weekWorkout = [];
        for (let i = 0; i < exercise.length; i++) {
            weekWorkout[weekDays[i]] = this.generateGivemWorkout(this.exerciseGroup(exercise[i]))
        }
        return weekWorkout;
    }

}

module.exports = GymData