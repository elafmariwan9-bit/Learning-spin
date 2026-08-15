/* =========================================================
   LEARNING MISSION
   Main JavaScript
   ========================================================= */


/* =========================================================
   TOPIC LIBRARY
   ========================================================= */

const topics = [

  // SCIENCE
  {
    title: "Why do octopuses have three hearts?",
    category: "Science",
    difficulty: "Medium",
    description: "Discover the fascinating cardiovascular system of one of the ocean's most intelligent animals."
  },
  {
    title: "Why is the sky blue?",
    category: "Science",
    difficulty: "Easy",
    description: "Explore how sunlight interacts with Earth's atmosphere."
  },
  {
    title: "How does gravity actually work?",
    category: "Science",
    difficulty: "Hard",
    description: "Explore the difference between Newton's description of gravity and Einstein's."
  },
  {
    title: "Why do we get hiccups?",
    category: "Science",
    difficulty: "Easy",
    description: "Investigate the strange involuntary reflex behind hiccups."
  },
  {
    title: "How do vaccines train the immune system?",
    category: "Science",
    difficulty: "Medium",
    description: "Understand how the immune system remembers pathogens."
  },
  {
    title: "What exactly is dark matter?",
    category: "Science",
    difficulty: "Hard",
    description: "Explore the mysterious matter that seems to make up much of the universe."
  },

  // MEDICINE
  {
    title: "Why does fever happen?",
    category: "Medicine",
    difficulty: "Easy",
    description: "Learn why the body intentionally raises its temperature during infection."
  },
  {
    title: "How does anesthesia make you unconscious?",
    category: "Medicine",
    difficulty: "Hard",
    description: "Explore what scientists know about general anesthesia and consciousness."
  },
  {
    title: "Why do antibiotics not work against viruses?",
    category: "Medicine",
    difficulty: "Easy",
    description: "Understand the fundamental biological differences between bacteria and viruses."
  },
  {
    title: "How does the placebo effect work?",
    category: "Medicine",
    difficulty: "Medium",
    description: "Explore how expectations can influence symptoms and perception."
  },
  {
    title: "Why does the body develop a fever?",
    category: "Medicine",
    difficulty: "Easy",
    description: "Explore the biological purpose and regulation of fever."
  },

  // PSYCHOLOGY
  {
    title: "Why do people procrastinate?",
    category: "Psychology",
    difficulty: "Medium",
    description: "Explore the psychology behind avoiding tasks even when we know they matter."
  },
  {
    title: "Why do we dream?",
    category: "Psychology",
    difficulty: "Medium",
    description: "Compare major theories about why dreams occur."
  },
  {
    title: "Why do embarrassing memories stay with us?",
    category: "Psychology",
    difficulty: "Easy",
    description: "Explore emotion, memory, and why awkward moments can feel unforgettable."
  },
  {
    title: "What is confirmation bias?",
    category: "Psychology",
    difficulty: "Easy",
    description: "Learn how our expectations can influence the information we notice."
  },
  {
    title: "Can music change our emotions?",
    category: "Psychology",
    difficulty: "Medium",
    description: "Investigate the relationship between music, memory, and emotion."
  },

  // HISTORY
  {
    title: "Why did the Roman Empire fall?",
    category: "History",
    difficulty: "Medium",
    description: "Examine the political, economic, military, and social factors behind Rome's decline."
  },
  {
    title: "How did the printing press change the world?",
    category: "History",
    difficulty: "Easy",
    description: "Discover how printing transformed knowledge, religion, and society."
  },
  {
    title: "What caused the Black Death?",
    category: "History",
    difficulty: "Medium",
    description: "Explore the disease and the enormous social changes it triggered."
  },
  {
    title: "Why was the Library of Alexandria important?",
    category: "History",
    difficulty: "Easy",
    description: "Separate historical evidence from the myths surrounding the ancient library."
  },
  {
    title: "How did the Silk Road shape civilizations?",
    category: "History",
    difficulty: "Medium",
    description: "Explore the movement of goods, ideas, technologies, and cultures."
  },

  // PHILOSOPHY
  {
    title: "What did Plato mean by the Allegory of the Cave?",
    category: "Philosophy",
    difficulty: "Medium",
    description: "Explore Plato's famous thought experiment about knowledge and reality."
  },
  {
    title: "What makes a life meaningful?",
    category: "Philosophy",
    difficulty: "Hard",
    description: "Compare different philosophical ideas about meaning and purpose."
  },
  {
    title: "Do humans have free will?",
    category: "Philosophy",
    difficulty: "Hard",
    description: "Explore the debate between free will, determinism, and compatibilism."
  },
  {
    title: "What is the Ship of Theseus?",
    category: "Philosophy",
    difficulty: "Medium",
    description: "Investigate the ancient thought experiment about identity and change."
  },

  // TECHNOLOGY
  {
    title: "How does artificial intelligence learn?",
    category: "Technology",
    difficulty: "Medium",
    description: "Understand the basic idea behind machine learning and neural networks."
  },
  {
    title: "How does the internet actually work?",
    category: "Technology",
    difficulty: "Medium",
    description: "Follow the journey of information from your device to a distant server."
  },
  {
    title: "What is quantum computing?",
    category: "Technology",
    difficulty: "Hard",
    description: "Explore how quantum computers differ from ordinary computers."
  },
  {
    title: "How does GPS know where you are?",
    category: "Technology",
    difficulty: "Easy",
    description: "Discover how satellites and timing allow devices to calculate location."
  },
  {
    title: "How does facial recognition work?",
    category: "Technology",
    difficulty: "Medium",
    description: "Explore how computers identify patterns in human faces."
  },

  // NATURE
  {
    title: "Why do leaves change color?",
    category: "Nature",
    difficulty: "Easy",
    description: "Discover what happens inside leaves when seasons change."
  },
  {
    title: "Why do cats purr?",
    category: "Nature",
    difficulty: "Easy",
    description: "Explore the different reasons cats may produce their famous vibrating sound."
  },
  {
    title: "How do birds know where to migrate?",
    category: "Nature",
    difficulty: "Medium",
    description: "Investigate the remarkable navigation abilities of migratory birds."
  },
  {
    title: "Why are some animals nocturnal?",
    category: "Nature",
    difficulty: "Easy",
    description: "Explore the evolutionary advantages of being active at night."
  },

  // LITERATURE
  {
    title: "Why do humans love stories?",
    category: "Literature",
    difficulty: "Medium",
    description: "Explore storytelling through psychology, culture, and human connection."
  },
  {
    title: "What makes a character memorable?",
    category: "Literature",
    difficulty: "Medium",
    description: "Analyze the elements that make fictional characters stay with us."
  },
  {
    title: "Why do metaphors make writing powerful?",
    category: "Literature",
    difficulty: "Easy",
    description: "Explore how comparing one thing to another can change the way we think."
  },

  // SOCIETY
  {
    title: "Why do languages change?",
    category: "Society",
    difficulty: "Easy",
    description: "Discover why pronunciation, vocabulary, and grammar evolve over time."
  },
  {
    title: "Why do humans create traditions?",
    category: "Society",
    difficulty: "Medium",
    description: "Explore the social and psychological roles of traditions."
  },
  {
    title: "How does culture shape personality?",
    category: "Society",
    difficulty: "Hard",
    description: "Explore the complicated relationship between culture and individual behavior."
  }

];


