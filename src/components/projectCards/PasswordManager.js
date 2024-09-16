import { Box, Image, Text, Stack, Button, Badge, Flex, Spacer, HStack } from "@chakra-ui/react";
import pass from '../images/pass.jpg'
import { FaGithub} from 'react-icons/fa'
  
export default function PasswordManagerProjectCard(){  
  return (
    <div className="app">
      <Box w="300px" rounded="20px" 
           overflow="hidden" bg="gray.700" mt={10}>
        <Image src= {pass}
               alt="Card Image" boxSize="300px">
        </Image>
        <Box p={5}>
        <HStack mb="2">
          <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
              Flask
          </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}>
              React
          </Badge>
          <Badge variant="solid" colorScheme="purple" rounded="full" px={2}>
              Encryption
          </Badge>
        </HStack>
          <Stack align="center">
            <Text as="h2" fontWeight="bold" my={2} textAlign="center" >
              Password Manager
            </Text>
            <Text fontWeight="light" textAlign="center">
            A secure password manager featuring advanced encryption, robust hashing techniques, and OAuth support for enhanced protection
            </Text>
          <Flex>  
            <Spacer />
            <HStack>
            <a href="https://github.com/AnikSingha/passManager" target='_blank' rel="noreferrer">
                <Button variant="solid" 
                colorScheme="blue" size="sm">
                Code &nbsp;<FaGithub/>
                </Button>
            </a>
          </HStack>
          </Flex>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
  