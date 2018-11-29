#!/usr/bin/env bash
rsync -avz /Users/lukasgin/liip/js/creadi/simpego-ishi/vehicleCard/accuracy/ ivy-mike.creadi:/home/ivy-mike/creadi/simpego-ishi/server/compliment-as-service --exclude='*/node_modules*' --exclude='.env*'
