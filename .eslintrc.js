module.exports = {
  "extends": "airbnb/hooks",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true,
  },
  "plugins": [ "react", "jsx-a11y", "import", "prettier" ],
  "rules": {
    "semi": [ 0 ],
    "prettier/prettier": "error"
  },
}
