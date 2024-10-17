import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

import pluginJs from '@eslint/js';

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Desactiva la regla que exige la importación de React
    }
  }
];