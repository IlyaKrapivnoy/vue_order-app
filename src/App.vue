<template>
  <div class="app">
    <HeaderView :handleClick="handleClick" />
    <JobsList :jobs="jobs" :order="order" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import JobsList from '@/components/JobList/JobsList.vue';
  import OrderTerm from '@/types/OderTerm';
  import jobs from '@/data/jobs';
  import HeaderView from '@/components/Header/HeaderView.vue';

  const order = ref<OrderTerm>('title');

  const handleClick = (term: OrderTerm) => {
    order.value = term;
  };
</script>

<style>
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
</style>
