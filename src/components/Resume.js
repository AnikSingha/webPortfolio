import React from 'react';
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

const Resume = () => {
  return (
    <Box p={6} bg="gray.800" borderRadius="lg" boxShadow="lg">
      <Box mb={6} p={5} bg="gray.700" borderRadius="md" boxShadow="md">
        <Heading as="h3" size="lg" color="gray.300">
          Memorial Sloan Kettering Cancer Center
        </Heading>
        <Text fontStyle="italic" fontSize="md" color="gray.300">
          Jun 2024 - Aug 2024
        </Text>
        <Text fontWeight="bold" fontSize="lg" color="teal.300">
          Software Engineer Intern
        </Text>
        <Text color="gray.200" mt={2}>
          Worked on optimizing patient data management systems, ensuring efficient data retrieval and updates.
        </Text>
        <UnorderedList spacing={2} mt={2} color="gray.200">
          <ListItem>
            Designed a Neo4j graph database to efficiently store and manage
            patient data, enabling quick retrieval and updates.
          </ListItem>
          <ListItem>
            Built a high-performance REST API using FastAPI with asynchronous
            requests, optimizing database interactions.
          </ListItem>
          <ListItem>
            Developed a CI/CD pipeline with GitHub Actions for seamless
            integration and continuous deployment to AWS.
          </ListItem>
          <ListItem>
            Implemented load balancing and sticky sessions with NGINX on AWS
            Elastic Beanstalk for simplified deployment.
          </ListItem>
          <ListItem>
            Created a React-based visualization tool for researchers to easily
            identify and analyze patient trends.
          </ListItem>
        </UnorderedList>
      </Box>

      {/* New Experience Section for G-SWEP */}
      <Box mb={6} p={5} bg="gray.700" borderRadius="md" boxShadow="md">
        <Heading as="h3" size="lg" color="gray.300">
          Google Software Engineering Program (G-SWEP)
        </Heading>
        <Text fontStyle="italic" fontSize="md" color="gray.300">
          August 2023 - October 2023
        </Text>
        <Text fontWeight="bold" fontSize="lg" color="teal.300">
          Participant/Mentee
        </Text>
        <Text color="gray.200" mt={2}>
          Engaged in a rigorous program focusing on technical skills and mentorship.
        </Text>
        <UnorderedList spacing={2} mt={2} color="gray.200">
          <ListItem>
            Selected as one of 80 participants, outperforming 350+ applicants.
          </ListItem>
          <ListItem>
            Participated in 10 weeks of rigorous, technical mentoring sessions
            with a Google SWE.
          </ListItem>
          <ListItem>
            Attended workshops designed to enhance technical problem-solving
            and interview skills.
          </ListItem>
        </UnorderedList>
      </Box>

      <Box mb={6} p={5} bg="gray.700" borderRadius="md" boxShadow="md">
        <Heading as="h3" size="lg" color="gray.300">
          MNC Development
        </Heading>
        <Text fontStyle="italic" fontSize="md" color="gray.300">
          Feb 2023 - May 2023
        </Text>
        <Text fontWeight="bold" fontSize="lg" color="teal.300">
          Software Engineer Intern
        </Text>
        <Text color="gray.200" mt={2}>
          Developed a comprehensive real estate platform catering to user needs.
        </Text>
        <UnorderedList spacing={2} mt={2} color="gray.200">
          <ListItem>
            Developed a fully functional real estate website from scratch,
            allowing users to easily rent/buy properties.
          </ListItem>
          <ListItem>
            Utilized React and Material UI to create a visually appealing and
            responsive UI.
          </ListItem>
          <ListItem>
            Leveraged Firebase to develop and implement a robust backend
            solution, incorporating a high-performance database for efficient
            data storage and management.
          </ListItem>
          <ListItem>
            Designed and implemented an advanced filter and sort functionality,
            resulting in a streamlined user experience.
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Resume;
