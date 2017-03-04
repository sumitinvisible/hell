var customer=
{
    name:"sumit kumar",
    id:"100"
}
// in var{name,id}=customer;
//name;
//acd;
//hoisting is not possible in arrow functions
// use of arrow functions
function Prefixer(prefix) {
    this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) {
    return arr.map((x) => {
        return this.prefix + x;
    });
};
// without arrow functions
function Prefixer(prefix) {
    this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) { // (A)
    'use strict';
    return arr.map(function (x) { // (B)
        // Doesn’t work:
        return this.prefix + x; // (C)
    });
};

