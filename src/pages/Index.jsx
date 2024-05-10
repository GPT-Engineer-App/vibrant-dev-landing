import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = "blue.500";

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minHeight="100vh">
        {/* Header */}
        <Box as="header" width="full" py={4} bgColor={bgColor}>
          <Container maxW="container.md">
            <Flex justify="space-between" align="center">
              <Heading as="h1" size="lg" color={accentColor}>
                Developer Portfolio
              </Heading>
              <Stack direction="row" spacing={4}>
                <Link href="#projects" p={2}>
                  Projects
                </Link>
                <Link href="#about" p={2}>
                  About
                </Link>
                <Link href="#contact" p={2}>
                  Contact
                </Link>
              </Stack>
            </Flex>
          </Container>
        </Box>

        {/* Main Content */}
        <Flex direction="column" flex="1" justify="center" align="center" p={4} bgColor={bgColor}>
          {}
          <Box as="section" id="projects" py={10} bgColor={bgColor}>
            <Container maxW="container.md">
              <Heading as="h2" size="xl" mb={6} color={textColor}>
                Portfolio Projects
              </Heading>
              <Stack spacing={8}>
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                  <Heading fontSize="xl">Project 1</Heading>
                  <Text mt={4}>Description of project 1...</Text>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                  <Heading fontSize="xl">Project 2</Heading>
                  <Text mt={4}>Description of project 2...</Text>
                </Box>
              </Stack>
            </Container>
          </Box>
          <Box textAlign="center" maxW="container.md">
            <Heading mb={4} color={textColor}>
              Hello, I'm <span style={{ color: accentColor }}>Your Name</span>
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Full Stack Developer | JavaScript Enthusiast | Tech Blogger
            </Text>
            <Stack direction="row" spacing={4} mt={8} justify="center">
              <IconButton aria-label="GitHub" icon={<FaGithub />} isRound />
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} isRound />
              <IconButton aria-label="Twitter" icon={<FaTwitter />} isRound />
            </Stack>
          </Box>
        </Flex>

        {/* Footer */}
        <Box as="footer" width="full" py={4} bgColor={bgColor}>
          {}
          <Box as="section" id="about" py={10} bgColor={bgColor}>
            <Container maxW="container.md">
              <Flex direction="column" align="center" textAlign="center">
                <Heading as="h2" size="xl" mb={6} color={textColor}>
                  About Me
                </Heading>
                <Image borderRadius="full" boxSize="150px" src="/path/to/your-image.jpg" alt="Your Name" mb={4} />
                <Text fontSize="xl">Brief description about yourself...</Text>
              </Flex>
            </Container>
          </Box>
          <Container maxW="container.md">
            <Text textAlign="center" color={textColor}>
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </Text>
          </Container>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
