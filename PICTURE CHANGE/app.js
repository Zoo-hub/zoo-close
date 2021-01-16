window.onload = function() {
    var myImage = document.getElementById("imgch");
    ImgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
    ImgIndex = 1;
    function ChangeImg() {
        myImage.setAttribute("src",ImgArray[ImgIndex]);


        ImgIndex++;

        if(ImgIndex>=ImgArray.length) {
            ImgIndex=0;

        }
    }
    var Time = setInterval(ChangeImg,3000);
}