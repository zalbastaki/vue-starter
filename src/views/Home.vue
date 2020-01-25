<template>
    <div class="home">
        <img src="@/assets/images/logo.png" alt="logo" class="logo" />
        <h1>Coming Soon!</h1>
    </div>
</template>

<script>
    export default {
        name: 'home',
    };
</script>

<style lang="scss" scoped>
    .home {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #f9f9f9;

        h1 {
            font-family: $main-font;
            font-size: 50px;
            margin: 20px 0 0;
        }
    }

    .logo {
        height: 30%;
    }
</style>
