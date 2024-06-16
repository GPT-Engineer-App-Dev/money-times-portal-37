import { Box, Container, Heading, Text, VStack, Image, Link, Flex } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#fff1e5">
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h1" size="2xl" textAlign="center" mb={4}>
            Financial Times
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your trusted source for financial news and analysis.
          </Text>
        </Box>

        <Box>
          <Image src="/images/financial-news.jpg" alt="Financial News" borderRadius="md" boxShadow="md" />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Latest News
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>
                Market Trends
              </Heading>
              <Text>
                Stay updated with the latest market trends and insights. <Link color="teal.500" href="#">Read more</Link>
              </Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>
                Investment Tips
              </Heading>
              <Text>
                Get expert advice on how to make smart investments. <Link color="teal.500" href="#">Read more</Link>
              </Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>
                Economic Analysis
              </Heading>
              <Text>
                In-depth analysis of the current economic situation. <Link color="teal.500" href="#">Read more</Link>
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Follow Us
          </Heading>
          <Flex justify="center" spacing={4}>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal mx={2}>
              <FaLinkedin size="24px" />
            </Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;