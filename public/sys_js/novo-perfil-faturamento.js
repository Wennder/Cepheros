 $().ready(function(){

	   	bloqueiaICMS();
	   	bloqueiaIPI();
	   	bloqueiaPIS();
	   	bloqueiaCOFINS();
                                	$("#valorprodcompetotal-div").toggleButtons({
                                  	     label: {
                                  		 enabled: "Sim",
                                  		 disabled: "Não"
                                  		 }
                                  		 });

                              		 $("#incluirpedvenda-div").toggleButtons({
                                  	     label: {
                                      		 enabled: "Sim",
                                      		 disabled: "Não"
                                      		 }
                                      		 });
                              		 $("#incluirpedcompra-div").toggleButtons({
                                  	     label: {
                                      		 enabled: "Sim",
                                      		 disabled: "Não"
                                      		 }
                                      		 });

                              		


                              	     $("#sittributaria").change(function(){
											tipo = $("#sittributaria").val();

											switch(tipo){

											case "00":
											 	bloqueiaICMS();
												
			                              	     $('#aliqicms').removeAttr('disabled');
			                              	     $('#moddeterbcicms').removeAttr('disabled');
			                              												
											break;

											case '10':
												bloqueiaICMS();
												 $('#aliqicms').removeAttr('disabled');
			                              	     $('#moddeterbcicms').removeAttr('disabled');
				                              	  $('#moddeterbcicmsst').removeAttr('disabled');
					                              $('#redutorbcicmsst').removeAttr('disabled');	
					                              $('#aliqicmsst').removeAttr('disabled');	
					                              $('#margemvladicicmsst').removeAttr('disabled');
											break;

											case '20':

												bloqueiaICMS();
												 $('#aliqicms').removeAttr('disabled');
												 $('#moddeterbcicms').removeAttr('disabled');
												 $('#redutorbcicms').removeAttr('disabled');
												
											break;

											case '30':
												bloqueiaICMS();
												  $('#moddeterbcicmsst').removeAttr('disabled');
					                              $('#redutorbcicmsst').removeAttr('disabled');	
					                              $('#aliqicmsst').removeAttr('disabled');
					                              $('#margemvladicicmsst').removeAttr('disabled');		

											break;	

											case '40':
												bloqueiaICMS();
												$('#motivodadesoneracao').removeAttr('disabled');
												$('#aliqicms').removeAttr('disabled');
												$('#aliqicms').val('0,00');
											break;

											case '41':
												bloqueiaICMS();
												 $('#bcicmsstretironaufremetente').removeAttr('disabled');	
												 $('#bcicmsstufdestino').removeAttr('disabled');											
											break;

											case '50':
												bloqueiaICMS();												
											break;


											case '101':
												bloqueiaICMS();	
												 $('#aliqaplicavelcalculocredito').removeAttr('disabled');
												
											break;

											case '102':
												bloqueiaICMS();	
											break;

											case '103':
												bloqueiaICMS();	
											break;

											case '201':
												bloqueiaICMS();	
												 $('#aliqaplicavelcalculocredito').removeAttr('disabled');
												  $('#moddeterbcicmsst').removeAttr('disabled');
					                              $('#redutorbcicmsst').removeAttr('disabled');	
					                              $('#aliqicmsst').removeAttr('disabled');	
					                              $('#margemvladicicmsst').removeAttr('disabled');
												
											break;

											case '202':
												  bloqueiaICMS();	
												  $('#moddeterbcicmsst').removeAttr('disabled');
					                              $('#redutorbcicmsst').removeAttr('disabled');	
					                              $('#aliqicmsst').removeAttr('disabled');	
					                              $('#margemvladicicmsst').removeAttr('disabled');
												
											break;

											case '203':
												bloqueiaICMS();	
												  $('#moddeterbcicmsst').removeAttr('disabled');
					                              $('#redutorbcicmsst').removeAttr('disabled');	
					                              $('#aliqicmsst').removeAttr('disabled');	
					                              $('#margemvladicicmsst').removeAttr('disabled');
											break;

											case '300':
												bloqueiaICMS();	
											break;

											case '400':
												bloqueiaICMS();	
											break;

											}
											
                                  	     

                                  	    }); 

$("#tipocalculo_ipi").change(function(){
	tipocalculoipi = $("#tipocalculo_ipi").val();
	if(tipocalculoipi == "1"){
		$('#alipi').removeAttr('disabled');
		$('#vlfixo_ipi').attr('disabled', 'disabled');
		
	}else{
		
		$('#vlfixo_ipi').removeAttr('disabled');
		$('#alipi').attr('disabled', 'disabled');
		
	}
	
});

                                  	    
                                  	    
$("#sittributaria_ipi").change(function(){
	tipoipi = $("#sittributaria_ipi").val();
	switch(tipoipi){
	
	case '00':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#tipocalculo_ipi').removeAttr('disabled');
		
	break;
	
	case '01':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
	break;
	
	case '02':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
	break;
	
	case '03':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
	break;
	
	case '04':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
	break;
	
	case '05':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
	break;
	
	case '49':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#tipocalculo_ipi').removeAttr('disabled');
	break;
	
	case '50':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#tipocalculo_ipi').removeAttr('disabled');
	break;
	
	case '51':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
	break;
	
	case '52':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
	break;
	
	case '53':
		bloqueiaIPI();
		$('#classedeenquadramento_ipi').removeAttr('disabled');
		$('#codenquadramento_ipi').removeAttr('disabled');
		$('#cnpjprodutor_ipi').removeAttr('disabled');
		$('#codselocontrole_ipi').removeAttr('disabled');
		$('#classedeenquadramento_ipi').removeAttr('disabled');
	break;
	
	
	}
	
});


$("#sittrib_pis").change(function(){
	tipopis = $("#sittrib_pis").val();
	switch(tipopis){
	
	case '01':
		bloqueiaPIS();
		$('#aliqpis_pis').removeAttr('disabled');
		$('#tipocalculost_pis').removeAttr('disabled');
		
	break;
	
	case '02':
		bloqueiaPIS();
		$('#aliqpis_pis').removeAttr('disabled');
		$('#tipocalculost_pis').removeAttr('disabled');
		
	break;
	
	case '03':
		bloqueiaPIS();
		$('#aliqreal__pis').removeAttr('disabled');
		$('#tipocalculost_pis').removeAttr('disabled');
		
	break;
	
	case '04':
		bloqueiaPIS();
		$('#tipocalculost_pis').removeAttr('disabled');
		
	break;
	
	case '06':
		bloqueiaPIS();
		$('#tipocalculost_pis').removeAttr('disabled');
		
	break;

	case '07':
		bloqueiaPIS();
		$('#tipocalculost_pis').removeAttr('disabled');
		
	break;
	
	case '08':
	case '09':
		bloqueiaPIS();
		$('#tipocalculost_pis').removeAttr('disabled');
		
	break;
	
	}
});
	
	
	$("#sittrib_cofins").change(function(){
		tipocofins = $("#sittrib_cofins").val();
		switch(tipocofins){
		
		case '01':
			bloqueiaCOFINS();
			$('#aliqcofins_cofins').removeAttr('disabled');
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		case '02':
			bloqueiaCOFINS();
			$('#aliqcofins_cofins').removeAttr('disabled');
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		case '03':
			bloqueiaCOFINS();
			$('#aliqreal__cofins').removeAttr('disabled');
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		case '04':
			bloqueiaCOFINS();
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		case '06':
			bloqueiaCOFINS();
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;

		case '07':
			bloqueiaCOFINS();
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		case '08':
		case '09':
			bloqueiaCOFINS();
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		}
		
		
		
	});
	


$("#tipocalculost_pis").change(function(){
	tipocalculopis = $("#tipocalculost_pis").val();
	if(tipocalculopis == "1"){
		$('#aliqpis_st_pis').removeAttr('disabled');
		$('#aliqrealst__pis').attr('disabled', 'disabled');
		
	}else{
		
		$('#aliqrealst__pis').removeAttr('disabled');
		$('#aliqpis_st_pis').attr('disabled', 'disabled');
		
	}
	
});

$("#tipocalculost_cofins").change(function(){
	tipocalculocofins = $("#tipocalculost_cofins").val();
	if(tipocalculocofins == "1"){
		$('#aliqcofins_st_cofins').removeAttr('disabled');
		$('#aliqrealst__cofins').attr('disabled', 'disabled');
		
	}else{
		
		$('#aliqrealst__cofins').removeAttr('disabled');
		$('#aliqcofins_st_cofins').attr('disabled', 'disabled');
		
	}
	
});

     
     
                                  		 
    });
 
 
 function bloqueiaPIS(){
	   $('#tipocalculo_pis').attr('disabled', 'disabled');                              		 
	     $('#aliqpis_pis').attr('disabled', 'disabled');
	     $('#aliqpis_st_pis').attr('disabled', 'disabled');
	     $('#aliqreal__pis').attr('disabled', 'disabled');
	     $('#aliqrealst__pis').attr('disabled', 'disabled');
	     $('#tipocalculo_pis').attr('disabled', 'disabled');
	     $('#tipocalculost_pis').attr('disabled', 'disabled');
	      

}
 
 function bloqueiaCOFINS(){
	   $('#tipocalculo_cofins').attr('disabled', 'disabled');                              		 
	     $('#aliqcofins_cofins').attr('disabled', 'disabled');
	     $('#aliqcofins_st_cofins').attr('disabled', 'disabled');
	     $('#aliqreal__cofins').attr('disabled', 'disabled');
	     $('#aliqrealst__cofins').attr('disabled', 'disabled');
	     $('#tipocalculo_cofins').attr('disabled', 'disabled');
	     $('#tipocalculost_cofins').attr('disabled', 'disabled');
	  
}
 
 function bloqueiaIPI(){
	   $('#classedeenquadramento_ipi').attr('disabled', 'disabled');                              		 
	     $('#codenquadramento_ipi').attr('disabled', 'disabled');
	     $('#cnpjprodutor_ipi').attr('disabled', 'disabled');
	     $('#codselocontrole_ipi').attr('disabled', 'disabled');
	     $('#tipocalculo_ipi').attr('disabled', 'disabled');
	     $('#alipi').attr('disabled', 'disabled');
	     $('#vlfixo_ipi').attr('disabled', 'disabled');
	   

 }

   function bloqueiaICMS(){
	   $('#motivodadesoneracao').attr('disabled', 'disabled');                              		 
	     $('#margemvladicicmsst').attr('disabled', 'disabled');
	     $('#uficmsstdevop').attr('disabled', 'disabled');
	     $('#bcoperacaopropria').attr('disabled', 'disabled');
	     $('#bcicmsstufdestino').attr('disabled', 'disabled');
	     $('#aliqaplicavelcalculocredito').attr('disabled', 'disabled');
	     $('#bcicmsstretironaufremetente').attr('disabled', 'disabled');
	     $('#redutorbcicmsst').attr('disabled', 'disabled');
	     $('#redutorbcicms').attr('disabled', 'disabled');
	     $('#aliqicmsst').attr('disabled', 'disabled');
	     $('#aliqicms').attr('disabled', 'disabled');
	     $('#moddeterbcicmsst').attr('disabled', 'disabled');
	     $('#moddeterbcicms').attr('disabled', 'disabled');
	   

   }
   
   
   function desbloqueiaICMS(tipo){
	   switch(tipo){

		case "00":
		case '0':
		 	bloqueiaICMS();
			
     	     $('#aliqicms').removeAttr('disabled');
     	     $('#moddeterbcicms').removeAttr('disabled');
     												
		break;

		case '10':
			bloqueiaICMS();
			 $('#aliqicms').removeAttr('disabled');
     	     $('#moddeterbcicms').removeAttr('disabled');
         	  $('#moddeterbcicmsst').removeAttr('disabled');
             $('#redutorbcicmsst').removeAttr('disabled');	
             $('#aliqicmsst').removeAttr('disabled');	
             $('#margemvladicicmsst').removeAttr('disabled');
		break;

		case '20':

			bloqueiaICMS();
			 $('#aliqicms').removeAttr('disabled');
			 $('#moddeterbcicms').removeAttr('disabled');
			 $('#redutorbcicms').removeAttr('disabled');
			
		break;

		case '30':
			bloqueiaICMS();
			  $('#moddeterbcicmsst').removeAttr('disabled');
             $('#redutorbcicmsst').removeAttr('disabled');	
             $('#aliqicmsst').removeAttr('disabled');
             $('#margemvladicicmsst').removeAttr('disabled');		

		break;	

		case '40':
			bloqueiaICMS();
			$('#motivodadesoneracao').removeAttr('disabled');
			$('#aliqicms').removeAttr('disabled');
			$('#aliqicms').val('0,00');
		break;

		case '41':
			bloqueiaICMS();
			 $('#bcicmsstretironaufremetente').removeAttr('disabled');	
			 $('#bcicmsstufdestino').removeAttr('disabled');											
		break;

		case '50':
			bloqueiaICMS();												
		break;


		case '101':
			bloqueiaICMS();	
			 $('#aliqaplicavelcalculocredito').removeAttr('disabled');
			
		break;

		case '102':
			bloqueiaICMS();	
		break;

		case '103':
			bloqueiaICMS();	
		break;

		case '201':
			bloqueiaICMS();	
			 $('#aliqaplicavelcalculocredito').removeAttr('disabled');
			  $('#moddeterbcicmsst').removeAttr('disabled');
             $('#redutorbcicmsst').removeAttr('disabled');	
             $('#aliqicmsst').removeAttr('disabled');	
             $('#margemvladicicmsst').removeAttr('disabled');
			
		break;

		case '202':
			  bloqueiaICMS();	
			  $('#moddeterbcicmsst').removeAttr('disabled');
             $('#redutorbcicmsst').removeAttr('disabled');	
             $('#aliqicmsst').removeAttr('disabled');	
             $('#margemvladicicmsst').removeAttr('disabled');
			
		break;

		case '203':
			bloqueiaICMS();	
			  $('#moddeterbcicmsst').removeAttr('disabled');
             $('#redutorbcicmsst').removeAttr('disabled');	
             $('#aliqicmsst').removeAttr('disabled');	
             $('#margemvladicicmsst').removeAttr('disabled');
		break;

		case '300':
			bloqueiaICMS();	
		break;

		case '400':
			bloqueiaICMS();	
		break;

		}
		
	   
   }
   
   
   function desbloqueiaIPI(tipo){
	   
	   switch(tipo){
		
		case '00':
		case '0':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#tipocalculo_ipi').removeAttr('disabled');
			
		break;
		
		case '01':
		case '1':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
		break;
		
		case '02':
		case '2':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
		break;
		
		case '03':
		case '3':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
		break;
		
		case '04':
		case '4':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
		break;
		
		case '05':
		case '5':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
		break;
		
		case '49':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#tipocalculo_ipi').removeAttr('disabled');
		break;
		
		case '50':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#tipocalculo_ipi').removeAttr('disabled');
		break;
		
		case '51':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
		break;
		
		case '52':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
		break;
		
		case '53':
			bloqueiaIPI();
			$('#classedeenquadramento_ipi').removeAttr('disabled');
			$('#codenquadramento_ipi').removeAttr('disabled');
			$('#cnpjprodutor_ipi').removeAttr('disabled');
			$('#codselocontrole_ipi').removeAttr('disabled');
			$('#classedeenquadramento_ipi').removeAttr('disabled');
		break;
		
		
		}
	   
   }
   
   
   function desbloqueiaPIS(tipo){
	   
	   switch(tipo){
		
		case '01':
		case '1':
			bloqueiaPIS();
			$('#aliqpis_pis').removeAttr('disabled');
			$('#tipocalculost_pis').removeAttr('disabled');
			
		break;
		
		case '02':
		case '2':
			bloqueiaPIS();
			$('#aliqpis_pis').removeAttr('disabled');
			$('#tipocalculost_pis').removeAttr('disabled');
			
		break;
		
		case '03':
		case '3':
			bloqueiaPIS();
			$('#aliqreal__pis').removeAttr('disabled');
			$('#tipocalculost_pis').removeAttr('disabled');
			
		break;
		
		case '04':
		case '4':
			bloqueiaPIS();
			$('#tipocalculost_pis').removeAttr('disabled');
			
		break;
		
		case '06':
		case '6':
			bloqueiaPIS();
			$('#tipocalculost_pis').removeAttr('disabled');
			
		break;

		case '07':
		case '7':
			bloqueiaPIS();
			$('#tipocalculost_pis').removeAttr('disabled');
			
		break;
		
		case '08':
		case '8':
		case '09':
		case '9':
			bloqueiaPIS();
			$('#tipocalculost_pis').removeAttr('disabled');
			
		break;
		
		}
	   
   }
   
   function desbloqueiaCOFINS(tipo){
	switch(tipo){
		
		case '01':
		case '1':
			bloqueiaCOFINS();
			$('#aliqcofins_cofins').removeAttr('disabled');
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		case '02':
		case '2':
			bloqueiaCOFINS();
			$('#aliqcofins_cofins').removeAttr('disabled');
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		case '03':
		case '3':
			bloqueiaCOFINS();
			$('#aliqreal__cofins').removeAttr('disabled');
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		case '04':
		case '4':			
			bloqueiaCOFINS();
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		case '06':
		case '6':
			bloqueiaCOFINS();
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;

		case '07':
		case '7':
			bloqueiaCOFINS();
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		case '08':
		case '09':
		case '8':
		case '9':
			bloqueiaCOFINS();
			$('#tipocalculost_cofins').removeAttr('disabled');
			
		break;
		
		}
	   
	   
   }
  