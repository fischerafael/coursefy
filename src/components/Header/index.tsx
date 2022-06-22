import { HStack, Text } from "@chakra-ui/react";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <HStack w="full" height="full" justify="center" bg="gray.800">
      <Logo />
    </HStack>
  );
};
