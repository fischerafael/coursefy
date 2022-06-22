import { Header } from "../../components/Header";
import { Player } from "../../components/Player";
import { PrivatePageTemplate } from "../../components/PrivatePageTemplate";
import { SideBar } from "../../components/SideBar";

export const HomePage = () => {
  return (
    <PrivatePageTemplate
      header={<Header />}
      main={
        <>
          <Player />
        </>
      }
      sidebar={<SideBar />}
    />
  );
};
