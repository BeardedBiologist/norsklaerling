import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/kurs', name: 'kurs', component: () => import('./views/KursView.vue') },
    { path: '/kurs/:id', name: 'kurs-chapter', component: () => import('./views/KursChapterView.vue') },
    { path: '/laer', name: 'learn', component: () => import('./views/LearnView.vue') },
    { path: '/laer/:id', name: 'lesson', component: () => import('./views/LessonView.vue') },
    { path: '/ord', name: 'flashcards', component: () => import('./views/FlashcardsView.vue') },
    { path: '/setninger', name: 'sentences', component: () => import('./views/SentenceBuilderView.vue') },
    { path: '/quiz', name: 'quiz', component: () => import('./views/QuizView.vue') },
    { path: '/statsborger', name: 'citizenship', component: () => import('./views/CitizenshipView.vue') },
    { path: '/lytt', name: 'listen', component: () => import('./views/ListenSpeakView.vue') },
    { path: '/oversett', name: 'translate', component: () => import('./views/TranslateView.vue') },
    { path: '/boyning', name: 'inflection', component: () => import('./views/InflectionView.vue') },
    { path: '/innstillinger', name: 'settings', component: () => import('./views/SettingsView.vue') },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
