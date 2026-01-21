const labs = [
  {
    title: "Proyecto Académico - Virtualización y gestión de SO",
    description: "Instalación, configuración y administración de diferentes sistemas operativos dentro de entornos virtualizados.",
    tags: ["Windows", "Ubuntu", "Linux","VirtualBox"],
    github: "https://github.com/sergilh/sergilh.github.io/tree/9b392d16b11258654e9fa3316991c327a800e87c/projects/1-Virtualizaci%C3%B3n-SO-UOC", 
  },
  {
    title: "Proyecto Académico - Configuración del Software Base en SO",
    description: "Administración de usuarios, grupos y configuraciones del sistema en entornos Windows y Linux",
    tags: ["Linux", "SysAdmin", "Users"],
    github: "https://github.com/sergilh/sergilh.github.io/tree/f2a7f31a34a4c3f566cda9bad6f33038412bd3fb/projects/2-Configuraci%C3%B3n-SO-UOC",
  },
  {
    title: "Proyecto Académico - Servicios, Procesos, Conexión a Red y Optimización del Sistema Operativo",
    description: "Análisis, gestión y optimización de los procesos y servicios del sistema operativo y configuración correcta de la conectividad de red entre máquinas virtuales",
    tags: ["Windows", "Ubuntu", "Linux","VirtualBox"],
    github: "https://github.com/sergilh/sergilh.github.io/tree/46f24ce45486b1fb6f85d2a7c4eee3996ff23748/projects/3-Optimizaci%C3%B3n-SO-UOC", 
  },
  {
    title: "Proyecto Académico - Gestión de Archivos y Almacenamiento",
    description: "Comprensión del funcionamiento de los sistemas de archivos, las particiones, y los métodos de gestión de almacenamiento en diferentes sistemas operativos",
    tags: ["Windows", "Ubuntu", "Linux","VirtualBox"],
    github: "https://github.com/sergilh/sergilh.github.io/tree/46f24ce45486b1fb6f85d2a7c4eee3996ff23748/projects/4-Gesti%C3%B3n-Archivos-Almacen.-UOC", 
  }
];

const container = document.getElementById("labs-container");

labs.forEach(l => {
  const card = document.createElement("article");
  card.className = "labs-card";

  card.innerHTML = `
    <h3>${l.title}</h3>
    <p>${l.description}</p>

    <div class="tags">
      ${l.tags.map(tag => `<span>${tag}</span>`).join("")}
    </div>

    <div class="links">
      ${l.github ? `<a href="${l.github}" target="_blank">GitHub</a>` : ""}
    </div>
  `;

  container.appendChild(card);
});
