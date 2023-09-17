
// Function to open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    renderLyrics(lyrics.lyrics);
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function renderLyrics(lyrics) {
    let html = '';

    for (let i = 0; i < lyrics.length; i++) {
        const line = lyrics[i];
        html += '<div class="lyrics-line">';
        html += '<div class="lyrics-japanese">' + line.japanese + '</div>';
        html += '<div class="lyrics-chinese">' + line.chinese + '</div>';
        html += '</div>' + '<br>';
    }

    const lyricsContainer = document.getElementById("lyricsContainer");
    lyricsContainer.innerHTML = html;
}


const lyrics4 = {
    "lyrics": [
        {
            japanese: "明日世界は終わるんだって",
            chinese: "就算明天就是世界的結束"
        },
        {
            japanese: "君にはもう会えないんだって",
            chinese: "就算再也見不到你"
        },
        {
            japanese: "またいつかって手を振ったって",
            chinese: "就算是說著改天見邊揮著的手"
        },
        {
            japanese: "叶わないんだよ",
            chinese: "都沒法實現了喔"
        },
        {
            japanese: "仕方ないね",
            chinese: "也沒辦法呀"
        },
        {
            japanese: "明日世界は終わるんだって",
            chinese: "就算明天世界迎來終結"
        },
        {
            japanese: "それならもう",
            chinese: "要是那樣的話"
        },
        {
            japanese: "その時まで何度でもずっと",
            chinese: "就直到那個時刻為止不斷的"
        },
        {
            japanese: "好きな音を鳴らそう",
            chinese: "奏出喜歡的音樂吧"
        },
        {
            japanese: "薄暗闇に包まれた",
            chinese: "在這被一層黑暗所瀰漫"
        },
        {
            japanese: "見覚えのない場所、目を覚ます",
            chinese: "沒見過的地方醒來"
        },
        {
            japanese: "ここは夜のない世界",
            chinese: "這裡是沒有夜晚的世界"
        },
        {
            japanese: "今日で終わる世界",
            chinese: "是今天就會結束的世界"
        },
        {
            japanese: "そんな日にあなたに出会った",
            chinese: "在那天和你相遇了"
        },
        {
            japanese: "好きにしていいと",
            chinese: "隨你喜歡的待著吧"
        },
        {
            japanese: "それだけ残して",
            chinese: "僅留下這句話"
        },
        {
            japanese: "何処かへゆく",
            chinese: "就不知道去哪裡了"
        },
        {
            japanese: "あなたの音が遠ざかってく",
            chinese: "你的聲音越來越遠"
        },
        {
            japanese: "そしてまたひとり",
            chinese: "於是就又只剩我一個人"
        },
        {
            japanese: "淀んだ空気の中で",
            chinese: "在這令人窒息的空氣中"
        },
        {
            japanese: "ありふれたあの日々をただ思い返す",
            chinese: "僅是回憶著那些往常的日子"
        },
        {
            japanese: "終わりが来ることを待つ世界で",
            chinese: "在這等待迎來結束的世界"
        },
        {
            japanese: "辛い過去も嫌な記憶も",
            chinese: "痛苦的過去和討厭的記憶"
        },
        {
            japanese: "忘れられないメロディーも",
            chinese: "連著這忘不掉的旋律"
        },
        {
            japanese: "さよならなんだ",
            chinese: "都在今天就此永別"
        },
        {
            japanese: "今ここで好きなようにただ音を鳴らす",
            chinese: "此時此刻隨心的僅是奏著音樂"
        },
        {
            japanese: "最後の日に二人きりの街で",
            chinese: "在最後的一天僅有兩人的街道上"
        },
        {
            japanese: "ありふれたあの日々をただ想い奏でる音が",
            chinese: "僅是邊憶著那些平常的日子所彈奏出的音樂"
        },
        {
            japanese: "明日世界は終わるんだって",
            chinese: "就算明天世界就要結束"
        },
        {
            japanese: "明日世界は終わるんだって",
            chinese: "就算明天世界就要結束"
        },
        {
            japanese: "もしも世界が終わらなくって",
            chinese: "想著要是世界並沒有結束的話"
        },
        {
            japanese: "明日がやってきたなら",
            chinese: "要是明天依舊還是到來的話"
        },
        {
            japanese: "ねえ、その時は二人一緒に",
            chinese: "吶、那個時候兩個人一起"
        },
        {
            japanese: "なんて",
            chinese: "之類的啊"
        }
    ]
};

