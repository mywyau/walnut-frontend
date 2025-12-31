<script setup lang="ts">
const props = defineProps<{
  src: string
}>()

const audio = ref<HTMLAudioElement | null>(null)

function play() {
  if (!audio.value) {
    audio.value = new Audio(props.src)
  }
  audio.value.currentTime = 0
  audio.value.play()
}
</script>

<template>
  <button
    @click="play"
    class="px-3 py-1 rounded border text-sm hover:bg-gray-50"
  >
    Play
  </button>
</template>
