import { useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Informations from './components/Informations'
import Contact from './components/Contact'
import Copyright from './components/Copyright'

export default function App() {
  const cursorOuter = useRef(null)
  const cursorInner = useRef(null)

  useEffect(() => {
    const preloader = document.getElementById('preloader')
    if (!preloader) return
    const timer = setTimeout(() => {
      preloader.style.transition = 'opacity 0.5s'
      preloader.style.opacity = '0'
      setTimeout(() => { preloader.style.display = 'none' }, 500)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const outer = cursorOuter.current
    const inner = cursorInner.current
    if (!outer || !inner) return

    const onMove = (e) => {
      outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      outer.style.visibility = 'visible'
      inner.style.visibility = 'visible'
    }

    const onEnter = () => {
      outer.classList.add('cursor-hover')
      inner.classList.add('cursor-hover')
    }

    const onLeave = () => {
      outer.classList.remove('cursor-hover')
      inner.classList.remove('cursor-hover')
    }

    document.addEventListener('mousemove', onMove)

    const targets = document.querySelectorAll('a, button, [class*="c-pointer"]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <div className="orido_tm_all_wrap" data-magic-cursor="show">
      <div id="preloader">
        <div className="loader_line"></div>
      </div>
      <Header />
      <Hero />
      <About />
      <Informations />
<Contact />
      <Copyright />
      <div className="mouse-cursor cursor-outer" ref={cursorOuter}></div>
      <div className="mouse-cursor cursor-inner" ref={cursorInner}></div>
      <div className="progressbar">
        <a href="#"><span className="text">To Top</span></a>
        <span className="line"></span>
      </div>
    </div>
  )
}
