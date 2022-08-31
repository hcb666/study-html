//正则表达式是使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜素模式

//正则表达式主体/修饰符（可选）

var str = "The rain in SPAIN stays mainly in the plain";
// var str = `The rain in SPAIN stays mainly in the plain`
//``es6

var reg = /ain/;

var reg = /ain/g;

var reg = /ain/gi;

//i不区分大小写
//g全局查找 查找多个
//m 多行

var n = str.match(reg);
//查找一个或者多个匹配

console.log(n);

// search()方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置
console.log(str.search(reg));

//replace() 方法用于在字符串中用一些字符串替换另一些字符串，或者替换一个与正则表达式匹配的子串
console.log(str.replace(reg, "xxx"));

var reg = /[abcdef]/g;   //检索abcdef
var reg = /[a-f]/g;      //检索a-f的字母

var reg = /[0-9]/g;      //检索0-9的数字
var reg = /[^0-9]/g;     //取非

var reg = /(ell | 01)/g; //检索ell或者01

var reg = /h.t/g;        //.为除了换行和行结束符

var reg = /h\wt/g;       //查找数字、字母及下划线
var reg = /h\Wt/g;       //非数字、字母及下划线
var reg = /h\dt/g;       //数字
var reg = /h\Dt/g;       //非数字
var reg = /h\d+t/g;      //中间隔着>=1
var reg = /h\d*t/g;       //*>=0
var reg = /h\d?t/g;       //0/1
var reg = /h\d{2}t/g;     //(m)
var reg = /h\d{2,10}t/g;  //{m,n}
var reg = /^h.+t&/gm;      //h开头t结束




var reg = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
//校验ipv6地址