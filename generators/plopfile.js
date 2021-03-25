module.exports = function generate(plop) {
  plop.setGenerator('component', {
    description: 'application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{camelCase name}}.tsx',
        templateFile: 'templates/components/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/components/styles.ts.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{camelCase name}}.spec.tsx',
        templateFile: 'templates/components/test.tsx.hbs',
      },
    ],
  });
};
