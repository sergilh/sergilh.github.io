const labs = [ 
  {
    title: "Google Cybersecurity Labs",
    description: "Laboratorios y actividades de redacción profesional documentadas relacionadas con la ciberseguridad.",
    tags: ["Alerts", "Reports", "Linux","SQL"],
    github: "https://github.com/sergilh/sergilh.github.io/tree/ab25f545e0e36ea8f387de03f0c45dc07b33e939/labs/Google%20Cybersecurity", 
  },
  {
    title: "🔐 Challenge Final – File Upload & Node.js RCE",
    description: "Objetivo: Comprometer la máquina objetivo obteniendo una shell y localizar la flag final",
    tags: ["Node.js", "RCE", "FileUpload"],
    github: "https://github.com/sergilh/sergilh.github.io/blob/2129b1f79ba2a8a53d4d13e1ee446f68413d7ea7/labs/redteam/1-%20FileUpload%20Node.js%20-%20RCE.txt",
  },
  {
    title: "🧪Pickle Rick - CI PrivEsc",
    description: "Objetivo: Ayudar a Rick obteniendo los tres ingredientes ocultos en el sistema.",
    tags: ["Enum", "Command Injection", "PrivEsc"],
    github: "https://github.com/sergilh/sergilh.github.io/blob/2129b1f79ba2a8a53d4d13e1ee446f68413d7ea7/labs/redteam/2-%20Pickle%20Rick%20-%20CI%20PrivEsc.txt", 
  },
  {
    title: "🐰Rabbit Store – JWT Abuse, SSTI & Privilege Escalation",
    description: "Objetivo: Comprometer la máquina y obtener acceso root.",
    tags: ["JWT", "SSTI", "PrivEsc"],
    github: "https://github.com/sergilh/sergilh.github.io/blob/2129b1f79ba2a8a53d4d13e1ee446f68413d7ea7/labs/redteam/3-%20Rabbit%20Store%20-%20JWT%20PrivEsc", 
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
