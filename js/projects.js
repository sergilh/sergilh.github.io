const projects = [
  {
    title: "Active Directory Lab",
    description: "Explotación de un entorno AD vulnerable con enumeración, abuso de Kerberos y escalada de privilegios.",
    tags: ["Windows", "AD", "Pentesting"],
    github: "https://github.com/sergilh/ad-lab",
    writeup: "#"
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
