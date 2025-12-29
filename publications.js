// publications.js
(function () {
  const pubs = [
    {
      year: 2025,
      title: "Disentangling the relationship between glucose, insulin and brain health: A UK Biobank study",
      journal: "Diabetes, Obesity & Metabolism",
      doi: "10.1111/dom.70353",
      authors: "Mason AC, Fatih N, Sofat R, … Garfield V."
    },
    {
      year: 2024,
      title: "Use of sodium valproate and other antiseizure drug treatments in England and Wales…",
      journal: "BMJ Medicine",
      doi: "10.1136/bmjmed-2023-000760",
      authors: "Dale CE, Takhar R, … Sofat R."
    },
    {
      year: 2023,
      title: "Prevalence of chronic pain/analgesic use in children & long-term outcomes…",
      journal: "The Lancet Regional Health – Europe",
      doi: "10.1016/j.lanepe.2023.100763",
      authors: "Lambarth A, Katsoulis M, … Takhar R, Dale C, … Sofat R."
    },
    {
      year: 2023,
      title: "The impact of the COVID-19 pandemic on cardiovascular disease prevention and management",
      journal: "Nature Medicine",
      doi: "10.1038/s41591-022-02158-7",
      authors: "Dale C, Takhar R, … Sofat R."
    }
  ];

  function pubCardHTML(p) {
    const url = `https://doi.org/${encodeURIComponent(p.doi)}`;
    const aria = `Open publication: ${p.title}`;

    return `
      <a class="pub-card" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${escapeAttr(aria)}">
        <div class="pub-top">
          <div class="pub-date">${p.year}</div>
          <div class="pub-cta">READ</div>
        </div>
        <div class="pub-title">${escapeHTML(p.title)}</div>
        <div class="pub-journal">${escapeHTML(p.journal)}</div>
        <div class="pub-authors">${escapeHTML(p.authors)}</div>
      </a>
    `.trim();
  }

  // minimal escaping helpers
  function escapeHTML(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }
  function escapeAttr(s) { return escapeHTML(s); }

  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("pubsGrid");
    if (!grid) return;

    // optional: show newest first
    pubs.sort((a, b) => b.year - a.year);

    grid.innerHTML = pubs.map(pubCardHTML).join("\n");
  });
})();