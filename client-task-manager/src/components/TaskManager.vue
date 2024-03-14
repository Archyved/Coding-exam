<template>
  <div class="space-y-5">
    <h2 class="text-4xl font-extrabold">Tasks </h2>
    <ul class="w-[600px] h-[500px] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
      <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg ">Profile</li>
      <li v-for="(task, i) in tasks" :key="i" class="w-full px-4 h-12 py-2 border-b border-gray-200 rounded-t-lg ">
        {{ task.name }}</li>

    </ul>
    <form class="w-full flex px-4 py-2 border rounded-md border-gray-200 gap-4" @submit.prevent="AddTask">
      <input type="task" v-model="newTaskName"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Name of the Task" required />
      <button type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Default</button>
    </form>
  </div>
</template>
<script>
import Fetch from '@/utils/Axios';
export default {
  name: 'TaskManager',
  data() {
    return {
      tasks: [],
      newTaskName: ''
    }
  },
  created() {
    this.getTasks()
  },
  methods: {
    async getTasks() {
      try {
        const getTasks = await Fetch.get('task')
        this.tasks = getTasks.data.data
      } catch (err) {
        console.log(err)
      }
    },
    async AddTask() {
      try {
        const addTask = await Fetch.post('task', { name: this.newTaskName });
        // this.tasks.push(response.data);
        console.log(addTask)
        // Clear the input field after adding the task
        this.newTaskName = '';
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }

  }
}
</script>