
$(function (){
    // 쉼표 적용
    var res;
    var money = [];

    for(var i=0; i<6; i++){
        money[i] = $(".goodsPrice").eq(i).find("span").text();
        money[i] = parseInt(money[i]);
        res = money[i].toLocaleString();
        $(".goodsPrice").eq(i).find("span").text(res);
    }

    // // 천단위 구분 쉼표 적용
    // var money = $("table.goodsInfo").eq(0).find("span").text();
    // money = parseInt(money);        // 숫자형으로 변형
    // money = money.toLocaleString(money);  //  문자형으로 변형
    // $(".goodsPrice span").text(money);

    // // 천단위 구분 쉼표 해제
    // var restore = $(".goodsPrice span").text();   // 000,000
    // restore = restore.replace( /,/g , "");      // 변수.replace(A, B); -> A값을 B로 대체
    


    // 모달 레이어 팝업
    $(".goodsInfo").click(function (){
        $("#layerBG").css({"display" : "block"});

        // 클릭한 이미지 가져오기
        var imgSrc = $(this).find("img").attr("src");
        $("#popImg").children("img").attr("src", imgSrc);
        
        // 클릭한 상품명 가져오기
        var goodsName = $(this).find(".goodsName").children("td").html();
        $("#popGoodsName").html(goodsName);

        // 클릭한 상품가격 가져오기
        var goodsPrice = $(this).find(".goodsPrice").children("td").html();
        $("#popGoodsPrice").html(goodsPrice);
    });

    // 팝업창 닫기
    $(".closeBtn").click(function (){
        $("#layerBG").css({"display":"none"});
    });


});
