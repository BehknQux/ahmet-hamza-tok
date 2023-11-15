<template>
<div class="table">
    <div v-if="betAsker === false" style="display: flex;">
        <TransitionGroup name="cardsUp" class="openCards" tag="div">
            <CardLayout class="card" v-for="card in dealerCards" :key="card.value" :value="card.realValue" :suit="card.suit" />
            <CardBack v-if="closedCard"/>
            <div class="totalValue" v-if="isGameStarted">{{ dealerValue }}</div>
        </TransitionGroup>
    </div>
    <transition>
        <h1 class="result" v-if="gameOver === 1 && betAsker === false" style="background-color: green;box-shadow: 0 0 10rem 4rem green;">K I R A L</h1>
        <h1 class="result" v-else-if="gameOver === 2 && betAsker === false" style="background-color: red;box-shadow: 0 0 10rem 4rem red;">E N A I</h1>
        <h1 class="result" v-else-if="gameOver === 3 && betAsker === false" style="background-color: lightblue;box-shadow: 0 0 10rem 4rem lightblue;">B E R A B E R E</h1>
    </transition>
    <transition>
        <div v-if="betAsker" style="background-color: var(--warning);padding: 1rem;padding-right: 3rem; width: 11rem;position: relative;border-top-right-radius: 4rem;">
            <h2 style="text-align: center; margin: 0;">PLACE BET</h2>
            <div style="color: var(--light);">
                <input v-model="betValue" type="number" style="border: 0;margin-top: 0.5rem; font-size: 1.5rem;width: 100%; font-family: SamiraSkin30;" /><i style="position: absolute; right: 1rem; top: 33%;" class="fa-solid fa-coins"></i>
            </div>
            <button class="standart-bet-buttons" @click="start">ENTER</button>
            <div style="display: flex; justify-content: space-between; margin-top: 1rem; width:100%">
                <div class="standart-bets">
                    <small>%20</small>
                    <button @click="betValue = wallet/5" class="standart-bet-buttons">{{ wallet/5 }}</button>
                </div>
                <div class="standart-bets">
                    <small>%50</small>
                    <button @click="betValue = wallet/2" class="standart-bet-buttons">{{ wallet/2 }}</button>
                </div>
                <div class="standart-bets">
                    <small>%100</small>
                    <button @click="betValue = wallet" class="standart-bet-buttons">{{ wallet }}</button>
                </div>
            </div>
        </div>
    </transition>
    <div v-if="betAsker === false" style="display: flex;">
        <TransitionGroup name="cardsDown" class="openCards" tag="div">
            <CardLayout class="card" v-for="card in playerCards" :key="card.value" :value="card.realValue" :suit="card.suit" />
            <div class="totalValue" v-if="isGameStarted">{{ playerValue }}</div>
        </TransitionGroup>
    </div>
    <div class="money-container">
        <div v-if="betValue !== ''" class="bet">{{ betValue }}<i class="fa-solid fa-coins"></i></div>
        <div style="display: flex; align-items: center;">
            <div class="wallet"> {{wallet}} <i class="fa-solid fa-coins"></i></div>
            <div v-if="gameOver === 1" class="win">+{{ addedValue }}</div>
        </div>
    </div>
    <div v-if="aceCheck" style="background-color: var(--warning); padding: 0.5rem;">
        <h2 style="margin: 0;">Ace value?</h2>
        <div>
            <button class="ace-value" @click="selectAceValue(1)">1</button>
            <button class="ace-value" @click="selectAceValue(11)">11</button>
        </div>
    </div>
    <div class="buttons">
        <div style="display: flex; flex-direction: column; align-items: center;">
            <button :disabled="gameOver !== 0" class="hit" v-if="isGameStarted" @click="hit">HIT</button>
            <button :disabled="gameOver !== 0" class="stand" style="margin-top: 0.5rem;" v-if="isGameStarted" @click="stand">STAND</button>
        </div>
        <button v-if="betAsker === false" class="new-game" @click="betAsker = true">NEW GAME</button>
    </div>
</div>
</template>

