import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const {chromium} = await import('playwright-core').catch(() => import('../.test-tools/playwright-core/index.mjs'));
let axePath; try { axePath = require.resolve('axe-core/axe.min.js'); } catch { axePath = '.test-tools/axe/axe.min.js'; }
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:1280,height:900}});
const routes=['/','/about','/programs','/events','/inspiration-resources','/get-involved','/donate','/contact','/our-leadership','/board/tatiana-lopez','/board/angie-todd',...['ready-to-lead','your-next-chapter','financial-wellness','power-of-community','starting-a-business','protecting-your-peace'].map(s=>'/inspiration/'+s)];
const issues=[];const links=new Set();const targets=new Map();
for(const route of routes){
 await page.goto('http://localhost:3000'+route); await page.locator('h1').waitFor();
 const data=await page.evaluate(()=>({ids:[...document.querySelectorAll('[id]')].map(n=>n.id),hrefs:[...document.querySelectorAll('a[href]')].map(n=>n.getAttribute('href'))}));
 targets.set(route,data.ids);for(const href of data.hrefs)if(href.startsWith('/')||href.startsWith('#'))links.add(new URL(href,'http://localhost:3000'+route).href);
 await page.addScriptTag({path:axePath});
 const violations=await page.evaluate(async()=>{const r=await window.axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}});return r.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}));});
 if(violations.length)issues.push({route,violations});
}
for(const link of links){const url=new URL(link);assert(routes.includes(url.pathname),link+' missing route');if(url.hash)assert(targets.get(url.pathname).includes(url.hash.slice(1)),link+' missing anchor');}
for(const width of [375,768,1024,1280]){await page.setViewportSize({width,height:900});await page.goto('http://localhost:3000');await page.evaluate(()=>document.fonts.ready);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:`test-results/home-final-${width}.png`});}
for(const [path,target] of [['/contact-us','/contact'],['/tatiana-bio','/board/tatiana-lopez'],['/ready-to-lead','/inspiration/ready-to-lead'],['/inspiration-%26-resources','/inspiration-resources']]){const response=await page.request.get('http://localhost:3000'+path,{maxRedirects:0});assert.equal(response.status(),308);assert.equal(response.headers().location,target);}
console.log(JSON.stringify({checkedRoutes:routes.length,internalLinks:links.size,accessibilityIssues:issues},null,2));
await browser.close();assert.equal(issues.length,0);
