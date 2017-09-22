# mocha-browser-sample
Shows how to use mocha and chai to test browser code

## Dependencies:
mocha, chai, chai-as-promised

if your code uses promises, chai-as-promised is necessary. To include it, you must browserify it as follow:

    browserify node_modules/chai-as-promised/chai-as-promised.js --standalone chaiAsPromised -o lib/chai-as-promised.js
    
## Tips & tricks

Using chai's TDD interface, the usual `describe` and `it` methods are not available. Instead, you must use `suite` and `test` respectively.
