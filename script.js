function compare(string1,string2)
{
        var a = document.getElementById("str1").value;
        var b = document.getElementById("str2").value;
        document.getElementById("result").innerHTML = Math.max(a.length,b.length);
}