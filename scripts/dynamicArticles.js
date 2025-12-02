// dynamicArticles.js

// List of all articles site-wide: title, description, URL
const allArticles = [
  {
    title: "The Arrival of the Spaniards",
    description: "A firsthand account of the first Spanish contact in Butuan, 1521.",
    url: "thedailypeenoiseblog/pages/spanish.html#arrival-of-spaniards"
  },
  {
    title: "The Galleon Trade",
    description: "How Manila became a global trade hub through the Manila-Acapulco galleon.",
    url: "thedailypeenoiseblog/pages/spanish.html#galleon-trade"
  },
  {
    title: "The Propaganda Movement",
    description: "Filipino expatriates in Madrid advocate for reform and equality.",
    url: "thedailypeenoiseblog/pages/spanish.html#propaganda-movement"
  },
  {
    title: "The Philippine Revolution",
    description: "The defiant act that ignited the war for independence in 1896.",
    url: "thedailypeenoiseblog/pages/spanish.html#philippine-revolution"
  },
  {
    title: "Education and Government Reforms",
    description: "The American period's push for public education and political change.",
    url: "thedailypeenoiseblog/pages/american.html#education-government-reforms"
  },
  {
    title: "Philippine-American War",
    description: "The struggle against American colonization and quest for sovereignty.",
    url: "thedailypeenoiseblog/pages/american.html#philippine-american-war"
  },
  {
    title: "Nationalism and Independence Movement",
    description: "The rise of Filipino nationalism under American rule.",
    url: "thedailypeenoiseblog/pages/american.html#nationalism-independence"
  },
  {
    title: "Life Under Japanese Rule",
    description: "Surviving the hardships and oppression of Japanese occupation.",
    url: "thedailypeenoiseblog/pages/japanese.html#life-under-japanese-rule"
  },
  {
    title: "Guerrilla Movements",
    description: "Filipino resistance fighters wage war in the shadows.",
    url: "thedailypeenoiseblog/pages/japanese.html#guerrilla-movements"
  },
  {
    title: "Liberation of the Philippines",
    description: "The Allied campaign that freed the islands from Japanese control.",
    url: "thedailypeenoiseblog/pages/japanese.html#liberation"
  },
  {
    title: "Road to Philippine Independence",
    description: "The political journey from colonial rule to self-governance.",
    url: "thedailypeenoiseblog/pages/independence.html#road-to-independence"
  },
  {
    title: "Commonwealth Period",
    description: "Preparing the nation for freedom amidst looming war.",
    url: "thedailypeenoiseblog/pages/independence.html#commonwealth-period"
  },
  {
    title: "Post WWII Recovery",
    description: "Rebuilding a nation after the devastation of war.",
    url: "thedailypeenoiseblog/pages/independence.html#post-wwii-recovery"
  },
  // Add more articles as needed
];

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Main function to populate dynamic articles
function loadDynamicArticles(containerId = 'articles-list', numberToShow = 5) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear existing content
  container.innerHTML = '';

  const shuffledArticles = shuffleArray([...allArticles]).slice(0, numberToShow);

  shuffledArticles.forEach((article, idx) => {
    const li = document.createElement('li');
    li.classList.add('dynamic-article-item');
    li.innerHTML = `
      <strong><a href="${article.url}">${article.title}</a></strong><br>
      <span class="dynamic-article-description">${article.description}</span>
    `;
    container.appendChild(li);

    // Add <hr> except after last item
    if (idx !== shuffledArticles.length - 1) {
      const hr = document.createElement('hr');
      container.appendChild(hr);
    }
  });
}

// Run this on DOMContentLoaded to ensure container exists
document.addEventListener('DOMContentLoaded', () => {
  loadDynamicArticles();
});

