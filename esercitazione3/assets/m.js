 function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
async function mRandom() {
    
    let m = document.querySelectorAll('g');
    m = [].slice.call(m);
    m = m.slice(2)
    const a = m.length;
    
    while(true){
        await delay(25);
        let random1 = Math.floor(Math.random()*a);
        let random2 = Math.floor(Math.random()*a);
        m[random1].style.opacity = 0;
        m[random2].style.opacity = 1;
    }
}

//il while(true) seleziona randomicamente delle 'g' dal file html e imposta gli attributi, 
//ma alcune volte l'elemento 'g' selezionato rende invisibile tutti gli altri
 mRandom();