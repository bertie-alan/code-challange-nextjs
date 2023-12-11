import { Box, HStack, Image } from "@chakra-ui/react";
import logoImage from "../assets/wn_logo_cropped.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box
      width={"100%"}
      bgColor={"white"}
      position={"fixed"}
      height={90}
      maxHeight={"90px"}
      boxShadow={"md"}
      letterSpacing={"wide"}
      style={{
        // WebkitBackdropFilter: "blur(8px)",
        // backdropFilter: "blur(8px)",
        background: "rgba(229, 234, 243, 0.08)",
        backdropFilter: "blur(18px)",
      }}
    >
      <HStack
        opacity={0.8}
        fontSize={"18px"}
        lineHeight={"80px"}
        maxW={"1487px"}
        minW={"1024px"}
      >
        <Link href={"/"}>
          <Box ml={"85px"} mt={"1.7px"} maxW={"150px"}>
            <Image width={"100%"} height={"100%"} src={logoImage.src} />
          </Box>
        </Link>
        <Link href={"/about"}>
          <Box ml={"500px"} mt={"1.7px"}>
            ABOUT US
          </Box>
        </Link>
        <Link href={"/services"}>
          <Box ml={"120px"} mt={"1.7px"}>
            SERVICES
          </Box>
        </Link>
        <Link href={"/teams"}>
          <Box ml={"120px"} mt={"1.7px"}>
            TEAMS
          </Box>
        </Link>
      </HStack>
    </Box>
  );
}
