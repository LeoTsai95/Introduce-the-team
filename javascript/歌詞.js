// Add your JavaScript code here
const lyrics = {
    "title": "夜に駆ける",
    "artist": "YOASOBI",
    "lyrics": [
        {
            "japanese": "沈むように溶けてゆくように",
            "chinese": "像是沉溺般 又像是離去般"
        },
        {
            "japanese": "二人だけの空が広がる夜に",
            "chinese": "在只有你我兩人的廣闊夜空之中"
        },
        {
            "japanese": "「さよなら」だけだった",
            "chinese": "僅僅只是「再見」而已"
        },
        {
            "japanese": "その一言で全てが分かった",
            "chinese": "這一句話卻瞭解了一切"
        },
        {
            "japanese": "日が沈み出した空と君の姿",
            "chinese": "日落又升起的青空和"
        },
        {
            "japanese": "フェンス越しに重なっていた",
            "chinese": "跨越圍欄的你的姿態重疊在了一起"
        },
        {
            "japanese": "初めて会った日から",
            "chinese": "從初遇你的那天起"
        },
        {
            "japanese": "僕の心の全てを奪った",
            "chinese": "我的心靈就全被你奪去了"
        },
        {
            "japanese": "どこか儚い空気を纏う君は",
            "chinese": "不知被何處的虛渺氣氛纏繞的你"
        },
        {
            "japanese": "寂しい目をしてたんだ",
            "chinese": "似乎一直帶著寂寞的眼神"
        },
        {
            "japanese": "いつだってチックタックと",
            "chinese": "無論何時都在滴答滴答的響著"
        },
        {
            "japanese": "鳴る世界で何度だってさ",
            "chinese": "不管在這鳴響的世界多少次"
        },
        {
            "japanese": "触れる心無い言葉うるさい声に",
            "chinese": "去觸碰無情又冷酷的話語"
        },
        {
            "japanese": "涙が零れそうでも",
            "chinese": "即使眼淚似乎快落下來了"
        },
        {
            "japanese": "ありきたりな喜びきっと二人なら見つけられる",
            "chinese": "只是如往常般的歡笑著 只要兩個人的話一定能發現的吧"
        },
        {
            "japanese": "騒がしい日々に笑えない君に",
            "chinese": "在吵鬧的日子中 幾乎不笑的你"
        },
        {
            "japanese": "思い付く限り眩しい明日を",
            "chinese": "在只有回憶的眩目的明日中"
        },
        {
            "japanese": "明けない夜に落ちてゆく前に",
            "chinese": "在沒有黎明的黑夜裡 在落下逝去之前"
        },
        {
            "japanese": "僕の手を掴んでほら",
            "chinese": "用我的手去抓住 你看"
        },
        {
            "japanese": "忘れてしまいたくて閉じ込めた日々も",
            "chinese": "即使你有想忘記的封閉自我的日子"
        },
        {
            "japanese": "抱きしめた温もりで溶かすから",
            "chinese": "我也會用擁抱的溫暖來將其融化"
        },
        {
            "japanese": "怖くないよいつか日が昇るまで",
            "chinese": "一點也不可怕呦 直到太陽升起的那天為止"
        },
        {
            "japanese": "二人でいよう",
            "chinese": "就我和你兩個人就好"
        },
        {
            "japanese": "君にしか見えない",
            "chinese": "現在眼裡只看得見你"
        },
        {
            "japanese": "何かを見つめる君が嫌いだ",
            "chinese": "討厭著總是在尋求什麼的你"
        },
        {
            "japanese": "見惚れているかのような恋するような",
            "chinese": "像是看得入迷般 又如陷入戀愛般"
        },
        {
            "japanese": "そんな顔が嫌いだ",
            "chinese": "討厭著那樣的表情"
        },
        {
            "japanese": "信じていたいけど信じれないこと",
            "chinese": "雖然想去相信著無法相信的事物"
        },
        {
            "japanese": "そんなのどうしたってきっと",
            "chinese": "那樣的事情反正到最後也一定"
        },
        {
            "japanese": "これからだっていくつもあって",
            "chinese": "在這之後也還是會不斷發生"
        },
        {
            "japanese": "そのたんび怒って泣いていくの",
            "chinese": "那樣每次生氣後哭泣的場景吧"
        },
        {
            "japanese": "それでもきっといつかはきっと僕らはきっと",
            "chinese": "即使如此總有一天一定 我們也還是會"
        },
        {
            "japanese": "分かり合えるさ信じてるよ",
            "chinese": "相信著會有心意相連的那一天"
        },
        {
            "japanese": "もう嫌だって疲れたんだって",
            "chinese": "「已經厭惡了 已經疲憊不堪了」"
        },
        {
            "japanese": "がむしゃらに差し伸べた僕の手を振り払う君",
            "chinese": "冒失的我所伸出的手卻被你輕易給甩開了"
        },
        {
            "japanese": "もう嫌だって疲れたよなんて",
            "chinese": "「已經厭惡了 已經疲憊不堪了啊」"
        },
        {
            "japanese": "本当は僕も言いたいんだ",
            "chinese": "這句話也是我想說的啊"
        },
        {
            "japanese": "あ ほらまたチックタックと",
            "chinese": "啊 看吧 又滴答滴答的響著"
        },
        {
            "japanese": "鳴る世界で何度だってさ",
            "chinese": "不管在這鳴響的世界多少次"
        },
        {
            "japanese": "君の為に用意した言葉どれも届かない",
            "chinese": "為了你所準備的話語還是無法傳遞給你"
        },
        {
            "japanese": "「終わりにしたい」だなんてさ",
            "chinese": "說著「想要迎來結束」"
        },
        {
            "japanese": "釣られて言葉にした時",
            "chinese": "被誘惑的言語吸引那時"
        },
        {
            "japanese": "君は初めて笑った",
            "chinese": "你第一次嶄露了笑容"
        },
        {
            "japanese": "騒がしい日々に笑えなくなっていた",
            "chinese": "在吵鬧的日子中 變得無法露出笑容"
        },
        {
            "japanese": "僕の目に映る君は綺麗だ",
            "chinese": "我的眼裡映照的你是如此美麗"
        },
        {
            "japanese": "明けない夜に溢れた涙も",
            "chinese": "在沒有黎明的黑夜裡 滿溢出來的眼淚也"
        },
        {
            "japanese": "君の笑顔に溶けていく",
            "chinese": "和你的笑容一起逝去了"
        },
        {
            "japanese": "変わらない日々に泣いていた僕を",
            "chinese": "在沒有變化的日子中 即使是正在哭泣的我"
        },
        {
            "japanese": "君は優しく終わりへと誘う",
            "chinese": "你也仍然溫柔地邀情我迎接終結"
        },
        {
            "japanese": "沈むように溶けてゆくように",
            "chinese": "像是沉溺般 又像是離去般"
        },
        {
            "japanese": "染み付いた霧が晴れる",
            "chinese": "使被染上的薄霧也能放晴"
        },
        {
            "japanese": "忘れてしまいたくて閉じ込めた日々に",
            "chinese": "即使身在想去遺忘的封閉的日子中"
        },
        {
            "japanese": "差し伸べてくれた君の手を取る",
            "chinese": "也想緊握住你所伸出的手"
        },
        {
            "japanese": "涼しい風が空を泳ぐように今吹き抜けていく",
            "chinese": "如清爽的風在天空中漂浮般 現在正穿透而去"
        },
        {
            "japanese": "繋いだ手を離さないでよ",
            "chinese": "不要放開緊牽著的手呦"
        },
        {
            "japanese": "二人今、夜に駆け出していく",
            "chinese": "我們現在、正向夜晚奔馳而去"
        },

    ]
};

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


