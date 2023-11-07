<template>
<div class="container">
    <button class="project-container">
        <h1>BLACKJACK</h1>
        <black-jack></black-jack>
    </button>
</div>
</template>

<script>
import BlackJack from "@/components/MyProjects/BlackJack/BlackJack.vue"
export default {
    components: {
        BlackJack
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project-container {
    width: 80%;
    background-color: black;
    color: white;
    border: grey solid 0.1px;
    border-radius: 1rem;
    transition: 0.2s ease-out;
    cursor: pointer;
}

.project-container:hover {
    box-shadow: 0 0 1rem 0.1rem white;
    width: 81%;
}
</style>
