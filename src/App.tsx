import Navbar from "./sections/Navbar.tsx";
import Header from "./sections/Header.tsx";
import HowItWorks from "./sections/HowItWorks.tsx";
import WhatWeDo from "./sections/WhatWeDo.tsx";
import FeaturesAndServices from "./sections/FeaturesAndServices.tsx";

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <HowItWorks />
            <WhatWeDo />
            <FeaturesAndServices />
        </div>
    );
};

export default App;