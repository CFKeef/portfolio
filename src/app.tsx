import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import './app.css'
import Nav from './components/Nav'
import { MetaProvider } from '@solidjs/meta'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <div class="min-h-screen p-4">
            <div class="flex flex-col mx-auto max-w-2xl gap-8">
              <Nav />
              <Suspense
                fallback={<div class="flex w-full flex-row justify-between">Loading...</div>}
              >
                {props.children}
              </Suspense>
              <Footer />
            </div>
          </div>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
