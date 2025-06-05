<template>
  <div class="min-h-screen bg-background">
    <header class="sticky top-0 w-full z-[100] ">
      <nav class="flex items-center container mx-auto justify-between">
        <div class="flex items-center justify-between p-4">
          <img class="w-8 h-8" src="/images/logo.png" alt="" />
          <span class="text-2xl font-bold">My Website</span>
        </div>
        <ul class="flex space-x-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto">
      <slot></slot>
    </main>
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2023 My Website</p>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