/* =========================================================
   STATE
   ========================================================= */

let currentTopic = topics[0];

let researchSeconds = 15 * 60;
let presentationSeconds = 5 * 60;

let researchInterval = null;
let presentationInterval = null;

let researchPaused = false;
let presentationPaused = false;

let sessionStartTime = null;
let researchElapsed = 0;
let presentationElapsed = 0;

let sessionNotes = "";

const STORAGE_KEY = "learningMissionData";


/* =========================================================
   STORAGE
   ========================================================= */

function getData() {

  const defaultData = {
    history: [],
    favorites: [],
    streak: 0,
    lastDate: null,
    theme: "light"
  };

  try {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return defaultData;
    }

    return {
      ...defaultData,
      ...JSON.parse(saved)
    };

  } catch (error) {

    console.error("Could not read saved data:", error);

    return defaultData;
  }
}


function saveData(data) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active-page");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active-page");
  }

  document.querySelectorAll(".nav-btn").forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.page === pageId
    );

  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageId === "explore") {
    renderExplore();
  }

  if (pageId === "history") {
    renderHistory();
  }

  if (pageId === "progress") {
    renderProgress();
  }
}


/* =========================================================
   TOPIC GENERATOR
   ========================================================= */

function generateTopic() {

  const category =
    document.getElementById("categorySelect").value;

  const difficulty =
    document.getElementById("difficultySelect").value;

  let available = topics.filter(topic => {

    const categoryMatch =
      category === "All" ||
      topic.category === category;

    const difficultyMatch =
      difficulty === "All" ||
      topic.difficulty === difficulty;

    return categoryMatch && difficultyMatch;

  });

  if (available.length === 0) {
    available = topics;
  }

  const randomIndex =
    Math.floor(Math.random() * available.length);

  currentTopic = available[randomIndex];

  updateTopicCard();

  showToast("A new mission awaits ✦");
}


