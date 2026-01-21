const projects = [
  {
    title: "Proyecto Académico - Virtualización y gestión de SO",
    description: "Instalación, configuración y administración de diferentes sistemas operativos dentro de entornos virtualizados.",
    tags: ["Windows", "Ubuntu", "Linux","VirtualBox"],
    github: "https://github.com/sergilh/sergilh.github.io/tree/9b392d16b11258654e9fa3316991c327a800e87c/projects/1-Virtualizaci%C3%B3n-SO-UOC", 
  },
  {
    title: "Proyecto académico - Configuración del Software Base en SO",
    description: "Administración de usuarios, grupos y configuraciones del sistema en entornos Windows y Linux",
    tags: ["Linux", "SysAdmin", "Users"],
    github: "https://github.com/sergilh/sergilh.github.io/tree/f2a7f31a34a4c3f566cda9bad6f33038412bd3fb/projects/2-Configuraci%C3%B3n-SO-UOC",
  }
];

const container = document.getElementById("projects-container");

projects.forEach(p => {
  const card = document.createElement("article");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.description}</p>

    <div class="tags">
      ${p.tags.map(tag => `<span>${tag}</span>`).join("")}
    </div>

    <div class="links">
      ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ""}
    </div>
  `;

  container.appendChild(card);
});
