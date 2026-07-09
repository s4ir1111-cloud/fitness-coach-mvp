const STORAGE_KEY = "coachfit.mvp.v3";

const seed = {
  users: [
    {
      id: "user-1",
      name: "Алексей",
      age: 32,
      height: 190,
      weight: 73,
      goal: "набор массы",
      level: "средний",
      limitations: "Главная цель — набрать качественную мышечную массу до 80–82 кг без лишнего жира.",
      frequency: 5,
      waist: 78,
      appetite: "средний",
      sleepQuality: 7
    }
  ],
  genetic_profiles: [
    {
      id: "genetic-1",
      userId: "user-1",
      name: "Garden Fitness Genetic Profile",
      recovery: "среднее восстановление",
      strengthResponse: "умеренно высокая силовая адаптация",
      hypertrophyRange: "8-15 повторений",
      tendonRisk: "повышенное внимание к связкам и сухожилиям",
      caffeine: "кофеин перед тренировкой допустим при нормальном давлении и сне",
      cardio: "Zone 2 2-3 раза в неделю по 25-35 минут",
      appetiteControl: "контроль аппетита и талии 1 раз в неделю",
      coachRules: [
        "Держать основные рабочие подходы в диапазоне 8-15 повторений.",
        "Повышать нагрузку плавно: 2.5-5% после уверенного выполнения плана.",
        "Не повышать вес при RPE 9-10, боли в суставах или падении техники.",
        "Добавлять Zone 2 отдельно от тяжелых ног или после легких дней.",
        "Контролировать талию: быстрый рост талии означает избыток калорий.",
        "Кофеин использовать до тренировки, но не поздно вечером.",
        "Для связок и сухожилий держать разминочные подходы и избегать резких скачков веса."
      ]
    }
  ],
  exercises: [
    {
      id: "ex-bench",
      name: "Жим штанги лёжа",
      muscle: "грудь",
      type: "базовое",
      equipment: "штанга, скамья",
      technique: "Лопатки сведены, стопы устойчиво на полу, штанга опускается к нижней части груди.",
      mistakes: "Отрыв таза, отбив от груди, потеря контроля внизу.",
      alternatives: ["Жим гантелей лёжа", "Жим в тренажёре"]
    },
    {
      id: "ex-incline-db-press",
      name: "Жим гантелей на наклонной",
      muscle: "грудь",
      type: "базовое",
      equipment: "гантели, наклонная скамья",
      technique: "Опускай гантели под контролем, локти чуть ниже линии плеч, вверху не стукай гантели.",
      mistakes: "Слишком большой прогиб, потеря контроля внизу, разведение локтей строго в стороны.",
      alternatives: ["Жим штанги на наклонной", "Жим в тренажёре"]
    },
    {
      id: "ex-pec-deck",
      name: "Сведение рук в тренажёре",
      muscle: "грудь",
      type: "изолирующее",
      equipment: "тренажёр",
      technique: "Своди руки дугой, держи грудь раскрытой, возвращай рукояти медленно.",
      mistakes: "Рывок плечами, слишком глубокое растяжение, короткая амплитуда.",
      alternatives: ["Кроссовер", "Разводка гантелей"]
    },
    {
      id: "ex-triceps-pushdown",
      name: "Разгибание рук на блоке",
      muscle: "трицепс",
      type: "изолирующее",
      equipment: "верхний блок, канат или рукоять",
      technique: "Локти прижаты, разгибай до полного сокращения трицепса, корпус стабилен.",
      mistakes: "Раскачка корпусом, уход локтей вперёд, неполное разгибание.",
      alternatives: ["Французский жим", "Отжимания узким хватом"]
    },
    {
      id: "ex-overhead-extension",
      name: "Разгибание из-за головы",
      muscle: "трицепс",
      type: "изолирующее",
      equipment: "гантель или блок",
      technique: "Локти направлены вверх, движение контролируемое, плечи не поднимаются.",
      mistakes: "Разведение локтей, прогиб поясницы, слишком резкое опускание.",
      alternatives: ["Разгибание на блоке", "Французский жим"]
    },
    {
      id: "ex-french-press",
      name: "Французский жим",
      muscle: "трицепс",
      type: "изолирующее",
      equipment: "EZ-штанга или гантели",
      technique: "Плечи фиксированы, опускай вес ко лбу или за голову, разгибай без рывка.",
      mistakes: "Уход локтей в стороны, слишком большой вес, боль в локтях.",
      alternatives: ["Разгибание на блоке", "Жим узким хватом"]
    },
    {
      id: "ex-lat-pulldown",
      name: "Тяга верхнего блока",
      muscle: "спина",
      type: "базовое",
      equipment: "верхний блок",
      technique: "Тяни локти вниз к корпусу, грудь раскрыта, лопатки опускаются перед сгибанием рук.",
      mistakes: "Тяга руками без спины, завал назад, рывки.",
      alternatives: ["Подтягивания", "Тяга в хаммере"]
    },
    {
      id: "ex-row",
      name: "Горизонтальная тяга",
      muscle: "спина",
      type: "базовое",
      equipment: "блочный тренажёр",
      technique: "Корпус стабилен, тяни локтями назад, в конце своди лопатки.",
      mistakes: "Рывки корпусом, поднятые плечи, неполная амплитуда.",
      alternatives: ["Тяга гантели в наклоне", "Тяга штанги к поясу"]
    },
    {
      id: "ex-one-arm-db-row",
      name: "Тяга гантели одной рукой",
      muscle: "спина",
      type: "базовое",
      equipment: "гантель, скамья",
      technique: "Спина ровная, тяни локоть к тазу, не разворачивай корпус чрезмерно.",
      mistakes: "Рывок плечом, округление спины, короткая амплитуда.",
      alternatives: ["Горизонтальная тяга", "Тяга в тренажёре"]
    },
    {
      id: "ex-barbell-curl",
      name: "Подъем штанги на бицепс",
      muscle: "бицепс",
      type: "изолирующее",
      equipment: "штанга",
      technique: "Локти близко к корпусу, подъем без раскачки, опускание медленное.",
      mistakes: "Читинг корпусом, уход локтей вперед, неполное разгибание.",
      alternatives: ["Подъем EZ-штанги", "Сгибание на блоке"]
    },
    {
      id: "ex-hammer-curl",
      name: "Молотки",
      muscle: "бицепс/предплечья",
      type: "изолирующее",
      equipment: "гантели",
      technique: "Нейтральный хват, локти фиксированы, подъем без раскачки.",
      mistakes: "Раскачка, слишком быстрый негатив, подъем плеч.",
      alternatives: ["Канат на нижнем блоке", "Сгибание EZ-штанги"]
    },
    {
      id: "ex-scott-curl",
      name: "Скамья Скотта",
      muscle: "бицепс",
      type: "изолирующее",
      equipment: "скамья Скотта, EZ-штанга или тренажёр",
      technique: "Плечо лежит на подушке, не бросай вес вниз, сохраняй контроль внизу.",
      mistakes: "Отрыв плеча от подушки, переразгибание локтя, рывок снизу.",
      alternatives: ["Сгибание на блоке", "Подъем гантелей сидя"]
    },
    {
      id: "ex-hack-squat",
      name: "Гакк-присед",
      muscle: "ноги",
      type: "базовое",
      equipment: "гакк-тренажёр",
      technique: "Стопы устойчиво на платформе, колени по линии носков, глубина без потери таза.",
      mistakes: "Отрыв пяток, завал коленей внутрь, слишком короткая амплитуда.",
      alternatives: ["Жим ногами", "Присед со штангой"]
    },
    {
      id: "ex-leg-press",
      name: "Жим ногами",
      muscle: "ноги",
      type: "базовое",
      equipment: "тренажёр жима ногами",
      technique: "Опускай платформу под контролем, поясница прижата, не блокируй колени резко.",
      mistakes: "Отрыв таза, слишком глубокое опускание без контроля, сведение коленей.",
      alternatives: ["Гакк-присед", "Выпады"]
    },
    {
      id: "ex-leg-extension",
      name: "Разгибание ног",
      muscle: "квадрицепс",
      type: "изолирующее",
      equipment: "тренажёр",
      technique: "Поднимай вес до сокращения квадрицепса, вверху короткая пауза, вниз плавно.",
      mistakes: "Рывок снизу, слишком большой вес, бросание платформы.",
      alternatives: ["Сисси-присед", "Болгарские выпады"]
    },
    {
      id: "ex-lying-leg-curl",
      name: "Сгибание ног лёжа",
      muscle: "бицепс бедра",
      type: "изолирующее",
      equipment: "тренажёр",
      technique: "Таз прижат, сгибай ноги без рывка, вверху короткая пауза.",
      mistakes: "Отрыв таза, рывки, неполное опускание.",
      alternatives: ["Сгибание ног сидя", "Румынская тяга"]
    },
    {
      id: "ex-seated-leg-curl",
      name: "Сгибание ног сидя",
      muscle: "бицепс бедра",
      type: "изолирующее",
      equipment: "тренажёр",
      technique: "Корпус прижат, движение плавное, сохраняй натяжение в задней поверхности бедра.",
      mistakes: "Слишком быстрый темп, отрыв таза, короткая амплитуда.",
      alternatives: ["Сгибание ног лёжа", "Гиперэкстензия"]
    },
    {
      id: "ex-calf-raise",
      name: "Икры стоя/сидя",
      muscle: "икры",
      type: "изолирующее",
      equipment: "тренажёр или платформа",
      technique: "Полная амплитуда, пауза вверху, контролируемое растяжение внизу.",
      mistakes: "Пружинящий темп, неполная амплитуда, завал стопы.",
      alternatives: ["Икры в жиме ногами", "Подъемы на одной ноге"]
    },
    {
      id: "ex-press",
      name: "Жим гантелей сидя",
      muscle: "плечи",
      type: "базовое",
      equipment: "гантели, скамья",
      technique: "Локти немного перед корпусом, движение вверх без переразгибания поясницы.",
      mistakes: "Прогиб в пояснице, стук гантелей, слишком низкое опускание без контроля.",
      alternatives: ["Жим в тренажёре", "Армейский жим"]
    },
    {
      id: "ex-lateral-raise",
      name: "Подъемы в стороны",
      muscle: "средняя дельта",
      type: "изолирующее",
      equipment: "гантели",
      technique: "Поднимай локти в стороны до уровня плеч, кисти нейтральны, корпус неподвижен.",
      mistakes: "Махи корпусом, подъем трапецией, слишком большой вес.",
      alternatives: ["Подъемы в стороны в кроссовере", "Тренажёр на дельты"]
    },
    {
      id: "ex-rear-delt-fly",
      name: "Обратная разводка",
      muscle: "задняя дельта",
      type: "изолирующее",
      equipment: "тренажёр или гантели",
      technique: "Разводи руки через локти, лопатки не зажимай чрезмерно, темп плавный.",
      mistakes: "Рывки, работа трапецией, слишком короткая амплитуда.",
      alternatives: ["Face pull", "Разводка в наклоне"]
    },
    {
      id: "ex-front-raise",
      name: "Подъем перед собой",
      muscle: "передняя дельта",
      type: "изолирующее",
      equipment: "гантели или диск",
      technique: "Поднимай вес до уровня плеч, корпус стабилен, вниз под контролем.",
      mistakes: "Раскачка, подъем выше нужного, прогиб поясницы.",
      alternatives: ["Жим гантелей", "Подъем в кроссовере"]
    },
    {
      id: "ex-shrug",
      name: "Шраги",
      muscle: "трапеции",
      type: "изолирующее",
      equipment: "гантели или штанга",
      technique: "Поднимай плечи вверх, без вращения, короткая пауза в верхней точке.",
      mistakes: "Круговые движения плечами, рывки, сгибание рук.",
      alternatives: ["Шраги в тренажёре", "Фермерская прогулка"]
    },
    {
      id: "ex-ez-curl",
      name: "Подъем EZ-штанги",
      muscle: "бицепс",
      type: "изолирующее",
      equipment: "EZ-штанга",
      technique: "Запястья нейтральны, локти рядом с корпусом, негатив медленный.",
      mistakes: "Читинг корпусом, бросание веса, уход локтей вперед.",
      alternatives: ["Подъем штанги на бицепс", "Скамья Скотта"]
    },
    {
      id: "ex-dips-close",
      name: "Отжимания на брусьях/узким хватом",
      muscle: "трицепс/грудь",
      type: "базовое",
      equipment: "брусья или собственный вес",
      technique: "Корпус стабилен, локти не разлетаются, работай в контролируемой амплитуде.",
      mistakes: "Провал плеч, резкое опускание, боль в локтях или плечах.",
      alternatives: ["Жим узким хватом", "Разгибание на блоке"]
    }
  ],
  workout_programs: [
    {
      id: "program-1",
      userId: "user-1",
      name: "Масса и сила — 5 тренировок",
      template: "5-дневный цикл: грудь/трицепс, спина/бицепс, ноги, плечи, руки",
      currentDayIndex: 0
    }
  ],
  workout_days: [
    {
      id: "day-1",
      programId: "program-1",
      order: 1,
      title: "Грудь + Трицепс",
      focus: "грудь/трицепс",
      exercises: [
        planExercise("ex-bench", 3, "8-10", 0, 150, "Если сделал все подходы по 10 повторений — увеличь вес на 2,5–5 кг."),
        planExercise("ex-incline-db-press", 3, "10-12", 0, 120, "Гантели повышай осторожнее: обычно на 1–2 кг."),
        planExercise("ex-pec-deck", 3, 12, 0, 75, "Изоляция без рывков, держи растяжение под контролем."),
        planExercise("ex-triceps-pushdown", 3, "10-12", 0, 75, "Локти фиксированы, не помогай корпусом."),
        planExercise("ex-overhead-extension", 3, "10-12", 0, 75, "Следи за локтями и ощущением в длинной головке трицепса."),
        planExercise("ex-french-press", 2, 12, 0, 75, "Не работай через боль в локтях.")
      ]
    },
    {
      id: "day-2",
      programId: "program-1",
      order: 2,
      title: "Спина + Бицепс",
      focus: "спина/бицепс",
      exercises: [
        planExercise("ex-lat-pulldown", 3, 10, 0, 120, "Тяни локтями, не превращай упражнение в сгибание рук."),
        planExercise("ex-row", 3, 10, 0, 120, "Пауза в сведении лопаток на каждом повторе."),
        planExercise("ex-one-arm-db-row", 3, 10, 0, 120, "Держи корпус стабильным, не разворачивайся за весом."),
        planExercise("ex-barbell-curl", 3, 10, 0, 75, "Без читинга, локти рядом с корпусом."),
        planExercise("ex-hammer-curl", 3, 12, 0, 75, "Контроль вниз важнее веса."),
        planExercise("ex-scott-curl", 2, 12, 0, 75, "Не переразгибай локти внизу.")
      ]
    },
    {
      id: "day-3",
      programId: "program-1",
      order: 3,
      title: "Ноги",
      focus: "квадрицепс/задняя цепь/икры",
      exercises: [
        planExercise("ex-hack-squat", 4, 10, 0, 150, "Главное упражнение дня: оставь 1–2 повтора в запасе."),
        planExercise("ex-leg-press", 3, 12, 0, 150, "Поясница прижата, колени по линии стоп."),
        planExercise("ex-leg-extension", 3, 12, 0, 75, "Пауза вверху, не бросай вес."),
        planExercise("ex-lying-leg-curl", 3, 12, 0, 75, "Таз прижат, задняя поверхность бедра под контролем."),
        planExercise("ex-seated-leg-curl", 3, 12, 0, 75, "Добери объем задней цепи без рывков."),
        planExercise("ex-calf-raise", 4, "12-15", 0, 60, "Полная амплитуда и пауза в верхней точке.")
      ]
    },
    {
      id: "day-4",
      programId: "program-1",
      order: 4,
      title: "Плечи",
      focus: "дельты/трапеции",
      exercises: [
        planExercise("ex-press", 4, "8-10", 0, 150, "Базовое упражнение: держи корпус без переразгибания."),
        planExercise("ex-lateral-raise", 3, "12-15", 0, 75, "Работай средней дельтой, не трапецией."),
        planExercise("ex-rear-delt-fly", 3, "12-15", 0, 75, "Медленно и чисто, без рывков."),
        planExercise("ex-front-raise", 2, 12, 0, 75, "Не поднимай выше уровня плеч."),
        planExercise("ex-shrug", 3, 12, 0, 90, "Плечи вверх, без круговых движений.")
      ]
    },
    {
      id: "day-5",
      programId: "program-1",
      order: 5,
      title: "Руки (памп)",
      focus: "трицепс/бицепс",
      exercises: [
        planExercise("ex-triceps-pushdown", 3, 12, 0, 75, "Памп без отказа в первых подходах."),
        planExercise("ex-overhead-extension", 3, 12, 0, 75, "Контроль локтей и растяжения."),
        planExercise("ex-ez-curl", 3, 10, 0, 75, "Поднимай без раскачки."),
        planExercise("ex-hammer-curl", 3, 12, 0, 75, "Работай ровно обеими руками."),
        planExercise("ex-scott-curl", 3, 12, 0, 75, "Медленный негатив."),
        planExercise("ex-dips-close", 3, "8-15", 0, 120, "Остановись за 1 повтор до развала техники.")
      ]
    }
  ],
  workout_sessions: [],
  workout_session_exercises: [],
  workout_sets: [],
  trainer_recommendations: []
};

