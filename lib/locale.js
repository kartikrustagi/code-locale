/* Code Courtesy tracer logger module for node js */

var CodeLocale = function codeLocale(){
};

CodeLocale.getCodeLocale = function(){
	var stack = (new Error()).stack.split('\n').slice(2);
	var data = {
	};
	data.method = data.path = data.line = data.pos = data.file = '';

	// Stack trace format :
	// http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
	var s = stack[0], sp = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi.exec(s) || /at\s+()(.*):(\d*):(\d*)/gi.exec(s);
	if (sp && sp.length === 5) {
		data.method = sp[1];
		data.path = sp[2];
		data.line = sp[3];
		data.pos = sp[4];
		var paths = data.path.split('/');
		data.file = paths[paths.length - 1];
	}
	return data;
};
exports.CodeLocale = CodeLocale;
