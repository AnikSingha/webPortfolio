import { VStack, Flex, Text, Container} from '@chakra-ui/layout';
import './css/About.css'

export default function About() {
  return (
        <div className='project' >
          <Flex w="100%" alignItems='center' justifyContent='space-around' mt="115">
              <Flex alignContent='center'>
                  <VStack>
                      <Text fontSize="5xl" fontWeight="bold" >About Me</Text>
                      <Container>Hi, I'm Anik, a developer based in Brooklyn, NY.
                        I'm currently a Junior at Hunter College majoring in computer 
                        science and minoring in mathematics. My coding journey began not too
                        long ago. During my senior year of high school I struggled to find a major
                        that suited me. I wasn't really interested in any of the majors I was 
                        reasearching. Eventually someone suggested computer science and I decided
                        to give it a try. I instantly fell in love. Now programming is 
                        a huge passion of mine and I hope to make a career of it.
                      </Container>
                  </VStack>
              </Flex>
          </Flex>
        </div>
  )
}

