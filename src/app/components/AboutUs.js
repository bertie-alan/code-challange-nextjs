"use client";

import { Box, Heading, Image, VStack } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <>
      <VStack>
        <Box paddingTop={"130px"}>
          <Heading
            fontSize="2xl"
            letterSpacing={"wide"}
            mb={"50px"}
            textAlign={"start"}
          >
            About Us
          </Heading>
        </Box>
      </VStack>
    </>
  );
}
