/**
 * Converts a given string to camelCase format.
 *
 * @param {string} str - The input string to be converted.
 * @throws {Error} Throws an error if the input is not a string.
 * @throws {Error} Throws an error if the input string is empty or contains only whitespace.
 * @throws {Error} Throws an error if the input string does not contain at least one alphabetic character.
 * @returns {string} The converted string in camelCase format.
 *
 * @example
 * console.log(camelCase("    hello-world   ")); // helloWorld
 * console.log(camelCase("hello_world_example")); // helloWorldExample
 * try {
 *     camelCase("82"); // throws error
 * } catch (e) {
 *     console.error(e.message); // Input must contain at least one alphabetic character
 * }
 */

/**
 * Converts a given string to dot.case format.
 *
 * @param {string} str - The input string to be converted.
 * @throws {Error} Throws an error if the input is not a string.
 * @throws {Error} Throws an error if the input string is empty or contains only whitespace.
 * @throws {Error} Throws an error if the input string does not contain at least one alphabetic character.
 * @returns {string} The converted string in dot.case format.
 *
 * @example
 * console.log(dotCase("    hello-world   ")); // hello.world
 * console.log(dotCase("hello_world_example")); // hello.world.example
 * try {
 *     dotCase("82"); // throws error
 * } catch (e) {
 *     console.error(e.message); // Input must contain at least one alphabetic character
 * }
 */
function camelCase(str) {
    // Check if input is a string
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    function dotCase(str) {
        // Check if input is a string
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        // Remove leading and trailing whitespace
        const trimmed = str.trim();

        // Check if string is empty after trimming
        if (trimmed.length === 0) {
            throw new Error('Input cannot be empty or contain only whitespace');
        }

        // Check if string contains at least one alphabet character
        if (!/[a-zA-Z]/.test(trimmed)) {
            throw new Error('Input must contain at least one alphabetic character');
        }

        // Split by spaces, hyphens, underscores and filter empty strings
        const words = trimmed
            .split(/[\s\-_]+/)
            .filter(word => word.length > 0);

        // Convert to dot.case
        return words
            .map(word => word.toLowerCase())
            .join('.');
    }

    // Example usage:
    console.log(dotCase("    hello-world   ")); // hello.world
    console.log(dotCase("hello_world_example")); // hello.world.example
    try {
        dotCase("82"); // throws error
    } catch (e) {
        console.error(e.message); // Input must contain at least one alphabetic character
    }
    // Remove leading and trailing whitespace
    const trimmed = str.trim();

    // Check if string is empty after trimming
    if (trimmed.length === 0) {
        throw new Error('Input cannot be empty or contain only whitespace');
    }

    // Check if string contains at least one alphabet character
    if (!/[a-zA-Z]/.test(trimmed)) {
        throw new Error('Input must contain at least one alphabetic character');
    }

    // Split by spaces, hyphens, underscores and filter empty strings
    const words = trimmed
        .split(/[\s\-_]+/)
        .filter(word => word.length > 0);

    // Convert to camelCase
    return words
        .map((word, index) => {
            // First word stays lowercase, rest are capitalized
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
console.log(camelCase("    hello-world   ")); // helloWorld
console.log(camelCase("hello_world_example")); // helloWorldExample
try {
    camelCase("82"); // throws error
} catch (e) {
    console.error(e.message); // Input must contain at least one alphabetic character
}

