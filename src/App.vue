<template>
  <div class="app">
    <header>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>
    <JobsList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Job from '@/types/Job';
  import JobsList from '@/components/JobsList.vue';
  import OrderTerm from '@/types/OderTerm';

  export default defineComponent({
    name: 'App',
    components: { JobsList },
    setup() {
      // const age = ref<string | number>(25)
      const jobs = ref<Job[]>([
        {
          title: 'JavaScript Developer',
          location: 'lisbon, Portugal',
          salary: 50600,
          id: '1',
        },
        {
          title: 'Vue Developer',
          location: 'Porto, Portugal',
          salary: 40200,
          id: '2',
        },
        {
          title: 'React Developer',
          location: 'Berlin, Germany',
          salary: 40500,
          id: '3',
        },
      ]);

      const order = ref<OrderTerm>('title');

      const handleClick = (term: OrderTerm) => {
        order.value = term;
      };

      return { jobs, handleClick, order };
    },
    methods: {},
  });
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
</style>
