import  AppHero  from "../../components/Home/Hero";
import AppAbout from "../../components/Home/About.js";
import AppFeature from "../../components/Home/Features.js";
import AppWorks from "../../components/Home/Works";
import AppContact from "../../components/Home/Contact";

function Home() {
  return (
    <div>
      <AppHero />
      <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppContact/>
    </div>
  );
}

export default Home;
