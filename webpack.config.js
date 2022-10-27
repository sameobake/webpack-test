module.exports = {
    // Entry Point
    entry: "./src/index.js",
    output: {
        // Set Output Path
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
    mode: "development",
    // mode: "production",

    // Local Dev Server Setting
    devServer: {
        static: "dist",
        open: true,
    }
}