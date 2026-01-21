const blue = [ 
  {
    title: "🐰Rabbit Store – JWT Abuse, SSTI & Privilege Escalation",
    description: "Objetivo: Comprometer la máquina y obtener acceso root.",
    tags: ["JWT", "SSTI", "PrivEsc"],
    github: "https://github.com/sergilh/sergilh.github.io/blob/2129b1f79ba2a8a53d4d13e1ee446f68413d7ea7/labs/redteam/3-%20Rabbit%20Store%20-%20JWT%20PrivEsc", 
  }
];

const container = document.getElementById("blue-container");

blue.forEach(b => {
  const card = document.createElement("article");
  card.className = "blue-card";

  card.innerHTML = `
    <h3>${b.title}</h3>
    <p>${b.description}</p>

    <div class="tags">
      ${b.tags.map(tag => `<span>${tag}</span>`).join("")}
    </div>

    <div class="links">
      ${b.github ? `<a href="${b.github}" target="_blank">GitHub</a>` : ""}
    </div>
  `;

  container.appendChild(card);
});
