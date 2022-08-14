$(document).ready(function() {
    $.ajax({
            url: "../assets/json/server.json",
            type: "GET",
            dataType: 'json',  
            error: function(jqXHR, textStatus, errorThrown){
                console.log('jqXHR: \n'+jqXHR);
                console.log('textStatus: \n'+textStatus);
                console.log('errorThrown: \n'+errorThrown);
            },
            success: function(retorno){
                var dados = JSON.parse(JSON.stringify(retorno['data']));
                var html = "";
                var cont = 0;

                $.each(dados, function( p, item ){
                    
                    if(cont == 0){
                        html +=    "<div class='bloco-2'>";
                    }

                        html +=    "       <div class='bilhete' id='bi-"+item.grupo+"'>";
                        html +=    "                <div class='bilhete-superior'>";
                        html +=    "                   <span class='cod-grupo'>"+item.grupo+"</span>";
                        html +=    "                </div>";
                        html +=    "               <div class='bilhete-main'>";
                        html +=    "                    <div class='image'><img src='."+item.image+"' /></div>";
                        html +=    "                     <div class='numeros'>";
                        html +=    "                        <span class='num'>"+item.numeros.one+"</span>";
                        html +=    "                       <span class='num'>"+item.numeros.two+"</span>";
                        html +=    "                       <span class='num'>"+item.numeros.three+"</span>";
                        html +=    "                        <span class='num'>"+item.numeros.four+"</span>";
                        html +=    "                    </div>";
                        html +=    "                </div>";
                        html +=    "               <div class='bilhete-inferior'>";
                        html +=    "                    <span class='nome-grupo'>"+item.nome+"</span>";
                        html +=    "                </div>";
                        html +=    "                <div class='flutuante' id='st-"+item.grupo+"' ></div>";
                        html +=    "        </div>";

                    if(cont == 4){
                        html +=    "    </div>";
                        cont = 0;
                    }else{
                        cont++;
                    }
                });
                $("#mainbar").html(html);
            }
    });
}); 
    

function downloadimage(){
    var now = new Date;
        date_atual = now.getDay() + "_" + now.getDate() + "_" + now.getMonth() + "_" + now.getFullYear();

    var container = document.getElementById("capture");
    html2canvas(container,{allowTaint : false,  scale: 8, x: 210,width: 1200,  height: 1200, windowWidth: 1800,windowHeight: 1800, removeContainer: true, backgroundColor: '#141414'}).then(function(canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "atualizada-rifa-"+date_atual+".jpg";
        link.href = canvas.toDataURL();
        link.target = "_blank";
        link.click();
    });
}

$(document).on('click','.bilhete', function(){

    var id = this.id;
    var resultado = id.substring(2);

    $("#"+id).css("background-color", "#fff");
    $("#st"+resultado).html("<img src='./assets/img/sorte.png' />");

 });