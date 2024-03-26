class Script{
    constructor() {

        this.darkMode = document.getElementById("darkMode");
        this.imgBtnDarkMode = document.getElementById("imgBtnDarkMode");
        this.btnDarkMode = document.getElementById("darkModeBtn");

        this.bonj = document.getElementById("bonj");

        this.link1 = document.getElementById("link1");
        this.link2 = document.getElementById("link2");
        this.link3 = document.getElementById("link3");
        this.link4 = document.getElementById("link4");

        this.top = document.getElementById("top");
        this.menu = document.getElementById("menu");
        this.header = document.getElementById("head");
        this.competence = document.getElementById("competence");
        this.project = document.getElementById("project");
        this.contact = document.getElementById("contact");

        this.container = document.getElementById("container");

        this.color = document.querySelector(':root');

        this.card = document.getElementById("card1");

        this.color.style.setProperty('--background','#111111');
        /*
        var cursor = document.getElementById("cursor");
        document.body.addEventListener("mousemove", function(e) {
            cursor.style.left = e.clientX + "px",
                cursor.style.top = e.clientY + "px";
        });*/
        const box1 = document.getElementById('box1');
        const box2 = document.getElementById('box2');
        const container = document.querySelector('.container');
        function moveBox(box) {
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;
            const boxWidth = box.clientWidth;
            const boxHeight = box.clientHeight;
            const randomX = Math.random() * (containerWidth - boxWidth);
            const randomY = Math.random() * (containerHeight - boxHeight);
            let startX = parseFloat(box.style.left) || 0;
            let startY = parseFloat(box.style.top) || 0;
            const deltaX = randomX - startX;
            const deltaY = randomY - startY;
            const duration = 5000; // Durée de l'animation en millisecondes
            const startTime = performance.now();
            function animate(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                box.style.left = startX + deltaX * progress + 'px';
                box.style.top = startY + deltaY * progress + 'px';
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
            requestAnimationFrame(animate);
        }
        function startAnimation() {
            moveBox(box1);
            moveBox(box2);
        }
        startAnimation(); // Démarrer l'animation initiale
        setInterval(startAnimation, 5000); // Déclencher une nouvelle animation toutes les 2 secondes

        this.menu.addEventListener("click", () => {
            this.top.classList.toggle("active");
        })
        document.addEventListener("scroll", () => {
            if(this.top.classList.contains("active")){
                this.top.classList.toggle("active");
            }
        })

    }

    changeMode(){
        if(this.color.style.getPropertyValue('--background') === '#111111'){
            //Light
            this.btnDarkMode.classList.remove("modeDark");
            this.color.style.setProperty('--buttonBackground','#FFE500');
            this.color.style.setProperty('--background','#FCFCFC');

            this.color.style.setProperty('--textTitle','#202020');
            this.color.style.setProperty('--textcolor','#7B7B7B');

            this.color.style.setProperty('--figma','#EEEEEE');
            this.color.style.setProperty('--canva','url(#linearCanva)');
            this.color.style.setProperty('--html','url(#linearHtml)');
            this.color.style.setProperty('--css','url(#linearCss)');
            this.color.style.setProperty('--js','#FFC700');
            this.color.style.setProperty('--android','#42FF00');
            this.color.style.setProperty('--php','#9086FF');
            this.color.style.setProperty('--java','url(#linearJava)');
            this.color.style.setProperty('--postrgessql','#6D96FF');
            this.color.style.setProperty('--python','url(#linearPython)');
            this.color.style.setProperty('--github','#EEEEEE');

            this.container.style.display = "none";

            this.color.style.setProperty('--fondlight1','#FCFCFC');
            this.color.style.setProperty('--fondlight2','#111111');

            this.bonj.classList.add("colorh1");
        }else{
            //Dark
            this.btnDarkMode.classList.add("modeDark");
            this.color.style.setProperty('--buttonBackground','#000000');
            this.color.style.setProperty('--background','#111111');
            this.color.style.setProperty('--textTitle','#EEEEEE');
            this.color.style.setProperty('--textcolor','#B4B4B4');

            this.color.style.setProperty('--figma','#EEEEEE');
            this.color.style.setProperty('--canva','#EEEEEE');
            this.color.style.setProperty('--html','#EEEEEE');
            this.color.style.setProperty('--css','#EEEEEE');
            this.color.style.setProperty('--js','#EEEEEE');
            this.color.style.setProperty('--android','#EEEEEE');
            this.color.style.setProperty('--php','#EEEEEE');
            this.color.style.setProperty('--java','#EEEEEE');
            this.color.style.setProperty('--postrgessql','#EEEEEE');
            this.color.style.setProperty('--python','#EEEEEE');
            this.color.style.setProperty('--github','#EEEEEE');

            this.container.style.display = "block";

            this.color.style.setProperty('--fondlight1','');
            this.color.style.setProperty('--fondlight2','');

            this.bonj.classList.remove("colorh1");
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