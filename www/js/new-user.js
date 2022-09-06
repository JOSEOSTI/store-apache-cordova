

document.addEventListener('deviceready', onDeviceReady, false);
var db = null;
function onDeviceReady() {
     db = window.sqlitePlugin.openDatabase({ name: 'store.db', location: 'default' }, function (db) {

        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM usuario', [], function (tx, rs) {
              console.log(rs.rows.item(0).nombre);
            }, function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
        });

    }, function (error) {
        console.log('Open database ERROR: ' + JSON.stringify(error));
    });

}


function myFunction() {
            var id = document.getElementById("id").value;
            var nombre = document.getElementById("nombre").value;
            var clave = document.getElementById("clave").value;
            addItem(id ,nombre , clave);
      
}

function addItem(first, last, acctNum) {
    alert(first+ last+ acctNum)

    db.transaction(function (tx) {

        var query = "INSERT INTO usuario ( nombre, clave) VALUES (?,?)";

        tx.executeSql(query, [ last, acctNum], function(tx, res) {
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