function updateTopicCard() {

  document.getElementById("topicTitle").textContent =
    currentTopic.title;

  document.getElementById("topicCategory").textContent =
    currentTopic.category.toUpperCase();

  document.getElementById("topicDescription").textContent =
    currentTopic.description;

  document.getElementById("topicDifficulty").textContent =
    `● ${currentTopic.difficulty}`;

  const topicIndex = topics.indexOf(currentTopic) + 1;

  document.getElementById("topicNumber").textContent =
    String(topicIndex).padStart(2, "0");

  updateFavoriteIcon();
}


function updateFavoriteIcon() {

  const data = getData();

  const isFavorite =
    data.favorites.includes(currentTopic.title);

  document.getElementById("favoriteButton").textContent =
    isFavorite ? "♥" : "♡";
}


function toggleFavoriteCurrentTopic() {

  const data = getData();

  const index =
    data.favorites.indexOf(currentTopic.title);

  if (index === -1) {

    data.favorites.push(currentTopic.title);

    showToast("Added to favorites ♥");

  } else {

    data.favorites.splice(index, 1);

    showToast("Removed from favorites");

  }

  saveData(data);

  updateFavoriteIcon();
}


/* =========================================================
   RESEARCH MODE
   ========================================================= */

function startResearch() {

  clearInterval(researchInterval);
  clearInterval(presentationInterval);

  researchSeconds = 15 * 60;
  researchElapsed = 0;
  researchPaused = false;
  sessionStartTime = Date.now();

  document.getElementById("researchTitle").textContent =
    currentTopic.title;

  document.getElementById("researchNotes").value =
    "";

  document.getElementById("researchTimer").textContent =
    "15:00";

  document.getElementById("researchProgress").style.width =
    "0%";

  document.getElementById("researchPauseButton").textContent =
    "Pause";

  showPage("research");

  researchInterval = setInterval(
    tickResearch,
    1000
  );

  autoSaveNotes();
}


function tickResearch() {

  if (researchPaused) {
    return;
  }

  researchSeconds--;
  researchElapsed++;

  updateResearchDisplay();

  if (researchSeconds <= 0) {

    clearInterval(researchInterval);

    researchSeconds = 0;

    updateResearchDisplay();

    showToast("Research time is over! ✦");

    setTimeout(() => {

      startPresentation();

    }, 1000);
  }
}


function updateResearchDisplay() {

  document.getElementById("researchTimer").textContent =
    formatTime(researchSeconds);

  const total = 15 * 60;

  const progress =
    ((total - researchSeconds) / total) * 100;

  document.getElementById("researchProgress").style.width =
    `${progress}%`;

  const timer =
    document.getElementById("researchTimer");

  if (researchSeconds <= 60) {

    timer.style.color = "var(--danger)";

  } else if (researchSeconds <= 300) {

    timer.style.color = "var(--gold)";

  } else {

    timer.style.color = "var(--text)";
  }
}


function toggleResearchPause() {

  researchPaused = !researchPaused;

  document.getElementById("researchPauseButton").textContent =
    researchPaused ? "Resume" : "Pause";
}


function finishResearch() {

  clearInterval(researchInterval);

  sessionNotes =
    document.getElementById("researchNotes").value;

  const shouldContinue =
    confirm(
      "Start your 5-minute presentation now?"
    );

  if (shouldContinue) {

    startPresentation();

  } else {

    researchInterval =
      setInterval(tickResearch, 1000);
  }
}


/* =========================================================
   AUTO-SAVE NOTES
   ========================================================= */

let saveTimeout = null;

function autoSaveNotes() {

  const textarea =
    document.getElementById("researchNotes");

  textarea.oninput = function () {

    clearTimeout(saveTimeout);

    document.getElementById("saveStatus").textContent =
      "Saving...";

    saveTimeout = setTimeout(() => {

      sessionNotes = textarea.value;

      document.getElementById("saveStatus").textContent =
        "Saved ✓";

    }, 500);
  };
}


/* =========================================================
   PRESENTATION MODE
   ========================================================= */

