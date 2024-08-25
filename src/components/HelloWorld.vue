<script setup lang="ts">
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let randomColor = $ref('rgb(0,0,0)')

let timeout: NodeJS.Timeout

onMounted(() => {
  timeout = setInterval(() => {
    randomColor = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timeout)
})
</script>

<template>
  <div class="flex justify-center mt-64 transition-colors duration-1000 ease-linear" :style="`color:${randomColor}`">
    <div>
      <div class="text-5xl font-thin">
        Rika-Vue-Template <span class="icon-[mdi--github] text-2xl" />
      </div>
      <div />
    </div>
  </div>
</template>
