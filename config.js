const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Dodoma/Tanzania";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_52_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDcxLFxuICAgICAgICA2NSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgODcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICA4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlFNnAxVzh1bll1elJQRm5zbGRhUGZJUFhVc3pQVEk5NFM1dmJ5Z3N6MHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRtXzRtc25hUXJ5LVlpUjRDZTFSUXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDA4YTBiYzEtOTc0OC00YWJlLWE4YjEtNjU4YWU2ZmUxNDM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgNTMsXG4gICAgICAyNTUsXG4gICAgICA4NSxcbiAgICAgIDE3NyxcbiAgICAgIDk3LFxuICAgICAgMjE5LFxuICAgICAgMTI1LFxuICAgICAgMjA4LFxuICAgICAgMTUyLFxuICAgICAgMTI1LFxuICAgICAgMjQ5LFxuICAgICAgMTg3LFxuICAgICAgMTMsXG4gICAgICA1MSxcbiAgICAgIDk3LFxuICAgICAgNzYsXG4gICAgICAyOCxcbiAgICAgIDgwLFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICAxOTgsXG4gICAgICAxNzEsXG4gICAgICAxMyxcbiAgICAgIDIzMyxcbiAgICAgIDE4MSxcbiAgICAgIDEwMSxcbiAgICAgIDIxNSxcbiAgICAgIDU5LFxuICAgICAgNzYsXG4gICAgICA5OCxcbiAgICAgIDI0NCxcbiAgICAgIDEwMyxcbiAgICAgIDE4MCxcbiAgICAgIDM3LFxuICAgICAgMTAwLFxuICAgICAgMzIsXG4gICAgICAxMTEsXG4gICAgICAzLFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjEyQzM4Tko4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2Nzg5MjUwNzA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NDg2NTgxODYzMjIyMjoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMemp2cmdHRU1ubnQ3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjc0eWZvL0hBZ1BRUytRR3E4UEFyOG5XcllwUGFhTjN2bEd1N1hhZWZjREk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTlFXQTBZeWNUa2hKeFJ1NURYSEcxWXJaWlJjckN3NVNySjdzRmlzSEdCUzBZSWExamxyOG5PSnIrek96QkNiL0RIaUNlRnF6SlZDaGIrdFRYMHVnQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNFlkam8xN2J0a1Foa3VnUytBNWppZWNFWktuVEJHSXRVQXZ6VkN3b3h2L295MHJycDJFRDRMV0oxYjUwL2gzcGZkTnRWSlhZbnhOb2c1dXpncGc5QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njc4OTI1MDcwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxNjE5MzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "UNIX-XMD",
  ownername:process.env.OWNER_NAME|| "UNIX-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
