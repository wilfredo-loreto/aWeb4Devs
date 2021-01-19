const fs = require('fs');
const globby = require('globby');
const getDate = new Date().toISOString();
const axios = require("axios");
(async () => {
 
  
  const pages = await globby([
    'pages/**/*{.js,.mdx}',
    '!pages/_*.js',
    '!pages/api',
    '!pages/**/[articletitle].js',
    '!pages/**/[techtitle].js',
    '!pages/**/[keyword].js',
  ]);

  const res = await Promise.all([
    axios.get(
      "http://aweb4devsapi.herokuapp.com/articles"
    ),
    axios.get(
      "http://aweb4devsapi.herokuapp.com/techs/frontend"
    ),
    axios.get(
      "http://aweb4devsapi.herokuapp.com/techs/backend"
    ),
  ]);
  const articles = (await res[0]).data.articles;
  const frontendTechs = (await res[1]).data.techs;
  const backendTechs = (await res[2]).data.techs;

  const articlesRoutes = articles.map(article => article.title.split(" ").join("-").replace("?","%3F").replace("&","&amp;").replace("<","&lt;").replace(">","gt;") )
  const frontendRoutes = frontendTechs.map(tech => tech.title.split(" ").join("-").replace("?","%3F").replace("&","&amp;").replace("<","&lt;").replace(">","gt;") )
  const backendRoutes = backendTechs.map(tech => tech.title.split(" ").join("-").replace("?","%3F").replace("&","&amp;").replace("<","&lt;").replace(">","gt;") )
 
  const xmlArticlesList = `
  ${articlesRoutes
      .map(articleTitleSlugSyntax => {
          return `
        <url>
          <loc>${`https://aweb4devs.com/articles/${articleTitleSlugSyntax}`}</loc>
          <lastmod>${getDate}</lastmod>
        </url>`;
      })
      .join("")}
`;
  const xmlFrontendList = `
  ${frontendRoutes
      .map(techTitleSlugSyntax => {
          return `
        <url>
          <loc>${`https://aweb4devs.com/articles/${techTitleSlugSyntax}`}</loc>
          <lastmod>${getDate}</lastmod>
        </url>`;
      })
      .join("")}
`;
  const xmlBackendList = `
  ${backendRoutes
      .map(techTitleSlugSyntax => {
          return `
        <url>
          <loc>${`https://aweb4devs.com/articles/${techTitleSlugSyntax}`}</loc>
          <lastmod>${getDate}</lastmod>
        </url>`;
      })
      .join("")}
`;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('.js', '')
                  .replace('.mdx', '');
                  
                const route = path === '/index' ? '' : path;

                return `
                        <url>
                            <loc>${`https://aweb4devs.com${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
              ${xmlArticlesList}
              ${xmlFrontendList}
              ${xmlBackendList}
        </urlset>
    `


  fs.writeFileSync('public/sitemap.xml', sitemap);
})();

