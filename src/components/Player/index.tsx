import { AspectRatio, Image } from "@chakra-ui/react";

export const Player = () => {
  return (
    <AspectRatio w="full" ratio={16 / 9}>
      <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
    </AspectRatio>
  );
};
