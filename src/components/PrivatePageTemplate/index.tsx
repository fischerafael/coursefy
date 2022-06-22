import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  main: ReactNode;
  sidebar: ReactNode;
}

export const PrivatePageTemplate = ({ header, main, sidebar }: Props) => {
  return (
    <Grid
      w="full"
      bg="gray.900"
      minH="100vh"
      templateColumns="repeat(1, 1fr 380px)"
      color="gray.50"
      fontFamily="sans-serif"
    >
      <GridItem colSpan={2} h="10vh" style={{ outline: "1px solid #2D3748" }}>
        {header}
      </GridItem>
      <GridItem
        colSpan={1}
        minH="90vh"
        style={{ outline: "1px solid #2D3748" }}
      >
        {main}
      </GridItem>
      <GridItem
        colSpan={1}
        h="90vh"
        bg="gray.800"
        style={{ outline: "1px solid #2D3748" }}
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#2D3748",
            borderRadius: "8px",
          },
        }}
      >
        {sidebar}
      </GridItem>
    </Grid>
  );
};
