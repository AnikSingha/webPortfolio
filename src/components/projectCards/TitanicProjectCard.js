import { Box, Image, Text, Stack, Button, Badge, Flex, Spacer, HStack } from "@chakra-ui/react";
import ship from '../images/ship.webp'
import { FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
  
export default function GameProjectCard(){  
  return (
    <div className="app">
      <Box w="300px" rounded="20px" 
           overflow="hidden" bg="gray.700" mt={10}>
        <Image src= {ship}
               alt="Card Image" boxSize="300px">
        </Image>
        <Box p={5}>
        <HStack mb="2">
          <Badge variant="solid" colorScheme="purple" rounded="full" px={2}>
              Python
          </Badge>
          <Badge variant="solid" colorScheme="red" rounded="full" px={2}>
              Machine Learning
          </Badge>
        </HStack>
          <Stack align="center">
            <Text as="h2" fontWeight="bold" my={2} >
              Titanic Log Regression
            </Text>
            <Text fontWeight="light"> Uses a log regression model to statistically determine whether you'd survive being on the titanic 
            </Text>
          <Flex>  
            <Spacer />
            <HStack>
            <a href="https://github.com/AnikSingha/Titanic/tree/main" target='_blank' rel="noreferrer">
                <Button variant="solid" 
                colorScheme="blue" size="sm">
                Code &nbsp;<FaGithub/>
                </Button>
            </a>
            <a href="https://aniksingha-titanic-main-0dvwe4.streamlitapp.com/" target='_blank' rel="noreferrer">
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
  