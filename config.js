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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_20_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg5LFxuICAgICAgICA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaDgyV1NYc2MvbEVBOHJzSnd4RG1hU3BnbVBnNWNiMFlaektRRjhMSEw1az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjMyMDI2MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkwQjNGQzVENzMxQTk3OTQ0QTlGRTZFNTkxNDFCNzA1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzE3MDg0OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBMk1OLXZHU1Q5S0hoQ0c3c0d4UmR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImM1Njc5OGI2LTI0YWEtNDUyMS05MjQ2LTQ2MDJmZThkMzgxYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDIyOCxcbiAgICAgIDI0MyxcbiAgICAgIDExLFxuICAgICAgMjQyLFxuICAgICAgNDEsXG4gICAgICA0NSxcbiAgICAgIDEzLFxuICAgICAgMTg2LFxuICAgICAgMjEyLFxuICAgICAgMTQwLFxuICAgICAgNDEsXG4gICAgICAxNDYsXG4gICAgICAxMCxcbiAgICAgIDcyLFxuICAgICAgMjI1LFxuICAgICAgMCxcbiAgICAgIDE2OCxcbiAgICAgIDIwLFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgNDgsXG4gICAgICAxMjksXG4gICAgICAxOTgsXG4gICAgICA3MixcbiAgICAgIDIyNixcbiAgICAgIDE5NyxcbiAgICAgIDIyLFxuICAgICAgMTYzLFxuICAgICAgMTA5LFxuICAgICAgNTIsXG4gICAgICAxMjksXG4gICAgICAyMzMsXG4gICAgICAyMjMsXG4gICAgICAyMjksXG4gICAgICAxNzIsXG4gICAgICAxNTIsXG4gICAgICAxNzMsXG4gICAgICAyMzgsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjFMMUI5MUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyMzIwMjYyMzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIrwnZCe8J2QpfCdkK/wnZCi8J2QpyDwnZCu8J2Qp/CdkKLwnZCxXCIsXG4gICAgXCJsaWRcIjogXCIzMzk2NDk3MDUwNDIwODoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbUx2cGNIRUpldHVMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkM5QklZTmNiT3FKWlM5OHlnQ3Fja01ML3BTUVRsdkdGNVRTQlM1aXZiWHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTnIyOHkzbXBNWTgxaGpuVS9MTzdWWE8yVGNydGh3ekU1UThOQ29PVjZlYnQ4REFQWE9LVlFvdmFzSGlPQWlYVjNhU05va1ZXUHhJbjlCUzZTKzVQREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3diaE04ajZnSE5qM0pHTEhKMGJLYU5jbHk4Z2ZIZWVhdHJvbUoxcGJMYzZFQXlkWmhVbVVhbGRnVnRHTXp3VFdDamx3cE9hYlVJdFRtRjRCWFdOQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjIzMjAyNjIzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxNzA4NDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIYW9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhhby5qc29uIjogIntcImtleURhdGFcIjpcInNDajV0eFpuU3pBQyt6NGIybU9vanVLc0hSWUVPdGI1VVh5MU5VZzB0T0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyODMwMDAwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMTcwODQ2OTYyXCJ9Igp9"  // PUT your SESSION_ID 


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
