import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Fade + slide up — general sections
      gsap.utils.toArray<Element>('.gsap-slide-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
          }
        )
      })

      // Fade in
      gsap.utils.toArray<Element>('.gsap-fade').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0 },
          {
            opacity: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
          }
        )
      })

      // Slide from left
      gsap.utils.toArray<Element>('.gsap-slide-left').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
          }
        )
      })

      // Slide from right
      gsap.utils.toArray<Element>('.gsap-slide-right').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: 50 },
          {
            opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
          }
        )
      })

      // Scale up
      gsap.utils.toArray<Element>('.gsap-scale').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.2)',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
          }
        )
      })

      // Staggered children
      gsap.utils.toArray<Element>('.gsap-stagger').forEach((container) => {
        const children = container.querySelectorAll(':scope > *')
        gsap.fromTo(children,
          { opacity: 0, y: 35 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play none none none' }
          }
        )
      })

    })

    return () => ctx.revert()
  }, [])
}
