#! /bin/bash 

# ---------------------------------- 
# DSDT Patcher for Asus P7P55 series 
# (C)2010 by rzooff 
# (C)2011 mod by 314TeR 
# (C)2012 mod by janek202
# http://forum.osx86.org.pl 
# ---------------------------------- 
# Required files in $patch: 
# P5W.patch 
# ---------------------------------- 

patch="$HOME/cw_dsdt"                                        #temporary folder patch 
mkdir $patch

# Dump DSDT 
ioreg -lw0 | grep DSDT > $patch/ioreg.txt            #dump all DSDT data from ioreg 
dump0=$(cat $patch/ioreg.txt)                        #save dump to file 
dump1=${dump0#*'DSDT'}                                #cut everything before & start of DSDT table 
dump2=${dump1#*'<'}                                    #cut everything before & left < bracket 
dump3=${dump2%%'>'*}                                #cut everything after & right > bracket 
echo $dump3 > "$patch/dsdt.txt"                        #save extracted data 
xxd -r -p "$patch/dsdt.txt" > "$patch/dsdt.aml"        #make hexdump extracted data to binary 

#$patch/iasl -d $patch/dsdt.aml                        #decompile dsdt.aml to dsdt.dsl 

echo "Done!" 

exit 0