function planExercise(exerciseId, sets, reps, weight, rest, coachNotes) {
  return {
    id: crypto.randomUUID(),
    exerciseId,
    sets,
    reps,
    weight,
    rest,
    coachNotes
  };
}

function targetReps(reps) {
  const value = String(reps).trim().toLowerCase();
  if (value.includes("макс")) return 15;
  const numbers = value.match(/\d+/g);
  if (!numbers) return 10;
  return Number(numbers[numbers.length - 1]);
}

let state = loadState();
let activeTab = "home";
let activeSession = null;

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(seed);
  try {
    return JSON.parse(raw);
  } catch {
    return structuredClone(seed);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function user() {
  return state.users[0];
}

function geneticProfile() {
  return state.genetic_profiles?.[0];
}

function program() {
  return state.workout_programs[0];
}

function orderedDays() {
  return [...state.workout_days].sort((a, b) => a.order - b.order);
}

function todayDay() {
  return orderedDays()[program().currentDayIndex % orderedDays().length];
}

function exerciseById(id) {
  return state.exercises.find((exercise) => exercise.id === id);
}

function lastSession() {
  return [...state.workout_sessions].sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt))[0];
}

function lastRecommendation() {
  return [...state.trainer_recommendations].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
}

function sessionExercises(sessionId) {
  return state.workout_session_exercises.filter((item) => item.sessionId === sessionId);
}

