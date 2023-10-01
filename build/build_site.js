import * as fs from "fs";

console.log(`<html><body>`);

for (let entry of fs.readdirSync("../projects")) {
  try {
    let info = JSON.parse(fs.readFileSync(`../projects/${entry}/info.json`));

    console.log(`<div class="project">`);
    console.log(`  <img src="../projects/${entry}/image.png" width="200" />`);
    console.log(`  <strong>${info.name}</strong>`);
    console.log(`  <span>${info["one-liner"]}</span>`);
    console.log(`</div>`);
  } catch (err) {
    // Most not filled out yet, ignore
  }
}

console.log(`</body></html>`);
