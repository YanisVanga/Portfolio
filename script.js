class Script{
    constructor() {

        this.darkMode = document.getElementById("darkMode");
        this.imgBtnDarkMode = document.getElementById("imgBtnDarkMode");
        this.btnDarkMode = document.getElementById("darkModeBtn");

        this.color = document.querySelector(':root');

    }

    changeMode(){
        if(this.color.style.getPropertyValue('--background') === '#111111'){
            this.btnDarkMode.classList.add("modeDark");
            this.color.style.setProperty('--buttonBacground','#FFE500');
            this.color.style.setProperty('--background','#FFFFFF');

        }else{
            this.btnDarkMode.classList.remove("modeDark");
            this.color.style.setProperty('--buttonBacground','#000000');
            this.color.style.setProperty('--background','#111111');

        }
    }
}