module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat obrazky/ do _site/obrazky
	eleventyConfig.addPassthroughCopy("obrazky");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");

  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
