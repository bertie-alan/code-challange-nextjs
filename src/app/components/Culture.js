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
import CultureOneImg from "../assets/c_1.png";
import CultureTwoImg from "../assets/c_2.png";
import CultureThreeImg from "../assets/c_3.png";
import CultureFourImg from "../assets/c_4.png";
import CultureFiveImg from "../assets/c_5.png";
import CultureSixImg from "../assets/c_6.png";
import CultureSevenImg from "../assets/c_7.png";

export default function Culture() {
  return (
    <>
      {/* VStack buat Header CULTURE - About Us */}
      <VStack>
        <Box mt={"92px"} mb={"1%"} padding={2}>
          <Heading fontSize="3xl" letterSpacing={"wide"}>
            Culture
          </Heading>
        </Box>
      </VStack>

      <HStack py={"25px"} px={"140px"}>
        <VStack>
          {/* image 1 - 3 */}
          <HStack>
            {/* image 1 */}
            <Box mt={-4}>
              <Image
                mt={"-10px"}
                mx={3}
                maxW={"521px"}
                maxH={"521px"}
                width={"100%"}
                height={"100%"}
                borderRadius="120px"
                src={CultureOneImg.src}
                alt="culture 1"
              />
            </Box>

            {/* image 2 */}
            <Box mt={10}>
              <Image
                mt={"-2px"}
                mx={5}
                maxW={"471px"}
                maxH={"471px"}
                width={"100%"}
                height={"100%"}
                borderRadius="105px 200px"
                src={CultureTwoImg.src}
                alt="culture 2"
              />
            </Box>

            {/* image 3 */}
            <Box mt={10}>
              <Image
                mt={"-80px"}
                ml={"25px"}
                mr={3}
                maxW={"471px"}
                maxH={"471px"}
                width={"100%"}
                height={"100%"}
                borderRadius="20px 50px"
                src={CultureThreeImg.src}
                alt="culture 3"
              />
            </Box>
          </HStack>

          {/* image 4 - 5 */}
          <HStack>
            {/* image 4 */}
            <Box mt={-4}>
              <Image
                mt={3}
                mx={3}
                maxW={"521px"}
                maxH={"521px"}
                width={"100%"}
                height={"100%"}
                borderRadius="180px 100px"
                src={CultureFourImg.src}
                alt="culture 4"
              />
            </Box>

            {/* image 5 */}
            <Box mt={5}>
              <Image
                mt={3}
                ml={"10px"}
                mr={1}
                maxW={"471px"}
                maxH={"471px"}
                width={"100%"}
                height={"100%"}
                borderRadius="50px"
                src={CultureFiveImg.src}
                alt="culture 5"
              />
            </Box>
          </HStack>

          {/* image 6 - 8 */}
          <HStack>
            {/* image 6 */}
            <Box mt={"120px"}>
              <Image
                mt={"-90px"}
                mx={3}
                maxW={"371px"}
                maxH={"371px"}
                width={"100%"}
                height={"100%"}
                borderRadius="180px 1800px"
                src={CultureSixImg.src}
                alt="culture 6"
              />
            </Box>

            {/* image 7 */}
            <Box mt={"120px"}>
              <Image
                mt={"-90px"}
                mx={3}
                maxW={"321px"}
                maxH={"321px"}
                width={"100%"}
                height={"100%"}
                borderRadius="1800px 180px"
                src={CultureSevenImg.src}
                alt="culture 7"
              />
            </Box>

            {/* image 8 */}
            {/* <Box mt={10}>
              <Image
                mt={"-650px"}
                ml={"-40px"}
                mr={3}
                maxW={"471px"}
                maxH={"471px"}
                width={"100%"}
                height={"100%"}
                borderRadius="30px 80px"
                src={CultureEightImg.src}
                alt="culture 8"
              />
            </Box> */}
          </HStack>
        </VStack>
      </HStack>
    </>
  );
}
