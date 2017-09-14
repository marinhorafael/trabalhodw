<script>
validaNome(nome) {
    nome.value
};

function mascaraCpf(src, mask, teclapres) {
	
	        if(navigator.appName.indexOf("Netscape")!= -1) 
	           tecla= teclapres.which; 
	        else 
	           tecla= teclapres.keyCode; 
	        
	        key = String.fromCharCode( tecla); 
	
	        var strValidos = "0123456789" ;   
	        if ( strValidos.indexOf( key ) == -1 && tecla!= 8 &&  tecla!= 0)
	        {
	                return false;   
	        }
	
	       var i = src.value.length;
	       var saida = mask.substring(0,1);
	       var texto = mask.substring(i) ;
	       if (texto.substring(0,1) != saida) {
	         src.value += texto.substring(0,1);
	       }
	};

    </script>