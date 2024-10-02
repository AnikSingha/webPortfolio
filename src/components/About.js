import { VStack, Flex, Text, Container} from '@chakra-ui/layout';
import './css/About.css'

export default function About() {
  return (
        <div className='project' >
          <Flex w="100%" alignItems='center' justifyContent='space-around' mt="115">
              <Flex alignContent='center'>
                  <VStack>
                      <Text fontSize="5xl" fontWeight="bold" >About Me</Text>
                      <Container>Hi, I'm Anik, a full-stack developer based in Brooklyn, NY.

    I'm currently a senior at Hunter College, majoring in computer science and minoring in math. Over the years, I've had the opportunity to build a variety of projects from the ground up, each one teaching me something new about the power of code.

    What drives me most is creating things that are not only functional but also meaningful, whether it's for myself or others. One of my favorite projects was a graph visualization tool designed for cancer researchers, helping them explore complex data in a more intuitive way.
                        
                      </Container>
                  </VStack>
              </Flex>
          </Flex>
        </div>
  )
}

