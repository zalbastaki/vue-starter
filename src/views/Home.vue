<template>
    <div class="home">
<<<<<<< HEAD
        <h1>This is the {{ data.title }}</h1>
=======
        Homepage
>>>>>>> master
    </div>
</template>

<script>
    import dataLoader from '../mixins/dataLoader';
    import data from '../content/home.md';

    export default {
        name: 'home',

        mixins: [dataLoader(data)],
    };
</script>
