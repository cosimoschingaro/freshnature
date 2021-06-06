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
                     circle.style.transform = `translate(${i*100}px) translateX(100px) `
                 })
                     opened = !opened
                 }else {
                     circles.forEach((circle, i) =>{
                     circle.style.transform = ` translateX(0px) `
                 })
                    
                 }    

            
             })    