import { BannerMain } from "../../Pages/BannerMain/BannerMain";
import { Navbar } from "../../Pages/Navbar/Navbar";
import { VideoCard } from "../../Pages/VIdeoCard/VIdeoCard";

export const Header = (): React.JSX.Element => {
  return (
    <>
      <Navbar />
      <BannerMain />
      <VideoCard />
    </>
  );
};
