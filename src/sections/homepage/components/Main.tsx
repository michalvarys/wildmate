import { Grid, GridItem, Heading, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Button, chakra } from '@chakra-ui/react'

import yellowShape from '../assets/yellow-shape.png';
import darkShape from '../assets/dark-shape.png';
import logoGold from '../assets/logo-gold.png';
import wildmate from '../assets/wildmate.png';
import starEmpty from '../assets/star-empty.png';
import starFilled from '../assets/star-filled.png';
import logo from '../assets/logo-sm.png';

export function MainScreen({ transition }) {
  return (
    <Grid templateColumns="repeat(12, 1fr)" h="full" maxH="1080px" pos="relative">
      <GridItem colSpan={1} pos="relative" display="inline-flex">
        <chakra.div bgColor="#f2dd52" w={10} />
        <Image alt="" src={logo} style={{ position: 'absolute', top: '5px', right: '20px', maxWidth: 'full', margin: 'auto' }} />
        <Image src={yellowShape} alt="" />
      </GridItem>

      <VStack as={GridItem} spacing={8} colSpan={5} px={20} justify="flex-start" align="flex-start">
        <Heading size="3xl" color="gray.800" mt={40}>
          Lorem ipsum dolor
        </Heading>

        <HStack>
          <Image src={starFilled} alt="" />
          <Image src={starFilled} alt="" />
          <Image src={starFilled} alt="" />
          <Image src={starFilled} alt="" />
          <Image src={starEmpty} alt="" />
          <chakra.p color="cyan.500">32 hodnocení zákazníků</chakra.p>
        </HStack>

        <chakra.p color="gray.400" fontSize="lg">
          Qolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibham liber tempor cum soluta nobis eleifend option congue nihil uarta decima et quinta. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.
          Qolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibham liber tempor cum soluta nobis eleifend option congue nihil uarta decima et quinta. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.
        </chakra.p>

        <HStack>
          <Button variant="solid" colorScheme="yellow" color="white" borderRadius="3xl" px={10} py={6} onClick={() => transition(0)}>Chci vyzkoušet</Button>
          <Button variant="outline" colorScheme="gray" color="gray.900" borderRadius="3xl" px={10} py={6} onClick={() => transition(2)}>Co je to Maté?</Button>
        </HStack>
      </VStack>

      <GridItem colSpan={6} pos="relative" zIndex={9}>
        <chakra.div pos="absolute" top="30%" left={-20} zIndex={9}>
          <Image src={logoGold} alt="" />
        </chakra.div>

        <Grid templateColumns="repeat(6, 1fr)" position="relative">
          <Grid colSpan={1} w="180px" ml="auto">
            <Image src={darkShape} alt="" />
          </Grid>
          <GridItem colSpan={5} bgColor="#2f2e3c" w="full" />
        </Grid>
      </GridItem>

      <chakra.div pos="absolute" bottom="10%" left="20%" >
        <Image src={wildmate} alt="" />
      </chakra.div>
    </Grid>
  )
}