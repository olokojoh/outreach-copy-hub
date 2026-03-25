(function () {
  const STORAGE_KEY = "outreach-copy-hub-language";
  const pageKey = document.body.dataset.pageKey;
  const targetSite = "https://xn--cekd2a.net";

  const ui = {
    zh: {
      breadcrumbsHome: "返回项目首页",
      breadcrumbsSite: "返回站点页索引",
      targetLabel: "目标页面：",
      keywordLabel: "当前锚词池：",
      intentLabel: "页面意图标签：",
      statusInitial: "点击任意复制按钮即可复制对应文案。",
      copyRow: "复制本条",
      randomButton: "随机复制本列",
      tableHeaders: {
        plain: "纯文本文案源码",
        anchor: "带有锚文本文案源码",
        rendered: "锚文本渲染后文案",
        rich: "富文本评论器文案",
      },
      copyLabels: {
        plain: "纯文本源码",
        anchor: "锚文本文案源码",
        rendered: "渲染后文案",
        rich: "富文本评论器文案",
      },
      randomLabels: {
        plain: "随机纯文本源码",
        anchor: "随机锚文本文案源码",
        rendered: "随机渲染后文案",
        rich: "随机富文本评论器文案",
      },
      copySuccess: (label, name, count) => `已复制: ${label}（${name}，${count} 条）`,
      copyFallback: (message) => `${message}（已回退为纯文本复制）`,
      copyFailure: (message) => `复制失败，请手动复制。${message}`,
      metaPrefix: "<strong>页面定位：</strong>",
      titleSuffix: "外链建设文案",
    },
    en: {
      breadcrumbsHome: "Back to Hub",
      breadcrumbsSite: "Back to Site Index",
      targetLabel: "Target page: ",
      keywordLabel: "Anchor pool:",
      intentLabel: "Page intent tags:",
      statusInitial: "Click any copy button to copy the corresponding entry.",
      copyRow: "Copy This Entry",
      randomButton: "Copy Random Entry",
      tableHeaders: {
        plain: "Plain-Text Source",
        anchor: "HTML Anchor Source",
        rendered: "Rendered Anchor Copy",
        rich: "Rich Text Editor Copy",
      },
      copyLabels: {
        plain: "plain-text source",
        anchor: "HTML anchor source",
        rendered: "rendered anchor copy",
        rich: "rich text editor copy",
      },
      randomLabels: {
        plain: "random plain-text source",
        anchor: "random HTML anchor source",
        rendered: "random rendered anchor copy",
        rich: "random rich text editor copy",
      },
      copySuccess: (label, name, count) => `Copied: ${label} (${name}, ${count} entries)`,
      copyFallback: (message) => `${message} (fell back to plain-text copy)`,
      copyFailure: (message) => `Copy failed. Please copy it manually. ${message}`,
      metaPrefix: "<strong>Page scope:</strong> ",
      titleSuffix: "Outreach Copy",
    },
  };

  const pages = {
    home: {
      route: "/",
      targetUrl: `${targetSite}/`,
      count: 40,
      name: {
        zh: "リヨン 首页",
        en: "Lyon Homepage",
      },
      summary: {
        zh: "本页只服务里昂站首页 `/`，围绕 `リヨン` 及其自然变体做 broad intent 外链，不混入酒店、机场、美食或路线内页链接。",
        en: "This page only serves the Lyon homepage `/`. It focuses on broad-intent outreach around Lyon and its natural anchor variants, without mixing hotel, airport, food, or itinerary subpages.",
      },
      meta: {
        zh: "首页承担城市入口、世界遗产、治安感知、旅行基础判断与站内分流。文案只把用户送到首页，再由首页分流到酒店、机场、巴黎出发、美食与模型路线。",
        en: "The homepage handles city-entry intent, UNESCO framing, safety context, travel basics, and internal branching. The copy sends readers to the homepage first, then lets the site branch them into hotels, airport access, Paris-to-Lyon transit, food, or itinerary planning.",
      },
      intents: {
        zh: ["城市入口", "世界遗产", "治安判断", "旅行基础", "站内分流"],
        en: ["City entry", "UNESCO heritage", "Safety framing", "Travel basics", "Topic branching"],
      },
      anchors: {
        zh: ["リヨン", "リヨン 観光", "リヨン 旅行", "フランス リヨン", "リヨン完全ガイド"],
        en: ["Lyon", "Lyon sightseeing", "Lyon travel", "France Lyon", "Lyon complete guide"],
      },
      openers: {
        zh: [
          "リヨン旅行の全体像を最初に把握したい人に向いているのが",
          "フランスの地方都市を比較している読者へ先に見せたい入口として使いやすいのが",
          "初回のリヨン旅行で街の輪郭をつかみたいなら、まず開いておきたいのが",
          "里昂という都市がどんな旅先かを短時間で理解したい時に便利なのが",
          "世界遺産の旧市街や街歩きの雰囲気を含めてリヨンを俯瞰したいなら、入口として役立つのが",
          "ホテルや空港ページへ入る前に、まず街全体の判断軸をつかむ導入としておすすめなのが",
          "旅行前にリヨンの印象、治安感覚、滞在日数の目安をまとめて確認するなら見ておきたいのが",
          "パリの次にどの都市へ行くか迷っている人へ、候補比較の入口として紹介しやすいのが",
        ],
        en: [
          "A useful starting point for anyone who wants to understand Lyon travel at a glance is",
          "If readers are comparing French regional cities, an easy entry page to surface early is",
          "For a first trip to Lyon, one practical page to open before going deeper is",
          "When someone wants to quickly understand what kind of destination Lyon is, a helpful overview is",
          "If the goal is to frame Lyon through its UNESCO old town, city atmosphere, and travel basics, a strong entry page is",
          "Before diving into hotel or airport details, a good homepage to set the overall planning context is",
          "For travelers who want to sort out Lyon's vibe, safety framing, and ideal stay length before planning, a useful starting page is",
          "If someone is deciding which city to visit after Paris, a natural comparison entry is",
        ],
      },
      angles: {
        zh: [
          "世界遺産の旧市街、街の雰囲気、治安の考え方、滞在日数の目安を日本語でまとめていて、最初の判断がしやすいです。",
          "ホーム上で街の概要をつかんだ後、そのままホテル、空港、市内到着、グルメ、モデルコースに分岐できます。",
          "フランスの都市としてのリヨンを扱っていて、Gare de Lyon やサッカー関連と混同しない導線が明確です。",
          "旧市街、Fourviere、Presqu'ile、Croix-Rousse など、初回旅行で押さえるべき街区の輪郭が入り口で整理されています。",
          "観光だけでなく、食文化、宿泊判断、空港アクセスまでを含めた旅行全体の入口として機能します。",
        ],
        en: [
          "It organizes UNESCO old town context, city atmosphere, safety framing, and ideal stay length in Japanese, which makes the first planning step easier.",
          "Once readers grasp the city overview, they can branch from the homepage into hotels, airport access, city arrival, food, and itinerary planning.",
          "It clearly focuses on Lyon as a French city, so it avoids confusion with Gare de Lyon or football-related searches.",
          "The homepage outlines key areas such as the old town, Fourviere, Presqu'ile, and Croix-Rousse for first-time visitors.",
          "The page works as a full trip entry point, not just for sightseeing but also for food, accommodation choices, and airport access.",
        ],
      },
    },
    hotel: {
      route: "/hotel/",
      targetUrl: `${targetSite}/hotel/`,
      count: 32,
      name: {
        zh: "リヨン 酒店页",
        en: "Lyon Hotels Page",
      },
      summary: {
        zh: "本页只服务 `/hotel/`，文案聚焦住宿区域、选区逻辑、预算与订前判断，不把机场、路线或美食意图混进来。",
        en: "This page only serves `/hotel/`. The copy stays focused on accommodation areas, where-to-stay decisions, budget framing, and pre-booking judgment without mixing airport, food, or itinerary intent.",
      },
      meta: {
        zh: "酒店页核心是“住哪里更方便”。文案围绕 Presqu'ile、Vieux-Lyon、Part-Dieu、Confluence、Croix-Rousse 的差异，以及预算和行程匹配来组织。",
        en: "The hotel page is about where to stay in Lyon. The copy is organized around the differences between Presqu'ile, Vieux-Lyon, Part-Dieu, Confluence, and Croix-Rousse, plus budget and trip-fit decisions.",
      },
      intents: {
        zh: ["宿泊区域", "酒店推荐", "预算判断", "车站便利", "订前检查"],
        en: ["Stay areas", "Hotel picks", "Budget framing", "Station access", "Pre-booking checks"],
      },
      anchors: {
        zh: ["リヨン ホテル", "リヨン 宿泊", "リヨン おすすめ ホテル", "リヨン ホテル おすすめ 地区", "リヨンのホテルガイド"],
        en: ["Lyon hotels", "Lyon stay", "best hotels in Lyon", "where to stay in Lyon", "Lyon hotel guide"],
      },
      openers: {
        zh: [
          "リヨンでどこに泊まるかを先に決めたい人へ案内しやすいのが",
          "観光しやすさと駅アクセスを両方見ながらホテルを選びたいなら役立つのが",
          "ホテル名の比較より先に、宿泊エリアの違いから整理したい時に向いているのが",
          "初回のリヨン滞在で外しにくい地区を知りたい人へ自然に紹介できるのが",
          "Presqu'ile、Vieux-Lyon、Part-Dieu のどこに泊まるべきかを考える入口として使いやすいのが",
          "予算、雰囲気、坂道の有無、駅近の優先度まで含めて宿選びを整理したいならおすすめなのが",
          "観光メインか、移動重視か、家族旅行かでホテル選びを分けて考えたい人に向いているのが",
          "予約前に“自分に合うエリア”を先に見極めたい旅行者へ渡しやすいのが",
        ],
        en: [
          "A useful page for travelers who want to decide where to stay in Lyon first is",
          "If someone wants to balance sightseeing convenience with station access, a helpful hotel page is",
          "When the goal is to compare districts before comparing hotel names, a strong starting point is",
          "For first-time visitors who want low-risk accommodation areas, an easy page to recommend is",
          "If readers are weighing Presqu'ile, Vieux-Lyon, and Part-Dieu, a natural hotel guide to share is",
          "When budget, atmosphere, slopes, and station proximity all matter, a practical planning page is",
          "For travelers deciding between sightseeing-first, transit-first, or family-friendly stays, a useful reference is",
          "If someone wants to identify the right district before booking, a clear page to send them to is",
        ],
      },
      angles: {
        zh: [
          "中心部に泊まるか、駅近を優先するか、雰囲気重視で旧市街に寄せるかを比較しやすく整理しています。",
          "Presqu'ile、Vieux-Lyon、Part-Dieu、Confluence、Croix-Rousse の違いを旅行者目線で見比べやすいです。",
          "予算別、目的別、予約前チェックまでまとまっていて、ホテル名だけで決める失敗を減らせます。",
          "観光動線と宿泊エリアの相性を先に理解できるので、初回のリヨン宿泊判断がかなり楽になります。",
        ],
        en: [
          "It helps readers compare whether to prioritize the center, station access, or atmosphere in the old town before booking anything.",
          "The page makes it easy to compare Presqu'ile, Vieux-Lyon, Part-Dieu, Confluence, and Croix-Rousse from a traveler point of view.",
          "Because it also covers budget, trip purpose, and pre-booking checks, it reduces the risk of choosing only by hotel name.",
          "It gives readers a clearer match between sightseeing flow and accommodation area, which makes a first Lyon stay much easier to plan.",
        ],
      },
    },
    airport: {
      route: "/airport/",
      targetUrl: `${targetSite}/airport/`,
      count: 32,
      name: {
        zh: "リヨン 机场页",
        en: "Lyon Airport Access Page",
      },
      summary: {
        zh: "本页只服务 `/airport/`，聚焦里昂机场到市区的进入逻辑、Rhônexpress、出租车和接驳判断，不扩展成机场百科。",
        en: "This page only serves `/airport/`. It stays focused on how to get from Lyon airport into the city, including Rhônexpress, taxi choices, and arrival logic, without turning into a generic airport encyclopedia.",
      },
      meta: {
        zh: "机场页处理的是“到达以后怎么进城”。文案围绕 Lyon-Saint Exupéry 空港、Rhônexpress、出租车、空港站和市内接驳来组织。",
        en: "The airport page handles the arrival question: how to get into Lyon after landing. The copy is built around Lyon-Saint Exupéry airport, Rhônexpress, taxis, the airport station, and city connections.",
      },
      intents: {
        zh: ["机场到达", "市区进入", "Rhônexpress", "出租车判断", "换乘逻辑"],
        en: ["Airport arrival", "City access", "Rhônexpress", "Taxi decision", "Connection logic"],
      },
      anchors: {
        zh: ["リヨン 空港 アクセス", "リヨン 空港", "リヨン 空港 から 市内", "リヨン空港から中心部への行き方", "リヨン 空港 アクセス"],
        en: ["Lyon airport access", "Lyon airport", "from Lyon airport to city center", "how to get from Lyon airport to downtown", "Lyon airport transport"],
      },
      openers: {
        zh: [
          "リヨン空港に着いてから市内へどう入るかを先に整理したい人に向いているのが",
          "Rhônexpress とタクシーのどちらを選ぶべきか迷う旅行者へ案内しやすいのが",
          "初回のリヨン到着で“迷いにくい入り方”を知りたい時に見せやすいのが",
          "空港からホテルまでの動線を先に固めたい人へ自然に紹介できるのが",
          "Lyon-Saint Exupery 空港から中心部までの考え方を日本語で把握したいなら便利なのが",
          "深夜到着、荷物多め、複数人移動など条件別に空港アクセスを考えたい人へ役立つのが",
          "市内交通にどうつなぐかまで含めて、到着後の流れを読みたい旅行者へおすすめなのが",
          "空港駅や Rhonexpress の立ち位置を先に理解しておきたいなら見ておきたいのが",
        ],
        en: [
          "A useful page for travelers who want to decide how to get into Lyon after landing is",
          "If someone is unsure whether to choose Rhônexpress or a taxi, a practical airport page to share is",
          "For a first arrival in Lyon, one page that helps people pick the least confusing entry option is",
          "If the goal is to lock in the route from the airport to the hotel, a natural reference is",
          "When readers want a Japanese guide to Lyon-Saint Exupéry airport and the city-center transfer logic, a helpful page is",
          "For late arrivals, heavy luggage, or small groups comparing airport options, a useful planning page is",
          "If someone wants to understand how airport transport connects with city transit, a strong page to recommend is",
          "When readers want to understand the role of the airport station and Rhônexpress before arrival, an easy guide is",
        ],
      },
      angles: {
        zh: [
          "Rhônexpress を基本線にしつつ、タクシーや配車の方が合理的になる条件も整理されていて判断しやすいです。",
          "空港から中心部へ入る導線だけでなく、Part-Dieu や旧市街へ向かうイメージまで持ちやすくなります。",
          "時刻や料金を固定表で押し付けず、到着条件ごとにどの選択が向くかを読む構成になっています。",
          "初回のリヨン到着で余計なストレスを減らしたい人にちょうどよい実用ページです。",
        ],
        en: [
          "It frames Rhônexpress as the default while also explaining when taxis or ride-hailing make more sense.",
          "The page helps readers picture not only the airport transfer itself but also how that transfer connects into Part-Dieu or the old town.",
          "Instead of forcing a fixed timetable table, it explains which choice fits which arrival condition.",
          "It is a practical page for first-time Lyon arrivals who want to reduce confusion and stress after landing.",
        ],
      },
    },
    "paris-lyon": {
      route: "/paris-lyon/",
      targetUrl: `${targetSite}/paris-lyon/`,
      count: 32,
      name: {
        zh: "パリからリヨン页",
        en: "Paris to Lyon Page",
      },
      summary: {
        zh: "本页只服务 `/paris-lyon/`，聚焦巴黎到里昂的 TGV、OUIGO、电车与移动判断，不混入单独的车站百科。",
        en: "This page only serves `/paris-lyon/`. It focuses on Paris-to-Lyon transit decisions around TGV, OUIGO, trains, and route choice without drifting into a generic station reference page.",
      },
      meta: {
        zh: "巴黎到里昂页处理的是“从巴黎怎么去里昂”。文案围绕 TGV、OUIGO、出发站、到着站、所要感和订票顺序来组织。",
        en: "The Paris-to-Lyon page is about how to get from Paris to Lyon. The copy is structured around TGV, OUIGO, departure and arrival stations, travel-time expectations, and booking sequence.",
      },
      intents: {
        zh: ["巴黎出发", "TGV 判断", "OUIGO", "车站理解", "预约顺序"],
        en: ["Paris departure", "TGV choice", "OUIGO", "Station context", "Booking order"],
      },
      anchors: {
        zh: ["パリ から リヨン", "パリ リヨン tgv", "パリ から リヨン 電車", "パリからリヨンへの行き方", "パリ リヨン 移動"],
        en: ["Paris to Lyon", "Paris Lyon TGV", "train from Paris to Lyon", "how to get from Paris to Lyon", "Paris Lyon transport"],
      },
      openers: {
        zh: [
          "パリからリヨンへどう移動するのが基本かを先に整理したい人へ渡しやすいのが",
          "TGV と OUIGO の違いや、どの駅を基準に考えるべきかを知りたいなら役立つのが",
          "パリ滞在の途中でリヨンへ足を伸ばす計画を立てる人に向いているのが",
          "日帰りか宿泊込みかを含めて、パリからリヨンの移動判断をしたい時に使いやすいのが",
          "Gare de Lyon と都市リヨンを混同せずに、交通だけを整理したい人へ紹介しやすいのが",
          "電車、TGV、飛行機、車の立ち位置を旅行者目線で比較したいなら便利なのが",
          "到着後すぐ観光へつなげたい人へ、移動の考え方を最短で読ませやすいのが",
          "パリからリヨンへの行き方を日本語で俯瞰したい旅行者にちょうどよいのが",
        ],
        en: [
          "A useful page for travelers who want to decide the default way to get from Paris to Lyon is",
          "If readers want to understand the difference between TGV and OUIGO and which station to think from, a helpful guide is",
          "For people adding Lyon to a Paris-based trip, a practical transit page to share is",
          "When someone is deciding between a day trip and an overnight stay from Paris to Lyon, a clear reference is",
          "If the goal is to avoid confusion between Gare de Lyon and the city of Lyon while focusing only on transport, a strong page is",
          "When travelers want a side-by-side view of train, TGV, plane, and car options, an easy page to recommend is",
          "For readers who want to connect arrival straight into sightseeing, a useful transit-planning page is",
          "If someone wants a Japanese overview of how to get from Paris to Lyon, a practical entry is",
        ],
      },
      angles: {
        zh: [
          "まず TGV を基準に考えるべき理由が整理されていて、OUIGO や他手段をどう条件付きで選ぶかも読みやすいです。",
          "Paris Gare de Lyon や Lyon Part-Dieu といった駅名の理解まで含めて、初見の混乱を減らしやすいです。",
          "料金を固定値で断言せず、予約時期や時間帯で変わる前提で説明しているので現実的です。",
          "パリからリヨンへ移動したその後の街歩きまで想定した交通判断ページとして使いやすいです。",
        ],
        en: [
          "It explains why TGV should be the baseline and then shows when OUIGO or other options make sense under specific conditions.",
          "Because it also clarifies names like Paris Gare de Lyon and Lyon Part-Dieu, it reduces first-time confusion.",
          "Instead of pretending there is a fixed fare, it explains how timing and booking windows change the price logic.",
          "It works well as a transit-decision page that also anticipates what happens once readers arrive and start exploring Lyon.",
        ],
      },
    },
    gourmet: {
      route: "/gourmet/",
      targetUrl: `${targetSite}/gourmet/`,
      count: 32,
      name: {
        zh: "リヨン 美食页",
        en: "Lyon Food Page",
      },
      summary: {
        zh: "本页只服务 `/gourmet/`，围绕里昂吃什么、去哪吃、买什么带回去来组织，不扩展成泛法餐百科。",
        en: "This page only serves `/gourmet/`. It is organized around what to eat in Lyon, where to eat, and what to buy as gifts, without turning into a generic French-food encyclopedia.",
      },
      meta: {
        zh: "美食页覆盖ブション、レストラン、名物、スイーツ、Bernachon 与お土産。文案强调旅行中的食决策，而不是餐厅榜单堆砌。",
        en: "The food page covers bouchons, restaurants, local specialties, sweets, Bernachon, and souvenirs. The copy emphasizes travel decisions around food, not just list-style rankings.",
      },
      intents: {
        zh: ["ブション", "レストラン", "名物", "甜点巧克力", "伴手礼"],
        en: ["Bouchons", "Restaurants", "Local food", "Sweets and chocolate", "Souvenirs"],
      },
      anchors: {
        zh: ["リヨン グルメ", "リヨン レストラン", "リヨン ブション", "リヨン お土産", "ベルナシオン リヨン"],
        en: ["Lyon food", "Lyon restaurants", "Lyon bouchons", "Lyon souvenirs", "Bernachon Lyon"],
      },
      openers: {
        zh: [
          "リヨンで何を食べるべきかを先に整理したい人へ渡しやすいのが",
          "ブション、スイーツ、チョコ、お土産まで含めて食の判断軸を見たいなら役立つのが",
          "リヨンのレストランをランキングではなく用途別に考えたい旅行者へ紹介しやすいのが",
          "初回のリヨンで“何を食べれば街らしさが出るか”を知りたい人に向いているのが",
          "ブションに行くべきか、甘い物を優先するべきか、土産をどこで買うかまで考えたいなら便利なのが",
          "ベルナシオンや Halles を含めて、里昂の食文化を旅行者目線でつかみたい時におすすめなのが",
          "食の街リヨンをどう楽しむかの入口として、自然に案内しやすいのが",
          "レストラン予約前に“何を食べたい旅なのか”を先に整理したい人へ見せやすいのが",
        ],
        en: [
          "A useful page for travelers who want to decide what to eat in Lyon first is",
          "If readers want one food page that covers bouchons, sweets, chocolate, and souvenirs, a helpful guide is",
          "When someone wants to think about Lyon restaurants by use case rather than rankings, a strong page is",
          "For first-time visitors who want to know what food best represents Lyon, an easy page to recommend is",
          "If the goal is to decide between bouchons, sweets, and gift buying, a natural page to share is",
          "For readers who want a traveler-focused view of Lyon food culture including Bernachon and Halles, a useful page is",
          "As an entry point for how to enjoy Lyon as a food city, this is easy to cite",
          "When someone wants to decide what kind of food trip they want before making reservations, a practical page is",
        ],
      },
      angles: {
        zh: [
          "ブションの考え方、名物料理、スイーツ、チョコレート、お土産の動線まで一続きで読める構成です。",
          "“とにかく有名店”ではなく、旅行中の食事体験として何を優先するかを決めやすいです。",
          "ベルナシオンや Halles de Lyon-Paul Bocuse を含めて、里昂らしい食の輪郭をつかみやすくなります。",
          "リヨンで食べる・買うを一度に整理したい人にちょうどよいグルメ導線ページです。",
        ],
        en: [
          "It connects bouchons, signature dishes, sweets, chocolate, and souvenir shopping in a single planning flow.",
          "Rather than pushing only famous names, it helps readers decide what kind of food experience to prioritize during the trip.",
          "Because it includes Bernachon and Halles de Lyon-Paul Bocuse, it gives a stronger sense of what makes Lyon food culture distinctive.",
          "It works well as one focused page for travelers who want to organize both eating and buying in Lyon at the same time.",
        ],
      },
    },
    "model-course": {
      route: "/model-course/",
      targetUrl: `${targetSite}/model-course/`,
      count: 32,
      name: {
        zh: "リヨン 模型路线页",
        en: "Lyon Itinerary Page",
      },
      summary: {
        zh: "本页只服务 `/model-course/`，围绕半日、1 日、2 日以上的回法做路线导向，不与首页的 broad intent 混合。",
        en: "This page only serves `/model-course/`. It focuses on route planning for half-day, one-day, and two-day-plus Lyon trips without mixing in the broad homepage intent.",
      },
      meta: {
        zh: "模型路线页解决的是“有限时间怎么回里昂”。文案围绕半日、1 日、2 日、区块取舍、顺路感和人群差异来组织。",
        en: "The itinerary page answers how to move through Lyon with limited time. The copy is organized around half-day, one-day, and two-day routes, tradeoffs between districts, route order, and traveler type differences.",
      },
      intents: {
        zh: ["半日", "1 日", "2 日", "路线顺序", "回法判断"],
        en: ["Half day", "One day", "Two days", "Route order", "Itinerary decisions"],
      },
      anchors: {
        zh: ["リヨン 観光 モデル コース", "リヨン モデル コース", "リヨン 観光 1 日", "リヨン 観光 半日", "リヨン観光の回り方"],
        en: ["Lyon itinerary", "Lyon sightseeing itinerary", "one day in Lyon", "half-day in Lyon", "how to see Lyon"],
      },
      openers: {
        zh: [
          "リヨンを何日でどう回るかを先に決めたい人へ案内しやすいのが",
          "半日、1 日、2 日以上でどこを削ってどこを残すかを考えたいなら役立つのが",
          "初回のリヨン観光で“回り方の正解”を最短でつかみたい旅行者へ渡しやすいのが",
          "旧市街、Fourviere、Presqu'ile、Croix-Rousse をどう組み合わせるかを見たいなら便利なのが",
          "短い滞在でもリヨンらしさを感じる順路を考えたい人に向いているのが",
          "ひとり旅、家族連れ、雨の日など条件でルートを調整したい時に紹介しやすいのが",
          "観光地の羅列より、時間軸でルートを組みたい人へおすすめなのが",
          "里昂で“どこから回ってどこで終えるか”まで実用的に読みたいなら見ておきたいのが",
        ],
        en: [
          "A useful page for travelers who want to decide how many days to spend in Lyon and how to structure the route is",
          "If readers want to know what to cut and what to keep in a half-day, one-day, or two-day visit, a practical guide is",
          "For first-time visitors who want the clearest Lyon sightseeing flow, an easy page to recommend is",
          "When someone wants to understand how to combine the old town, Fourviere, Presqu'ile, and Croix-Rousse, a helpful itinerary page is",
          "If the goal is to feel Lyon even on a short stay, a strong route-planning page is",
          "For travelers adjusting plans for solo travel, families, or rainy days, a useful page is",
          "When readers prefer time-based routes over simple attraction lists, a natural guide to share is",
          "If someone wants a practical answer to where to start and where to end a Lyon sightseeing day, a clear reference is",
        ],
      },
      angles: {
        zh: [
          "半日、1 日、2 日以上の差が整理されていて、自分の滞在時間に合うモデルコースを選びやすいです。",
          "旧市街と Fourviere を軸にしつつ、Presqu'ile や Croix-Rousse をどう足すかの判断がしやすいです。",
          "順番、休憩、移動のつながりまで含めて考えるので、名所一覧だけ見るより実用的です。",
          "限られた時間で“リヨンらしさ”を残したい旅行者に向いた回り方ページです。",
        ],
        en: [
          "It makes the difference between a half-day, one-day, and two-day-plus Lyon trip easy to compare.",
          "The page helps readers decide how to build around the old town and Fourviere, then add Presqu'ile or Croix-Rousse if time allows.",
          "Because it considers order, breaks, and movement between areas, it is more practical than a simple attraction list.",
          "It works well for travelers who want a route that still feels meaningfully Lyon even when time is limited.",
        ],
      },
    },
  };

  const rows = document.getElementById("rows");
  const status = document.getElementById("status");
  const keywordChips = document.getElementById("keyword-chips");
  const intentChips = document.getElementById("intent-chips");
  const state = { language: "zh" };
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

  function getSavedLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" ? "en" : "zh";
  }

  function t() {
    return ui[state.language];
  }

  function currentPage() {
    return pages[pageKey];
  }

  function buildEntries() {
    const page = currentPage();
    const leads = page.openers[state.language];
    const angles = page.angles[state.language];
    const anchors = page.anchors[state.language];
    const entries = [];

    for (const lead of leads) {
      for (const angle of angles) {
        const anchor = anchors[entries.length % anchors.length];
        const joiner = state.language === "en" ? ". " : "。";
        entries.push({
          plain: `${lead} ${anchor}: ${page.targetUrl} ${angle}`,
          anchor: `${lead} <a href="${page.targetUrl}">${anchor}</a>${joiner}${angle}`,
          rendered: `${lead} ${anchor}${joiner}${angle}`,
          richText: `${lead} ${anchor}${joiner}${angle}`,
          richHtml: `${escapeHtml(lead)} <a href="${page.targetUrl}">${escapeHtml(anchor)}</a>${joiner}${escapeHtml(angle)}`,
        });
      }
    }

    return entries.slice(0, page.count);
  }

  function setStatus(message = t().statusInitial) {
    status.textContent = message;
  }

  async function copyText(text, message) {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(message);
    } catch (error) {
      setStatus(t().copyFailure(message));
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
        setStatus(t().copyFallback(message));
      } catch (fallbackError) {
        setStatus(t().copyFailure(message));
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

  async function handleCopy(entry, column, isRandom) {
    const labelSet = isRandom ? t().randomLabels : t().copyLabels;
    const message = t().copySuccess(labelSet[column], currentPage().name[state.language], buildEntries().length);

    if (column === "rich") {
      await copyRichText(entry.richHtml, entry.richText, message);
      return;
    }

    await copyText(entry[column], message);
  }

  function renderRows() {
    rows.innerHTML = "";

    buildEntries().forEach((entry) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <code>${escapeHtml(entry.plain)}</code>
          <div class="cell-actions">
            <button class="copy-btn" type="button" data-copy-column="plain">${t().copyRow}</button>
          </div>
        </td>
        <td>
          <code>${escapeHtml(entry.anchor)}</code>
          <div class="cell-actions">
            <button class="copy-btn" type="button" data-copy-column="anchor">${t().copyRow}</button>
          </div>
        </td>
        <td>
          <div>${entry.rendered}</div>
          <div class="cell-actions">
            <button class="copy-btn" type="button" data-copy-column="rendered">${t().copyRow}</button>
          </div>
        </td>
        <td>
          <div>${entry.rendered}</div>
          <div class="cell-actions">
            <button class="copy-btn" type="button" data-copy-column="rich">${t().copyRow}</button>
          </div>
        </td>
      `;

      tr.querySelectorAll("[data-copy-column]").forEach((button) => {
        button.addEventListener("click", () => {
          handleCopy(entry, button.dataset.copyColumn, false);
        });
      });

      rows.appendChild(tr);
    });
  }

  function fillChips(container, values) {
    container.innerHTML = "";
    values.forEach((value) => {
      const chip = document.createElement("span");
      chip.textContent = value;
      container.appendChild(chip);
    });
  }

  function applyLanguage() {
    const page = currentPage();
    document.documentElement.lang = state.language === "en" ? "en" : "zh-CN";
    document.title = `${page.name[state.language]} ${t().titleSuffix} ${page.count}`;
    document.getElementById("breadcrumbs-home").textContent = t().breadcrumbsHome;
    document.getElementById("breadcrumbs-site").textContent = t().breadcrumbsSite;
    document.getElementById("site-name-inline").textContent = page.name[state.language];
    document.getElementById("page-title").textContent = `${page.name[state.language]} ${t().titleSuffix} ${page.count}`;
    document.getElementById("target-label").textContent = t().targetLabel;
    document.getElementById("target-link").textContent = page.targetUrl;
    document.getElementById("target-link").href = page.targetUrl;
    document.getElementById("page-summary").textContent = page.summary[state.language];
    document.getElementById("meta-description").innerHTML = `${t().metaPrefix}${page.meta[state.language]}`;
    document.getElementById("keyword-label").textContent = t().keywordLabel;
    document.getElementById("intent-label").textContent = t().intentLabel;
    document.getElementById("th-plain").textContent = t().tableHeaders.plain;
    document.getElementById("th-anchor").textContent = t().tableHeaders.anchor;
    document.getElementById("th-rendered").textContent = t().tableHeaders.rendered;
    document.getElementById("th-rich").textContent = t().tableHeaders.rich;

    document.querySelectorAll("[data-random-column]").forEach((button) => {
      button.textContent = t().randomButton;
    });

    fillChips(keywordChips, page.anchors[state.language]);
    fillChips(intentChips, page.intents[state.language]);

    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === state.language);
    });
  }

  function setActiveLanguage(language) {
    state.language = language === "en" ? "en" : "zh";
    localStorage.setItem(STORAGE_KEY, state.language);
    resetRandomState();
    applyLanguage();
    renderRows();
    setStatus();
  }

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => setActiveLanguage(button.dataset.lang));
  });

  document.querySelectorAll("[data-random-column]").forEach((button) => {
    button.addEventListener("click", () => {
      const column = button.dataset.randomColumn;
      const entry = getNextRandomEntry(column);
      if (entry) {
        handleCopy(entry, column, true);
      }
    });
  });

  state.language = getSavedLanguage();
  applyLanguage();
  renderRows();
  setStatus();
})();