const tabunElement = document.getElementById("aconru");

lyrics4.lyrics.forEach((line) => {
    const p = document.createElement("p");

    // 日文部分
    const japaneseText = document.createElement("span");
    japaneseText.textContent = line.japanese;
    japaneseText.classList.add("lyrics-japanese"); // 添加日文的 CSS class
    p.appendChild(japaneseText);

    // 中文部分
    if (line.chinese) {
        const chineseText = document.createElement("span");
        chineseText.textContent = line.chinese;
        chineseText.classList.add("lyrics-chinese"); // 添加中文的 CSS class
        const br = document.createElement("br");
        p.appendChild(br);
        p.appendChild(chineseText);
    }

    tabunElement.appendChild(p);
});

const lyricsParagraphs3 = document.querySelectorAll("#aconru p");
lyricsParagraphs3.forEach((p) => {
    p.addEventListener("mouseover", () => {
        p.classList.add("hover-effect");
    });

    p.addEventListener("mouseout", () => {
        p.classList.remove("hover-effect");
    });
});

const tabun1Data = [
    "感受到堅硬的地板而醒了過來。我似乎處在微光的幽暗之中，直接睡在砂石裸露的地面上的樣子。雖然覺得應該是傍晚了，但在一瞬間，我便想起了這個世界已經不再有夜晚。",
    "我把身體撐起來，環顧著四周的狀況。這裡，似乎是個小型的廢棄工廠。不知道有幾扇的窗戶全部都被遮光窗簾蓋住，從窗簾的縫隙灑落的光線，反射著空氣中的塵埃而微微閃爍著。",
    "在這暗處的另一側，可以看見無數個輪廓。",
    "我聚精會神的一看，原來那些是被雜亂堆放著的樂器們。",
    "不知道有幾把的吉他和貝斯，還有整組的爵士鼓，連喇叭和長號這類的吹管樂器也有。但不管是哪種都被粗暴的投扔在地上。",
    "然後在這些樂器的中心處，就像要守護其他樂器般的，一台偌大的平台式鋼琴被放置著。",
    "「這裡是...」",
    "不假思索的發出了聲音。",
    "「樂器的墳場喔」",
    "突然從暗處傳來回應，讓我的心臟差點停了下來。完全沒預料到會有人。",
    "我轉過身面對聲音的方向。",
    "在屋子的角落，像埋在雜亂的樂器山裡面一樣，一個年輕的男子在那裡，彷彿自己也是樂器的一部分似的坐在其中，盯著我看。"

];

const tabun1Element = document.getElementById("tabun1");

// 將陣列的內容放入 HTML 元素
tabun1Data.forEach(item => {
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = item;
    paragraphElement.classList.add("novel-paragraph"); // 添加自定義 CSS 類名
    tabun1Element.appendChild(paragraphElement);
});

// 添加 hover 效果
const novelParagraphElements = document.querySelectorAll("#tabun1Element .novel-paragraph");
novelParagraphElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.style.fontSize = "20px";
        element.style.color = "lightgreen";
    });
    element.addEventListener("mouseout", () => {
        element.style.fontSize = "";
        element.style.color = "";
    });
});



