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
import { ChevronRightIcon, MinusIcon } from "@chakra-ui/icons";
import LineQuote from "../customized-icons/line.png";
import Quote from "../customized-icons/quote.png";
import SideLine from "../customized-icons/side-line_gray.png";
import FiveStars from "../customized-icons/5-stars.png";

export default function Testimonials() {
  return (
    <>
      {/* VStack buat Header testimony */}
      <VStack>
        <Box mt={"92px"} mb={"1%"} padding={2}>
          <Heading fontSize="2xl" letterSpacing={"wide"}>
            Read What They Loves About Our Products
          </Heading>
        </Box>
      </VStack>

      <HStack py={"25px"} px={"140px"}>
        {/* testimonial 1 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"50px"} pr={"50px"} pb={"50px"}>
              <Box
                maxW="280px"
                minH="524px"
                maxH="524px"
                borderWidth="1px"
                borderRadius="50px 10px"
                overflow="hidden"
              >
                <Box>
                  <Image
                    maxW={"280px"}
                    maxH={"5.5px"}
                    width={"100%"}
                    height={"100%"}
                    mt={"15px"}
                    px={"18px"}
                    src={LineQuote.src}
                    alt="quote's line"
                  />
                </Box>
                <Box>
                  <Image
                    maxW={"75px"}
                    maxH={"75px"}
                    width={"100%"}
                    height={"100%"}
                    mt={"20px"}
                    mx={"15px"}
                    px={"18px"}
                    src={Quote.src}
                    alt="quote's line"
                  />
                </Box>

                <Box
                  px={"24px"}
                  pb={"24px"}
                  pt={"5px"}
                  ml={"45px"}
                  display="flex"
                >
                  <Badge
                    borderRadius="3px"
                    px="2"
                    bgColor="purple.800"
                    fontWeight={"light"}
                  >
                    <Text color={"white"} alignSelf={"center"}>
                      Alexia Dawson
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
                    The set I reach for
                  </Box>
                </Box>
                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box>
                    <Image
                      width={"100%"}
                      height={"100%"}
                      src={SideLine.src}
                      alt="side line"
                    />
                  </Box>
                  <Box color={"gray.700"} fontSize={"13px"} ml={"15px"}>
                    As the title suggests, these are simply my favorite. I have
                    a set of Sennelier as well, and while one or two of their
                    hues are subtly more vivid, their pans empty much faster.
                    <br />
                    <br />
                    Whether W&N has more pigment (a little does go a very long
                    way!) or simply bigger pans, I keep coming back to these.
                    I'll purchase liquid tubes of these individually as I empty
                    the half pans-definitely worth buying!!
                  </Box>
                </Box>
                <Box maxW={"121px"} mx={"67px"} mt={"-18px"} mb={"13px"}>
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={FiveStars.src}
                    alt="5-stars rating"
                  />
                </Box>

                <Box>
                  <Image
                    maxW={"280px"}
                    maxH={"5.5px"}
                    width={"100%"}
                    height={"100%"}
                    mb={"25px"}
                    px={"18px"}
                    style={{ transform: "rotate(180deg)" }}
                    src={LineQuote.src}
                    alt="quote's line -> bottom"
                  />
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>

        {/* testimonial 2 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"50px"} pr={"50px"} pb={"50px"}>
              <Box
                maxW="280px"
                minH="524px"
                maxH="524px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    maxW={"280px"}
                    maxH={"5.5px"}
                    width={"100%"}
                    height={"100%"}
                    mt={"15px"}
                    px={"18px"}
                    src={LineQuote.src}
                    alt="quote's line"
                  />
                </Box>
                <Box>
                  <Image
                    maxW={"75px"}
                    maxH={"75px"}
                    width={"100%"}
                    height={"100%"}
                    mt={"20px"}
                    mx={"15px"}
                    px={"18px"}
                    src={Quote.src}
                    alt="quote's line"
                  />
                </Box>

                <Box
                  px={"24px"}
                  pb={"24px"}
                  pt={"5px"}
                  ml={"45px"}
                  display="flex"
                >
                  <Badge
                    borderRadius="3px"
                    px="2"
                    bgColor="purple.800"
                    fontWeight={"light"}
                  >
                    <Text color={"white"} alignSelf={"center"}>
                      Serena Davies
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
                    Best ink for all artists!
                  </Box>
                </Box>
                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box>
                    <Image
                      width={"100%"}
                      height={"100%"}
                      src={SideLine.src}
                      alt="side line"
                    />
                  </Box>
                  <Box color={"gray.700"} fontSize={"13px"} ml={"15px"}>
                    Can't recommend this ink enough! Perfect for those wanting
                    to start out and experiment with ink, But has great quality
                    that I continue to use it.
                    <br />
                    <br />
                    Beautiful color selection. Just perfect! drys great and goes
                    down smoothly.
                  </Box>
                </Box>
                <Box maxW={"121px"} mx={"67px"} mt={"-18px"} mb={"110px"}>
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={FiveStars.src}
                    alt="5-stars rating"
                  />
                </Box>

                <Box>
                  <Image
                    maxW={"280px"}
                    maxH={"5.5px"}
                    width={"100%"}
                    height={"100%"}
                    mb={"25px"}
                    px={"18px"}
                    style={{ transform: "rotate(180deg)" }}
                    src={LineQuote.src}
                    alt="quote's line -> bottom"
                  />
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>

        {/* testimonial 3 */}
        <VStack>
          <Container maxW="5xl">
            <HStack pl={"50px"} pr={"50px"} pb={"50px"}>
              <Box
                maxW="280px"
                minH="524px"
                maxH="524px"
                borderWidth="1px"
                borderRadius="10px 50px"
                overflow="hidden"
              >
                <Box>
                  <Image
                    maxW={"280px"}
                    maxH={"5.5px"}
                    width={"100%"}
                    height={"100%"}
                    mt={"15px"}
                    px={"18px"}
                    src={LineQuote.src}
                    alt="quote's line"
                  />
                </Box>
                <Box>
                  <Image
                    maxW={"75px"}
                    maxH={"75px"}
                    width={"100%"}
                    height={"100%"}
                    mt={"20px"}
                    mx={"15px"}
                    px={"18px"}
                    src={Quote.src}
                    alt="quote's line"
                  />
                </Box>

                <Box
                  px={"24px"}
                  pb={"24px"}
                  pt={"5px"}
                  ml={"45px"}
                  display="flex"
                >
                  <Badge
                    borderRadius="3px"
                    px="2"
                    bgColor="purple.800"
                    fontWeight={"light"}
                  >
                    <Text color={"white"} alignSelf={"center"}>
                      Issac Spencer
                    </Text>
                  </Badge>
                </Box>

                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    noOfLines={2}
                  >
                    Color stays true; good quality
                  </Box>
                </Box>
                <Box mt={"-40px"} p={"24px"} display="flex">
                  <Box>
                    <Image
                      width={"100%"}
                      height={"100%"}
                      src={SideLine.src}
                      alt="side line"
                    />
                  </Box>
                  <Box color={"gray.700"} fontSize={"13px"} ml={"15px"}>
                    Really like this paint. Needed a good quality acrylic
                    because I paint in my house and didn't want to deal with the
                    mess/ toxicity of oils.
                    <br />
                    <br />
                    Happy with this brand and will continue to use. Mixes well
                    with liquitex and golden mediums too.
                  </Box>
                </Box>
                <Box maxW={"121px"} mx={"67px"} mt={"-18px"} mb={"85px"}>
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={FiveStars.src}
                    alt="5-stars rating"
                  />
                </Box>

                <Box>
                  <Image
                    maxW={"280px"}
                    maxH={"5.5px"}
                    width={"100%"}
                    height={"100%"}
                    mb={"25px"}
                    px={"18px"}
                    style={{ transform: "rotate(180deg)" }}
                    src={LineQuote.src}
                    alt="quote's line -> bottom"
                  />
                </Box>
              </Box>
            </HStack>
          </Container>
        </VStack>
      </HStack>
    </>
  );
}
