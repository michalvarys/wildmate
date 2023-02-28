import { chakra, SimpleGrid, Container, Box, HStack, Stack, Text } from '@chakra-ui/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Form } from './components/Form';
import { HomeButton } from './components/HomeButton';
import Image from 'next/image';
import bg from './assets/bg-yellow.png';
import logo from './assets/wildmate-logo-black.svg';
import fbIcon from './assets/fb-icon.png';
import igIcon from './assets/ig-icon.png';
import { MainScreen } from './components/Main';
import { AboutMate } from './components/AboutMate';

export function HomeScreen({ section, previous, onSectionChange, transRef }) {

  return (
    <chakra.div position="relative" h="100vh" overflow="hidden" bg="white">
      <Parallax pages={3} horizontal ref={transRef}>

        <ParallaxLayer offset={0} speed={0.1} style={{
          display: 'flex',
          height: "100%",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${bg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
          <ParallaxLayer horizontal offset={0} speed={0.1} style={{ position: "absolute" }}>
            <HomeButton />
          </ParallaxLayer>

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

        <MainScreen transition={onSectionChange} />

        <ParallaxLayer offset={2} speed={0.4}>
          <AboutMate />
        </ParallaxLayer>
      </Parallax>
    </chakra.div>
  );
}
