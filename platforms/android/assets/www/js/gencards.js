var content, columns, compiledCardTemplate = undefined;
var MIN_COL_WIDTH = 300;

//data used to render the HTML templates
var cards_data = [
    {   caption:"從木雕刻紋得到啟發",
        title:"木輪薄餅",
        message:"從木雕刻紋得到啟發，製作與三義木雕相呼應的木雕餅造型小巧精緻，猶如半剖的樹幹及原木色澤。",
        spec:"一盒4小包 ，乳酪及咖啡口味",
        imageurl:"img/img12.jpg",
        photourl:"img/yalogo.png",
        ownername:"江記永安囍餅店"},
    {   caption:"神奇卡通包子",
        title:"神奇卡通包子",
        message:"Here, you can see a more complex card.  IT is all just layout of HTML structures.",
        imageurl:"img/img1.jpg",
        photourl:"img/prologo.png",
        ownername:"普羅蛋糕"},
    {   caption:"神奇卡通包子",
        title:"神奇卡通包子",
        message:"Yep, just some simple content ecapsulated in this card.",
        imageurl:"img/img2.jpg",
        photourl:"img/prologo.png",
        ownername:"普羅食品"},
    {   caption:"神奇卡通包子",
        title:"神奇卡通包子",
        banner:true,
        message:"All standard HTML structures, styled with CSS.",
        imageurl:"img/img3.jpg",
        photourl:"img/prologo.png",
        ownername:"普羅食品"},
    {   caption:"神奇卡通包子",
        title:"神奇卡通包子",
        message:"Yep, just some simple content ecapsulated in this card.",
        banner:true,
        imageurl:"img/img5.jpg",
        photourl:"img/person_image_empty_48.png",
        ownername:"普羅食品"},
    {   caption:"神奇卡通包子",
        title:"神奇卡通包子",
        message:"With HTML in the content.<ul><li>Bullet 1</li><li>Bullet 2</li><li>Bullet 3</li></ul>",
        imageurl:"img/img6.jpg",
        photourl:"img/person_image_empty_48.png",
        ownername:"普羅食品"},
    {   caption:"神奇卡通包子",
        title:"神奇卡通包子",
        message:"All of these photos were captured with a quadcopter and GoPro! Check out my blog <a href='http://tricedesigns.com'>http://tricedesigns.com</a> to learn more!",
        imageurl:"img/img7.jpg",
        photourl:"img/person_image_empty_48.png",
        ownername:"普羅食品"},
    {   caption:"神奇卡通包子",
        title:"神奇卡通包子",
        message:"All of these photos were captured with a quadcopter and GoPro! Check out my blog <a href='http://tricedesigns.com'>http://tricedesigns.com</a> to learn more!",
        imageurl:"img/img8.jpg",
        photourl:"img/person_image_empty_48.png",
        ownername:"普羅食品"},
    {   caption:"神奇卡通包子",
        title:"紅豆麻糬（葷食）",
        message:"濃情蜜意的紅豆餡，手作客家傳統麻糬，精心烘焙蛋黃，獨家特製肉鬆，層層包裏的美味麵粉，芝麻，雞蛋",
        spec:"1斤盒裝",
        imageurl:"img/img9.jpg",
        photourl:"img/yalogo.png",
        ownername:"江記永安囍餅店"},
    {   caption:"蛋皮芋頭麻糬",
        title:"蛋皮芋頭麻糬",
        message:"內餡食材：濃郁芋頭餡、手作客家傳統麻糬、紐西蘭安佳奶油、雞蛋、麵粉",
        spec:"可做全素",
        imageurl:"img/img10.jpg",
        photourl:"img/yalogo.png",
        ownername:"江記永安囍餅店"},
    {   caption:"神奇卡通包子",
        title:"桐花餅(大)",
        message:"口中記憶了客家人刻苦耐勞，勤儉持家及硬頸的精神。咀嚼酥鬆的餅衣，品嚐著油桐花自空中飄落般的意境，心中感受如五月雪紛飛的浪漫及初夏的悸動心情。",
        imageurl:"img/img11.jpg",
        photourl:"img/sclogo.png",
        ownername:"世奇精緻餅店"},
    {   caption:"神奇卡通包子",
        title:"牛軋餅",
        message:"從木雕刻紋得到啟發，製作與三義木雕相呼應的木雕餅造型小巧精緻，猶如半剖的樹幹及原木色澤。",
        spec:"一盒4小包 ，乳酪及咖啡口味",
        imageurl:"img/img13.jpg",
        photourl:"img/sclogo.png",
        ownername:"世奇精緻餅店"}
];

//page load initialization
Zepto(function($){
    content = $(".content");
    compiledCardTemplate = Mustache.compile( $("#card-template").html() );
    layoutColumns();
    $(window).resize(onResize);
})

//resize event handler
function onResize() {
    var targetColumns = Math.floor( $(document).width()/MIN_COL_WIDTH );
    if ( columns != targetColumns ) {
        layoutColumns();
    }
}

//function to layout the columns
function layoutColumns() {
    content.detach();
    content.empty();

    columns = Math.floor( $(document).width()/MIN_COL_WIDTH );

    var columns_dom = [];
    for ( var x = 0; x < columns; x++ ) {
        var col = $('<div class="column">');
        col.css( "width", Math.floor(100/columns)+"%" );
        columns_dom.push( col );
        content.append(col);
    }

    for ( var x = 0; x < cards_data.length; x++ ) {
        var html = compiledCardTemplate( cards_data[x] );

        var targetColumn = x % columns_dom.length;
        columns_dom[targetColumn].append( $(html) );
    }
    $("body").prepend (content);
}