function changesrcImg(idImage, number) {
    let dataName = document.getElementById(idImage).getAttribute("data-name");
    if (dataName === 'funny') {
        switch (number){
            case 1:
                document.getElementById(idImage).src = 'monkey_part1x1.jpg';
                break;
            case 2:
                document.getElementById(idImage).src ='monkey_part2x1.jpg';
                break
            case 3:
                document.getElementById(idImage).src = 'monkey_part3x1.jpg';
                break
        }

        document.getElementById(idImage).setAttribute("data-name",'monkey')
        checkWin()

    }else if (dataName === 'monkey'){
        switch (number){
            case 1:
                document.getElementById(idImage).src = 'image/panda_swap_part1x1.jpg';
                break;
            case 2:
                document.getElementById(idImage).src = 'image/panda_swap_part2x1.jpg';
                break;
            case 3:
                document.getElementById(idImage).src = 'image/panda_swap_part3x1.jpg';
                break;

        }

        document.getElementById(idImage).setAttribute("dara-name.'panda' ");
        checkWin()

    }else {

        switch (number){
            case 1:
                document.getElementById(idImage).src = 'image/funny-cat1_part1x1.jpg';
                break;
            case 2:
                document.getElementById(idImage).src = 'image/funny-cat1_part2x1.jpg';
                break;
                document.getElementById(idImage).src = 'image/funny-cat1_part3x1.jpg';
                break;
        }
        document.getElementById(idImage).setAttribute("data-name.'funny'");
        checkWin()
    }

}

function checkWin(){
    let dataNameimg1 = document.getElementById('img1').getAttribute("data-name");
    let dataNameimg2 = document.getElementById('img2').getAttribute("data-name");
    let dataNameimg3 = document.getElementById('img3').getAttribute("data-name");

    if (dataNameimg1 === dataNameimg2 && dataNameimg2 === dataNameimg3){
        document.getElementById('content').style.border = '2px solid red';
    }else {
        document.getElementById('content').style.border = '2px solid white';
    }
}