function setsFor(sessionExerciseId) {
  return state.workout_sets.filter((set) => set.sessionExerciseId === sessionExerciseId);
}

function navItems() {
  return [
    ["home", "⌂", "Главная"],
    ["workout", "▶", "Тренировка"],
    ["program", "▦", "Программа"],
    ["history", "↗", "История"],
    ["genetics", "◇", "Генетика"],
    ["profile", "◉", "Профиль"],
    ["admin", "⚙", "Админка"]
  ];
}

function render() {
  document.getElementById("app").innerHTML = `
    <main class="shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">CF</div>
          <div>
            <h1>CoachFit</h1>
            <p>${user().goal} · ${user().frequency} трен./нед.</p>
          </div>
        </div>
        <div class="desktop-tabs">${navItems().map(navButton).join("")}</div>
      </header>
      ${renderPage()}
    </main>
    <nav class="nav">${navItems().map(navButton).join("")}</nav>
  `;
  bindEvents();
}

function navButton([id, icon, label]) {
  return `<button class="${activeTab === id ? "active" : ""}" data-tab="${id}"><span>${icon}</span><br>${label}</button>`;
}

function renderPage() {
  const pages = {
    home: renderHome,
    workout: renderWorkout,
    program: renderProgram,
    history: renderHistory,
    genetics: renderGenetics,
    profile: renderProfile,
    admin: renderAdmin
  };
  return pages[activeTab]();
}

