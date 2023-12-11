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
import FiveStars from "../customized-icons/5-stars.png";
import itemOneImg from "../assets/item_1.png";
import itemOneImg_sub1 from "../assets/item_1_sub1.png";
import itemOneImg_sub2 from "../assets/item_1_sub2.png";
import itemOneImg_sub3 from "../assets/item_1_sub3.png";
import itemTwoImg from "../assets/item_2.png";
import itemThreeImg from "../assets/item_3.png";
// import itemFourImg from "../assets/item_4.png";
import personTwoImg from "../assets/person_2.png";
import personThreeImg from "../assets/person_3.png";
import personFourImg from "../assets/person_4.png";

export default function ProductItems() {
  return (
    <>
      {/* VStack buat Header Product Items : di page Services */}
      <VStack>
        <Box mt={"112px"} mb={"1%"} padding={2}>
          <Heading fontSize="2xl" letterSpacing={"wide"}>
            Discover the products
          </Heading>
        </Box>
      </VStack>

      <HStack py={"25px"} px={"140px"}>
        {/* item 1 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"20px"} pr={"5px"} pb={"50px"}>
              <Box
                maxW="380px"
                // minH="1835px"
                // maxH="1835px"
                minH="1350px"
                maxH="1350px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  //   mt={3}
                  //   mx={"5px"}
                  maxW={"400px"}
                  maxH={"300px"}
                  width={"100%"}
                  height={"100%"}
                  //   borderRadius="4000px"
                  src={itemOneImg.src}
                  alt="item 1"
                />

                <Box mt={1} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={3}
                    fontSize={"16px"}
                  >
                    Professional Watercolor Paint, Lightweight Metal Box - 24
                    Half Pans
                  </Box>
                </Box>
                <Box mt={"-47px"} p={"24px"} display="flex">
                  <Box color={"blue.700"} fontSize={"13px"}>
                    IDR 2,208,663
                  </Box>
                </Box>
                <Box mt={"-37px"} p={"24px"} display="flex">
                  <Box color={"gary.700"} fontSize={"13px"}>
                    <Text fontWeight={"bold"} color={"rgba(0, 0, 0, 0.64)"}>
                      About this item
                    </Text>
                    <Text mt={"-15px"}>
                      <br />
                      📌Includes 24 whole pans of artist's water colour
                      <br />
                      📌Cased in a lightweight metal box
                      <br />
                      📌Detachable palette and lid for ease of cleaning
                      <br />
                      📌Suitable for use indoor or out
                    </Text>
                    <Image
                      mt={"20px"}
                      ml={"45px"}
                      maxW={"240px"}
                      maxH={"180px"}
                      width={"100%"}
                      height={"100%"}
                      borderRadius="3px"
                      boxShadow={"md"}
                      src={itemOneImg_sub2.src}
                      alt="item 1-sub2"
                    />
                    <Image
                      ml={"45px"}
                      maxW={"240px"}
                      maxH={"180px"}
                      width={"100%"}
                      height={"100%"}
                      borderRadius="3px"
                      boxShadow={"md"}
                      src={itemOneImg_sub1.src}
                      alt="item 1-sub1"
                    />
                    <Image
                      ml={"45px"}
                      maxW={"240px"}
                      maxH={"180px"}
                      width={"100%"}
                      height={"100%"}
                      borderRadius="3px"
                      boxShadow={"md"}
                      src={itemOneImg_sub3.src}
                      alt="item 1-sub3"
                    />
                    <Box ml={"20px"} mt={"55px"}>
                      Stella Davies
                      <Image
                        width={"38%"}
                        height={"38%"}
                        src={FiveStars.src}
                        alt="5-stars rating"
                      />
                      <b>Trusted Brand</b>
                      <br />
                      I've tried other archival watercolor brands but the value
                      for the quality cannot be disputed. Windsor & Newton is a
                      trusted brand. A watercolor painting I created 30 yrs ago
                      is still as vibrant as day one.
                    </Box>
                  </Box>
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>

        {/* item 2 */}
        {/* <VStack>
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
                  <Box color={"gary.700"} fontSize={"13px"}>
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
        </VStack> */}

        {/* item 3 */}
        {/* <VStack>
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
                  <Box color={"gary.700"} fontSize={"13px"}>
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
        </VStack> */}

        {/* item 4 */}
        {/* <VStack>
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
                  <Box color={"gary.700"} fontSize={"13px"}>
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
        </VStack> */}
      </HStack>
    </>
  );
}
