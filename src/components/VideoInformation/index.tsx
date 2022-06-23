import {
  AspectRatio,
  Avatar,
  Button,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { navigateTo } from "../../utils/navigateTo";

export const VideoInformation = () => {
  return (
    <VStack w="full" justify="center" bg="gray.900" p="8">
      <HStack w="full" maxW="container.lg" align="flex-start">
        <VStack w="full" align="flex-start" spacing="8">
          <Text fontWeight="bold" fontSize="xl">
            Aula 01 - Criando o projeto e realizando o setup inicial
          </Text>
          <Text lineHeight={1.5} color="gray.300">
            Nessa aula vamos dar início ao projeto criando a estrutura base da
            aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
            realizar o setup do nosso projeto no GraphCMS criando as entidades
            da aplicação e integrando a API GraphQL gerada pela plataforma no
            nosso front-end utilizando Apollo Client. Nessa aula vamos dar
            início ao projeto criando a estrutura base da aplicação utilizando
            ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso
            projeto no GraphCMS criando as entidades da aplicação e integrando a
            API GraphQL gerada pela plataforma no nosso front-end utilizando
            Apollo Client.
          </Text>
          <HStack w="full" justify="space-between" spacing="8">
            <Avatar src="https://avatars.githubusercontent.com/u/47259718?v=4" />
            <VStack w="full" align="flex-start" spacing="0">
              <Text>Rafael Fischer</Text>
              <Text fontSize="xs" color="gray.600">
                Front-End Developer & UI/UX Designer
              </Text>
            </VStack>
            <IconButton
              variant="ghost"
              aria-label="Linkedin"
              fontSize={32}
              colorScheme="cyan"
              icon={<AiOutlineLinkedin />}
              onClick={() =>
                navigateTo("https://www.linkedin.com/in/fischerafael/")
              }
            />
          </HStack>
        </VStack>
        <VStack
          w="full"
          maxW="300px"
          h="full"
          align="flex-end"
          justify="flex-start"
          spacing="4"
        >
          <Button
            borderRadius="0"
            colorScheme="cyan"
            w="full"
            p="8"
            onClick={() =>
              navigateTo("https://github.com/fischerafael/coursefy")
            }
          >
            Respositório Github
          </Button>
          <Button
            borderRadius="0"
            colorScheme="cyan"
            variant="outline"
            w="full"
            p="8"
            onClick={() =>
              navigateTo(
                "https://www.youtube.com/channel/UCz75xXTimMhZkbK__XOM8hQ"
              )
            }
          >
            Canal no Youtube
          </Button>
        </VStack>
      </HStack>
    </VStack>
  );
};
