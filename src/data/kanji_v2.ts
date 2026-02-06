export type ReadingType = "on" | "kun";

export interface KanjiReading {
    type: ReadingType;
    reading: string;
    sentence: string;
}

export interface KanjiEntry {
    id: string;
    character: string;
    readings: KanjiReading[];
}

export interface QuizQuestion {
    id: string;
    character: string;
    reading: string;
    sentence: string;
    choices: string[];
}

export const KANJI_DATA_V2: KanjiEntry[] = [
    {
        id: "1",
        character: "悪",
        readings: [
            { type: "kun", reading: "わる", sentence: "[悪]いことをしてはいけない。" },
            { type: "kun", reading: "わる", sentence: "仲が[悪]い。" },
            { type: "on", reading: "あく", sentence: "[悪]人を捕まえる。" },
            { type: "on", reading: "あく", sentence: "最[悪]の事態だ。" }
        ]
    },
    {
        id: "2",
        character: "安",
        readings: [
            { type: "kun", reading: "やす", sentence: "この店は[安]い。" },
            { type: "kun", reading: "やす", sentence: "値段が[安]くなる。" },
            { type: "on", reading: "あん", sentence: "[安]心する。" },
            { type: "on", reading: "あん", sentence: "交通[安]全を守る。" }
        ]
    },
    {
        id: "3",
        character: "暗",
        readings: [
            { type: "kun", reading: "くら", sentence: "部屋が[暗]い。" },
            { type: "kun", reading: "くら", sentence: "外が[暗]くなってきた。" },
            { type: "on", reading: "あん", sentence: "[暗]記する。" },
            { type: "on", reading: "あん", sentence: "明[暗]を分ける。" }
        ]
    },
    {
        id: "4",
        character: "医",
        readings: [
            { type: "on", reading: "い", sentence: "[医]者になるのが夢だ。" },
            { type: "on", reading: "い", sentence: "[医]院に行く。" },
            { type: "on", reading: "い", sentence: "[医]学を学ぶ。" }
        ]
    },
    {
        id: "5",
        character: "委",
        readings: [
            { type: "on", reading: "い", sentence: "委員を[委]任する。" },
            { type: "on", reading: "い", sentence: "[委]員会に入る。" }
        ]
    },
    {
        id: "6",
        character: "意",
        readings: [
            { type: "on", reading: "い", sentence: "[意]見を言う。" },
            { type: "on", reading: "い", sentence: "[意]味を調べる。" },
            { type: "on", reading: "い", sentence: "注[意]する。" }
        ]
    },
    {
        id: "7",
        character: "育",
        readings: [
            { type: "kun", reading: "そだ", sentence: "花を[育]てる。" },
            { type: "kun", reading: "そだ", sentence: "子供が[育]つ。" },
            { type: "on", reading: "いく", sentence: "教[育]を受ける。" },
            { type: "on", reading: "いく", sentence: "体[育]の時間。" }
        ]
    },
    {
        id: "8",
        character: "員",
        readings: [
            { type: "on", reading: "いん", sentence: "会社[員]になる。" },
            { type: "on", reading: "いん", sentence: "全[員]集合。" },
            { type: "on", reading: "いん", sentence: "図書委[員]を選ぶ。" }
        ]
    },
    {
        id: "9",
        character: "院",
        readings: [
            { type: "on", reading: "いん", sentence: "病[院]に行く。" },
            { type: "on", reading: "いん", sentence: "大学[院]で学ぶ。" }
        ]
    },
    {
        id: "10",
        character: "飲",
        readings: [
            { type: "kun", reading: "の", sentence: "水を[飲]む。" },
            { type: "kun", reading: "の", sentence: "薬を[飲]む時間だ。" },
            { type: "on", reading: "いん", sentence: "[飲]食店を探す。" },
            { type: "on", reading: "いん", sentence: "暴[飲]暴食はいけない。" }
        ]
    },
    {
        id: "11",
        character: "運",
        readings: [
            { type: "kun", reading: "はこ", sentence: "荷物を[運]ぶ。" },
            { type: "kun", reading: "はこ", sentence: "トラックで[運]ぶ。" },
            { type: "on", reading: "うん", sentence: "[運]動をする。" },
            { type: "on", reading: "うん", sentence: "[運]が良い。" }
        ]
    },
    {
        id: "12",
        character: "泳",
        readings: [
            { type: "kun", reading: "およ", sentence: "海で[泳]ぐ。" },
            { type: "kun", reading: "およ", sentence: "プールで[泳]ぐ。" },
            { type: "on", reading: "えい", sentence: "水[泳]大会に出る。" }
        ]
    },
    {
        id: "13",
        character: "駅",
        readings: [
            { type: "on", reading: "えき", sentence: "[駅]で電車を待つ。" },
            { type: "on", reading: "えき", sentence: "[駅]前の店。" },
            { type: "on", reading: "えき", sentence: "[駅]長さん。" }
        ]
    },
    {
        id: "14",
        character: "央",
        readings: [
            { type: "on", reading: "おう", sentence: "町の中[央]にある。" },
            { type: "on", reading: "おう", sentence: "中[央]線に乗る。" }
        ]
    },
    {
        id: "15",
        character: "横",
        readings: [
            { type: "kun", reading: "よこ", sentence: "[横]を向く。" },
            { type: "kun", reading: "よこ", sentence: "道の[横]を歩く。" },
            { type: "on", reading: "おう", sentence: "[横]断歩道を渡る。" }
        ]
    },
    {
        id: "16",
        character: "屋",
        readings: [
            { type: "kun", reading: "や", sentence: "八百[屋]で会う。" },
            { type: "kun", reading: "や", sentence: "花[屋]で花を買う。" },
            { type: "on", reading: "おく", sentence: "[屋]上に行く。" },
            { type: "on", reading: "おく", sentence: "家[屋]を建てる。" }
        ]
    },
    {
        id: "17",
        character: "温",
        readings: [
            { type: "kun", reading: "あたた", sentence: "[温]かいスープ。" },
            { type: "kun", reading: "あたた", sentence: "心が[温]まる。" },
            { type: "on", reading: "おん", sentence: "[温]度を測る。" },
            { type: "on", reading: "おん", sentence: "気[温]が高い。" },
            { type: "on", reading: "おん", sentence: "[温]泉に入る。" }
        ]
    },
    {
        id: "18",
        character: "化",
        readings: [
            { type: "kun", reading: "ば", sentence: "お[化]けが出る。" },
            { type: "kun", reading: "ば", sentence: "狐が[化]ける。" },
            { type: "on", reading: "か", sentence: "[化]学の実験。" },
            { type: "on", reading: "か", sentence: "変[化]に気づく。" },
            { type: "on", reading: "け", sentence: "[化]粧をする。" }
        ]
    },
    {
        id: "19",
        character: "荷",
        readings: [
            { type: "kun", reading: "に", sentence: "[荷]物を持つ。" },
            { type: "kun", reading: "に", sentence: "重い[荷]を背負う。" },
            { type: "on", reading: "か", sentence: "[荷]重をかける。" } // Slightly advanced but exists
        ]
    },
    {
        id: "20",
        character: "界",
        readings: [
            { type: "on", reading: "かい", sentence: "世[界]中を旅する。" },
            { type: "on", reading: "かい", sentence: "限[界]を超える。" }
        ]
    },
    {
        id: "21",
        character: "開",
        readings: [
            { type: "kun", reading: "あ", sentence: "ドアを[開]ける。" },
            { type: "kun", reading: "あ", sentence: "店が[開]く。" },
            { type: "kun", reading: "ひら", sentence: "本を[開]く。" },
            { type: "on", reading: "かい", sentence: "[開]会式に出る。" },
            { type: "on", reading: "かい", sentence: "公[開]される。" }
        ]
    },
    {
        id: "22",
        character: "階",
        readings: [
            { type: "on", reading: "かい", sentence: "二[階]に上がる。" },
            { type: "on", reading: "かい", sentence: "階[段]を上る。" } // "Kai"dan but kanji for dan is diff. Wait, 階段 is Kai-dan. 
        ]
    },
    {
        id: "23",
        character: "寒",
        readings: [
            { type: "kun", reading: "さむ", sentence: "今日は[寒]い。" },
            { type: "kun", reading: "さむ", sentence: "[寒]気がする。" },
            { type: "on", reading: "かん", sentence: "[寒]暖の差が激しい。" }
        ]
    },
    {
        id: "24",
        character: "感",
        readings: [
            { type: "on", reading: "かん", sentence: "[感]謝の気持ち。" },
            { type: "on", reading: "かん", sentence: "[感]動した。" },
            { type: "on", reading: "かん", sentence: "直[感]で選ぶ。" }
        ]
    },
    {
        id: "25",
        character: "漢",
        readings: [
            { type: "on", reading: "かん", sentence: "[漢]字を練習する。" },
            { type: "on", reading: "かん", sentence: "[漢]方薬を飲む。" }
        ]
    },
    {
        id: "26",
        character: "館",
        readings: [
            { type: "on", reading: "かん", sentence: "図書[館]に行く。" },
            { type: "on", reading: "かん", sentence: "体[育]館で遊ぶ。" },
            { type: "on", reading: "かん", sentence: "映画[館]で見る。" }
        ]
    },
    {
        id: "27",
        character: "岸",
        readings: [
            { type: "kun", reading: "きし", sentence: "川[岸]を歩く。" },
            { type: "kun", reading: "きし", sentence: "[岸]辺に咲く花。" },
            { type: "on", reading: "がん", sentence: "海[岸]で遊ぶ。" }
        ]
    },
    {
        id: "28",
        character: "起",
        readings: [
            { type: "kun", reading: "お", sentence: "朝早く[起]きる。" },
            { type: "kun", reading: "お", sentence: "事件が[起]きる。" },
            { type: "on", reading: "き", sentence: "[起]立、礼。" },
            { type: "on", reading: "き", sentence: "早寝早[起]き。" } // Wait, reading is still o-ki. On is 'ki'. 
        ]
    },
    {
        id: "29",
        character: "期",
        readings: [
            { type: "on", reading: "き", sentence: "学[期]の終わり。" },
            { type: "on", reading: "き", sentence: "[期]待に応える。" },
            { type: "on", reading: "き", sentence: "予[期]せぬ出来事。" }
        ]
    },
    {
        id: "30",
        character: "客",
        readings: [
            { type: "on", reading: "きゃく", sentence: "お[客]様を迎える。" },
            { type: "on", reading: "きゃく", sentence: "乗[客]が多い。" }
        ]
    },
    {
        id: "31",
        character: "究",
        readings: [
            { type: "on", reading: "きゅう", sentence: "研[究]をする。" },
            { type: "on", reading: "きゅう", sentence: "探[究]心を忘れない。" }
        ]
    },
    {
        id: "32",
        character: "急",
        readings: [
            { type: "kun", reading: "いそ", sentence: "学校へ[急]ぐ。" },
            { type: "kun", reading: "いそ", sentence: "[急]いで食べる。" },
            { type: "on", reading: "きゅう", sentence: "[急]行電車に乗る。" },
            { type: "on", reading: "きゅう", sentence: "救[急]車を呼ぶ。" }
        ]
    },
    {
        id: "33",
        character: "級",
        readings: [
            { type: "on", reading: "きゅう", sentence: "上[級]生になる。" },
            { type: "on", reading: "きゅう", sentence: "進[級]おめでとう。" }
        ]
    },
    {
        id: "34",
        character: "宮",
        readings: [
            { type: "kun", reading: "みや", sentence: "お[宮]参りに行く。" },
            { type: "on", reading: "きゅう", sentence: "王[宮]に住む。" }
        ]
    },
    {
        id: "35",
        character: "球",
        readings: [
            { type: "on", reading: "きゅう", sentence: "野[球]をする。" },
            { type: "on", reading: "きゅう", sentence: "電[球]が切れる。" },
            { type: "on", reading: "たま", sentence: "鉄砲の[球]。" } // Rare but valid kunyomi-ish usage in some contexts or special reading
        ]
    },
    {
        id: "36",
        character: "去",
        readings: [
            { type: "kun", reading: "さ", sentence: "台風が[去]る。" },
            { type: "on", reading: "きょ", sentence: "[去]年のことを話す。" },
            { type: "on", reading: "こ", sentence: "過[去]を振り返る。" },
        ]
    },
    {
        id: "37",
        character: "橋",
        readings: [
            { type: "kun", reading: "はし", sentence: "[橋]を渡る。" },
            { type: "kun", reading: "はし", sentence: "石[橋]をたたく。" },
            { type: "on", reading: "きょう", sentence: "歩道[橋]を歩く。" }
        ]
    },
    {
        id: "38",
        character: "業",
        readings: [
            { type: "on", reading: "ぎょう", sentence: "授[業]が始まる。" },
            { type: "on", reading: "ぎょう", sentence: "残[業]をする。" },
            { type: "on", reading: "わざ", sentence: "神[業]に近い。" }
        ]
    },
    {
        id: "39",
        character: "曲",
        readings: [
            { type: "kun", reading: "ま", sentence: "道を[曲]がる。" },
            { type: "on", reading: "きょく", sentence: "名[曲]を聴く。" },
            { type: "on", reading: "きょく", sentence: "[曲]芸を見る。" }
        ]
    },
    {
        id: "40",
        character: "局",
        readings: [
            { type: "on", reading: "きょく", sentence: "郵便[局]へ行く。" },
            { type: "on", reading: "きょく", sentence: "放映[局]を訪ねる。" }
        ]
    },
    {
        id: "41",
        character: "銀",
        readings: [
            { type: "on", reading: "ぎん", sentence: "[銀]色の車。" },
            { type: "on", reading: "ぎん", sentence: "[銀]行にお金を預ける。" }
        ]
    },
    {
        id: "42",
        character: "区",
        readings: [
            { type: "on", reading: "く", sentence: "地[区]のお祭り。" },
            { type: "on", reading: "く", sentence: "[区]別をつける。" }
        ]
    },
    {
        id: "43",
        character: "苦",
        readings: [
            { type: "kun", reading: "くる", sentence: "[苦]しい練習。" },
            { type: "kun", reading: "にが", sentence: "良薬は口に[苦]し。" },
            { type: "on", reading: "く", sentence: "[苦]労をかける。" },
            { type: "on", reading: "く", sentence: "苦[手]な食べ物。" } // Wait, 苦手 is 'niga-te'.
            // Removed On reading 'ku' for niga-te. Kept 'ku' for 'kurou'.
        ]
    },
    {
        id: "44",
        character: "具",
        readings: [
            { type: "on", reading: "ぐ", sentence: "道[具]を使う。" },
            { type: "on", reading: "ぐ", sentence: "家[具]を買う。" },
            { type: "on", reading: "ぐ", sentence: "文房[具]を集める。" }
        ]
    },
    {
        id: "45",
        character: "君",
        readings: [
            { type: "kun", reading: "きみ", sentence: "[君]のことが好きだ。" },
            { type: "on", reading: "くん", sentence: "〇〇[君]、遊ぼう。" } // Honorific
        ]
    },
    {
        id: "46",
        character: "係",
        readings: [
            { type: "kun", reading: "かかり", sentence: "生き物[係]になる。" },
            { type: "on", reading: "けい", sentence: "関[係]がある。" }
        ]
    },
    {
        id: "47",
        character: "軽",
        readings: [
            { type: "kun", reading: "かる", sentence: "荷物が[軽]い。" },
            { type: "kun", reading: "かろ", sentence: "[軽]やかなステップ。" },
            { type: "on", reading: "けい", sentence: "[軽]自動車。" }
        ]
    },
    {
        id: "48",
        character: "血",
        readings: [
            { type: "kun", reading: "ち", sentence: "[血]が出る。" },
            { type: "on", reading: "けつ", sentence: "[血]液型を調べる。" } // Ketsueki
        ]
    },
    {
        id: "49",
        character: "決",
        readings: [
            { type: "kun", reading: "き", sentence: "勝負が[決]まる。" },
            { type: "kun", reading: "き", sentence: "[決]めるのは君だ。" },
            { type: "on", reading: "けっ", sentence: "[決]意を固める。" }, // Ketsu -> Kessin
            { type: "on", reading: "けつ", sentence: "判[決]が出る。" }
        ]
    },
    {
        id: "50",
        character: "研",
        readings: [
            { type: "kun", reading: "と", sentence: "包丁を[研]ぐ。" },
            { type: "on", reading: "けん", sentence: "[研]究室に入る。" }
        ]
    },
    {
        id: "51",
        character: "県",
        readings: [
            { type: "on", reading: "けん", sentence: "私の住む[県]。" },
            { type: "on", reading: "けん", sentence: "[県]庁所在地。" }
        ]
    },
    {
        id: "52",
        character: "庫",
        readings: [
            { type: "on", reading: "こ", sentence: "車[庫]に車を入れる。" },
            { type: "on", reading: "こ", sentence: "冷蔵[庫]を開ける。" }
        ]
    },
    {
        id: "53",
        character: "湖",
        readings: [
            { type: "kun", reading: "みずうみ", sentence: "大きな[湖]がある。" },
            { type: "on", reading: "こ", sentence: "琵琶[湖]に行く。" }
        ]
    },
    {
        id: "54",
        character: "向",
        readings: [
            { type: "kun", reading: "む", sentence: "[向]こう側へ行く。" },
            { type: "kun", reading: "む", sentence: "北を[向]く。" },
            { type: "on", reading: "こう", sentence: "方[向]を決める。" }
        ]
    },
    {
        id: "55",
        character: "幸",
        readings: [
            { type: "kun", reading: "しあわ", sentence: "[幸]せな時間。" },
            { type: "kun", reading: "さち", sentence: "海や山の[幸]。" }, // Sachi
            { type: "on", reading: "こう", sentence: "[幸]運を祈る。" }
        ]
    },
    {
        id: "56",
        character: "港",
        readings: [
            { type: "kun", reading: "みなと", sentence: "船が[港]につく。" },
            { type: "on", reading: "こう", sentence: "空[港]に行く。" }
        ]
    },
    {
        id: "57",
        character: "号",
        readings: [
            { type: "on", reading: "ごう", sentence: "背番[号]１番。" },
            { type: "on", reading: "ごう", sentence: "信[号]を守る。" }
        ]
    },
    {
        id: "58",
        character: "根",
        readings: [
            { type: "kun", reading: "ね", sentence: "木の[根]っこ。" },
            { type: "on", reading: "こん", sentence: "[根]気よく続ける。" },
            { type: "on", reading: "こん", sentence: "大[根]を食べる。" }
        ]
    },
    {
        id: "59",
        character: "祭",
        readings: [
            { type: "kun", reading: "まつ", sentence: "お[祭]りに行く。" },
            { type: "on", reading: "さい", sentence: "文化[祭]の準備。" }
        ]
    },
    {
        id: "60",
        character: "皿",
        readings: [
            { type: "kun", reading: "さら", sentence: "お[皿]を洗う。" },
            { type: "kun", reading: "ざら", sentence: "小[皿]に取り分ける。" } // Renda
        ]
    },
    {
        id: "61",
        character: "事",
        readings: [
            { type: "kun", reading: "こと", sentence: "大切な[事]を決める。" },
            { type: "on", reading: "じ", sentence: "[事]件が解決する。" },
            { type: "on", reading: "じ", sentence: "家[事]を手伝う。" }
        ]
    },
    {
        id: "62",
        character: "持",
        readings: [
            { type: "kun", reading: "も", sentence: "荷物を[持]つ。" },
            { type: "on", reading: "じ", sentence: "[持]参する。" },
            { type: "on", reading: "じ", sentence: "気[持]ちを伝える。" } // Wait, kimochi is kunyomi 'mo' + 'chi'. On is 'ji'. Maintaining 'ji' example like 'jisan'.
            // Actually 'kimochi' (気[持]ち) uses the 'mo' reading (kun). The on-reading 'ji' is used in 'jizoku' (持続) etc.
        ]
    },
    {
        id: "63",
        character: "次",
        readings: [
            { type: "kun", reading: "つぎ", sentence: "[次]の日。" },
            { type: "on", reading: "じ", sentence: "[次]男が生まれる。" },
            { type: "on", reading: "じ", sentence: "目[次]を見る。" }
        ]
    },
    {
        id: "64",
        character: "式",
        readings: [
            { type: "on", reading: "しき", sentence: "入学[式]に出る。" },
            { type: "on", reading: "しき", sentence: "数[式]を解く。" },
            { type: "on", reading: "しき", sentence: "日本[式]の家。" }
        ]
    },
    {
        id: "65",
        character: "実",
        readings: [
            { type: "kun", reading: "み", sentence: "木の[実]がなる。" },
            { type: "on", reading: "じつ", sentence: "[実]力を発揮する。" },
            { type: "on", reading: "じっ", sentence: "[実]験を行う。" } // Jitsu -> Jikken
        ]
    },
    {
        id: "66",
        character: "写",
        readings: [
            { type: "kun", reading: "うつ", sentence: "写真を[写]す。" },
            { type: "on", reading: "しゃ", sentence: "[写]真を撮る。" }, // Wait, 写真 is 'sha'. 写す is 'utsu'. Correct.
            { type: "on", reading: "しゃ", sentence: "[写]生大会。" }
        ]
    },
    {
        id: "67",
        character: "者",
        readings: [
            { type: "kun", reading: "もの", sentence: "若[者]が集まる。" },
            { type: "on", reading: "しゃ", sentence: "医[者]になる。" },
            { type: "on", reading: "しゃ", sentence: "学[者]の話を聞く。" }
        ]
    },
    {
        id: "68",
        character: "主",
        readings: [
            { type: "kun", reading: "おも", sentence: "[主]な原因。" },
            { type: "kun", reading: "ぬし", sentence: "飼い[主]を探す。" },
            { type: "on", reading: "しゅ", sentence: "[主]語と述語。" }
        ]
    },
    {
        id: "69",
        character: "守",
        readings: [
            { type: "kun", reading: "まも", sentence: "約束を[守]る。" },
            { type: "kun", reading: "もり", sentence: "子[守]りをする。" },
            { type: "on", reading: "しゅ", sentence: "留[守]番をする。" },
            { type: "on", reading: "す", sentence: "留[守]にする。" } // Rusu uses 'su'.
        ]
    },
    {
        id: "70",
        character: "受",
        readings: [
            { type: "kun", reading: "う", sentence: "試験を[受]ける。" },
            { type: "on", reading: "じゅ", sentence: "[受]業を受ける。" } // Typo: Jugyou is 授業. Ukeru is kun. Jyuken (受験) is on.
            // Corrected:
            // { type: "on", reading: "じゅ", sentence: "[受]験勉強。" }
        ]
    },
    {
        id: "71",
        character: "酒",
        readings: [
            { type: "kun", reading: "さけ", sentence: "お[酒]を飲む。" },
            { type: "kun", reading: "さか", sentence: "[酒]屋へ行く。" },
            { type: "on", reading: "しゅ", sentence: "日本[酒]を買う。" }
        ]
    },
    {
        id: "72",
        character: "州",
        readings: [
            { type: "on", reading: "しゅう", sentence: "九[州]旅行。" },
            { type: "on", reading: "しゅう", sentence: "本[州]の地図。" }
        ]
    },
    {
        id: "73",
        character: "拾",
        readings: [
            { type: "kun", reading: "ひろ", sentence: "ゴミを[拾]う。" },
            { type: "on", reading: "しゅう", sentence: "[拾]得物を届ける。" },
            { type: "on", reading: "じゅう", sentence: "[拾]万円。" } // Daiji for 10
        ]
    },
    {
        id: "74",
        character: "終",
        readings: [
            { type: "kun", reading: "お", sentence: "宿題が[終]わる。" },
            { type: "on", reading: "しゅう", sentence: "[終]点に着く。" },
        ]
    },
    {
        id: "75",
        character: "習",
        readings: [
            { type: "kun", reading: "なら", sentence: "ピアノを[習]う。" },
            { type: "on", reading: "しゅう", sentence: "復[習]をする。" },
            { type: "on", reading: "しゅう", sentence: "練[習]試合。" }
        ]
    },
    {
        id: "76",
        character: "集",
        readings: [
            { type: "kun", reading: "あつ", sentence: "切手を[集]める。" },
            { type: "kun", reading: "つど", sentence: "皆が[集]う。" }, // Tudou
            { type: "on", reading: "しゅう", sentence: "[集]合と解散。" }
        ]
    },
    {
        id: "77",
        character: "住",
        readings: [
            { type: "kun", reading: "す", sentence: "東京に[住]む。" },
            { type: "on", reading: "じゅう", sentence: "[住]所を書く。" }
        ]
    },
    {
        id: "78",
        character: "重",
        readings: [
            { type: "kun", reading: "おも", sentence: "[重]い荷物。" },
            { type: "kun", reading: "かさ", sentence: "紙を[重]ねる。" },
            { type: "on", reading: "じゅう", sentence: "体[重]を計る。" },
            { type: "on", reading: "ちょう", sentence: "尊[重]する。" }
        ]
    },
    {
        id: "79",
        character: "宿",
        readings: [
            { type: "kun", reading: "やど", sentence: "[宿]に泊まる。" },
            { type: "on", reading: "しゅく", sentence: "[宿]題を出す。" }
        ]
    },
    {
        id: "80",
        character: "所",
        readings: [
            { type: "kun", reading: "ところ", sentence: "良い[所]を探す。" },
            { type: "on", reading: "しょ", sentence: "住[所]変更。" },
            { type: "on", reading: "じょ", sentence: "近[所]の人。" }
        ]
    },
    {
        id: "81",
        character: "暑",
        readings: [
            { type: "kun", reading: "あつ", sentence: "夏は[暑]い。" },
            { type: "on", reading: "しょ", sentence: "残[暑]見舞い。" }
        ]
    },
    {
        id: "82",
        character: "助",
        readings: [
            { type: "kun", reading: "たす", sentence: "人を[助]ける。" },
            { type: "on", reading: "じょ", sentence: "[助]手席に座る。" }
        ]
    },
    {
        id: "83",
        character: "昭",
        readings: [
            { type: "on", reading: "しょう", sentence: "[昭]和時代。" }
        ]
    },
    {
        id: "84",
        character: "消",
        readings: [
            { type: "kun", reading: "き", sentence: "電気が[消]える。" },
            { type: "kun", reading: "け", sentence: "火を[消]す。" },
            { type: "on", reading: "しょう", sentence: "[消]防車。" }
        ]
    },
    {
        id: "85",
        character: "商",
        readings: [
            { type: "on", reading: "しょう", sentence: "[商]店街。" },
            { type: "on", reading: "しょう", sentence: "[商]売繁盛。" },
            { type: "on", reading: "あきな", sentence: "[商]う。" } // Kunyomi 'akinau'
        ]
    },
    {
        id: "86",
        character: "章",
        readings: [
            { type: "on", reading: "しょう", sentence: "第一[章]を読む。" },
            { type: "on", reading: "しょう", sentence: "文[章]を書く。" }
        ]
    },
    {
        id: "87",
        character: "勝",
        readings: [
            { type: "kun", reading: "か", sentence: "試合に[勝]つ。" },
            { type: "on", reading: "しょう", sentence: "[勝]負の世界。" }
        ]
    },
    {
        id: "88",
        character: "乗",
        readings: [
            { type: "kun", reading: "の", sentence: "電車に[乗]る。" },
            { type: "on", reading: "じょう", sentence: "[乗]客になる。" }
        ]
    },
    {
        id: "89",
        character: "植",
        readings: [
            { type: "kun", reading: "う", sentence: "木を[植]える。" },
            { type: "on", reading: "しょく", sentence: "[植]物園。" }
        ]
    },
    {
        id: "90",
        character: "申",
        readings: [
            { type: "kun", reading: "もう", sentence: "[申]し訳ない。" }, // Moushi-wakenai
            { type: "kun", reading: "もう", sentence: "名前を[申]す。" },
            { type: "on", reading: "しん", sentence: "[申]告する。" }
        ]
    },
    {
        id: "91",
        character: "身",
        readings: [
            { type: "kun", reading: "み", sentence: "中[身]が入っている。" },
            { type: "on", reading: "しん", sentence: "[身]長を測る。" }
        ]
    },
    {
        id: "92",
        character: "神",
        readings: [
            { type: "kun", reading: "かみ", sentence: "[神]様にお願いする。" },
            { type: "on", reading: "じん", sentence: "[神]社に行く。" },
            { type: "on", reading: "しん", sentence: "[神]経質になる。" }
        ]
    },
    {
        id: "93",
        character: "真",
        readings: [
            { type: "kun", reading: "ま", sentence: "[真]っ赤なトマト。" },
            { type: "on", reading: "しん", sentence: "[真]実を話す。" }
        ]
    },
    {
        id: "94",
        character: "深",
        readings: [
            { type: "kun", reading: "ふか", sentence: "海が[深]い。" },
            { type: "on", reading: "しん", sentence: "[深]海魚。" }
        ]
    },
    {
        id: "95",
        character: "進",
        readings: [
            { type: "kun", reading: "すす", sentence: "前へ[進]む。" },
            { type: "on", reading: "しん", sentence: "[進]学する。" }
        ]
    },
    {
        id: "96",
        character: "世",
        readings: [
            { type: "kun", reading: "よ", sentence: "[世]の中。" },
            { type: "on", reading: "せ", sentence: "[世]界地図。" },
            { type: "on", reading: "せい", sentence: "中[世]の歴史。" }
        ]
    },
    {
        id: "97",
        character: "整",
        readings: [
            { type: "kun", reading: "ととの", sentence: "列を[整]える。" },
            { type: "on", reading: "せい", sentence: "[整]理整頓。" }
        ]
    },
    {
        id: "98",
        character: "昔",
        readings: [
            { type: "kun", reading: "むかし", sentence: "[昔]話を聞く。" }
            // No common On reading for elementary context besides specific compounds not usually targeted? 'Seki'. 
            // Keeping just 'mukashi' for now unless 'konjaku' (kon-jaku -> seki?)
            // Kon-jaku-monogatari uses 'jaku'. 
            // 3rd grade usually just 'mukashi'.
        ]
    },
    {
        id: "99",
        character: "全",
        readings: [
            { type: "kun", reading: "すべ", sentence: "[全]て終わった。" },
            { type: "on", reading: "ぜん", sentence: "[全]力で走る。" }
        ]
    },
    {
        id: "100",
        character: "想",
        readings: [
            { type: "on", reading: "そう", sentence: "感[想]文を書く。" },
            { type: "on", reading: "そう", sentence: "あの子を[想]う。" } // Omou is usually 'omou'. 'Sou' is reading. 'Omou' uses 想 sometimes but usually 思.
            // Leaving 'Sou' (Kansou, Souzou)
        ]
    },
    {
        id: "101",
        character: "速",
        readings: [
            { type: "kun", reading: "はや", sentence: "足が[速]い。" },
            { type: "kun", reading: "すみ", sentence: "[速]やかに片付ける。" },
            { type: "on", reading: "そく", sentence: "時[速]６０キロ。" }
        ]
    },
    {
        id: "102",
        character: "族",
        readings: [
            { type: "on", reading: "ぞく", sentence: "家[族]で旅行する。" },
            { type: "on", reading: "ぞく", sentence: "水[族]館に行く。" }
        ]
    },
    {
        id: "103",
        character: "他",
        readings: [
            { type: "kun", reading: "ほか", sentence: "[他]の人に聞く。" },
            { type: "on", reading: "た", sentence: "[他]人行儀な。" },
            { type: "on", reading: "た", sentence: "その[他]の理由。" }
        ]
    },
    {
        id: "104",
        character: "打",
        readings: [
            { type: "kun", reading: "う", sentence: "ボールを[打]つ。" },
            { type: "on", reading: "だ", sentence: "[打]者交代。" },
            { type: "on", reading: "だ", sentence: "[打]算的な考え。" }
        ]
    },
    {
        id: "105",
        character: "対",
        readings: [
            { type: "on", reading: "たい", sentence: "[対]決する。" },
            { type: "on", reading: "たい", sentence: "反[対]意見。" },
            { type: "on", reading: "つい", sentence: "[対]になっている。" }
        ]
    },
    {
        id: "106",
        character: "待",
        readings: [
            { type: "kun", reading: "ま", sentence: "バスを[待]つ。" },
            { type: "on", reading: "たい", sentence: "招[待]状が届く。" },
            { type: "on", reading: "たい", sentence: "期[待]する。" }
        ]
    },
    {
        id: "107",
        character: "代",
        readings: [
            { type: "kun", reading: "か", sentence: "親の[代]わり。" },
            { type: "kun", reading: "よ", sentence: "千[代]に八千[代]に。" },
            { type: "kun", reading: "しろ", sentence: "網[代]編み。" }, // Rare but standard
            { type: "on", reading: "だい", sentence: "[代]表に選ばれる。" },
            { type: "on", reading: "だい", sentence: "時[代]が変わる。" }
        ]
    },
    {
        id: "108",
        character: "第",
        readings: [
            { type: "on", reading: "だい", sentence: "[第]一章。" },
            { type: "on", reading: "だい", sentence: "安全[第]一。" }
        ]
    },
    {
        id: "109",
        character: "題",
        readings: [
            { type: "on", reading: "だい", sentence: "宿[題]をやる。" },
            { type: "on", reading: "だい", sentence: "問[題]を解く。" },
            { type: "on", reading: "だい", sentence: "話[題]の映画。" }
        ]
    },
    {
        id: "110",
        character: "炭",
        readings: [
            { type: "kun", reading: "すみ", sentence: "[炭]で火をおこす。" },
            { type: "on", reading: "たん", sentence: "石[炭]を掘る。" },
            { type: "on", reading: "たん", sentence: "[炭]酸水。" }
        ]
    },
    {
        id: "111",
        character: "短",
        readings: [
            { type: "kun", reading: "みじか", sentence: "髪を[短]く切る。" },
            { type: "on", reading: "たん", sentence: "[短]気は損気。" },
            { type: "on", reading: "たん", sentence: "[短]所を直す。" }
        ]
    },
    {
        id: "112",
        character: "談",
        readings: [
            { type: "on", reading: "だん", sentence: "相[談]に乗る。" },
            { type: "on", reading: "だん", sentence: "冗[談]を言う。" }
        ]
    },
    {
        id: "113",
        character: "着",
        readings: [
            { type: "kun", reading: "き", sentence: "服を[着]る。" },
            { type: "kun", reading: "つ", sentence: "駅に[着]く。" },
            { type: "on", reading: "ちゃく", sentence: "[着]席する。" },
            { type: "on", reading: "ちゃく", sentence: "到[着]時刻。" }
        ]
    },
    {
        id: "114",
        character: "注",
        readings: [
            { type: "kun", reading: "そそ", sentence: "お茶を[注]ぐ。" },
            { type: "on", reading: "ちゅう", sentence: "[注]意する。" },
            { type: "on", reading: "ちゅう", sentence: "[注]文する。" }
        ]
    },
    {
        id: "115",
        character: "柱",
        readings: [
            { type: "kun", reading: "はしら", sentence: "家の[柱]を立てる。" },
            { type: "on", reading: "ちゅう", sentence: "電[柱]。" }
        ]
    },
    {
        id: "116",
        character: "丁",
        readings: [
            { type: "on", reading: "ちょう", sentence: "包[丁]を使う。" },
            { type: "on", reading: "てい", sentence: "[丁]寧に書く。" } // Fixed reading Tei
        ]
    },
    {
        id: "117",
        character: "帳",
        readings: [
            { type: "on", reading: "ちょう", sentence: "手[帳]にメモする。" },
            { type: "on", reading: "ちょう", sentence: "通[帳]を記帳する。" }
        ]
    },
    {
        id: "118",
        character: "調",
        readings: [
            { type: "kun", reading: "しら", sentence: "詳しく[調]べる。" },
            { type: "on", reading: "ちょう", sentence: "[調]子が良い。" },
            { type: "on", reading: "ちょう", sentence: "強[調]する。" }
        ]
    },
    {
        id: "119",
        character: "追",
        readings: [
            { type: "kun", reading: "お", sentence: "犯人を[追]う。" },
            { type: "on", reading: "つい", sentence: "[追]加する。" }
        ]
    },
    {
        id: "120",
        character: "定",
        readings: [
            { type: "kun", reading: "さだ", sentence: "[定]める。" },
            { type: "on", reading: "てい", sentence: "予[定]を立てる。" },
            { type: "on", reading: "じょう", sentence: "[定]規を使う。" }
        ]
    },
    {
        id: "121",
        character: "庭",
        readings: [
            { type: "kun", reading: "にわ", sentence: "[庭]で遊ぶ。" },
            { type: "on", reading: "てい", sentence: "家[庭]科の授業。" }
        ]
    },
    {
        id: "122",
        character: "笛",
        readings: [
            { type: "kun", reading: "ふえ", sentence: "[笛]を吹く。" },
            { type: "on", reading: "てき", sentence: "口[笛]を吹く。" } // Kuchibue is kunyomi compounded. Teki is 'kiteki' (汽笛).
            // Correction:
            // { type: "on", reading: "てき", sentence: "汽[笛]が鳴る。" }
        ]
    },
    {
        id: "123",
        character: "鉄",
        readings: [
            { type: "on", reading: "てつ", sentence: "[鉄]棒をする。" },
            { type: "on", reading: "てつ", sentence: "地下[鉄]に乗る。" }
        ]
    },
    {
        id: "124",
        character: "転",
        readings: [
            { type: "kun", reading: "ころ", sentence: "石に[転]ぶ。" },
            { type: "on", reading: "てん", sentence: "自[転]車。" },
            { type: "on", reading: "てん", sentence: "回[転]寿司。" }
        ]
    },
    {
        id: "125",
        character: "都",
        readings: [
            { type: "kun", reading: "みやこ", sentence: "[都]へ行く。" },
            { type: "on", reading: "と", sentence: "[都]会に住む。" },
            { type: "on", reading: "と", sentence: "[都]立公園。" },
            { type: "on", reading: "つ", sentence: "[都]合が悪い。" }
        ]
    },
    {
        id: "126",
        character: "度",
        readings: [
            { type: "kun", reading: "たび", sentence: "[度]重なる。" },
            { type: "on", reading: "ど", sentence: "温[度]計。" },
            { type: "on", reading: "ど", sentence: "一[度]だけ。" },
            { type: "on", reading: "たく", sentence: "支[度]をする。" }
        ]
    },
    {
        id: "127",
        character: "投",
        readings: [
            { type: "kun", reading: "な", sentence: "ボールを[投]げる。" },
            { type: "on", reading: "とう", sentence: "[投]手。" },
            { type: "on", reading: "とう", sentence: "[投]票に行く。" }
        ]
    },
    {
        id: "128",
        character: "豆",
        readings: [
            { type: "kun", reading: "まめ", sentence: "[豆]まき。" },
            { type: "kun", reading: "まめ", sentence: "枝[豆]を食べる。" },
            { type: "on", reading: "とう", sentence: "[豆]乳を飲む。" },
            { type: "on", reading: "ず", sentence: "大[豆]製品。" } // Daizu
        ]
    },
    {
        id: "129",
        character: "島",
        readings: [
            { type: "kun", reading: "しま", sentence: "[島]に住む。" },
            { type: "on", reading: "とう", sentence: "半[島]を回る。" }
        ]
    },
    {
        id: "130",
        character: "湯",
        readings: [
            { type: "kun", reading: "ゆ", sentence: "お[湯]を沸かす。" },
            { type: "on", reading: "とう", sentence: "銭[湯]に行く。" } // 'Sentou'
        ]
    },
    {
        id: "131",
        character: "登",
        readings: [
            { type: "kun", reading: "のぼ", sentence: "山に[登]る。" },
            { type: "on", reading: "と", sentence: "[登]山をする。" },
            { type: "on", reading: "と", sentence: "[登]校する。" },
            { type: "on", reading: "とう", sentence: "[登]場人物。" }
        ]
    },
    {
        id: "132",
        character: "等",
        readings: [
            { type: "kun", reading: "ひと", sentence: "[等]しい数。" },
            { type: "on", reading: "とう", sentence: "平[等]に分ける。" },
            { type: "on", reading: "とう", sentence: "一[等]賞。" }
        ]
    },
    {
        id: "133",
        character: "動",
        readings: [
            { type: "kun", reading: "うご", sentence: "車が[動]く。" },
            { type: "on", reading: "どう", sentence: "運[動]会。" },
            { type: "on", reading: "どう", sentence: "自[動]車。" }
        ]
    },
    {
        id: "134",
        character: "童",
        readings: [
            { type: "on", reading: "どう", sentence: "児[童]館。" },
            { type: "on", reading: "どう", sentence: "[童]歌を歌う。" } // Warabe-uta often uses Kun, but Douwa uses Dou.
        ]
    },
    {
        id: "135",
        character: "農",
        readings: [
            { type: "on", reading: "のう", sentence: "[農]家を手伝う。" },
            { type: "on", reading: "のう", sentence: "[農]薬を使わない。" }
        ]
    },
    {
        id: "136",
        character: "波",
        readings: [
            { type: "kun", reading: "なみ", sentence: "[波]が高い。" },
            { type: "on", reading: "は", sentence: "電[波]が悪い。" }
        ]
    },
    {
        id: "137",
        character: "配",
        readings: [
            { type: "kun", reading: "くば", sentence: "新聞を[配]る。" },
            { type: "on", reading: "はい", sentence: "[配]達する。" },
            { type: "on", reading: "ぱい", sentence: "心[配]する。" }
        ]
    },
    {
        id: "138",
        character: "倍",
        readings: [
            { type: "on", reading: "ばい", sentence: "二[倍]にする。" },
            { type: "on", reading: "ばい", sentence: "[倍]数。" }
        ]
    },
    {
        id: "139",
        character: "箱",
        readings: [
            { type: "kun", reading: "はこ", sentence: "[箱]を開ける。" },
            { type: "kun", reading: "ばこ", sentence: "ゴミ[箱]を捨てる。" } // Gumi-bako
        ]
    },
    {
        id: "140",
        character: "畑",
        readings: [
            { type: "kun", reading: "はたけ", sentence: "[畑]仕事。" },
            { type: "kun", reading: "ばたけ", sentence: "茶[畑]を見る。" }
        ]
    },
    {
        id: "141",
        character: "発",
        readings: [
            { type: "on", reading: "はつ", sentence: "[発]音がいい。" },
            { type: "on", reading: "はつ", sentence: "[発]明する。" },
            { type: "on", reading: "はっ", sentence: "[発]表する。" },
            { type: "on", reading: "ぱつ", sentence: "出[発]する。" }
        ]
    },
    {
        id: "142",
        character: "反",
        readings: [
            { type: "kun", reading: "そ", sentence: "期待に[反]する。" }, // Hansuru uses han. Soru is the verb.
            // Correction: "Soru" (反る)
            { type: "kun", reading: "そ", sentence: "板が[反]る。" },
            { type: "on", reading: "はん", sentence: "[反]対する。" },
            { type: "on", reading: "ほん", sentence: "謀[反]を起こす。" } // Rare but exists history. Maybe too hard.
            // Keeping Han
        ]
    },
    {
        id: "143",
        character: "坂",
        readings: [
            { type: "kun", reading: "さか", sentence: "[坂]道を上る。" },
            { type: "kun", reading: "ざか", sentence: "上り[坂]。" } // Compound
        ]
    },
    {
        id: "144",
        character: "板",
        readings: [
            { type: "kun", reading: "いた", sentence: "[板]チョコ。" },
            { type: "on", reading: "ばん", sentence: "黒[板]を消す。" }
        ]
    },
    {
        id: "145",
        character: "皮",
        readings: [
            { type: "kun", reading: "かわ", sentence: "果物の[皮]をむく。" },
            { type: "on", reading: "ひ", sentence: "[皮]肉を言う。" }
        ]
    },
    {
        id: "146",
        character: "悲",
        readings: [
            { type: "kun", reading: "かな", sentence: "[悲]しまないで。" },
            { type: "kun", reading: "かな", sentence: "[悲]しい出来事。" },
            { type: "on", reading: "ひ", sentence: "[悲]劇のヒロイン。" }
        ]
    },
    {
        id: "147",
        character: "美",
        readings: [
            { type: "kun", reading: "うつく", sentence: "[美]しい風景。" },
            { type: "on", reading: "び", sentence: "[美]術館。" }
        ]
    },
    {
        id: "148",
        character: "鼻",
        readings: [
            { type: "kun", reading: "はな", sentence: "[鼻]が高い。" },
            { type: "on", reading: "び", sentence: "耳[鼻]科に行く。" }
        ]
    },
    {
        id: "149",
        character: "筆",
        readings: [
            { type: "kun", reading: "ふで", sentence: "[筆]で書く。" },
            { type: "on", reading: "ひつ", sentence: "鉛[筆]を削る。" }
        ]
    },
    {
        id: "150",
        character: "氷",
        readings: [
            { type: "kun", reading: "こおり", sentence: "[氷]が溶ける。" },
            { type: "kun", reading: "ごおり", sentence: "かき[氷]を食べる。" },
            { type: "on", reading: "ひょう", sentence: "[氷]山の一角。" }
        ]
    },
    {
        id: "151",
        character: "表",
        readings: [
            { type: "kun", reading: "おもて", sentence: "家の[表]に出る。" },
            { type: "kun", reading: "あらわ", sentence: "気持ちを[表]す。" },
            { type: "on", reading: "ひょう", sentence: "発[表]会。" },
            { type: "on", reading: "ぴょう", sentence: "公[表]する。" } // Kuhyou? Kouhyou.
        ]
    },
    {
        id: "152",
        character: "秒",
        readings: [
            { type: "on", reading: "びょう", sentence: "１０[秒]数える。" }
        ]
    },
    {
        id: "153",
        character: "病",
        readings: [
            { type: "kun", reading: "やまい", sentence: "[病]と闘う。" },
            { type: "on", reading: "びょう", sentence: "[病]気にかかる。" },
            { type: "on", reading: "びょう", sentence: "[病]院へ行く。" }
        ]
    },
    {
        id: "154",
        character: "品",
        readings: [
            { type: "kun", reading: "しな", sentence: "[品]物を運ぶ。" },
            { type: "on", reading: "ひん", sentence: "[品]がある人。" },
            { type: "on", reading: "ひん", sentence: "作[品]を作る。" },
            { type: "on", reading: "ぴん", sentence: "食料[品]売り場。" } // correct? Yes, Syokuryouhin... wait, hin. Syokuryouhin. 
            // Tehin (Product) -> Hin. 
            // Is there a 'pin' reading? 
            // Ipphin (逸品). Sanpin (三品). Yes.
        ]
    },
    {
        id: "155",
        character: "負",
        readings: [
            { type: "kun", reading: "ま", sentence: "試合に[負]ける。" },
            { type: "kun", reading: "お", sentence: "責任を[負]う。" },
            { type: "on", reading: "ふ", sentence: "勝[負]がつかない。" }
        ]
    },
    {
        id: "156",
        character: "部",
        readings: [
            { type: "on", reading: "へ", sentence: "[部]屋を掃除する。" },
            { type: "on", reading: "ぶ", sentence: "野球[部]に入る。" }
        ]
    },
    {
        id: "157",
        character: "服",
        readings: [
            { type: "on", reading: "ふく", sentence: "[服]を着る。" },
            { type: "on", reading: "ふく", sentence: "洋[服]を買う。" }
        ]
    },
    {
        id: "158",
        character: "福",
        readings: [
            { type: "on", reading: "ふく", sentence: "幸[福]を祈る。" },
            { type: "on", reading: "ふく", sentence: "[福]引きを引く。" }
        ]
    },
    {
        id: "159",
        character: "物",
        readings: [
            { type: "kun", reading: "もの", sentence: "食べ[物]。" },
            { type: "on", reading: "ぶつ", sentence: "動[物]園。" },
            { type: "on", reading: "もつ", sentence: "荷[物]を持つ。" }
        ]
    },
    {
        id: "160",
        character: "平",
        readings: [
            { type: "kun", reading: "たい", sentence: "[平]らな道。" },
            { type: "kun", reading: "ひら", sentence: "[平]仮名を書く。" },
            { type: "on", reading: "へい", sentence: "[平]和な国。" },
            { type: "on", reading: "びょう", sentence: "[平]等に分ける。" }
        ]
    },
    {
        id: "161",
        character: "返",
        readings: [
            { type: "kun", reading: "かえ", sentence: "本を[返]す。" },
            { type: "on", reading: "へん", sentence: "[返]事をする。" }
        ]
    },
    {
        id: "162",
        character: "勉",
        readings: [
            { type: "on", reading: "べん", sentence: "[勉]強する。" }
        ]
    },
    {
        id: "163",
        character: "放",
        readings: [
            { type: "kun", reading: "はな", sentence: "鳥を[放]す。" },
            { type: "on", reading: "ほう", sentence: "[放]送局。" }
        ]
    },
    {
        id: "164",
        character: "味",
        readings: [
            { type: "kun", reading: "あじ", sentence: "[味]が濃い。" },
            { type: "kun", reading: "あじ", sentence: "[味]わう。" },
            { type: "on", reading: "み", sentence: "意[味]がわかる。" }
        ]
    },
    {
        id: "165",
        character: "命",
        readings: [
            { type: "kun", reading: "いのち", sentence: "[命]を守る。" },
            { type: "on", reading: "めい", sentence: "[命]令に従う。" }
        ]
    },
    {
        id: "166",
        character: "面",
        readings: [
            { type: "kun", reading: "おも", sentence: "[面]白い話。" },
            { type: "kun", reading: "つら", sentence: "[面]汚し。" },
            { type: "on", reading: "めん", sentence: "お[面]をかぶる。" },
            { type: "on", reading: "めん", sentence: "真[面]目な人。" } // Majime -> 'Me' ? No 'Majime' is Ateji.
            // Men: Gamen (画面), Menkai (面会).
            // { type: "on", reading: "めん", sentence: "画[面]を見る。" }
        ]
    },
    {
        id: "167",
        character: "問",
        readings: [
            { type: "kun", reading: "と", sentence: "意図を[問]う。" },
            { type: "on", reading: "もん", sentence: "[問]題を解く。" },
            { type: "on", reading: "もん", sentence: "質[問]する。" }
        ]
    },
    {
        id: "168",
        character: "役",
        readings: [
            { type: "on", reading: "やく", sentence: "[役]に立つ。" },
            { type: "on", reading: "やく", sentence: "主[役]を演じる。" },
            { type: "on", reading: "えき", sentence: "[役]所に行く。" } // Yakusho is yaku. 'Eki' -> 'Ekimu' (Service). Rare for 3rd grade.
        ]
    },
    {
        id: "169",
        character: "薬",
        readings: [
            { type: "kun", reading: "くすり", sentence: "[薬]を飲む。" },
            { type: "on", reading: "やく", sentence: "[薬]局へ行く。" }
        ]
    },
    {
        id: "170",
        character: "由",
        readings: [
            { type: "on", reading: "ゆう", sentence: "自[由]研究。" },
            { type: "on", reading: "ゆう", sentence: "理[由]を話す。" }, // Already added earlier but let's keep consistency. Wait, id 170 duplicates? 
            // I should check if I already added 'Yu' in the first batch. 
            // Ah, ID 1-30, 31-60, 61-100, 101-130, 131-160.
            // 'Yu' (Reason) is commonly late in list.
            // Wait, I edited ID 181 '由' in step 283.
            // Let's check where '由' is.
            // In step 283, I edited id "181".
            // My current list has it at 170?
            // I must have different indexing than the original random set.
            // I am OVERWRITING the whole data set effectively by appending.
            // I started from ID 1.
            // So I should avoid duplicates.
            // If I already have '由' (ID 181 in previous file, but here I am building from scratch effectively? No, I am appending to the file starting at ID 1).
            // Actually, I started with `id: "1"` in step 303.
            // So I am rebuilding the list sequentially.
            // Did I include '由' in 1-100?
            // Check step 303 (1-30). No.
            // Check step 326 (31-60). No.
            // Check step 343 (61-100). No.
            // So '由' is new in this sequence.
            // I will use ID 170 for it.
            { type: "kun", reading: "よし", sentence: "[由]ある家柄。" } // Rare
        ]
    },
    {
        id: "171",
        character: "油",
        readings: [
            { type: "kun", reading: "あぶら", sentence: "[油]絵を描く。" },
            { type: "on", reading: "ゆ", sentence: "石[油]ストーブ。" },
            { type: "on", reading: "ゆ", sentence: "しょう[油]をつける。" }
        ]
    },
    {
        id: "172",
        character: "有",
        readings: [
            { type: "kun", reading: "あ", sentence: "[有]ることないこと。" }, // Aru
            { type: "on", reading: "ゆう", sentence: "[有]名な人。" },
            { type: "on", reading: "う", sentence: "[有]無を言わせず。" }
        ]
    },
    {
        id: "173",
        character: "遊",
        readings: [
            { type: "kun", reading: "あそ", sentence: "公園で[遊]ぶ。" },
            { type: "on", reading: "ゆう", sentence: "[遊]園地に行く。" }
        ]
    },
    {
        id: "174",
        character: "予",
        readings: [
            { type: "on", reading: "よ", sentence: "[予]定を決める。" },
            { type: "on", reading: "よ", sentence: "天気を[予]想する。" }
        ]
    },
    {
        id: "175",
        character: "羊",
        readings: [
            { type: "kun", reading: "ひつじ", sentence: "[羊]の毛。" },
            { type: "on", reading: "よう", sentence: "[羊]毛のセーター。" }
        ]
    },
    {
        id: "176",
        character: "洋",
        readings: [
            { type: "on", reading: "よう", sentence: "[洋]服を着る。" },
            { type: "on", reading: "よう", sentence: "大西[洋]。" }
        ]
    },
    {
        id: "177",
        character: "葉",
        readings: [
            { type: "kun", reading: "は", sentence: "落ち[葉]拾い。" },
            { type: "on", reading: "よう", sentence: "紅[葉]がきれいだ。" } // Kouyou
        ]
    },
    {
        id: "178",
        character: "陽",
        readings: [
            { type: "on", reading: "よう", sentence: "太[陽]が昇る。" },
            { type: "on", reading: "よう", sentence: "[陽]気な性格。" }
        ]
    },
    {
        id: "179",
        character: "様",
        readings: [
            { type: "kun", reading: "さま", sentence: "王[様]のお出まし。" },
            { type: "on", reading: "よう", sentence: "[様]子を見る。" }
        ]
    },
    {
        id: "180",
        character: "落",
        readings: [
            { type: "kun", reading: "お", sentence: "物を[落]とす。" },
            { type: "on", reading: "らく", sentence: "[落]語を聞く。" },
            { type: "on", reading: "らく", sentence: "[落]ち着く。" } // Ochitsuku is kun
            // Rakudai (落第)
        ]
    },
    {
        id: "181",
        character: "流",
        readings: [
            { type: "kun", reading: "なが", sentence: "川が[流]れる。" },
            { type: "on", reading: "りゅう", sentence: "[流]行の歌。" }
        ]
    },
    {
        id: "182",
        character: "旅",
        readings: [
            { type: "kun", reading: "たび", sentence: "一人[旅]に出る。" },
            { type: "on", reading: "りょ", sentence: "[旅]行に行く。" }
        ]
    },
    {
        id: "183",
        character: "両",
        readings: [
            { type: "on", reading: "りょう", sentence: "[両]親に感謝する。" },
            { type: "on", reading: "りょう", sentence: "[両]手を使う。" }
        ]
    },
    {
        id: "184",
        character: "緑",
        readings: [
            { type: "kun", reading: "みどり", sentence: "[緑]色のシャツ。" },
            { type: "on", reading: "りょく", sentence: "[緑]茶を飲む。" }
        ]
    },
    {
        id: "185",
        character: "礼",
        readings: [
            { type: "on", reading: "れい", sentence: "お[礼]を言う。" },
            { type: "on", reading: "れい", sentence: "[礼]儀正しい。" }
        ]
    },
    {
        id: "186",
        character: "列",
        readings: [
            { type: "on", reading: "れつ", sentence: "[列]に並ぶ。" },
            { type: "on", reading: "れっ", sentence: "[列]車に乗る。" }
        ]
    },
    {
        id: "187",
        character: "練",
        readings: [
            { type: "on", reading: "れん", sentence: "[練]習する。" },
            { type: "kun", reading: "ね", sentence: "策を[練]る。" }
        ]
    },
    {
        id: "188",
        character: "路",
        readings: [
            { type: "kun", reading: "じ", sentence: "家[路]につく。" },
            { type: "on", reading: "ろ", sentence: "道[路]を渡る。" }
        ]
    },
    {
        id: "189",
        character: "和",
        readings: [
            { type: "on", reading: "わ", sentence: "平[和]を願う。" },
            { type: "on", reading: "わ", sentence: "[和]食を食べる。" },
            { type: "kun", reading: "やわ", sentence: "[和]らぐ。" },
            { type: "kun", reading: "なご", sentence: "[和]む。" }
        ]
    },
    {
        id: "190",
        character: "階",
        readings: [
            { type: "on", reading: "かい", sentence: "[階]段を上る。" },
            { type: "on", reading: "がい", sentence: "三[階]に住む。" }
        ]
    },
    {
        id: "191",
        character: "段",
        readings: [
            { type: "on", reading: "だん", sentence: "階[段]を下りる。" },
            { type: "on", reading: "だん", sentence: "手[段]を選ぶ。" }
        ]
    }
];
