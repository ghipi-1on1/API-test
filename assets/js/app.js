// 画面の準備が終わったら
$(function() {

    // 検索ボタンがクリックされた時
    $('#search-btn').on('click', function() {
        // 入力された郵便番号の取得
        let zipCode = $('#search-word').val();


        // ajaxを使って、郵便番号APIへリクエストを送る
        $.ajax({
            // 通信をするブロック
            url: 'http://zipcloud.ibsnet.co.jp/api/search',
            type: 'GET',    // GET送信 or POST送信
            dataType: 'jsonp',
            data: {
                zipcode: zipCode,
            }
        }).done((data) => {
            // 通信が成功した時
            // dataには通信の結果が格納される
            let prefecture = data.results[0].address1
            let city = data.results[0].address2
            let address = data.results[0].address3
            
            $('#prefecture').text(prefecture);
            $('#city').text(city);
            $('#address').text(address);

        }).fail((error) => {
            // 通信が失敗した時
            // errorには失敗の原因などが格納される

        })
    })

})