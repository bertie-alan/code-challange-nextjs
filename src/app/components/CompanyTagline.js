"use client";

import { Box, Divider, Text } from "@chakra-ui/react";

export default function CompanyTagline() {
  return (
    <>
      <Box>
        <Divider />
        <Text
          mt={"50px"}
          mb={"20px"}
          ml={"635px"}
          color={"blue.600"}
          letterSpacing={"wide"}
          fontSize={"13px"}
        >
          Expert colour. Endless Possibilities.
        </Text>
      </Box>
    </>
  );
}
