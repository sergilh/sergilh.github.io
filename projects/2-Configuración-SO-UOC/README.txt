⚙️ Proyecto académico: Configuración del Software Base en Sistemas Operativos
Autor: Sergi López Hernández

Año: 2024

Grado Superior en Desarrollo de Aplicaciones Web – UOC

🎯 Objetivo del proyecto
El objetivo de este proyecto fue administrar usuarios, grupos y configuraciones del sistema en entornos Windows y Linux, aplicando políticas de seguridad, control de acceso y ajustes de registro. Se trabajó sobre las máquinas virtuales creadas en la actividad anterior (AA2), aprovechando la estructura virtualizada para realizar configuraciones administrativas reales sin comprometer el entorno original.

🧩 Entorno de trabajo
Sistemas operativos: Ubuntu Desktop (modo texto) y Windows 10 (modo gráfico).
Herramientas utilizadas:
Terminal y comandos de administración Linux.
Administración de usuarios y grupos en Panel de Control / Configuración de Windows.
Editor del registro de Windows (regedit) para personalizar mensajes y restringir accesos.
🧠 Desarrollo técnico
🔹 Administración en Ubuntu Desktop (modo texto)
Se realizaron tareas de gestión de usuarios y grupos mediante terminal:

Creación de usuarios y grupos personalizados siguiendo una estructura departamental (Presidencia, Tesorería, Guía, Marketing, RRPP, Informática).
Asignación de contraseñas seguras siguiendo políticas de complejidad: mayúsculas, minúsculas, números y longitudes adecuadas.
Alta de usuarios en los grupos correspondientes, verificando la correcta configuración mediante comandos cat /etc/passwd y cat /etc/group.
Modificación de membresías:
Eliminación del usuario Montse del sistema.
Incorporación del usuario Sergi López al grupo RRPP, permaneciendo también en Informática.
Creación del grupo combinado Presi&Teso para unificar Presidencia y Tesorería.
Eliminación de los grupos vacíos tras la reasignación.
Configuración avanzada de políticas de contraseñas mediante chage, aplicando:
Período mínimo de 5 días antes de permitir un nuevo cambio.
Aviso automático 2 días antes de la caducidad de la contraseña.
🔧 Con estas acciones se consolidaron los fundamentos de la administración de usuarios en sistemas Linux, gestión de contraseñas y políticas de seguridad local.

🔹 Administración en Windows 10 (modo gráfico)
En la máquina virtual con Windows 10 se aplicaron tareas equivalentes en un entorno gráfico:

Creación de usuarios y grupos desde el panel Administración de equipos → Usuarios y grupos locales:
Usuarios como Fausto, Willy, Agus, Marta, y Sergi López.
Grupos: Vocal, Custom, Presi&Teso, e Informática.
Asignación de contraseñas seguras y políticas de cuenta, marcando opciones:
“Contraseña que nunca expira.”
“El usuario no puede cambiar la contraseña.”
Modificación de estructuras organizativas:
Eliminación de Santi (Presi&Teso) y todos los registros relacionados.
Agus pasa al grupo Vocal tras decisión administrativa.
Eliminación del grupo Custom al quedar vacío.
Deshabilitación del usuario Willy temporalmente.
Configuraciones del registro del sistema (Regedit):
Personalización del mensaje de inicio de sesión con un texto informativo:
➜ “RidersUOCX + Sergi López” mediante las claves LegalNoticeText y LegalNoticeCaption.
Restricción de acceso a la opción Pantalla dentro del Panel de Control, aplicando políticas de usuario avanzadas a nivel de registro.
💬 Estas acciones reforzaron la comprensión de la gestión de seguridad local y políticas de usuario en Windows, así como la implementación de ajustes administrativos mediante el registro del sistema.

📊 Resultados y conclusiones
El proyecto permitió demostrar de manera práctica el dominio de tareas administrativas en entornos empresariales mixtos (Windows + Linux), destacando:

Creación, modificación y eliminación de usuarios y grupos.
Aplicación de políticas de contraseñas y permisos detalladas.
Implementación de configuraciones del registro del sistema.
Uso de herramientas gráficas y de línea de comandos en entornos virtualizados.
🧩 Este trabajo consolidó competencias esenciales en administración de sistemas operativos, políticas de seguridad y gestión de identidades digitales, aplicables tanto en entornos locales como corporativos.

📸 Evidencias visuales
Las capturas muestran la creación y configuración de usuarios en Ubuntu mediante terminal, modificaciones en Windows local accounts, personalización del mensaje de inicio y bloqueo de funcionalidades en el panel de control.

🚀 Conclusión Final
Este proyecto amplió mis conocimientos sobre administración de usuarios, políticas de contraseñas y automatización del mantenimiento del sistema en diversos entornos.

Supuso un paso importante en mi formación como futuro desarrollador o administrador de sistemas, comprendiendo a fondo la relación entre software base, seguridad y explotación del sistema informático.
