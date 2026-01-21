🧮 Proyecto académico: Gestión de Archivos y Almacenamiento
Autor: Sergi López Hernández

Grado Superior en Desarrollo de Aplicaciones Web – UOC

1º Semestre 2024

🎯 Objetivo del proyecto
El objetivo de este proyecto fue comprender el funcionamiento de los sistemas de archivos, las particiones, y los métodos de gestión de almacenamiento en diferentes sistemas operativos, tanto Linux (Ubuntu) como Windows 10.

El trabajo abarcó desde el análisis teórico de los sistemas de ficheros más comunes (FAT, exFAT, NTFS, Ext4) hasta la práctica de creación, copia, enlace y administración de archivos y volúmenes en entornos virtualizados.

🧩 Entorno de trabajo
Máquinas virtuales: Ubuntu Desktop y Windows 10, creadas en Oracle VirtualBox.
Herramientas utilizadas:
Terminal de Linux (comandos cp, ln, mv, rm, df, mount, umount, cat...).
GParted para gestión de particiones en Ubuntu.
Administración de discos en Windows 10.
Sistema de archivos: NTFS, FAT32, exFAT y EXT4.
🧠 Fundamentos teóricos
Objetivos de un sistema de ficheros: gestionar y organizar los archivos en un dispositivo de almacenamiento, asignando espacio, control de acceso y nombres válidos.
Comparativa de sistemas de ficheros principales:
Sistema	Año	Volumen Máx.	Compatibilidad	Seguridad	Características destacadas
FAT	1977	4 GB	Todos los SO	No	Muy limitado para discos grandes
exFAT	2006	16 TB	Windows, macOS, Linux	No	Ideal para unidades externas
NTFS	1993	16 TB+	Windows (limitado fuera)	Sí	Permisos, cifrado y journaling
Ext4	2008	16 TB	Linux	Sí	Eficiente, moderno y estable
Partición: división lógica de un disco duro físico, permitiendo sistemas de archivos independientes en cada una.
Estructura de directorios Linux:
Dispositivos montados: /mnt y /dev
Usuarios: /home (excepto root, que reside en /root)
Estructura de directorios Windows:
Aplicaciones de 32 bits → C:\Program Files (x86)
Archivos DLL → C:\Windows\System32
Volúmenes simples y distribuidos:
Simple: Espacio de una única unidad física.
Distribuido: Combina espacio libre de varios discos físicos en un solo volumen lógico.
⚙️ Desarrollo técnico
🔹 Gestión de archivos en Ubuntu
Creación de estructura de directorios en /home/ridersuocx con subcarpetas videos, info, socios, motots…
Copias y movimientos de archivos:
Copia de /etc/passwd al directorio socios.
Copia de todos los archivos del directorio /bin con “c” en el nombre hacia videos.
Copia de archivos de /bin que comiencen con “m” o “n” hacia info.
Gestión de archivos específicos:
Eliminación del archivo mkdir en info con confirmación (rm -i mkdir).
Renombrado de mount a motards.
Creación de enlaces simbólicos y duros:
Enlace simbólico: s_motards.
Enlaces duros: d1_motards y d2_motards.
Se verificó que motards tiene 2 enlaces duros compartiendo el mismo número de i‑nodo, mientras que el enlace simbólico apunta por referencia.
Tras eliminar motards, el enlace simbólico se detectó como enlace roto.
Copiado y organización final:
Todo el contenido del directorio INFO fue copiado a Extorsión.
Creación y verificación de un archivo alumno en RIDERSUOCX con cat, mostrando recuento de líneas y palabras con wc.
🧩 Esta parte reforzó conceptos de jerarquía de directorios, permisos, enlaces e inodos en Linux, además de la importancia de las copias selectivas y simbólicas.

🔹 Gestión del almacenamiento en Windows 10
Adición de un disco de 5 GB desde VirtualBox.
Creación de particiones:
3 GB → Formateada como NTFS, llamada Videos, tamaño de asignación 4096 bytes.
2 GB → Formateada como FAT32, llamada Fotos.
Verificación mediante el administrador de discos:
Se confirmó la creación correcta de volúmenes y etiquetas, analizando su comportamiento en cuanto a compatibilidad y características entre sistemas de archivos.
💾 Esta sección permitió comparar NTFS y FAT32, identificando sus ventajas, limitaciones y usos adecuados.

🔹 Creación y gestión de particiones en Ubuntu
Añadido de un disco de 10 GB.
Creación de particiones con estructura GPT, montadas en $HOME/particiones:
juegos
trapicheos
negocios
Configuraciones adicionales:
juegos y trapicheos configurados como solo lectura y montaje automático editando el archivo /etc/fstab.
Chequeo y desfragmentación de la partición negocios mediante e2fsck y defrag, garantizando su integridad y optimización.
📦 Con esta etapa se afianzaron los conocimientos de estructuras GPT, montaje de volúmenes y configuraciones persistentes en fstab, aplicados en entornos reales de administración Linux.

🧩 Resultados y aprendizaje
Este proyecto permitió adquirir habilidades clave en:

Gestión de archivos, enlaces y jerarquía del sistema.
Creación y mantenimiento de particiones y volúmenes.
Montaje automático y configuración de permisos sobre almacenamiento.
Comparativa de sistemas de archivos (Windows/Linux).
Control mediante línea de comandos y entornos gráficos.
🧠 La práctica reforzó la comprensión interna de cómo los sistemas operativos almacenan, organizan y protegen la información, diferenciando el comportamiento entre arquitecturas y sistemas de archivos.

📸 Evidencias visuales
Capturas de terminal mostrando copias, enlaces, estructura de directorios, administración de discos en Windows, configuraciones GPT con fdisk, y comprobaciones de montaje automático.

🚀 Conclusión
Este proyecto consolidó los fundamentos de gestión de archivos y almacenamiento, tanto en Linux como en Windows, destacando la versatilidad de los sistemas de archivos modernos y su integración en entornos virtualizados.

Gracias a esta práctica, se adquirió una base sólida para la administración de discos, mantenimiento del sistema y soporte técnico especializado en configuraciones de múltiples sistemas operativos.
