import { Header } from "../../components/Header";
import { Player } from "../../components/Player";
import { PrivatePageTemplate } from "../../components/PrivatePageTemplate";
import { SideBar } from "../../components/SideBar";
import { VideoInformation } from "../../components/VideoInformation";

export const CoursePage = () => {
  return (
    <PrivatePageTemplate
      header={<Header />}
      main={
        <>
          <Player />
          <VideoInformation />
        </>
      }
      sidebar={<SideBar />}
    />
  );
};
