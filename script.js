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