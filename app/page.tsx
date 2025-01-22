import Intro from "./components/Intro";
import MyWork from "./components/MyWork";
import Youtube from "./components/Youtube";
import Me from "./components/Me";
import WhoAmI from "./components/WhoAmI";
import HealTheWorld from "./components/HealTheWorld";

export default function Home() {
  return (
    <section className="bg-mainBg relative">
      <Intro />
      <MyWork />
      <Me />
      <WhoAmI />
      <Youtube />
      <HealTheWorld />
    </section>
  );
}
