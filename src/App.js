import React, { useRef } from "react";
import "./style.css";

export default function App() {
    const KreditorListe = React.useRef();
    const valgtKreditorListe = React.useRef();

    const leggTil = () => {
      var fromSelect = KreditorListe.current //document.getElementById('a');
      var toSelect = valgtKreditorListe.current//document.getElementById('b');
      //toSelect.innerHTML = "";
      for (var i = 0; i < fromSelect.options.length; i++) {
          var option = fromSelect.options[i];
          toSelect.appendChild(option);
      }
    }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <label>
          Pick your favorite flavor:
      </label>
      <br/>
      <select multiple="true" id="KreditorListe" name="KreditorListe" 
        ref={KreditorListe} >
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <button onClick={leggTil}>transfer</button>

      <br/>
      <label>
          Pick your favorite flavor:
      </label>
      <br/>
      <select multiple="true" id="valgtKreditorListe" 
        name="valgtKreditorListe" ref={valgtKreditorListe} >        
        <option value="orange">OrangeMango</option>
      </select>
        
    </div>
  );
}
