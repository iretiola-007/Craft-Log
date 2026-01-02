document.getElementById("entry-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const entry = {
    date: new Date().toISOString().split("T")[0],
    project: document.getElementById("project").value,
    whatIDid: document.getElementById("what-i-did").value,
    whatILearned: document.getElementById("what-i-learned").value,
    nextSteps: document.getElementById("next-steps").value,
    mood: document.getElementById("mood").value,
};

  const entries = JSON.parse(localStorage.getItem("devDiary") || "[]");
  entries.unshift(entry);
  localStorage.setItem("devDiary", JSON.stringify(entries));
  this.reset();
  renderEntries();
});

function renderEntries() {
  const entries = JSON.parse(localStorage.getItem("devDiary") || "[]");
  const container = document.getElementById("entries");
  container.innerHTML = "";

  entries.forEach((entry) => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <strong>${entry.date} – ${entry.project}</strong><br/>
      <em>Mood: ${entry.mood}</em><br/><br/>
      <strong>What I did:</strong> ${entry.whatIDid}<br/>
      <strong>What I learned:</strong> ${entry.whatILearned}<br/>
      <strong>Next steps:</strong> ${entry.nextSteps}
    `;
    container.appendChild(div);
});
}

renderEntries();


