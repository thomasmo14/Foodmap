<template>
     <div id="app">
        <NavBar/>
        <Map/>
    </div>
</template>

<script>
    import Map from './components/Map.vue'
    import NavBar from './components/Navbar.vue'

    export default {
    name: 'App',
    components: {
    NavBar,
    Map
 }
}
</script>

<style>
</style>