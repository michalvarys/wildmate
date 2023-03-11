import { chakra } from '@chakra-ui/react'
import { Parallax } from '@react-spring/parallax'
import { MainScreen } from './components/Main';
import { AboutMate } from './components/AboutMate';
import { Contact } from './components/Contact';

export function HomeScreen({ onSectionChange, transRef }) {

  return (
    <chakra.div position="relative" h="100vh" overflow="hidden" bg="white">
      <Parallax pages={3} horizontal ref={transRef}>
        <Contact />

        <MainScreen transition={onSectionChange} />

        <AboutMate />
      </Parallax>
    </chakra.div>
  );
}
