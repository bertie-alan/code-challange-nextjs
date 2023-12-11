"use client";

import {
  Badge,
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import personOneImg from "../assets/person_1.png";
import personTwoImg from "../assets/person_2.png";
import personThreeImg from "../assets/person_3.png";
import personFourImg from "../assets/person_4.png";

export default function Teams() {
  return (
    <>
      {/* VStack buat Header Teams - About Us */}
      <VStack>
        <Box mt={"92px"} mb={"1%"} padding={2}>
          <Heading fontSize="3xl" letterSpacing={"wide"}>
            Meet our team
          </Heading>
        </Box>
      </VStack>

      <HStack py={"25px"} px={"140px"}>
        {/* person 1 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"20px"} pr={"5px"} pb={"50px"}>
              <Box
                maxW="280px"
                minH="515px"
                maxH="515px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={"pink.300"}
              >
                <Image
                  mt={3}
                  mx={3}
                  maxW={"221px"}
                  maxH={"221px"}
                  width={"100%"}
                  height={"100%"}
                  borderRadius="4000px"
                  src={personOneImg.src}
                  alt="person 1"
                />

                <Box mt={2} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Amelie Walsh
                  </Box>
                </Box>
                <Box mt={"-47px"} p={"24px"} display="flex">
                  <Box color={"pink.600"} fontSize={"13px"}>
                    Operations & Projects
                  </Box>
                </Box>
                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box color={"gray.700"} fontSize={"13px"}>
                    With more than 8 years of operations and project leadership
                    experience in the technology industry,
                    <br />
                    Amelie Walsh create chapter of growth as the company
                    continues successfully scale its operations.
                  </Box>
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>

        {/* person 2 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"20px"} pr={"5px"} pb={"50px"}>
              <Box
                maxW="280px"
                minH="515px"
                maxH="515px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={"yellow.700"}
              >
                <Image
                  mt={3}
                  mx={3}
                  maxW={"221px"}
                  maxH={"221px"}
                  width={"100%"}
                  height={"100%"}
                  borderRadius="4000px"
                  src={personTwoImg.src}
                  alt="person 2"
                />

                <Box mt={2} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Cody Dixon
                  </Box>
                </Box>
                <Box mt={"-47px"} p={"24px"} display="flex">
                  <Box color={"orange.600"} fontSize={"13px"}>
                    Global Brand Designer
                  </Box>
                </Box>
                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box color={"gray.700"} fontSize={"13px"}>
                    With more than 5 years experience in the industry,
                    <br />
                    Cody Dixon brought together the knowledge of a scientist and
                    the creativity of the artist to offer a range of fine art
                    paints, with choice of colour, clarity and permanence.
                  </Box>
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>

        {/* person 3 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"20px"} pr={"5px"} pb={"50px"}>
              <Box
                maxW="280px"
                minH="515px"
                maxH="515px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={"red.600"}
              >
                <Image
                  mt={3}
                  mx={3}
                  maxW={"221px"}
                  maxH={"221px"}
                  width={"100%"}
                  height={"100%"}
                  borderRadius="4000px"
                  src={personThreeImg.src}
                  alt="person 3"
                />

                <Box mt={2} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Rosie Miller
                  </Box>
                </Box>
                <Box mt={"-47px"} p={"24px"} display="flex">
                  <Box color={"red.700"} fontSize={"13px"}>
                    Front-End Developer
                  </Box>
                </Box>
                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box color={"gray.700"} fontSize={"13px"}>
                    With more than 6 years leadership experience in the
                    technology industry,
                    <br />
                    Rosie Miller has a keen interest in animation and making
                    things move with code, combined it just like art!
                  </Box>
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>

        {/* person 4 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"20px"} pr={"5px"} pb={"50px"}>
              <Box
                maxW="280px"
                minH="515px"
                maxH="515px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={"blue.500"}
              >
                <Image
                  mt={3}
                  mx={3}
                  maxW={"221px"}
                  maxH={"221px"}
                  width={"100%"}
                  height={"100%"}
                  borderRadius="4000px"
                  src={personFourImg.src}
                  alt="person 4"
                />

                <Box mt={2} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Skylar Barrett
                  </Box>
                </Box>
                <Box mt={"-47px"} p={"24px"} display="flex">
                  <Box color={"blue.600"} fontSize={"13px"}>
                    Back-End Developer
                  </Box>
                </Box>
                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box color={"gray.700"} fontSize={"13px"}>
                    With more than 7 years of leadership experience in the
                    technology industry,
                    <br />
                    Skylar Barrett with a degree in fine art, loves all the
                    creative projects he does. Also, his team is focused to
                    unleash their great potentials anywhere.
                  </Box>
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>
      </HStack>
    </>
  );
}
