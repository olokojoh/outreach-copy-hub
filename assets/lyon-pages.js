(function () {
  const COPY_LOCALE_KEY = "outreach-copy-hub-lyon-copy-locale";
  const pageKey = document.body.dataset.pageKey;
  const rows = document.getElementById("rows");
  const status = document.getElementById("status");
  const keywordChips = document.getElementById("keyword-chips");
  const intentChips = document.getElementById("intent-chips");
  const copyLanguageControls = document.getElementById("copy-language-controls");

  const localeLabels = {
    ja: "日本語",
    en: "English",
  };

  const pages = {
    home: {
      targetUrl: "https://xn--cekd2a.net/",
      count: 40,
      title: "リヨン 首页外链建设文案 40 条",
      shortName: "リヨン 首页",
      summary:
        "本页只服务里昂站首页 `/`。主关键词只是参考，表格里的锚文本会偏向自然评论分布，更多使用“城市入口页”“这份里昂整理”“旅行起点”这类自然表达。",
      meta:
        "首页承担城市入口、世界遗产、治安感知、旅行基础判断与站内分流。文案会把用户先带到首页，再由首页分流到酒店、机场、巴黎出发、美食与模型路线。",
      intents: ["城市入口", "世界遗产", "治安判断", "旅行基础", "站内分流"],
      copyLocales: {
        ja: {
          anchors: [
            "リヨンの旅行メモ",
            "このリヨン案内",
            "街の全体像がまとまったページ",
            "リヨン観光の入口",
            "旅の出発点になるページ",
            "この街の総合ページ",
            "リヨン完全ガイド",
            "リヨンのまとめ",
            "リヨン",
            "リヨン 観光",
          ],
          starters: [
            "初回なら{anchor}から入ると、",
            "まず{anchor}を見ておくと、",
            "ホテルや空港の前に{anchor}を挟んでおくと、",
            "人に一本だけ渡すなら{anchor}が無難で、",
            "街全体をつかむ用途なら{anchor}が使いやすく、",
            "旅行計画の出発点としては{anchor}が自然で、",
            "細かい予約へ行く前なら{anchor}を先に見た方がよく、",
            "パリの次にどこへ行くか比較する人には{anchor}が渡しやすく、",
          ],
          reasons: [
            "旧市街や街の空気感を先に掴みやすく、",
            "世界遺産、治安感覚、滞在日数の目安が一度に見え、",
            "リヨンを都市として理解してから各内ページへ進みやすく、",
            "ホテル、空港、グルメ、回り方への分岐が読みやすく、",
            "Gare de Lyon やサッカー関連との混同を避けやすく、",
            "初回旅行で押さえるべき地区の輪郭を先に作りやすく、",
          ],
          closers: [
            "そのあとに必要なテーマへ迷わず進みやすいです。",
            "最初の判断ページとしてかなり使いやすいです。",
            "旅行全体の流れを立てる入口としてちょうどいいです。",
            "広めの検索意図を受ける入口として自然に紹介できます。",
            "細かいページに入る前の総論として置きやすいです。",
          ],
        },
        en: {
          anchors: [
            "this Lyon overview",
            "the city-entry page here",
            "this Lyon trip guide",
            "the main Lyon page",
            "this starting page",
            "the overview here",
            "the Lyon guide",
            "the city summary",
            "Lyon",
            "Lyon travel",
          ],
          starters: [
            "For a first look at the city, {anchor} works well because",
            "If someone needs the overall picture first, {anchor} is useful because",
            "Before hotel or airport details, {anchor} is a sensible page because",
            "If I had to share one Lyon entry point, {anchor} is an easy choice because",
            "For broad travel intent, {anchor} is a natural place to start because",
            "When readers are still deciding whether Lyon fits the trip, {anchor} helps because",
            "If the plan is still rough, {anchor} is a safe page to send because",
            "For people comparing Lyon with other French cities, {anchor} is helpful because",
          ],
          reasons: [
            "it frames the old town, atmosphere, and stay-length expectations,",
            "it gives the city context before the more tactical pages,",
            "it keeps heritage, safety framing, and travel basics in one place,",
            "it makes the handoff into hotels, airport access, food, and routes easier,",
            "it helps readers understand Lyon as a city instead of a station-name query,",
            "it sets up the districts and major themes without making the reader jump around,",
          ],
          closers: [
            "so it works well as a natural comment-style recommendation.",
            "which makes it a clean starting point in a comment thread.",
            "so the next click usually makes more sense.",
            "which is enough for the first planning decision.",
            "so it fits a broad, non-spammy backlink placement.",
          ],
        },
      },
    },
    hotel: {
      targetUrl: "https://xn--cekd2a.net/hotel/",
      count: 32,
      title: "リヨン 酒店页外链建设文案 32 条",
      shortName: "リヨン 酒店页",
      summary:
        "本页只服务 `/hotel/`。锚文本不会机械地重复 `リヨン ホテル`，而是更多用“住哪里”“这份住宿区整理”“这个酒店页”等自然评论表达。",
      meta:
        "酒店页解决的是“住哪里更方便”。文案围绕 Presqu'ile、Vieux-Lyon、Part-Dieu、Confluence、Croix-Rousse 的差异，以及预算和行程匹配来组织。",
      intents: ["住宿区域", "选区逻辑", "预算判断", "车站便利", "订前检查"],
      copyLocales: {
        ja: {
          anchors: [
            "この宿泊エリア整理",
            "リヨンで泊まるならこのページ",
            "ホテル選びのまとめ",
            "どこに泊まるかの整理",
            "このホテルガイド",
            "滞在エリアの見方",
            "リヨンのホテル事情",
            "リヨン ホテル",
            "リヨン 宿泊",
          ],
          starters: [
            "どこに泊まるかで迷うなら{anchor}から入ると、",
            "ホテル名を見る前に{anchor}を挟むと、",
            "初回の宿選びでは{anchor}が役立ち、",
            "駅近か中心部かを迷っている人には{anchor}が渡しやすく、",
            "宿泊エリアの違いを先に見たいなら{anchor}が使いやすく、",
            "観光優先か移動優先かを決める段階では{anchor}が自然で、",
            "予約前の判断材料としては{anchor}がちょうどよく、",
            "人にホテル相談を返す時は{anchor}を貼ると説明しやすく、",
          ],
          reasons: [
            "Presqu'ile、旧市街、Part-Dieu の違いが先に入り、",
            "雰囲気、坂道、駅アクセス、予算感の差が見えやすく、",
            "ホテル名だけで決める失敗を減らしやすく、",
            "観光動線と宿泊地の相性を先に判断しやすく、",
            "家族旅行か一人旅かで合う地区を分けて考えやすく、",
            "予約前に外しにくい選択肢が見えやすく、",
          ],
          closers: [
            "初回のリヨン滞在ではかなり実用的です。",
            "宿選びの入口として自然に置けます。",
            "ホテル比較より前の判断ページとして使いやすいです。",
            "コメントで一本返す用途にも向いています。",
            "エリア理解から入れるので失敗しにくいです。",
          ],
        },
        en: {
          anchors: [
            "this stay guide",
            "the district breakdown here",
            "this Lyon hotel page",
            "the where-to-stay guide",
            "this accommodation page",
            "the hotel guide here",
            "the stay-area summary",
            "Lyon hotels",
            "where to stay in Lyon",
          ],
          starters: [
            "If someone is stuck on where to stay, {anchor} is a better first link because",
            "Before comparing hotel names, {anchor} is useful because",
            "For first-time visitors, {anchor} helps because",
            "If the choice is basically center versus station access, {anchor} is practical because",
            "When readers need the districts explained first, {anchor} works well because",
            "For accommodation planning, {anchor} is a natural page because",
            "If budget and atmosphere both matter, {anchor} is worth sending because",
            "In comment threads about where to stay, {anchor} is usually the cleaner recommendation because",
          ],
          reasons: [
            "it compares Presqu'ile, Vieux-Lyon, Part-Dieu, and the outlying options first,",
            "it explains atmosphere, slope, transit, and convenience tradeoffs in one place,",
            "it reduces the risk of choosing only by hotel name or star rating,",
            "it helps readers match the district to the shape of the trip,",
            "it makes budget and trip-purpose tradeoffs easier to see,",
            "it gives a clearer pre-booking framework than a raw list of properties,",
          ],
          closers: [
            "so it reads like a normal planning recommendation, not keyword stuffing.",
            "which makes it easy to drop into a useful reply.",
            "so the next booking step usually becomes simpler.",
            "which is exactly what a practical comment link should do.",
            "so it fits natural discussion around Lyon accommodation.",
          ],
        },
      },
    },
    airport: {
      targetUrl: "https://xn--cekd2a.net/airport/",
      count: 32,
      title: "リヨン 机场页外链建设文案 32 条",
      shortName: "リヨン 机场页",
      summary:
        "本页只服务 `/airport/`。锚文本会偏向“机场进城”“这份到达页”“这个入城说明”这类自然表达，而不是持续精确重复 `リヨン 空港 アクセス`。",
      meta:
        "机场页处理的是“到达以后怎么进城”。文案围绕 Lyon-Saint Exupéry 空港、Rhônexpress、出租车、空港站和市内接驳来组织。",
      intents: ["机场到达", "市区进入", "Rhônexpress", "出租车判断", "换乘逻辑"],
      copyLocales: {
        ja: {
          anchors: [
            "この空港アクセス整理",
            "空港から市内へ入るページ",
            "この到着後ガイド",
            "リヨン空港から中心部への案内",
            "この入城メモ",
            "空港後の流れがまとまったページ",
            "この空港ページ",
            "リヨン 空港",
            "リヨン 空港 アクセス",
          ],
          starters: [
            "空港からどう入るか迷うなら{anchor}を先に見ておくと、",
            "Rhônexpress とタクシーで迷っている人には{anchor}が渡しやすく、",
            "初回到着なら{anchor}を挟んでおくと、",
            "ホテルまでの入り方を固めたい時は{anchor}が役立ち、",
            "深夜到着や荷物多めなら{anchor}を見た方がよく、",
            "到着後のストレスを減らしたい人には{anchor}が自然で、",
            "市内交通へのつなぎ方も含めて見るなら{anchor}が使いやすく、",
            "空港駅や Rhonexpress の立ち位置を整理したいなら{anchor}が便利で、",
          ],
          reasons: [
            "Rhônexpress を基本線にしつつ他手段の条件差も入り、",
            "荷物量、到着時間、人数で選択肢を見分けやすく、",
            "中心部へ入った後の動線まで想像しやすく、",
            "時刻表の細部より選び方のロジックを先に掴みやすく、",
            "Part-Dieu や旧市街へつなぐイメージが持ちやすく、",
            "初回到着で迷いにくい順路を作りやすく、",
          ],
          closers: [
            "到着日に余計な消耗をしにくくなります。",
            "実用寄りの空港ページとしてかなり使いやすいです。",
            "空港からの第一歩を決める用途に向いています。",
            "コメントで紹介しても不自然さが出にくいです。",
            "到着直後の判断ページとしてちょうどいいです。",
          ],
        },
        en: {
          anchors: [
            "this airport access guide",
            "the city-entry page here",
            "this arrival page",
            "the airport transfer guide",
            "this airport note",
            "the post-landing guide",
            "this airport page",
            "Lyon airport",
            "Lyon airport access",
          ],
          starters: [
            "If someone is unsure how to get into town, {anchor} is useful because",
            "For Rhônexpress versus taxi questions, {anchor} is a helpful page because",
            "If the concern is what to do after landing, {anchor} works well because",
            "For first arrivals, {anchor} is easy to recommend because",
            "If the hotel transfer is still unclear, {anchor} makes sense because",
            "When luggage, timing, and group size all matter, {anchor} is practical because",
            "For comments about airport-to-city transfer, {anchor} feels natural because",
            "If readers want the arrival flow without airport trivia, {anchor} is a strong page because",
          ],
          reasons: [
            "it frames Rhônexpress as the baseline but still explains when taxis win,",
            "it helps people choose based on arrival conditions instead of memorizing a rigid table,",
            "it connects the airport decision to where the reader is actually headed in the city,",
            "it keeps the focus on the transfer logic rather than generic airport information,",
            "it makes the first post-landing decision easier to sort out,",
            "it gives a cleaner city-entry picture for first-time visitors,",
          ],
          closers: [
            "so it reads like a real travel reply, not a forced keyword link.",
            "which is why it works well in comment-style placements.",
            "so the link feels useful instead of overly optimized.",
            "which is usually the tone people expect in travel discussions.",
            "so it fits a natural answer to arrival questions.",
          ],
        },
      },
    },
    "paris-lyon": {
      targetUrl: "https://xn--cekd2a.net/paris-lyon/",
      count: 32,
      title: "パリからリヨン页外链建设文案 32 条",
      shortName: "パリからリヨン页",
      summary:
        "本页只服务 `/paris-lyon/`。锚文本会更像正常评论里的“巴黎到里昂怎么走”“这份 TGV 整理”“这个交通页”，不会高频机械复读精确词。",
      meta:
        "巴黎到里昂页解决的是“从巴黎怎么去里昂”。文案围绕 TGV、OUIGO、出发站、到着站、所要感和订票顺序来组织。",
      intents: ["巴黎出发", "TGV 判断", "OUIGO", "站名理解", "预约顺序"],
      copyLocales: {
        ja: {
          anchors: [
            "このパリ発ガイド",
            "パリからどう入るかの整理",
            "この TGV のまとめ",
            "パリからリヨンへの移動ページ",
            "この交通メモ",
            "電車で入る時の整理",
            "この行き方ページ",
            "パリ から リヨン",
            "パリ リヨン tgv",
          ],
          starters: [
            "パリから入るなら{anchor}を先に見た方がよく、",
            "TGV と OUIGO の違いで迷う人には{anchor}が渡しやすく、",
            "駅名で混乱しそうなら{anchor}が役立ち、",
            "日帰りか宿泊込みかを考える段階では{anchor}が自然で、",
            "Paris Gare de Lyon まわりを整理したいなら{anchor}が便利で、",
            "移動手段を一度俯瞰したい人には{anchor}が使いやすく、",
            "到着後すぐ観光へつなげたいなら{anchor}を挟むと、",
            "電車中心で考える人には{anchor}が最初の一枚としてちょうどよく、",
          ],
          reasons: [
            "まず TGV を基準に考えるべき理由が先に入り、",
            "OUIGO や他手段をどんな条件で選ぶかも見え、",
            "Paris Gare de Lyon と都市リヨンの混同を避けやすく、",
            "予約順と料金の見方をざっくり掴みやすく、",
            "到着駅の違いまで含めて全体像を持ちやすく、",
            "移動後の動線までイメージしやすく、",
          ],
          closers: [
            "パリ発の判断ページとしてかなり実用的です。",
            "移動相談への返答として自然に置けます。",
            "駅名で迷う人にも渡しやすいです。",
            "交通だけを整理したい時にちょうどいいです。",
            "コメントでも過度に SEO っぽく見えにくいです。",
          ],
        },
        en: {
          anchors: [
            "this Paris-to-Lyon guide",
            "the TGV breakdown here",
            "this transit page",
            "the Paris departure guide",
            "this route note",
            "the train-focused guide",
            "this travel page",
            "Paris to Lyon",
            "Paris Lyon TGV",
          ],
          starters: [
            "If someone is starting in Paris, {anchor} is useful because",
            "For TGV versus OUIGO questions, {anchor} works well because",
            "If station names are part of the confusion, {anchor} helps because",
            "For day-trip versus overnight decisions, {anchor} is practical because",
            "When readers need the transport options framed clearly, {anchor} is a good page because",
            "If the route still feels fuzzy, {anchor} is worth sending because",
            "For comments about how to make the move from Paris, {anchor} feels natural because",
            "If the goal is to simplify the trip before booking, {anchor} is a good fit because",
          ],
          reasons: [
            "it explains why TGV should be the baseline before anything else,",
            "it shows when OUIGO or other options make sense without overcomplicating the trip,",
            "it reduces confusion around departure and arrival stations,",
            "it frames booking order, price logic, and trip shape in one place,",
            "it helps readers think about the transfer as part of the full Lyon visit,",
            "it keeps the answer on transport rather than drifting into unrelated station trivia,",
          ],
          closers: [
            "so it sounds like a useful travel recommendation, not an exact-match play.",
            "which makes it a clean link in discussion threads.",
            "so the link feels earned and practical.",
            "which is the right tone for this kind of question.",
            "so it fits natural trip-planning conversation.",
          ],
        },
      },
    },
    gourmet: {
      targetUrl: "https://xn--cekd2a.net/gourmet/",
      count: 32,
      title: "リヨン 美食页外链建设文案 32 条",
      shortName: "リヨン 美食页",
      summary:
        "本页只服务 `/gourmet/`。锚文本会偏向“吃什么这页”“这份美食整理”“里昂的餐厅和伴手礼页”这种自然表达，而不是一直精确对齐关键词。",
      meta:
        "美食页覆盖ブション、レストラン、名物、スイーツ、Bernachon 与お土産。文案强调旅行中的食决策，而不是餐厅榜单堆砌。",
      intents: ["ブション", "餐厅选择", "名物", "甜点巧克力", "伴手礼"],
      copyLocales: {
        ja: {
          anchors: [
            "このグルメ整理",
            "何を食べるかのページ",
            "この食のまとめ",
            "リヨンで食べるならこのページ",
            "このレストランと土産の案内",
            "この食べ歩きガイド",
            "このグルメページ",
            "リヨン グルメ",
            "リヨン レストラン",
          ],
          starters: [
            "何を食べるかで迷うなら{anchor}を先に見ておくと、",
            "ブションに行くべきか考える人には{anchor}が渡しやすく、",
            "甘い物や土産まで含めて見たいなら{anchor}が便利で、",
            "店名ランキングより先に{anchor}を挟むと、",
            "食の街としてのリヨンを掴みたい人には{anchor}が自然で、",
            "食事の方針を先に決めたいなら{anchor}が役立ち、",
            "ベルナシオンや Halles を含めて見たいなら{anchor}が使いやすく、",
            "一本で食の方向性を返すなら{anchor}がちょうどよく、",
          ],
          reasons: [
            "ブション、名物、スイーツ、土産の役割が分かれ、",
            "“何を食べたい旅か”を先に整理しやすく、",
            "有名店だけでなく体験の軸から考えやすく、",
            "食事と買い物の動線を一度に見やすく、",
            "Bernachon や Halles をどこで挟むか想像しやすく、",
            "レストラン選びの前段としてかなり実用的で、",
          ],
          closers: [
            "食系の相談に返すリンクとしてかなり自然です。",
            "リヨンらしい食体験の入口として置きやすいです。",
            "グルメ系の広めの検索意図を受けるページとして使いやすいです。",
            "食べる・買うの判断を一本にまとめたい時に向いています。",
            "コメントで貼っても不自然さが出にくいです。",
          ],
        },
        en: {
          anchors: [
            "this food guide",
            "the Lyon eating page",
            "this gourmet page",
            "the restaurant-and-souvenir guide",
            "this food summary",
            "the eating guide here",
            "this food page",
            "Lyon food",
            "Lyon restaurants",
          ],
          starters: [
            "If someone is still deciding what to eat, {anchor} is a useful page because",
            "For bouchon versus sweets versus souvenirs questions, {anchor} helps because",
            "When the food plan is still vague, {anchor} works well because",
            "Before chasing restaurant names, {anchor} is practical because",
            "If readers want Lyon as a food city explained first, {anchor} makes sense because",
            "For comments about what to eat or buy, {anchor} is a natural link because",
            "If the goal is to organize the food part of the trip, {anchor} is worth sending because",
            "When someone wants one page for restaurants, sweets, and gifts, {anchor} fits because",
          ],
          reasons: [
            "it separates bouchons, specialties, sweets, chocolate, and souvenirs clearly,",
            "it helps readers decide what kind of food experience they actually want,",
            "it covers eating and buying in the same planning flow,",
            "it makes famous stops like Bernachon and Halles easier to place in the trip,",
            "it gives more decision value than just another restaurant list,",
            "it works as a clearer entry point into Lyon's food culture,",
          ],
          closers: [
            "so the link feels genuinely useful in discussion.",
            "which is why it works better than an exact-match drop.",
            "so it reads like a normal recommendation from another traveler.",
            "which makes it a strong comment-style placement.",
            "so the backlink stays natural and relevant.",
          ],
        },
      },
    },
    "model-course": {
      targetUrl: "https://xn--cekd2a.net/model-course/",
      count: 32,
      title: "リヨン 模型路线页外链建设文案 32 条",
      shortName: "リヨン 模型路线页",
      summary:
        "本页只服务 `/model-course/`。锚文本会更自然地写成“怎么回里昂这页”“这份行程整理”“半日到一日的路线页”，而不是只盯着精确词。",
      meta:
        "模型路线页解决的是“有限时间怎么回里昂”。文案围绕半日、1 日、2 日、区块取舍、顺路感和人群差异来组织。",
      intents: ["半日路线", "1 日路线", "2 日延展", "顺路判断", "时间取舍"],
      copyLocales: {
        ja: {
          anchors: [
            "この回り方ガイド",
            "半日から一日の行程整理",
            "このモデルコースページ",
            "どう回るかのまとめ",
            "このルート案内",
            "日数別の回り方ページ",
            "この観光動線メモ",
            "リヨン 観光 モデル コース",
            "リヨン 観光 1 日",
          ],
          starters: [
            "どこから回るかで迷うなら{anchor}を先に見ると、",
            "半日か一日かで悩む人には{anchor}が渡しやすく、",
            "初回の観光動線を作るなら{anchor}が役立ち、",
            "旧市街と Fourviere の組み方を考えるなら{anchor}が便利で、",
            "時間が限られる人には{anchor}が自然で、",
            "観光地一覧より先に{anchor}を挟むと、",
            "歩き方と順番を先に決めたいなら{anchor}が使いやすく、",
            "人に回り方だけ返すなら{anchor}がちょうどよく、",
          ],
          reasons: [
            "半日、1 日、2 日以上の差がつかみやすく、",
            "どこを削ってどこを残すか判断しやすく、",
            "旧市街、Fourviere、Presqu'ile のつなぎ方が見えやすく、",
            "順番、休憩、移動の感覚まで想像しやすく、",
            "限られた時間でもリヨンらしさを残しやすく、",
            "家族連れや一人旅など条件差も考えやすく、",
          ],
          closers: [
            "行程相談に返すページとしてかなり使いやすいです。",
            "回り方の入口として自然に紹介できます。",
            "観光動線を一本で返したい時に向いています。",
            "限られた時間の判断材料としてちょうどいいです。",
            "コメントでも過度な SEO 感が出にくいです。",
          ],
        },
        en: {
          anchors: [
            "this itinerary guide",
            "the route-planning page",
            "this Lyon route page",
            "the half-day to one-day guide",
            "this model-course page",
            "the sightseeing flow guide",
            "this route summary",
            "Lyon itinerary",
            "one day in Lyon",
          ],
          starters: [
            "If someone is unsure how to structure the visit, {anchor} is helpful because",
            "For half-day versus one-day planning, {anchor} works well because",
            "When the route order matters more than the attraction list, {anchor} is useful because",
            "If readers want to combine the old town and Fourviere cleanly, {anchor} makes sense because",
            "For limited-time trips, {anchor} is a practical page because",
            "If the plan still needs a walkable sequence, {anchor} is worth sending because",
            "For discussion about how to move through Lyon, {anchor} feels natural because",
            "When someone wants one page for route logic, {anchor} is a good fit because",
          ],
          reasons: [
            "it makes the difference between half-day, one-day, and longer stays clearer,",
            "it helps people decide what to cut and what to keep,",
            "it gives a stronger sense of order, pacing, and district handoff,",
            "it keeps the route anchored in the parts of Lyon that matter most on a short trip,",
            "it is more useful than a flat list of places when time is limited,",
            "it helps readers keep a recognizably Lyon-shaped day even with constraints,",
          ],
          closers: [
            "so it fits the kind of recommendation people actually post in comments.",
            "which keeps the backlink natural instead of over-optimized.",
            "so the page feels like a real planning aid.",
            "which is exactly what a route question usually needs.",
            "so it lands like advice, not keyword targeting.",
          ],
        },
      },
    },
  };

  const state = {
    copyLocale: "ja",
  };

  const randomState = {
    plain: { order: [], cursor: 0 },
    anchor: { order: [], cursor: 0 },
    rendered: { order: [], cursor: 0 },
    rich: { order: [], cursor: 0 },
  };

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function getSavedLocale() {
    const saved = localStorage.getItem(COPY_LOCALE_KEY);
    return saved === "en" ? "en" : "ja";
  }

  function currentPage() {
    return pages[pageKey];
  }

  function buildEntries() {
    const page = currentPage();
    const localeConfig = page.copyLocales[state.copyLocale];
    const entries = [];

    for (let index = 0; index < page.count; index += 1) {
      const anchor = localeConfig.anchors[index % localeConfig.anchors.length];
      const starter = localeConfig.starters[index % localeConfig.starters.length];
      const reason = localeConfig.reasons[(index * 2) % localeConfig.reasons.length];
      const closer = localeConfig.closers[(index * 3) % localeConfig.closers.length];
      const rendered = `${starter.replace("{anchor}", anchor)}${reason}${closer}`.replace(/\s+/g, " ").trim();
      entries.push({
        plain: `${rendered} ${page.targetUrl}`,
        anchor: rendered.replace(anchor, `<a href="${page.targetUrl}">${anchor}</a>`),
        rendered,
        richText: rendered,
        richHtml: escapeHtml(rendered).replace(escapeHtml(anchor), `<a href="${page.targetUrl}">${escapeHtml(anchor)}</a>`),
      });
    }

    return entries;
  }

  function setStatus(message = `当前文案语言：${localeLabels[state.copyLocale]}；当前页面共 ${buildEntries().length} 条。`) {
    status.textContent = message;
  }

  async function copyText(text, message) {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(message);
    } catch (error) {
      setStatus(`复制失败，请手动复制。${message}`);
    }
  }

  async function copyRichText(html, plainText, message) {
    try {
      if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
        const item = new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([plainText], { type: "text/plain" }),
        });
        await navigator.clipboard.write([item]);
      } else {
        await navigator.clipboard.writeText(plainText);
      }
      setStatus(message);
    } catch (error) {
      try {
        await navigator.clipboard.writeText(plainText);
        setStatus(`${message}（已回退为纯文本复制）`);
      } catch (fallbackError) {
        setStatus(`复制失败，请手动复制。${message}`);
      }
    }
  }

  function createShuffledIndexes(length) {
    const order = Array.from({ length }, (_, index) => index);
    for (let index = order.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
    }
    return order;
  }

  function getNextRandomEntry(column) {
    const bucket = buildEntries();
    const stateBucket = randomState[column];

    if (!bucket.length) {
      return null;
    }

    if (stateBucket.order.length !== bucket.length || stateBucket.cursor >= stateBucket.order.length) {
      const previousIndex =
        stateBucket.order.length && stateBucket.cursor > 0
          ? stateBucket.order[stateBucket.cursor - 1]
          : null;

      stateBucket.order = createShuffledIndexes(bucket.length);
      stateBucket.cursor = 0;

      if (bucket.length > 1 && previousIndex !== null && stateBucket.order[0] === previousIndex) {
        [stateBucket.order[0], stateBucket.order[1]] = [stateBucket.order[1], stateBucket.order[0]];
      }
    }

    const itemIndex = stateBucket.order[stateBucket.cursor];
    stateBucket.cursor += 1;
    return bucket[itemIndex];
  }

  function resetRandomState() {
    Object.values(randomState).forEach((bucket) => {
      bucket.order = [];
      bucket.cursor = 0;
    });
  }

  function renderCopyLocaleControls() {
    copyLanguageControls.innerHTML = Object.entries(localeLabels)
      .map(
        ([localeKey, label]) => `
          <button class="toggle-btn ${state.copyLocale === localeKey ? "is-active" : ""}" type="button" data-copy-locale="${localeKey}">
            ${label}
          </button>
        `
      )
      .join("");
  }

  function renderChips(container, values) {
    container.innerHTML = "";
    values.forEach((value) => {
      const chip = document.createElement("span");
      chip.textContent = value;
      container.appendChild(chip);
    });
  }

  function renderRows() {
    rows.innerHTML = "";

    buildEntries().forEach((entry) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <code>${escapeHtml(entry.plain)}</code>
          <div class="cell-actions">
            <button class="copy-btn" type="button" data-copy-column="plain">复制本条</button>
          </div>
        </td>
        <td>
          <code>${escapeHtml(entry.anchor)}</code>
          <div class="cell-actions">
            <button class="copy-btn" type="button" data-copy-column="anchor">复制本条</button>
          </div>
        </td>
        <td>
          <div>${escapeHtml(entry.rendered)}</div>
          <div class="cell-actions">
            <button class="copy-btn" type="button" data-copy-column="rendered">复制本条</button>
          </div>
        </td>
        <td>
          <div>${escapeHtml(entry.rendered)}</div>
          <div class="cell-actions">
            <button class="copy-btn" type="button" data-copy-column="rich">复制本条</button>
          </div>
        </td>
      `;

      tr.querySelectorAll("[data-copy-column]").forEach((button) => {
        button.addEventListener("click", () => {
          const column = button.dataset.copyColumn;
          const labels = {
            plain: "纯文本源码",
            anchor: "锚文本文案源码",
            rendered: "渲染后文案",
            rich: "富文本评论器文案",
          };

          if (column === "rich") {
            copyRichText(
              entry.richHtml,
              entry.richText,
              `已复制：${labels[column]}；文案语言：${localeLabels[state.copyLocale]}；页面：${currentPage().shortName}。`
            );
            return;
          }

          copyText(
            entry[column],
            `已复制：${labels[column]}；文案语言：${localeLabels[state.copyLocale]}；页面：${currentPage().shortName}。`
          );
        });
      });

      rows.appendChild(tr);
    });
  }

  function applyPageMeta() {
    const page = currentPage();
    document.documentElement.lang = "zh-CN";
    document.title = page.title;
    document.getElementById("site-name-inline").textContent = page.shortName;
    document.getElementById("page-title").textContent = page.title;
    document.getElementById("target-link").textContent = page.targetUrl;
    document.getElementById("target-link").href = page.targetUrl;
    document.getElementById("page-summary").textContent = page.summary;
    document.getElementById("meta-description").textContent = page.meta;
    renderChips(keywordChips, page.copyLocales[state.copyLocale].anchors);
    renderChips(intentChips, page.intents);
  }

  function setCopyLocale(locale) {
    state.copyLocale = locale === "en" ? "en" : "ja";
    localStorage.setItem(COPY_LOCALE_KEY, state.copyLocale);
    resetRandomState();
    renderCopyLocaleControls();
    applyPageMeta();
    renderRows();
    setStatus();
  }

  document.querySelectorAll("[data-random-column]").forEach((button) => {
    button.addEventListener("click", async () => {
      const column = button.dataset.randomColumn;
      const entry = getNextRandomEntry(column);
      if (!entry) {
        return;
      }

      const labels = {
        plain: "随机纯文本源码",
        anchor: "随机锚文本文案源码",
        rendered: "随机渲染后文案",
        rich: "随机富文本评论器文案",
      };

      if (column === "rich") {
        await copyRichText(
          entry.richHtml,
          entry.richText,
          `已复制：${labels[column]}；文案语言：${localeLabels[state.copyLocale]}；页面：${currentPage().shortName}。`
        );
        return;
      }

      await copyText(
        entry[column],
        `已复制：${labels[column]}；文案语言：${localeLabels[state.copyLocale]}；页面：${currentPage().shortName}。`
      );
    });
  });

  copyLanguageControls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-copy-locale]");
    if (!button) {
      return;
    }
    if (button.dataset.copyLocale === state.copyLocale) {
      return;
    }
    setCopyLocale(button.dataset.copyLocale);
  });

  state.copyLocale = getSavedLocale();
  renderCopyLocaleControls();
  applyPageMeta();
  renderRows();
  setStatus();
})();