function renderHome() {
  const day = todayDay();
  const rec = lastRecommendation();
  const last = lastSession();
  const genetic = geneticProfile();
  return `
    <section class="hero">
      <div class="today">
        <p>Сегодня</p>
        <h2>${day.title}</h2>
        <p>${day.exercises.length} упражнения · ${day.exercises.reduce((sum, item) => sum + Number(item.sets), 0)} подходов · фокус: ${day.focus}</p>
        <div class="tag-row">
          ${day.exercises.map((item) => `<span class="tag">${exerciseById(item.exerciseId).name} ${formatWeight(item.weight)}</span>`).join("")}
        </div>
        <div style="height:14px"></div>
        <button class="primary" data-action="start-workout">Начать тренировку</button>
      </div>
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>Рекомендация</h2>
            <p>${rec ? rec.coachComment : "Начни тренировку и зафиксируй фактические веса, повторения и RPE."}</p>
          </div>
        </div>
        ${rec ? renderRecommendation(rec) : `<div class="empty">После первой тренировки появится автоматический план на следующий раз.</div>`}
      </div>
    </section>
    <div style="height:12px"></div>
    <section class="grid two">
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>AI Coach</h2>
            <p>${genetic ? "Рекомендации учитывают генетический профиль: плавная прогрессия, 8-15 повторений, Zone 2 и защиту связок." : "Добавь профиль генетики, чтобы тренер точнее подбирал нагрузку."}</p>
          </div>
        </div>
        <div class="tag-row">
          <span class="tag good">прогрессия 2.5-5%</span>
          <span class="tag">8-15 повторений</span>
          <span class="tag">Zone 2</span>
          <span class="tag warn">связки: без скачков веса</span>
        </div>
      </div>
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>Контроль массы</h2>
            <p>Талия ${user().waist || "—"} см · аппетит: ${user().appetite || "—"} · сон: ${user().sleepQuality || "—"}/10</p>
          </div>
        </div>
        <p class="muted-note">Если талия растёт быстрее веса, держи калории аккуратнее. Если аппетит проседает, не повышай объём тренировки слишком резко.</p>
      </div>
    </section>
    <div style="height:12px"></div>
    <section class="metric-row">
      ${metric("Тренировок", state.workout_sessions.length, "выполнено")}
      ${metric("Объём", `${Math.round(totalVolume())}`, "кг × повторы")}
      ${metric("Макс. вес", `${maxWorkingWeight()} кг`, "рабочий")}
      ${metric("Пропуски", skippedExercisesCount(), "упражнений")}
    </section>
    <div style="height:12px"></div>
    <section class="panel pad">
      <div class="section-title">
        <div>
          <h2>Последний результат</h2>
          <p>${last ? formatDate(last.finishedAt) : "История пока пустая"}</p>
        </div>
      </div>
      ${last ? renderSessionSummary(last) : `<div class="empty">Заверши тренировку, чтобы увидеть результат.</div>`}
    </section>
  `;
}

