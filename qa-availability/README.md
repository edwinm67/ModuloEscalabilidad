# Herramientas para la Disponibilidad

## Uso de Load Balancer

* Software HAPROXY

      http://www.haproxy.org/

Arquitectura base:

![](haproxy-conf1.png)

Este LB (HAPROXY), puede tener las siguientes funcionalidades:

* Proxy inverso (permite que un browser en Internet público, pueda ingresar a los servidores AppServer).
* Balanceador de cargas (permite distribuir Requerimientos a los N servidores AppServer)
* Permite recibir comunicaciones seguras (https)

## caso de estudio:

* HAPROXY (200.12.187.71)
* Dominio: st0263.dis.eafit.edu.co -> apunta a: 200.12.180.71
* AppServer1 (192.168.10.51)
* AppServer2 (192.168.10.52)

En el AppServer1 hay una app corriendo por el puerto 3000

En el AppServer2 hay otra app corriendo por el puerto 3000

Para comprobar el funcionamiento, en un browser entre:

http://192.168.10.51:3000 y

http://192.168.10.52:3000

En el servidor HAPROXY debe tener previamente instalado haproxy:

* En CentOS:

      $ sudo yum install haproxy


* Configuración en el HAPROXY:

      $ sudo vim /etc/haproxy/haproxy.cfg



Se recomienda usar HAPROXY, porque esto no solo tiene balanceador, sino que para los de seguiridad, les permite activar HTTPS más fácil alli.

El HAPROXY lo instalaran en una de las máquinas que les asigne, PERO les voy a entregar otra máquina, con direccionamiento IP Público y nombre de dominio a cada grupo. Ej:

IP 200.12.187.71

dominio: st0263.dis.eaft.edu.co

Esta IP y este dominio, les servirá a los de seguiridad, para pedir un certifado en let’s encrypt.
