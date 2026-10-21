<template>
    <div>
        <h1 class="text-center">Register</h1>
        <div class="w-[50%] mx-auto">
            <input type="email" name="email" v-model="email" placeholder="Type your email">
            <br />
            <input type="text" name="username" v-model="name" placeholder="Username">
            <br />
            <input type="password" name="password" v-model="password" placeholder="Input password">
            <br />
            <button @click="register">Register</button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import AuthenticationService from '@/services/AuthenticationService';

const email = ref('');
const password = ref('')
const name = ref('')

const register = async() => {
    const response = await AuthenticationService.register({
        email: email.value,
        name: name.value,
        password: password.value
    })

    console.log(response.data)
}
</script>

<style lang="scss" scoped></style>