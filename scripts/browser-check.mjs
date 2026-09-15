const { chromium } = await import('playwright-core').catch(() => import('../.test-tools/playwright-core/index.mjs'));
import assert from 'node:assert/strict';
import fs from 'node:fs';
const browser = await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage();
const routes=['/','/about','/programs','/events','/inspiration-resources','/get-involved','/donate','/contact','/our-leadership','/board/tatiana-lopez','/board/angie-todd',...['ready-to-lead','your-next-chapter','financial-wellness','power-of-community','starting-a-business','protecting-your-peace'].map(s=>'/inspiration/'+s)];
const failures=[]; const errors=[]; page.on('pageerror',e=>errors.push(e.message));
fs.mkdirSync('test-results',{recursive:true});
for (const width of [375,768,1024,1280]) {
 await page.setViewportSize({width,height:900});
 for (const route of routes) {
  const response=await page.goto('http://localhost:3000'+route); assert.equal(response.status(),200,route);
  await page.locator('h1').waitFor(); await page.evaluate(()=>document.fonts.ready);
  const metrics=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,width:innerWidth,h1:document.querySelectorAll('h1').length,broken:[...document.images].filter(i=>!i.complete||!i.naturalWidth).length}));
  if(metrics.scroll>width+1||metrics.h1!==1||metrics.broken) failures.push({route,width,...metrics});
  const body=await page.locator('body').innerText(); assert(!/â€|â€™|undefined|lorem ipsum/i.test(body),route+' corrupted copy');
  if(route==='/' && [375,1280].includes(width)) await page.screenshot({path:`test-results/home-${width}.png`,fullPage:false});
 }
 console.log(`All routes rendered at ${width}px`);
}
await page.setViewportSize({width:375,height:812}); await page.goto('http://localhost:3000');
await page.getByRole('button',{name:'Open navigation'}).click(); assert(await page.getByRole('dialog').isVisible());
for(let i=0;i<12;i++){await page.keyboard.press('Tab'); assert(await page.evaluate(()=>document.querySelector('dialog').contains(document.activeElement)));}
await page.keyboard.press('Escape'); assert(!(await page.getByRole('dialog').isVisible())); assert(await page.getByRole('button',{name:'Open navigation'}).evaluate(e=>e===document.activeElement));
await page.getByRole('button',{name:'Open navigation'}).click(); await page.getByRole('dialog').getByRole('link',{name:'Programs',exact:true}).click(); await page.waitForURL('**/programs');
await page.locator('#mentorship summary').click(); assert(await page.locator('#mentorship').getByText('Confidence building',{exact:true}).isVisible());
await page.goto('http://localhost:3000/contact?topic=event&event=legacy-collective'); assert.equal(await page.locator('select').inputValue(),'event');
await page.getByRole('button',{name:'Send',exact:true}).click(); assert(await page.getByText('Please complete this field.').count()>0);
await page.getByLabel('Your Name').fill('Test Visitor'); await page.getByLabel('Your Email').fill('bad-email'); await page.getByLabel('Phone Number').fill('2015550123'); await page.getByRole('button',{name:'Send',exact:true}).click(); assert(await page.getByText('Please enter a valid email address.').isVisible());
await page.getByLabel('Your Email').fill('test@example.com'); await page.getByRole('button',{name:'Send',exact:true}).click(); await page.getByRole('status').waitFor(); assert(await page.getByText(/Your information has not been sent or saved/).isVisible());
await page.goto('http://localhost:3000/get-involved'); await page.getByLabel('Full Name').fill('Test Volunteer'); await page.getByLabel('Email',{exact:false}).fill('test@example.com'); await page.getByLabel('Phone Number').fill('2015550123'); await page.getByLabel('Areas of Interest',{exact:false}).fill('Mentorship'); await page.getByLabel('Availability').fill('Weekends'); await page.getByLabel('Why would you like').fill('To support the community.'); await page.getByRole('button',{name:'Submit Volunteer Interest Form'}).click(); await page.getByRole('status').waitFor();
await page.locator('.faq summary').first().click(); assert(await page.getByText('No. Previous volunteer experience',{exact:false}).isVisible());
await page.goto('http://localhost:3000'); await page.getByLabel('Email').fill('test@example.com'); await page.getByRole('button',{name:'Sign up',exact:true}).click(); await page.getByText('Thank you for subscribing.').waitFor();
await page.goto('http://localhost:3000/donate'); await page.getByRole('button',{name:'Select gift'}).first().click(); assert.equal(await page.getByLabel('Your gift amount').inputValue(),'25'); await page.getByLabel('Your gift amount').fill('125'); await page.getByRole('link',{name:'Donate Today'}).click(); await page.waitForURL('**/contact?topic=donate&amount=125'); assert.equal(await page.locator('select').inputValue(),'donate');
await page.goto('http://localhost:3000/not-a-page'); assert(await page.getByRole('heading',{level:1,name:'Let’s find your next step.'}).isVisible());
console.log('Interaction checks passed'); console.log(JSON.stringify({failures,errors},null,2));
await browser.close(); assert.equal(failures.length,0); assert.equal(errors.length,0);
