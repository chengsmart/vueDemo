module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'sourceType': 'module'
    },
    'plugins': [
        // 此插件用来识别.html 和 .vue文件中的js代码
        'html'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-undef': 1, //不允许未声明的变量
        'no-undef-init': 1, //不允许初始化变量时给变量赋值undefined
        'no-undefined': 1, //不允许把undefined当做标识符使用
        'no-unused-vars': [1, {'vars': 'all', 'args': 'after-used'}], //不允许有声明后未使用的变量或者参数
    }
}