#!/bin/sh
node ./bot/server.js & > ./logs/log_bot.txt
node ./webserver/server.js & > ./logs/log_web.txt
