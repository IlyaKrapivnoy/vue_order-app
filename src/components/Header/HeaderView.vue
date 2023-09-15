<template>
  <header>
    <img src="../../assets/logo.webp" alt="site logo" />
    <OrderButtons @onOrderClick="handleOrderClick" />
  </header>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  import OrderButtons from '@/components/OrderButtons/OrderButtons.vue';
  import OrderTerm from '@/types/OderTerm';

  const props = defineProps({
    handleClick: {
      required: true,
      type: Function,
    },
  });

  const handleOrderClick = (term: OrderTerm) => {
    if (typeof props.handleClick === 'function') {
      props.handleClick(term);
    }
  };
</script>

<style scoped>
  header {
    text-align: center;
  }

  header img {
    width: 300px;
    margin: 40px 0 20px;
  }
</style>
