<template>
  <div class="app">
    <p>{{ jobs[0].location }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Job from '@/types/Job';

  export default defineComponent({
    name: 'App',
    components: {},
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

      return { jobs };
    },
    methods: {},
  });
</script>

<style></style>
