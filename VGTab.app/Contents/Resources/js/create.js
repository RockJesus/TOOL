var Base64 = {

	// private property
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode: function(input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode: function(input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode: function(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode: function(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while (i < utftext.length) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

};
function createTable(device,opt){
var P0cv = document.getElementById("num_0_0").value;
var P1cv = document.getElementById("num_0_1").value;
var P2cv = document.getElementById("num_0_2").value;
var P3cv = document.getElementById("num_0_3").value;
var P4cv = document.getElementById("num_0_4").value;
var P5cv = document.getElementById("num_0_5").value;
var P6cv = document.getElementById("num_0_6").value;
var P7cv = document.getElementById("num_0_7").value;

var P0cf = document.getElementById("num_1_0").value;
var P1cf = document.getElementById("num_1_1").value;
var P2cf = document.getElementById("num_1_2").value;
var P3cf = document.getElementById("num_1_3").value;
var P4cf = document.getElementById("num_1_4").value;
var P5cf = document.getElementById("num_1_5").value;
var P6cf = document.getElementById("num_1_6").value;
var P7cf = document.getElementById("num_1_7").value;

var P0mf = document.getElementById("num_2_0").value;
var P1mf = document.getElementById("num_2_1").value;
var P2mf = document.getElementById("num_2_2").value;
var P3mf = document.getElementById("num_2_3").value;

var P3mv = document.getElementById("num_3_0").value;

var freeFan = document.getElementById("free_fan_num").value;
var downFan = document.getElementById("down_fan_num").value;
var minFan = document.getElementById("min_fan_num").value;
var maxFan = document.getElementById("max_fan_num").value;
var senFan = document.getElementById("sen_fan_num").value;

var tempLine = document.getElementById("temp_num").value;
var power = document.getElementById("power_num").value;

var tab = "Dev="+device+"\nP0cv="+P0cv+"\nP1cv="+P1cv+"\nP2cv="+P2cv+"\nP3cv="+P3cv+"\nP4cv="+P4cv+"\nP5cv="+P5cv+"\nP6cv="+P6cv+"\nP7cv="+P7cv+"\nP0cf="+P0cf+"\nP1cf="+P1cf+"\nP2cf="+P2cf+"\nP3cf="+P3cf+"\nP4cf="+P4cf+"\nP5cf="+P5cf+"\nP6cf="+P6cf+"\nP7cf="+P7cf+"\nP3mv="+P3mv+"\nP0mf="+P0mf+"\nP1mf="+P1mf+"\nP2mf="+P2mf+"\nP3mf="+P3mf+"\nfreeFan="+freeFan+"\ndownFan="+downFan+"\nminFan="+minFan+"\nmaxFan="+maxFan+"\nsenFan="+senFan+"\ntempLine="+tempLine+"\npower="+power+"\n";
var btab = Base64.encode(tab);

if (opt == "tab"){
	window.location.href="vgtab://"+btab;
} else if (opt == "link"){
	alert("vgtab://"+btab);
}
};