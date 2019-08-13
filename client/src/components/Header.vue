<template>
    <header>
        <nav class="nav">
            <div class="nav-wrap">
                <div class="nav__logo-wrap">
                <div class="nav__logo logo"><img :src="image" alt=""></div>
                <span class="nav__name">Template Engine</span>
                </div>
                
                <ul class="nav__list">
                <li class="nav__item"><router-link to="/mix" class="nav__link">Mixes</router-link></li>
                <li class="nav__item"><router-link to="/" class="nav__link">Releases</router-link></li>
                </ul>
            </div>
        </nav>

    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            image: require('@/assets/logo.png')
        }
    }

}
</script>

<style>
.logo {
    width: 43px;
    height: 39px;
}

.nav {
    width: 100%;
    height: 50px;
    background: #8113e4;
}


.nav-wrap {
    display: flex;
    max-width: 906px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    
}

.nav__logo-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 265px;
    height: 100%;
}

.nav__name {
    font-size: 22px;
    font-weight: 700;
    color: white;
}

.nav__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    
    width: 240px;
}


.nav__link {
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    display: block;
    height: 25px;
}

.nav__link:hover, .nav__link_active {
    border-bottom: 2px solid #ffffff;
}

</style>
