<script setup lang="ts">
let count = $ref(0)

function increase() {
  count++
}
</script>

<template>
  <div class="flex justify-center mt-64">
    <div>
      <div class="text-5xl font-thin">
        Rika-Vue-Template
      </div>
      <div>
        <div class="text-center">
          <button class="btn" @click="increase">
            count is {{ count }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply border-cyan-400 border-2 border-solid bg-cyan-100 px-2 py-1 rounded-xl hover:bg-cyan-200 text-gray-700 m-2;
}
</style>
