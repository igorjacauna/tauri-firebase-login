<script setup lang="ts">
import { useCurrentUser } from 'vuefire';
import { login, logout } from './services/auth';

const user = useCurrentUser();

</script>

<template>
  <div class="flex flex-col p-10">
    <button v-if="user" @click="logout" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
    <button v-else @click="login" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
    <p v-if="user">
      User data: <pre>{{ JSON.stringify(user.providerData, null, 2) }}</pre>
    </p>
  </div>
</template>
