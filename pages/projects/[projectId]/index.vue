<template>
  <LayoutConstrainedGridWithBreadcrumbs home-link="/projects" :current-link="`Project ${$route.params.projectId}`">
    <template #content-header>
      <div class="overflow-hidden space-y-4">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="sm:flex sm:space-x-5">
            <div class="flex-shrink-0">
              <img class="mx-auto h-20 w-20 rounded-full" :src="user.imageUrl" alt="">
            </div>
            <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <!-- <p class="text-sm font-medium text-gray-600">
                Welcome back,
              </p> -->
              <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                {{ user.name }}
              </p>
              <p class="text-sm font-medium text-gray-600">
                {{ user.role }}
              </p>
            </div>
          </div>
          <div class="mt-5 flex justify-center sm:mt-0">
            <a href="#" class="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Contract</a>
          </div>
        </div>
        <div class="grid grid-cols-1 divide-y divide-gray-100 border border-gray-100 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div v-for="stat in stats" :key="stat.label" class="px-6 py-5 text-center text-sm font-medium">
            <span class="text-gray-900 mr-2">{{ stat.value }}</span>
            <span class="text-gray-600">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </template>
    <template #main-content>
      <ListDevicesWithCheckbox />
    </template>
    <template #aside-top>
      <h2 id="recent-hires-title" class="text-base font-medium text-gray-900 mb-2">
        Contacts
      </h2>
      <ul role="list" class="relative z-0 -mx-6 -mb-6">
        <li v-for="person in contacts" :key="person.id" class="bg-white">
          <div class="relative flex items-center space-x-3 px-6 py-5 hover:bg-gray-50">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="">
            </div>
            <div class="min-w-0 flex-1">
              <NuxtLink to="#" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">
                  {{ person.name }}
                </p>
                <p class="truncate text-sm text-gray-500">
                  {{ person.role }}
                </p>
              </NuxtLink>
            </div>
          </div>
        </li>
      </ul>
    </template>
    <template #aside-bottom>
      <h2 id="recent-hires-title" class="text-base font-medium text-gray-900 mb-2">
        Members
      </h2>
      <ul role="list" class="relative z-0 -mx-6 -mb-6">
        <li v-for="person in members" :key="person.id" class="bg-white">
          <div class="relative flex items-center space-x-3 px-6 py-5 hover:bg-gray-50">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="">
            </div>
            <div class="min-w-0 flex-1">
              <NuxtLink to="#" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">
                  {{ person.name }}
                </p>
                <p class="truncate text-sm text-gray-500">
                  {{ person.role }}
                </p>
              </NuxtLink>
            </div>
          </div>
        </li>
      </ul>
    </template>
  </LayoutConstrainedGridWithBreadcrumbs>
</template>

<script setup>
const user = {
  name: 'Project 1',
  email: 'chelsea.hagon@example.com',
  role: 'Trial Project for new XUV Devices',
  imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/006/506/587/small/isometric-3d-city-urban-factory-icon-building-power-plant-vector.jpg'
}
const stats = [
  { label: 'Connected Devices', value: 12 },
  { label: 'Active Alarms', value: 4 },
  { label: 'Billing Overdue', value: 2 }
]
const contacts = [
  {
    id: 1,
    name: 'Leslie Abbott',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Hector Adams',
    role: 'VP, Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Chelsea Hagon',
    role: 'Human Resources Manager',
    imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
]
const members = [
  {
    id: 3,
    name: 'Blake Alexander',
    role: 'Account Coordinator',
    imageUrl: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 4,
    name: 'Fabricio Andrews',
    role: 'Senior Art Director',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
]
</script>
