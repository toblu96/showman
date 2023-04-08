<template>
  <div class="h-full">
    <!-- breadcrumb -->
    <div class="px-4 py-6 sm:px-6 lg:pl-6 bg-gray-50">
      <div class="lg:flex lg:items-center lg:justify-between ">
        <div class="min-w-0 flex-1 ">
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
    </div>
    <!-- content -->
    <main class="h-[calc(100%-4.25rem)] ">
      <h1 class="sr-only">
        Project
      </h1>
      <!-- Main 3 column grid -->
      <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-0 border-t border-gray-200 h-full ">
        <!-- Left column -->
        <div class="flex flex-col lg:col-span-2 h-full">
          <!-- Welcome panel -->
          <section class="px-4 py-6 sm:px-6 lg:border-r border-gray-200" aria-labelledby="content-header">
            <slot name="content-header">
              <PlaceholderStroked class="h-32">
                content-header
              </PlaceholderStroked>
            </slot>
          </section>

          <!-- Actions panel -->
          <section class="px-4 py-6 sm:px-6 border-t border-b lg:border-r border-gray-200 h-full" aria-labelledby="main-content">
            <slot name="main-content">
              <PlaceholderStroked class="h-screen">
                main-content
              </PlaceholderStroked>
            </slot>
          </section>
        </div>

        <!-- Right column -->
        <div class="grid grid-cols-1 gap-4 lg:gap-0 sticky top-16">
          <!-- Announcements -->
          <section class="px-4 py-6 sm:px-6" aria-labelledby="aside-top">
            <slot name="aside-top">
              <PlaceholderStroked class="h-72">
                aside-top
              </PlaceholderStroked>
            </slot>
          </section>

          <!-- Recent Hires -->
          <section class="px-4 py-6 sm:px-6 border-t border-gray-200" aria-labelledby="aside-bottom">
            <slot name="aside-bottom">
              <PlaceholderStroked class="h-72">
                aside-bottom
              </PlaceholderStroked>
            </slot>
          </section>
        </div>
      </div>
    </main>
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
