import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import ThemeSwitch from './ThemeSwitch'
import { Flex, Spacer, Heading } from '@chakra-ui/layout'



//ADD ROUTING LATER

function NavBar() {
  return (
    <Flex w='100%' align='center'>
      <Heading ml="8" size="md" fontWeight='semibold'>Anik Singha</Heading>
      <Spacer/>
      <Breadcrumb spacing='7px' separator=' ' mt={1}ml={1100}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' fontWeight='semibold'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#' fontWeight='semibold'>Projects</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#' fontWeight='semibold'>About Me</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
      <Spacer/>
      <ThemeSwitch/>
      </Flex>
  )
};

export default NavBar