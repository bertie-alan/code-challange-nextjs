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
import itemTwoImg_sub1 from "../assets/item_2_sub1.png";
import itemTwoImg_sub2 from "../assets/item_2_sub2.png";
import itemTwoImg_sub3 from "../assets/item_2_sub3.png";
import itemThreeImg from "../assets/item_3.png";
import itemThreeImg_sub1 from "../assets/item_3_sub1.png";
import itemThreeImg_sub2 from "../assets/item_3_sub2.png";
import itemThreeImg_sub3 from "../assets/item_3_sub3.png";

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
                minH="1350px"
                maxH="1350px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  maxW={"400px"}
                  maxH={"300px"}
                  width={"100%"}
                  height={"100%"}
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
                      ml={"30px"}
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
                      ml={"30px"}
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
                      ml={"30px"}
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
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"20px"} pr={"5px"} pb={"50px"}>
              <Box
                maxW="380px"
                minH="1350px"
                maxH="1350px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  maxW={"400px"}
                  maxH={"300px"}
                  width={"100%"}
                  height={"100%"}
                  src={itemTwoImg.src}
                  alt="item 2"
                />

                <Box mt={1} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={3}
                    fontSize={"16px"}
                  >
                    Winsor & Newton Calligraphy Ink, 30ml (1-oz) Bottle
                  </Box>
                </Box>
                <Box mt={"-47px"} p={"24px"} display="flex">
                  <Box color={"blue.700"} fontSize={"13px"}>
                    IDR 110,000
                  </Box>
                </Box>
                <Box mt={"-37px"} p={"24px"} display="flex">
                  <Box color={"gary.700"} fontSize={"13px"}>
                    <Text fontWeight={"bold"} color={"rgba(0, 0, 0, 0.64)"}>
                      About this item
                    </Text>
                    <Text mt={"-15px"}>
                      <br />
                      📌 30ml bottle of Winsor & Newton Calligraphy Ink
                      <br />
                      📌Can be applied using dip pen and brush
                      <br />
                      📌Non-waterproof ensuring good flow characteristics to
                      lessen clogging
                      <br />
                      📌Calligraphy Ink colours have a permanence rating of AA
                      or A.
                    </Text>
                    <Image
                      mt={"20px"}
                      ml={"30px"}
                      maxW={"240px"}
                      maxH={"180px"}
                      width={"100%"}
                      height={"100%"}
                      borderRadius="3px"
                      boxShadow={"md"}
                      src={itemTwoImg_sub1.src}
                      alt="item 2-sub1"
                    />
                    <Image
                      ml={"30px"}
                      maxW={"240px"}
                      maxH={"180px"}
                      width={"100%"}
                      height={"100%"}
                      borderRadius="3px"
                      boxShadow={"md"}
                      src={itemTwoImg_sub2.src}
                      alt="item 2-sub2"
                    />
                    <Image
                      ml={"30px"}
                      maxW={"240px"}
                      maxH={"180px"}
                      width={"100%"}
                      height={"100%"}
                      borderRadius="3px"
                      boxShadow={"md"}
                      src={itemTwoImg_sub3.src}
                      alt="item 2-sub3"
                    />
                    <Box ml={"20px"} mt={"55px"}>
                      Archer Wells
                      <Image
                        width={"38%"}
                        height={"38%"}
                        src={FiveStars.src}
                        alt="5-stars rating"
                      />
                      <b>Consistent quality.</b>
                      <br />I have been purchasing Winsor & Newton inks for
                      years. I purchased this to use on black drawing paper.
                      Works perfectly with my nib pen. Excellent application and
                      looks beautiful. Very pleased with my purchase.
                    </Box>
                  </Box>
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>

        {/* item 3 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"20px"} pr={"5px"} pb={"50px"}>
              <Box
                maxW="380px"
                minH="1350px"
                maxH="1350px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  maxW={"400px"}
                  maxH={"300px"}
                  width={"100%"}
                  height={"100%"}
                  src={itemThreeImg.src}
                  alt="item 3"
                />

                <Box mt={1} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={3}
                    fontSize={"16px"}
                  >
                    Professional Winsor & Newton Artists' Acrylic Color 12-Tube
                    Set, 20ml
                  </Box>
                </Box>
                <Box mt={"-47px"} p={"24px"} display="flex">
                  <Box color={"blue.700"} fontSize={"13px"}>
                    IDR 790,000
                  </Box>
                </Box>
                <Box mt={"-37px"} p={"24px"} display="flex">
                  <Box color={"gary.700"} fontSize={"13px"}>
                    <Text fontWeight={"bold"} color={"rgba(0, 0, 0, 0.64)"}>
                      About this item
                    </Text>
                    <Text mt={"-15px"}>
                      <br />
                      📌12 x 20ml tubes of Artists' Professional Acrylic Paints
                      <br />
                      📌Winsor & Newton Professional Acrylic colours are
                      unrivalled in their richness, intensity and depth of
                      colour
                      <br />
                      📌Use with Winsor & Newton Professional Acrylic Brushes
                      <br />
                      📌For extra versatility, use with Winsor & Newton
                      Professional Acrylic Mediums
                    </Text>
                    <Image
                      mt={"20px"}
                      ml={"30px"}
                      maxW={"240px"}
                      maxH={"180px"}
                      width={"100%"}
                      height={"100%"}
                      borderRadius="3px"
                      boxShadow={"md"}
                      src={itemThreeImg_sub1.src}
                      alt="item 3-sub1"
                    />
                    <Image
                      ml={"30px"}
                      maxW={"240px"}
                      maxH={"180px"}
                      width={"100%"}
                      height={"100%"}
                      borderRadius="3px"
                      boxShadow={"md"}
                      src={itemThreeImg_sub2.src}
                      alt="item 3-sub2"
                    />
                    <Image
                      ml={"30px"}
                      maxW={"240px"}
                      maxH={"180px"}
                      width={"100%"}
                      height={"100%"}
                      borderRadius="3px"
                      boxShadow={"md"}
                      src={itemThreeImg_sub3.src}
                      alt="item 3-sub3"
                    />
                    <Box ml={"20px"} mt={"55px"}>
                      Haiden Griffiths
                      <Image
                        width={"38%"}
                        height={"38%"}
                        src={FiveStars.src}
                        alt="5-stars rating"
                      />
                      <b>Five Stars</b>
                      <br />
                      What do you expect... Quality and that's what you get.
                    </Box>
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
