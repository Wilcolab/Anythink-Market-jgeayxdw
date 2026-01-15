function toKebabCase(input) {
    // Error handling for invalid inputs
    if (typeof input !== 'string') {
        throw new Error('Input must be a string. Received: ' + typeof input);
    }

    if (input.length === 0) {
        throw new Error('Input string cannot be empty.');
    }

    // Replace spaces with hyphens
    let result = input.replace(/\s+/g, '-');

    // Insert hyphens before uppercase letters (camelCase) and convert to lowercase
    result = result.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    return result;
}

// Example usage:
console.log(toKebabCase("hello world"));      // Output: "hello-world"
console.log(toKebabCase("helloWorld"));       // Output: "hello-world"
console.log(toKebabCase("HelloWorld"));       // Output: "hello-world"
console.log(toKebabCase("hello-world"));      // Output: "hello-world"