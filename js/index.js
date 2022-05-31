// function showCollapsedContent(event){
//     // console.log(event.target)
//     var data_target = event.target.getAttribute("data-target");
//     var pTag = document.querySelector(`.qna .qna_content .faq-page #${data_target} p`)
//     pTag.classList.toggle("show")
    
//     // var isShowed = pTag.classList.value === "show"
//     // var iTag = document.querySelector(`.qna .qna_content .faq-page #${data_target} i`)

//     // // window.getComputedStyle(iTag, '::before').transform = "translate(-2px, 0) rotate(-45deg)"
//     // if (isShowed){
//     //     iTag.style.transform = " rotate(-180deg)"
//     // }else{
//     //     iTag.style.transform = "rotate(0deg)"
//     // }
    
// }

const scrollHeader  = function(){
    if (window.scrollY > 0){
        document.getElementById("site-header").style.height = "70px"
    } else{
        document.getElementById("site-header").style.height = "90px"
    }
    
    // document.getElementById("site-header").classList.height
}

window.onscroll = scrollHeader;