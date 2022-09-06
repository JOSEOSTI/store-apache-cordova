
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var db = window.sqlitePlugin.openDatabase({ name: 'store.db', location: 'default' }, function (db) {

        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM usuario', [], function (tx, results) {
                var len = results.rows.length, i;

                $("#customers").find("tr:gt(0)").remove();
                var str = '';
                for (i = 0; i < len; i++) {
                    str += "<tr>";
                    str += "<td>" + results.rows.item(i).id + "</td>";
                    str += "<td>" + results.rows.item(i).nombre + "</td>";
                    str += "<td>" + results.rows.item(i).clave + "</td>";
                    str += "</tr>";
                    document.getElementById("customers").innerHTML += str;
                    str = '';
                }

            }, function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
        });
    });
}


