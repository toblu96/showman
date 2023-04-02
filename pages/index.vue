<script setup lang="ts">
const { data: userData } = useSession();
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    some text
    {{ userData }}
  </div>
</template>
