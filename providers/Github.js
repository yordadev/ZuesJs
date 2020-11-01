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
  
  console.log("Checking GithubStatus.com")
  page.goto("https://www.githubstatus.com");
  
  await wait(3000)
  
  
  let git_operations = await page.evaluate(() => {
    try {
      return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div > div:nth-child(1) > div > span.status-msg").textContent
    } catch (error){
      console.log(error)
    }
  })
  
  
  let api_requests = await page.evaluate(() => {
    try {
      return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div > div:nth-child(2) > div > span.status-msg").textContent
    } catch (error){
      console.log(error)
    }
  })
  
  
  let webhooks = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div > div:nth-child(3) > div > span.status-msg").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let issues = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div > div:nth-child(4) > div > span.status-msg").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let pull_requests = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div > div:nth-child(5) > div > span.status-msg").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let actions = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div > div:nth-child(6) > div > span.status-msg").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let packages = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div > div:nth-child(7) > div > span.status-msg").textContent
      } catch (error){
          console.log(error)
      }
  })


  let pages = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div > div:nth-child(8) > div > span.status-msg").textContent
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


  let status_update = ['status', status]
  let git_operations_update = ['git_operations', git_operations]
  let api_requests_update = ['api_requests', api_requests]
  let webhooks_update = ['webhooks', webhooks]
  let issues_update = ['issues', issues]
  let pull_request_update = ['pull_requests', pull_requests]
  let action_update = ['actions', actions]
  let packages_update = ['packages', packages]
  let pages_update = ['pages', pages]

  // POST to RESTFul HERE

  console.log("- Github Status: " + status + "\n")
})();