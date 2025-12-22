import { chromium } from "playwright"

async function main() {
  const url = process.env.HERO_URL || "http://localhost:3000"
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

  const consoleErrors = []
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push({ type: msg.type(), text: msg.text() })
    }
  })
  page.on("pageerror", (err) => consoleErrors.push({ type: "pageerror", text: err.message }))

  await page.goto(url, { waitUntil: "networkidle" })

  const heroHeadline = await page.locator("h1.oh-headline").first()
  await heroHeadline.waitFor({ state: "visible", timeout: 8000 })
  await page.getByText("Start a Commission").first().waitFor({ state: "visible", timeout: 8000 })

  const heroImage = await page.locator("img[alt='Featured artwork']").first()

  const headlineCount = await page.locator("h1.oh-headline").count()
  const subtitleText = await page.locator(".oh-label", { hasText: "(" }).first().textContent()
  const heroImageLoaded = (await heroImage.count()) > 0

  const result = {
    url,
    headlineCount,
    subtitleText,
    heroImageLoaded,
    consoleErrors,
  }

  await page.screenshot({ path: "hero-smoke.png", fullPage: false })
  await browser.close()

  console.log(JSON.stringify(result,"", 3))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
