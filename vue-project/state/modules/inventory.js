const moduleInventory = {
    state: () => ({
        inventory: [
            {
                id: 1,
                name: "Футбольный мяч",
                type: "футбол",
                count: 10,
                status: "новый"
            },
            {
                id: 2,
                name: "Футбольные бутсы",
                type: "футбол",
                count: 15,
                status: "используемый"
            },
            {
                id: 3,
                name: "Вратарские перчатки",
                type: "футбол",
                count: 5,
                status: "новый"
            },
            {
                id: 4,
                name: "Футбольные шорты",
                type: "футбол",
                count: 20,
                status: "используемый"
            },
            {
                id: 5,
                name: "Футбольная форма",
                type: "футбол",
                count: 12,
                status: "новый"
            },
            {
                id: 6,
                name: "Теннисная ракетка",
                type: "теннис",
                count: 8,
                status: "используемый"
            },
            {
                id: 7,
                name: "Теннисные мячи",
                type: "теннис",
                count: 30,
                status: "новый"
            },
            {
                id: 8,
                name: "Теннисные кроссовки",
                type: "теннис",
                count: 10,
                status: "используемый"
            },
            {
                id: 9,
                name: "Теннисная сумка",
                type: "теннис",
                count: 5,
                status: "новый"
            },
            {
                id: 10,
                name: "Баскетбольный мяч",
                type: "баскетбол",
                count: 12,
                status: "новый"
            },
            {
                id: 11,
                name: "Баскетбольные кроссовки",
                type: "баскетбол",
                count: 7,
                status: "используемый"
            },
            {
                id: 12,
                name: "Баскетбольная форма",
                type: "баскетбол",
                count: 15,
                status: "новый"
            },
            {
                id: 13,
                name: "Баскетбольные щиты",
                type: "баскетбол",
                count: 3,
                status: "используемый"
            },
            {
                id: 14,
                name: "Волейбольный мяч",
                type: "волейбол",
                count: 10,
                status: "новый"
            },
            {
                id: 15,
                name: "Волейбольные сетки",
                type: "волейбол",
                count: 4,
                status: "используемый"
            },
            {
                id: 16,
                name: "Волейбольные кроссовки",
                type: "волейбол",
                count: 6,
                status: "новый"
            },
            {
                id: 17,
                name: "Гантели",
                type: "силовые тренировки",
                count: 20,
                status: "используемый"
            },
            {
                id: 18,
                name: "Штанга",
                type: "силовые тренировки",
                count: 5,
                status: "новый"
            },
            {
                id: 19,
                name: "Скамья для жима",
                type: "силовые тренировки",
                count: 3,
                status: "используемый"
            },
            {
                id: 20,
                name: "Скакалка",
                type: "фитнес",
                count: 25,
                status: "новый"
            },
            {
                id: 21,
                name: "Йога-мат",
                type: "йога",
                count: 12,
                status: "используемый"
            },
            {
                id: 22,
                name: "Фитнес-резинки",
                type: "фитнес",
                count: 15,
                status: "новый"
            },
            {
                id: 23,
                name: "Беговая дорожка",
                type: "кардио",
                count: 4,
                status: "используемый"
            },
            {
                id: 24,
                name: "Эллиптический тренажер",
                type: "кардио",
                count: 2,
                status: "новый"
            },
            {
                id: 25,
                name: "Велосипед",
                type: "велоспорт",
                count: 8,
                status: "используемый"
            },
            {
                id: 26,
                name: "Шлем для велоспорта",
                type: "велоспорт",
                count: 10,
                status: "новый"
            },
            {
                id: 27,
                name: "Сноуборд",
                type: "сноуборд",
                count: 5,
                status: "используемый"
            },
            {
                id: 28,
                name: "Лыжи",
                type: "лыжи",
                count: 6,
                status: "новый"
            },
            {
                id: 29,
                name: "Лыжные палки",
                type: "лыжи",
                count: 12,
                status: "используемый"
            },
            {
                id: 30,
                name: "Сноубордические ботинки",
                type: "сноуборд",
                count: 4,
                status: "новый"
            }
        ]
    }),
    getters: {
        inventory: state => state.data,
    },

}

export default moduleInventory;