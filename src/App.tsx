import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Greeting from './pages/Greeting'
import About from './pages/About'
import Elementary from './pages/Elementary'
import Middle from './pages/Middle'
import Exam from './pages/Exam'
import Teachers from './pages/Teachers'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Policy from './pages/Policy'
import Gallery from './pages/Gallery'

function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  if (pathname.startsWith('/admin')) return <>{children}</>
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/about" element={<About />} />
          <Route path="/elementary" element={<Elementary />} />
          <Route path="/middle" element={<Middle />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fee" element={<Policy type="fee" />} />
          <Route path="/privacy" element={<Policy type="privacy" />} />
          <Route path="/terms" element={<Policy type="terms" />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}