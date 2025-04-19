document.getElementById("listDaraBtn").addEventListener("click", loadListDara);
document.getElementById("wtfDaraBtn").addEventListener("click", loadWtfDara);

function loadListDara() {
  fetch("name.txt")
    .then(response => response.text())
    .then(data => {
      const lines = data.split("\n");
      let content = '';
      lines.forEach(line => {
        const parts = line.split("\n");
        if (parts.length >= 3) {
          const name = parts[0].trim();
          const fbLink = parts[1].trim();
          const imgLink = parts[2].trim();
          content += `
            <div class="card">
              <img src="${imgLink}" alt="${name}">
              <h3>${name}</h3>
              <a href="${fbLink}" target="_blank">Facebook</a>
            </div>
          `;
        }
      });
      document.getElementById("content").innerHTML = content;
    })
    .catch(error => console.error("Error loading the name.txt file:", error));
}

function loadWtfDara() {
  fetch("wtf_dara.txt")
    .then(response => response.text())
    .then(data => {
      const lines = data.split("\n");
      let content = '';
      lines.forEach(line => {
        const parts = line.split("\n");
        if (parts.length >= 3) {
          const name = parts[0].trim();
          const fbLink = parts[1].trim();
          const imgLink = parts[2].trim();
          content += `
            <div class="card">
              <img src="${imgLink}" alt="${name}">
              <h3>${name}</h3>
              <a href="${fbLink}" target="_blank">Facebook</a>
            </div>
          `;
        }
      });
      document.getElementById("content").innerHTML = content;
    })
    .catch(error => console.error("Error loading the wtf_dara.txt file:", error));
}