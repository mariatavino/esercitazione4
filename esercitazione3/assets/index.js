document.addEventListener('DOMContentLoaded', function () {
    var elementToMove = document.getElementById('foo');
    var referenceElement = document.getElementById('head');
    
    // Altezza di spostamento desiderata (puoi modificare questo valore)
    var desiredTop = referenceElement.offsetTop - referenceElement.scrollHeight+ elementToMove.offsetTop;
  
    window.addEventListener('scroll', function () {
      // Verifica se lo scrolling ha superato l'altezza di riferimento
      if (window.scrollY > desiredTop) {
        // Blocca l'elemento al margine superiore del riferimento
        elementToMove.id = "fix";
      } else {
        // Ripristina la posizione iniziale
        elementToMove.style.top=0
      }
    });
  });

  // top = 0;