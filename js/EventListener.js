        //ອ້າງອີງ
       const manu = document.getElementById('manu');
       const btn = document.getElementById('btn')


        // event
        manu.addEventListener('change',get);
        const di = document.getElementById('di');

        btn.addEventListener('click',jay)

        function get(){
            di.innerText = manu.value
        }
        
        function jay(){
            alert("ສະບາຍດີ")
        }
        
