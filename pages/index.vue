<script setup lang="ts">
const { data: userData } = useSession()
const { data: examples, refresh } = useFetch('/api/examples')

</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Personal Dashboard
    </h1>
    some text
    {{ userData }}
    <br>
    <div>
      Prisma ORM Data from the database, received {{ examples?.length || 0 }} records: <pre>{{ examples }}</pre>
    </div>
    <button @click="refresh">
      Refresh Data
    </button>
  </div>
</template>
