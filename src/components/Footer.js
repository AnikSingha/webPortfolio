import { Heading, HStack, Flex } from '@chakra-ui/layout'

export default function Footer() {
  return (
    <div>
        <HStack w="100">
            <Flex>
            <Heading size="sl" fontWeight='semibold' className='.explode'>Created By Anik Singha</Heading>
            </Flex>
        </HStack>
        <br/>
    </div>
  )
}
