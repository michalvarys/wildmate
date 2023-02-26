import { Box, Button, chakra, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Form } from "./Form"
import Image from "next/image";
import wildmate from '../assets/wildmate.png';
import logo from '../assets/logo-sm.png';


export function Contact({ transition }) {
  return (
    <chakra.div>
      <Button colorScheme="linkedin" variant="link" onClick={() => transition(1)}>zpět</Button>
      <Container maxW={'3xl'} color="#2C5F2D">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          w="full"
        // py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <Image alt="" src={logo} style={{ margin: "auto", marginBottom: 10 }} />
            Chci vyzkoušet <br />
            <Image alt="" src={wildmate} height={50} style={{ margin: "auto", marginTop: 10 }} />
          </Heading>
          <Text>
            Qolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibham liber tempor cum soluta nobis eleifend option congue nihil uarta decima et quinta. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.
          </Text>

          <Form />

        </Stack>
      </Container>
    </chakra.div>
  )
}