<template>
  <LayoutPageWithBreadcrumbs home-link="/projects" :breadcrumbs="breadcrumbs" :current-link="`Device ${$route.params.deviceId}`">
    <PageHeadingMetaActions />
    <TabsInPills />

    <ListDevicesWithCheckbox />
  </LayoutPageWithBreadcrumbs>
</template>

<script setup lang="ts">
const route = useRoute()
const breadcrumbs = [
  {
    name: `Project ${route.params.projectId}`,
    to: `/projects/${route.params.projectId}`
  }
]
</script>
