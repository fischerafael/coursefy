import { HStack, Icon, Text } from "@chakra-ui/react";
import { HiOutlineLockClosed } from "react-icons/hi";

export const CardClassNotPublished = () => {
  return (
    <>
      <HStack w="full" justify="space-between" color="gray.500">
        <HStack>
          <Icon as={HiOutlineLockClosed} />

          <Text fontSize="xs">EM BREVE</Text>
        </HStack>

        <Text fontSize="xs" border="1px" p="1" px="2" borderRadius={"2"}>
          AULA PRÁTICA
        </Text>
      </HStack>
    </>
  );
};
