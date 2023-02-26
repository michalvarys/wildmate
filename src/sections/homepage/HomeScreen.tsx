import React, { useEffect, CSSProperties } from 'react'

import { chakra } from '@chakra-ui/react'
import useMeasure from 'react-use-measure'
import { useTrail, animated, useTransition, AnimatedProps, useSpringRef } from '@react-spring/web'

import { MainScreen } from './components/Main';
import { AboutMate } from './components/AboutMate';
import { Contact } from './components/Contact';

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const pageStyle: CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  color: 'white',
  willChange: 'transform, opacity',
  userSelect: 'none'
  // textShadow: '0px 2px 40px #00000020, 0px 2px 5px #00000030',
}

const pages: ((props: AnimatedProps<{ style: CSSProperties, transition(page: number): void }>) => React.ReactElement)[] = [
  ({ style, ...rest }) => <animated.div style={{
    ...pageStyle,
    ...style,
    background: '#f2dd52',
  }}>
    <Contact  {...rest} />
  </animated.div>,
  ({ style, ...rest }) => <animated.div style={{
    ...pageStyle,
    ...style,
  }}>
    <MainScreen {...rest} />
  </animated.div >,
  ({ style, ...rest }) => <animated.div style={{
    ...pageStyle,
    ...style,
    background: '#2f2e3c',
  }}>
    <AboutMate {...rest} />
  </animated.div>,
]


export function HomeScreen({ section, previous, onSectionChange }) {
  const transRef = useSpringRef()
  const transitions = useTransition(section, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: previous > section ? 'translate3d(-100%,0,0)' : 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: previous > section ? 'translate3d(0%,0,0)' : 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: previous > section ? 'translate3d(50%,0,0)' : 'translate3d(-50%,0,0)' },
  })

  const [trail, api] = useTrail(3, i => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }))

  const [ref, { left, top }] = useMeasure()

  const handleMouseMove = e => {
    api.start({ xy: [e.clientX - left, e.clientY - top] })
  }


  useEffect(() => {
    transRef.start()
  }, [section])

  return (
    <chakra.div position="relative" h="100vh" overflow="hidden">
      {/* <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>

      <chakra.div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove} zIndex={10}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
      </chakra.div> */}

      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} transition={onSectionChange} />
      })}
    </chakra.div>
  );
}