// 
// 
// 
// 
// 
const data = {
    paragraphs: [
        "夏日夜晚，你與我的焦躁",
        "8月15日。日暮早已步入黃昏，但周圍仍瀰漫著熾熱的暑氣。",
        "奔上公寓樓梯的我汗流浹背，汗水無法控制的滴落。",
        "「永別了。」",
        "來自她傳來的Line，僅是這三個文字。",
        "那究竟代表何意，我立刻便明白了。",
        "即使是盂蘭盆節，也必須到公司上班的我，做好回家的準備後便匆匆的往公寓趕去。",
        "佇足在屋頂圍欄外側的是，眼神虛無飄渺的她。",
        "已經是第四回，這樣看著打算一躍而下的她。",
        "傳說這世上有兩種人。",
        "抱持生的慾望——被「愛神」支配的人類。",
        "抱持死的慾望——被「死神」支配的人類。",
        "這世上多數人皆屬於前者，可她卻屬於少數的後者。",
        "我在和她交往前便已知曉，她是被「死神」支配的人。",
        "話又說回來，我們相遇的契機是我救下了，正打算從屋頂一躍而下的她。",
        "她最近剛搬到公寓不久，清澈眼眸加上豐腴的唇，有著可愛的五官，眉眼卻流露些許落寞的神情，這樣看似虛幻的她，瞬間便奪去我心。",
        "我想，這肯定是一見鍾情吧。",
        "從那時開始，我與她談天說地，一下子就變得十分要好。",
        "對於在無良企業工作，又承受孤獨寂寞的我而言，她是宛如天使下凡般的存在。",
        "但有一點令我十分迷惑。",
        "當她打算自殺時必定會聯絡我，並在原地等我趕來。",
        "我想無人知曉才能提高自殺的成功率吧，或許在她內心某處，",
        "是希望我像初遇時那樣阻止她，希望我能拯救她，",
        "我一廂情願的如此認為。",
        "因此，這次我依然奔上了公寓的階梯。",
        "「啊......哈......」",
        "我爬上了公寓頂樓。",
        "看見了圍欄後那熟悉的背影。",
        "「等一下......！！」",
        "我不帶一絲猶豫，迅速跨越圍欄，抓住了她的手。",
        "與悶熱的空氣不同，她的手十分冰冷。",
        "「放開我。」",
        "她的聲音宛若風鈴般澄澈，我喜歡她那惹人憐愛的聲音。",
        "「為什麼，妳總是這樣.......！」",
        "「我想快點去死。」",
        "「為什麼......！」",
        "「因為死神在呼喚我了。」",
        "她能夠看見死神，據說被「塔納托斯」支配的人類中，也鮮有如此的症狀。",
        "死神則是唯有被「塔納托斯」支配的人才可看見。",
        "「根本沒有什麼死神。」",
        "「為什麼你總是不能理解我......！」",
        "每當我否定死神的存在，她總是會無助的哭喊。",
        "死神似乎會成為對視者而言最有魅力的存在。也就是所謂理想之人的型態。",
        "雖然我看不見任何東西，但她注視死神時，那眼神彷彿像被深深吸引而墜入愛河的少女般。",
        "我討厭她那樣的神情。",
        "「別看著那什麼死神，好好看著我啊。」",
        "「我不要......！」",
        "她越是試圖掙脫我的手，我便下意識越抓越緊。",
        "「好痛......！」",
        "「！抱歉......」",
        "但，這分明是妳的不對。",
        "一直試圖甩開我的手。",
        "不願好好地看著我。",
        "「死神先生絕不會這樣對我......！」",
        "我的心，剎那間全被黑暗吞噬了。",
        "「為什麼......」",
        "為什麼，我明明是如此深愛於妳，為何妳始終無法只注視我一人？",
        "居然忌妒什麼死神，我都覺得自己已經行跡瘋魔，但都無所謂了。",
        "「我已經受夠了。」",
        "我也受夠了。",
        "「我已經累了。」",
        "我也累了。",
        "「我只想趕快去死。」",
        "「我也想去死啊！！」",
        "此時的她抬起頭來。",
        "喜逐顏開的露出笑容。",
        "她的笑容，使我內心的黑霧瞬間消散了。",
        "「你終於明白了？」",
        "「啊啊......我終於明白了。」",
        "「真的.......？那真是太好了。」",
        "妳自殺時總會告訴我的原因，其實並非希望我拯救妳。",
        "妳，是想帶我一起走吧。",
        "於我而言，我的死神，",
        "正是「她」。",
        "微風徐徐吹來，不知不覺間暑氣已然消散。",
        "「那，我們走吧。」",
        "「啊啊，走吧。」",
        "牽起彼此的妳與我。",
        "為了逃離這招致焦躁的世界。",
        "我們奔向了萬籟俱寂的夜空。",
        "註記：タナトス指桑納托斯（θάνατος / Thanatos，“死亡”）是希臘神話中的死神。",
        "此處譯為塔納托斯。"
    ]
};
function renderParagraphs(paragraphs) {
    return paragraphs.map((paragraph) => `<p class="paragraph">${paragraph}</p>`).join("");
}

