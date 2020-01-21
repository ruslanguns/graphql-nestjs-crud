#!/bin/bash
echo 'The Database setup will start in 3 seconds'
printf '====>  To stop just hit "CTRL + C" \n\n'

sleep 3 # wait 3 seconds

docker-compose -f docker-compose-db.yml up
