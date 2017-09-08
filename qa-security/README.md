# Generar certificados públicos en una CA Let's Encrypt

* Se utilizará https://letsencrypt.org/
* Necesita una máquina con una dirección IP pública (ej: 200.12.180.71)
* Necesita un nombre de dominio (st0263.dis.eafit.edu.co)

## Proceso en Let’s Encrypt.

Guia: https://www.digitalocean.com/community/tutorials/how-to-secure-haproxy-with-let-s-encrypt-on-ubuntu-14-04

https://certbot.eff.org/#centos6-haproxy


* Crear un certificado nuevo:

    > $ sudo /root/certbot-auto certonly --standalone -d example.com -d www.example.com


Add un dominio a un cert existente:

    > $ sudo /root/certbot-auto certonly --standalone --preferred-challenges http --http-01-port 80 --cert-path /etc/letsencrypt/archive/dis.eafit.edu.co --expand -d rstudio.dis.eafit.edu.co

ejemplo concreto:

    > $ sudo /root/certbot-auto certonly --cert-path /etc/letsencrypt/archive/st0263.dis.eafit.edu.co --expand -d proyecto19.dis.eafit.edu.co

    > $ sudo /root/certbot-auto certonly -d st0263.dis.eafit.edu.co  --expand -d proyecto19.dis.eafit.edu.co

https://stackoverflow.com/questions/38302401/letsencrypt-add-domain-to-existing-certificate