const paragraphsContainer = document.getElementById("myModal2Content");
paragraphsContainer.innerHTML = renderParagraphs(data.paragraphs);

const paragraphElements = document.querySelectorAll("#myModal2Content p");
let currentParagraphIndex = 0;
let playInterval;
let isPaused = false; // 追蹤播放是否暫停

function showNextParagraph() {
    if (isPaused) return; // 若暫停狀態，不執行下一步

    paragraphElements.forEach((element, index) => {
        if (index === currentParagraphIndex) {
            element.classList.add("hovered");
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            element.classList.remove("hovered");
        }
    });

    currentParagraphIndex++;
    if (currentParagraphIndex >= paragraphElements.length) {
        clearInterval(playInterval);
    }
}

function startPlay() {
    if (playInterval) return; // 檢查是否已在播放中
    if (isPaused) {
        isPaused = false;
        showNextParagraph(); // 從暫停的地方開始播放
    } else {
        currentParagraphIndex = 0;
        showNextParagraph(); // 顯示第一個段落
    }
    playInterval = setInterval(showNextParagraph, 2000); // 設定每個段落顯示的間隔時間，這裡設定為 2 秒
}

function pausePlay() {
    isPaused = true; // 設定為暫停狀態
}

function stopPlay() {
    clearInterval(playInterval);
    playInterval = null; // 清除播放間隔
    isPaused = false; // 確保暫停狀態被重置
    paragraphElements.forEach((element) => {
        element.classList.remove("hovered");
    });
}

const playButton = document.getElementById("playButton");
const stopButton = document.getElementById("stopButton");

playButton.addEventListener("click", startPlay);
stopButton.addEventListener("click", stopPlay);
playButton.addEventListener("mouseenter", pausePlay); // 滑鼠進入播放按鈕時暫停播放
playButton.addEventListener("mouseleave", startPlay); // 滑鼠離開播放按鈕時繼續播放

