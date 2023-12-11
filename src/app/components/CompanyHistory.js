"use client";

import {
  AspectRatio,
  Box,
  Container,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
// import AboutUsVideo from "../assets/about-us_1.mp4";

export default function CompanyHistory() {
  return (
    <>
      <HStack>
        {/* VStack : Video */}
        {/* <VStack>
          <Box>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="winsor_newton"
                src="https://drive.google.com/file/d/1oCOLtiqbD_IVa2d7orgrKUaLU87XLzTL/preview"
                width="640"
                height="480"
                allow="autoplay"
              ></iframe>
            </AspectRatio>
          </Box>
        </VStack> */}

        {/* VStack : About Us */}
        <VStack>
          <Container maxW="5xl" paddingTop={2} pl={"280px"} ml={"175px"}>
            <Box mt={"70px"} mb={"8px"} paddingTop={"80px"}>
              <Heading fontSize="3xl" letterSpacing={"wide"}>
                About Us
              </Heading>
            </Box>
            <Box pt={"20px"} color="gray.850" maxW={"85%"} lineHeight={"200%"}>
              In 1832 chemist William Winsor and artist Henry Newton brought
              together the knowledge of the scientist and the creativity of the
              artist to offer an unprecedented choice of colour, clarity and
              permanence to fine artists. Winsor & Newton pinpointed what was
              really needed - a regular source of reliable colours and brushes.
              Winsor & Newton first developed vastly improved watercolours,
              followed by a number of other innovations including Chinese White,
              the first durable opaque white watercolour, and collapsible tin
              tubes for both oils and watercolours.
            </Box>
            <Box mt={3} display="flex">
              <Box color={"gray.700"} fontSize={"18px"} fontWeight="semibold">
                <br />
                New era, new approach
              </Box>
            </Box>
            <Box mt={3} color="gray.850" maxW={"85%"} lineHeight={"200%"}>
              A series of royal appointments and awards in the late 1800s paved
              the way for Winsor & Newton to take its colours around the world.
              <br />
              <br />
              In the early 20th century Winsor & Newton expanded its range to
              offer key value ranges. It also expanded its factories to ensure
              colour and brush production carried on through both world wars.
              But William and Henry's original ethos stayed at the heart of the
              business - whenever there was a new, exciting or better pigment or
              binder available, Winsor & Newton introduced it, including
              Designers gouache, fast drying oils, water mixable oils and the
              revolutionary Artists' Acrylic (now Professional Acrylic).
            </Box>

            <Box mt={3} display="flex">
              <Box color={"gray.700"} fontSize={"18px"} fontWeight="semibold">
                <br />
                Classic yet contemporary
              </Box>
            </Box>
            <Box mt={3} color="gray.850" maxW={"85%"} lineHeight={"200%"}>
              William and Henry's commitment to quality and innovation are part
              of a rich heritage which informs Winsor & Newton to this day.
              We're dedicated to the craft of the fine artist and to providing
              them with new ways to explore their creativity. We embrace new
              ideas, we seek out the latest technologies and materials - we
              devote our time to creating the world's finest art materials,
              which are used by some of the world's finest artists.
            </Box>
          </Container>
        </VStack>
      </HStack>
    </>
  );
}
