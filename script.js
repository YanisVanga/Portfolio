class Script{
    constructor() {

        this.darkMode = document.getElementById("darkMode");
        this.imgBtnDarkMode = document.getElementById("imgBtnDarkMode");
        this.btnDarkMode = document.getElementById("darkModeBtn");

        this.color = document.querySelector(':root');

        /*
        var cursor = document.getElementById("cursor");
        document.body.addEventListener("mousemove", function(e) {
            cursor.style.left = e.clientX + "px",
                cursor.style.top = e.clientY + "px";
        });*/

    }

    changeMode(){
        if(this.color.style.getPropertyValue('--background') === '#111111'){
            this.btnDarkMode.classList.add("modeDark");
            this.color.style.setProperty('--buttonBackground','#FFE500');
            this.color.style.setProperty('--background','#FFFFFF');

        }else{
            this.btnDarkMode.classList.remove("modeDark");
            this.color.style.setProperty('--buttonBackground','#000000');
            this.color.style.setProperty('--background','#111111');

        }
    }
}