function renderGenetics() {
  const genetic = geneticProfile();
  return `
    <section class="grid two">
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>Генетический профиль</h2>
            <p>${genetic.name}</p>
          </div>
        </div>
        <div class="list">
          <div class="item"><h3>Восстановление</h3><p>${genetic.recovery}</p></div>
          <div class="item"><h3>Силовая адаптация</h3><p>${genetic.strengthResponse}</p></div>
          <div class="item"><h3>Рабочие повторы</h3><p>${genetic.hypertrophyRange}</p></div>
          <div class="item"><h3>Кардио</h3><p>${genetic.cardio}</p></div>
        </div>
        <div style="height:12px"></div>
        <div class="list">
          <div class="item"><h3>Связки и сухожилия</h3><p>${genetic.tendonRisk}. Перед первым рабочим упражнением держи 2-3 разминочных подхода и не прыгай по весу больше чем на 2.5-5%.</p></div>
          <div class="item"><h3>Кофеин</h3><p>${genetic.caffeine}. Ориентир: 30-45 минут до тренировки, если это не портит сон.</p></div>
          <div class="item"><h3>Аппетит и талия</h3><p>${genetic.appetiteControl}. Для набора массы цель — вес растёт плавно, талия не улетает быстрее прогресса в зале.</p></div>
        </div>
      </div>
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>Правила AI Coach</h2>
            <p>Эти правила добавлены в рекомендации после тренировки.</p>
          </div>
        </div>
        <div class="list">
          ${genetic.coachRules.map((rule, index) => `<div class="item"><h3>${index + 1}. Правило</h3><p>${rule}</p></div>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderWorkout() {
  if (!activeSession) {
    return `
      <section class="panel pad">
        <div class="section-title">
          <div>
            <h2>Текущая тренировка</h2>
            <p>Готово к старту: ${todayDay().title}</p>
          </div>
        </div>
        <button class="primary" data-action="start-workout">Начать тренировку</button>
      </section>
    `;
  }

  return `
    <section class="grid">
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>${activeSession.dayTitle}</h2>
            <p>Фиксируй факт по каждому подходу. RPE 1-10 влияет на следующую нагрузку.</p>
          </div>
        </div>
        <div class="list">
          ${activeSession.exercises.map(renderActiveExercise).join("")}
        </div>
        <div style="height:12px"></div>
        <button class="primary" data-action="finish-workout">Завершить тренировку</button>
      </div>
    </section>
  `;
}

function renderActiveExercise(item) {
  const ex = exerciseById(item.exerciseId);
  return `
    <article class="exercise-block" data-session-exercise="${item.id}">
      <div class="exercise-title">
        <div>
          <h3>${ex.name}</h3>
          <p>${ex.muscle} · ${item.rest} сек отдыха · ${ex.equipment}</p>
        </div>
        <button class="ghost" data-action="skip-exercise" data-id="${item.id}">${item.skipped ? "Вернуть" : "Пропустить"}</button>
      </div>
      <p>${ex.technique}</p>
      <div class="set-table ${item.skipped ? "hide-small" : ""}">
        <div class="set-row header">
          <span>#</span><span>План кг</span><span>Факт кг</span><span>План</span><span>Факт</span><span>✓</span>
        </div>
        ${item.sets.map((set, index) => renderSetRow(item.id, set, index)).join("")}
      </div>
      <div class="range-wrap">
        <input type="range" min="1" max="10" value="${item.rpe}" data-action="set-rpe" data-id="${item.id}" />
        <b>RPE ${item.rpe}</b>
      </div>
      <div class="field">
        <input placeholder="Комментарий к упражнению" value="${escapeAttr(item.comment)}" data-action="set-comment" data-id="${item.id}" />
      </div>
      <div class="actions">
        <button class="secondary" data-action="add-set" data-id="${item.id}">+ Подход</button>
        <button class="danger" data-action="remove-set" data-id="${item.id}">Удалить подход</button>
      </div>
    </article>
  `;
}

function renderSetRow(exerciseId, set, index) {
  return `
    <div class="set-row" data-set="${set.id}">
      <b>${index + 1}</b>
      <input inputmode="decimal" value="${set.plannedWeight}" readonly />
      <input inputmode="decimal" value="${set.actualWeight}" data-action="update-set" data-id="${exerciseId}" data-set="${set.id}" data-field="actualWeight" />
      <input inputmode="numeric" value="${set.plannedReps}" readonly />
      <input inputmode="numeric" value="${set.actualReps}" data-action="update-set" data-id="${exerciseId}" data-set="${set.id}" data-field="actualReps" />
      <button class="check ${set.done ? "done" : ""}" data-action="toggle-set" data-id="${exerciseId}" data-set="${set.id}">✓</button>
    </div>
  `;
}

function renderProgram() {
  return `
    <section class="grid two">
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>${program().name}</h2>
            <p>Дни программы, упражнения, плановые подходы, повторы и веса.</p>
          </div>
          <button class="secondary" data-action="copy-week">Копия недели</button>
        </div>
        <div class="list">${orderedDays().map(renderProgramDay).join("")}</div>
      </div>
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>База упражнений</h2>
            <p>${state.exercises.length} упражнений с техникой, ошибками и заменами.</p>
          </div>
        </div>
        <div class="list">${state.exercises.map(renderExerciseCard).join("")}</div>
      </div>
    </section>
  `;
}

function renderProgramDay(day) {
  return `
    <article class="item">
      <div class="item-head">
        <div>
          <h3>День ${day.order}: ${day.title}</h3>
          <p>${day.focus}</p>
        </div>
      </div>
      <div class="list" style="margin-top:10px">
        ${day.exercises.map((item) => {
          const ex = exerciseById(item.exerciseId);
          return `<div class="item">
            <h4>${ex.name}</h4>
            <p>${item.sets} × ${item.reps} · ${formatWeight(item.weight)} · отдых ${item.rest} сек</p>
            <p>${item.coachNotes}</p>
          </div>`;
        }).join("")}
      </div>
    </article>
  `;
}

function renderExerciseCard(ex) {
  return `
    <article class="item">
      <div class="item-head">
        <h3>${ex.name}</h3>
        <span class="tag">${ex.type}</span>
      </div>
      <p>${ex.muscle} · ${ex.equipment}</p>
      <p>${ex.technique}</p>
      <div class="tag-row">
        <span class="tag warn">ошибки: ${ex.mistakes}</span>
        ${ex.alternatives.map((alt) => `<span class="tag">${alt}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderHistory() {
  const sessions = [...state.workout_sessions].sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt));
  const volumes = sessions.slice().reverse().map((session) => session.volume);
  return `
    <section class="grid two">
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>История и статистика</h2>
            <p>Сохранённые тренировки, объём, сила, пропущенные упражнения.</p>
          </div>
        </div>
        <div class="metric-row">
          ${metric("Всего", sessions.length, "тренировок")}
          ${metric("Объём", Math.round(totalVolume()), "суммарно")}
          ${metric("Макс", `${maxWorkingWeight()} кг`, "рабочий вес")}
          ${metric("Пропуски", skippedExercisesCount(), "упражнений")}
        </div>
        <div style="height:12px"></div>
        ${sessions.length ? `<div class="list">${sessions.map(renderHistoryRow).join("")}</div>` : `<div class="empty">История появится после завершения тренировки.</div>`}
      </div>
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>График прогресса</h2>
            <p>Динамика объёма по последним тренировкам.</p>
          </div>
        </div>
        ${renderMiniChart(volumes)}
        <div style="height:12px"></div>
        <div class="list">${exerciseProgress().map(renderProgressRow).join("") || `<div class="empty">Недостаточно данных.</div>`}</div>
      </div>
    </section>
  `;
}

function renderHistoryRow(session) {
  return `
    <article class="history-row">
      <div class="item-head">
        <div>
          <h3>${session.dayTitle}</h3>
          <p>${formatDate(session.finishedAt)}</p>
        </div>
        <span class="tag good">${Math.round(session.volume)} объём</span>
      </div>
      ${renderSessionSummary(session)}
    </article>
  `;
}

function renderProgressRow(item) {
  return `
    <div class="item">
      <div class="item-head">
        <h3>${item.name}</h3>
        <span class="tag">${item.max} кг</span>
      </div>
      <p>Динамика силы: ${item.trend >= 0 ? "+" : ""}${item.trend} кг · объём ${Math.round(item.volume)}</p>
      <div class="bar"><span style="width:${Math.min(100, Math.max(8, item.volume / 80))}%"></span></div>
    </div>
  `;
}

