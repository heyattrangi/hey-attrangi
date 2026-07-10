/**
 * Mind Matrix (Mind Check) — fixed session totals for the whole website.
 *
 * Every Mind Check uses the same session shape so scores stay comparable:
 * - **12** short visual steps total
 * - **6** logic questions + **6** processing-speed / enumeration questions
 * - **3 minutes** (180 seconds) global timer, enforced client-side
 * - Selection mode: `random_balanced` (random pick from eligible pools)
 *
 * Wired through:
 * - `app/api/test/start` — builds the question set and returns config
 * - `app/api/test/finish` — scores against these totals
 * - `lib/mind-matrix/scoring.ts` — accuracy (70%) + time left (30%)
 * - `components/mind-matrix/VisualTestEngine.tsx` — entry copy and timer UI
 *
 * Note: In TypeScript/JavaScript use `/** … */` for multi-line comments (docstrings).
 * Python-style `'''Comment'''` or `"""Comment"""` does not work in this codebase.
 */
export const MIND_MATRIX_TOTAL_QUESTIONS = 12;
export const MIND_MATRIX_TOTAL_TIME_SECONDS = 180;
export const MIND_MATRIX_PER_CATEGORY = 6;
export const MIND_MATRIX_SELECTION_MODE = "random_balanced" as const;

/** Human-readable duration for marketing / entry screens (e.g. "3 min"). */
export const MIND_MATRIX_DURATION_LABEL = "3 min";
