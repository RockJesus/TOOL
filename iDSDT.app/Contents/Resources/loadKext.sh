#!/bin/sh

# loadKext.sh
# idsdt
#
# Created by yu oscar on 11-3-13.
# Copyright 2011 zjpjhx. All rights reserved.

echo "loadkext $1"
if [ $# -lt 1 ];then
	exit 4
fi

if [ ! -d "$1"  ] ; then
	exit 2
fi

fname=`basename "$1"`

#echo $fname

if [ -z "$fname" ] ; then
	exit 3
fi

cp -R "$1" /tmp

kextload "/tmp/$fname"
 