function renderProfile() {
  const profile = user();
  return `
    <section class="panel pad">
      <div class="section-title">
        <div>
          <h2>Профиль пользователя</h2>
          <p>Данные влияют на частоту, нагрузку и осторожность рекомендаций.</p>
        </div>
      </div>
      <form class="form-grid" data-form="profile">
        ${field("name", "Имя", profile.name)}
        ${field("age", "Возраст", profile.age, "number")}
        ${field("height", "Рост", profile.height, "number")}
        ${field("weight", "Вес", profile.weight, "number")}
        ${field("waist", "Талия, см", profile.waist || "", "number")}
        ${field("sleepQuality", "Сон 1-10", profile.sleepQuality || "", "number")}
        <div class="field">
          <label>Цель</label>
          <select name="goal">${["набор массы", "сила", "жиросжигание", "поддержание формы"].map((value) => option(value, profile.goal)).join("")}</select>
        </div>
        <div class="field">
          <label>Аппетит</label>
          <select name="appetite">${["низкий", "средний", "высокий"].map((value) => option(value, profile.appetite)).join("")}</select>
        </div>
        <div class="field">
          <label>Уровень</label>
          <select name="level">${["новичок", "средний", "продвинутый"].map((value) => option(value, profile.level)).join("")}</select>
        </div>
        ${field("frequency", "Тренировок в неделю", profile.frequency, "number")}
        <div class="field full">
          <label>Ограничения и травмы</label>
          <textarea name="limitations">${profile.limitations}</textarea>
        </div>
      </form>
    </section>
  `;
}

function renderAdmin() {
  return `
    <section class="grid two">
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>Админка программы</h2>
            <p>Создание дней, добавление упражнений, настройка подходов, повторений и веса.</p>
          </div>
        </div>
        <div class="actions">
          <button class="secondary" data-action="add-day">+ День</button>
          <button class="secondary" data-action="add-exercise-to-day">+ Упражнение в день</button>
          <button class="ghost" data-action="reset-demo">Сброс демо</button>
        </div>
        <div style="height:12px"></div>
        <div class="list">${orderedDays().map(renderAdminDay).join("")}</div>
      </div>
      <div class="panel pad">
        <div class="section-title">
          <div>
            <h2>Шаблоны</h2>
            <p>Для MVP шаблон хранится в программе и копируется на следующую неделю.</p>
          </div>
        </div>
        <div class="item">
          <h3>${program().template}</h3>
          <p>5 дней: грудь + трицепс, спина + бицепс, ноги, плечи, руки. Для набора массы можно перейти на рекомендованный 4-дневный цикл с двумя днями отдыха.</p>
        </div>
      </div>
    </section>
  `;
}

function renderAdminDay(day) {
  return `
    <article class="item">
      <div class="field">
        <label>День ${day.order}</label>
        <input value="${escapeAttr(day.title)}" data-action="update-day-title" data-id="${day.id}" />
      </div>
      <div class="list" style="margin-top:10px">
        ${day.exercises.map((item) => {
          const ex = exerciseById(item.exerciseId);
          return `<div class="admin-exercise">
            <input value="${escapeAttr(ex.name)}" readonly />
            <input value="${item.sets}" data-action="update-plan" data-day="${day.id}" data-id="${item.id}" data-field="sets" />
            <input value="${item.reps}" data-action="update-plan" data-day="${day.id}" data-id="${item.id}" data-field="reps" />
            <input class="hide-small" value="${item.weight}" data-action="update-plan" data-day="${day.id}" data-id="${item.id}" data-field="weight" />
          </div>`;
        }).join("")}
      </div>
    </article>
  `;
}

function renderRecommendation(rec) {
  return `
    <div class="list">
      <div class="item"><h3>Хорошо</h3><p>${rec.good}</p></div>
      <div class="item"><h3>Спад</h3><p>${rec.drop}</p></div>
      <div class="item"><h3>Следующий план</h3><p>${rec.nextPlan}</p></div>
      <div class="tag-row">
        ${rec.replacements.map((item) => `<span class="tag warn">замена: ${item}</span>`).join("") || `<span class="tag good">упражнения оставить</span>`}
      </div>
    </div>
  `;
}

function renderSessionSummary(session) {
  const items = sessionExercises(session.id);
  return `<div class="tag-row">${items.map((item) => {
    const ex = exerciseById(item.exerciseId);
    return `<span class="tag ${item.skipped ? "bad" : "good"}">${ex.name}: ${item.skipped ? "пропуск" : `${Math.round(item.volume)} объём`}</span>`;
  }).join("")}</div>`;
}

function renderMiniChart(values) {
  const safe = values.slice(-8);
  const max = Math.max(...safe, 1);
  if (!safe.length) return `<div class="empty">График появится после первой тренировки.</div>`;
  return `<div class="mini-chart">${safe.map((value) => `<span style="height:${Math.max(8, (value / max) * 100)}%"></span>`).join("")}</div>`;
}

function metric(label, value, caption) {
  return `<div class="metric"><b>${value}</b><span>${label} · ${caption}</span></div>`;
}

function field(name, label, value, type = "text") {
  return `<div class="field"><label>${label}</label><input name="${name}" type="${type}" value="${escapeAttr(value)}" /></div>`;
}

function option(value, selected) {
  return `<option value="${value}" ${value === selected ? "selected" : ""}>${value}</option>`;
}

function bindEvents() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTab = button.dataset.tab;
      render();
    });
  });

  document.querySelectorAll("[data-action]").forEach((element) => {
    const action = element.dataset.action;
    if (["update-set", "set-rpe", "set-comment", "update-day-title", "update-plan"].includes(action)) {
      element.addEventListener("input", handleAction);
    } else {
      element.addEventListener("click", handleAction);
    }
  });

  const profileForm = document.querySelector("[data-form='profile']");
  if (profileForm) {
    profileForm.addEventListener("input", () => {
      const data = new FormData(profileForm);
      Object.assign(user(), {
        name: data.get("name"),
        age: Number(data.get("age")),
        height: Number(data.get("height")),
        weight: Number(data.get("weight")),
        waist: Number(data.get("waist")),
        sleepQuality: Number(data.get("sleepQuality")),
        goal: data.get("goal"),
        appetite: data.get("appetite"),
        level: data.get("level"),
        frequency: Number(data.get("frequency")),
        limitations: data.get("limitations")
      });
      saveState();
    });
  }
}

function handleAction(event) {
  const target = event.currentTarget;
  const action = target.dataset.action;
  const handlers = {
    "start-workout": startWorkout,
    "finish-workout": finishWorkout,
    "skip-exercise": () => toggleSkip(target.dataset.id),
    "add-set": () => addSet(target.dataset.id),
    "remove-set": () => removeSet(target.dataset.id),
    "toggle-set": () => toggleSet(target.dataset.id, target.dataset.set),
    "update-set": () => updateSet(target.dataset.id, target.dataset.set, target.dataset.field, target.value),
    "set-rpe": () => updateActiveExercise(target.dataset.id, { rpe: Number(target.value) }),
    "set-comment": () => updateActiveExercise(target.dataset.id, { comment: target.value }),
    "copy-week": copyWeek,
    "add-day": addDay,
    "add-exercise-to-day": addExerciseToDay,
    "reset-demo": resetDemo,
    "update-day-title": () => updateDayTitle(target.dataset.id, target.value),
    "update-plan": () => updatePlan(target.dataset.day, target.dataset.id, target.dataset.field, target.value)
  };
  handlers[action]?.();
}

