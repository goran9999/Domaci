$(function(){
    
   var $validacija=$(".velikaForma");
    if($validacija.length){
        $validacija.validate({
            rules:{
            ime:{
                required:true
            },
            prezime:{
             required:true
            },
            email:{
            required:true,
            email:true
            
        },
            lozinka:{
             required:true
        },
            ponoviLozinku:{
                required:true,
                equalTo:"#lozinka"
                
            },
            tel:{
                required:true
            },
            gradovi:{
                required:true
            },
                check:{
                   required:true 
                }
            
        },
        messages:{
            ime:{
                required:'Polje ime je obavezno'
            },
             prezime:{
                required:'Polje prezime je obavezno'
            },
             email:{
                required:'Polje email je obavezno',
                email:'Unesena vrednost nije e-mail'
            },
            lozinka:{
                required:'Polje lozinka je obavezno'
            },
            ponoviLozinku:{
                required:'Polje je obavezno',
                equalTo:'Lozinke se ne poklapaju'
            },
            tel:{
                required:'Polje je obavezno'
            },
            gradovi:{
                required:'Polje grad je obavezno'
            },
            check:{
                required:'Polje je obavezno'
            }
                            
        }
            
        })
        
        
    }
   
})
var obrisi=document.getElementById("d2")
obrisi.onclick=function(){
    alert("Vrednosti unesene u svim poljima ce biti obrisane!")
}