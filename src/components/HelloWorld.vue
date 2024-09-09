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

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="flex justify-center mt-64">
    <div>
      <div class="text-5xl font-thin transition-colors duration-1000 ease-linear" :style="`color:${randomColor}`">
        Rika-Vue-Template
      </div>
      <div class="my-4 flex justify-center gap-5 text-gray-500">
        <a
          target="_blank" href="https://rika-me.netlify.app/#/"
          class="icon-[mdi--user] text-5xl hover:text-gray-700"
        />
        <a
          target="_blank" href="https://github.com/rika-template/vue-template"
          class="icon-[mdi--github] text-5xl hover:text-gray-700"
        />
        <a
          target="_blank" href="https://gitee.com/rika-template/vue-template"
          class="icon-[simple-icons--gitee] text-5xl hover:text-gray-700"
        />
        <a
          :class="isDark ? 'icon-[carbon--moon]' : 'icon-[carbon--sun]'"
          class=" text-5xl hover:text-gray-700"
          @click="toggleDark()"
        />
      </div>
      <div />
    </div>
  </div>
</template>
