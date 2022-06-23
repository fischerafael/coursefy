import { AspectRatio, HStack, Image } from "@chakra-ui/react";

export const Player = () => {
  return (
    <HStack
      w="full"
      justify="center"
      style={{ outline: "1px solid #2D3748" }}
      px="8"
      bg="black"
    >
      <AspectRatio maxW="container.lg" w="full" ratio={16 / 9}>
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>
    </HStack>
  );
};
