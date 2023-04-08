<template>
  <LayoutPageWithBreadcrumbs home-link="/projects" :current-link="`Project ${$route.params.projectId}`">
    <PageHeadingMetaActions />
    <TabsInPills />

    <ListDevicesWithCheckbox />
  </LayoutPageWithBreadcrumbs>
</template>
