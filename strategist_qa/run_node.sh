#!/bin/bash

# npm install

export NODE_ENV='production' 
export PORT=9000
export MONGODB="mongodb://localhost/strategist-dev" 

export FACEBOOK_CLIENT_ID="1439528922972515" 
export FACEBOOK_CLIENT_SECRET="42646afbceb7fcbb07e79a7bdcc1550f" 
export FACEBOOK_CALLBACK_URL="http://strategist.herokuapp.com/auth/facebook/callback" 

export TWITTER_CONSUMER_KEY="2WKpQq2xj1jLEav51DLABmjm5" 
export TWITTER_CONSUMER_SECRET="l2xcnCDGedPTlFicic5W1LqxAm7ScIVSkVSbMA1dCP7n3zZmOy" 
export TWITTER_CALLBACK_URL="http://strategist.herokuapp.com/auth/twitter/callback" 

export REDIS_PORT=6370 
export REDIS_HOST="127.0.0.1" 
export REDIS_AUTH="" 

export MANDRILL_KEY="gIxOlVnOxEp4vNVDxgYleA" 


case $1 in
  "start")
    node server.js > logs.log &
    ;;
  "stop")
    pids=`ps -eo pid,command | grep 'node server.js' | awk '{print $1}'`
    for pid in $pids
    do
      kill $pid
      break
    done
    ;;
esac