function toggleHoverClass() {
    if (!playInterval) {
        this.classList.toggle("hovered");
    }
}

paragraphElements.forEach((element) => {
    element.addEventListener("mouseenter", toggleHoverClass);
    element.addEventListener("mouseleave", toggleHoverClass);
});


function resetTimer() {
    clearInterval(playInterval);
    playInterval = null;
    isPaused = false;
    currentParagraphIndex = 0;
    paragraphElements.forEach((element) => {
        element.classList.remove("hovered");
    });
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetTimer);

  
// 
// 
// 
// 
// 
// 



// 
// 
// 
// 
// 
// 
const lyrics2 = {
    "title": "夜の空を飾る綺麗な花",
    "artist": "Unknown",
    "lyrics": [
        {
            "japanese": "夜の空を飾る綺麗な花",
            "chinese": "裝飾夜晚天空的漂亮花朵"
        },
        {
            "japanese": "街の声をぎゅっと光が包み込む",
            "chinese": "光芒緊緊地包住街道的聲音"
        },
        {
            "japanese": "音の無い二人だけの世界で聞こえた言葉は",
            "chinese": "在沒有聲音的只有兩個人的世界中聽到的話語是"
        },
        {
            "japanese": "「好きだよ」"
        },
        {
            "japanese": "夢の中で見えた未来のこと",
            "chinese": "在夢裡看見的未來"
        },
        {
            "japanese": "夏の夜、君と、並ぶ影が二つ",
            "chinese": "夏夜、與你一起、並列的影子成雙"
        },
        {
            "japanese": "最後の花火が空に昇って消えたら",
            "chinese": "最後的煙火飛向天空消失之後"
        },
        {
            "japanese": "それを合図に"
        },
        {
            "japanese": "いつも通りの朝に",
            "chinese": "跟平常一樣的早晨"
        },
        {
            "japanese": "いつも通りの君の姿",
            "chinese": "跟平常一樣的你的身影"
        },
        {
            "japanese": "思わず目を逸らしてしまったのは",
            "chinese": "不加思想地移開了視線"
        },
        {
            "japanese": "どうやったって忘れられない君の言葉",
            "chinese": "無論怎麼做都無法忘記你的話語"
        },
        {
            "japanese": "今もずっと響いてるから",
            "chinese": "至今也一直響徹著"
        },
        {
            "japanese": "夜を抜けて夢の先へ",
            "chinese": "前往穿過夜晚的夢境盡頭"
        },
        {
            "japanese": "辿り着きたい未来へ",
            "chinese": "前往想要抵達的未來"
        },
        {
            "japanese": "本当に？あの夢に、本当に？って今も",
            "chinese": "「真的嗎？那個夢、是真的嗎？」雖然現在也"
        },
        {
            "japanese": "不安になってしまうけどきっと",
            "chinese": "變得不安　但一定會"
        },
        {
            "japanese": "今を抜けて明日の先へ",
            "chinese": "前往穿過今天的明天盡頭"
        },
        {
            "japanese": "二人だけの場所へ",
            "chinese": "前往只屬於兩個人的地方"
        },
        {
            "japanese": "もうちょっと",
            "chinese": "再稍微一點"
        },
        {
            "japanese": "どうか変わらないで",
            "chinese": "還請不要改變"
        },
        {
            "japanese": "もうちょっと",
            "chinese": "再稍微一點"
        },
        {
            "japanese": "君からの言葉",
            "chinese": "從你那裡得到的話語"
        },
        {
            "japanese": "あの未来で待っているよ",
            "chinese": "在那個未來裡等著你啊"
        },
        {
            "japanese": "誰も知らない",
            "chinese": "誰都不知道"
        },
        {
            "japanese": "二人だけの夜",
            "chinese": "只屬於兩個人的夜晚"
        },
        {
            "japanese": "待ち焦がれていた景色と重なる",
            "chinese": "與渴望的風景重疊"
        },
        {
            "japanese": "夏の空に未来と今繋がる様に開く花火",
            "chinese": "在夏天的天空裡與現在連繫的綻開的煙火"
        },
        {
            "japanese": "君とここでほらあの夢をなぞる",
            "chinese": "與你一起在這裡描摹著夢想"
        },
        {
            "japanese": "見上げた空を飾る光が今照らした横顔",
            "chinese": "裝飾著仰望天空的光芒此刻照亮的側臉"
        },
        {
            "japanese": "そうずっとこの景色のために",
            "chinese": "沒錯一直都是為了這道風景"
        },
        {
            "japanese": "そうきっとほら二つの未来が",
            "chinese": "沒錯看吧兩個人未來一定"
        },
        {
            "japanese": "今重なり合う",
            "chinese": "會在此刻重疊"
        },
        {
            "japanese": "夜の中で君と二人",
            "chinese": "在夜晚裡與你兩個人"
        },
        {
            "japanese": "辿り着いた未来で",
            "chinese": "在抵達的未來中"
        },
        {
            "japanese": "大丈夫想いはきっと大丈夫伝わる",
            "chinese": "沒問題的想法一定會傳達「沒問題」"
        },
        {
            "japanese": "あの日見た夢の先へ",
            "chinese": "前往那一天夢見的夢境盡頭"
        },
        {
            "japanese": "今を抜けて明日の先で",
            "chinese": "在穿過今天的明天盡頭"
        },
        {
            "japanese": "また出会えた君へ",
            "chinese": "獻給再次相遇的你"
        },
        {
            "japanese": "もうちょっと",
            "chinese": "再稍微一點"
        },
        {
            "japanese": "どうか終わらないで",
            "chinese": "還請不要結束"
        },
        {
            "japanese": "もうちょっと",
            "chinese": "再稍微一點"
        },
        {
            "japanese": "ほら最後の花火が今",
            "chinese": "看吧最後的煙火於現在"
        },
        {
            "japanese": "二人を包む",
            "chinese": "包裹著兩個人"
        },
        {
            "japanese": "音の無い世界に響いた",
            "chinese": "在沒有聲音的世界鐘響徹的"
        },
        {
            "japanese": "「好きだよ」"
        }
    ]
};

