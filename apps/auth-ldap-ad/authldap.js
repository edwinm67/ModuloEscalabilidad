/**
 * Created by AULA MOVIL on 13/03/2017.
 */
var ActiveDirectory = require('activedirectory');
var config = { url: 'ldap://192.168.1.5',
    baseDN: 'dc=dis, dc=eafit, dc=edu, dc=co',
    username: 'user1@dis.eafit.edu.co',
    password: 'eafit.2017' }

var ad = new ActiveDirectory(config);
var username = 'user1@dis.eafit.edu.co';
var password = 'eafit.20179';

ad.authenticate(username, password, function(err, auth) {
    if (err) {
        console.log('ERROR: '+JSON.stringify(err));
        return;
    }

    if (auth) {
        console.log('Authenticated!');
    }
    else {
        console.log('Authentication failed!');
    }
});