<script>
import CardLayout from '@/components/PlayingCards/CardLayout.vue';
import CardBack from '@/components/PlayingCards/CardBack.vue';
import {
    ref
} from 'vue';
import "./style.css"
export default {
    components: {
        CardLayout,
        CardBack,
    },
    data() {
        return {
            isGameStarted: false,
            betAsker: true,
            aceCheck: false,
            closedCard: false,
            playerCards: [],
            dealerCards: [],
            playerValue: 0,
            dealerValue: 0,
            gameOver: ref(0),
            wallet: 1000,
            betValue: "",
            addedValue: 0,
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
            if (this.wallet === 0) {
                alert("Out of money!");
            } else if (this.betValue > this.wallet || this.betValue <= 0 || this.betValue === "") {
                alert("Please enter a valid bet!");
            } else {
                this.wallet -= this.betValue;
                this.playerCards.map(card => {
                    if (card.realValue === "A") {
                        card.value = 0;
                    }
                })
                this.playerCards = [];
                this.dealerCards = [];
                this.playerValue = 0;
                this.dealerValue = 0;
                this.gameOver = 0;
                this.addedValue = 0;
                this.isGameStarted = false;
                this.aceCheck = false;
                this.betAsker = true;
                this.$store.commit('resetDeck');
                setTimeout(() => {
                    for (let index = 0; index <= 1; index++) {
                        this.playerCards.push(this.getCard());
                    }
                    this.dealerCards.push(this.getCard());
                    this.computePlayerValue();
                    this.computeDealerValue();
                    this.dealerAce();
                    this.isGameStarted = true;
                    this.closedCard = true;
                }, 500);
                this.betAsker = false;
            }

        },
        hit() {
            this.playerCards.push(this.getCard());
            this.computePlayerValue();
            if (this.playerValue > 21) {
                this.gameOver = 2;
                this.betValue = "";
            } else if (this.playerValue === 21) {
                this.stand();
            } else if (this.playerCards.length === 5) {
                this.gameOver = 1;
                this.wallet += this.betValue * 2.5;
                this.addedValue = this.betValue * 2.5;
                this.betValue = "";
            }
        },
        stand() {
            this.closedCard = false;
            while (this.dealerValue < 17) {
                this.dealerCards.push(this.getCard());
                this.computeDealerValue();
                this.dealerAce();
            }
            if (this.dealerValue > 21) {
                this.gameOver = 1;
                this.wallet += this.betValue * 2;
                this.addedValue = this.betValue * 2;
                this.betValue = "";
            } else {
                if (this.dealerValue > this.playerValue) {
                    this.gameOver = 2;
                    this.betValue = "";
                } else if (this.dealerValue === this.playerValue) {
                    this.gameOver = 3;
                    this.wallet += this.betValue;
                    this.betValue = "";
                } else {
                    this.gameOver = 1;
                    this.wallet += this.betValue * 2;
                    this.addedValue = this.betValue * 2;
                    this.betValue = "";
                }
            }
        },
        computePlayerValue() {
            this.playerValue = 0;
            for (let index = 0; index < this.playerCards.length; index++) {
                if (this.playerCards[index].value === 0) {
                    this.aceCheck = true;
                }
                this.playerValue += this.playerCards[index].value;
            }
        },
        computeDealerValue() {
            this.dealerValue = 0;
            for (let index = 0; index < this.dealerCards.length; index++) {
                this.dealerValue += this.dealerCards[index].value;
            }
        },
        selectAceValue(value) {
            let aceCardIndex = this.playerCards.findIndex(card => card.realValue === "A");
            if (aceCardIndex !== -1) {
                this.playerCards[aceCardIndex].value = value;
                this.computePlayerValue();
                if (this.playerValue === 21) {
                    this.stand();
                }
            }
            this.aceCheck = false;
        },
        dealerAce() {
            this.dealerCards.forEach(card => {
                if (card.value === 0) {
                    if (this.dealerValue <= 10) {
                        card.value = 11;
                    } else {
                        card.value = 1;
                    }
                    this.computeDealerValue();
                }
            })
        }
    },
}
</script>