const lyrics3 = {
    "lyrics": [
        {
            "japanese": "素晴らしき世界に今日も乾杯",
            "chinese": "今天也向美好的世界乾杯"
        },
        {
            "japanese": "街に飛び交う笑い声も",
            "chinese": "街上交織的歡笑聲"
        },
        {
            "japanese": "見て見ぬフリしてるだけの作りもんさ",
            "chinese": "也只不過是為了視而不見的產品吧"
        },
        {
            "japanese": "気が触れそうだ",
            "chinese": "就快要瘋了"
        },
        {
            "japanese": "クラクラするほどの良い匂いが",
            "chinese": "讓人頭昏眼花的香氣"
        },
        {
            "japanese": "ツンと刺した鼻の奥",
            "chinese": "唰的刺進鼻腔深處"
        },
        {
            "japanese": "目を覚ます本能のまま",
            "chinese": "服從甦醒的本能"
        },
        {
            "japanese": "今日は誰の番だ？",
            "chinese": "今天該輪到誰呢？"
        },
        {
            "japanese": "この世界で何が出来るのか",
            "chinese": "在這個世界能做到什麼"
        },
        {
            "japanese": "僕には何が出来るのか",
            "chinese": "我又能做些什麼"
        },
        {
            "japanese": "ただその真っ黒な目から",
            "chinese": "只為了讓那雙深黑色眼睛"
        },
        {
            "japanese": "涙溢れ落ちないように",
            "chinese": "不要掉下眼淚"
        },
        {
            "japanese": "願う未来に何度でもずっと",
            "chinese": "緊咬住希望中的未來"
        },
        {
            "japanese": "喰らいつく",
            "chinese": "無論多少次都不要放開"
        },
        {
            "japanese": "この間違いだらけの世界の中",
            "chinese": "因為在這個錯漏百出的世界"
        },
        {
            "japanese": "君には笑ってほしいから",
            "chinese": "我只希望你能露出笑容"
        },
        {
            "japanese": "もう誰も傷付けない",
            "chinese": "已經不想再傷害誰"
        },
        {
            "japanese": "強く強くなりたいんだよ",
            "chinese": "想要變得更加更加強大"
        },
        {
            "japanese": "僕が僕でいられるように",
            "chinese": "讓我可以依然是我"
        },
        {
            "japanese": "素晴らしき世界は今日も安泰",
            "chinese": "美好的世界今天也國泰民安"
        },
        {
            "japanese": "街に渦巻く悪い話も",
            "chinese": "街上打轉的壞消息"
        },
        {
            "japanese": "知らない知らないフリして目を逸らした",
            "chinese": "也裝出我不知道我不知道的別過眼"
        },
        {
            "japanese": "正気の沙汰じゃないな",
            "chinese": "真是瘋了啊"
        },
        {
            "japanese": "真面目に着飾った行進",
            "chinese": "認真盛裝打扮的遊行"
        },
        {
            "japanese": "鳴らす足音が弾む行き先は",
            "chinese": "發出回音的腳步聲所前往的地方"
        },
        {
            "japanese": "消えない消えない味が染み付いている",
            "chinese": "是沾染上消不去消不去味道的"
        },
        {
            "japanese": "裏側の世界",
            "chinese": "黑幕世界"
        },
        {
            "japanese": "清く正しく生きること",
            "chinese": "清白正確的活著"
        },
        {
            "japanese": "誰も悲しませずに生きること",
            "chinese": "不會讓誰悲傷的活著"
        },
        {
            "japanese": "はみ出さず真っ直ぐに生きること",
            "chinese": "不走偏路正直的活著"
        },
        {
            "japanese": "それが間違わないで生きること？",
            "chinese": "這些就是所謂沒有錯誤的活著？"
        },
        {
            "japanese": "ありのまま生きることが正義か",
            "chinese": "以真實的樣子活著是正義嗎"
        },
        {
            "japanese": "騙し騙し生きるのは正義か",
            "chinese": "滿是欺騙的活著是正義嗎"
        },
        {
            "japanese": "僕の在るべき姿とはなんだ",
            "chinese": "我該有的樣貌是怎樣"
        },
        {
            "japanese": "本当の僕は何者なんだ",
            "chinese": "真正的我又到底是誰呢"
        },
        {
            "japanese": "教えてくれよ",
            "chinese": "告訴我啊"
        },
        {
            "japanese": "教えてくれよ",
            "chinese": "告訴我啊"
        },
        {
            "japanese": "今日も",
            "chinese": "今天也在"
        },
        {
            "japanese": "答えのない世界の中で",
            "chinese": "沒有答案的世界中"
        },
        {
            "japanese": "願ってるんだよ",
            "chinese": "祈禱了喔"
        },
        {
            "japanese": "不器用だけれど",
            "chinese": "即使是笨拙的我"
        },
        {
            "japanese": "いつまでも君とただ",
            "chinese": "也想永遠和你"
        },
        {
            "japanese": "笑っていたいから",
            "chinese": "一起笑著"
        },
        {
            "japanese": "跳ねる心臓が",
            "chinese": "跳動的心臟"
        },
        {
            "japanese": "体揺らし叫ぶんだよ",
            "chinese": "晃動身體發出大喊"
        },
        {
            "japanese": "今こそ動き出せ",
            "chinese": "就是現在動起來吧"
        },
        {
            "japanese": "弱い自分を何度でもずっと",
            "chinese": "吞食軟弱的自己"
        },
        {
            "japanese": "喰らい尽くす",
            "chinese": "無論多少次都不要殘留"
        },
        {
            "japanese": "この間違いだらけの世界の中",
            "chinese": "因為在這個錯漏百出的世界"
        },
        {
            "japanese": "君には笑ってほしいから",
            "chinese": "我只希望你能露出笑容"
        },
        {
            "japanese": "もう誰も泣かないよう",
            "chinese": "已經不想再讓誰哭泣"
        },
        {
            "japanese": "強く強くなりたいんだよ",
            "chinese": "想要變得更加更加強大"
        },
        {
            "japanese": "僕が僕でいられるように",
            "chinese": "讓我可以依然是我"
        },
        {
            "japanese": "ただ君を守るそのために",
            "chinese": "只為了守護你"
        },
        {
            "japanese": "走る走る走るんだよ",
            "chinese": "我不斷跑著跑著跑著"
        },
        {
            "japanese": "僕の中の僕を超える",
            "chinese": "去超越在我之中的我"
        }
    ]

}
const aoi1Element = document.getElementById("aoi1");