const hoshinohanaElement = document.getElementById("hoshinohana");

lyrics2.lyrics.forEach((line) => {
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

    hoshinohanaElement.appendChild(p);
});

// 添加 hover 效果
const lyricsParagraphs = document.querySelectorAll("#hoshinohana p");
lyricsParagraphs.forEach((p) => {
    p.addEventListener("mouseover", () => {
        p.classList.add("hover-effect");
    });

    p.addEventListener("mouseout", () => {
        p.classList.remove("hover-effect");
    });
});


// 
// 
// 
// 
// 
// 
// 
// 
// 
(function () {
    const novelData = {
        paragraphs: [
            "7月27日，音見川的煙火大會。在能俯瞰街道的風撫之丘。一發大型煙火如光的帷幕般在眼前綻放。我往旁邊看去時，你在那裡，開口說。",
            "「我喜歡妳」",
            "你的聲音模糊不清，彷彿在水中一般。",
            "煙火在無聲的世界中綻放著，除了你的聲音外什麼也聽不到。",
            "我被你告白了。這就是意識到這件事當下的感受。",
            "我在床上醒了過來。我眨著眼睛，確認著現在處在現實當中。漸漸地，白色的天花板變得清晰可見，我更確定了剛才經歷的是預知夢。",
            "我從小時候開始就有著能做預知夢的能力。雙見家的女性似乎都能以許多不同的形式預知未來。而我則是能透過作夢的方式預知未來。",
            "雖然說是預知未來，但並不能預知什麼世界危機之類重大的事件。大概都是些明天晚餐吃什麼這種程度的事情。但這次是被男生告白的預知夢。",
            "對16歲的我來說，這可是比世界危機還嚴重的大事啊。",
            "他是一宮亮，我的青梅竹馬。雖然我喜歡他，但總是把這份感情隱藏起來，在大家面前也不怎麼搭理他。這樣的他會喜歡我，現在在夢裡才第一次知道。",
            "不對，還沒喜歡上我也是有可能的。",
            "我橫躺看著掛在牆壁上的月曆。今天是7月13日。音見川的煙火大會則是在7月27日。",
            "再次仰躺後我閉上眼。",
            "「兩星期之後啊」我喃喃自語。",
            "在這兩周的時間裡，他可能會喜歡上我。想到這個，臉就發熱了起來。"
        ]
    };

    function renderNovelParagraphs(paragraphs) {
        return paragraphs.map((paragraph) => `<p class="novel-paragraph">${paragraph}</p>`).join('');
    }

    const novelContainer = document.getElementById("hoshinohananovel");
    novelContainer.innerHTML = renderNovelParagraphs(novelData.paragraphs);

    class NovelPlayer {
        constructor() {
            this.paragraphElements = Array.from(document.querySelectorAll("#hoshinohananovel p"));
            this.currentParagraphIndex = 0;
            this.playInterval = null;
            this.isPaused = false;

            this.paragraphElements.forEach((element) => {
                element.addEventListener("mouseover", () => {
                    element.classList.add("novel-hovered");
                });

                element.addEventListener("mouseout", () => {
                    element.classList.remove("novel-hovered");
                });
            });
        }

        showNextParagraph = () => {
            if (this.isPaused) return;

            const { paragraphElements, currentParagraphIndex } = this;
            const currentElement = paragraphElements[currentParagraphIndex];

            paragraphElements.forEach((element) => {
                element.classList.remove("novel-hovered");
            });

            currentElement.classList.add("novel-hovered");
            currentElement.scrollIntoView({ behavior: "smooth", block: "center" });

            this.currentParagraphIndex++;
            if (this.currentParagraphIndex >= paragraphElements.length) {
                clearInterval(this.playInterval);
            }
        };

        startPlay = () => {
            if (this.playInterval) return;

            this.isPaused = false;
            this.showNextParagraph();

            this.playInterval = setInterval(this.showNextParagraph, 2000);
        };

        pausePlay = () => {
            this.isPaused = true;

            this.paragraphElements.forEach((element) => {
                element.removeEventListener("mouseover", this.handleMouseOver);
            });
        };

        resetTimer = () => {
            clearInterval(this.playInterval);
            this.playInterval = null;
            this.isPaused = false;
            this.currentParagraphIndex = 0;

            this.paragraphElements.forEach((element) => {
                element.classList.remove("novel-hovered");
            });
        };

        handleMouseOver = () => {
            if (!this.isPaused) {
                this.pausePlay();
            }
        };
    }

    const novelPlayer = new NovelPlayer();

    const playButtons = document.getElementsByClassName("playButtons");
    const pauseButtons = document.getElementsByClassName("pauseButtons");
    const resetButtons = document.getElementsByClassName("resetButtons");

    Array.from(playButtons).forEach((button) => {
        button.addEventListener("click", novelPlayer.startPlay);
    });

    Array.from(pauseButtons).forEach((button) => {
        button.addEventListener("click", novelPlayer.pausePlay);
    });

    Array.from(resetButtons).forEach((button) => {
        button.addEventListener("click", novelPlayer.resetTimer);
    });

    novelPlayer.paragraphElements.forEach((element) => {
        element.addEventListener("mouseover", novelPlayer.handleMouseOver);
    });






})();

