import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
import { IClass } from "../../entities/IClass";
import { formatDate } from "../../utils/formatDate";
import { CardClassNotPublished } from "../CardClassNotPublished";
import { CardClassPublished } from "../CardClassPublished";

interface Props {
  classProps: IClass;
}

export const CardClass = ({ classProps }: Props) => {
  return (
    <VStack w="full" height="fit-content" align="flex-start" spacing="2">
      <Text color={classProps.isPublished ? "cyan.300" : "gray.600"}>
        {formatDate(classProps.date)}
      </Text>
      <VStack
        w="full"
        height="fit-content"
        align="flex-start"
        borderRadius={"2"}
        style={{ outline: "1px solid #2D3748" }}
        p="4"
        spacing="4"
        cursor={classProps.isPublished ? "pointer" : "not-allowed"}
        _hover={
          classProps.isPublished ? { bg: "#171923" } : { bg: "transparent" }
        }
        transition="0.5s"
      >
        {classProps.isPublished ? (
          <CardClassPublished />
        ) : (
          <CardClassNotPublished />
        )}
        <Text fontWeight="bold">{classProps.title}</Text>
      </VStack>
    </VStack>
  );
};
