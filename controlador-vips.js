var vip = document.getElementById("vip")
    vips = document.getElementById("vips")
    fusion = document.getElementById("fusion")
    fusion2 = document.getElementById("fusion2")
    menu = document.getElementById("menu")
    menunada = document.getElementById("menunada")

    contador=0;
    contador2=0;

    function cambio()
    {
        if(contador==0)
        {
            menunada.classList.remove("menuimg");
            fusion2.classList.remove("fusioncolor2");
            contador2=0;
            DelayNode= 0.5
         vips.classList.add("imagenvip");
         fusion.classList.add("fusioncolor");
         contador=1;
         
        }
        else
        {
         vips.classList.remove("imagenvip");
         fusion.classList.remove("fusioncolor");
         contador=0;
        }
    }

    function cambio2()
    {
        if(contador2==0)
        {
            vips.classList.remove("imagenvip");
            fusion.classList.remove("fusioncolor");
            contador=0;
            DelayNode= 0.5
            menunada.classList.add("menuimg");
         fusion2.classList.add("fusioncolor2");
         contador2=1;
         
        }
        else
        {
         menunada.classList.remove("menuimg");
         fusion2.classList.remove("fusioncolor2");
         contador2=0;
        }
    }
    vip.addEventListener("click",cambio,true)
    menu.addEventListener("click",cambio2,true)