function startPresentation() {

  clearInterval(researchInterval);
  clearInterval(presentationInterval);

  sessionNotes =
    document.getElementById("researchNotes").value;

  presentationSeconds = 5 * 60;
  presentationElapsed = 0;
  presentationPaused = false;

  document.getElementById("presentationTitle").textContent =
    currentTopic.title;

  document.getElementById("presentationTimer").textContent =
    "05:00";

  document.getElementById("presentationProgress").style.width =
    "0%";

  document.getElementById("presentationPauseButton").textContent =
    "Pause";

  showPage("presentation");

  presentationInterval =
    setInterval(
      tickPresentation,
      1000
    );
}


function tickPresentation() {

  if (presentationPaused) {
    return;
  }

  presentationSeconds--;
  presentationElapsed++;

  updatePresentationDisplay();

  if (presentationSeconds <= 0) {

    clearInterval(presentationInterval);

    presentationSeconds = 0;

    updatePresentationDisplay();

    showToast("Presentation complete! 🎤");

    setTimeout(
      openReflection,
      900
    );
  }
}


function updatePresentationDisplay() {

  const timer =
    document.getElementById("presentationTimer");

  timer.textContent =
    formatTime(presentationSeconds);

  const total = 5 * 60;

  const progress =
    ((total - presentationSeconds) / total) * 100;

  document.getElementById("presentationProgress")
    .style.width = `${progress}%`;

  if (presentationSeconds <= 60) {

    timer.style.color = "var(--danger)";

  } else {

    timer.style.color = "var(--text)";
  }
}


function togglePresentationPause() {

  presentationPaused =
    !presentationPaused;

  document.getElementById(
    "presentationPauseButton"
  ).textContent =
    presentationPaused
      ? "Resume"
      : "Pause";
}


function finishPresentation() {

  clearInterval(presentationInterval);

  const finished =
    confirm(
      "Are you finished with your presentation?"
    );

  if (finished) {

    openReflection();

  } else {

    presentationInterval =
      setInterval(
        tickPresentation,
        1000
      );
  }
}


/* =========================================================
   REFLECTION
   ========================================================= */

function openReflection() {

  clearInterval(researchInterval);
  clearInterval(presentationInterval);

  showPage("reflection");
}


function completeSession() {

  const learned =
    document.getElementById(
      "reflectionLearned"
    ).value.trim();

  const surprised =
    document.getElementById(
      "reflectionSurprised"
    ).value.trim();

  const hard =
    document.getElementById(
      "reflectionHard"
    ).value.trim();

  const sentence =
    document.getElementById(
      "reflectionSentence"
    ).value.trim();

  if (!learned || !sentence) {

    showToast(
      "Complete at least the first and final reflection."
    );

    return;
  }

  const data = getData();

  const session = {

    id: Date.now(),

    topic: currentTopic.title,

    category: currentTopic.category,

    difficulty: currentTopic.difficulty,

    date: new Date().toISOString(),

    researchSeconds: researchElapsed,

    presentationSeconds: presentationElapsed,

    notes: sessionNotes,

    reflection: {
      learned,
      surprised,
      hard,
      sentence
    },

    score: calculateScore()

  };

  data.history.unshift(session);

  updateStreak(data);

  saveData(data);

  document.getElementById("completionTopic")
    .textContent =
    `You explored "${currentTopic.title}" today.`;

  document.getElementById("completionScore")
    .textContent =
    `${session.score}%`;

  document.getElementById("completionResearch")
    .textContent =
    formatTime(researchElapsed);

  document.getElementById("completionPresentation")
    .textContent =
    formatTime(presentationElapsed);

  showPage("complete");

  showToast("Mission saved ✦");
}


function calculateScore() {

  let score = 0;

  if (researchElapsed >= 60) {
    score += 25;
  }

  if (presentationElapsed >= 60) {
    score += 25;
  }

  if (
    document.getElementById("reflectionLearned").value.trim()
  ) {
    score += 20;
  }

  if (
    document.getElementById("reflectionSurprised").value.trim()
  ) {
    score += 10;
  }

  if (
    document.getElementById("reflectionHard").value.trim()
  ) {
    score += 10;
  }

  if (
    document.getElementById("reflectionSentence").value.trim()
  ) {
    score += 10;
  }

  return score;
}


/* =========================================================
   HISTORY
   ========================================================= */

