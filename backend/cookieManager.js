const puppeteer = require("puppeteer");
const fs = require("fs-extra");
const path = require("path");

const COOKIES_PATH = path.join(__dirname, "cookies.json");

async function refreshCookies() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.youtube.com", { waitUntil: "networkidle2" });

  console.log("Log in manually and press ENTER in the terminal...");
  await new Promise((resolve) => process.stdin.once("data", resolve));

  const cookies = await page.cookies();
  await fs.writeJson(COOKIES_PATH, cookies, { spaces: 2 });

  console.log("Cookies saved successfully!");
  await browser.close();
}

async function getCookies() {
  if (await fs.pathExists(COOKIES_PATH)) {
    return JSON.parse(await fs.readFile(COOKIES_PATH, "utf-8"));
  }
  return null;
}

module.exports = { refreshCookies, getCookies };
