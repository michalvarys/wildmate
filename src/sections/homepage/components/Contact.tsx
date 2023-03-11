import { Box, Container, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { Form } from "./Form"
import { HomeButton } from "./HomeButton";

import bg from '../assets/bg-yellow.png';
import logo from '../assets/wildmate-logo-black.svg';
import fbIcon from '../assets/fb-icon.png';
import igIcon from '../assets/ig-icon.png';
// import twIcon from '../assets/twitter-icon.png';
import { ParallaxLayer } from "@react-spring/parallax";
import { colors } from "../../../theme";

export function Contact() {
  return (
    <>
      <ParallaxLayer offset={0} speed={0.1} style={{
        display: 'flex',
        height: "100%",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bg.src})`,
        backgroundColor: colors.yellow[500],
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>

        <Container maxW={'container.xl'} color="black">

          <SimpleGrid spacing={5} minChildWidth="350px">
            <Stack
              as={Box}
              textAlign={'center'}
              spacing={4}
              w="full"
              p={4}
            >
              <ParallaxLayer horizontal offset={0} speed={3.7} style={{ position: "relative", width: "100%" }}>
                <Image src={logo} alt="" style={{ width: '60%', margin: 'auto' }} />
              </ParallaxLayer>

              <ParallaxLayer horizontal offset={0} speed={2.4} style={{ position: "relative", width: "100%" }}>
                <Text fontWeight="semibold" textAlign="left">
                  Qolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibham liber tempor cum soluta nobis eleifend option congue nihil uarta decima et quinta. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.
                </Text>
              </ParallaxLayer>

              <HStack gap={10} align="center" justify="center">
                <Image src={fbIcon} alt="" />
                <Image src={igIcon} alt="" />
                {/* <Image src={twIcon} alt="" /> */}
              </HStack>
            </Stack>

            <ParallaxLayer offset={0} speed={0.4} style={{ position: "relative", width: "100%" }}>
              <Form />
            </ParallaxLayer>

          </SimpleGrid>
        </Container>
      </ParallaxLayer>

      <ParallaxLayer horizontal offset={0} sticky={{ start: 0, end: 2 }} speed={0.6} style={{ position: "relative", width: '300vw' }}>
        <HomeButton />
      </ParallaxLayer>
    </>
  )
}