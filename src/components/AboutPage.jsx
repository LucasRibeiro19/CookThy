import React from 'react';
import Header from './Header';
import "../about.css";

function AboutPage() {
  return (
    <div>
      <Header/>
      <div className="container">
      <h1>A propos</h1>
      <p>
      Aujourd'hui, notre façon de nous alimenter est devenue un choix autant personnel que citoyen. 
      L'agriculture a un impact considérable sur les émissions de gaz à effets de serres et il nous appartient de choisir notre alimentation de manière à minimiser cet impact.
      D'un autre côté, une alimentation saine est un gage de bonne santé jusqu'à un âge avancé.    </p><br />
      <p>
      Nous avons conçus Cook'Thy pour vous permettre de trouver rapidement des recettes originales correspondant à vos critères éthiques ainsi qu'à vos envies gastronomiques! 
      </p><br />
      <p>
      Réalisé par 
      </p>
      <p>
      Claire Roman<br />
      Lucas Ribeiro<br />
      Nicolas Journet<br />
      </p>
      </div>
    </div>
  )
}

export default AboutPage