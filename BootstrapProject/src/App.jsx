import { useState } from "react";
import BSCard from "./components/BSCard";
import Imag1 from "./assets/bg-img1.jpg";

function App() {
    let [cardValue, setCardValue] = useState({
        src: Imag1,
        title: "Goa Beach",
        bodyText:
            "One of India's smallest states, it is bounded by the states of Maharashtra on the north and Karnataka on the east and south and by the Arabian Sea on the west.",
        btnText: "Test",
    });
    return (
        <div className="container">
          <h1 className="pb-5">Hello Card</h1>
          <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2">
            
                <BSCard {...cardValue} />
                <BSCard {...cardValue} />
                <BSCard {...cardValue} />
                <BSCard {...cardValue} />
            </div>
        </div>
    );
}

export default App;
