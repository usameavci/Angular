#!/bin/bash
env=$1

if [ $1 = "live" ]; then
	ssh git@freemandigital.com "/deploy.sh git@bitbucket.org:freemandigital/test.git master freemandigital.com freemandigital"
fi
			
if [ $1 = "dev" ]; then
	ssh git@freemandigital.com "/deploy.sh git@bitbucket.org:staging.freemandigital/test.git master freemandigital.com freemandigital"
fi
