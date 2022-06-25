var API = (function() {
    // internal stuff goes in here
    // ...
    // some public methods i'll expose later
    // all have access to the internals since they're inside the closure
    function method1() { ... }
    function method2() { ... }
    var somevar;
    return {
        public_method1: method1,
        public_method2: method2,
        public_var: somevar,
    };
})();

// use the API:
API.public_method1();
