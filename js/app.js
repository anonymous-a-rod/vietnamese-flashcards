const term = document.querySelector('.term');
const definition = document.querySelector(".definition");
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBTN');

const words = {
    hello: ["Hello","Xin chào"],
    hi: ["Hi!","Chào!"],
    thankyou: ["Thank you","Cảm ơn"],
    excuseme: ["Excuse me","Xin lỗi"],
    please: ["Please","Làm ơn"],
    cheers: ["Cheers!","Chúc sức khoẻ!"],
    goodbye: ["Goodbye","Tạm biệt"],
    howmuchisit: ["How much is it?","Cái đó giá bao nhiêu?"],
    vietnam: ["Vietnam","Việt Nam"],
    vietnamese: ["Vietnamse","Tiếng Việt"],
    yes: ["Yes","Có"],
    no: ["No","Không"],
    dong: ["dong (Vietnamese currency)","đồng"],
    thecheck: ["The check, please","Cho hóa đơn tính tiền đi"],
    whereisthebathroom: ["Where is the bathroom?","Phòng tắm ở đâu?"],
    one: ["One (1)","Một"],
    two: ["Two (2)","Hai"],
    three: ["Three (3)","Ba"],
    this: ["This","Cái này"],
    that: ["That","Cái đó"],
    verygood: ["Very good","Rất tốt"],
    pretty: ["Beautiful, pretty","Xinh đẹp"],
    delicious: ["Delicious","Ngon"],
    ilikeit: ["I like it","Tôi thích nó"],
    isitok: ["Is it OK?","Có ổn không?"],
    okallright: ["OK, all right","Ổn rồi"],
    thatsgood: ["That's good","Tốt lắm"],
    excusemeattention: ["Excuse me (to get attention)","Xin lỗi anh (chị)"],
    whereis: ["Where is …?","… ở đâu?"],
    what: ["What?","Cái gì?"],
    when: ["When?","Khi nào?"],
    alittle: ["A little","Một chút"],
    welcome: ["Welcome!","Hoan nghênh!"],
    goodmorning: ["Good morning","Chào buổi sáng"],
    goodnight: ["Good night","Chúc ngủ ngon"],
    bye: ["Bye!","Tạm biệt!"],
    tyvm: ["Thank you very much","Cảm ơn bạn rất nhiều"],
    yourewelcome: ["You're welcome","Không có gì"],
    noproblem: ["No problem","Không vấn đề gì"],
    iloveyou: ["I love you","Anh (Em) yêu em (anh)"],
    congrats: ["Congratulations!","Xin chúc mừng!"],
    imsorry: ["I'm sorry","Tôi xin lỗi"],
    whatdoyourecommend: ["What do you recommend?","Anh (Chị) gợi ý món nào?"],
    canitakeaphoto: ["Can I take a photo?","Tôi có thể chụp ảnh không?"],
    whatisthat: ["What is that?","Cái gì vậy?"],
    whereareyoufrom: ["Where are you from?","Bạn đến từ đâu?"],
    iamfrom: ["I am from …","Tôi đến từ …"],
    howareyoudoing: ["How are you doing?","Cậu thế nào rồi?"],
    imfine: ["I'm fine","Tôi khỏe"],
    nicetomeetyou: ["Nice to meet you","Rất vui được gặp anh (chị)"],
    whatisyournameformal: ["What is your name? (formal)","Tên anh (chị) là gì?"],
    whatisyournameinformal: ["What is your name? (informal)","Bạn tên gì?"],
    mynameis: ["My name is …","Tên tôi là …"],
    here: ["Here","Ở đây"],
    there: ["There","Ở đó"],
    interesting: ["Interesting","Thú vị"],
    possible: ["Possible","Có thể"],
    correct: ["Correct, right","Đúng"],
    wonderful: ["Wonderful","Tuyệt vời"],
    favorite: ["Favorite","Ưa thích"],
    famous: ["Famous","Nổi tiếng"],
    awesome: ["Awesome!","Tuyệt quá!"],
    busy: ["Busy","Bận"],
    ready: ["Ready","Sẵn sàng"],
    later: ["Later","Sau"],
    now: ["Now","Bây giờ"],
    i: ["I","Tôi"],
    you: ["You","Bạn"],
    youinformal: ["You (informal)","Cậu"],
    youformal: ["You (formal)","Anh (Chị)"],
    friend: ["Friend","Bạn bè"],
    motorbikedriver: ["Motorbike taxi driver","Xe ôm"],
    more: ["More","Nhiều hơn"],
    ofcourse: ["Of course","Tất nhiên"],
    iagree: ["I agree","Tôi đồng ý"],
    iunderstand: ["I understand","Tôi hiểu"],
    idontunderstand: ["I don't understand","Tôi không hiểu"],
    repeatit: ["Repeat it, please","Vui lòng lặp lại"],
    canyouspeakenglish: ["Can you speak English?","Bạn có nói tiếng Anh không?"],
    icanspeakalittlevietnamese: ["I can speak a little bit of Vietnamese","Tôi có thể nói một chút tiếng Việt"],
    howdoyousayinvietnamese: ["How do you say … in Vietnamese?","Trong tiếng Việt … gọi là gì?"],
    whatdoesmean: ["What does … mean?","… nghĩa là gì?"],
    canigetinternetaccesshere: ["Can I get Internet access here?","Tôi có thể truy cập Internet ở đây không?"],
    canyourecommendagoodrestaurantnearby: ["Can you recommend a good restaurant nearby?","Bạn có thể giới thiệu cho tôi một nhà hàng ngon gần đây không?"],
    canyougivemeadiscount: ["Can you give me a discount?","Bạn có thể giảm giá không?"],
    idontwantit: ["I don't want it","Tôi không muốn nó"],
    help: ["Help!","Cứu tôi với!"],
    police: ["Police","Cảnh sát"],
    doctor: ["Doctor","Bác sĩ"],
    imlost: ["I'm lost","Tôi bị lạc đường"],
    whichway: ["Which way?","Đường nào?"],
    today: ["Today","Hôm nay"],
    tomorrow: ["Tomorrow","Ngày mai"],
    left: ["Left","Bên trái"],
    right: ["Right (not left)","Bên Phải"],
    closed: ["Closed (for business)","Đóng cửa"],
    water: ["Water","Nước"],
    spicy: ["Spicy (hot)","Cay"],
    rice: ["Rice","Cơm"],
    happy: ["Happy","Vui"],
    tonguetwister: ["Tongue Twister: The chubby woman Ba sells rice cake on the sea shore","Bà ba béo bán bánh bèo bên bờ biển"],
}

data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[1][1]}</h3>`
    definition.innerHTML = `<h3>${randomTerm[1][0]}</h3>`    
    audio.src = `assets/${randomTerm[0]}.mp3`;
}

checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
    definition.style.display = 'none';
    getRandomWord();
});

function playWord(){

    audio.play();
    
}

playBtn.addEventListener('click', () => {
    audio.currentTime = 0;
    playWord();
});
