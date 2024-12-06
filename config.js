const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_00_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICA0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU5LFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNixcbiAgICAgICAgMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZkh6Z2RNcUV4Ykk1ZERzbDdBN3J6c2VjMjNsRnFSVThJVnh3Z0dETmN0RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRlFhNk9UTnRUWFd2SlduVDJzYXItd1wiLFxuICBcInBob25lSWRcIjogXCJiMGFmZTkwNi0zMDYwLTRjNzQtYTNkMi0yNWFiMGZiMzIxMzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMTMyLFxuICAgICAgMTgsXG4gICAgICAxNzIsXG4gICAgICAyMzEsXG4gICAgICA1MyxcbiAgICAgIDgzLFxuICAgICAgNzMsXG4gICAgICAyMTksXG4gICAgICAyNixcbiAgICAgIDExNCxcbiAgICAgIDMyLFxuICAgICAgMTU0LFxuICAgICAgMTY3LFxuICAgICAgMjEyLFxuICAgICAgMTM3LFxuICAgICAgNDgsXG4gICAgICAzOSxcbiAgICAgIDQsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxNDAsXG4gICAgICAyMjEsXG4gICAgICAyMzYsXG4gICAgICAxODksXG4gICAgICA2MixcbiAgICAgIDEwNSxcbiAgICAgIDQwLFxuICAgICAgOTQsXG4gICAgICA0NyxcbiAgICAgIDcsXG4gICAgICA3MCxcbiAgICAgIDEyNSxcbiAgICAgIDcyLFxuICAgICAgMTgyLFxuICAgICAgMjM5LFxuICAgICAgMTksXG4gICAgICAxMjcsXG4gICAgICAxMzIsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEWk5MN1hQS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5ODM1NjA2NzIxOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5Mzk0NDM1NjUzNjUxNDoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdlk1RThRcXBQTnVnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndQNFZGVGpJUWpFcjJnYTNNVmR6Uzg1U3FBRkFKR3hmTVN2bXlKanlnams9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT2xpblI1Um5oTXBqSDVmS0NabEVqaXdXeEkrSCtIK3RWZ2dWdUtOS1F2amFpM3ByalFOcTRKYkcvYnMwTFY3UXlGOWNYWGtpeU1VUnhrOFZWVkdJQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUEhYSlBFMWpXSDk3NllZb3FoZEVqT3A2N3pJV3ZUZXJsMTBpUmdvV2RhSzVRaHVuTXg5b2ViZjAvR0lnZGNvdGFxRVp4RlVMaS8zcE5QV3lJQWwvRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5ODM1NjA2NzIxOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzUxMTU5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA2K1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDYrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZGVudUpVdHRYclRuUzdvTjRRTmNsU2pYK1NobFVaL28zTTVTSnBCNkd3OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjczMjQ3NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
