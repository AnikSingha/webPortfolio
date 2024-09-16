import { Box, Image, Text, Stack, Button, Badge, Flex, Spacer, HStack } from "@chakra-ui/react";
import game from '../images/game.webp'
import { FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
  
export default function GameProjectCard(){  
  return (
    <div className="app">
      <Box w="300px" rounded="20px" 
           overflow="hidden" bg="gray.700" mt={10}>
        <Image src= {game}
               alt="Card Image" boxSize="300px">
        </Image>
        <Box p={5}>
        <HStack mb="2">
          <Badge variant="solid" colorScheme="yellow" rounded="full" px={2}>
              JavaScript
          </Badge>
          <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
              Node.js
          </Badge>
        </HStack>
          <Stack align="center">
            <Text as="h2" fontWeight="bold" my={2} >
              Space Invaders
            </Text>
            <Text fontWeight="light" textAlign="center">A Space Invaders copy created using phaserJS, a javascript library for creating games
            </Text>
          <Flex>  
            <Spacer />
            <HStack>
            <a href="https://github.com/AnikSingha/Space-Invaders" target='_blank' rel="noreferrer">
                <Button variant="solid" 
                colorScheme="blue" size="sm">
                Code &nbsp;<FaGithub/>
                </Button>
            </a>
            <a href="https://space-invaders-ochre.vercel.app/" target='_blank' rel="noreferrer">
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
  