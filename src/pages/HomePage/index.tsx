import { Button, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import { Logo } from "../../components/Logo";

export const HomePage = () => {
  return (
    <VStack
      w="full"
      bgGradient="linear(to-b, gray.900, gray.700)"
      color="gray.50"
      minH="100vh"
      spacing="0"
      px="8"
    >
      <HStack w="full" maxW="container.lg" minH="50vh" spacing="16">
        <VStack w="full" align="flex-start" spacing="8">
          <Logo />

          <Text fontSize="2xl" fontWeight="bold" lineHeight={1.15}>
            Construa uma aplicação completa, do zero, com{" "}
            <Text as="span" color="cyan.500">
              React JS
            </Text>
          </Text>
          <Text>
            Em apenas 3 lives você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </Text>
        </VStack>

        <VStack
          w="full"
          maxW="450px"
          bg="gray.900"
          p="12"
          style={{ outline: "1px solid #2D3748" }}
          spacing="8"
          align="flex-start"
        >
          <Text fontWeight="bold" fontSize="lg">
            Acesse gratuitamente
          </Text>
          <Input
            border="1px"
            borderRadius="0"
            borderColor="#2D3748"
            bg="gray.800"
            placeholder="Nome Completo"
          />
          <Input
            border="1px"
            borderRadius="0"
            borderColor="#2D3748"
            bg="gray.800"
            type="email"
            placeholder="Email"
          />
          <Button w="full" colorScheme="cyan" borderRadius="0">
            Acessar
          </Button>
        </VStack>
      </HStack>
      <Image w="full" maxW="container.lg" src="/hero-bg.svg" h="50vh" />
    </VStack>
  );
};
