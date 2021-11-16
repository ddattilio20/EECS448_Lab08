var num = 0;
var images = ['images/img1', 'images/img2','images/img3','images/img4','images/img5'];

function nextImg()
{
    if(num == 4){
        num = 0;
        changePhoto(num);
    }
    else{
        num++;
        changePhoto(num);
    }
}

function prevImg()
{
    if(num == 0){
        num = 4;
        changePhoto(num);
    }
    else{
        num--;
        changePhoto(num);
    }
}

function changePhoto()
{
    document.getElementById('img_slide').src=images[num];
}
