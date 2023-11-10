<template>
<div class="table">
    <h3 style="position: fixed; left: 5rem; color: black;">Dealer:</h3>
    <div class="openCards">
        <CardLayout class="card" v-for="card in caseCards" :key="card.value" :value="card.value" :suit="card.suit" />
        <div class="totalValue" v-if="isGameStarted === true">{{ caseValue }}</div>
    </div>

    <h1 class="result" v-if="gameOver === 1" style="background-color: green;box-shadow: 0 0 10rem 4rem green;">K I R A L</h1>
    <h1 class="result" v-if="gameOver === 2" style="background-color: red;box-shadow: 0 0 10rem 4rem red;">E N A I</h1>
    <h1 class="result" v-if="gameOver === 3" style="background-color: lightblue;box-shadow: 0 0 10rem 4rem lightblue;">B E R A B E R E</h1>
    <div class="openCards">
        <CardLayout class="card" v-for="card in playerCards" :key="card.value" :value="card.value" :suit="card.suit" />
        <div class="totalValue" v-if="isGameStarted === true">{{ playerValue }}</div>
    </div>
    <h3 style="position: fixed; left: 5rem; bottom: 3rem; color: #004193;">Player:</h3>
    <div class="buttons">
        <div style="display: flex; flex-direction: column; align-items: center;">
            <button :disabled="gameOver !== 0" class="hit" v-if="isGameStarted" @click="hit">HIT</button>
            <button :disabled="gameOver !== 0" class="stand" style="margin-top: 0.5rem;" v-if="isGameStarted" @click="stand">STAND</button>
        </div>
        <button class="new-game" @click="start">NEW GAME</button>
    </div>
</div>
</template>

<script>
import CardLayout from '@/components/PlayingCards/CardLayout.vue';
export default {
    components: {
        CardLayout
    },
    data() {
        return {
            isGameStarted: false,
            playerCards: [],
            caseCards: [],
            playerValue: 0,
            caseValue: 0,
            gameOver: 0,
        }
    },
    methods: {
        getCard() {
            const randomCard = this.$store.getters.getRandomCard;
            if (typeof randomCard.realValue === 'number') {
                randomCard.realValue = randomCard.value.toString();
            }
            this.$store.commit('removeCard', randomCard)
            return randomCard;
        },
        start() {
            this.clear();
            for (let index = 0; index <= 1; index++) {
                this.playerCards.push(this.getCard());
            }
            this.caseCards.push(this.getCard());
            this.computePlayerValue();
            this.computeCaseValue();
            this.isGameStarted = true;
            if (this.playerValue === 21) {
                this.stand();
            }
        },
        hit() {
            this.playerCards.push(this.getCard());
            this.computePlayerValue();
            if (this.playerValue > 21) {
                this.gameOver = 2;
            } else if (this.playerValue === 21) {
                this.stand();
            } else if (this.playerCards.length === 5) {
                this.gameOver = 1;
            }
        },
        stand() {
            while (this.caseValue < 17) {
                this.caseCards.push(this.getCard());
                this.computeCaseValue();
            }
            if (this.caseValue > 21) {
                this.gameOver = 1;
            } else {
                if (this.caseValue > this.playerValue) {
                    this.gameOver = 2;
                } else if (this.caseValue === this.playerValue) {
                    this.gameOver = 3;
                } else {
                    this.gameOver = 1;
                }
            }
        },
        clear() {
            this.playerCards = [];
            this.caseCards = [];
            this.playerValue = 0;
            this.caseValue = 0;
            this.gameOver = 0;
            this.isGameStarted = false;
            this.$store.commit('resetDeck');
        },
        computePlayerValue() {
            this.playerValue = 0;
            for (let index = 0; index < this.playerCards.length; index++) {
                this.playerCards.map(card => {
                    if (card.realValue === "A" && this.playerValue === 10) {
                        card.value = 11;
                    }
                });
                this.playerValue += this.playerCards[index].value;
            }
        },
        computeCaseValue() {
            this.caseValue = 0;
            for (let index = 0; index < this.caseCards.length; index++) {
                this.caseCards.map(card => {
                    if (card.realValue === "A" && this.caseValue === 10) {
                        card.value = 11;
                    }
                });
                this.caseValue += this.caseCards[index].value;
            }
        },
    },
}
</script>

<style scoped>
.table {
    background: linear-gradient(to top, #004193 50%, rgba(0, 0, 0, 0) 100%);
    width: 100dvw;
    height: 80dvh;
    padding-bottom: 2rem;
    border-bottom: 0.5rem solid midnightblue;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.openCards {
    display: flex;
    position: relative;
}

.card {
    margin: 0.5rem;
}

.totalValue {
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    width: 2rem;
    height: 2rem;
    background-color: orange;
    color: purple;
    font-weight: bold;
    border: 1px solid var(--warning);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.buttons {
    position: fixed;
    right: 5rem;
    bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 10rem;
    width: 10rem;
    border: 0;
}

.hit {
    width: 5rem;
    height: 5rem;
    padding: 0.5rem;
    border-radius: 50%;
    border: 0.2rem white solid;
    color: white;
    background-color: #28A745;
    font-weight: bold;
    transition: 0.2s ease;
}

.hit:hover {
    background-color: #218838;
}

.hit:active {
    background-color: #175f26;
}

.stand {
    background-color: #DC3545;
    border: 0.2rem white solid;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 1rem;
    width: 100%;
    transition: 0.2s ease;
}

.stand:hover {
    background-color: #c82333;
}

.stand:active {
    background-color: #8a1924;
}

.new-game {
    padding: 0.3rem;
    background-color: #6C757D;
    color: white;
    border: 0;
    margin-top: 3rem;
    font-weight: bold;
    border-radius: 2px;
    transition: 0.2s ease;
}

.new-game:hover {
    background-color: black;
}

.new-game:active {
    background-color: rgb(255, 255, 255);
    color: black;
}

.result {
    padding: 1rem;
    border-radius: 1rem;
    z-index: 5;
}
</style>
