const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR"
    }else if(num == 0){
        return ''
    } 
    else {
        let str = string;
        for(let i=0; i<num-1;i++){
            str+=string;
        }
        return str;
    }
};
repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;
