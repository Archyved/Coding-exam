<template>
  <div class="space-y-5">
    <h2 class="text-4xl font-extrabold">Tasks</h2>
    <ul class="w-[600px] h-[500px] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
      <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg ">Profile</li>
      <li class="w-full px-4 py-2 border-b border-gray-200 ">Settings</li>
      <li class="w-full px-4 py-2 border-b border-gray-200 ">Messages</li>
      <li class="w-full px-4 py-2 rounded-b-lg">Download</li>
    </ul>
    <form class="w-full flex px-4 py-2 border rounded-md border-gray-200 gap-4">
      <input type="task"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Name of the Task" required />
      <button type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Default</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'TaskManager',
}
</script>