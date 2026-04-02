import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'

const Home   = lazy(() => import('./pages/Home'))
const Docs   = lazy(() => import('./pages/Docs'))
const Lesson = lazy(() => import('./pages/Lesson'))
const Course = lazy(() => import('./pages/Course'))
const Search = lazy(() => import('./pages/Search'))
const Roadmap = lazy(() => import('./pages/Roadmap'))

function Loader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '1px solid #222', borderTopColor: '#ffffff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column' }}>
      <CustomCursor />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/"                 element={<Home />} />
            <Route path="/docs"             element={<Docs />} />
            <Route path="/docs/:lessonId"   element={<Lesson />} />
            <Route path="/course/:courseId" element={<Course />} />
            <Route path="/search"           element={<Search />} />
            <Route path="/roadmap"          element={<Roadmap />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