function startWorkout() {
  const day = todayDay();
  activeSession = {
    id: crypto.randomUUID(),
    dayId: day.id,
    dayTitle: day.title,
    startedAt: new Date().toISOString(),
    exercises: day.exercises.map((item) => ({
      id: crypto.randomUUID(),
      planExerciseId: item.id,
      exerciseId: item.exerciseId,
      rest: item.rest,
      skipped: false,
      rpe: 7,
      comment: "",
      sets: Array.from({ length: Number(item.sets) }, () => ({
        id: crypto.randomUUID(),
        plannedWeight: Number(item.weight),
        actualWeight: Number(item.weight),
        plannedReps: targetReps(item.reps),
        actualReps: targetReps(item.reps),
        done: false
      }))
    }))
  };
  activeTab = "workout";
  render();
}

function finishWorkout() {
  if (!activeSession) return;
  const finishedAt = new Date().toISOString();
  const session = {
    id: activeSession.id,
    userId: user().id,
    programId: program().id,
    workoutDayId: activeSession.dayId,
    dayTitle: activeSession.dayTitle,
    startedAt: activeSession.startedAt,
    finishedAt,
    volume: 0,
    completed: true
  };

  activeSession.exercises.forEach((item, order) => {
    const volume = item.skipped ? 0 : item.sets.filter((set) => set.done).reduce((sum, set) => sum + Number(set.actualWeight) * Number(set.actualReps), 0);
    session.volume += volume;
    const sessionExercise = {
      id: item.id,
      sessionId: session.id,
      exerciseId: item.exerciseId,
      order,
      skipped: item.skipped,
      rpe: Number(item.rpe),
      comment: item.comment,
      volume
    };
    state.workout_session_exercises.push(sessionExercise);
    item.sets.forEach((set, setIndex) => {
      state.workout_sets.push({
        id: set.id,
        sessionExerciseId: item.id,
        setNumber: setIndex + 1,
        plannedWeight: Number(set.plannedWeight),
        actualWeight: Number(set.actualWeight),
        plannedReps: Number(set.plannedReps),
        actualReps: Number(set.actualReps),
        done: Boolean(set.done)
      });
    });
  });

  state.workout_sessions.push(session);
  const recommendation = analyzeSession(session.id);
  state.trainer_recommendations.push(recommendation);
  advanceProgramDay();
  activeSession = null;
  activeTab = "home";
  saveState();
  render();
}

function analyzeSession(sessionId) {
  const items = sessionExercises(sessionId);
  const nextWeights = [];
  const replacements = [];
  const drops = [];
  const wins = [];
  const genetic = geneticProfile();

  items.forEach((item) => {
    const ex = exerciseById(item.exerciseId);
    const sets = setsFor(item.id);
    const plannedDone = !item.skipped && sets.every((set) => set.done && Number(set.actualReps) >= Number(set.plannedReps));
    const avgRpe = Number(item.rpe);
    const doneSets = sets.filter((set) => set.done);
    const actualWorkingWeight = doneSets.length
      ? doneSets.reduce((sum, set) => sum + Number(set.actualWeight), 0) / doneSets.length
      : Number(sets[0]?.actualWeight || 0);
    const plannedWeight = Number(sets[0]?.plannedWeight || 0);
    const baseWeight = plannedWeight > 0 ? plannedWeight : actualWorkingWeight;
    let nextWeight = baseWeight;
    let nextReps = sets[0]?.plannedReps || 0;
    let note = "оставить";

    if (item.skipped) {
      drops.push(`${ex.name} пропущено`);
      if (consecutiveSkips(item.exerciseId) >= 2) {
        replacements.push(`${ex.name} → ${ex.alternatives[0]}`);
      }
    } else if (plannedDone && avgRpe < 8) {
      nextWeight = roundWeight(baseWeight * 1.035);
      note = "увеличить";
      wins.push(`${ex.name}: план выполнен легко`);
    } else if (plannedDone && avgRpe <= 9) {
      note = "оставить вес";
      wins.push(`${ex.name}: рабочая нагрузка подобрана верно`);
    } else {
      if (avgRpe >= 9) {
        nextWeight = roundWeight(baseWeight * 0.96);
        note = "снизить вес";
      } else {
        nextReps = Math.max(4, nextReps - 1);
        note = "снизить повторы";
      }
      drops.push(`${ex.name}: план не закрыт`);
    }

    if (plateauCount(item.exerciseId) >= 3) {
      replacements.push(`${ex.name}: сменить схему на 5×5 или 3×10`);
    }

    nextWeights.push(`${ex.name}: ${formatWeight(nextWeight)}, ${sets.length}×${nextReps} (${note})`);
  });

  const highRpeCount = items.filter((item) => Number(item.rpe) >= 9).length;
  const geneticAdvice = [
    "Рабочий диапазон держим 8-15 повторений, прогрессия только плавная: 2.5-5%.",
    "Zone 2: 25-35 минут 2-3 раза в неделю, лучше отдельно от тяжелых ног.",
    `Контроль массы: талия ${user().waist || "—"} см, аппетит ${user().appetite || "—"}. Если талия растет быстро, не добавляй калории агрессивно.`,
    "Кофеин можно за 30-45 минут до тренировки, если он не ухудшает сон.",
    "Связки и сухожилия: 2-3 разминочных подхода и без резких скачков веса."
  ];
  const coachComment = (highRpeCount >= 2
    ? "Много RPE 9-10. Следующую тренировку лучше сделать разгрузочной: минус 7-10% веса и без отказа."
    : "План обновлён по фактическим повторам и RPE. Держи технику и не гони вес быстрее восстановления.")
    + (genetic ? ` ${geneticAdvice.join(" ")}` : "");

  applyRecommendationToProgram(items, nextWeights);

  return {
    id: crypto.randomUUID(),
    userId: user().id,
    sessionId,
    createdAt: new Date().toISOString(),
    good: wins.length ? wins.join("; ") : "Ты зафиксировал данные, теперь система может точнее подбирать нагрузку.",
    drop: drops.length ? drops.join("; ") : "Критичных спадов нет.",
    nextPlan: `${nextWeights.join("; ")}. Дополнительно: ${geneticAdvice.slice(0, 2).join(" ")}`,
    replacements,
    coachComment
  };
}

