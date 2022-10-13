
    function menu(){
let elemMenu = formMenu.elemMenu.value //указали путь для js при помощи консоли можно проверить работает ли

        let fc = formMenu.fc.value;
        let bc = formMenu.bc.value;
        let hc = formMenu.hc.value;

        let arrMenu = elemMenu.split(", ");   //сплит строки в массив и указать разделитель


        //console.log(elemMenu, fc, bc, hc);

        let s1="", s2 = "";

            for(i=0; i < arrMenu.length; i++){ //объявляет по длинне массива
                s1 += `<li onclick="funcIm(${i+1})"><a href="#">${arrMenu[i]}</a></li>`
            }
            
            s1 = `<ul>${s1}</ul>`

            s2 = `a{
                background: ${bc};
                color: ${fc};  
                }
                  a:hover{ 
                background: ${hc};
                }
            `


            boxMenu.innerHTML = s1;
            userStyle.innerHTML = s2;

            formMenu.but.value = "Изменить меню";
    }



    function funcIm(n){
        boxPicture.innerHTML = 
        `
        <img onclick="boxPicture.innerHTML= ''" src="images/${n}.jpg">

        `
    }