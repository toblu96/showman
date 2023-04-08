<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Project details page - {{ $route.params.projectId }}
    </h1>
    Device list
    <br>
    <NuxtLink :to="`/projects/${$route.params.projectId}/device-1`">
      Device 1
    </NuxtLink>
  </div>
</template>
