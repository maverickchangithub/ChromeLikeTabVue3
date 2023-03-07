import { readonly, reactive, defineAsyncComponent, markRaw } from 'vue'
const defaultTabs = [
    {
        id: 1,
        icon: 'DocumentTextIcon',
        iconComponent: null,
        name: 'Article'
    },
    {
        id: 2,
        icon: 'MusicalNoteIcon',
        iconComponent: null,
        name: 'Music'
    },
    {
        id: 3,
        icon: 'VideoCameraIcon',
        iconComponent: null,
        name: 'Movie'
    },
    {
        id: 4,
        icon: 'PhotoIcon',
        iconComponent: null,
        name: 'Photo'
    },
    {
        id: 5,
        icon: 'CalendarDaysIcon',
        iconComponent: null,
        name: 'Calendar'
    }
]
const defaultState = {
    defaultTabs,
    currentTab: 1,
}
const state = reactive(defaultState)

const actions = {
    init: () => {
        state.defaultTabs.forEach(tab => {
            tab.iconComponent = markRaw(defineAsyncComponent(() => import(`../assets/icons/${tab.icon}.vue`)))
        });
    },
    updateCurrentTab: (tabId) => {
        if (tabId !== state.currentTab) {
            state.currentTab = tabId
        }
    },
    checkIsCurrentTab : (tabId) => {
        return tabId === state.currentTab
    }
}
const getters = {

}

export default () => ({
    ...actions,
    ...getters,
    state: readonly(state)
})