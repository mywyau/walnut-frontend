<script setup lang="ts">
defineProps<{
  label: string
  src: string
}>()

const audio = ref<HTMLAudioElement | null>(null)

function play() {
  audio.value?.pause()
  audio.value!.currentTime = 0
  audio.value?.play()
}
</script>

<template>
  <div>
    <button
      class="px-3 py-1 border rounded"
      @click="play"
    >
      ▶ {{ label }}
    </button>
    <audio ref="audio" :src="src" />
  </div>
</template>
