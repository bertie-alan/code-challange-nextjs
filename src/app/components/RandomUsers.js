"use client";

import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RandomUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const res = await axios.get("https://randomuser.me/api/?results=4");
    return setUsers(res.data.results);
  }

  return (
    <>
      {/* VStack buat Header Teams - About Us */}
      <VStack>
        <Box mt={"92px"} mb={"1%"} padding={"40px"}>
          <Heading fontSize="3xl" letterSpacing={"wide"}>
            Meet our teams
            <br />
          </Heading>
        </Box>
      </VStack>

      {/* ArrayMap -> list random user */}
      <HStack pt={"5px"} pb={"25px"} px={"140px"}>
        {users.map((user) => (
          <VStack>
            <Container minW="xsm" maxW="xsm">
              <HStack pl={"5px"} pr={"5px"} pb={"50px"}>
                <Box
                  maxW="280px"
                  minH="475px"
                  maxH="475px"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  borderColor={"blue.600"}
                >
                  <Image
                    mt={3}
                    mx={"19px"}
                    maxW={"221px"}
                    maxH={"221px"}
                    width={"100%"}
                    height={"100%"}
                    borderRadius="4000px"
                    src={user.picture.large}
                    alt="person 1"
                  />

                  <Box mt={2} p={"24px"} display="flex">
                    <Box
                      fontWeight="semibold"
                      as="h3"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {user.name.first} {user.name.last}
                    </Box>
                  </Box>
                  <Box mt={"-47px"} p={"24px"} display="flex">
                    <Box color={"blue.700"} fontSize={"13px"}>
                      Country : {user.nat}
                    </Box>
                  </Box>
                  <Box mt={"-40px"} p={"24px"} display="flex">
                    <Box color={"gray.700"} fontSize={"13px"}>
                      <b>{user.email}</b>
                      <br />
                      Winsor & Newton store location :
                      <Box color={"gray.500"}>{user.location.street.name}</Box>
                      <br />
                      Meet {user.name.first} as one of our incredible team
                      members!
                    </Box>
                  </Box>
                </Box>
              </HStack>
            </Container>
          </VStack>
        ))}
      </HStack>
    </>
  );
}
