# discordBot-web-controller  
디스코드 봇 응답을 웹페이지에서 제어함


![discord-web-controller](https://user-images.githubusercontent.com/26961908/114331401-dfed7d80-9b7e-11eb-87cb-81dccbc923e8.gif)


* requirements  
  node.js 12.0 or newer  
  mongoDB 3.4  
 
 
* copy your discord bot's token and paste it to /bot/token.js  
  module.exports =  {token : '_YOUR_TOKEN_'}
  
* 디스코드 봇 토큰을 bot/token.js에 붙여넣기합니다.
  module.exports =  {token : '봇_토큰'}
  봇 토큰은 다음 링크에서 확인할 수 있습니다.
  https://discord.com/developers/applications
  
  
* at project root directory use  
  sudo npm install 
  
* 프로세스를 실행할 때 2개의 프로세스를 실행해야 합니다.
* you have to execute 2 process 
  bot/server.js, webserver/server.js
  
  ex) 
  node webserver/server.js
  node bot/server.js
  
  or
  pm2 webserver/server.js
  pm2 bot/server.js
  
 
