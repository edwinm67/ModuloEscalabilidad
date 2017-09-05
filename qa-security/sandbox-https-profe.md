# configurar un dominio con https con lets encrypt

## dominio: st0263.dis.eafit.edu.co

## ip: 200.12.180.86

## instalar certbot de lets encrypt

    $ sudo yum install certbot

## generar un certificado, DEBE PARAR HAPROXY

    $ sudo systemctl stop haproxy

    $ sudo certbot certonly --standalone --preferred-challenges http --http-01-port 80 -d st0263.dis.eafit.edu.co

deja los archivos en:

    /etc/letsencrypt/live/st0263.dis.eafit.edu.co/fullchain.pem

se deben concatenar 2 archivos:

    $ sudo mkdir /etc/haproxy/certs

    $ sudo cd /etc/haproxy/certs/

    $ sudo cat /etc/letsencrypt/live/st0263.dis.eafit.edu.co/fullchain.pem /etc/letsencrypt/live/st0263.dis.eafit.edu.co/privkey.pem > /etc/haproxy/certs/st0263.pem

## reinicia haproxy

    $ sudo systemctl stop haproxy

## configure haproxy.cfg para que acepte https para el dominio.

## probar:

en un browser por Internet (sin vpn)

    https://st0263.dis.eafit.edu.co

    http://st0263.dis.eafit.edu.co
