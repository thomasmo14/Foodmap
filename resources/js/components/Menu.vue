<template>

<div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Home Component</div>
  
                    <div class="card-body">
                        <main class="py-3">
                            <nav>
                                <ul class="square">
                                    <li><a class="active" href="">Food Map</a></li>
                                    <!--
                                    <li><a href="">Bejelentkezés</a></li>
                                    <li><a href="">Regisztráció</a></li>
                                    <li><a href="">Regisztráció Tulajdonosként</a></li>
                                    -->
                                </ul>
                            </nav>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
            console.log('Component mounted.')
        }
};
</script>