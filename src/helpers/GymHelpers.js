'use strict'

class GymHelpers {

    /**
     * return a list of workout series
     * @returns {Array<string>}
     */
    static series() {
        return [
            '3x10',
            '4x12',
            '5x15',
            '5,20'
        ]
    }

    /**
    * return a array with special Techniques
    * @returns {Array<array>}
    */
    static speciaTechniques() {
        return [
            'Sem técnica especial',
            'Rest-pause',
            'Pré-exaustão',
            'Pós-exaustao',
            'SST',
            'Repetições negativas',
            'Superset',
            'Drop-set'
        ]
    }

    /**
     * return a array with exercicies types
     * @returns {Array<array>}
     */
    static typesOfExercise() {
        return [
            //coxa
            [
                "Stiff unilateral",
                "Cable pendulum",
                "Elevação pélvica com joelhos flexionados",
                "Extensão de quadril em 45 graus",
                "Flexão de joelho deitado",
                "Slider leg Curl",
                "Extensão de quadril no pulley",
                "Elevação pélvica com joelhos estendidos.",
            ],
            //panturrilha
            [
                "Panturrilha burrinho (gêmeos sentado)",
                "Panturrilha em pé unilateral",
                "Panturrilha em pé (bilateral)",
            ],
            //peitoral
            [

                "Supino com barra",
                "Peck Deck",
                "cruzamento de cabos",
                "Supino sentado",
                "crucifixo inclinado",
            ],
            //dorsal
            [
                "Puxador no pulley",
                "Remada sentada no pulley",
                "Remada pegada pronada",
                "Remada no TRX",
                "Remada pegada supinada",
                "Barra fixa (pegada pronada)",
                "Elevação I-Y-T",
                "Barra fixa (pegada supinada)",

            ],
            //deltoides
            [
                "Supino reto",
                "Desenvolvimento no Smith",
                "Peck deck ou voador peitoral",
                "Elevação lateral com halteres",
                "Elevação lateral no cross over",
                "Voador inverso",
                "Puxador frente",
                "Remada sentado",

            ],
            //biceps
            [
                "Rosca direta no cabo",
                "Rosca direta barra",
                "Rosca concentrada",
                "Barra fixa (pegada supinada)",
                "Rosca direta barra w",
                "Rosca concentrada no Scott",
            ],
            //triceps
            [

                "flexão de braço fechado (Apoio mãos fechadas)",
                "Tríceps coice com halteres",
                "Mergulho com mãos apoiadas no banco",
            ]
        ]
    }

    /**
    * return array with list machines in gym
    * @returns {Array<string>}
    */
    static machineName() {
        return [
            "Aparelho de glúteo",
            "Cadeira abdutora",
            "Cadeira adutora",
            "Cadeira extensora",
            "Cadeira flexora",
            "Leg Press",
            "Hack para agachamento",
            "Barra guiada, para agachamento tipo smith",
            "Elevação pélvica",
            "Panturrilha sentada",
            "Apolete",
            "Power cross",
            "Graviton",
            "Barra fixa/paralelas",
            "Peck Deck",
            "Puxador",
            "Supino",
            "Desenvolvimento de ombro",
            "Cross Over",
            "Remada sentada",
            "Polia",
            "Power racks",
            "Abdominal articulado",
            "Prancha abdominal ",
            "Bicicleta ergométrica ",
            "Esteira ",
            "Elíptico (Transfer/Transport) ",
            "Remo Indoor",
            "Simulador de escada ",
            "Kettlebell",
            "Mini jump profissional",
            "Step"
        ]
    }

    /**
    * return array with list of a gym name
    * @returns {Array<string>}
    */
    static gymName() {
        return [
            "Espaço Fitness",
            "Star Fitness",
            "Mr Fitness",
            "Soul Fitness",
            "Sport Center",
            "Energym",
            "Soul Gym",
            "Clube Fitness",
            "Body Center",
            "Power Fit",
            "Via Forma",
            "Du Corpo",
            "Studio do Corpo",
            "Corpos e Energia",
            "Fábrica do Corpo",
            "Biodinâmica",
            "Vida Saudável",
            "Ação e Saúde",
            "Em Forma Pratique",
            "Top One Academia",
            "Go! Fitness",
            "Fit Space",
            "Ergo Life",
            "Corpore",
            "Sport Mais",
            "Circuito do Corpo",
            "Fonte e Energia",
            "Vibe Fitness",
            "Multi Sport",
            "Olympus",
            "Roma",
            "Atenas",
            "Coliseu",
            "Esparta",
            "Mítica",
            "Heroes",
            "Podium",
            "Alpha",
            "Titans",
            "Garra",
            "Meta",
            "Foco",
            "Super Treino",
            "Nível A",
            "Top Treino",
            "Magnum",
            "Studio",
            "Mergulhão",
            "Atlética",
            "BemStar",
            "Evolution",
            "Mister",
            "Super Série",
            "Lion",
            "Falcão Fitness",
            "Pro Corpo",
            "Max Forma",
            "Body Move",
            "Focus Fitness",
            "Auge",
            "Superação",
            "VO",
            "Vidativa",
            "Estação do Esporte",
            "Performance",
            "Lazer e Forma",
            "Zoom",
            "HO",
            "Winner",
            "Racer",
            "Runner",
            "Aquafit",
            "Cross",
            "Elite",
            "Fórmula",
            "Bio Ritmo",
            "Novo Ritmo",
            "Ideal Fitness",
            "Life Fitness",
            "Tecfit",
            "Fix Fit",
            "Fera",
            "Atlas",
            "Hidro Fitness",
            "Silhueta",
            "Despertar",
            "Time",
            "Workout Gym",
            "Inove",
            "Time Gym",
            "Harmonia",
            "Equilíbrio",
            "Oficina do Copo",
            "Cia do Corpo Nativa"
        ]
    }
}

module.exports = GymHelpers