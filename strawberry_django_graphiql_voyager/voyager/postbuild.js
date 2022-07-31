const fs = require("fs");

function readBuild(filetype) {
  const path = `./build/static/${filetype}/`;
  const files = fs.readdirSync(path);
  return files;
}

/**
 *
 * @param {array} scripts
 */
const generatePastableScriptTags = scripts => {
  scripts
    .filter(s => !s.endsWith(".map"))
    .forEach(s =>
      console.log(
        `<script src="{% static 'strawberry_django_graphiql_voyager/voyager/js/${s}' %}"></script>`
      )
    );
  console.log("\n");
};

/**
 *
 * @param {array} scripts
 */
const generatePastableStyleTags = styles => {
  styles
    .filter(s => !s.endsWith(".map"))
    .forEach(s =>
      console.log(
        `<link href="{% static 'strawberry_django_graphiql_voyager/voyager/css/${s}' %}" rel="stylesheet" /> `
      )
    );
  console.log("\n");
};

const scripts = readBuild("js");
const styles = readBuild("css");

generatePastableStyleTags(styles);
generatePastableScriptTags(scripts);
