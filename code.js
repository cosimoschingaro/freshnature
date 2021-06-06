const menuOpener = document.querySelector('#menu-opener')
        const menu = document.querySelector('#menu')
        menuOpener.addEventListener('click', ()=>{
            menu.classList.toggle('open')
        })

        // FOOTER BUTTON
        
        let opener = document.querySelector('.opener')
             let circles = document.querySelectorAll('.circle')
             let opened = false
             opener.addEventListener('click', ()=>{
                 
                if(opened == false){
                     circles.forEach((circle, i) =>{
                     circle.style.transform = `rotate(-${i*360/circles.length}deg) translateX(80px) rotate(${i*360/circles.length}deg)`
                 })
                     opened = !opened
                 }else {
                     circles.forEach((circle, i) =>{
                     circle.style.transform = `rotate(-${i*360/circles.length}deg) translateX(0px) rotate(${i*360/circles.length}deg)`
                 })
                    
                 }    

            
             })    