$(document).ready(function(){
    $('#Connexion').click(function(event){
        event.preventDefault()
    })
    var VaInscription = $('#VaInscription')
    var VaConnexion = $('#VaConnexion')
    $('#Inscription').click(function(event){
        event.preventDefault()
        if(VaInscription.style.display == 'none'){
        VaInscription.css = 'block'
        VaConnexion. = 'none'    
        }
        
        else { 
            VaConnexion.style.display = 'none'
            VaConnexion.style.display = 'block'
            VaInscription.style.display = 'none'
        }
    })
})