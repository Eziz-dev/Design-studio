import Header from "./sections/Header.tsx";
import HowItWorks from "./sections/HowItWorks.tsx";
import WhatWeDo from "./sections/WhatWeDo.tsx";
import FeaturesAndServices from "./sections/FeaturesAndServices.tsx";
import Footer from "./sections/Footer.tsx";
import NavBar from "./sections/NavBar.tsx";

const App = () => {
  return (
    <div>
      {/*<Navbar />*/}
      <NavBar />
      <Header />
      <HowItWorks />
      <WhatWeDo />
      <FeaturesAndServices />
      <Footer />
    </div>
  );
};

export default App;
