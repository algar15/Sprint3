let letras= ["R","U","8","E","N"];

letras.forEach(function(letra){
    letra;
    
    switch (letra) {
        case 'A':
            console.log ('He trobat la VOCAL: A')
            break;
        case 'E':
            console.log ('He trobat la VOCAL: E')
            break;
        case 'I':
            console.log ('He trobat la VOCAL: I')
            break;
        case 'O':
            console.log ('He trobat la VOCAL: O')
            break;
        case 'U':
            console.log ('He trobat la VOCAL: U')
            break;
        default:
            if (isNaN(letra)) {
                console.log('He trobat la CONSONANT: '+ letra)
            } else {
                console.log('Els noms de persones no contenen el número: '+ letra);  
            }   
    }
});