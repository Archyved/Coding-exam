<template>
  <main class="grid place-items-center w-full h-screen">
    <TaskManager />
  </main>
</template>

<script>
import TaskManager from './components/TaskManager.vue'
export default {
  name: 'App',
  components: {
    TaskManager
  }
}
</script>
