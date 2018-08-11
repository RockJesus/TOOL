#!/bin/sh 
# installKext.sh
# idsdt
#
# Created by  oscar on 11-2-26.
# Copyright 2011 zjpjhx. All rights reserved.

sysPath="/System/Library/Extensions"
#echo $sysPath
echo "install $1"
if [ $# -lt 1 ];then
	exit 4
fi

#echo $# 

if [ ! -d "$1"  ] ; then
	exit 2
fi

fname=`basename "$1"`

#echo $fname

if [ -z "$fname" ] ; then
	exit 3
fi

if [ -d "$sysPath/AppleHDA.kext" ] ; then	
	if [ -d "$sysPath/AppleHDA.kext.bak" ] ; then
		rm -rf "$sysPath/AppleHDA.kext.bak"
	fi
	mv "$sysPath/AppleHDA.kext" "$sysPath/AppleHDA.kext.bak"
fi

if [ -d "$sysPath/$fname" ] ; then	
	rm -rf "$sysPath/$fname"
fi

cp -R "$1" "$sysPath"
chown -R root:wheel "$sysPath/$fname"
chmod -R 755 "$sysPath/$fname"
touch "$sysPath"
#HDARun=`kextstat -l|grep -c AppleHDAController`
#if [ $HDARun -gt 0 ] ; then
#	echo "load kext $sysPath/$fname\n"
#	kextload $sysPath/$fname
#fi
 