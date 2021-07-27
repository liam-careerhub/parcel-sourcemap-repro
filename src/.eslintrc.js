module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "import",
        "@typescript-eslint",
        "jsx-a11y",
        "react",
        "react-hooks"
    ],
    "extends": [
        "eslint:recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalDecorators": true
        },
        "ecmaVersion": 9,
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname
    },
    "rules": {
        "@typescript-eslint/prefer-optional-chain": [
            "error"
        ],
        "react/jsx-filename-extension": [
            2,
            {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        "react/jsx-closing-tag-location": [
            "off"
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-props-no-spreading": [
            "off"
        ],
        "react/jsx-indent-props": [
            "error",
            {
                "ignoreTernaryOperator": true,
                "indentMode": 4
            }
        ],
        "react/jsx-wrap-multilines": [
            "off"
        ],
        "arrow-parens": [
            "warn",
            "as-needed"
        ],
        "indent": "off",
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "import/no-unresolved": "error",
        "import/extensions": [
            "error",
            "never"
        ],
        "linebreak-style": [
            "off"
        ],
        "import/no-extraneous-dependencies": [
            "off"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "max-len": [
            "error",
            140
        ],
        //from tslint
        "arrow-body-style": 2,
        "@typescript-eslint/prefer-function-type": 2,
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "default",
                "format": ["camelCase"]
            },

            {
                "selector": "variable",
                "format": ["PascalCase", "camelCase", "UPPER_CASE"]
            },
            {
                "selector": "parameter",
                "format": ["camelCase"],
                "leadingUnderscore": "allow"
            },
            {
                "selector": "enumMember",
                "format": ["PascalCase"]
            },
            {
                "selector": "enum",
                "format": ["PascalCase"]
            },
            {
                "selector": "property",
                "format": ["PascalCase", "camelCase"] //because we are inconsitent with our model's case in the backend
            },
            {
                "selector": "memberLike",
                "modifiers": ["private"],
                "format": ["camelCase"],
                "leadingUnderscore": "forbid"
            },

            {
                "selector": "typeLike",
                "format": ["PascalCase"]
            },
            {
                "selector": "typeParameter",
                "format": ["PascalCase"],
                "prefix": ["T"]
            }
        ],
        "camelcase": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "import/no-named-default": "off",
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "curly": [
            2,
            "all"
        ],
        "guard-for-in": 1,
        "no-angle-bracket-type-assertion": [
            0
        ],
        "@typescript-eslint/unified-signatures": 2,
        "react/prop-types": "off",
        "semi": [
            "off"
        ],
        "@typescript-eslint/semi": [
            "error"
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "radix": [
            "error",
            "always"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "prefer-const": "error",
        "no-param-reassign": "off",
        "prefer-destructuring": "off",
        "react/destructuring-assignment": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-quotes": [
            "warn",
            "prefer-single"
        ],
        "no-restricted-globals": "off",
        "@typescript-eslint/interface-name-prefix": [
            "off"
        ],
        "object-curly-newline": [
            "off"
        ],
        "import/prefer-default-export": "off",
        "@typescript-eslint/type-annotation-spacing": [
            "error",
            {
                "before": false,
                "after": true,
                "overrides": {
                    "arrow": {
                        "before": true,
                        "after": true
                    }
                }
            }
        ],
        "import/no-cycle": [
            "off", //ignore for now because we need to do big refactors
            {
                "ignoreExternal": true
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-return-await": "off",
        "@typescript-eslint/return-await": [
            "error",
            "always"
        ]
    },
    "env": {
        "browser": true,
        "node": false,
        "jquery": true
    },
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".ts",
                ".tsx"
            ]
        },
        "import/resolver": {
            // use <root>/tsconfig.json
            "typescript": {}
        },
        "react": {
            "version": "detect", // Tells eslint-plugin-react to automatically detect the version of React to use,
            "linkComponents": [
                { "name": "Link", "linkAttribute": "to" }
            ]
        },
        "typescript": {
            "alwaysTryTypes": true // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
        }
    },
    "ignorePatterns": [
        ".eslintrc.js"
    ]
};
