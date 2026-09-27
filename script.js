const analyzeBtn = document.getElementById("analyzeBtn");

function getVehicleCount(id) {
  const value = Number(document.getElementById(id).value);
  return Number.isFinite(value) && value >= 0 ? value : 0;
}

function classify(count, maxCount) {
  if (maxCount === 0) return "low";
  const ratio = count / maxCount;
  if (ratio >= 0.66) return "high";
  if (ratio >= 0.33) return "medium";
  return "low";
}

function greenTime(count, maxCount) {
  if (maxCount === 0) return 15;
  return Math.round(15 + (count / maxCount) * 45);
}

function analyzeTraffic() {
  const counts = [1, 2, 3, 4].map(n => getVehicleCount(`lane${n}`));
  const maxCount = Math.max(...counts);
  const ambulance = document.getElementById("ambulance").checked;

  const results = document.getElementById("results");
  results.innerHTML = "";

  counts.forEach((count, index) => {
    const level = classify(count, maxCount);
    const time = greenTime(count, maxCount);
    results.innerHTML += `
      <div class="result ${level}">
        <strong>Lane ${index + 1}</strong>
        ${count} vehicles<br>
        Density: ${level.toUpperCase()}<br>
        Suggested green: ${time}s
      </div>`;
  });

  let selectedLane = counts.indexOf(maxCount) + 1;
  let selectedTime = greenTime(maxCount, maxCount);
  let reason = `Lane ${selectedLane} has the highest traffic density, so it receives more green time.`;

  if (ambulance) {
    selectedLane = 1;
    selectedTime = 60;
    reason = "Ambulance detected in Lane 1. Emergency priority is activated.";
  }

  document.getElementById("activeLane").textContent = `Lane ${selectedLane} → GREEN`;
  document.getElementById("timer").textContent = `${selectedTime} sec`;
  document.getElementById("reason").textContent = reason;

  document.querySelector(".light.red").classList.remove("on");
  document.querySelector(".light.yellow").classList.remove("on");
  document.querySelector(".light.green").classList.add("on");
}

analyzeBtn.addEventListener("click", analyzeTraffic);
analyzeTraffic();
