(function () {
  const topic = new URLSearchParams(location.search).get("topic");
  const service = (window.SERVICES || []).find((item) => item.id === topic);
  const title = document.querySelector("#service-page-title");
  const summary = document.querySelector("#service-page-summary");
  const byline = document.querySelector("#service-page-byline");
  const overviewTitle = document.querySelector("#service-page-overview-title");
  const overviewCopy = document.querySelector("#service-page-overview-copy");
  const topics = document.querySelector("#service-page-topics");
  const article = document.querySelector("#service-page-article");
  const icon = document.querySelector("#service-page-icon");
  let renderVersion = 0;

  function appendInline(target, value) {
    const pattern = /\[([^\]]+)\]\((https:\/\/[^)]+)\)|\*\*([^*]+)\*\*/g;
    let previous = 0;
    for (const match of value.matchAll(pattern)) {
      target.append(document.createTextNode(value.slice(previous, match.index)));
      if (match[1]) {
        const link = document.createElement("a");
        link.href = match[2];
        link.textContent = match[1];
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        target.append(link);
      } else {
        const strong = document.createElement("strong");
        strong.textContent = match[3];
        target.append(strong);
      }
      previous = match.index + match[0].length;
    }
    target.append(document.createTextNode(value.slice(previous)));
  }

  function renderMarkdown(markdown) {
    const fragment = document.createDocumentFragment();
    const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();
      if (!line) { i += 1; continue; }

      const heading = line.match(/^(#{2,3})\s+(.+)$/);
      if (heading) {
        const node = document.createElement(heading[1].length === 2 ? "h2" : "h3");
        appendInline(node, heading[2]);
        fragment.append(node);
        i += 1;
        continue;
      }

      if (line.startsWith("|")) {
        const rows = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          const cells = lines[i].trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
          if (!cells.every((cell) => /^:?-{3,}:?$/.test(cell))) rows.push(cells);
          i += 1;
        }
        if (rows.length) {
          const wrap = document.createElement("div");
          wrap.className = "article-table-scroll";
          const table = document.createElement("table");
          const thead = document.createElement("thead");
          const headerRow = document.createElement("tr");
          rows[0].forEach((cell) => { const th = document.createElement("th"); appendInline(th, cell); headerRow.append(th); });
          thead.append(headerRow);
          table.append(thead);
          const tbody = document.createElement("tbody");
          rows.slice(1).forEach((row) => {
            const tr = document.createElement("tr");
            row.forEach((cell) => { const td = document.createElement("td"); appendInline(td, cell); tr.append(td); });
            tbody.append(tr);
          });
          table.append(tbody);
          wrap.append(table);
          fragment.append(wrap);
        }
        continue;
      }

      const bullet = line.match(/^[-*]\s+(.+)$/);
      const numbered = line.match(/^[0-9०-९]+[.)]\s+(.+)$/);
      if (bullet || numbered) {
        const list = document.createElement(bullet ? "ul" : "ol");
        const pattern = bullet ? /^[-*]\s+(.+)$/ : /^[0-9०-९]+[.)]\s+(.+)$/;
        while (i < lines.length) {
          const next = lines[i].trim().match(pattern);
          if (!next) break;
          const item = document.createElement("li");
          appendInline(item, next[1]);
          list.append(item);
          i += 1;
        }
        fragment.append(list);
        continue;
      }

      if (line.startsWith("> ")) {
        const quote = document.createElement("blockquote");
        while (i < lines.length && lines[i].trim().startsWith("> ")) {
          appendInline(quote, lines[i].trim().slice(2));
          i += 1;
        }
        fragment.append(quote);
        continue;
      }

      const paragraph = [];
      while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|[-*]\s|[0-9०-९]+[.)]\s|\||>\s)/.test(lines[i].trim())) {
        paragraph.push(lines[i].trim());
        i += 1;
      }
      const p = document.createElement("p");
      appendInline(p, paragraph.join(" "));
      fragment.append(p);
    }
    return fragment;
  }

  function renderOverview(language) {
    const copy = service[language];
    title.textContent = copy.title;
    summary.textContent = copy.summary;
    overviewTitle.textContent = language === "ne" ? "यस सेवामा के समावेश छ?" : "What this service covers";
    overviewCopy.textContent = language === "ne"
      ? "तपाईंको लक्षण, रिपोर्ट र स्वास्थ्य इतिहासका आधारमा परामर्शको विषय तय हुन्छ। यस सेवामा निम्न कुराबारे छलफल गर्न सकिन्छ:"
      : "The consultation is guided by your symptoms, reports and medical history. Discussion may include:";
    topics.replaceChildren(...copy.topics.map((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      return li;
    }));
    byline.textContent = service.article
      ? (language === "ne" ? "लेख: डा. सन्तोष घिमिरे" : "Article by Dr. Santosh Ghimire")
      : (language === "ne" ? "सेवाको परिचय · डा. सन्तोष घिमिरे" : "Service overview · Dr. Santosh Ghimire");
    if (service.article && service.updated?.[language]) {
      byline.textContent += language === "ne"
        ? ` · अद्यावधिक: ${service.updated.ne}`
        : ` · Updated ${service.updated.en}`;
    }
    document.title = `${copy.title} | Dr. Santosh Ghimire`;
    document.querySelector('meta[name="description"]').content = copy.summary;
  }

  async function render(language) {
    const version = ++renderVersion;
    if (!service) {
      title.textContent = language === "ne" ? "सेवा फेला परेन" : "Service not found";
      summary.textContent = language === "ne" ? "सबै सेवाहरू हेर्न मुख्य पृष्ठमा फर्कनुहोस्।" : "Return to the home page to view all services.";
      overviewTitle.textContent = "";
      overviewCopy.textContent = "";
      topics.replaceChildren();
      article.replaceChildren();
      icon.hidden = true;
      return;
    }

    renderOverview(language);
    icon.src = service.icon || `assets/service-images/${service.id}.webp`;
    if (!service.article) {
      const section = document.createElement("section");
      const heading = document.createElement("h2");
      const copy = document.createElement("p");
      heading.textContent = language === "ne" ? "परामर्शपछि" : "After the consultation";
      copy.textContent = language === "ne"
        ? "आवश्यक परीक्षण, उपचार वा फलो-अप तपाईंको व्यक्तिगत अवस्थाअनुसार तय गरिन्छ। प्रत्यक्ष परीक्षण वा सम्बन्धित विशेषज्ञकहाँ रेफर गर्न पनि सल्लाह दिइन सक्छ।"
        : "Any tests, treatment or follow-up are decided for your individual situation. An in-person examination or referral may also be recommended.";
      section.append(heading, copy);
      article.replaceChildren(section);
      return;
    }

    article.textContent = language === "ne" ? "लेख खुल्दैछ…" : "Loading article…";
    try {
      const response = await fetch(service.article[language]);
      if (!response.ok) throw new Error(`Article could not load (${response.status})`);
      const markdown = await response.text();
      if (version === renderVersion) article.replaceChildren(renderMarkdown(markdown));
    } catch (error) {
      if (version === renderVersion) article.textContent = language === "ne"
        ? "लेख अहिले खुल्न सकेन। कृपया पछि फेरि प्रयास गर्नुहोस्।"
        : "The article could not load. Please try again later.";
      console.error(error);
    }
  }

  document.addEventListener("DOMContentLoaded", () => render(document.documentElement.lang === "ne" ? "ne" : "en"));
  document.addEventListener("site:languagechange", (event) => {
    if (document.readyState !== "loading") render(event.detail.language);
  });
})();
