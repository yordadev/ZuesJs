/**
 * Copyright 2020 Yorda Development. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const puppeteer = require('puppeteer');

(async () => {
  const Poster = require("../util/Poster.js")
  
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  
  const browser = await puppeteer.launch({
    headless: true
  });
  
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  
  console.log("Checking cloudflarestatus.com")
  page.goto("https://www.cloudflarestatus.com");
  
  await wait(3000)

  let sites_services = await page.evaluate(() => {
    try {
      return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(1) > div.component-inner-container.status-green > span.component-status.tool.tooltipstered").textContent
    } catch (error){
      console.log(error)
    }
  })
  
  
  let africa = await page.evaluate(() => {
    try {
      return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(2) > div.component-inner-container.status-orange > span.component-status.tool.tooltipstered").textContent
    } catch (error){
      console.log(error)
    }
  })
  
  
  let asia = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(3) > div.component-inner-container.status-orange > span.component-status.tool.tooltipstered").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let europe = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(3) > div.component-inner-container.status-orange > span.component-status.tool.tooltipstered").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let middle_east = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(4) > div.component-inner-container.status-orange > span.component-status.tool.tooltipstered").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let latin_america = await page.evaluate(() => {
      try {
        return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(5) > div.component-inner-container.status-orange > span.component-status.tool.tooltipstered").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let north_america = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(7) > div.component-inner-container.status-green > span.component-status.tool.tooltipstered").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let oceania = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(8) > div.component-inner-container.status-orange > span.component-status.tool.tooltipstered").textContent
      } catch (error){
          console.log(error)
      }
  })


  let status = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.page-status.status-none > span.status.font-large").textContent
      } catch (error){
          console.log(error)
      }
  })

  
  let sites_services_update = ['sites_services', sites_services]
  let africa_update = ['africa', africa]
  let asia_update = ['asia', asia]
  let europe_update = ['europe', europe]
  let latin_america_update = ['latin_america', latin_america]
  let middle_east_update = ['middle_east', middle_east]
  let north_america_update = ['north_america', north_america]
  let oceania_update = ['oceania', oceania]

  // POST to RESTFul HERE

  console.log("- Cloudflare Status: " + status + "\n")
})();