const puppeteer = require('puppeteer')

let browser
let page

describe('local', () => {

  beforeAll(async () => {
    browser = await puppeteer.launch({headless : true})
    page = await browser.newPage()
  })

  it('should be able to click', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.click('#load')
  })


  it('should load on click', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.click('#load')
    await page.waitForSelector('#main')
    const first = await page.$eval("#main tr:first-child td:first-child", e => e.textContent)
    expect(first.trim()).toEqual('a')
  })

  it('there is one element in the list', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.click('#load')
    await page.waitForSelector('#main')
    const content = await page.$$('#main tr')
    let contentArray = Array.apply(null, content)
    expect(contentArray.length).toEqual(1)
  })

  it('all elements are red', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.click('#load')
    await page.waitForSelector('#main')
    const content = await page.$$eval('#main tr td:nth-child(2)', nodes => nodes.map(e => e.innerText))
    let contentArray = Array.apply(null, content)
    expect(contentArray.every(e => e === 'red')).toEqual(true)
  })

  afterAll(() => {
    browser.close()
  })
})