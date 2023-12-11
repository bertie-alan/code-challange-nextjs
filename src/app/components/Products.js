"use client";

import {
  Badge,
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import imgProduct1 from "../assets/product_1.avif";
import imgProduct2 from "../assets/ink.avif";
import imgProduct3 from "../assets/acrylic.avif";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Products() {
  return (
    <>
      {/* VStack buat Header product */}
      <VStack>
        <Box mt={"92px"} mb={"1%"} padding={2}>
          <Heading fontSize="2xl" letterSpacing={"wide"}>
            Featured Products
          </Heading>
        </Box>
      </VStack>

      <HStack py={"25px"} px={"140px"}>
        {/* product 1 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"50px"} pr={"50px"} pb={"50px"}>
              <Box
                maxW="280px"
                minH="515px"
                maxH="515px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  maxW={"280px"}
                  maxH={"280px"}
                  width={"130%"}
                  height={"130%"}
                  src={imgProduct1.src}
                  alt="watercolor"
                />

                <Box p={"24px"} display="flex">
                  <Badge
                    borderRadius="full"
                    px="2"
                    bgColor="gray.700"
                    fontWeight={"light"}
                  >
                    <Text color={"white"} alignSelf={"center"}>
                      Artist choice ⭐
                    </Text>
                  </Badge>
                </Box>

                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Professional Watercolour
                  </Box>
                </Box>
                <Box mt={"-47px"} p={"24px"} display="flex">
                  <Box color={"gray.700"} fontSize={"13px"}>
                    Our watercolours were used by the greats - such as Turner -
                    and are still the first choice of today's artists.
                    <br />
                    🔹Available in pans and tubes🔹
                  </Box>
                </Box>
                <Box
                  _hover={{
                    shadow: "md",
                    transform: "translateY(-3px)",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                >
                  <Box mt={"-30px"} p={"24px"} display="flex">
                    <Box
                      color={"gray.400"}
                      fontSize={"12px"}
                      letterSpacing={"wide"}
                    >
                      Discover endless colour potential
                    </Box>
                    <Box
                      mt={"-4px"}
                      _hover={{
                        transform: "translateX(3px)",
                        transitionDuration: "0.2s",
                        transitionTimingFunction: "ease-in-out",
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Link href={"/services"}>
                        <ChevronRightIcon />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>

        {/* product 2 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"50px"} pr={"50px"} pb={"50px"}>
              <Box
                maxW="280px"
                minH="515px"
                maxH="515px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  maxW={"280px"}
                  maxH={"280px"}
                  width={"130%"}
                  height={"130%"}
                  src={imgProduct2.src}
                  alt="calligraphy ink"
                />

                <Box p={"24px"} display="flex">
                  <Badge
                    borderRadius="full"
                    px="2"
                    bgColor="green.700"
                    fontWeight={"light"}
                  >
                    <Text color={"white"} alignSelf={"center"}>
                      recommended
                    </Text>
                  </Badge>
                </Box>

                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Calligraphy Inks
                  </Box>
                </Box>
                <Box mt={"-47px"} p={"24px"} display="flex">
                  <Box color={"gray.700"} fontSize={"13px"}>
                    Brilliance of Colour, with an unrivalled level of permanence
                    and quality. All the inks have been formulated with
                    carefully chosen pigments to ensure maximum brilliance of
                    colour.
                  </Box>
                </Box>
                <Box
                  _hover={{
                    shadow: "md",
                    transform: "translateY(-3px)",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                >
                  <Box mt={"21.5px"} p={"24px"} display="flex">
                    <Box
                      color={"gray.400"}
                      fontSize={"12px"}
                      letterSpacing={"wide"}
                    >
                      Discover the lightfast pigments
                    </Box>
                    <Box
                      mt={"-4px"}
                      _hover={{
                        transform: "translateX(3px)",
                        transitionDuration: "0.2s",
                        transitionTimingFunction: "ease-in-out",
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Link href={"/services"}>
                        <ChevronRightIcon />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>

        {/* product 3 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"50px"} pr={"50px"} pb={"50px"}>
              <Box
                maxW="280px"
                minH="515px"
                maxH="515px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  maxW={"280px"}
                  maxH={"280px"}
                  width={"130%"}
                  height={"130%"}
                  src={imgProduct3.src}
                  alt="acrylic"
                />

                <Box p={"24px"} display="flex">
                  <Badge
                    borderRadius="full"
                    px="2"
                    bgColor="gray.700"
                    fontWeight={"light"}
                  >
                    <Text color={"white"} alignSelf={"center"}>
                      Artist choice ⭐
                    </Text>
                  </Badge>
                </Box>

                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Professional Acrylic
                  </Box>
                </Box>
                <Box mt={"-47px"} p={"24px"} display="flex">
                  <Box color={"gray.700"} fontSize={"13px"}>
                    Engineered to perfection. The opacity of our Professional
                    Acrylic is meticulously checked to ensure they are perfectly
                    engineered. The latest resin technology, eliminating colour
                    shift when drying.
                  </Box>
                </Box>
                <Box
                  _hover={{
                    shadow: "md",
                    transform: "translateY(-3px)",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                >
                  <Box mt={"51px"} p={"24px"} display="flex">
                    <Box
                      color={"gray.400"}
                      fontSize={"12px"}
                      letterSpacing={"wide"}
                    >
                      Discover intensity depth of colour
                    </Box>
                    <Box
                      mt={"-4px"}
                      _hover={{
                        transform: "translateX(3px)",
                        transitionDuration: "0.2s",
                        transitionTimingFunction: "ease-in-out",
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Link href={"/services"}>
                        <ChevronRightIcon />
                      </Link>
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
