<template>
  <div class="order">
    <button @click="handleClick('title')">Order by title</button>
    <button @click="handleClick('salary')">Order by salary</button>
    <button @click="handleClick('location')">Order by location</button>
  </div>
</template>

<script setup lang="ts">
  import { defineEmits } from 'vue';
  import OrderTerm from '@/types/OderTerm';

  const emit = defineEmits(['onOrderClick']);

  const handleClick = (term: OrderTerm) => {
    emit('onOrderClick', term);
  };
</script>

<style scoped></style>
