var flag = 0;
function limpa(){
    document.form1.visor.value = "";
}

function valor(v){
        if(flag==1){
            if(v == '+' || v == '-' || v == '*' || v == '/'){
                var atual = document.form1.visor.value;
                document.form1.visor.value = atual + v ;
                flag=0;
            }else{
                limpa();
                flag=0;
                document.form1.visor.value = v ;
            }
        }else{
            var atual = document.form1.visor.value;
                document.form1.visor.value = atual + v ;
        }
    }

function calcula(){
    var resultado = eval(document.form1.visor.value);
    document.form1.visor.value = resultado;
    flag = 1;
}