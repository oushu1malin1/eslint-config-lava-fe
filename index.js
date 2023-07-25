module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  // 配置 eslint-plugin-vue 的 parser，用于解析 .vue 文件
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'globals': {
    '__webpack_public_path__': 'writable'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    // 可以使用 ts-ignore，emmm
    '@typescript-eslint/ban-ts-ignore': 'off',
    // 可以使用 @ts-xxx 来屏蔽掉某些严格的规则
    '@typescript-eslint/ban-ts-comment': 'off',
    // 禁止空函数
    '@typescript-eslint/no-empty-function': 'off',
    // 要求导出函数和类的公共类方法显式定义返回值和参数的类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 强制要求在数组方法的回调中使用 return 语句
    'array-callback-return': 'error',
    // 不允许变量在其被定义的块之外使用
    'block-scoped-var': 'error',
    // 类中的实例方法必须使用 this，否则其可以被转为类的静态方法
    'class-methods-use-this': 'error',
    // 'consistent-return': 'off',
    // 要求 switch 语句必须有 default case，即便是空的
    'default-case': 'error',
    // 在成员表达式中的 '.' 之前或之后放置换行，且 '.' 应该和属性 (property) 部分在同一行
    'dot-location': ['error', 'property'],
    // 访问对象的属性时使用 . 而不是 []，除非 [] 里面是个变量
    'dot-notation': 'error',
    // 不允许使用 eval
    'no-eval': 'error',
    // 不允许修改只读的全局变量
    'no-global-assign': 'error',
    // 强制使用 === 和  !==
    'eqeqeq': 'error',
    // 消除脚本顶层或其他区块内不必要的、可能引起混淆的区块
    'no-lone-blocks': 'error',
    // 禁止在循环中编写函数
    'no-loop-func': 'error',
    // 不允许多个连续的空格
    'no-multi-spaces': 'error',
    // 不允许使用 new 创建了对象，但不将其赋值给一个变量的行为
    'no-new': 'error',
    // 不允许使用 Function 构造函数从字符串中创建函数
    'no-new-func': 'error',
    // 不允许对 String、Number、Boolean 使用 new
    'no-new-wrappers': 'error',
    // 不允许修改函数参数
    'no-param-reassign': 'error',
    // return 语句中不允许赋值
    'no-return-assign': 'error',
    // return 语句中不允许出现 await
    'no-return-await': 'error',
    // 不允许出现 'javascript:void(0)
    'no-script-url': 'error',
    // 不允许出现变量自己和自己比较
    'no-self-compare': 'error',
    // throw 只能抛出错误对象
    'no-throw-literal': 'error',
    // 禁止使用 void 运算符
    'no-void': 'error',
    // 不允许无用的 return;
    'no-useless-return': 'error',
    // 对类似于 to do 的注释抛出警告
    'no-warning-comments': 'warn',
    // async 函数中必须使用 await
    'require-await': 'error',
    // 局部变量不允许和外部的变量重名
    'no-shadow': 'error',
    // 同行的代码块，前后需要加上空格
    'block-spacing': 'error',
    // 大括号缩进风格
    'brace-style': 'error',
    // 逗号后面加空格
    'comma-spacing': 'error',
    // 强制要求在对象和数组的最后一个元素上使用尾随逗号
    'comma-dangle': ['error', 'only-multiline'],
    // 不允许在函数名和调用它的开头小括号之间有空格
    'func-call-spacing': ['error', 'never'],
    // 强制执行一致的缩进风格, switch 中的 case 语句缩进 2 个空格
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    // 对象属性的 key 和冒号之间每没空格，value 和冒号之间有空格
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    // 关键字前后要有空格
    'keyword-spacing': 'error',
    // 单行代码长度最长为 150 个字符，超出警告
    'max-len': ['warn', { 'code': 150 }],
    // 使用魔数抛出警告，忽略 0、-1、1，忽略数组索引
    'no-magic-numbers': ['warn', {
      'ignore': [0, -1, 1],
      'ignoreArrayIndexes': true,
    }],
    // 不允许行末有尾随空格
    'no-trailing-spaces': ['error'],
    // 不允许没必要的三元表达式，如 const isYes = answer === 1 ? true : false;
    'no-unneeded-ternary': 'error',
    // 使用 . 调用对象的属性、方法时，. 前面不要有空格
    'no-whitespace-before-property': 'error',
    // 对象的大括号前后加空格，包括 import 时
    'object-curly-spacing': ['error', 'always'],
    // 不允许尾部分号
    'semi': ['error', 'never'],
    // 不允许在分号前后放置空格
    'semi-spacing': 'error',
    // 代码块前空格
    'space-before-blocks': 'error',
    // 在函数名或 function 关键字和开头的括号之间不许有空白
    'space-before-function-paren': ['error', 'never'],
    // 运算符周围强制加空格
    'space-infix-ops': 'error',
    // 强制使用单引号
    'quotes': ['error', 'single'],
    // 单行注释 (// /*) 前后加空格
    'spaced-comment': ['error', 'always'],
    // 箭头前后加空格
    'arrow-spacing': 'error',
    // 不允许重复导入同一模块
    'no-duplicate-imports': 'error',
    // 不允许有无意义的计算属性名
    'no-useless-computed-key': 'error',
    // 不允许将导入、导出和解构操作重命名为同一名称
    'no-useless-rename': 'error',
    // 不允许使用 var 声明变量
    'no-var': 'error',
    // 如果一个变量从未被重新赋值，使用 const 声明会更好
    'prefer-const': 'error',
    // 函数中的变动参数推荐使用 '剩余参数'，而不是 arguments 变量
    'prefer-rest-params': 'error',
    // 使用 console 时抛出警告
    'no-console': 'warn',
    // 使用驼峰命名，不检查属性名称，不检查非结构化标识符（但仍然检查代码中以后对这些标识符的使用）
    'camelcase': ['error', { 'properties': 'never', 'ignoreDestructuring': true }],
    // 关闭 vue 自定义事件名称的风格检查，即驼峰和下划线都可以
    'vue/custom-event-name-casing': 'off',
    // 关闭 vue 组件多单词命名
    'vue/multi-word-component-names': 'off',
    // vue 组件每行最大属性个数（单行最多 2 个，多行每行最多 1 个），超出换行
    'vue/max-attributes-per-line': ['warn', {
      'singleline': { 'max': 2 },
      'multiline': { 'max': 1 }
    }],
    // 模板中禁止出现多个连续的空格
    'vue/no-multi-spaces': 'error',
    // 模板中表达式的双括号两边要加空格
    'vue/mustache-interpolation-spacing': 'error',
    // 模板中属性赋值等号两边不许有空格
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // 组件中非必传的属性，不需要强制设置默认值
    'vue/require-default-prop': 'off',
  },
  'overrides': [
    // 对于一些测试文件，开启 jest 环境，启用 jest 相关的全局变量
    {
      'files': [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      'env': {
        'jest': true
      }
    },
    // 对于 .ts、.tsx 文件配置的一些额外规则
    {
      'files': [
        '**/*.ts',
        '**/*.tsx'
      ],
      'rules': {
        'camelcase': ['off'],
        'no-shadow': ['off'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-magic-numbers': [
          'warn',
          {
            'ignore': [0, 1, -1],
            'ignoreEnums': true
          }
        ],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/naming-convention': [
          'off',
          {
            'selector': 'default',
            'leadingUnderscore': 'allow',
            'format': [
              'camelCase',
              'PascalCase',
              'UPPER_CASE'
            ]
          },
          {
            'selector': 'default',
            'modifiers': [
              'destructured'
            ],
            'format': [
              'camelCase',
              'PascalCase',
              'UPPER_CASE',
              'snake_case'
            ]
          },
          {
            'selector': 'interface',
            'format': [
              'PascalCase',
              'UPPER_CASE'
            ],
            'custom': {
              'regex': '^I[A-Z]',
              'match': false
            }
          },
          {
            'selector': 'property',
            'format': [
              'camelCase',
              'snake_case',
              'PascalCase'
            ]
          }
        ]
      }
    }
  ]
}