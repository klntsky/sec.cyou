export const exit = function (...args) {
    if (args.length) console.error(args);
    process.exit(1);
}

export default exit;
