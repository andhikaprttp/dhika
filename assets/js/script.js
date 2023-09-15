// Fungsi untuk mengambil data repositori GitHub
async function fetchGitHubRepo() {
  try {
    const response = await fetch(
      "https://api.github.com/users/andhikaprttp/repos"
    );
    const data = await response.json();

    // Membuat daftar repositori
    const repoList = document.createElement("ul");
    data.forEach((repo) => {
      const repoItem = document.createElement("li");
      repoItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      repoList.appendChild(repoItem);
    });
    const githubRepo = document.getElementById("github-repo");
    githubRepo.innerHTML = "";
    githubRepo.appendChild(repoList);
  } catch (error) {
    console.error("Error fetching GitHub repo:", error);
    const githubRepo = document.getElementById("github-repo");
    githubRepo.innerHTML = "<p>Gagal mengambil data repositori.</p>";
  }
}

// Memanggil fungsi untuk mengambil data repositori GitHub
fetchGitHubRepo();

// Fungsi untuk membuka modal "About"
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Fungsi untuk menutup modal "About"
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Fungsi untuk menutup modal jika user mengklik di luar myModal
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