const lyrics3 = {
    "lyrics": [
        {
            "japanese": "過ぎてゆく時間の中",
            "chinese": "在流淌的時光之中"
        },
        {
            "japanese": "あなたを思い出す",
            "chinese": "不經意想起你來"
        },
        {
            "japanese": "物憂げに眺める画面に映った二人",
            "chinese": "我無勁的眺望著畫面中映出的兩人"
        },
        {
            "japanese": "笑っていた",
            "chinese": "正莞爾笑著"
        },
        {
            "japanese": "知りたくないほど",
            "chinese": "越是不想了解"
        },
        {
            "japanese": "知りすぎてくこと",
            "chinese": "卻總過度了解"
        },
        {
            "japanese": "ただ過ぎる日々に呑み込まれたの",
            "chinese": "日復一日的日常將其吞沒"
        },
        {
            "japanese": "それでもただもう一度だけ会いたくて",
            "chinese": "即使如此還是想與你再次相見"
        },
        {
            "japanese": "あなたの言葉に頷き信じた私を",
            "chinese": "我頷首深信著你的話語"
        },
        {
            "japanese": "一人置き去りに時間は過ぎる",
            "chinese": "度過被你獨自遺留的時光"
        },
        {
            "japanese": "見えていたはずの未来も",
            "chinese": "明明都已映入眼簾的未來"
        },
        {
            "japanese": "未来も指の隙間をすり抜けた",
            "chinese": "也從指尖揚長而去"
        },
        {
            "japanese": "戻れない日々の欠片と",
            "chinese": "那無法回到的過去碎片"
        },
        {
            "japanese": "あなたの気配を",
            "chinese": "和你的氣息"
        },
        {
            "japanese": "今でも探してしまうよ",
            "chinese": "我至今也在尋找著"
        },
        {
            "japanese": "まだあの日の二人に手を伸ばしてる",
            "chinese": "我向那時的兩人伸出了手"
        },
        {
            "japanese": "境界線は自分で引いた",
            "chinese": "由自己引動的境界線"
        },
        {
            "japanese": "「現実は」って見ないフリをしていた",
            "chinese": "卻用「現實是」搪塞漠視而去"
        },
        {
            "japanese": "そんな私じゃ",
            "chinese": "這樣的我"
        },
        {
            "japanese": "見えない見えない",
            "chinese": "是看不見的 看不見的"
        },
        {
            "japanese": "境界線の向こうに咲いた",
            "chinese": "在境界線彼方綻放的"
        },
        {
            "japanese": "鮮烈な花達も",
            "chinese": "絢爛花朵們也是"
        },
        {
            "japanese": "本当は見えてたのに",
            "chinese": "明明都已映入眼簾"
        },
        {
            "japanese": "知らず知らずの内に",
            "chinese": "在不知不覺中"
        },
        {
            "japanese": "擦り減らした心の扉に鍵をかけたの",
            "chinese": "我將消磨殆盡的心門上了鎖"
        },
        {
            "japanese": "そこにはただ美しさの無い",
            "chinese": "那裡沒有任何美麗事物"
        },
        {
            "japanese": "私だけが残されていた",
            "chinese": "唯獨我遺留在那兒"
        },
        {
            "japanese": "青過ぎる空に目の奥が染みた",
            "chinese": "過於湛藍的青空浸染至我眼中"
        },
        {
            "japanese": "あの日の景色に取りに帰るの",
            "chinese": "我將去取回那日的景色"
        },
        {
            "japanese": "あなたが好きだと言ってくれた私を",
            "chinese": "不讓任何人發現"
        },
        {
            "japanese": "誰にも見せずに",
            "chinese": "當時對你說出「喜歡你」的我"
        },
        {
            "japanese": "この手で隠した想いが",
            "chinese": "隱蔽在手中的這份心意"
        },
        {
            "japanese": "今も私の中で生きている",
            "chinese": "如今也正在我的內心之中"
        },
        {
            "japanese": "目を閉じてみれば",
            "chinese": "閉上眼便可預見"
        },
        {
            "japanese": "今も鮮やかに蘇る景色と",
            "chinese": "仍舊復甦的鮮豔景色"
        },
        {
            "japanese": "戻れない日々の続きを歩いていくんだ",
            "chinese": "無法回去的日子其後續也一同帶走"
        },
        {
            "japanese": "これからも、あなたがいなくても",
            "chinese": "即使今後你不在我的身旁"
        },
        {
            "japanese": "あの日の二人に手を振れば",
            "chinese": "只要那日的兩人揮動雙手"
        },
        {
            "japanese": "確かに動き出した",
            "chinese": "就能確實的轉動"
        },
        {
            "japanese": "未来へ",
            "chinese": "邁向未來"
        }

    ]
}
const harugiElement = document.getElementById("harugi");

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

    harugiElement.appendChild(p);
});

