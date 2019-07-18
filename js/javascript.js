function editar(codigo){
  var registro;
  for (var i = 0; i < localStorage.length; i++) {
    var clave = localStorage.key(i);
    if (clave == codigo) {
      registro = $.parseJSON(localStorage.getItem(clave));
      $("#codigo").val(registro.codigo);
      $("#nombre").val(registro.nombre);
      $("#nota").val(registro.nota);
    }
  }
};

function listar(){
  var tabla = "";
  var parrafo = $("#p1");
  tabla += '<table border="1">';
  tabla += '<tr>';
  tabla += '<th>CODIGO</th>';
  tabla += '<th>NOMBRE</th>';
  tabla += '<th>NOTA</th>';
  tabla += '<th>EDITAR</th>';
  tabla += '<th>ELIMINAR</th>';
  tabla += '</tr>';

  for (var i = 0; i < localStorage.length; i++) {
    var clave = localStorage.key(i);
    var registro = $.parseJSON(localStorage.getItem(clave));
    tabla += '<tr>';
    tabla += '<td>'+registro.codigo+'</td>';
    tabla += '<td>'+registro.nombre+'</td>';
    tabla += '<td>'+registro.nota+'</td>';
    tabla += '<td><button type="button" onclick="editar(\''+ registro.codigo +'\')" name="button">Editar</button></td>';
    tabla += '<td><button type="button" onclick="eliminar(\''+ registro.codigo +'\')" name="button">Eliminar</button></td>';
    tabla += '</tr>';
  }
  tabla += '</table>';
  $(parrafo).html(tabla);
}

function eliminar(codigo){
  localStorage.removeItem(codigo);
  listar();
};

$(document).ready(function(){
  $("#boton1").click(function(){
    var codigo = $("#codigo").val();
    var nombre = $("#nombre").val();
    var nota = $("#nota").val();

    var registro = {
      codigo : codigo,
      nombre : nombre,
      nota : nota
    };

    localStorage.setItem(codigo,JSON.stringify(registro));
    contador = localStorage.length + 1;

    listar();
    restablecer();
  });

  $("#boton2").click(function(){
    var sumador = 0;
    var num = 0;
    var prom = 0;
    for (var i = 0; i < localStorage.length; i++) {
      var clave = localStorage.key(i);
      var registro = $.parseJSON(localStorage.getItem(clave));
      num = parseInt(registro.nota);
      sumador = num + sumador;
    }
    prom = sumador / i;
    alert("El promedio de todas las notas es " + prom);
  });

  $("#boton3").click(function(){
    var Nmayor = 0;
    var pos = 0;
    var aux = "";
    for (var i = 0; i < localStorage.length; i++) {
      var clave = localStorage.key(i);
      var registro = $.parseJSON(localStorage.getItem(clave));
      var num = parseInt(registro.nota);
      if (num >= Nmayor) {
        Nmayor = num;
        aux = registro.nombre;
      }
    }
    alert("La nota mayor es " + Nmayor);
  });

  $("#boton4").click(function(){
    var Nmenor = 11;
    var pos = 0;
    var aux = "";
    for (var i = 0; i < localStorage.length; i++) {
      var clave = localStorage.key(i);
      var registro = $.parseJSON(localStorage.getItem(clave));
      var num = parseInt(registro.nota);
      if (num <= Nmenor) {
        Nmenor = num;
        aux = registro.nombre;
      }
    }
    alert("La nota menor es " + Nmenor);
  });
  
});
