			function valida() {
				var i;
				var j;
				var msgerr;
				var x = document.cadastro;
				var txt = '';
				
				for (i = 0; i < x.length; i++) {
					if(x.elements[i].value == ''){
						j = document.forms[0][i].id;
						msgerr = (j + ' é vazio!\n');
						txt = txt + msgerr;
					}
				}
				
				if (txt != ''){
					alert(txt);
					return false;
				}
			}