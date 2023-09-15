<template>
  <div class="order">
    <button
      v-for="(term, index) in orderTerms"
      :key="index"
      @click="handleClick(term)"
      :class="{ active: term === selectedTerm }"
    >
      Order by {{ term }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import { defineEmits, ref } from 'vue';
  import OrderTerm from '@/types/OderTerm';

  const orderTerms: OrderTerm[] = ['location', 'title', 'salary'];
  const selectedTerm = ref<OrderTerm>('title');

  const emit = defineEmits(['onOrderClick']);

  const handleClick = (term: OrderTerm) => {
    selectedTerm.value = term;
    emit('onOrderClick', term);
  };
</script>

<style scoped>
  .order {
    margin-top: 20px;
  }

  .active {
    background-color: #1195c9;
    color: white;
  }
</style>
