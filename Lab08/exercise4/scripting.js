function changeCSS()
{
    let borderRed = document.getElementById('borderRed').value;
    let borderBlue = document.getElementById('borderBlue').value;
    let borderGreen = document.getElementById('borderGreen').value;
    let borderWidth = document.getElementById('borderWidth').value;

    let backgroundRed = document.getElementById('backgroundRed').value;
    let backgroundBlue = document.getElementById('backgroundBlue').value;
    let backgroundGreen = document.getElementById('backgroundGreen').value;

    //let borderWidth = borderVal + 'px';
    //let borderString ='#'+ borderRed + borderBlue + borderGreen;
    //borderString.slice(1,-1);
    //let backgroundString ='#'+ backgroundRed + backgroundBlue+ backgroundGreen;
    //backgroundString.slice(1,-1);
    //borderWidth.slice(1,-1);

    document.getElementById('p1').style.borderColor = "rgb(" + borderRed +',' + borderGreen + ',' + borderBlue + ")";
    document.getElementById('p1').style.backgroundColor = "rgb(" + backgroundRed +',' + backgroundGreen + ',' + backgroundBlue + ")";
    document.getElementById('p1').style.borderWidth = borderWidth;

}
