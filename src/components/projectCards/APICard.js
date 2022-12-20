import { Box, Image, Text, Stack, Button, Badge, Flex, Spacer, HStack } from "@chakra-ui/react";
import api from '../images/api.webp'
import { FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
  
export default function GameProjectCard(){  
  return (
    <div className="app">
      <Box w="300px" rounded="20px" 
           overflow="hidden" bg="gray.700" mt={10}>
        <Image src= {api}
               alt="Card Image" boxSize="300px">
        </Image>
        <Box p={5}>
        <HStack mb="2">
          <Badge variant="solid" colorScheme="purple" rounded="full" px={2}>
              Python
          </Badge>
          <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
              Flask
          </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}>
              Webscraping
          </Badge>
        </HStack>
          <Stack align="center">
            <Text as="h2" fontWeight="bold" my={2} >
              REST API
            </Text>
            <Text fontWeight="light">A REST API that contains the top rated anime from MAL. I scraped the website for the data
            </Text>
          <Flex>  
            <Spacer />
            <HStack>
            <a href="https://rest-api-practice.vercel.app/" target='_blank' rel="noreferrer">
                <Button variant="solid" 
                colorScheme="blue" size="sm">
                Code &nbsp;<FaGithub/>
                </Button>
            </a>
            <a href="https://mal-rest-api-practice.herokuapp.com/" target='_blank' rel="noreferrer">
                <Button variant="solid" 
                colorScheme="blue" size="sm">
                    Try it out&nbsp;<FaExternalLinkAlt/>
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
  