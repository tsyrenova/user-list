module.exports = {
    "src/**/*.{ts,tsx}": [() => "tsc --noEmit", "prettier --write", "eslint"]
}