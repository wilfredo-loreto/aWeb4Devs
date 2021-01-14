const YOUR_URL = "https://aweb4devs.com"
const getDate = new Date().toISOString();

async function generateSiteMap(){

    // Send a list of file names to globby for it to read
  // We add an ! before the files we want to be ignored (in this case, the api pages and the dynamically generated pages
  // change the file path to match the files in your own project
  const pages = await globby([
    'src/pages/**/*.js',
    '!src/pages/_*.js',
    '!src/pages/**/[id].js',
    '!src/pages/api',
])

}