function applyRecommendationToProgram(items, nextWeights) {
  items.forEach((sessionExercise) => {
    if (sessionExercise.skipped) return;
    const sets = setsFor(sessionExercise.id);
    const plannedDone = sets.every((set) => set.done && Number(set.actualReps) >= Number(set.plannedReps));
    const day = state.workout_days.find((item) => item.id === todayDay().id);
    const plan = day?.exercises.find((item) => item.exerciseId === sessionExercise.exerciseId);
    if (!plan) return;
    const doneSets = sets.filter((set) => set.done);
    const actualWorkingWeight = doneSets.length
      ? doneSets.reduce((sum, set) => sum + Number(set.actualWeight), 0) / doneSets.length
      : Number(sets[0]?.actualWeight || 0);
    const baseWeight = Number(plan.weight) > 0 ? Number(plan.weight) : actualWorkingWeight;
    if (plannedDone && Number(sessionExercise.rpe) < 8) plan.weight = roundWeight(baseWeight * 1.035);
    if (!plannedDone && Number(sessionExercise.rpe) >= 9) plan.weight = roundWeight(baseWeight * 0.96);
    if (!plannedDone && Number(sessionExercise.rpe) < 9) plan.reps = Math.max(4, targetReps(plan.reps) - 1);
  });
}

function toggleSkip(id) {
  const item = activeSession.exercises.find((exercise) => exercise.id === id);
  item.skipped = !item.skipped;
  render();
}

function addSet(id) {
  const item = activeSession.exercises.find((exercise) => exercise.id === id);
  const last = item.sets[item.sets.length - 1];
  item.sets.push({ ...last, id: crypto.randomUUID(), done: false });
  render();
}

function removeSet(id) {
  const item = activeSession.exercises.find((exercise) => exercise.id === id);
  if (item.sets.length > 1) item.sets.pop();
  render();
}

function toggleSet(exerciseId, setId) {
  const set = activeSession.exercises.find((item) => item.id === exerciseId).sets.find((item) => item.id === setId);
  set.done = !set.done;
  render();
}

function updateSet(exerciseId, setId, fieldName, value) {
  const set = activeSession.exercises.find((item) => item.id === exerciseId).sets.find((item) => item.id === setId);
  set[fieldName] = Number(value);
}

function updateActiveExercise(id, patch) {
  Object.assign(activeSession.exercises.find((item) => item.id === id), patch);
}

function updateDayTitle(id, title) {
  state.workout_days.find((day) => day.id === id).title = title;
  saveState();
}

function updatePlan(dayId, planId, fieldName, value) {
  const item = state.workout_days.find((day) => day.id === dayId).exercises.find((plan) => plan.id === planId);
  item[fieldName] = fieldName === "reps" ? value : Number(value);
  saveState();
}

function copyWeek() {
  program().template = `${program().name} · копия ${new Date().toLocaleDateString("ru-RU")}`;
  saveState();
  render();
}

function addDay() {
  const days = orderedDays();
  state.workout_days.push({
    id: crypto.randomUUID(),
    programId: program().id,
    order: days.length + 1,
    title: `День ${days.length + 1}`,
    focus: "фулбоди",
    exercises: [planExercise("ex-bench", 3, 10, 50, 90, "Настрой упражнение под клиента.")]
  });
  saveState();
  render();
}

function addExerciseToDay() {
  const day = orderedDays()[0];
  const used = new Set(day.exercises.map((item) => item.exerciseId));
  const next = state.exercises.find((item) => !used.has(item.id)) || state.exercises[0];
  day.exercises.push(planExercise(next.id, 3, 10, 30, 90, "Добавлено из админки."));
  saveState();
  render();
}

function resetDemo() {
  state = structuredClone(seed);
  activeSession = null;
  activeTab = "home";
  saveState();
  render();
}

function advanceProgramDay() {
  program().currentDayIndex = (program().currentDayIndex + 1) % orderedDays().length;
}

function consecutiveSkips(exerciseId) {
  const history = [...state.workout_session_exercises]
    .filter((item) => item.exerciseId === exerciseId)
    .sort((a, b) => new Date(state.workout_sessions.find((s) => s.id === b.sessionId).finishedAt) - new Date(state.workout_sessions.find((s) => s.id === a.sessionId).finishedAt));
  let count = 0;
  for (const item of history) {
    if (!item.skipped) break;
    count += 1;
  }
  return count;
}

function plateauCount(exerciseId) {
  const history = [...state.workout_session_exercises]
    .filter((item) => item.exerciseId === exerciseId && !item.skipped)
    .slice(-4);
  if (history.length < 4) return 0;
  const volumes = history.map((item) => item.volume);
  const last = volumes[volumes.length - 1];
  return volumes.every((value) => Math.abs(value - last) < 1) ? 3 : 0;
}

function exerciseProgress() {
  return state.exercises.map((ex) => {
    const items = state.workout_session_exercises.filter((item) => item.exerciseId === ex.id && !item.skipped);
    const setRows = items.flatMap((item) => setsFor(item.id)).filter((set) => set.done);
    if (!setRows.length) return null;
    const max = Math.max(...setRows.map((set) => Number(set.actualWeight)));
    const volume = setRows.reduce((sum, set) => sum + Number(set.actualWeight) * Number(set.actualReps), 0);
    const first = setRows[0].actualWeight;
    const last = setRows[setRows.length - 1].actualWeight;
    return { name: ex.name, max, volume, trend: roundWeight(last - first) };
  }).filter(Boolean);
}

function totalVolume() {
  return state.workout_sessions.reduce((sum, session) => sum + Number(session.volume), 0);
}

function maxWorkingWeight() {
  const weights = state.workout_sets.filter((set) => set.done).map((set) => Number(set.actualWeight));
  return weights.length ? Math.max(...weights) : 0;
}

function skippedExercisesCount() {
  return state.workout_session_exercises.filter((item) => item.skipped).length;
}

function roundWeight(value) {
  return Math.round(value / 2.5) * 2.5;
}

function formatWeight(value) {
  return Number(value) > 0 ? `${value} кг` : "вес вписать";
}

function formatDate(value) {
  return new Date(value).toLocaleString("ru-RU", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
}

function escapeAttr(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

render();