lyrics3.lyrics.forEach((line) => {
    const p = document.createElement("p");

    // 日文部分
    const japaneseText = document.createElement("span");
    japaneseText.textContent = line.japanese;
    japaneseText.classList.add("lyrics-japanese"); // 添加日文的 CSS class
    p.appendChild(japaneseText);

    // 中文部分
    if (line.chinese) {
        const chineseText = document.createElement("span");
        chineseText.textContent = line.chinese;
        chineseText.classList.add("lyrics-chinese"); // 添加中文的 CSS class
        const br = document.createElement("br");
        p.appendChild(br);
        p.appendChild(chineseText);
    }

    aoi1Element.appendChild(p);
});

const lyricsParagraphs1 = document.querySelectorAll("#aoi1 p");
lyricsParagraphs1.forEach((p) => {
    p.addEventListener("mouseover", () => {
        p.classList.add("hover-effect");
    });

    p.addEventListener("mouseout", () => {
        p.classList.remove("hover-effect");
    });
});



const text = {
    paragraphs: [

        "肉食獸與草食獸的共存世界。",
        "在視食肉為重罪的情況下，名門學校 Cheriton 學園發生了演劇部成員被食襲殺的「食殺事件」。",
        "兇手未被找到，學生們充滿不安。",
        "在這樣的情況下，演劇部圍繞著死去的成員代班發生了爭執。",
        "被傳言為下任「Beastar」候選的阿卡斯卡（Akasika）的魯伊（Louis）被一個對他抱持反感的食肉獸成員襲擊。而保護他的是照明組的二年級生萊戈西（Legoshi）。",
        "儘管外表看起來有著「銳利的爪子」和「巨大的身軀」，但他是一隻心地善良、沉默寡言且笨拙的灰狼。",
        "然而，魯伊卻對這樣的萊戈西表現出偽善且不悅，強迫他擔任夜間練習的監視。",
        "夜晚，當萊戈西在教堂後院的暗處獨自守夜時，出現在他面前的是——",
        "一位小小的白色矮兔女生，哈爾（Haru）。",
        "在聞到她的氣味的瞬間，萊戈西的本能開始橫掃他的身體。",
        "他失去自我並發起襲擊，直到他意識到自己正緊緊擁抱著她。",
        "在懷中傳來的心跳聲，不知道是屬於自己還是屬於她。",
        "然而，哈爾和他與本能的相遇將大大改變平靜且寧靜的萊戈西的人生。",
        "他對她的感情是愛情嗎？還是食慾？",
        "雄性和雌性，肉食獸和草食獸。",
        "他將面對各自的痛苦，以及強大和脆弱，而迷茫的萊戈西的青春正開始了——",

        "肉食獣と草食獣の共存する世界。",
        "食肉が重罪とされるなか、名門校・チェリートン学園で演劇部の生徒が食い殺される“食殺事件”が起きる。",
        "犯人は見つからず、不安に揺れる生徒たち。",
        "そんな中、演劇部では死んだ生徒の代役を巡っていさかいが起きる。",
        "次期『ビースター』候補とささやかれ、演劇部のカリスマ的存在であるアカシカのルイに、逆恨みをした肉食獣の部員が襲いかかったのだ。それを庇ったのは、照明係の二年生・レゴシ。",
        "『鋭い爪』や『大きな体』など、強そうな外見とは裏腹に、心優しく無口で不器用なオスのハイイロオオカミだ。",
        "だが、当のルイはそんなレゴシを偽善的で気に食わないと言い、強引に夜間練習の見張りに任命する。",
        "夜。誰もいない講堂裏の裏庭で、ひとり見張りをしていたレゴシの前に現れたのは―――",
        "小さな白いドワーフウサギの女子生徒・ハル。",
        "その匂いを嗅いだ瞬間、レゴシの体を本能が駆け巡る。",
        "我を忘れて襲いかかり、気付いた時には、彼女を両腕に抱きすくめていた。",
        "腕の中で聞こえる鼓動が自分のものか、彼女のものかもわからない。",
        "しかしこのハルと、そして自分の本能との出会いが、静かで穏やかだったレゴシの人生を大きく変えていく。",
        "彼女へのこの感情は、恋なのか？　それとも食欲なのか？",
        "オスとメス、肉食獣と草食獣。",
        "それぞれの痛み、そして強さや弱さに直面しながら、悩めるレゴシの青春がいま始まった―――"
    ]
};

