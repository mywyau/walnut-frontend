<script setup lang="ts">
const modules = [
  {
    slug: 'daily',
    title: 'Daily Spoken Cantonese',
    description: 'Common phrases and patterns used in everyday conversation.'
  },
  {
    slug: 'particles',
    title: 'Sentence-final Particles',
    description: 'Learn how 啦、喎、呀 change tone and meaning.'
  },
  {
    slug: 'food',
    title: 'Eating & Meeting Up',
    description: 'Natural ways to talk about food, plans, and timing.'
  }
]
</script>

<template>
  <main class="max-w-3xl mx-auto py-12 px-4">
    <h1 class="text-3xl font-semibold mb-4">
      Modules
    </h1>

    <p class="text-gray-600 mb-8">
      Browse focused collections of spoken Cantonese patterns.
      Pick what’s useful to you.
    </p>

    <ul class="space-y-4">
      <li
        v-for="module in modules"
        :key="module.slug"
        class="border rounded p-4 hover:bg-gray-50"
      >
        <NuxtLink :to="`/module/${module.slug}`" class="block">
          <div class="text-lg font-medium">
            {{ module.title }}
          </div>
          <div class="text-sm text-gray-600">
            {{ module.description }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
