<template>
    <div class="w-full px-10 flex items-end bg-gray-200 h-12 -space-x-px chrome-tabs">
        <div v-for="tab in state.defaultTabs" class="chrome-tab" :class="checkIsCurrentTab(tab.id) ? 'active' : ''" @click="updateCurrentTab(tab.id)">
            <div class="text-xs text-neutral-700 flex items-center space-x-2">
                <div class="w-4 h-4">
                    <component :is="tab.iconComponent" class="w-4 h-4" />
                </div>
                <div>
                    {{ tab.name }}
                </div>
            </div>
            <div class="chrome-tab-close">
                <XMarkIcon class="w-3.5 h-3.5" />
            </div>
            <div class="chrome-tab-divider">

            </div>
        </div>
        <div class="w-2.5 h-10">

        </div>
        <div class="w-8 h-8 mb-1 rounded-full grid place-content-center hover:bg-neutral-300 transition duration-200">
            <PlusIcon class="w-4 h-4" />
        </div>
    </div>
</template>

<script setup>
    import { XMarkIcon, PlusIcon } from '@heroicons/vue/24/outline'
    import useTab from '../../models/useTab'
    const { state, init, checkIsCurrentTab, updateCurrentTab } = useTab()
    init()
</script>

<style scoped>
    .chrome-tab {
        max-width: 224px;
        @apply relative w-full h-10 rounded-t-lg bg-gray-200 select-none cursor-default px-3 flex items-center;
    }
    .chrome-tab.active {
        @apply bg-white z-50;
    }
    .chrome-tab:not(.active):hover {
        @apply bg-neutral-100 transition duration-200;
    }
    .chrome-tab::before,
    .chrome-tab::after {
        content: '';
        @apply absolute bottom-0 w-5 h-5 rounded-full;
        box-shadow: 0 0 0 20px #e5e5e5;
    }
    .chrome-tab:not(.active):hover::before,
    .chrome-tab:not(.active):hover::after {
        @apply transition duration-200 z-10;
        box-shadow: 0 0 0 20px #f5f5f5;
    }
    .chrome-tab.active::before,
    .chrome-tab.active::after {
        content: '';
        @apply absolute bottom-0 w-5 h-5 rounded-full;
        box-shadow: 0 0 0 20px #ffffff;
    }
    .chrome-tab::before {
        @apply -left-5;
        clip-path: inset(50% -10px 0 50%);
    }
    .chrome-tab::after {
        @apply -right-5;
        clip-path: inset(50% 50% 0 -10px);
    }
    .chrome-tab .chrome-tab-divider {
        @apply absolute top-2 bottom-2 left-0 right-0;
    }
    .chrome-tab .chrome-tab-divider::before,
    .chrome-tab .chrome-tab-divider::after {
        content: '';
        @apply absolute w-px bg-neutral-500/70 top-0.5 bottom-0.5 opacity-100;
    }
    .chrome-tab .chrome-tab-divider::before {
        @apply left-0;
    }
    .chrome-tab .chrome-tab-divider::after {
        @apply right-0;
    }
    .chrome-tab:not(.active):hover .chrome-tab-divider::before,
    .chrome-tab:not(.active):hover .chrome-tab-divider::after {
        @apply bg-neutral-200 z-20;
    }
    .chrome-tabs .chrome-tab:first-child .chrome-tab-divider::before,
    .chrome-tabs .chrome-tab:last-child .chrome-tab-divider::after,
    .chrome-tabs .chrome-tab.active .chrome-tab-divider::after,
    .chrome-tabs .chrome-tab.active .chrome-tab-divider::before {
        @apply opacity-0;
    }

    .chrome-tab-close {
        @apply absolute right-2.5 top-2.5 w-5 h-5 rounded-full transition-all duration-200 z-30 grid place-content-center;
    }
    .chrome-tab-close:hover {
        @apply bg-neutral-300;
    }
</style>