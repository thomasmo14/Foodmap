<template>
        <nav>
            <ul class="square">
                <li><router-link :to = "{ name: 'Home'}">Food Map </router-link></li>
                <li><router-link :to = "{ name: 'Login'}">Bejelentkezés </router-link></li>
                <li><a href="">Regisztráció</a></li>
                <li><a href="">Regisztráció Tulajdonosként</a></li>
            </ul>
        </nav>
</template>

<script>

</script>

<style>

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #04AA6D;
}

.active {
    background-color: #04AA6D;
}

</style>