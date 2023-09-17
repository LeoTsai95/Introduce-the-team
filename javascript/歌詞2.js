
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
      japanese: "涙流すことすらないまま",
      chinese: "連淚水都已經乾枯"
    },
    {
      japanese: "過ごした日々の痕一つも残さずに",
      chinese: "一起走過的痕跡都不留絲毫"
    },
    {
      japanese: "さよならだ",
      chinese: "再見了"
    },
    {
      japanese: "一人で迎えた朝に",
      chinese: "獨自一人迎來的清晨"
    },
    {
      japanese: "鳴り響く誰かの音",
      chinese: "響起了某人的聲音"
    },
    {
      japanese: "二人で過ごした部屋で",
      chinese: "在曾一起生活過的房間裡"
    },
    {
      japanese: "目を閉じたまま考えてた",
      chinese: "閉上眼默默思考著"
    },
    {
      japanese: "悪いのは誰だ",
      chinese: "究竟是誰的錯"
    },
    {
      japanese: "分かんないよ",
      chinese: "我並不明白"
    },
    {
      japanese: "誰のせいでもない",
      chinese: "並不是任何人的錯"
    },
    {
      japanese: "たぶん",
      chinese: "大概吧"
    },
    {
      japanese: "僕らは何回だってきっと",
      chinese: "我們肯定無論幾回都"
    },
    {
      japanese: "そう何年だってきっと",
      chinese: "沒錯無論幾年都"
    },
    {
      japanese: "さよならと共に終わるだけなんだ",
      chinese: "只是與再見一同消逝"
    },
    {
      japanese: "仕方がないよきっと",
      chinese: "肯定沒有任何方法"
    },
    {
      japanese: "「おかえり」",
      chinese: "「歡迎回來」"
    },
    {
      japanese: "思わず零れた言葉は",
      chinese: "與不經思考所灑落的話語"
    },
    {
      japanese: "違うな",
      chinese: "果然不同"
    },
    {
      japanese: "一人で迎えた朝に",
      chinese: "獨自一人迎來的清晨"
    },
    {
      japanese: "ふと思う誰かのこと",
      chinese: "不經意想起某人的事"
    },
    {
      japanese: "二人で過ごした日々の",
      chinese: "兩人一起度過的日子"
    },
    {
      japanese: "当たり前がまだ残っている",
      chinese: "那理所當然仍舊殘留著"
    },
    {
      japanese: "悪いのは君だ",
      chinese: "錯的是你"
    },
    {
      japanese: "そうだっけ",
      chinese: "是嗎"
    },
    {
      japanese: "悪いのは僕だ",
      chinese: "錯的是我"
    },
    {
      japanese: "たぶん",
      chinese: "是吧"
    },
    {
      japanese: "これも大衆的恋愛でしょ",
      chinese: "這也是大眾式戀愛吧"
    },
    {
      japanese: "それは最終的な答えだよ",
      chinese: "這是最終的解答對吧"
    },
    {
      japanese: "僕らだんだんとズレていったの",
      chinese: "我們逐漸錯開了彼此"
    },
    {
      japanese: "それもただよくある聴き慣れたストーリーだ",
      chinese: "這也是經常聽慣了的故事"
    },
    {
      japanese: "あんなに輝いていた日々にすら",
      chinese: "就連那閃耀的每一天也"
    },
    {
      japanese: "埃は積もっていくんだ",
      chinese: "將逐漸的蒙上灰塵"
    },
    {
      japanese: "僕らは何回だってきっと",
      chinese: "我們肯定無論幾回都"
    },
    {
      japanese: "そう何年だってきっと",
      chinese: "沒錯無論幾年都"
    },
    {
      japanese: "さよならに続く道を歩くんだ",
      chinese: "只能在說了再見以後繼續前行"
    },
    {
      japanese: "仕方がないよきっと",
      chinese: "肯定沒有任何方法"
    },
    {
      japanese: "「おかえり」",
      chinese: "「歡迎回來」"
    },
    {
      japanese: "いつもの様に",
      chinese: "如同既往一般"
    },
    {
      japanese: "零れ落ちた",
      chinese: "漫溢而出"
    },
    {
      japanese: "分かり合えないことなんてさ",
      chinese: "那些無法相互理解的事"
    },
    {
      japanese: "幾らでもあるんだきっと",
      chinese: "想必不可勝數"
    },
    {
      japanese: "全てを許し合えるわけじゃないから",
      chinese: "明明並不全是無法互相諒解的呀"
    },
    {
      japanese: "ただ、優しさの日々を",
      chinese: "倘若連原本充滿溫柔的日子"
    },
    {
      japanese: "痛い日々と感じてしまったのなら",
      chinese: "也感到痛楚的話"
    },
    {
      japanese: "戻れないから",
      chinese: "便回不去了"
    },
    {
      japanese: "僕らは何回だってきっと",
      chinese: "我們肯定無論幾回都"
    },
    {
      japanese: "そう何年だってきっと",
      chinese: "沒錯無論幾年都"
    },
    {
      japanese: "始まりに戻ることが出来たなら",
      chinese: "若能回到最初的起點"
    },
    {
      japanese: "なんて、思ってしまうよ",
      chinese: "之類的，偶爾也會想想"
    },
    {
      japanese: "「おかえり」",
      chinese: "「歡迎回來」"
    },
    {
      japanese: "届かず零れた言葉に",
      chinese: "對那無法傳達的言語"
    },
    {
      japanese: "笑った",
      chinese: "輕聲笑出"
    },
    {
      japanese: "少し冷えた朝だ",
      chinese: "有些寒冷的早晨"
    }

  ]
}
const tabunElement = document.getElementById("tabun");

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

