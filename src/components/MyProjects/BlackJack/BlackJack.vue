<template>
<div>
    <div>
        <button @click="start">new game</button>
        <button :disabled="gameOver !== 0" v-if="isGameStarted === true" @click="hit">hit</button>
        <button :disabled="gameOver !== 0" v-if="isGameStarted === true" @click="stand">stand</button>
        <button :disabled="gameOver !== 0" v-if="isGameStarted === true" @click="clear">clear</button>
        <div>{{ userV }}</div>
        <div>{{ caseV }}</div>
        <br>
        <div>{{ totalUser }}</div>
        <div>-VS-</div>
        <div>{{ totalCase }}</div>
        <br>
        <div v-if="gameOver === 1">K R A L</div>
        <div v-if="gameOver === 2">E N A I</div>
        <div v-if="gameOver === 3">B E R A B E R E</div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isGameStarted: false,
            cardValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
            userCards: [],
            caseCards: [],
            totalUser: 0,
            totalCase: 0,
            gameOver: 0,
        }
    },
    methods: {
        start() {
            this.clear();
            this.userCards.push(this.cardValues[this.randomValue()]);
            this.userCards.push(this.cardValues[this.randomValue()]);
            this.caseCards.push(this.cardValues[this.randomValue()]);
            this.caseCards.push(this.cardValues[this.randomValue()]);

            this.computeUserTotal();
            this.computeCaseTotal();
            this.isGameStarted = true;
            if (this.totalUser > 21){
                this.gameOver = 2;
            } else if (this.totalUser === 21) {
                this.stand();
            }
        },
        hit() {
            this.userCards.push(this.cardValues[this.randomValue()]);
            this.computeUserTotal();
            if (this.totalUser > 21) {
                this.gameOver = 2;
            } else if (this.totalUser === 21){
                this.stand();
            }
        },
        stand() {
            while (this.totalCase <= this.totalUser && this.totalCase < 17) {
                this.caseCards.push(this.cardValues[this.randomValue()]);
                this.computeCaseTotal();
            }
            if (this.totalCase > 21) {
                this.gameOver = 1;
            } else {
                if (this.totalCase > this.totalUser) {
                    this.gameOver = 2;
                } else if (this.totalCase === this.totalUser) {
                    this.gameOver = 3;
                } else {
                    this.gameOver = 1;
                }
            }
        },
        clear() {
            this.userCards = [];
            this.caseCards = [];
            this.totalUser = 0;
            this.totalCase = 0;
            this.gameOver = 0;
            this.isGameStarted = false;
        },
        computeUserTotal() {
            this.totalUser = this.userCards.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);

        },
        computeCaseTotal() {
            this.totalCase = this.caseCards.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);

        },
        randomValue() {
            const selectRandomValue = Math.floor(Math.random() * this.cardValues.length);
            return selectRandomValue;
        },
    },
    computed: {
        userV() {
            return "Kartların: " + this.userCards.join();
        },
        caseV() {
            return "Kasa: " + this.caseCards.join();
        },
    }
}
</script>

<style scoped>

</style>
