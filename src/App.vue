<template>
<div>
    <div class="nav">
        <div class="logo"></div>
        <div class="route-buttons">
            <button @click="ActiveComponent = 'HomePage'" class="nav-item" :class="{'nav-item-active':ActiveComponent === 'HomePage'}">ANA SAYFA</button>
            <button @click="ActiveComponent = 'AboutPage'" class="nav-item" :class="{'nav-item-active':ActiveComponent === 'AboutPage'}">HAKKIMDA</button>
            <button @click="ActiveComponent = 'ProjectsPage'" class="nav-item" :class="{'nav-item-active':ActiveComponent === 'ProjectsPage'}">PROJELER</button>
            <button @click="ActiveComponent = 'LinkPage'" class="nav-item" :class="{'nav-item-active':ActiveComponent === 'LinkPage'}">BAĞLANTILAR</button>
            <button @click="ActiveComponent = 'testPage'" class="nav-item" :class="{'nav-item-active':ActiveComponent === 'testPage'}">test</button>
        </div>
        <div class="empty"></div>
    </div>
    <div class="content">
        <keep-alive>
            <component :is="ActiveComponent"></component>
        </keep-alive>
    </div>
</div>
</template>

<script>
 /* eslint-disable-next-line padded-blocks */ 
import AboutPage from "./views/AboutPage/AboutPage.vue"
import HomePage from "./views/HomePage/HomePage.vue"
import LinkPage from "./views/LinkPage/LinkPage.vue"
import ProjectsPage from "./views/ProjectsPage/ProjectsPage.vue"
import testPage from "./views/testPage.vue"
export default {
    components: {
        AboutPage,
        HomePage,
        ProjectsPage,
        LinkPage,
        testPage
    },
    data() {
        return {
            ActiveComponent: "HomePage",
        }
    },
}
</script>

<style>
:root {
    --dark: #212529;
    --warning: #ffc107;
}

body {
    background-color: var(--dark);
    margin: 0;
}

.nav {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    background-color: var(--dark);
    z-index: 1;
    box-shadow: 0 1rem 1rem black;
}

.logo {
    background-image: url("@/views/HomePage/images/aht-web-logo.png");
    background-position: center;
    background-repeat: no-repeat;
    height: 50px;
    width: 300px;
}

.route-buttons {
    display: flex;
}

.nav-item {
    font-size: 1rem;
    background-color: #090f1500;
    border: 0.1rem solid var(--dark);
    color: var(--warning);
    padding: 0.5rem;
    border-bottom: var(--dark) solid 0.1rem;
    transition: 0.15s ease;
    display: block;
    padding: 1rem;
}

.empty {
    width: 300px;
}

.nav-item:hover {
    border-bottom: 0.1rem solid var(--warning);
}

.nav-item:active,
.nav-item-active {
    background-color: var(--warning);
    color: black;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}

.content {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}
</style>
