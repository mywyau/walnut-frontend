<script setup lang="ts">

import RubyText from '@/components/RubyText.vue';

const route = useRoute()
const id = route.params.id as string

const { data: item, error } = await useFetch(
  `/content/cantonese/${id}.json`,
  {
    key: `item-${id}`,
    server: false
  }
)
</script>

<template>
  <!-- SUCCESS -->
  <main v-if="item" class="max-w-2xl mx-auto px-4 py-12 space-y-10">
    <!-- Sentence -->
    <section class="text-center space-y-2">
      <h1 class="text-gray-500 text-lg py-2">
        {{ item.english }}
      </h1>
      <RubyText :text="item.sentence" :ruby="item.jyutping" textClass="text-3xl leading-loose"
        rubyClass="text-base text-gray-400 tracking-wide" />
    </section>

    <!-- Usage -->
    <section>
      <h2 class="text-lg font-semibold mb-3">
        Usage
      </h2>
      <ul class="list-disc pl-5 space-y-2 text-gray-700">
        <li v-for="note in item.usage" :key="note">
          {{ note }}
        </li>
      </ul>
    </section>

    <!-- Alternatives -->
    <section v-if="item.alternatives?.length" class="border-t pt-6">
      <h2 class="text-lg font-semibold mb-3">
        Alternatives
      </h2>
      <ul class="space-y-3">
        <li v-for="alt in item.alternatives" :key="alt.sentence" class="text-gray-700">
          <RubyText :text="alt.sentence" :ruby="alt.jyutping" textClass="text-3xl leading-loose" />
          <div class="text-sm text-gray-500">
            {{ alt.note }}
          </div>
        </li>
      </ul>
    </section>
  </main>

  <!-- ERROR -->
  <div v-else-if="error" class="max-w-xl mx-auto px-4 py-12 text-center space-y-4">
    <p class="text-red-600">
      This item doesn’t exist yet.
    </p>
    <NuxtLink to="/" class="underline">
      Go home
    </NuxtLink>
  </div>

  <!-- LOADING -->
  <div v-else class="max-w-xl mx-auto px-4 py-12 text-center text-gray-500">
    Loading…
  </div>
</template>
