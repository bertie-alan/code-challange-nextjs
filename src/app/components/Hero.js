import { Image, Box, Text, VStack, HStack } from "@chakra-ui/react";
import heroImage from "../assets/hero_banner.png";

export default function Hero() {
  return (
    <>
      <Box
        maxW={"100%"}
        minW={"100%"}
        minHeight={"500px"}
        // ml={"1.5%"}
        // mr={"1.5%"}
        paddingTop={"5.8%"}
        alignContent={"center"}
      >
        {/* <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
            "linear-gradient(180deg, rgba(11.48, 29.32, 38.25, 0) 0%, #0B1D26 72%)",
          }}
        /> */}
        <Image
          width={"100%"}
          height={"100%"}
          //   objectFit="cover"
          src={heroImage.src}
        />
        <Box mt={"-300px"} ml={"250px"} pb={"280px"} letterSpacing={"wide"}>
          <HStack>
            <Text color={"gray.500"}>the persuit</Text>
            <Text color={"gray.800"}>of perfection</Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
}
