<template>
    <div class="card">
        <div class="card-header">
            <div class="small-images">
                <div class="small-image" style="border-top-left-radius: 1rem; border-top: var(--warning) solid 0.5rem; border-left: var(--warning) solid 0.5rem;">
                </div>
                <div class="small-image" style=" border-left: var(--warning) solid 0.5rem;"></div>
                <div class="small-image" style="border-bottom-left-radius: 1rem; border-left: var(--warning) solid 0.5rem; border-bottom: var(--warning) solid 0.5rem;">
                </div>
            </div>
            <div class="profile-image"></div>
            <div class="small-images">
                <div class="small-image" style="border-top-right-radius: 1rem; border-top: var(--warning) solid 0.5rem; border-right: var(--warning) solid 0.5rem;">
                </div>
                <div class="small-image" style=" border-right: var(--warning) solid 0.5rem;"></div>
                <div class="small-image" style="border-bottom-right-radius: 1rem; border-right: var(--warning) solid 0.5rem; border-bottom: var(--warning) solid 0.5rem;">
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="paragraph-container">
                <p class="paragraph" style="margin-top:0 ;">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, non.</p>
                <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos
                    officiis quod ad aspernatur architecto adipisci, sapiente optio amet autem?</p>
                <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates porro
                    delectus repellat autem illo repellendus dignissimos distinctio? Sapiente facilis culpa commodi,
                    consectetur itaque dolorum impedit velit? Doloribus corrupti deserunt ducimus!</p>
                <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus,
                    dolor nobis asperiores at suscipit dolores voluptatum nostrum cum? Corrupti commodi quod aut
                    molestiae? Blanditiis perspiciatis ratione quasi accusamus similique laudantium quibusdam at.
                    Et, sequi temporibus nostrum velit vitae sapiente!</p>
            </div>
            <div class="informations">
                <!-- <div class="info">
                    <h2 class="info-content">187</h2>
                    <small class="info-text">Boy</small>
                </div>
                <div class="info">
                    <h2 class="info-content">65</h2>
                    <small class="info-text">Kilo</small>
                </div>
                <div class="info">
                    <h2 class="info-content">19</h2>
                    <small class="info-text">Yaş</small>
                </div>
                <div class="info">
                    <h2 class="info-content">42,5</h2>
                    <small class="info-text">Ayak numarası</small>
                </div>
                <div class="info">
                    <h2 class="info-content">20 Şubat</h2>
                    <small class="info-text">Doğum günü</small>
                </div> -->
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style scoped>
    .card {
        width: 50rem;
        border-radius: 1rem;
    }
    
    .card-header {
        height: 25rem;
        background-color: black;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .profile-image {
        height: 20rem;
        width: 16rem;
        background-image: url("images/stickman-pp.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        border-top: 0.5rem solid var(--warning);
        border-bottom: 0.5rem solid var(--warning);
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    
    .small-images {
        height: 21rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .small-image {
        height: 6.333333333333333rem;
        width: 4rem;
        background-image: url("images/stickman-pp.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-color: white;
    }
    
    .card-body {
        display: flex;
        background-color: #181b1e;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
    
    .paragraph-container {
        margin: 0;
        padding: 2rem;
        font-size: 1.5rem;
        flex: 8;
        color: white;
        opacity: 75%;
    }
    
    .paragraph {
        line-height: 2.2rem;
    }
    
    .informations {
        flex: 1;
        background-color: var(--warning);
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        border-bottom-right-radius: 1rem;
    }
    
    .info {
        padding: 1rem;
        text-align: center;
    }
    
    .info-content {
        margin: 0;
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--dark);
    }
    
    .info-text {
        margin: 0;
        opacity: 50%;
    }
    </style>
    