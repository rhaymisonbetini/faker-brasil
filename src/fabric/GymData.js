'use strict'

const RandomarrayElement = require('../services/RandomarrayElement');
const GymHelpers = require('../helpers/GymHelpers')

class GymData {

    /**
     * return a radom gym name
     * @returns {string      }
     */
    gymName() {
        return RandomarrayElement.randomElement(GymHelpers.gymName())
    }


    /**
    * return a radom machine name
    * @returns {string}
    */
    machineGymName() {
        return RandomarrayElement.randomElement(GymHelpers.machineName())
    }


    /**
    * return a radom exercise name
    * @returns {array<string>}
    */
    radomExerciseName() {
        return RandomarrayElement.randomElement(GymHelpers.typesOfExercise()[RandomarrayElement.randoNumberIn(0, 6)])
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
     * @returns {array<string>}
     */
    exerciseGroup(type) {
        return GymHelpers.typesOfExercise()[type]
    }

    /**
    * return a radom name of special technique 
    * @returns {string}
    */
    speciaTechniques() {
        return RandomarrayElement.randomElement(GymHelpers.speciaTechniques())
    }

    /**
     * return a array of objecy with a random train
     * @returns {array<object>}
     */
    radomWorkout() {
        let randomWorkout = GymHelpers.typesOfExercise()[RandomarrayElement.randoNumberIn(0, 6)]
        let workout = []
        for (let i = 0; i < randomWorkout.length; i++) {
            workout.push({
                name: randomWorkout[i],
                especialTechnique: this.speciaTechniques(),
                serie: RandomarrayElement.randomElement(GymHelpers.series())
            })
        }
        return workout;
    }

    /**
     * generate a train with a give array of workouts
     * @param {array<string>} workout 
     * @returns 
     */
    generateGivemWorkout(workout) {
        let generated = [];
        for (let i = 0; i < workout.length; i++) {
            generated.push({
                name: workout[i],
                especialTechnique: this.speciaTechniques(),
                serie: RandomarrayElement.randomElement(GymHelpers.series())
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
     * @returns {array<array<object>>}
     */
    weekWorkout() {
        let weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let exercise = RandomarrayElement.shuffleArray([0, 1, 2, 3, 4, 6]);
        let weekWorkout = [];
        for (let i = 0; i < exercise.length; i++) {
            weekWorkout[weekDays[i]] = this.generateGivemWorkout(this.exerciseGroup(exercise[i]))
        }
        return weekWorkout;
    }

}

module.exports = GymData