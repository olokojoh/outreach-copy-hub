(function () {
  const COPY_LOCALE_KEY = "outreach-copy-hub-getcursivetext-copy-locale";
  const rows = document.getElementById("rows");
  const filterControls = document.getElementById("filter-controls");
  const copyLanguageControls = document.getElementById("copy-language-controls");
  const status = document.getElementById("status");

  const copyLocales = {
    en: {
      label: "English",
      starters: [
        "If someone just needs a quick lettering test, {anchor} is easy to use,",
        "For lightweight design drafts, I would point people to {anchor} first,",
        "When the goal is to preview a few styles before editing, {anchor} feels practical,",
        "I usually send beginners to {anchor} because it stays simple,",
        "If a comment thread only needs one useful link, {anchor} is a safe one to drop in,",
        "For fast copy-ready output, {anchor} tends to cover the basics,",
        "When someone wants a usable script result without extra setup, {anchor} works well,",
        "If people are comparing handwriting tools and want something direct, {anchor} is worth trying,",
        "For quick experiments before moving into a full design workflow, {anchor} is handy,",
        "If the question is basically “where do I try this style fast,” {anchor} is usually enough,"
      ],
      closers: [
        "so it fits quick replies, mockups, and social posts.",
        "which makes it useful before opening heavier design tools.",
        "and that usually covers the first decision people need to make.",
        "so people can test the idea before committing more time.",
        "which keeps the workflow short when the task is still rough.",
      ],
    },
    zh: {
      label: "中文",
      starters: [
        "如果只是想先快速试一下效果，{anchor}会比较直接，",
        "做轻量设计草稿时，我通常会先丢这个：{anchor}，",
        "如果目的是先预览几种字形再决定，{anchor}会更省事，",
        "给第一次找这类工具的人，我一般会先发{anchor}，",
        "评论区里如果只想放一个实用链接，{anchor}属于比较稳的选择，",
        "如果只是要一个能马上出结果的工具，{anchor}通常就够用了，",
        "想先做一版可复制的手写体效果，{anchor}上手会比较快，",
        "有人问这种英文手写字工具时，我多半会先回{anchor}，",
        "在正式进设计软件之前，先用{anchor}试几版通常更高效，",
        "如果核心问题只是“哪里能先快速试一下”，那{anchor}就很适合，"
      ],
      closers: [
        "比较适合评论回复、轻量排版和社媒文案这种场景。",
        "这样不用一开始就切进更重的设计流程。",
        "对先判断方向的人来说，这一步通常已经够用了。",
        "先把思路试出来，再决定要不要继续细做会更省时间。",
        "在需求还没完全定下来之前，用它先试一轮会更稳。",
      ],
    },
  };

  const keywordItems = [
    {
      key: "cursive text generator",
      url: "https://getcursivetext.com/cursive-text-generator",
      anchors: {
        en: [
          "this cursive tool",
          "the generator here",
          "this script-text page",
          "the lettering tool here",
          "this page",
          "the cursive text generator",
        ],
        zh: [
          "这个手写体工具",
          "这里的英文手写字生成器",
          "这个花体文字页",
          "这个脚本字工具",
          "这个页面",
          "cursive text generator",
        ],
      },
      reasons: {
        en: [
          "it previews several script looks in seconds,",
          "it gives people copy-paste output and transparent PNG export,",
          "it is useful when someone wants to test a name, headline, or short phrase,",
          "it keeps the workflow short for quick social or branding drafts,",
          "it works well when all someone wants is a fast cursive preview,",
        ],
        zh: [
          "它可以很快预览多种手写体效果，",
          "复制粘贴结果和透明 PNG 导出都给得比较直接，",
          "测名字、标题或者短句时会比较顺手，",
          "做社媒图或品牌草稿时能先把方向试出来，",
          "如果只是想先快速看一版花体效果，它的效率会比较高，",
        ],
      },
    },
    {
      key: "letters in cursive",
      url: "https://getcursivetext.com/letters-in-cursive",
      anchors: {
        en: [
          "this cursive alphabet page",
          "the letter-reference page",
          "these alphabet examples",
          "the letter guide here",
          "this page",
          "letters in cursive",
        ],
        zh: [
          "这个字母参考页",
          "这里的手写字母页",
          "这份字母示例",
          "这个英文花体字母页面",
          "这个页面",
          "letters in cursive",
        ],
      },
      reasons: {
        en: [
          "it is useful for checking individual letter shapes before styling whole words,",
          "it helps with initials, alphabet references, and quick form checks,",
          "it is a better fit when someone is asking about letters rather than full-word effects,",
          "it makes it easier to compare upper- and lowercase forms without extra noise,",
          "it works well for people who want a cleaner alphabet-focused reference,",
        ],
        zh: [
          "它更适合先看单个字母的写法，再决定整词效果，",
          "做首字母、字母表参考或者单字形核对时更有用，",
          "如果对方问的是字母样式而不是整段文字，它会更贴题，",
          "大小写的区别可以比较快地对出来，不会被别的信息打断，",
          "想找纯字母视角的参考时，这页会更清楚，",
        ],
      },
    },
    {
      key: "cursive practice sheets",
      url: "https://getcursivetext.com/cursive-practice-sheets",
      anchors: {
        en: [
          "these printable practice sheets",
          "the worksheet page here",
          "this cursive worksheet set",
          "the handwriting practice page",
          "this page",
          "cursive practice sheets",
        ],
        zh: [
          "这份可打印练习页",
          "这里的练字模板",
          "这个手写练习页面",
          "这套 cursive worksheet",
          "这个页面",
          "cursive practice sheets",
        ],
      },
      reasons: {
        en: [
          "it is more useful when someone needs printable drills instead of just styled text,",
          "it helps with classroom work, alphabet tracing, and repeated handwriting practice,",
          "it is the better link when the real need is worksheets rather than decoration,",
          "it gives a practical way to move from seeing the style to actually practicing it,",
          "it works well for names, letters, and repeated line practice on one page,",
        ],
        zh: [
          "如果真正需求是打印练习，而不是只看效果，这页会更合适，",
          "课堂练字、字母描红和重复书写练习都比较适合，",
          "当对方要的是 worksheet 而不是装饰字时，发它会更贴切，",
          "它能把“看到字形”直接接到“开始练习”这一步，",
          "名字、字母和整行反复练习都能在一个页面里处理，",
        ],
      },
    },
    {
      key: "signature font generator",
      url: "https://getcursivetext.com/signature-font-generator",
      anchors: {
        en: [
          "this signature-style tool",
          "the signature page here",
          "this signature generator",
          "the name-signature tool",
          "this page",
          "signature font generator",
        ],
        zh: [
          "这个签名样式工具",
          "这里的签名字体页",
          "这个签名生成器",
          "这个名字签名页面",
          "这个页面",
          "signature font generator",
        ],
      },
      reasons: {
        en: [
          "it is a better fit for email signatures, watermarks, and signed-name drafts,",
          "it works when someone wants a handwritten signature look rather than generic cursive text,",
          "it is useful for testing how a name sits in a signature-style flow,",
          "it helps people compare cleaner signature looks before exporting anything,",
          "it makes sense when the goal is personal branding more than decorative lettering,",
        ],
        zh: [
          "邮箱签名、水印和签名草稿这种需求会更适合它，",
          "如果要的是签名感，而不是普通花体字，这页更对路，",
          "测试名字放在签名风格里的感觉会更方便，",
          "在正式导出之前，先比一下更干净的签名字形会比较省事，",
          "个人品牌场景比纯装饰字场景更适合直接发这页，",
        ],
      },
    },
    {
      key: "calligraphy font generator",
      url: "https://getcursivetext.com/calligraphy-font-generator",
      anchors: {
        en: [
          "this calligraphy-style page",
          "the calligraphy tool here",
          "this lettering page",
          "the calligraphy generator",
          "this page",
          "calligraphy font generator",
        ],
        zh: [
          "这个书法风格页面",
          "这里的 calligraphy 工具",
          "这个花体字页面",
          "这个书法字体生成器",
          "这个页面",
          "calligraphy font generator",
        ],
      },
      reasons: {
        en: [
          "it is useful when people want a more formal calligraphy feel for invitations or labels,",
          "it fits decorative headers, packaging drafts, and elegant name treatments,",
          "it is the better link when the request leans toward calligraphy rather than casual cursive,",
          "it helps test more ornamental lettering without leaving a browser workflow,",
          "it makes sense for invitation copy, logo ideas, and presentation headers,",
        ],
        zh: [
          "邀请函、标签这类更正式的书法感需求更适合它，",
          "装饰标题、包装草图和优雅名字排版都能先在这里试，",
          "如果需求更偏 calligraphy 而不是普通 cursive，这页会更贴切，",
          "不用跳出浏览器就能先试更偏装饰性的字形，",
          "做请柬文案、logo 草图或者展示标题时都比较顺手，",
        ],
      },
    },
    {
      key: "wedding cursive font generator",
      url: "https://getcursivetext.com/wedding-cursive-font-generator",
      anchors: {
        en: [
          "this wedding lettering page",
          "the wedding-style script tool",
          "this invitation-name page",
          "the wedding cursive page",
          "this page",
          "wedding cursive font generator",
        ],
        zh: [
          "这个婚礼字体页面",
          "这里的婚礼花体工具",
          "这个请柬名字页",
          "这个 wedding script 页面",
          "这个页面",
          "wedding cursive font generator",
        ],
      },
      reasons: {
        en: [
          "it is more relevant for couple names, invitation headers, and wedding signage,",
          "it helps test elegant name treatments for save-the-dates and event materials,",
          "it makes more sense when the use case is wedding stationery rather than general lettering,",
          "it is a cleaner fit for romantic script styling and formal event copy,",
          "it works well when someone wants wedding-specific script ideas quickly,",
        ],
        zh: [
          "情侣名字、请柬标题和婚礼指示牌这类场景会更对口，",
          "save the date 和婚礼物料的优雅名字排版可以先在这里试，",
          "如果是婚礼文具而不是一般排版，这页会更适合直接发，",
          "偏浪漫和正式活动文案的字形，会比通用页更贴需求，",
          "有人想快速找 wedding script 的灵感时，用它会更稳，",
        ],
      },
    },
    {
      key: "tattoo cursive font generator",
      url: "https://getcursivetext.com/tattoo-cursive-font-generator",
      anchors: {
        en: [
          "this tattoo lettering page",
          "the tattoo script tool",
          "this name-and-quote preview page",
          "the tattoo font page here",
          "this page",
          "tattoo cursive font generator",
        ],
        zh: [
          "这个纹身字体页面",
          "这里的 tattoo script 工具",
          "这个名字和短句预览页",
          "这个纹身花体字页面",
          "这个页面",
          "tattoo cursive font generator",
        ],
      },
      reasons: {
        en: [
          "it is useful for previewing names or short quotes before committing to a tattoo style,",
          "it gives a quick way to compare script looks for tattoo lettering ideas,",
          "it is the better link when the context is tattoo wording rather than branding or invites,",
          "it helps people narrow down a cleaner script direction before talking to an artist,",
          "it works well when the text is short and the lettering choice matters a lot,",
        ],
        zh: [
          "名字或短句在纹身前先预览一下，会更适合发这页，",
          "比较不同 tattoo script 风格时它会更直接，",
          "如果语境是纹身文字，而不是品牌或请柬，这个链接会更贴题，",
          "和纹身师沟通前先把字形方向收窄，会比较省时间，",
          "文本很短但字形选择很关键的时候，用它正好，",
        ],
      },
    },
    {
      key: "instagram cursive font generator",
      url: "https://getcursivetext.com/instagram-cursive-font-generator",
      anchors: {
        en: [
          "this Instagram font page",
          "the bio-font tool here",
          "this copy-paste script page",
          "the Instagram text tool",
          "this page",
          "instagram cursive font generator",
        ],
        zh: [
          "这个 Instagram 字体页",
          "这里的 bio 字体工具",
          "这个可复制花体字页面",
          "这个社媒字体工具",
          "这个页面",
          "instagram cursive font generator",
        ],
      },
      reasons: {
        en: [
          "it is handy for bios, captions, usernames, and quick copy-paste social text,",
          "it works better when the real use case is Instagram styling rather than print design,",
          "it gives people a fast way to test profile text without extra apps,",
          "it is useful for social-first lettering where the output just needs to paste cleanly,",
          "it fits short-form creator use cases better than a generic script page,",
        ],
        zh: [
          "简介、caption、用户名和可复制社媒文字这类需求会更贴它，",
          "如果场景是 Instagram 而不是印刷设计，直接发这页会更合适，",
          "不用装额外软件就能先把 profile 文案试出来，",
          "社媒优先的字形需求，重点往往就是能顺手复制粘贴，",
          "相比通用花体页，它更贴短内容创作者的实际用法，",
        ],
      },
    },
    {
      key: "logo cursive font generator",
      url: "https://getcursivetext.com/logo-cursive-font-generator",
      anchors: {
        en: [
          "this logo-script page",
          "the brand lettering tool",
          "this logo mockup page",
          "the script-logo tool here",
          "this page",
          "logo cursive font generator",
        ],
        zh: [
          "这个 logo 花体页",
          "这里的品牌字形工具",
          "这个 logo 草图页面",
          "这个 script logo 工具",
          "这个页面",
          "logo cursive font generator",
        ],
      },
      reasons: {
        en: [
          "it is useful for testing brand-name scripts and lightweight logo ideas,",
          "it works when someone wants to see how a name behaves in a more logo-like cursive style,",
          "it is the better fit for packaging, brand marks, and quick identity drafts,",
          "it helps compare script-heavy logo directions before moving into proper branding work,",
          "it makes sense when the need is a brand-facing mockup rather than personal handwriting,",
        ],
        zh: [
          "测试品牌名的 script 风格或者轻量 logo 想法时会更适合它，",
          "如果要看一个名字放进 logo 感更强的花体里是什么样，这页更对路，",
          "包装、品牌标记和快速身份草图这类需求更适合直接发它，",
          "在正式做 branding 前，先把 script 方向比一轮会更高效，",
          "如果诉求更偏品牌而不是个人手写感，用它会更贴场景，",
        ],
      },
    },
    {
      key: "name cursive font generator",
      url: "https://getcursivetext.com/name-cursive-font-generator",
      anchors: {
        en: [
          "this name-styling page",
          "the name script tool here",
          "this personalized lettering page",
          "the name preview page",
          "this page",
          "name cursive font generator",
        ],
        zh: [
          "这个名字花体页",
          "这里的名字字形工具",
          "这个个性化文字页面",
          "这个名字预览页",
          "这个页面",
          "name cursive font generator",
        ],
      },
      reasons: {
        en: [
          "it works well for profile names, creator tags, and personalized word styling,",
          "it is a better page when someone mainly wants to style a name instead of generic text,",
          "it helps test custom name looks for stickers, profile assets, and quick signature ideas,",
          "it is useful when the text is personal and the name itself is the main focus,",
          "it gives a cleaner route for personalized lettering without extra setup,",
        ],
        zh: [
          "个人名、创作者标签和个性化词组排版会更适合它，",
          "如果重点是把名字做出感觉，而不是处理通用文本，这页更贴题，",
          "贴纸、头像素材和快速签名灵感都可以先在这里试，",
          "当文本本身就是名字、而且名字是主角时，它会更顺手，",
          "不想折腾额外步骤，先做一版个性化名字字形时，这页会更直接，",
        ],
      },
    },
  ];

  const state = {
    copyLocale: "en",
    activeKeyword: "all",
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
    return saved === "zh" ? "zh" : "en";
  }

  function getItemByKey(key) {
    return keywordItems.find((item) => item.key === key);
  }

  function buildEntriesForItem(item) {
    const locale = copyLocales[state.copyLocale];
    const anchors = item.anchors[state.copyLocale];
    const reasons = item.reasons[state.copyLocale];

    return locale.starters.map((starter, index) => {
      const anchor = anchors[index % anchors.length];
      const reason = reasons[index % reasons.length];
      const closer = locale.closers[(index * 2) % locale.closers.length];
      const rendered = `${starter.replace("{anchor}", anchor)} ${reason} ${closer}`.replace(/\s+/g, " ").trim();
      return {
        keyword: item.key,
        plain: `${rendered} ${item.url}`,
        anchor: rendered.replace(anchor, `<a href="${item.url}">${anchor}</a>`),
        rendered,
        richText: rendered,
        richHtml: escapeHtml(rendered).replace(escapeHtml(anchor), `<a href="${item.url}">${escapeHtml(anchor)}</a>`),
      };
    });
  }

  function getEntries() {
    return keywordItems.flatMap((item) => buildEntriesForItem(item));
  }

  function getFilteredEntries() {
    const entries = getEntries();
    if (state.activeKeyword === "all") {
      return entries;
    }
    return entries.filter((entry) => entry.keyword === state.activeKeyword);
  }

  function currentKeywordLabel() {
    return state.activeKeyword === "all" ? "全部" : state.activeKeyword;
  }

  function setStatus(message = `当前文案语言：${copyLocales[state.copyLocale].label}；当前筛选：${currentKeywordLabel()}；共 ${getFilteredEntries().length} 条。`) {
    status.textContent = message;
  }

  function resetRandomState() {
    Object.values(randomState).forEach((bucket) => {
      bucket.order = [];
      bucket.cursor = 0;
    });
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
    const bucket = getFilteredEntries();
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

  function renderCopyLanguageControls() {
    copyLanguageControls.innerHTML = Object.entries(copyLocales)
      .map(
        ([localeKey, locale]) => `
          <button class="toggle-btn ${state.copyLocale === localeKey ? "is-active" : ""}" type="button" data-copy-locale="${localeKey}">
            ${locale.label}
          </button>
        `
      )
      .join("");
  }

  function renderFilterControls() {
    filterControls.innerHTML = `
      <button class="toggle-btn ${state.activeKeyword === "all" ? "is-active" : ""}" type="button" data-filter-keyword="all">全部</button>
      ${keywordItems
        .map(
          (item) => `
            <button class="toggle-btn ${state.activeKeyword === item.key ? "is-active" : ""}" type="button" data-filter-keyword="${escapeHtml(item.key)}">
              ${escapeHtml(item.key)}
            </button>
          `
        )
        .join("")}
    `;
  }

  function renderRows() {
    rows.innerHTML = getFilteredEntries()
      .map(
        (entry) => `
          <tr>
            <td>
              <code>${escapeHtml(entry.plain)}</code>
              <div class="cell-actions">
                <button class="copy-btn" type="button" data-copy="${escapeHtml(entry.plain)}" data-column="plain">复制本条</button>
              </div>
            </td>
            <td>
              <code>${escapeHtml(entry.anchor)}</code>
              <div class="cell-actions">
                <button class="copy-btn" type="button" data-copy="${escapeHtml(entry.anchor)}" data-column="anchor">复制本条</button>
              </div>
            </td>
            <td>
              <div>${escapeHtml(entry.rendered)}</div>
              <div class="cell-actions">
                <button class="copy-btn" type="button" data-copy="${escapeHtml(entry.rendered)}" data-column="rendered">复制本条</button>
              </div>
            </td>
            <td>
              <div>${escapeHtml(entry.rendered)}</div>
              <div class="cell-actions">
                <button
                  class="copy-btn"
                  type="button"
                  data-copy-rich-html="${escapeHtml(entry.richHtml)}"
                  data-copy-rich-text="${escapeHtml(entry.richText)}"
                  data-column="rich"
                >复制本条</button>
              </div>
            </td>
          </tr>
        `
      )
      .join("");
  }

  function rerender() {
    renderCopyLanguageControls();
    renderFilterControls();
    renderRows();
    setStatus();
  }

  function setCopyLocale(locale) {
    state.copyLocale = locale === "zh" ? "zh" : "en";
    localStorage.setItem(COPY_LOCALE_KEY, state.copyLocale);
    resetRandomState();
    rerender();
  }

  function setActiveKeyword(keyword) {
    state.activeKeyword = keyword;
    resetRandomState();
    renderFilterControls();
    renderRows();
    setStatus();
  }

  rows.addEventListener("click", async (event) => {
    const richButton = event.target.closest("[data-copy-rich-html]");
    if (richButton) {
      const message = `已复制：富文本评论器文案；文案语言：${copyLocales[state.copyLocale].label}；当前筛选：${currentKeywordLabel()}。`;
      await copyRichText(richButton.dataset.copyRichHtml, richButton.dataset.copyRichText, message);
      return;
    }

    const button = event.target.closest("[data-copy]");
    if (!button) {
      return;
    }

    const labels = {
      plain: "纯文本源码",
      anchor: "锚文本文案源码",
      rendered: "渲染后文案",
    };
    const message = `已复制：${labels[button.dataset.column]}；文案语言：${copyLocales[state.copyLocale].label}；当前筛选：${currentKeywordLabel()}。`;
    await copyText(button.dataset.copy, message);
  });

  filterControls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter-keyword]");
    if (!button) {
      return;
    }
    if (button.dataset.filterKeyword === state.activeKeyword) {
      return;
    }
    setActiveKeyword(button.dataset.filterKeyword);
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

  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-random-column]");
    if (!button) {
      return;
    }
    const column = button.dataset.randomColumn;
    const entry = getNextRandomEntry(column);
    if (!entry) {
      return;
    }

    if (column === "rich") {
      await copyRichText(
        entry.richHtml,
        entry.richText,
        `已复制：随机富文本评论器文案；文案语言：${copyLocales[state.copyLocale].label}；当前筛选：${currentKeywordLabel()}。`
      );
      return;
    }

    const labels = {
      plain: "随机纯文本源码",
      anchor: "随机锚文本文案源码",
      rendered: "随机渲染后文案",
    };
    await copyText(
      entry[column],
      `已复制：${labels[column]}；文案语言：${copyLocales[state.copyLocale].label}；当前筛选：${currentKeywordLabel()}。`
    );
  });

  state.copyLocale = getSavedLocale();
  rerender();
})();
