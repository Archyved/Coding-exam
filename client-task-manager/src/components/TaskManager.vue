<template>
  <div class="space-y-5">
    <h2 class="text-4xl font-extrabold">Tasks </h2>
    <ul class="w-[600px] h-[500px] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
      <li
        class="w-full grid items-center grid-cols-[80px,1fr,90px] px-4 h-12 py-2 border-b border-gray-200 rounded-t-lg gap-4">
        <p class="grow">
          Status
        </p>
        <p class="grow">
          Title
        </p>
        <p class="grow">
          Remove
        </p>

      </li>
      <li v-if="tasks.length == 0 && !isTaskFetching" class="w-full text-center text-xl mt-10 text-black/30">
        No Task/s to show.
      </li>
      <li v-if="isTaskFetching" class="w-full text-center text-xl mt-10 text-black/30 animate-pulse">
        Fetching Tasks..
      </li>
      <li v-for="(task, i) in tasks" :key="i"
        class="w-full grid items-center grid-cols-[80px,1fr,90px] px-4 py-2 border-b border-gray-200 rounded-t-lg gap-4">
        <input id="default-checkbox" type="checkbox" :checked="task.statusCompleted === 1"
          v-model="task.statusCompleted" @change="UpdateTask(task)"
          class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ml-4">
        <p class="grow">
          {{ task.title }}
        </p>
        <button @click="RemoveTask(task.id)" type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">Remove</button>
      </li>

    </ul>
    <form class="w-full flex px-4 py-2 border rounded-md border-gray-200 gap-4" @submit.prevent="AddTask">
      <input type="task" v-model="newTaskTitle"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Name of the Task" required />
      <button type="submit"
        class="text-white bg-blue-700 w-48 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Add
        Task</button>
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
      newTaskTitle: '',
      isTaskFetching: true
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
        this.isTaskFetching = false
      } catch (err) {
        console.log('Error Fetching Task: ', err)
      }
    },
    async AddTask() {
      try {
        const addTask = await Fetch.post('task', { title: this.newTaskTitle });
        if (!addTask.data.error) {
          this.getTasks()
        }
        this.newTaskTitle = '';
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },
    async RemoveTask(id) {
      try {
        const removeTask = await Fetch.delete(`task/${id}`);
        if (!removeTask.data.error) {
          this.getTasks()
        }
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
    async UpdateTask(task) {
      try {
        const updateTask = await Fetch.put(`task/${task.id}`, task);
        if (!updateTask.data.error) {
          this.getTasks()
        }
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }

  }
}
</script>