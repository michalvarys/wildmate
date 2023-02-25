import React, { useRef } from 'react'

import { GridItem, Grid,  } from "@chakra-ui/layout";
import { chakra } from '@chakra-ui/react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Image from "next/image";

import yellowShape from './assets/yellow-shape.png';
import darkShape from './assets/dark-shape.png';
import logoGold from './assets/logo-gold.png';
import wildmate from './assets/wildmate.png';

export function HomeScreen() {
  const parallax = useRef<IParallax>(null)

  return (
    <Parallax pages={1} ref={parallax}>
      <Grid templateColumns="repeat(12, 1fr)" h="full" overflow="hidden">
        <GridItem colSpan={6} pos="relative">
          <Image src={yellowShape} layout="clip" />
        </GridItem>

        <GridItem colSpan={6} pos="relative" zIndex={9}>
          <ParallaxLayer offset={0} speed={0.2}>
            <Image src={logoGold} />

          </ParallaxLayer>
          {/* <chakra.div pos="absolute" top="30%" left={-20} zIndex={9}>
            <Image src={logoGold} />
          </chakra.div> */}

          <Grid templateColumns="repeat(6, 1fr)" position="relative">
            <Grid colSpan={1} w="180px" ml="auto">
              <Image src={darkShape} layout="clip" />
            </Grid>
            <GridItem colSpan={5} bgColor="#2f2e3c" w="full" />
          </Grid>
        </GridItem>
    
        <chakra.div pos="absolute" bottom="10%" left="20%" >
          <Image src={wildmate} layout="clip" />
        </chakra.div>
      </Grid>
    </Parallax>
  );
}
