// Override Defaults

module.exports = {
    srcPath: "./src",
    templatePath: "./src/pages",
    buildPath: "./dist",
    minifyHTML: true,
    minifyJS: true,
    minifyCSS: true,
    homePage: "index.html",
    templateFiles: [
        "./src/pages/index.jade",
        './src/pages/chart.jade',
        './src/pages/efir.jade',
        './src/pages/news.jade',
        './src/pages/news-item.jade',
        './src/pages/podcasts.jade',
        './src/pages/idea.jade'
    ]
};
