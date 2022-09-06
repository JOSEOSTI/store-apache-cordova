
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var db = window.sqlitePlugin.openDatabase({ name: 'store.db', location: 'default' }, function (db) {

        db.transaction(function (tx) {
            // ...
            tx.executeSql('CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT  , nombre VARCHAR(200), clave VARCHAR(200), tipo_user INTEGER)');
            tx.executeSql('INSERT INTO usuario VALUES (?,?,?,?)', [1, 'mba3', '000', 0]);
        }, function (error) {
            console.log('transaction error: ' + error.message);
        }, function () {
            console.log('transaction ok');
        });
        db.transaction(function (tx) {
            // ...
            tx.executeSql('CREATE TABLE IF NOT EXISTS productos (id INTEGER PRIMARY KEY AUTOINCREMENT, codigo VARCHAR(200)  , titulo VARCHAR(200), descripcion VARCHAR(200), precio INTEGER)');

        }, function (error) {
            console.log('transaction product error: ' + error.message);
        }, function () {
            console.log('transaction product ok');
        });

    }, function (error) {
        console.log('Open database ERROR: ' + JSON.stringify(error));
    });

}
