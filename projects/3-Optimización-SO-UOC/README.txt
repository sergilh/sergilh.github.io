💻 Proyecto académico: Servicios, Procesos, Conexión a Red y Optimización del Sistema Operativo
Autor: Sergi López Hernández

Grado Superior en Desarrollo de Aplicaciones Web – UOC

1º Semestre 2024

🎯 Objetivo del proyecto
El propósito de este proyecto fue analizar, gestionar y optimizar los procesos y servicios del sistema operativo, así como configurar correctamente la conectividad de red entre máquinas virtuales con Ubuntu Desktop y Windows 10.

Además, se desarrolló una guía práctica de optimización del sistema operativo para mejorar el rendimiento y mantenimiento de equipos informáticos, especialmente portátiles.

🧩 Entorno de trabajo
Sistemas operativos utilizados:
Ubuntu Desktop (entorno gráfico y shell en modo superusuario).
Windows 10 (entorno gráfico).
Plataforma de virtualización: Oracle VirtualBox (máquinas virtuales provenientes del proyecto AA3).
Herramientas y comandos:
top, ps, pstree, ping, ifconfig, sleep, yes, chage.
Panel de control de red y Administrador de tareas en Windows 10.
⚙️ Desarrollo técnico
🔹 1. Procesos y servicios en Ubuntu Desktop
Análisis del uso de CPU:
Ejecutando top como superusuario, se listaron los procesos ordenados por consumo de CPU.
El proceso con mayor tiempo de ejecución fue gnome-shell (≈11.9 s), correspondiente al entorno gráfico del sistema Linux, encargado de la gestión de ventanas y efectos visuales.

Visualización de procesos en árbol:

Se utilizó pstree para representar gráficamente la jerarquía de procesos y sus dependencias.
Listado de procesos por usuario:

Con ps -u sergi se obtuvieron todos los procesos pertenecientes al usuario Sergi López.

Se identificó el proceso más exigente en CPU y se documentaron su UID, PID y PPID para análisis.
Actualización en tiempo real:

Se empleó watch -n 2 ps -u sergi para monitorear dinámicamente los procesos del usuario cada 2 segundos.
Gestión de procesos en primer y segundo plano:
Se ejecutó yes > /dev/null en primer plano, observando que el terminal quedaba bloqueado.
La solución fue interrumpir el proceso con Ctrl + C.
Posteriormente, se lanzó el proceso sleep 4 & en segundo plano, verificando su correcta ejecución libre de bloqueo.
🧠 Esta sección reforzó competencias en gestión de procesos y multitarea en sistemas Linux, entendiendo cómo priorizar, supervisar y detener tareas activas desde terminal.

🔹 2. Procesos y servicios en Windows 10
Análisis del uso de recursos:

A través del Administrador de tareas, se identificó que el proceso con mayor consumo de memoria RAM era Antimalware Service Executable, encargado de la protección en tiempo real del sistema.
Gestión manual de procesos:

Se ejecutó y finalizó el proceso asociado al Bloc de notas (Notepad.exe) desde el Administrador de tareas, validando la capacidad del sistema para liberar recursos y cerrar aplicaciones mediante interfaz gráfica.
⚙️ Estas acciones permitieron comparar la gestión de procesos en sistemas Windows y Linux, comprendiendo tanto los mecanismos automáticos como los manuales de administración del sistema.

🔹 3. Configuración de red TCP/IP
🔸 En Ubuntu Desktop
Se configuraron dos máquinas virtuales con IPs estáticas para asegurar comunicación directa:

Parámetro	Máquina 1	Máquina 2
IP	192.168.2.9	192.168.2.7
Máscara	255.255.255.0	255.255.255.0
Puerta de enlace	192.168.2.1	192.168.2.1
DNS	8.8.8.8, 8.8.4.4	8.8.8.8, 8.8.4.4
La casilla DNS permite traducir los nombres de dominio a direcciones IP, facilitando la comunicación por nombre.
Se verificó la configuración con ifconfig y la conectividad mediante ping bidireccional entre ambas máquinas, confirmando la comunicación exitosa.
🔸 En Windows 10
Configuración equivalente pero con DNS alternativo (208.67.222.222) para comprobar la personalización de servidores de nombres:

Parámetro	Máquina 1	Máquina 2
IP	192.168.2.9	192.168.2.7
Máscara	255.255.255.0	255.255.255.0
Puerta de enlace	192.168.2.1	192.168.2.1
DNS	208.67.222.222	208.67.222.222
Se validó la configuración con ipconfig /all.
Comprobación de red: resultados exitosos de ping entre ambas máquinas.
🌐 Con esto se consolidó la comprensión práctica de los protocolos TCP/IP, los roles del DNS y la configuración manual de redes en entornos mixtos.

🔹 4. Optimización del sistema operativo
Como complemento al trabajo técnico, se elaboró una guía de optimización del sistema operativo enfocada a ordenadores portátiles, describiendo 8 medidas prácticas:

Desactivar programas de inicio automático.
Desinstalar software innecesario.
Actualizar controladores y drivers.
Ajustar el plan de energía para mejorar el rendimiento.
Activar el mantenimiento automatizado.
Vaciar periódicamente la papelera de reciclaje.
Analizar y detener procesos que consumen excesiva CPU/RAM.
Mantener el sistema actualizado para aplicar parches de seguridad.
Fuentes utilizadas:

ComputerHoy – 17 formas rápidas de optimizar y acelerar Windows 11.
NewEsc – Guía definitiva para optimizar portátiles Windows 10.
HP Tech Takes Blog – Cómo optimizar tu portátil.
⚡ Esta sección evidenció la aplicación de buenas prácticas de optimización y mantenimiento preventivo de equipos, aplicables tanto en entornos de usuario como empresariales.

📊 Resultados y aprendizaje
Con este proyecto se afianzaron competencias en:

Gestión de procesos, servicios y multitarea en Linux y Windows.
Configuración manual de red TCP/IP en distintos entornos virtualizados.
Diagnóstico y optimización del rendimiento del sistema.
Uso de herramientas de línea de comandos y entorno gráfico para la administración técnica.
🔍 Este trabajo permitió profundizar en el funcionamiento interno de los sistemas operativos y su interacción con la red, fortaleciendo habilidades clave para entornos de soporte técnico, DevOps y administración de sistemas.

📸 Evidencias visuales
Capturas del análisis de procesos en Ubuntu, ejecución de comandos pstree, configuración de red, pruebas de conectividad entre máquinas virtuales y comprobaciones de rendimiento en Windows 10.

🚀 Conclusión Final
Este proyecto reflejó el equilibrio entre análisis interno del sistema operativo, gestión de red y optimización del rendimiento.

Gracias a la práctica con Linux y Windows, se consolidó una visión integral del funcionamiento del sistema operativo y su mantenimiento, aportando una base sólida para tareas de administración, soporte técnico y virtualización profesional.
