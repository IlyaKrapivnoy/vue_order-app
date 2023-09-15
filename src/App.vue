<template>
  <div class="app">
    <header>
      <img src="./assets/logo.webp" alt="site logo" />
      <OrderButtons @onOrderClick="handleClick" />
    </header>
    <JobsList :jobs="jobs" :order="order" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import JobsList from '@/components/JobList/JobsList.vue';
  import OrderTerm from '@/types/OderTerm';
  import jobs from '@/data/jobs';
  import OrderButtons from '@/components/OrderButtons/OrderButtons.vue';

  const order = ref<OrderTerm>('title');

  const handleClick = (term: OrderTerm) => {
    order.value = term;
  };
</script>

<style>
  header {
    text-align: center;
  }

  header .order {
    margin-top: 20px;
  }

  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  header img {
    width: 300px;
    margin: 40px 0 20px;
  }
</style>
