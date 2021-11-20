         function myshowFunction() {
           var checkBoxVodka = document.getElementById("InVodka");
           var checkBoxGin = document.getElementById("InGin");
           var checkBoxOSaft = document.getElementById("InOSaft");
           var checkBoxTSaft = document.getElementById("InTSaft");

           var sectionVodka = document.getElementById("Vodka-Box");
           var sectionGin = document.getElementById("Gin-Box");
           var sectionDefault = document.getElementById("Default-Box");

           // initialisieren - Boxen der letzten Auswahl ausblenden
           sectionDefault.style.display = "none";
           sectionVodka.style.display = "none";
           sectionGin.style.display = "none";

           // Vodka ist "checked"
           if (checkBoxVodka.checked == true){
             sectionVodka.style.display = "block";
           } else {
              
           }
           
           // Gin ist "checked"
           if (checkBoxGin.checked == true){
             sectionGin.style.display = "block";
           } else {
              sectionGin.style.display = "none";
           }
           
           // OSaft ist "checked"
           if (checkBoxOSaft.checked == true){
             sectionDefault.style.display = "block";
           } else {
              
           }
                 
           // TSaft ist "checked"
           if (checkBoxTSaft.checked == true){
             sectionDefault.style.display = "block";
           } else {
              
           }
          
           // Vodka, OSaft, TSaft ist  "checked"
           if (((checkBoxVodka.checked == true)&& (checkBoxOSaft.checked == true)&& (checkBoxTSaft.checked == true))) {
            sectionVodka.style.display = "block";
            sectionDefault.style.display = "none";
           } else {
              
           }
        
           // Vodka, OSaft ist  "checked"
           if ((checkBoxVodka.checked == true)&& (checkBoxOSaft.checked == true)) {
            sectionVodka.style.display = "block";
            sectionDefault.style.display = "none";
           } else {
              
           }

           // Vodka, TSaft ist  "checked"
           if ((checkBoxVodka.checked == true)&& (checkBoxTSaft.checked == true)) {
            sectionVodka.style.display = "block";
            sectionDefault.style.display = "none";
           } else {
              
           }

           // Gin, OSaft, TSaft ist  "checked"
           if (((checkBoxGin.checked == true)&& (checkBoxOSaft.checked == true)&& (checkBoxTSaft.checked == true))) {
            sectionGin.style.display = "block";
            sectionDefault.style.display = "none";
           } else {
              
           }

           // Gin, OSaft ist  "checked"
           if ((checkBoxGin.checked == true)&& (checkBoxOSaft.checked == true)) {
            sectionGin.style.display = "block";
            sectionDefault.style.display = "none";
           } else {
              
           }

           // Gin, TSaft ist  "checked"
           if ((checkBoxGin.checked == true)&& (checkBoxTSaft.checked == true)) {
            sectionGin.style.display = "block";
            sectionDefault.style.display = "none";
           } else {
              
           }

           // Keine Auswahl getroffen - kein  "checked"
           if ((((checkBoxVodka.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxOSaft.checked == false)&& (checkBoxTSaft.checked == false)))) {
            sectionDefault.style.display = "block";
           } else {
              
           }

         }
       
