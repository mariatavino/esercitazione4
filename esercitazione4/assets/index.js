if(window.matchMedia("min-width: 993px").matches){
  LogicaDesktop();
}

    function LogicaDesktop() {
      var elementToMove = document.getElementById('foo');
      var referenceElement = document.getElementById('head');
      var desiredTop = referenceElement.offsetTop - referenceElement.offsetHeight+ elementToMove.offsetTop-65;
      let altezzaHead = document.getElementById("HeroSection");
      let altezza = altezzaHead.offsetHeight - 22;
    
        if (window.scrollY > desiredTop) {
          elementToMove.style.display= 'block';
          elementToMove.style.position = 'fixed';
          elementToMove.style.top = '15vh';
          elementToMove.style.width = '40vw';
          elementToMove.style.marginLeft= '65vw';
          elementToMove.style.marginTop = "4em";
        } else{
          elementToMove.style.display= 'block';
          elementToMove.style.position= 'relative';
          elementToMove.style.top= 0;
          elementToMove.style.marginLeft = '0em';
          elementToMove.style.marginTop = '0em'
          elementToMove.style.flexBasis = 40 + '%';
        }
    
        if (window.scrollY > altezza) {
          // Blocca l'elemento al margine superiore del riferimento
          referenceElement.style.animation = "fadein 0.5s"
          referenceElement.style.backgroundColor= 'white';
          bottone.style.backgroundColor = "#1a8917";
        }else{
          referenceElement.style.animation = ""
          referenceElement.style.backgroundColor= '#ffc017';
          bottone.style.backgroundColor = "#191919";
        }
      }
