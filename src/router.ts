import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/ord', name: 'flashcards', component: () => import('./views/FlashcardsView.vue') },
    { path: '/setninger', name: 'sentences', component: () => import('./views/SentenceBuilderView.vue') },
    { path: '/quiz', name: 'quiz', component: () => import('./views/QuizView.vue') },
    { path: '/statsborger', name: 'citizenship', component: () => import('./views/CitizenshipView.vue') },
    { path: '/oversett', name: 'translate', component: () => import('./views/TranslateView.vue') },
    { path: '/innstillinger', name: 'settings', component: () => import('./views/SettingsView.vue') },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
