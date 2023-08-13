import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Mascot from "./components/mascot/Mascot";
import Options from "./components/options/Options";
import Footer from "./components/footer/Footer";
import { IPair } from "./utils/interfaces";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectionStatus, setSelectionStatus] = useState<boolean | null>(null);
  const [pair] = useState<IPair>({
    pair_id: 0,
    options: ["Chicken", "Egg"],
    correct_option: "Egg",
    description:
      "The age-old question: Which came first, the chicken or the egg? While chickens are descendants of birds that were not quite chickens, genetic mutations occured in their offspring, leading to the first bird that we would call a chicken. Therefore, the first true chicken must have hatched from an egg laid by a bird that was very close to a chicken but not quite there.",
  });

  useEffect(() => {
    if(selectionStatus === true || selectionStatus === false) {
      setTimeout(() => {
        alert('Display Modal')
        // Code Block to display Modal
      }, 1500)
    }
  }, [selectionStatus])
  
  return (
    <div className="App">
      <Header pair={pair}/>
      <Mascot isLoading={isLoading} selectionStatus={selectionStatus} />
      <Options
        pair={pair}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setSelectionStatus={setSelectionStatus}
      />
      <Footer />
    </div>
  );
};

export default App;
