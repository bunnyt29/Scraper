array = "1 889,00";
array = array.replace(/\s/g, "").split("");
len = array.length;
i = 0;
while(array[i] != ','){
    i++;
    len--;
}
array = array.slice(0, len*(-1));
console.log(array.join(''));
