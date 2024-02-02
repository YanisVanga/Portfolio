class Script{
    constructor() {

        this.darkMode = document.getElementById("darkMode");
        this.imgBtnDarkMode = document.getElementById("imgBtnDarkMode");
        this.btnDarkMode = document.getElementById("darkModeBtn");

        this.link1 = document.getElementById("link1");
        this.link2 = document.getElementById("link2");
        this.link3 = document.getElementById("link3");
        this.link4 = document.getElementById("link4");

        this.top = document.getElementById("top");
        this.header = document.getElementById("head");
        this.competence = document.getElementById("competence");
        this.project = document.getElementById("project");
        this.contact = document.getElementById("contact");

        this.color = document.querySelector(':root');

        this.card = document.getElementById("card1");

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

    scrollTo(val){
        if(val === 0){
            this.top.scrollIntoView({ behavior : "smooth"})
        }else if(val === 1){
            this.header.scrollIntoView({ behavior : "smooth"})
        }else if(val === 2){
            this.competence.scrollIntoView({ behavior : "smooth"})
        }else if(val === 3){
            this.project.scrollIntoView({ behavior : "smooth"})
        }else if(val === 4){
            this.contact.scrollIntoView({ behavior : "smooth"})
        }
    }
}