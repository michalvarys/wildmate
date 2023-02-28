import { IParallax } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { HomeScreen } from "../src/sections/homepage/HomeScreen2";

const SECTIONS = ['contact', 'home', 'about']
const SECTION_MAX_INDEX = SECTIONS.length - 1

const getSection = (name = 'home') => {
  const index = SECTIONS.findIndex(n => n === name)
  if (index === -1) return 0

  return index
}

export default function Page() {
  const [previous, setPrevPage] = useState(1)
  const router = useRouter();
  const section = getSection(router.query.page as string)

  const transRef = useRef<IParallax>()

  const handleSetPage = (page) => {
    if (page >= SECTION_MAX_INDEX) {
      page = SECTION_MAX_INDEX
    } else if (page <= 0) {
      page = 0
    }

    setPrevPage(section)
    router.push({ query: { page: SECTIONS[page] } })
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'ArrowRight') {
        handleSetPage(section + 1)
      } else if (e.key === 'ArrowLeft') {
        handleSetPage(section - 1)
      }
    }

    function onWheel(e) {
      if (e.deltaY > 0) {
        handleSetPage(section + 1)
      } else if (e.deltaY < 0) {
        handleSetPage(section - 1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('wheel', onWheel)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('wheel', onWheel)
    }
  }, [section])

  useEffect(() => {
    if (transRef.current) {
      transRef.current.scrollTo(section)
    }
  }, [section])

  return <HomeScreen transRef={transRef} section={section} onSectionChange={handleSetPage} previous={previous} />;
}
