
function BoxChecked(check){

      var ElementsCount = document.form1.elements.length; // —v‘f‚Ì”

	  if(document.form1.elements[3].checked == false){
		check = true;
	  }
	  else{
		check = false;
	  }

      for( i=0 ; i<ElementsCount ; i++ ) {
///		if ((document.form1.elements[i].name=="chk[]"){
         document.form1.elements[i].checked = check; // ONEOFF‚ğØ‚è‘Ö‚¦
///		}
      }


}

