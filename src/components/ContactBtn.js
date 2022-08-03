import { Button } from '@chakra-ui/button';
import { Text, Flex, VStack } from '@chakra-ui/layout';


export default function ContactBtn() {
  return (
    <div className='project'>
        <Flex w="100%" alignItems='center' justifyContent='space-around'>
            <VStack>
            <Text fontSize="5xl" fontWeight="bold" >Contact</Text>
            <a href={`mailto:aniksingha@outlook.com`}><Button colorScheme="blue">Email Me</Button></a>
            </VStack>
        </Flex>
        <br/>
    </div>
  )
}
