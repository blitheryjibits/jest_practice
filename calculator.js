
calculator = {
    add(a, b) { this.checkArguments(arguments);
        return a + b },

    subtract(a, b) { this.checkArguments(arguments);
        return a - b },

    divide(a, b) { this.checkArguments(arguments);
        return a / b }, 

    multiply(a, b) { this.checkArguments(arguments);
        return a * b },
    
    checkArguments(args) {
        for(const arg in args) {
            if (typeof args[arg] !== 'number') throw new Error('Incompatible type for operation')
        }
        if(args.length !== 2) throw new Error('Incorrect number of arguments provided');
    }
}

module.exports = calculator;