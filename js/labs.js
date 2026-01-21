const labs = [
  {
    title: "Google Cybersecurity Labs",
    description: "Laboratorios y actividades de redacción profesional documentadas relacionadas con la ciberseguridad.",
    tags: ["Alerts", "Reports", "Linux","SQL"],
    github: "https://github.com/sergilh/sergilh.github.io/tree/ab25f545e0e36ea8f387de03f0c45dc07b33e939/labs/Google%20Cybersecurity", 
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
