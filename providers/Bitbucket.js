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
  
  console.log("Checking status.gitlab.com")
  page.goto("https://bitbucket.status.atlassian.com");
  
  await wait(2000)
  
  let website = await page.evaluate(() => {
    try {
      return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(1) > div > span.component-status").textContent
    } catch (error){
      console.log(error)
    }
  })


  let api_requests = await page.evaluate(() => {
    try {
      return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(2) > div > span.component-status").textContent
    } catch (error){
      console.log(error)
    }
  })


  let ssh = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(3) > div > span.component-status").textContent
      } catch (error){
          console.log(error)
      }
  })


  let auth = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(4) > div > span.component-status").textContent
      } catch (error){
          console.log(error)
      }
  })


  let https = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(5) > div > span.component-status").textContent
      } catch (error){
          console.log(error)
      }
  })


  let mercurial = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(6) > div > span.component-status").textContent
      } catch (error){
          console.log(error)
      }
  })


  let webhooks = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(7) > div > span.component-status").textContent
      } catch (error){
          console.log(error)
      }
  })


  let source_downloads = await page.evaluate(() => {
      try {
         return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(8) > div > span.component-status").textContent
      } catch (error){
          console.log(error)
      }
  })


  let pipelines = await page.evaluate(() => {
      try {
        return document.querySelector("#body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(9) > div > span.component-status").textContent
      } catch (error){
          console.log(error)
      }
  })


  let lfs = await page.evaluate(() => {
    try {
      return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(10) > div > span.component-status").textContent
    } catch (error){
        console.log(error)
    }
  })


  let email = await page.evaluate(() => {
      try {
        return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(11) > div > span.component-status").textContent
      } catch (error){
          console.log(error)
      }
  })

    
  let aws_codedeploy = await page.evaluate(() => {
    try {
      return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div.component-container.border-color.is-group.open > div.child-components-container > div > span.component-status").textContent
    } catch (error){
        console.log(error)
    }
  })


  let purchaselicense = await page.evaluate(() => {
    try {
      return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(13) > div > span.component-status").textContent
    } catch (error){
        console.log(error)
    }
  })


  let signup = await page.evaluate(() => {
    try {
      return document.querySelector("body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(14) > div > span.component-status").textContent
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

  
  let website_update = ['website', website]
  let api_requests_update = ['api_requests', api_requests]
  let ssh_update = ['ssh', ssh]
  let auth_update = ['auth', auth]
  let https_update = ['git_https', https]
  let mercurial_update = ['mercurial', mercurial]
  let webhooks_update = ['webhooks', webhooks]
  let source_downloads_update = ['source_downloads', source_downloads]
  let pipelines_update = ['piplines', pipelines]
  let lfs_update = ['git_lfs', lfs]
  let email_update = ['email_delivery', email]
  let aws_codedeploy_update = ['aws_codedeploy', aws_codedeploy]
  let purchaselicense_update = ['purchase_license', purchaselicense]
  let signup_update = ['signup', signup]

  // POST to RESTFul HERE

  console.log("- Bitbucket Status: \n              " + status + "\n")
})();