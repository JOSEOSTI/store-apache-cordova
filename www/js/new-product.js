

document.addEventListener('deviceready', onDeviceReady, false);
var db = null;
function onDeviceReady() {
     db = window.sqlitePlugin.openDatabase({ name: 'store.db', location: 'default' }, function (db) {

        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM productos', [], function (tx, rs) {
              console.log(rs.rows.item(0).codigo);
            }, function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
        });

    }, function (error) {
        console.log('Open database ERROR: ' + JSON.stringify(error));
    });

}


function myFunction() {
            var codigo = document.getElementById("codigo").value;
            var titulo = document.getElementById("titulo").value;
            var descripcion = document.getElementById("descripcion").value;
            var precio = document.getElementById("precio").value;

            addItem(codigo , titulo ,  descripcion , precio);
      
}

function addItem(codigo , titulo , descripcion , precio) {
    alert(codigo + titulo + descripcion + precio)

    db.transaction(function (tx) {

        var query = "INSERT INTO productos ( codigo, titulo , descripcion , precio) VALUES (?,?,?,?)";

        tx.executeSql(query, [ codigo, titulo, descripcion , precio], function(tx, res) {
            console.log("insertId: " + res.insertId + " -- probably 1");
            console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
            alert("insertId: " + res.insertId + " -- probably 1");

        },
        function(tx, error) {
            console.log('INSERT error: ' + error.message);
            alert('INSERT error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
}

