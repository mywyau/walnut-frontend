<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string

const { data: item, error } = await useFetch(
  `/content/cantonese/${id}.json`,
  {
    key: `item-${id}`,
    server: false
  }
)
console.log('FETCH ERROR:', error.value)
</script>


<template>
  <main v-if="item">
    <h1>{{ item.sentence }}</h1>

    <p>{{ item.jyutping }}</p>

    <section>
      <h2>Usage</h2>
      <ul>
        <li v-for="note in item.usage" :key="note">
          {{ note }}
        </li>
      </ul>
    </section>

    <section v-if="item.alternatives?.length">
      <h2>Alternatives</h2>
      <ul>
        <li v-for="alt in item.alternatives" :key="alt.sentence">
          {{ alt.sentence }} — {{ alt.note }}
        </li>
      </ul>
    </section>
  </main>

  <div v-else-if="error">
    <p>This item doesn’t exist yet.</p>
    <NuxtLink to="/">Go home</NuxtLink>
  </div>

  <div v-else>
    <p>Loading…</p>
  </div>
</template>