const lyricsParagraphs3 = document.querySelectorAll("#tabun p");
lyricsParagraphs3.forEach((p) => {
  p.addEventListener("mouseover", () => {
    p.classList.add("hover-effect");
  });

  p.addEventListener("mouseout", () => {
    p.classList.remove("hover-effect");
  });
});



const tabun1Data = [
  "或許",
  "因為嘈雜的聲響，而清醒了過來。",
  "能輕易進入這連親人都沒有交付鑰匙，一個人生活著的房間的，只有那個關係維持到前一陣子，名為同居人的人。",
  "說到這個，備用鑰匙還在那傢伙身上吧\"，怎麼會到現在才意識到。",
  "在那傢伙突然離開的這幾周裡，接受他不在的事實就已經耗盡心力了，他留下了些什麼，拿走了些什麼之類的事情還沒辦法仔細探究。",
  "好久不見，歡迎回來，早上好。",
  "不知道該用哪個詞語來面對，即使已經完全清醒了，我仍然閉著眼睛，沒有動作。",
  "雖然還閉著眼，思考著該說些什麼，卻不知道在什麼時候把注意力放在了耳朵上。",
  "現在聽到的，應該是那傢伙的聲音。雖然覺得一定是這樣，雖然覺得不會搞錯。不過說不定是小偷或強盜之類的，這樣的可能性也並不是零。",
  "應該，是那傢伙。即使這樣想著，還是有點違和感。在這間房間裡的，真的是那傢伙嗎？",
  "傳來的聲音，有些粗暴。",
  "蹦、咚、槓、噹，是混著濁音的粗糙聲音。",
  "鐽鐽鐽、嘎嘎嘎、哆哆哆、嘰嘰嘰。(*1)",
  "我很清楚，這和那傢伙的聲音完全不一樣。那傢伙的聲音是更加柔軟且謹慎的。是個生活中不會有嘈雜聲的人。",
  "並非\"咚\"，而是\"嗵\"。也不是\"鐽鐽鐽\"，而是\"噠噠噠\"。(*2)",
  "輕巧，和緩，平靜。",
  "無論何時傳到耳邊的聲音都是令人心情愉悅的。並不是這種刺耳的噪音。",
  "果然搞錯了。一定錯了。在這裡的人，不是那傢伙。即便張開眼睛，那傢伙一定也不在。",
  "現在在這間屋子裡的恐怕是，跟管理人交涉後請他幫忙開門的母親，或是非法入侵的陌生人。",
  "如果是這樣的話，我打算維持現狀繼續裝睡。如果是母親的話，再不久應該強迫的也會把我叫醒；如果是壞人的話，當面爭鬥什麼的實在太可怕了。如果還帶著刀械的話，我更是一點勝算也沒有。如果只是小偷的話，把要偷的東西偷走後，不會再特意加害住戶就會離開，這點是不會錯的。",
  "比起不小心刺激到，裝睡度過才是明哲保身的方式。",
  "啊啊，但要是重要的東西被偷走了該怎麼辦。如果遺失了會很困擾的重要的東西。",
  "存摺，馬上聯絡銀行的話應該就能解決了吧。",
  "喜歡的衣服，穿過很多次，也已經變形了，小偷也不可能特別盯上這個而把衣服帶走。況且也不是那麼昂貴的衣服。",
  "智慧型手機，討厭。不想被偷走啊。裡面可是存著這樣那樣一堆的資料。被拿走的話應該會變得非常非常的棘手。",
  "然後，還有什麼。重要的東西。",
  "無論如何都不想被偷走，重要的東西。",
  "……一定有什麼。",
  "無論如何，都不想被偷走，不想被偷走。",
  "無論如何，都不想。",
  "不想。"
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
      "japanese": "嗚呼、いつもの様に",
      "chinese": "啊啊，如往常那般"
    },
    {
      "japanese": "過ぎる日々にあくびが出る",
      "chinese": "對過去的日子打了個哈欠"
    },
    {
      "japanese": "さんざめく夜、越え、今日も",
      "chinese": "喧囂的夜晚，越過，今天也"
    },
    {
      "japanese": "渋谷の街に朝が降る",
      "chinese": "朝陽就要降臨在涉谷的街上"
    },
    {
      "japanese": "どこか虚しいような",
      "chinese": "總覺得似乎有些空虛"
    },
    {
      "japanese": "そんな気持ち",
      "chinese": "那樣的感覺"
    },
    {
      "japanese": "つまらないな",
      "chinese": "真是無趣"
    },
    {
      "japanese": "でもそれでいい",
      "chinese": "但這樣就好"
    },
    {
      "japanese": "そんなもんさ",
      "chinese": "就是如此"
    },
    {
      "japanese": "これでいい",
      "chinese": "這樣就足夠了"
    },
    {
      "japanese": "(知らず知らず隠してた)",
      "chinese": "(不知不覺中將其隱藏)"
    },
    {
      "japanese": "(本当の声を響かせてよ、ほら)",
      "chinese": "(讓真實的聲音響起吧，你看)"
    },
    {
      "japanese": "(見ないフリしていても)",
      "chinese": "(即使你視若無睹)"
    },
    {
      "japanese": "(確かにそこにある)",
      "chinese": "(它確實存在著)"
    },
    {
      "japanese": "Ah——",
      "chinese": "啊——"
    },
    {
      "japanese": "感じたままに描く",
      "chinese": "如你所想的描繪"
    },
    {
      "japanese": "自分で選んだその色で",
      "chinese": "由自己選擇的色彩"
    },
    {
      "japanese": "眠い空気纏う朝に",
      "chinese": "於困倦氣息縈繞的早晨"
    },
    {
      "japanese": "訪れた青い世界",
      "chinese": "所造訪的湛藍世界"
    },
    {
      "japanese": "好きなものを好きだと言う",
      "chinese": "面對喜愛的事物就說出喜歡"
    },
    {
      "japanese": "怖くて仕方ないけど",
      "chinese": "雖然害怕卻也無可奈何"
    },
    {
      "japanese": "本当の自分",
      "chinese": "我好似遇見了"
    },
    {
      "japanese": "出会えた気がしたんだ",
      "chinese": "真實的自我"
    },
    {
      "japanese": "嗚呼、手を伸ばせば伸ばすほどに",
      "chinese": "啊啊，越是伸出自己的雙手"
    },
    {
      "japanese": "遠くへゆく",
      "chinese": "便越是遠離而去"
    },
    {
      "japanese": "思うようにいかない、今日も",
      "chinese": "無法順心如意的日子"
    },
    {
      "japanese": "また慌ただしくもがいてる",
      "chinese": "今日也一如既往的匆忙慌張著"
    },
    {
      "japanese": "悔しい気持ちも",
      "chinese": "就連不甘的心情"
    },
    {
      "japanese": "ただ情けなくて",
      "chinese": "都顯得如此可恥"
    },
    {
      "japanese": "涙が出る",
      "chinese": "眼淚將要潰堤"
    },
    {
      "japanese": "踏み込むほど",
      "chinese": "越是陷入其中"
    },
    {
      "japanese": "苦しくなる",
      "chinese": "便越是受傷"
    },
    {
      "japanese": "痛くもなる",
      "chinese": "更是感到痛苦"
    },
    {
      "japanese": "Ah——",
      "chinese": "啊——"
    },
    {
      "japanese": "感じたままに進む",
      "chinese": "如你所知的前行"
    },
    {
      "japanese": "自分で選んだこの道を",
      "chinese": "由自己選擇的這條路"
    },
    {
      "japanese": "重いまぶた擦る夜に",
      "chinese": "於划過沉重雙眼的黑夜"
    },
    {
      "japanese": "しがみついた青い誓い",
      "chinese": "緊抓不放的湛藍誓言"
    },
    {
      "japanese": "好きなことを続けること",
      "chinese": "堅持自己所愛的事物"
    },
    {
      "japanese": "それは「楽しい」だけじゃない",
      "chinese": "那並不是唯有「快樂」"
    },
    {
      "japanese": "本当にできる？",
      "chinese": "我究竟能否達成呢？"
    },
    {
      "japanese": "不安になるけど",
      "chinese": "也會如此的不安"
    },
    {
      "japanese": "Ah",
      "chinese": "啊"
    },
    {
      "japanese": "何枚でも",
      "chinese": "無論多少"
    },
    {
      "japanese": "ほら何枚でも",
      "chinese": "看啊，無論畫了多少"
    },
    {
      "japanese": "自信がないから描いてきたんだよ",
      "chinese": "都是些毫無自信的創作"
    },
    {
      "japanese": "Ah",
      "chinese": "啊"
    },
    {
      "japanese": "何回でも",
      "chinese": "無論多少回"
    },
    {
      "japanese": "ほら何回でも",
      "chinese": "你看，無論多少回"
    },
    {
      "japanese": "積み上げてきたことが武器になる",
      "chinese": "日積月累而成的經驗都將成為武器"
    },
    {
      "japanese": "周りを見たって",
      "chinese": "即使望向周圍"
    },
    {
      "japanese": "誰と比べたって",
      "chinese": "即使與誰相較"
    },
    {
      "japanese": "僕にしかできないことはなんだ",
      "chinese": "我也有唯獨自己才能達成的事物"
    },
    {
      "japanese": "今でも自信なんかない",
      "chinese": "直至此刻我仍毫無自信"
    },
    {
      "japanese": "それでも",
      "chinese": "即使如此"
    },
    {
      "japanese": "感じたことない気持ち",
      "chinese": "從未感覺過的心情"
    },
    {
      "japanese": "知らずにいた想い",
      "chinese": "不知不覺中萌生的思想"
    },
    {
      "japanese": "あの日踏み出して",
      "chinese": "朝著那日邁步向前"
    },
    {
      "japanese": "初めて感じたこの痛みも全部",
      "chinese": "連同初次感受到的痛苦一起"
    },
    {
      "japanese": "好きなものと向き合うことで",
      "chinese": "與喜愛的事物一同面對"
    },
    {
      "japanese": "触れたまだ小さな光",
      "chinese": "觸碰到彼此微小的光芒"
    },
    {
      "japanese": "大丈夫、行こう、あとは楽しむだけだ",
      "chinese": "沒問題的，前進吧，接下來只要享受即可"
    },
    {
      "japanese": "Ah——",
      "chinese": "啊——"
    },
    {
      "japanese": "全てを賭けて描く",
      "chinese": "賭上一切去描繪"
    },
    {
      "japanese": "自分にしか出せない色で",
      "chinese": "用只有自己才能繪出的色彩"
    },
    {
      "japanese": "朝も夜も走り続け",
      "chinese": "不分晝夜的持續奔馳著"
    },
    {
      "japanese": "見つけ出した青い光",
      "chinese": "終於遇見那湛藍之光"
    },
    {
      "japanese": "好きなものと向き合うこと",
      "chinese": "與喜愛的事物相互理解"
    },
    {
      "japanese": "今だって怖いことだけど",
      "chinese": "即使至今也十分害怕"
    },
    {
      "japanese": "もう今はあの日の透明な僕じゃない",
      "chinese": "但此刻已不是當日那透明的我"
    },
    {
      "japanese": "Ah——",
      "chinese": "啊——"
    },
    {
      "japanese": "ありのままの",
      "chinese": "抱持自我的灑脫"
    },
    {
      "japanese": "かけがえのない僕だ",
      "chinese": "無可代替的我"
    },
    {
      "japanese": "(知らず知らず隠してた)",
      "chinese": "(不知不覺中將其隱藏)"
    },
    {
      "japanese": "(本当の声を響かせてよ、ほら)",
      "chinese": "(讓真實的聲音響起吧，你看)"
    },
    {
      "japanese": "(見ないフリしていても)",
      "chinese": "(即使你視若無睹)"
    },
    {
      "japanese": "(確かにそこにある)",
      "chinese": "(它確實存在著)"
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
    "與青色為伴。",
    "你是一個神秘的人。雖然有智慧去生活，但卻選擇了不確定的未來。",
    "雖然你可以只做功課，只做成大人喜歡的事情，過著沒有問題的日子。",
    "然而你選擇了繪畫。進入只能通過創作前進的世界。",
    "從心底深處進入與他人相連的世界。進入你真正喜歡的世界。",
    "說出喜歡的事物，其實是一件可怕的事情。如果喜歡的事物被否定，會感到無可奈何的沮喪。",
    "然而你依然面對著繪畫。有時候休息一下，調整呼吸，繼續前進。",
    "正因為還處在未成熟的「青」色時代，所以會經歷掙扎和痛苦。",
    "但正因為經歷了這個「青」色時代，人才能夠朝前看。也許會迷失目標。",
    "但是，只要有感到懊悔的心情，就能夠戰鬥。",
    "這個世界沒有正確答案。「如果你看起來是青色的話，蘋果和兔子的身體也可以是青色的」。",
    "對於在迷茫中依然面對喜歡的你，我羨慕不已。"
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
      japanese: "思い出すのは",
      chinese: "回想起來的是"
    },
    {
      japanese: "出会った日のこと",
      chinese: "那日的相遇"
    },
    {
      japanese: "誰の元にも帰れないボクを",
      chinese: "把誰的懷裡都去不了的我"
    },
    {
      japanese: "見つけ出してくれた",
      chinese: "給找出來"
    },
    {
      japanese: "救い出してくれた",
      chinese: "給救出來"
    },
    {
      japanese: "忘れることない君の笑顔",
      chinese: "不曾忘記的你的笑容"
    },
    {
      japanese: "暮らしのすきま",
      chinese: "生活中的間隙"
    },
    {
      japanese: "よふけの祈り",
      chinese: "徹夜的祈禱"
    },
    {
      japanese: "いつでも君と共に歩いてきたキセキ",
      chinese: "一直以來都與你走過的奇蹟"
    },
    {
      japanese: "つらいことも",
      chinese: "痛苦的事情也"
    },
    {
      japanese: "うれしいことも",
      chinese: "開心的事情也"
    },
    {
      japanese: "分かち合えるそんな",
      chinese: "能一起分享的"
    },
    {
      japanese: "日々よ",
      chinese: "日子"
    },
    {
      japanese: "ふりかえれば数え切れない",
      chinese: "回想起來的話數也數不清"
    },
    {
      japanese: "思い出があふれ出してくる",
      chinese: "回憶將不斷湧出"
    },
    {
      japanese: "だれにも見えないところで",
      chinese: "在誰也看不到的角落"
    },
    {
      japanese: "がんばってる",
      chinese: "努力著"
    },
    {
      japanese: "君のそばにいられること",
      chinese: "能在你身邊待著這件事情"
    },
    {
      japanese: "それだけで",
      chinese: "只有這件事"
    },
    {
      japanese: "こんなにほら幸せなんだよ",
      chinese: "你看是這麼的幸福的喔"
    },
    {
      japanese: "こみ上げてくる",
      chinese: "不斷竄出的"
    },
    {
      japanese: "想いはただ",
      chinese: "想法只有"
    },
    {
      japanese: "ありがとう",
      chinese: "感謝"
    },
    {
      japanese: "訪れた",
      chinese: "來訪的"
    },
    {
      japanese: "よろこびの春は",
      chinese: "喜悅的春天是"
    },
    {
      japanese: "旅立ちの季節",
      chinese: "啟程的季節"
    },
    {
      japanese: "はなれた街にも",
      chinese: "在遠離的街道也"
    },
    {
      japanese: "連れ出してくれたね",
      chinese: "能將我帶著一起走"
    },
    {
      japanese: "ひとり不安な日々に",
      chinese: "獨自一人不安的日子"
    },
    {
      japanese: "さみしそうな君に",
      chinese: "看起來寂寞的你"
    },
    {
      japanese: "送るエール",
      chinese: "送給你聲援"
    },
    {
      japanese: "ボクがついてるよ",
      chinese: "有我在"
    },
    {
      japanese: "楽しいことばかりじゃない日常に",
      chinese: "並不只有快樂事的日常"
    },
    {
      japanese: "あふれだした君の涙",
      chinese: "溢出的你的眼淚"
    },
    {
      japanese: "それでも",
      chinese: "即便這樣"
    },
    {
      japanese: "前を向いて歩いて",
      chinese: "還是要向前邁步"
    },
    {
      japanese: "そうやって大人になってく",
      chinese: "這樣的變成成熟大人"
    },
    {
      japanese: "君のそばにいられること",
      chinese: "能在你身邊的這件事"
    },
    {
      japanese: "君のよろこびは",
      chinese: "你的喜悅"
    },
    {
      japanese: "ボクのよろこびで",
      chinese: "就是我的快樂"
    },
    {
      japanese: "君の大切が幸せが",
      chinese: "你珍視的事物與你的幸福"
    },
    {
      japanese: "いつまでも君とありますように",
      chinese: "無論何時都願與你相伴"
    },
    {
      japanese: "ねえ",
      chinese: "吶"
    },
    {
      japanese: "君のそばにはもう",
      chinese: "你的身邊已經"
    },
    {
      japanese: "たくさんの愛があふれてる",
      chinese: "散溢著無數的愛"
    },
    {
      japanese: "だから今は",
      chinese: "所以現在"
    },
    {
      japanese: "どうか泣かないで",
      chinese: "請不要哭泣"
    },
    {
      japanese: "あの日のように笑顔で",
      chinese: "請維持那天的笑容"
    },
    {
      japanese: "ふりかえればいくつもの",
      chinese: "回想起的話有幾段"
    },
    {
      japanese: "思い出がよみがえってくる",
      chinese: "回憶會被喚起"
    },
    {
      japanese: "だれにも見えないところで",
      chinese: "在誰也看不到的角落"
    },
    {
      japanese: "流した涙もほら",
      chinese: "留下的眼淚你看"
    },
    {
      japanese: "今の君につながってる",
      chinese: "與今日的你相聯繫著"
    },
    {
      japanese: "たくさんの愛につながってる",
      chinese: "與無數的愛相聯繫著"
    },
    {
      japanese: "こみ上げてくる",
      chinese: "不斷竄出的"
    },
    {
      japanese: "想いはただ",
      chinese: "想法只有"
    },
    {
      japanese: "ありがとう",
      chinese: "感謝"
    },
    {
      japanese: "いつまでも",
      chinese: "無論何時"
    },
    {
      japanese: "幸せで",
      chinese: "都是幸福的"
    },
    {
      japanese: "いつまでも",
      chinese: "無論何時"
    },
    {
      japanese: "愛してるよ",
      chinese: "愛著你喔"
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
    "我還記得。",
    "16年前，在福岡的繁華市區，天神雜貨店「Fine」的貨架最裡面，遙發現了滿身灰塵的我。",
    "遙今年14歲，上初中二年級。",
    "遙和3個朋友一起來天神玩，偶然進店的她發現了我。我已經在那家店裡待了5年多了，但沒有被任何人購買。",
    "起初，我放在貨架最顯眼的位置。",
    "然而，沒有人看到我會說出\"這個馬克杯挺不錯的\"這樣的話。",
    "我的身體上畫著插圖，不是《小王子》，而是《在月亮上的小王子》。和《小王子》有些不同。當別人看到和《小王子》不同的《在月亮上的小王子》的我時，都會笑著說\"什麼啊，這是盜版小王子呢\"。因此，沒有人買我，漸漸地我就被移動到了貨架最裡面。",
    "而且我是用陶瓷製作的，有點重。根據掉落的方式不同，很容易摔壞。周圍的馬克杯上有著可愛的插圖，不容易摔壞，所以它們的銷量越來越好，而我一直賣不出去。",
    "某一天，店裡的老太太看到我說\"你真是個沒有人氣的孩子啊\"。那句話真是令人傷心，雖然我自己也知道，但現在有了實感。店裡的貨架只能放置一定數量的商品，如果我還是賣不出去，估計就要被丟掉了吧。說實話，我已經放棄了，因為自己實在是沒有人氣。可是遙在貨架的深處發現了這樣的我。",
    "\"這個好像還挺喜歡的\"。",
    "雖然旁邊的朋友說\"遙的品味真奇怪啊\"，但是遙緊緊地握著我的身體笑著說\"這可是坐在月亮上的王子啊\"。",
    "感覺挺有趣的\"。",
    "我不是可愛，而是很有趣。遙是這樣說的。原來，我是很有趣呀。那個時候我第一次這樣感覺到。",
    "遙真的買下了我。我真的是非常非常高興，高興得只想跳起來。但是跳起來就會摔碎，不過這樣我也已經滿足了。終於，過了這麼久，買下我的人終於出現了。",
    "我不會忘記遙第一次看到我，對我微笑的笑臉。我不會忘記對我說的\"很有趣\"這個詞彙。既然遙買下了我，我就擅自下定決心，想要為遙做些什麼。稍微輕一點是不是就不會摔碎了呢。",
    "遙把我帶回家後，給我倒入了很多東西來喝，遙非常珍惜我，有時還會加入蘋果汁來喝。早上和晚上刷牙的時候也會把水倒進來。",
    "來到遙的家裡已經有一年左右了，她已經不再倒入最喜歡的蘋果汁了。現在遙15歲，已經上初中三年級，每天學習到很晚的時候，她就會加入熱茶來喝。",
    "每當那個時候，我為了不讓茶冷掉，也一直在努力著。",
    "\"冷得受不了了呀\"",
    "那個時候，遙非常努力，每天不停的學習，考上了被認為絕對不可能考上的學校。受到合格通知的那天，遙和家人一起在慶祝，遙喝起了在合格之前絕不喝的蘋果汁。那時候，遙的父母看到我說\"和這位王子一起努力了才考上了呀\"",
    "在那個時候，我非常高興，高興得都快要哭出來了，但是為了不讓久違喝一次的蘋果汁變淡，我忍住了眼淚。我抱著遙的大拇指說\"遙，恭喜你合格\"",
    "即使到了高中，遙也很珍惜我。每天回家就給我倒飲料喝。",
    "有時候也會抱著我睡覺。即使我一點也不軟，但是對於那時候的我來說，遙的背後溫暖的感覺絕對是最棒的。",
    "即使到了大學，遙也把我帶到宿舍。和室友們一起開心地生活著。",
    "即使沒有人把我當作是「可愛」的東西，我也很高興。因為，有人把我當作是「有趣」的東西。",
    "我的人生一直是這樣過去的。"
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
