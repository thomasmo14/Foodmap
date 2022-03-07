<template>
    <form>
        <label aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="User name" required="">
            <input type="email" name="email" placeholder="Email" required="">
            <input type="password" name="pswd" placeholder="Password" required="">
        <button>Sign up</button>
    </form> 
</template> 
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    };
</script>