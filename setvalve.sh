9#!/bin/bash

gpio mode 10 out
gpio mode 11 out

function setvalve {
	echo "Setting valve to $1 degree"
	if [ "$1" == "0" ]; then
		gpio write 10 0
		gpio write 11 1
	else
		gpio write 10 1
		gpio write 11 0
	fi
	waitandstop
}

function waitandstop {
	echo "Waiting 12 seconds for valve to finish..."
	sleep 12
	gpio write 10 1
	gpio write 11 1
	echo "Stopped!"
} 

setvalve $1
