import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  Box,
  Button,
  chakra
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

// import { createIcon } from "@chakra-ui/react";

export function Form() {
  return (
    <chakra.form as={VStack} w="full" spacing={10}>
      <VStack spacing={5} w="full" bg="black" p={8} borderRadius={20} shadow="lg">
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<BsPerson />} />
            <Input type="text" name="name" placeholder="Vaše jméno" border={0} variant="filled" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<MdOutlineEmail />} />
            <Input
              type="email"
              name="email"
              placeholder="Emailová adresa"
              border={0}
              variant="filled" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <Textarea
            name="message"
            placeholder="Zpráva"
            rows={6}
            resize="none"
            border={0}
            variant="filled"
          />
        </FormControl>

        <Box w="full" textAlign="right">
          <Button
            ml="auto"
            type="submit"
            colorScheme="yellow"
            bg="yellow.500"
            px={6}
            _hover={{
              bg: 'yellow.600',
            }}>
            Odeslat
          </Button>
        </Box>
      </VStack>

      {/* <Stack
        mt={5}
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
        <Button
          type="submit"
          colorScheme={'green'}
          bg="green.500"
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'green.600',
          }}>
          Odeslat
        </Button>
        <Box>
          <Icon
            as={Arrow}
            w={71}
            position={'absolute'}
            right={-71}
            top={'10px'}
          />
          <Text
            fontSize={'lg'}
            fontFamily={'Caveat'}
            position={'absolute'}
            right={'-125px'}
            top={'-15px'}
            transform={'rotate(10deg)'}>
            Lorem ipsum dolor
          </Text>
        </Box>
      </Stack> */}
    </chakra.form>
  );
}