const projects = [
  {
    title: "Proyecto Académico sobre virtualización y gestión de SO",
    description: "Instalación, configuración y administración de diferentes sistemas operativos dentro de entornos virtualizados.",
    tags: ["Windows", "Ubuntu", "Linux","VirtualBox"],
    github: "https://github.com/sergilh/sergilh.github.io/tree/9b392d16b11258654e9fa3316991c327a800e87c/projects/1-Virtualizaci%C3%B3n-SO-UOC",
  },
  {
    title: "Recon Script",
    description: "Script en Bash para automatizar escaneo inicial y enumeración de servicios.",
    tags: ["Linux", "Bash", "Recon"],
    github: "https://github.com/sergilh/recon-script",
    writeup: null
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
      ${p.writeup ? `<a href="${p.writeup}">Writeup</a>` : ""}
    </div>
  `;

  container.appendChild(card);
});
