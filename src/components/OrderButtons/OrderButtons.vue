<template>
  <div class="order">
    <button
      v-for="(term, index) in orderTerms"
      :key="index"
      @click="handleClick(term)"
    >
      Order by {{ term }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import { defineEmits } from 'vue';
  import OrderTerm from '@/types/OderTerm';

  const orderTerms: OrderTerm[] = ['location', 'title', 'salary'];

  const emit = defineEmits(['onOrderClick']);

  const handleClick = (term: OrderTerm) => {
    emit('onOrderClick', term);
  };
</script>

<style scoped>
  .order {
    margin-top: 20px;
  }
</style>
