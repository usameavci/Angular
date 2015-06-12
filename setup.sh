#!/bin/bash
echo
echo "+-----------------------------------------+"
echo "| Project setup | Freeman Digital Ltd.    |"
echo "+-----------------------------------------+"
echo
echo "Please enter the domain for this site?"
read domain

if [ ! $domain = "" ]; then
	ssh root@freemandigital.com "createsite.sh create $domain $domain"
else
	echo "You entered an invalid domain name."
	echo
fi
