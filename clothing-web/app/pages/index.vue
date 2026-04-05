<script setup>
import { ref } from 'vue'
const nombre = 'Sergio'
const contador = ref(0)
</script>


<template>
  <div>
    <h1>Hola, {{ nombre }}!</h1>
    <h1>Contador: {{ contador }}</h1>

    <button @click="contador++">+</button>
    <button @click="contador--">-</button>
  </div>
</template>