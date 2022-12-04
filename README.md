# React with typescript, yarn, prettier, eslint and pre commit hook (husky)

> This configuration uses create-react-app and airbnb's style guide as the base style guide.

## Pre-requirements
```
node 16+
npm 8+
yarn
```

## Step 1 - Setup basic app

#### 1.1. Create react app
```
yarn create react-app [name] --template typescript
```

#### 1.2. Upgrade yarn
> Ensure to use newest version of the yarn (at leaset v. 3)
```
yarn set version stable
```

#### 1.3. Add to .yarnrc in the root directory
> Defines what linker should be used for installing Node packages
```
nodeLinker: node-modules
```

#### 1.4. Update .gitignore
```
# yarn
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions

# Optional eslint cache
.eslintcache

# Logs
logs
*.log
```

## Step 2 - Setup prettier

#### 2.1. Install prettier as dev dependency.

```
yarn add --dev prettier
```

#### 2.2. Add to .prettierrc.json file in the root directory
 
 ```
{
  "arrowParens": "avoid",
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false
}
 ```

#### 2.3. Verify prettier setup

```
yarn prettier --check ./src
```

> It should print some formatting errors - this is ok. Continue with rest of the setup before fixing them.

## Step 3 - Setup eslint

#### 3.1. Install eslint

```
yarn add --dev eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-plugin-react
```

#### 3.2. Create .eslintrc.json file
```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "@typescript-eslint/semi": ["error", "never"]
  }
}

```

#### 3.3. Disable the default eslint rules specified by "create-react-app" by deleting "eslintConfig" object in package.json.
```
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  }
}
```

#### 3.4. Verify eslint setup

```
yarn eslint --ext .jsx,.js,.tsx,.ts ./src
```

> It should print some errors like "XXXX problems (XXXX errors, XX warnings)"

## Step 4 - Setup pre-commit hook with husky & lint-staged

#### 4.1. Install husky and lint-staged
```
yarn add --dev husky lint-staged
```

#### 4.2. Set up a pre-commit hook using husky & lint-staged to make sure that every commit is formatted.

```
yarn husky install
yarn husky add .husky/pre-commit "yarn lint-staged"
```

#### 4.3. Add prepare script to the package.json
```
"scripts": {
    ...
    "prepare": "husky install"
  },
```

#### 4.4. Add lint-staged configuration to package.json

```
{
  ....
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": "prettier --write",
    "src/**/*.{js,jsx,ts,tsx}": "eslint --cache --max-warnings=0"
  }
}
```

#### 4.5. Verify pre-commit hook setup

##### 4.5.1. Stage all the modified files and commit your changes

```
git add .
git commit -m "initial setup"
```

> It should trigger pre-commit hook and show messages similar like below

```
✔ Preparing lint-staged...
❯ Running tasks for staged files...
  ❯ package.json — 1 file
    ✔ src/**/*.{js,jsx,ts,tsx,json,css,scss,md} — 1 file
    ❯ src/**/*.{js,jsx,ts,tsx} — 1 file
      ✖ eslint --cache --max-warnings=0 [FAILED]
↓ Skipped because of errors from tasks. [SKIPPED]
✔ Reverting to original state because of errors...
✔ Cleaning up temporary files...

✖ eslint --cache --max-warnings=0:
...
✖ 6 problems (6 errors, 0 warnings)

✔ Preparing lint-staged...
❯ Running tasks for staged files...
  ❯ package.json — 1 file
    ✔ src/**/*.{js,jsx,ts,tsx,json,css,scss,md} — 1 file
    ❯ src/**/*.{js,jsx,ts,tsx} — 1 file
      ✖ eslint --cache --max-warnings=0 [FAILED]
↓ Skipped because of errors from tasks. [SKIPPED]
✔ Reverting to original state because of errors...
✔ Cleaning up temporary files...
husky - pre-commit hook exited with code 1 (error)
```

## If you get similar messages, then your configuration is working properly.