const geneticCoachRules = {
  repRange: {
    min: 8,
    max: 15,
    message: "Keep hypertrophy work mostly in the 8-15 rep range."
  },
  progression: {
    minPercent: 2.5,
    maxPercent: 5,
    message: "Increase load by 2.5-5% only after clean completion at RPE below 8."
  },
  zone2: {
    frequencyPerWeek: "2-3",
    durationMinutes: "25-35",
    message: "Add Zone 2 without compromising leg-day recovery."
  },
  appetiteAndWaist: {
    message: "Track appetite and waist weekly. Fast waist gain means the surplus is too aggressive."
  },
  caffeine: {
    timing: "30-45 minutes pre-workout",
    message: "Use caffeine before training only if sleep and blood pressure stay normal."
  },
  connectiveTissue: {
    message: "Protect tendons and ligaments with warm-up sets and no sudden load jumps."
  }
};

function buildGeneticCoachComment({ highRpeCount = 0, waist, appetite, sleepQuality } = {}) {
  const recoveryNote = highRpeCount >= 2
    ? "High RPE detected: consider a deload or hold the load."
    : "Progress can continue if technique stays clean.";

  return [
    recoveryNote,
    geneticCoachRules.repRange.message,
    geneticCoachRules.progression.message,
    geneticCoachRules.zone2.message,
    `Waist: ${waist || "not set"}, appetite: ${appetite || "not set"}, sleep: ${sleepQuality || "not set"}/10.`,
    geneticCoachRules.caffeine.message,
    geneticCoachRules.connectiveTissue.message
  ].join(" ");
}

if (typeof window !== "undefined") {
  window.geneticCoachRules = geneticCoachRules;
  window.buildGeneticCoachComment = buildGeneticCoachComment;
}