function renderNovelParagraphs(paragraphs) {
    let html = '';
    for (let i = 0; i < paragraphs.length; i++) {
        html += '<p class="novel-paragraph">' + paragraphs[i] + '</p>';
    }
    return html;
}

const novelContainer = document.getElementById("aoi1novel");
novelContainer.innerHTML = renderNovelParagraphs(text.paragraphs);

// 添加 hover 效果
const novelParagraphElements2 = document.querySelectorAll("#aoi1novel p");
novelParagraphElements2.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.add("novel-hovered");
    });
    element.addEventListener("mouseout", () => {
        element.classList.remove("novel-hovered");
    });
});



const lyrics5 = {
    "lyrics": [
        {
            "japanese": "今、静かな夜の中で",
            "chinese": "如今、於寂靜夜闌中"
          },
          {
            "japanese": "無計画に車を走らせた",
            "chinese": "茫無頭緒地駕駛著車"
          },
          {
            "japanese": "左隣、あなたの",
            "chinese": "明月照耀著、於我左側身旁的"
          },
          {
            "japanese": "横顔を月が照らした",
            "chinese": "你的側顏"
          },
          {
            "japanese": "ただ、思い出を探る様に",
            "chinese": "只是、如似探尋著回憶那般地"
          },
          {
            "japanese": "辿る様に言葉を繋ぎ合わせれば",
            "chinese": "若是將話語聯結於一身的話"
          },
          {
            "japanese": "どうしようもなく溢れてくる",
            "chinese": "便會情不自禁地流溢出"
          },
          {
            "japanese": "日々の記憶",
            "chinese": "日常的回憶"
          },
          {
            "japanese": "あなたのそばで生きると決めたその日から",
            "chinese": "自從決定要陪伴你身旁活著那日開始"
          },
          {
            "japanese": "少しずつ変わり始めた世界",
            "chinese": "就逐漸開始產生些微改變的世界"
          },
          {
            "japanese": "強く在るように弱さを隠すように",
            "chinese": "如同強韌堅強姿態那般 又好似將懦弱給隱藏起那般"
          },
          {
            "japanese": "演じてきた日々に",
            "chinese": "演繹著那模樣而來的日子"
          },
          {
            "japanese": "ある日突然現れたその眼差しが",
            "chinese": "某日倏然出現的那個目光"
          },
          {
            "japanese": "知らなかったこと教えてくれた",
            "chinese": "教予了我過去不曾瞭解的事情"
          },
          {
            "japanese": "守るべきものがあればそれだけで",
            "chinese": "只要有了應須保護之物 僅僅那般事項"
          },
          {
            "japanese": "こんなにも強くなれるんだ",
            "chinese": "就能變得如此地堅強"
          },
          {
            "japanese": "深い深い暗闇の中で",
            "chinese": "在這深不見指的黑闇之中"
          },
          {
            "japanese": "出会い、共に過ごしてきた",
            "chinese": "與你邂逅、一同度過了時光"
          },
          {
            "japanese": "類の無い日々",
            "chinese": "使心情暢懷的"
          },
          {
            "japanese": "心地よかった",
            "chinese": "無可替代的日常"
          },
          {
            "japanese": "いや、幸せだった",
            "chinese": "不、是曾經幸福的日常"
          },
          {
            "japanese": "確かにほら",
            "chinese": "確確實實地 你看"
          },
          {
            "japanese": "救われたんだよ",
            "chinese": "拯救了喔"
          },
          {
            "japanese": "あなたに",
            "chinese": "給你"
          },
          {
            "japanese": "わずかな光を捉えて輝いたのは",
            "chinese": "緊抓著微弱的光芒奪目閃耀的是"
          },
          {
            "japanese": "まるで流れ星のような涙",
            "chinese": "宛如流星般的淚光"
          },
          {
            "japanese": "不器用な命から流れて零れ落ちた",
            "chinese": "從笨拙的生命流淌墜下的"
          },
          {
            "japanese": "美しい涙",
            "chinese": "絢麗的淚光"
          },
          {
            "japanese": "強く大きな体に秘めた優しさも",
            "chinese": "強壯而巨大的軀體所隱藏的溫柔"
          },
          {
            "japanese": "どこか苦しげなその顔も",
            "chinese": "你不知在何處表露出的那個痛苦表情"
          },
          {
            "japanese": "愛しく思うんだ",
            "chinese": "我也覺得值得憐愛"
          },
          {
            "japanese": "姿形じゃないんだ",
            "chinese": "不只是姿態身形"
          },
          {
            "japanese": "やっと気付いたんだ",
            "chinese": "你終於察覺到了啊"
          },
          {
            "japanese": "無情に響く銃声が夜を引き裂く",
            "chinese": "無情地響徹的槍聲 撕裂了夜晚"
          },
          {
            "japanese": "別れの息吹が襲いかかる",
            "chinese": "離別的吐息撲面猛襲而來"
          },
          {
            "japanese": "刹那に輝いた無慈悲な流れ星",
            "chinese": "霎那間所閃耀的無慈悲之流星"
          },
          {
            "japanese": "祈りはただ届かずに消えた",
            "chinese": "祈禱就僅只是沒能傳遞給你消逝了"
          },
          {
            "japanese": "この、手の中で燃え尽きた",
            "chinese": "將這份、於手中燃燒殆盡的"
          },
          {
            "japanese": "金色の優しい彗星を",
            "chinese": "金色的這顆柔和的彗星 以及"
          },
          {
            "japanese": "美しいたてがみを",
            "chinese": "綺麗的鬃毛"
          },
          {
            "japanese": "暗闇の中握り締めた",
            "chinese": "在這黑闇中給緊緊握住"
          }
          
    ]
  };
  const harugaElement = document.getElementById("haruga");
  
  lyrics5.lyrics.forEach((line) => {
    const p = document.createElement("p");
  
    // 日文部分
    const japaneseText = document.createElement("span");
    japaneseText.textContent = line.japanese;
    japaneseText.classList.add("lyrics-japanese"); // 添加日文的 CSS class
    p.appendChild(japaneseText);
  
    // 中文部分
    if (line.chinese) {
      const chineseText = document.createElement("span");
      chineseText.textContent = line.chinese;
      chineseText.classList.add("lyrics-chinese"); // 添加中文的 CSS class
      const br = document.createElement("br");
      p.appendChild(br);
      p.appendChild(chineseText);
    }
  
    harugaElement.appendChild(p);
  });
  
  const lyricsParagraphs4 = document.querySelectorAll("#haruga p");
  lyricsParagraphs4.forEach((p) => {
    p.addEventListener("mouseover", () => {
      p.classList.add("hover-effect");
    });
  
    p.addEventListener("mouseout", () => {
      p.classList.remove("hover-effect");
    });
  });
  