const lyricsParagraphs1 = document.querySelectorAll("#harugi p");
lyricsParagraphs1.forEach((p) => {
    p.addEventListener("mouseover", () => {
        p.classList.add("hover-effect");
    });

    p.addEventListener("mouseout", () => {
        p.classList.remove("hover-effect");
    });
});

// 
// 
// 

const novelData1 = {
    paragraphs: [
        "<h2>即使如此，仍是快樂結局</h2> ",
        "三、二、一……。",
        "數到零的時候，由你打來的電話就會響起。",
        "這樣期待著，倒數著。已經不知道重複了幾百次了吧。小孩子般的咒語。",
        "在換氣扇之下，沉醉在感傷的氛圍中，試著點燃與你經常抽的相同牌子的煙草。",
        "果然，無法習慣，誇張的咳了起來。",
        "肺刺痛著。",
        "厭惡著這樣的自己。",
        "我的唾液把濾嘴給浸濕了。",
        "線一般的白煙被換氣扇給吞噬而逐漸消逝。",
        "簡直就像，與你的關係一樣。",
        "",
        "*",
        "",
        "日正當中。",
        "高透明度，天空的蔚藍刺痛著我的眼底。",
        "即使如此也不認輸，我抬起了下巴。飛機雲的線條開始緩緩散去。",
        "並排的櫻花樹，回應著祝福的聲音。盛開著。",
        "在翩翩舞落的花瓣中，大家拍著照、擊掌著、鼓譟著。",
        "早起到美容院給人綁好的黑髮。雖然真的很想買，因為沒錢無可奈何只好用租的和服。拿著不知道是誰寫下「人生的暑假完結！」的橫幅喊叫著。",
        "我們那時是如此亮麗。",
        "的確，未來就在這隻手裡。",
        "因為，你害羞的笑著，這樣說的緣故。",
        "「即使畢業了，我們也什麼都不會改變喔」",
        "我深信著這句話。",
        "你頭皮的味道。稍微變長的指甲。舌頭的觸感。被朝霞所染色的床單上，留下兩人身形的皺褶。我的確，認同過你所說的話，本是如此。",
        "",
        "*",
        "",
        "但是，日子無論如何都在過著。",
        "殘酷的，以我和你不再顧慮對方的樣子，前進著。",
        "過去不會改變。",
        "不確定的是，現在。",
        "",
        "*",
        "",
        "從在學的美術大學畢業後，你到了有名的廣告代理店，而我進到了它的承包商的承包商，以插圖為主的製作公司。",
        "過了四月後*1 先面臨到的現實是，純粹的早起。純粹的滿員電車。純粹的來自上司的注意事項。純粹的加班。這些「純粹的」事，破壞了與你的時間。畫著沒有意願畫的圖，應對著臨時更改的訂單，即使如此結果卻還是不採用，啊—，想著我現在或許陷入憂鬱之中了吧，而變得無法從家裡出門。",
        "總是在這由便利商店的袋子、裝有喝剩飲料的寶特瓶、湯汁已經乾掉的杯麵所構成的房間中，盯著手機。映照在畫面中的我。",
        "在，笑著看向這邊。",
        "像白癡一樣。",
        "比著「耶」，做著奇怪的表情，抱著你。像白癡一樣。",
        "再也做不出來那樣的表情。",
        "沒辦法用那樣的表情笑著。",
        "",
        "*",
        "",
        "下著小雨的那一天，你在那裡。",
        "「到底為什麼，會變成這樣呢」",
        "「如果知道的話就不會讓這種事情發生了」",
        "這樣說著的我，裝作若無其事地笑著。如果不這樣的話，似乎會哭出來。我繼續笑著。你用困擾的表情，看著邊留鼻水邊像是出bug一樣笑著的我。雖然想說些什麼，卻說不出口。不能說。那樣的表情，你讓我說不出話。",
        "",
        "你的能力是狡猾的優秀。在那種見面的頻率下，稍微的對話間，就能把對我的心意，那樣程度的表現出來。",
        "連最後的話語都是如此，對我來說。",
        "",
        "是的，我們是「純粹的」前 • 戀人。",
        "",
        "我知道。",
        "我明白。",
        "但是，還想再見到一次面。",
        "明明是這樣的在一起生活過，在房間的各處尋找著卻沒有你的氣息。嘴唇上的小瘡被擦在了床單上。連總是依偎在一起的床上，也找不到你的氣味。我沒有流淚，不知該如何是好的，唯獨，把鼻子埋進枕頭裡。分別的日子，只把自己的行李乾淨俐落的帶走，我討厭爽快的你。",
        "你逃走了。",
        "從我身邊。",
        "從這樣糟糕的我的身邊。",
        "",
        "*",
        "",
        "從曠職的公司打來的電話也不再響起。",
        "日落時起床，日出時入睡的生活。這已經成為了日常。金錢支柱則是，姑且已經匯進來的上個月分的低工資。按著因為睡太多和運動不足而痠痛的腰，終於動起了身體。今天的房間依舊昏暗。邊喝著已經沒有氣的可樂潤喉，邊撥著長太長的劉海。墮落。相比起來，學生時代好得多了。",
        "成為了The • 廢人。如果舉辦地球上最沒意義的生物排名的話，我一定能佔到很前面的排名吧。怎麼說，邊做著無意義的妄想，邊帶著半分期待的試著倒數。",
        "三、二、一……。",
        "正要數到零的時候，電話響起。是你—這樣想著，然而卻是大學同學 • 友里(ユリちゃん) 打來的。才不是找妳勒。雖然很想把電話往牆壁丟，但還是姑且接了起來。友里主修日本畫，而我則是油畫。雖然專攻不一樣，但因為社團相同，學生的時候偶爾會出去喝一杯。",
        "友里在大學畢業後沒有就職，而是在卡拉OK店做著接待顧客的打工，同時也繼續作畫。我在內心輕視著這樣的友里。在這未能知曉未來的時代，相信才能，追逐夢想什麼的。終究也僅僅是不會盛開的花朵罷了。",
        "『妳啊，聽說辭掉工作了？』",
        "變成話語後接收起來還真是不小的打擊。到底，是從哪裡接收到這個情報的？明明連跟父母都還沒提起。但是，我只是不服輸的「怎麼，潑冷水的電話？個性真糟糕」這樣回話。",
        "『抱歉抱歉，不是這樣的，是因為這一次要開個展，所以問問看妳要不要來』",
        "「ㄍㄜˋ ㄓㄢˇ指的是，那個個展？」",
        "不然還有什麼其他的啦，她這樣邊說邊笑著，並告訴了我場所和時間。",
        "『反正都一直宅著對吧。偶爾也外出一下吧？』",
        "吵死了，我丟下這句話，便把電話掛了。",
        "又變回了一個人。",
        "",
        "(待續)"
    ]
};

// 建立小說段落的HTML內容
function renderNovelParagraphs(paragraphs) {
    let html = '';
    for (let i = 0; i < paragraphs.length; i++) {
        html += '<p class="novel-paragraph">' + paragraphs[i] + '</p>';
    }
    return html;
}

// 將小說段落渲染到指定的容器中
function renderNovelContainer(containerId, paragraphs) {
    const novelContainer = document.getElementById(containerId);
    novelContainer.innerHTML = renderNovelParagraphs(paragraphs);
}

// 將小說資料渲染到指定的容器中
renderNovelContainer("hoshinohananovel1", novelData1.paragraphs);

// 添加 hover 效果
const novelParagraphElements3 = document.querySelectorAll("#hoshinohananovel1 .novel-paragraph");
novelParagraphElements3.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.add("novel-hovered");
    });
    element.addEventListener("mouseout", () => {
        element.classList.remove("novel-hovered");
    });
});


//   
//   
//   
//   第二頁開始
//   
//   


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


document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("slide-in-element");
    }
});


//   
//   
//   
//   
function addAnimation() {
    var elements = document.getElementsByClassName("slide-in-element");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            element.classList.add("fade-in");
        }
    }
}

window.addEventListener("scroll", addAnimation);

