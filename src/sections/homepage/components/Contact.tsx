import { Box, chakra, Container, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { Form } from "./Form"
import { HomeButton } from "./HomeButton";
import { Particles } from "./Particles";

import bg from '../assets/bg-yellow.png';
import logo from '../assets/wildmate-logo-black.svg';
import fbIcon from '../assets/fb-icon.png';
import igIcon from '../assets/ig-icon.png';
import twIcon from '../assets/twitter-icon.png';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export function Contact() {
  return (
    <chakra.div bgImage={`url(${bg.src})`}
      bgPosition="center"
      bgAttachment="fixed"
      bgSize="cover"
      h="full"
      display="flex"
      justifyContent="center"
      alignItems="center">

      <HomeButton />

      <Container maxW={'container.xl'} color="black">
        <SimpleGrid spacing={5} minChildWidth="350px">
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={4}
            w="full"
            p={4}
          >
            <Image src={logo} alt="" style={{ width: '60%', margin: 'auto' }} />
            <Text fontWeight="semibold" textAlign="left">
              Qolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibham liber tempor cum soluta nobis eleifend option congue nihil uarta decima et quinta. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.
            </Text>

            <HStack gap={10} align="center" justify="center">
              <Image src={fbIcon} alt="" />
              <Image src={igIcon} alt="" />
              {/* <Image src={twIcon} alt="" /> */}
            </HStack>
          </Stack>

          <Form />

        </SimpleGrid>
      </Container>
    </chakra.div>
  )
}