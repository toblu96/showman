<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
  BarsArrowUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  StarIcon
} from '@heroicons/vue/20/solid'

const projects = [
  {
    name: 'W800 Demo',
    href: '1',
    siteHref: '#',
    repoHref: '#',
    repo: 'debbielewis/workcation',
    tech: 'Laravel',
    lastDeploy: '3h ago',
    location: 'United states',
    starred: true,
    active: true
  },
  {
    name: 'Lab Project',
    href: '2',
    siteHref: '#',
    repoHref: '#',
    repo: 'debbielewis/workcation',
    tech: 'Laravel',
    lastDeploy: '3h ago',
    location: 'United states',
    starred: false,
    active: true
  },
  {
    name: 'Workplace 001',
    href: '3',
    siteHref: '#',
    repoHref: '#',
    repo: 'debbielewis/workcation',
    tech: 'Laravel',
    lastDeploy: '3h ago',
    location: 'United states',
    starred: true,
    active: false
  }
  // More projects...
]
const activityItems = [
  {
    project: 'Workplace 001',
    commit: '2d89f0c8',
    environment: 'production',
    time: '5m'
  },
  {
    project: 'Workcation',
    commit: '2d89f0c8',
    environment: 'production',
    time: '1h'
  }
  // More items...
]
</script>

<template>
  <div class="mx-auto h-full w-full flex-grow lg:flex">
    <!-- Left sidebar & main wrapper -->
    <div class="min-w-0 flex-1 bg-white xl:flex">
      <!-- Projects List -->
      <div class="overflow-y-auto bg-white  lg:min-w-0 lg:flex-1">
        <div class="pb-4 pl-4 pr-6 pt-4 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6">
          <div class="flex items-center">
            <h1 class="flex-1 text-lg font-medium">
              Projects
            </h1>
            <Menu as="div" class="relative">
              <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <BarsArrowUpIcon
                  class="-ml-0.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Sort
                <ChevronDownIcon
                  class="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </MenuButton>
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                    >Name</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                    >Date modified</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                    >Date created</a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
        <ul
          role="list"
          class="divide-y divide-gray-200 border-b border-gray-200"
        >
          <li
            v-for="project in projects"
            :key="project.repo"
            class="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
          >
            <div class="flex items-center justify-between space-x-4">
              <!-- Repo name and link -->
              <div class="min-w-0 space-y-3">
                <div class="flex items-center space-x-3">
                  <span
                    :class="[
                      project.active ? 'bg-green-100' : 'bg-gray-100',
                      'flex h-4 w-4 items-center justify-center rounded-full',
                    ]"
                    aria-hidden="true"
                  >
                    <span
                      :class="[
                        project.active ? 'bg-green-400' : 'bg-gray-400',
                        'h-2 w-2 rounded-full',
                      ]"
                    />
                  </span>

                  <h2 class="text-sm font-medium">
                    <NuxtLink :to="`/projects/${project.href}`">
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ project.name }}
                      <span class="sr-only">{{
                        project.active ? "Running" : "Not running"
                      }}</span>
                    </NuxtLink>
                  </h2>
                </div>
                <a
                  :href="project.repoHref"
                  class="group relative flex items-center space-x-2.5"
                >
                  <svg
                    class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z"
                      fill="currentcolor"
                    />
                  </svg>
                  <span
                    class="truncate text-sm font-medium text-gray-500 group-hover:text-gray-900"
                  >{{ project.repo }}</span>
                </a>
              </div>
              <div class="sm:hidden">
                <ChevronRightIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <!-- Repo meta info -->
              <div
                class="hidden flex-shrink-0 flex-col items-end space-y-3 sm:flex"
              >
                <p class="flex items-center space-x-4">
                  <a
                    :href="project.siteHref"
                    class="relative text-sm font-medium text-gray-500 hover:text-gray-900"
                  >Visit site</a>
                  <button
                    type="button"
                    class="relative rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span class="sr-only">{{
                      project.starred
                        ? "Add to favorites"
                        : "Remove from favorites"
                    }}</span>
                    <StarIcon
                      :class="[
                        project.starred
                          ? 'text-yellow-300 hover:text-yellow-400'
                          : 'text-gray-300 hover:text-gray-400',
                        'h-5 w-5',
                      ]"
                      aria-hidden="true"
                    />
                  </button>
                </p>
                <p class="flex space-x-2 text-sm text-gray-500">
                  <span>{{ project.tech }}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>Last deploy {{ project.lastDeploy }}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{{ project.location }}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Activity feed -->
    <div
      class="bg-gray-100 pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8"
    >
      <div class="pl-6 lg:w-80">
        <div class="pb-2 pt-6">
          <h2 class="text-sm font-semibold">
            Activity
          </h2>
        </div>
        <div>
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="item in activityItems" :key="item.commit" class="py-4">
              <div class="flex space-x-3">
                <img
                  class="h-6 w-6 rounded-full"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                  alt=""
                >
                <div class="flex-1 space-y-1">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm font-medium">
                      You
                    </h3>
                    <p class="text-sm text-gray-500">
                      {{ item.time }}
                    </p>
                  </div>
                  <p class="text-sm text-gray-500">
                    Deployed {{ item.project }} ({{ item.commit }} in master) to
                    {{ item.environment }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div class="border-t border-gray-200 py-4 text-sm">
            <a
              href="#"
              class="font-semibold text-indigo-600 hover:text-indigo-900"
            >
              View all activity
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
