import { Box, Container, Heading, VStack } from "@chakra-ui/react";

export default function CompanyOverview() {
  return (
    <>
      <VStack>
        <Container maxW="5xl" paddingTop={2}>
          <Box mt={"70px"} mb={"1%"} padding={2}>
            <Heading fontSize="2xl" letterSpacing={"wide"}>
              Company Overview
            </Heading>
          </Box>
          <Box padding={2} color="gray.850" maxW={"85%"} lineHeight={"200%"}>
            We provide <b>high-quality tools</b> for artists and creative
            professionals. Discover our range of fine art and graphic art
            materials and get inspired. Our brand is committed to supplying the
            best performing, highest quality and safest materials to artists and
            creatives around the world, and has a long history of doing so.
            Increasingly, we are also confronted with regulatory changes, such
            as the reclassification of hazards by many local authorities.
            Products that have been subject to this reformulation carry a label
            that states "improved formulation" on the front and links to this
            website via QR code (on the back).
          </Box>
        </Container>
      </VStack>
    </>
  );
}
