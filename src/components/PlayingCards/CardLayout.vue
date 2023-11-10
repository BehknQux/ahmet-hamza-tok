<template>
<div :class="{red: suit === 'diamonds' || suit === 'hearts'}" class="card">
    <div style="display: flex; justify-content: space-between;">
        <div style="width: 20%; padding: 0.3rem; display: flex; flex-direction: column; align-items: center;">
            <div class="text">{{value}}</div>
            <img class="small-suit" :src="require('@/components/PlayingCards/images/' + suit + '.png')" alt="">
        </div>
        <div style="width: 20%; padding: 0.3rem;"></div>
    </div>
    <div style="position: absolute ;left: 50%;top: 50%; transform: translate(-50%, -50%);">
        <img style="width: 5rem; height: 5rem;" :src="require('@/components/PlayingCards/images/' + suit + '.png')" alt="">
    </div>
    <div style="display: flex; justify-content: space-between;">
        <div style="width: 20%; padding: 0.3rem;"></div>
        <div style="width: 20%; padding: 0.3rem; display: flex; flex-direction: column; align-items: center; rotate: 180deg">
            <div class="text">{{value}}</div>
            <img class="small-suit" :src="require('@/components/PlayingCards/images/' + suit + '.png')" alt="">
        </div>
    </div>
</div>
</template>

    
<script>
export default {
    props: {
        value: String,
        suit: String
    },
}
</script>

    
<style scoped>
.card {
    width: 137px;
    height: 187px;
    background-color: white;
    border-radius: 0.8rem;
    transition: 0.1s ease;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}
.card:hover{
    box-shadow: 0 0 1rem 0.4rem black;
}
.red{
    color: red;
    transition: 0.1s ease;
}
.red:hover{
    box-shadow: 0 0 1rem 0.4rem red;
}
.text {
    font-size: 1.3rem;
    font-weight: bold;
    overflow: hidden;
}

.small-suit {
    width: 1.1rem;
    height: 1.1rem;
}
</style>
