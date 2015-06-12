#!/bin/bash
user="freemandigital"
userDir="/home/freemandigital/"
domain="freemandigital.com"
repo="git@bitbucket.org:freemandigital/test.git"
env=$1

	### push to git repo ---------------------------------------------------------
	git add .
	git commit -am 'Auto deployment'
	git push origin master

	### deploy to server ---------------------------------------------------------
	if [ $1 = "live" ]; then
		ssh git@freemandigital.com "/deploy.sh $repo master $domain $user"
	fi

	if [ $1 = "dev" ]; then
		ssh git@freemandigital.com "/deploy.sh $repo master $domain $user"
	fi


echo -e "+-----------------------------------------+"
echo -e "| Site successfully deployed!             |"
echo -e "+-----------------------------------------+"
