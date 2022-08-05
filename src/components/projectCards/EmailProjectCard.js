import { Box, Image, Text, Stack, Button, Badge, Flex, Spacer, HStack } from "@chakra-ui/react";
import email from '../images/email.jpg'
import { FaGithub } from 'react-icons/fa'
  
export default function EmailProjectCard(){  
  return (
    <div className="app">
      <Box w="300px" rounded="20px" 
           overflow="hidden" bg="gray.700" mt={10}>
        <Image src= {email}
               alt="Card Image" boxSize="300px">
        </Image>
        <Box p={5}>
        <HStack mb="2">
          <Badge variant="solid" colorScheme="purple" rounded="full" px={2}>
              Python
          </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}>
            HTTP Requests
          </Badge>
        </HStack>
          <Stack align="center">
            <Text as="h2" fontWeight="bold" my={2} >
              Temporary Email Generator
            </Text>
            <Text fontWeight="light">Wraps the 1secmail API and allows you to easily generate throwaway emails and check their inboxes
            </Text>
          <Flex>  
            <Spacer />
            <HStack>
            <a href="https://github.com/AnikSingha/temp_email_generator" target='_blank' rel="noreferrer">
              <Button variant="solid" 
                colorScheme="blue" size="sm">
              Code&nbsp;<FaGithub/>
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
  