#!/bin/sh

FILE_PATH=$1

if sudo rm -rv /Library/Audio/Plug-Ins/HAL/BoomAudio.driver
	then
	echo "Remove BoomAudio.driver  succeeded" >> ~/Library/Logs/Boom2.log
else
	echo "Remove BoomAudio.driver  failed" >> ~/Library/Logs/Boom2.log
fi

if sudo cp -rv "$FILE_PATH" /Library/Audio/Plug-Ins/HAL/
	then
	echo "Copy BoomAudio.driver  succeeded" >> ~/Library/Logs/Boom2.log
else
	echo "Copy BoomAudio.driver  failed" >> ~/Library/Logs/Boom2.log
fi

#sudo shutdown -r now

sudo launchctl stop com.apple.audio.coreaudiod
