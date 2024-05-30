let img=document.querySelector("#img")
let yes=document.querySelector("#yes")
let no=document.querySelector("#no")
let title=document.querySelector("#title")
let sub =document.querySelector("#sub")
title.innerHTML="Do you love me ❤️👌"
sub.innerHTML="Please click yes!!";
let happy=new Audio("/img/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3")
let sad=new Audio("/img/sadtrombone.swf.mp3")

img.style.marginTop="20px";
img.src="/img/Untitled.jpg"
yes.innerHTML="yes "
no.innerHTML = "no 🔪🩻";

yes.addEventListener("click",()=>{
    img.src="/img/200w.gif"
    title.innerHTML="happy happy ! i love you too ❤️❤️❤️"
    sub.innerHTML="i am so happy"
    happy.play()
    happy.loop=true
    sad.pause()

})
no.addEventListener("click",()=>{
    img.src="/img/sad.gif"
    title.innerHTML="sad !"
    sub.innerHTML="i am so sad"
    sad.play()
    sad.loop=true
    happy.pause()
    
})
