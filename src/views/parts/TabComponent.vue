<template>
    <div class="chrome-tab">
        <div class="text-xs text-neutral-600 flex space-x-2">
            <div class="w-4 h-4">
                <slot name="icon">
                    <component :is="defineIcon(tab)" class="w-4 h-4" />
                </slot>
            </div>
            <div>
                <slot name="tab-name">
                    {{ tab.name }}
                </slot>
            </div>
        </div>
        <div class="chrome-tab-divider">

        </div>
    </div>
</template>
<script setup>
    import { defineAsyncComponent } from 'vue'
    const props = defineProps({
        tab: {
            type: Object,
            default: {
                id: 1,
                icon: 'GlobeAltIcon',
                name: 'Article'
            }
        }
    })
    const defineIcon = (tab) => {
        const iconComponent = defineAsyncComponent(() => import(`../../assets/icons/${tab.icon}.vue`))
        return iconComponent
    }
</script>
<style scoped>
    .chrome-tab {
        @apply relative w-48 h-10 rounded-t-lg bg-neutral-200 select-none cursor-default px-3 flex items-center;
    }
    .chrome-tab.active {
        @apply bg-white z-50;
    }
    .chrome-tab:not(.active):hover {
        @apply bg-neutral-100 transition-all duration-200;
    }
    .chrome-tab::before, .chrome-tab::after {
        content: '';
        @apply absolute bottom-0 w-5 h-5 rounded-full;
        box-shadow: 0 0 0 20px #e5e5e5;
    }
    .chrome-tab:not(.active):hover::before, .chrome-tab:not(.active):hover::after {
        @apply transition-all duration-200 z-10;
        box-shadow: 0 0 0 20px #f5f5f5;
    }
    .chrome-tab.active::before, .chrome-tab.active::after {
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
        @apply absolute w-px bg-red-500 top-0.5 bottom-0.5 opacity-100;
    }
    .chrome-tab .chrome-tab-divider::before {
        @apply left-0;
    }
    .chrome-tab .chrome-tab-divider::after {
        @apply right-0;
    }

    .chrome-tab:first-child .chrome-tab-divider::before {
        @apply opacity-0;
    }
    .chrome-tab:last-child .chrome-tab-divider::after {
        @apply opacity-0;
    }
</style>