import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

const Page = () => (
  <div className="bg-[url('/newBG.png')] bg-cover overflow-hidden ">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      {/* <Explore /> */}
    </div>
    <div className="relative">
      {/* <GetStarted /> */}
      <div className="gradient-04 z-0" />
      {/* <WhatsNew /> */}
    </div>
    {/* <World /> */}
    {/* <Insights /> */}
    <div className="relative">
      {/* <Feedback /> */}
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Page;