const text1 = {
    paragraphs: [
        

            "肉食獸與草食獸的共存世界。",
            "在視食肉為重罪的情況下，名門學校 Cheriton 學園發生了演劇部成員被食襲殺的「食殺事件」。",
            "兇手未被找到，學生們充滿不安。",
            "在這樣的情況下，演劇部圍繞著死去的成員代班發生了爭執。",
            "被傳言為下任「Beastar」候選的阿卡斯卡（Akasika）的魯伊（Louis）被一個對他抱持反感的食肉獸成員襲擊。而保護他的是照明組的二年級生萊戈西（Legoshi）。",
            "儘管外表看起來有著「銳利的爪子」和「巨大的身軀」，但他是一隻心地善良、沉默寡言且笨拙的灰狼。",
            "然而，魯伊卻對這樣的萊戈西表現出偽善且不悅，強迫他擔任夜間練習的監視。",
            "夜晚，當萊戈西在教堂後院的暗處獨自守夜時，出現在他面前的是——",
            "一位小小的白色矮兔女生，哈爾（Haru）。",
            "在聞到她的氣味的瞬間，萊戈西的本能開始橫掃他的身體。",
            "他失去自我並發起襲擊，直到他意識到自己正緊緊擁抱著她。",
            "在懷中傳來的心跳聲，不知道是屬於自己還是屬於她。",
            "然而，哈爾和他與本能的相遇將大大改變平靜且寧靜的萊戈西的人生。",
            "他對她的感情是愛情嗎？還是食慾？",
            "雄性和雌性，肉食獸和草食獸。",
            "他將面對各自的痛苦，以及強大和脆弱，而迷茫的萊戈西的青春正開始了——",
    
            "肉食獣と草食獣の共存する世界。",
            "食肉が重罪とされるなか、名門校・チェリートン学園で演劇部の生徒が食い殺される“食殺事件”が起きる。",
            "犯人は見つからず、不安に揺れる生徒たち。",
            "そんな中、演劇部では死んだ生徒の代役を巡っていさかいが起きる。",
            "次期『ビースター』候補とささやかれ、演劇部のカリスマ的存在であるアカシカのルイに、逆恨みをした肉食獣の部員が襲いかかったのだ。それを庇ったのは、照明係の二年生・レゴシ。",
            "『鋭い爪』や『大きな体』など、強そうな外見とは裏腹に、心優しく無口で不器用なオスのハイイロオオカミだ。",
            "だが、当のルイはそんなレゴシを偽善的で気に食わないと言い、強引に夜間練習の見張りに任命する。",
            "夜。誰もいない講堂裏の裏庭で、ひとり見張りをしていたレゴシの前に現れたのは―――",
            "小さな白いドワーフウサギの女子生徒・ハル。",
            "その匂いを嗅いだ瞬間、レゴシの体を本能が駆け巡る。",
            "我を忘れて襲いかかり、気付いた時には、彼女を両腕に抱きすくめていた。",
            "腕の中で聞こえる鼓動が自分のものか、彼女のものかもわからない。",
            "しかしこのハルと、そして自分の本能との出会いが、静かで穏やかだったレゴシの人生を大きく変えていく。",
            "彼女へのこの感情は、恋なのか？　それとも食欲なのか？",
            "オスとメス、肉食獣と草食獣。",
            "それぞれの痛み、そして強さや弱さに直面しながら、悩めるレゴシの青春がいま始まった―――"
        ]
    
    
  };
  
  function renderNovelParagraphs(paragraphs) {
    let html = '';
    for (let i = 0; i < paragraphs.length; i++) {
      html += '<p class="novel-paragraph">' + paragraphs[i] + '</p>';
    }
    return html;
  }
  
  const novelContainer1 = document.getElementById("harugaNov1");
  novelContainer1.innerHTML = renderNovelParagraphs(text1.paragraphs);
  