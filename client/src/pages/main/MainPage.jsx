import styles from "./MainPage.module.css"

import Banner from "../../components/Banner/Banner";
import Bestellers from "../../components/Bestsellers/Bestellers";
import BannerSecond from "../../components/BannerSecond/BannerSecond";
import BannerThird from "../../components/BannerThird/BannerThird";
import BannerFourth from "../../components/BannerFourth/BannerFourth";
import BannerFifth from "../../components/BannerFifth/BannerFifth";
import MyMap from "../../components/MyMap/MyMap";
import MyFooter from "../../components/MyFooter/MyFooter";


const MainPage = () => {
  return (
    <div className={styles.main_main_page}>
      <Banner/>
      <Bestellers/>
      <BannerSecond/>
      <BannerThird/>
      <BannerFourth/>
      <BannerFifth/>
      <MyMap/>
      <MyFooter/>
    </div>
  );
}

export default MainPage;
