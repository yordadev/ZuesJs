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
  page.goto("https://status.gitlab.com");
  
  await wait(2000)
  
  
  let website = await page.evaluate(() => {
    try {
      return document.querySelector("#status_text-5b36dc6502d06804c0834a07").textContent
    } catch (error){
      console.log(error)
    }
  })

  
  let api_requests = await page.evaluate(() => {
    try {
      return document.querySelector("#status_text-5b36e05f02d06804c0834a09").textContent
    } catch (error){
      console.log(error)
    }
  })
  
  
  let git = await page.evaluate(() => {
      try {
         return document.querySelector("#status_text-5d2f74932676bc45e4927ead").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let pages = await page.evaluate(() => {
      try {
         return document.querySelector("#status_text-5b371ffc1d4f0004bf746dbf").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let registry = await page.evaluate(() => {
      try {
         return document.querySelector("#status_text-5b36e07afc1f0804be9d754d").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let cicd = await page.evaluate(() => {
      try {
         return document.querySelector("#status_text-5b36e06c633e9004b3d624ad").textContent
      } catch (error){
          console.log(error)
      }
  })
  

  let background_processing = await page.evaluate(() => {
      try {
         return document.querySelector("#status_text-5b371ff2ab905c04b1de922e").textContent
      } catch (error){
          console.log(error)
      }
  })


  let support_services = await page.evaluate(() => {
      try {
         return document.querySelector("#status_text-5c38362c5495bf472f8dfbae").textContent
      } catch (error){
          console.log(error)
      }
  })


  let packages = await page.evaluate(() => {
      try {
        return document.querySelector("#status_text-5c7d5bb83efc3204ba5f53c3").textContent
      } catch (error){
          console.log(error)
      }
  })


  let customers = await page.evaluate(() => {
    try {
      return document.querySelector("#status_text-5d02cb79b2e5f00a022b5fb4").textContent
    } catch (error){
        console.log(error)
    }
  })


  let version = await page.evaluate(() => {
      try {
        return document.querySelector("#status_text-5d31c2f251014050f413e808").textContent
      } catch (error){
          console.log(error)
      }
  })


  let forum = await page.evaluate(() => {
    try {
      return document.querySelector("#status_text-5d93c0defdc75b69cf385b1f").textContent
    } catch (error){
        console.log(error)
    }
  })


  let windows_runners = await page.evaluate(() => {
    try {
      return document.querySelector("#status_text-5e29c1403f4deb04c0d7f035").textContent
    } catch (error){
        console.log(error)
    }
  })

  let canary = await page.evaluate(() => {
    try {
      return document.querySelector("#status_text-5ed145987f9dc304bf8a9164").textContent
    } catch (error){
        console.log(error)
    }
  })


  let dashboard = await page.evaluate(() => {
    try {
      return document.querySelector("#status_text-5f4e8819413cdd04b6882c94").textContent
    } catch (error){
        console.log(error)
    }
  })


  let status = await page.evaluate(() => {
      try {
         return document.querySelector("#statusbar_text").textContent
      } catch (error){
          console.log(error)
      }
  })


  let website_update = ['website', website]
  let api_requests_update = ['api_requests', api_requests]
  let git_update = ['git', git]
  let pages_update = ['pages', pages]
  let registry_update = ['registry', registry]
  let cicd_update = ['cicd', cicd]
  let background_processing_update = ['background_process', background_processing]
  let support_services_update = ['support_services', support_services]
  let packages_update = ['packages', packages]
  let customers_update = ['customers', customers]
  let version_update = ['version_update', version]
  let forum_update = ['forum', forum]
  let windows_runners_update = ['windows_runners', windows_runners]
  let canary_update = ['canary', canary]
  let dashboard_update = ['dashboard', dashboard]

  // POST to RESTFul HERE

  console.log("- Gitlab Status: \n              " + status + "\n")
})();