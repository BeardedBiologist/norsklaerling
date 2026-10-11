import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

/**
 * Without VITE_FIREBASE_* env vars (see .env.example) the app runs in
 * local-only mode: progress stays in localStorage and no sign-in is shown.
 */
export const firebaseEnabled = Boolean(config.apiKey && config.projectId && config.appId)

let app: FirebaseApp | null = null
let authInstance: Auth | null = null
let dbInstance: Firestore | null = null

if (firebaseEnabled) {
  app = initializeApp(config)
  setUpAppCheck(app)
  authInstance = getAuth(app)
  dbInstance = getFirestore(app)
}

/**
 * App Check proves requests come from this site, so nobody else can spend
 * the free Gemini quota (Firebase AI Logic rejects requests without it when
 * enforcement is on). Uses a reCAPTCHA Enterprise site key; on localhost a
 * registered debug token stands in for reCAPTCHA.
 */
function setUpAppCheck(firebase: FirebaseApp) {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  if (!siteKey) return
  if (import.meta.env.DEV) {
    ;(self as unknown as { FIREBASE_APPCHECK_DEBUG_TOKEN?: string | boolean }).FIREBASE_APPCHECK_DEBUG_TOKEN =
      import.meta.env.VITE_APPCHECK_DEBUG_TOKEN || true
  }
  initializeAppCheck(firebase, { provider: new ReCaptchaEnterpriseProvider(siteKey), isTokenAutoRefreshEnabled: true })
}

export const firebaseApp = app
export const auth = authInstance
export const db = dbInstance
