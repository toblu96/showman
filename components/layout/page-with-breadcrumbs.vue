<template>
  <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
    <div class="lg:flex lg:items-center lg:justify-between mb-2">
      <div class="min-w-0 flex-1">
        <nav class="flex" aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-4">
            <li>
              <div class="flex items-center">
                <NuxtLink :to="homeLink" class="text-sm font-medium text-gray-500 hover:text-gray-700">
                  Home
                </NuxtLink>
              </div>
            </li>
            <li v-for="(breadcrumb, idx) in breadcrumbs" :key="idx">
              <div class="flex items-center">
                <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <NuxtLink :to="breadcrumb.to" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  {{ breadcrumb.name }}
                </NuxtLink>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <p class="ml-4 text-sm font-medium text-gray-500">
                  {{ currentLink }}
                </p>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import {
  ChevronRightIcon
} from '@heroicons/vue/20/solid'

interface BreadcrumbLink {
    name: string,
    to: string
}

defineProps<{
  breadcrumbs?: BreadcrumbLink[]
  homeLink: string
  currentLink: string
}>()
</script>