function renderHistory() {

  const container =
    document.getElementById("historyContainer");

  const data = getData();

  if (!data.history.length) {

    container.innerHTML = `
      <div class="history-empty">
        <div class="completion-symbol">✦</div>
        <h2>Your learning journey starts here.</h2>
        <p>
          Complete your first mission and it will appear here.
        </p>
      </div>
    `;

    return;
  }

  container.innerHTML =
    data.history.map(session => {

      const date =
        new Date(session.date)
          .toLocaleDateString(
            undefined,
            {
              month: "short",
              day: "numeric",
              year: "numeric"
            }
          );

      return `
        <div class="history-item">

          <div>

            <span class="session-label">
              ${escapeHTML(session.category)}
              •
              ${escapeHTML(session.difficulty)}
            </span>

            <h3>
              ${escapeHTML(session.topic)}
            </h3>

            <div class="history-meta">
              ${date}
              ·
              Research ${formatTime(session.researchSeconds)}
              ·
              Presentation ${formatTime(session.presentationSeconds)}
            </div>

          </div>

          <div class="history-score">
            ${session.score}%
          </div>

        </div>
      `;

    }).join("");
}


/* =========================================================
   EXPLORE
   ========================================================= */

function renderExplore() {

  const category =
    document.getElementById("exploreCategory").value;

  const difficulty =
    document.getElementById("exploreDifficulty").value;

  const filtered =
    topics.filter(topic => {

      const categoryMatch =
        category === "All" ||
        topic.category === category;

      const difficultyMatch =
        difficulty === "All" ||
        topic.difficulty === difficulty;

      return categoryMatch && difficultyMatch;
    });

  const grid =
    document.getElementById("exploreGrid");

  grid.innerHTML =
    filtered.map((topic, index) => {

      const data = getData();

      const favorite =
        data.favorites.includes(topic.title);

      return `
        <article class="topic-item">

          <span class="category">
            ${escapeHTML(topic.category)}
          </span>

          <h3>
            ${escapeHTML(topic.title)}
          </h3>

          <p>
            ${escapeHTML(topic.description)}
          </p>

          <div class="topic-item-footer">

            <span>
              ${escapeHTML(topic.difficulty)}
            </span>

            <button
              onclick="selectTopic(${topics.indexOf(topic)})"
              aria-label="Select topic"
            >
              ${favorite ? "♥" : "→"}
            </button>

          </div>

        </article>
      `;

    }).join("");
}


function selectTopic(index) {

  currentTopic = topics[index];

  updateTopicCard();

  showPage("home");

  showToast("Topic selected ✦");
}


/* =========================================================
   PROGRESS
   ========================================================= */

function renderProgress() {

  const data = getData();

  const history =
    data.history;

  const topicsLearned =
    history.length;

  const totalResearch =
    history.reduce(
      (sum, item) =>
        sum + (item.researchSeconds || 0),
      0
    );

  const presentations =
    history.filter(
      item =>
        item.presentationSeconds > 0
    ).length;

  document.getElementById("statTopics")
    .textContent =
    topicsLearned;

  document.getElementById("statTime")
    .textContent =
    formatMinutes(totalResearch);

  document.getElementById("statPresentations")
    .textContent =
    presentations;

  document.getElementById("statStreak")
    .textContent =
    data.streak;

  renderCategoryStats(history);

  renderAchievements(data);
}


function renderCategoryStats(history) {

  const container =
    document.getElementById(
      "categoryStats"
    );

  const counts = {};

  topics.forEach(topic => {
    counts[topic.category] = 0;
  });

  history.forEach(session => {

    if (counts[session.category] !== undefined) {
      counts[session.category]++;
    }

  });

  const max =
    Math.max(
      1,
      ...Object.values(counts)
    );

  container.innerHTML =
    Object.entries(counts)
      .map(([category, count]) => {

        const percentage =
          (count / max) * 100;

        return `
          <div class="category-stat">

            <span>
              ${escapeHTML(category)}
            </span>

            <div class="category-bar">
              <div style="width:${percentage}%"></div>
            </div>

            <strong>${count}</strong>

          </div>
        `;

      }).join("");
}


/* =========================================================
   ACHIEVEMENTS
   ========================================================= */

