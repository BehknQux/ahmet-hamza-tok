<template>
<div class="card">
    <img class="levi" src="@/components/PlayingCards/images/levi.png" alt="">
</div>
</template>

<style scoped>
.card {
    width: 137px;
    height: 187px;
    background-color: white;
    border-radius: 0.8rem;
    transition: 0.1s ease;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card:hover {
    box-shadow: 0 0 1rem 0.4rem black;
    filter: contrast(120%) brightness(120%);
}

.levi {
    height: 157px;
    width: 107px;
    border: 0.1rem solid black;
}
.levi:hover{
}
</style>
