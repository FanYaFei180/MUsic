
export default{
    obj(){
        let win =document.documentElement.clientWidth || document.body.clientWidth;
        let ui = 375;
        document.documentElement.style.fontSize  = (win/ui)*100 +'px'
    }
}