function renderAchievements(data) {

  const count =
    data.history.length;

  const categories =
    new Set(
      data.history.map(
        item => item.category
      )
    ).size;

  const presentations =
    data.history.filter(
      item =>
        item.presentationSeconds > 0
    ).length;

  const achievements = [

    {
      icon: "🌱",
      title: "First Step",
      description: "Complete your first learning mission.",
      unlocked: count >= 1
    },

    {
      icon: "📚",
      title: "Curious Mind",
      description: "Complete 10 learning missions.",
      unlocked: count >= 10
    },

    {
      icon: "🎤",
      title: "Speaker",
      description: "Complete 10 presentations.",
      unlocked: presentations >= 10
    },

    {
      icon: "🔥",
      title: "One Week",
      description: "Build a 7-day learning streak.",
      unlocked: data.streak >= 7
    },

    {
      icon: "🧠",
      title: "Polymath",
      description: "Explore 5 different categories.",
      unlocked: categories >= 5
    },

    {
      icon: "✦",
      title: "Dedicated",
      description: "Complete 25 learning missions.",
      unlocked: count >= 25
    }

  ];

  document.getElementById(
    "achievementsGrid"
  ).innerHTML =
    achievements.map(item => `

      <div class="achievement ${
        item.unlocked
          ? "unlocked"
          : ""
      }">

        <div class="achievement-icon">
          ${item.icon}
        </div>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.description}
        </p>

        ${
          item.unlocked
            ? "<small>Unlocked ✓</small>"
            : "<small>Locked</small>"
        }

      </div>

    `).join("");
}


/* =========================================================
   STREAK
   ========================================================= */

function updateStreak(data) {

  const today =
    new Date();

  const todayString =
    getDateString(today);

  if (!data.lastDate) {

    data.streak = 1;

  } else {

    const previous =
      new Date(data.lastDate);

    const difference =
      Math.round(
        (
          new Date(
            todayString
          ) - new Date(
            getDateString(previous)
          )
        ) /
        (1000 * 60 * 60 * 24)
      );

    if (difference === 1) {

      data.streak++;

    } else if (difference > 1) {

      data.streak = 1;

    }

  }

  data.lastDate =
    todayString;
}


function getDateString(date) {

  return date
    .toISOString()
    .split("T")[0];
}


/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {

  const data = getData();

  const current =
    document.documentElement
      .getAttribute("data-theme");

  const newTheme =
    current === "dark"
      ? "light"
      : "dark";

  document.documentElement
    .setAttribute(
      "data-theme",
      newTheme
    );

  data.theme = newTheme;

  saveData(data);

  document.getElementById(
    "themeIcon"
  ).textContent =
    newTheme === "dark"
      ? "☀"
      : "☾";
}


function loadTheme() {

  const data = getData();

  const theme =
    data.theme || "light";

  document.documentElement
    .setAttribute(
      "data-theme",
      theme
    );

  document.getElementById(
    "themeIcon"
  ).textContent =
    theme === "dark"
      ? "☀"
      : "☾";
}


/* =========================================================
   SESSION EXIT
   ========================================================= */

function confirmLeaveSession() {

  document.getElementById(
    "modal"
  ).classList.remove("hidden");
}


function closeModal() {

  document.getElementById(
    "modal"
  ).classList.add("hidden");
}


function leaveSession() {

  clearInterval(researchInterval);
  clearInterval(presentationInterval);

  closeModal();

  showPage("home");

  showToast("Session ended");
}


/* =========================================================
   NEW MISSION
   ========================================================= */

function newMission() {

  document.getElementById(
    "reflectionLearned"
  ).value = "";

  document.getElementById(
    "reflectionSurprised"
  ).value = "";

  document.getElementById(
    "reflectionHard"
  ).value = "";

  document.getElementById(
    "reflectionSentence"
  ).value = "";

  generateTopic();

  showPage("home");
}


/* =========================================================
   HELPERS
   ========================================================= */

function formatTime(seconds) {

  seconds =
    Math.max(
      0,
      Math.floor(seconds)
    );

  const minutes =
    Math.floor(seconds / 60);

  const remainingSeconds =
    seconds % 60;

  return (
    String(minutes).padStart(2, "0")
    +
    ":"
    +
    String(remainingSeconds).padStart(2, "0")
  );
}


function formatMinutes(seconds) {

  const minutes =
    Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes}m`;
  }

  const hours =
    Math.floor(minutes / 60);

  const remaining =
    minutes % 60;

  return remaining
    ? `${hours}h ${remaining}m`
    : `${hours}h`;
}


function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent =
    message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2500);
}


/*
 * Prevent HTML from being injected into
 * the history/explore interface.
 */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadTheme();

    updateTopicCard();

    renderExplore();

    renderHistory();

    renderProgress();

  }
);