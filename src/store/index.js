import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        playingCards:[
            {value:1,suit:"diamonds",realValue:1},
            {value:2,suit:"diamonds",realValue:2},
            {value:3,suit:"diamonds",realValue:3},
            {value:4,suit:"diamonds",realValue:4},
            {value:5,suit:"diamonds",realValue:5},
            {value:6,suit:"diamonds",realValue:6},
            {value:7,suit:"diamonds",realValue:7},
            {value:8,suit:"diamonds",realValue:8},
            {value:9,suit:"diamonds",realValue:9},
            {value:10,suit:"diamonds",realValue:10},
            {value:10,suit:"diamonds",realValue:"J"},
            {value:10,suit:"diamonds",realValue:"Q"},
            {value:10,suit:"diamonds",realValue:"K"},
            {value:0,suit:"diamonds",realValue:"A"},
            {value:1,suit:"clubs",realValue:1},
            {value:2,suit:"clubs",realValue:2},
            {value:3,suit:"clubs",realValue:3},
            {value:4,suit:"clubs",realValue:4},
            {value:5,suit:"clubs",realValue:5},
            {value:6,suit:"clubs",realValue:6},
            {value:7,suit:"clubs",realValue:7},
            {value:8,suit:"clubs",realValue:8},
            {value:9,suit:"clubs",realValue:9},
            {value:10,suit:"clubs",realValue:10},
            {value:10,suit:"clubs",realValue:"J"},
            {value:10,suit:"clubs",realValue:"Q"},
            {value:10,suit:"clubs",realValue:"K"},
            {value:0,suit:"clubs",realValue:"A"},
            {value:1,suit:"spades",realValue:1},
            {value:2,suit:"spades",realValue:2},
            {value:3,suit:"spades",realValue:3},
            {value:4,suit:"spades",realValue:4},
            {value:5,suit:"spades",realValue:5},
            {value:6,suit:"spades",realValue:6},
            {value:7,suit:"spades",realValue:7},
            {value:8,suit:"spades",realValue:8},
            {value:9,suit:"spades",realValue:9},
            {value:10,suit:"spades",realValue:10},
            {value:10,suit:"spades",realValue:"J"},
            {value:10,suit:"spades",realValue:"Q"},
            {value:10,suit:"spades",realValue:"K"},
            {value:0,suit:"spades",realValue:"A"},
            {value:1,suit:"hearts",realValue:1},
            {value:2,suit:"hearts",realValue:2},
            {value:3,suit:"hearts",realValue:3},
            {value:4,suit:"hearts",realValue:4},
            {value:5,suit:"hearts",realValue:5},
            {value:6,suit:"hearts",realValue:6},
            {value:7,suit:"hearts",realValue:7},
            {value:8,suit:"hearts",realValue:8},
            {value:9,suit:"hearts",realValue:9},
            {value:10,suit:"hearts",realValue:10},
            {value:10,suit:"hearts",realValue:"J"},
            {value:10,suit:"hearts",realValue:"Q"},
            {value:10,suit:"hearts",realValue:"K"},
            {value:0,suit:"hearts",realValue:"A"},
        ],
        usedCards: []
    },
    getters: {
        getRandomCard(state) {
          const randomIndex = Math.floor(Math.random() * state.playingCards.length);
        return state.playingCards[randomIndex];
        }
    },
    mutations: {
        removeCard(state, card) {

        const cardIndex = state.playingCards.findIndex(c => c === card);
        if (cardIndex !== -1) {
            state.playingCards.splice(cardIndex, 1);
            state.usedCards.push(card);
            }
        },
        resetDeck(state) {
            state.playingCards = [...state.playingCards, ...state.usedCards];
            state.usedCards = [];
        }
    }
})