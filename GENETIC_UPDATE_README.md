
# Обновление Fitness Coach MVP с учетом генотеста

## Файлы

1. `genetic_profile_garden_fitness.json` — структурированный профиль из VCF Genotek.
2. `geneticCoachPatch.js` — готовый JS-модуль для подключения в приложение.

## Что обновлено

- Тренировки: основной диапазон 8–15 повторений, плавная прогрессия 2.5–5%.
- Кардио: Zone 2 2–3 раза/неделю, интервалы максимум 1 раз/неделю.
- Питание: белок 2.0–2.2 г/кг, контроль аппетита, талии и калорийности.
- Кофеин: быстрый CYP1A2, можно 150–250 мг до тренировки.
- Риск травм: беречь сухожилия/связки, меньше резких скачков веса.
- AI Coach: добавлен промпт с учетом генетики.

## Как подключить

### Если приложение на React/Vite

1. Скопируй `geneticCoachPatch.js` в `src/data/`.
2. Импортируй:

```js
import { GENETIC_PROFILE, applyGeneticCoachProfile, getGeneticCoachPrompt } from './data/geneticCoachPatch';
```

3. В начальном состоянии приложения добавь:

```js
const initialState = applyGeneticCoachProfile(baseState);
```

4. В AI Coach добавь `getGeneticCoachPrompt()` в system prompt.

### Если приложение без сборки

1. Открой основной JS-файл.
2. Скопируй объект `GENETIC_PROFILE`.
3. Добавь его в `localStorage`:

```js
localStorage.setItem('gardenFitnessGeneticProfile', JSON.stringify(GENETIC_PROFILE));
```

## Правила для AI Coach

- Не давать частые тесты 1ПМ.
- Основная работа: 8–15 повторений.
- Вес повышать только после чистого выполнения всех подходов.
- При усталости/плохом сне — не повышать нагрузку.
- Белок держать высоким.
- Углеводы привязывать к тренировкам.
- Следить за талией при наборе массы.
