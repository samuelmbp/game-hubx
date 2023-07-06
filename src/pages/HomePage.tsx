import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GamesHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelected from "../components/SortSelected";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX="20px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={10}>
          <GamesHeading />
          <Flex>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelected />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
