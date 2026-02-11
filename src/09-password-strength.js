/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here if (typeof password !== "string" || password.length === 0) {
  if (typeof password !== "string" || password.length === 0) {
    return "weak";
  }

  let criteriaCount = 0;

  // 1. At least 8 characters
  if (password.length >= 8) {
    criteriaCount++;
  }

  // 2. At least one uppercase
  if (/[A-Z]/.test(password)) {
    criteriaCount++;
  }

  // 3. At least one lowercase
  if (/[a-z]/.test(password)) {
    criteriaCount++;
  }

  // 4. At least one number
  if (/[0-9]/.test(password)) {
    criteriaCount++;
  }

  // 5. At least one special character
  if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
    criteriaCount++;
  }

  // Strength decision
  if (criteriaCount <= 1) return "weak";
  if (criteriaCount <= 3) return "medium";
  if (criteriaCount === 4) return "strong";
  if (criteriaCount === 5) return "very strong";

}