import { Box, Center, chakra, Container, Heading, VStack } from '@chakra-ui/react'
import { HomeButton } from "./HomeButton";
import bg from '../assets/bg-blue.png';
import { ParallaxLayer } from '@react-spring/parallax';
import { colors } from '../../../theme';

export function AboutMate() {
  return (
    <>
      <ParallaxLayer offset={1.8} speed={1.2} style={{ width: '100%', background: colors.brand[500] }}>
        <Box bgColor="brand.500" w="full" />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.2} style={{
        display: 'flex',
        height: "100%",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
        <Container color="white" maxW='container.md' w="full">
          <VStack as={Center} spacing={4} >
            <Heading size="lg" color="yellow.400" textAlign="center">Co je to Maté?</Heading>
            <chakra.p>
              Maté je nápoj, který se vyrábí z listů a větví stromu yerba maté, který se původně nachází v jižních částech Latinské Ameriky. Kromě svých povzbuzujících vlastností má maté také tradiční a sociální význam v této oblasti, kde se často konzumuje při společenských setkáních a slavnostech.
            </chakra.p>

            <Heading size="lg" color="yellow.400" textAlign="center">Jak se připravuje Maté?</Heading>
            <chakra.p>
              Maté se obvykle připravuje pomocí speciální nádoby zvané "mate" nebo "calabaza", která je vyrobena z dýně nebo dřeva. Do nádoby se dávají listy yerba maté a zalévají se horkou vodou. Následně se nápoj pijí pomocí trubky zvané "bombilla", která umožňuje konzumovat nápoj bez nutnosti odstraňovat listy ze sklenice.
            </chakra.p>

            <Heading size="lg" color="yellow.400" textAlign="center">Jaké jsou přínosy Maté pro zdraví?</Heading>
            <chakra.p>
              Maté obsahuje mnoho prospěšných látek, jako jsou kofein, theobromin a polyfenoly, které mu dávají výrazné povzbuzující účinky a stimulují centrální nervový systém. Nicméně, mate neobsahuje tak mnoho kofeinu jako káva, takže může být pro některé lidi méně dráždivý.
            </chakra.p>

            <chakra.p>
              Kromě toho obsahuje mate také mnoho antioxidantů, což mu umožňuje pomáhat při boji proti volným radikálům a snižovat záněty v těle. Dále se mate spojuje s řadou dalších výhod, jako je podpora metabolismu, redukce hladiny cholesterolu v krvi, zlepšení trávení a podpora imunitního systému.
            </chakra.p>

            <chakra.p>
              Maté je povzbuzující a zdravý nápoj, který se konzumuje převážně v Latinské Americe. Mate se vyrábí z listů a větví stromu yerba maté a má mnoho výhod pro zdraví, včetně jeho antioxidantů, podpory metabolismu a zlepšení trávení. Pokud hled
            </chakra.p>
          </VStack>
        </Container>
      </ParallaxLayer>

      <ParallaxLayer horizontal offset={2} speed={0.3}>
        <HomeButton />
      </ParallaxLayer>
    </>
  )
}