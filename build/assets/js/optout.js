
function BoxChecked(check){

      var ElementsCount = document.form1.elements.length; // 要素の数

	  if(document.form1.elements[3].checked == false){
		check = true;
	  }
	  else{
		check = false;
	  }

      for( i=0 ; i<ElementsCount ; i++ ) {
///		if ((document.form1.elements[i].name=="chk[]"){
         document.form1.elements[i].checked = check; // ON・OFFを切り替え
///		}
      }


}

