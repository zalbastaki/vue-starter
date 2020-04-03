<template>
    <div class="home">
        <h1>This is the {{ data.title }}</h1>
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
