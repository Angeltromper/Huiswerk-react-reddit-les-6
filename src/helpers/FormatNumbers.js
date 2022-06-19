
function FormatNumbers(number){
    if(number){
        number.toLocaleString();

        return(
            number.toFixed(2)
        )
    } else {
        return number;
    }
}

export default FormatNumbers;