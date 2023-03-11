import { IParallax } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { HomeScreen } from "../src/sections/homepage/HomeScreen";

const SECTIONS = ['contact', 'home', 'about']
const SECTION_MAX_INDEX = SECTIONS.length - 1

const getSection = (name = 'home') => {
  const index = SECTIONS.findIndex(n => n === name)
  if (index === -1) return 0

  return index
}

export default function Page() {
  const router = useRouter();
  const section = getSection(router.query.page as string)
  const transRef = useRef<IParallax>()

  const adjustSection = () => {
    const page = transRef.current?.current
    router.push({ query: { page: SECTIONS[page] } })
  }

  const handleSetPage = (page) => {
    if (page >= SECTION_MAX_INDEX) {
      page = SECTION_MAX_INDEX
    } else if (page <= 0) {
      page = 0
    }

    if (transRef.current.offset !== page) {
      transRef.current.scrollTo(page)
      router.push({ query: { page: SECTIONS[page] } })
    }
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'ArrowRight') {
        handleSetPage(section + 1)
      } else if (e.key === 'ArrowLeft') {
        handleSetPage(section - 1)
      }
    }

    let timer = null
    function onWheel(e) {
      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        let newSection = section + (e.deltaY > 0 ? 1 : -1)
        newSection = newSection > SECTION_MAX_INDEX ? SECTION_MAX_INDEX : newSection < 0 ? 0 : newSection
        console.log(newSection, section)
        if (newSection !== section) {
          handleSetPage(newSection)
        }
        clearTimeout(timer)
      }, 300)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('wheel', onWheel)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('wheel', onWheel)
    }
  }, [section])

  useEffect(() => {
    let timer = null
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      transRef.current.scrollTo(section)
      clearTimeout(timer)
    }, 300)
    // if (transRef.current.offset !== section) {
    //   transRef.current.scrollTo(section)
    // }
  }, [section])

  return <HomeScreen transRef={transRef} onSectionChange={handleSetPage} />;
}
