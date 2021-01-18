$(function(){

    // 受け取った値を書き込む
    let animalInfo = sessionStorage.getItem('animalInfo');
    $('.main__each').append(animalInfo);

    $('.main__each li').on("click", function(){
        let individualAnimal = $("p", this).html();
        console.log( individualAnimal );
    });

});