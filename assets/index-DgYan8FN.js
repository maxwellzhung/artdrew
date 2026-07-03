(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`sleep-switch`,name:`Sleep Switch`,cnName:`睡眠开关`,rarity:`COMMON`,color:`#8fd9d6`,probability:24,quote:`把雨夜调到不会刺眼的亮度。`,personality:[`慢热`,`安静`,`会照顾人`],emotion:`被温柔调暗`,story:`睡眠开关从窗边一盏快要熄掉的小夜灯里醒来。它不喜欢刺眼的亮度，总会把夜晚调到刚好能看见彼此的程度。`,desire:`想守住每一盏快睡着的灯。`,weakness:`太怕打扰别人，常常把自己也调得太暗。`,relationship:`会提醒信号珠别闪得太急，也常替暗灯花留一格暖光。`},{id:`umbra-drop`,name:`Umbra Drop`,cnName:`伞影滴`,rarity:`COMMON`,color:`#c7b6ff`,probability:22,quote:`撑一把小伞，收集玻璃上的轻响。`,personality:[`敏感`,`浪漫`,`有点爱躲`],emotion:`被雨声接住`,story:`伞影滴是透明雨伞边缘落下的一颗小水珠。它会把玻璃上细小的雨声收进伞骨里，等到天晴再慢慢放出来。`,desire:`想证明安静的雨声也可以被收藏。`,weakness:`一被夸就躲进伞影里。`,relationship:`经常跟在光晕潭旁边，借它的倒影练习不害羞。`},{id:`ventling`,name:`Ventling`,cnName:`风口仔`,rarity:`COMMON`,color:`#c8d1d7`,probability:20,quote:`从通风口吐出一口暖雾。`,personality:[`可靠`,`固执`,`行动慢`],emotion:`靠近一点就暖`,story:`风口仔住在便利店门口的通风格栅后面。它说话像低低的风声，外表冷硬，身体里却一直存着一小团热气。`,desire:`想把被风吹散的雾重新聚起来。`,weakness:`太重视方向感，转身很慢。`,relationship:`常被睡眠开关请去给快冷掉的窗格补一口暖气。`},{id:`halo-puddle`,name:`Halo Puddle`,cnName:`光晕潭`,rarity:`RARE`,color:`#ffe08a`,probability:17,quote:`把路灯倒影圈成小小的家。`,personality:[`温柔`,`慢悠悠`,`记忆力好`],emotion:`被光圈包住`,story:`光晕潭从路灯倒在水洼里的金色圆圈里浮出来。它不急着离开，因为每个经过的人都会在它身上留下一点晃动的影子。`,desire:`想把短暂的倒影留久一点。`,weakness:`容易沉迷回忆，不太会说再见。`,relationship:`是伞影滴的练习镜子，也是信号珠最喜欢路过的站点。`},{id:`signal-bead`,name:`Signal Bead`,cnName:`信号珠`,rarity:`RARE`,color:`#ff7c3d`,probability:16,quote:`等绿灯闪一下，就把勇气挂上肩。`,personality:[`急性子`,`勇敢`,`社交能量高`],emotion:`准备出发`,story:`信号珠来自斑马线旁忽明忽暗的提示灯。它把橙色小珠挂在身上，专门提醒大家：可以向前走了。`,desire:`想在每次犹豫前发出一个小信号。`,weakness:`太急着鼓励别人，偶尔忽略对方还没准备好。`,relationship:`总想带风口仔跑快一点，却常被光晕潭劝慢下来。`},{id:`blackout-bloom`,name:`Blackout Bloom`,cnName:`暗灯花`,rarity:`SECRET`,color:`#11151c`,probability:1,quote:`停电以后，替窗格留一朵微光。`,personality:[`安静`,`神秘`,`很会等待`],emotion:`黑暗里还有光`,story:`暗灯花只在整条街突然停电时出现。它的身体像一团深色雾气，胸口却亮着一格很小的窗，提醒大家夜晚没有完全关闭。`,desire:`想证明没有电的时候，微光也可以开花。`,weakness:`害怕被强光照见，也害怕别人说它太暗。`,relationship:`睡眠开关会替它调暗边缘，伞影滴则负责把它藏进雨声里。`}],t={COMMON:`common`,RARE:`rare`,SECRET:`secret`},n=[{id:`morrifolio`,dropNo:`DROP 01`,name:`Morrifolio`,cnName:`墨里弗里`,status:`archive`,statusLabel:`ARCHIVE`,launchLabel:`已上架档案`,lineupLabel:`6 款页边居民`,description:`artdrew 首个纸页边角主题系列，记录独立插画、zine 摊位和展会标签的收藏气质。`,accent:`#ee3028`,image:`assets/morrifolio-lineup.png`,actionLabel:`查看档案`},{id:`brumlet`,dropNo:`DROP 02`,name:`Brumlet`,cnName:`雾姆团`,status:`live`,statusLabel:`LIVE`,launchLabel:`现已开放抽盒`,lineupLabel:`6 款 + 1% 隐藏`,description:`从雨后玻璃、路灯光晕和通风口热气里凝成的当前主推潮流艺术玩具。`,accent:`#31d6cf`,image:`assets/brumlet-lineup.png`,href:`#draw`,actionLabel:`进入抽盒`},{id:`twilloop`,dropNo:`DROP 03`,name:`Twilloop`,cnName:`缝环团`,status:`next`,statusLabel:`STUDIO PREVIEW`,launchLabel:`设定已完成`,lineupLabel:`6 款 + 1% 隐藏线头`,description:`从深夜修补台、线轴、拉链头和布边条里绕出的新原创潮玩居民。`,accent:`#235aa6`,image:`assets/twilloop-lineup.png`,href:`#twilloop`,actionLabel:`查看设定`},{id:`glow-laundry`,dropNo:`DROP 04`,name:`Glow Laundry`,cnName:`夜洗房`,status:`studio`,statusLabel:`PLANNING`,launchLabel:`世界观排期中`,lineupLabel:`未公开`,description:`把投币洗衣房的热雾、滚筒光圈和遗失袜子做成后续城市微光角色。`,accent:`#ff7c3d`}],r=[{name:`Pin Sash`,cnName:`别针披带`,rarity:`COMMON`,color:`#c83f31`,trait:`把松掉的小事先别住。`},{name:`Zip Pull`,cnName:`拉链头`,rarity:`COMMON`,color:`#235aa6`,trait:`一拉开，就把沉默放出来。`},{name:`Button Guard`,cnName:`纽扣盾`,rarity:`COMMON`,color:`#f1bf2d`,trait:`负责守住最后一颗纽扣。`},{name:`Bobbin Pack`,cnName:`梭芯包`,rarity:`RARE`,color:`#8bcfbd`,trait:`背着一小卷备用勇气。`},{name:`Thimble Hood`,cnName:`顶针盔`,rarity:`RARE`,color:`#f2eee2`,trait:`被戳到也会轻轻回弹。`},{name:`Loose End`,cnName:`暗夜线头`,rarity:`SECRET`,color:`#111111`,trait:`只在心事快散开时出现。`}],i=!1,a=`zh`,o=e=>e[a],s={meta:{title:{zh:`artdrew | Brumlet 抽盒、Twilloop 预览与 IP 世界观生成器`,en:`artdrew | Brumlet Blind Box, Twilloop Preview, and IP Universe Forge`},description:{zh:`artdrew 潮流艺术玩具上新与盲盒抽盒浏览器版体验，包含 Brumlet / 雾姆团、Twilloop / 缝环团和自动 IP 世界观生成器。`,en:`artdrew is a browser prototype for collectible art-toy drops, featuring Brumlet, Twilloop, and an automatic IP universe generator.`}},nav:{top:{zh:`首页`,en:`Home`},drops:{zh:`上新`,en:`Drops`},forge:{zh:`生成器`,en:`Forge`},twilloop:{zh:`新IP`,en:`New IP`},draw:{zh:`抽盒机`,en:`Draw`},story:{zh:`故事`,en:`Story`},collection:{zh:`收藏室`,en:`Shelf`},odds:{zh:`机制`,en:`Odds`},account:{zh:`账户`,en:`Account`}},labels:{common:{zh:`常规款`,en:`Common`},rare:{zh:`稀有款`,en:`Rare`},secret:{zh:`隐藏款`,en:`Secret`},collectionItem:{zh:`件藏品`,en:`items`},unlocked:{zh:`已解锁`,en:`unlocked`},tasks:{zh:`任务`,en:`missions`},duplicateInk:{zh:`重复水珠`,en:`Duplicate ink`},tokens:{zh:`余光章`,en:`Afterglow tokens`},wishlist:{zh:`心愿款`,en:`Wishlist`},noPayment:{zh:`无真实付费`,en:`No real payments`},noPassword:{zh:`不保存密码`,en:`No password storage`},browserPrototype:{zh:`浏览器原型`,en:`Browser prototype`},notOwned:{zh:`未获得`,en:`Not owned`},owned:{zh:`已拥有`,en:`Owned`},probability:{zh:`抽中概率`,en:`draw odds`}},hero:{nameLine:{zh:`雾姆团`,en:`A rainy micro-weather art toy drop`},slogan:{zh:`Art is not chosen. It is drawn.`,en:`Art is not chosen. It is drawn.`},lede:{zh:`Brumlet / 雾姆团已进入 artdrew 的上新板。雨后玻璃、路灯光晕和通风口热气里凝成的小雾团，每一只都收藏一种刚停雨时才会出现的城市微光。`,en:`Brumlet is live on artdrew. These tiny weather spirits form from rain-streaked glass, lamp halos, and warm vents, each holding a city glimmer that appears just after the rain stops.`},drawAction:{zh:`立即抽盒`,en:`Draw Now`},dropsAction:{zh:`查看上新`,en:`View Drops`},statsCommon:{zh:`常规款`,en:`common`},statsRare:{zh:`稀有款`,en:`rare`},statsSecret:{zh:`隐藏款`,en:`secret`},statsCollected:{zh:`已收集`,en:`collected`},statsStock:{zh:`今日余量`,en:`today stock`},announce:{zh:`公告`,en:`Notice`},announceText:{zh:`artdrew 当前 LIVE DROP：Brumlet / 雾姆团。当前心愿款：`,en:`Current artdrew LIVE DROP: Brumlet. Current wishlist figure: `}},drops:{eyebrow:{zh:`DROP BOARD`,en:`DROP BOARD`},title:{zh:`陆续上架的潮流艺术玩具`,en:`Collectible art toys arriving on artdrew`},intro:{zh:`这里是 artdrew 的发售板：已上架系列会保留档案，当前 LIVE 系列可以直接试玩抽盒，后续系列会在角色、包装和概率机制完成后开放。`,en:`This is artdrew's release board: archived drops keep their records, the live drop can be played now, and future series open after their characters, packaging, and odds systems are finished.`}},forge:{title:{zh:`自动生成新的潮玩 IP`,en:`Generate New Art-Toy IPs`},intro:{zh:`这个工作台会从 artdrew 的共同世界观里自动生成一套可立项的潮玩 IP：名字、族群性格、世界背景、六款角色、关系网、后续 drop 和资产 prompt 都一次成型。`,en:`This workbench automatically creates a launch-ready art-toy IP inside the shared artdrew universe: name, tribe personality, world background, six figures, relationships, future drops, and asset prompt seed.`},universeTitle:{zh:`共同宇宙：余光街区`,en:`Shared Universe: Afterglow Borough`},universeCopy:{zh:`artdrew 的所有角色都住在余光街区：商店打烊、灯还没完全熄灭时，日常物件会醒来，把小情绪变成可以收藏的居民。`,en:`All artdrew characters live in Afterglow Borough: when shops close and lights have not fully gone out, everyday objects wake and turn small emotions into collectible residents.`},label:{zh:`IP FORGE / GENERATED STUDIO`,en:`IP FORGE / GENERATED STUDIO`},generate:{zh:`生成新 IP`,en:`Generate IP`},pin:{zh:`暂存本次概念`,en:`Pin Concept`},pinned:{zh:`已暂存`,en:`Pinned`},copy:{zh:`复制 IP Bible`,en:`Copy IP Bible`},copied:{zh:`IP Bible 已复制到剪贴板。`,en:`IP Bible copied to clipboard.`},exportReady:{zh:`IP Bible 草稿已展开，可从下方文本框复制。`,en:`IP Bible draft opened below for copying.`},copyFailed:{zh:`浏览器阻止了剪贴板写入；请在本页重新点击复制。`,en:`The browser blocked clipboard access; click copy again on this page.`},generated:{zh:`已生成新的 artdrew 世界观 IP。`,en:`Generated a new artdrew universe IP.`},pinSaved:{zh:`本次会话已暂存该概念。`,en:`Concept pinned for this session.`},pinDuplicate:{zh:`这个概念已经在本次会话里。`,en:`This concept is already pinned in this session.`},ready:{zh:`准备生成下一套原创 IP。`,en:`Ready to generate the next original IP.`},closestMatch:{zh:`没有完全匹配项，已按最接近的方向生成。`,en:`No exact match; generated the closest matching direction.`},sourceFilter:{zh:`灵感来源`,en:`Source`},moodFilter:{zh:`情绪基调`,en:`Mood`},scoreTitle:{zh:`立项评分`,en:`Project Score`},sourceAll:{zh:`全部来源`,en:`All Sources`},sourceThreshold:{zh:`门缝门扣`,en:`Threshold`},sourceChiller:{zh:`冷柜封口`,en:`Chiller`},sourceRooftop:{zh:`屋顶信号`,en:`Rooftop`},moodAll:{zh:`全部情绪`,en:`All Moods`},moodComfort:{zh:`安全感`,en:`Comfort`},moodAnticipation:{zh:`期待感`,en:`Anticipation`},moodSignal:{zh:`远处回应`,en:`Signal`},scoreName:{zh:`命名独创性`,en:`Name`},scoreVisual:{zh:`角色识别度`,en:`Visual`},scoreStory:{zh:`故事深度`,en:`Story`},scoreProduct:{zh:`产品化能力`,en:`Product`},scoreSafety:{zh:`原型安全度`,en:`Prototype Safety`},core:{zh:`核心命题`,en:`Core Sentence`},background:{zh:`世界背景`,en:`World Background`},personality:{zh:`族群性格`,en:`Tribe Personality`},conflict:{zh:`冲突或欲望`,en:`Conflict / Desire`},collectorFeeling:{zh:`收藏情绪`,en:`Collector Feeling`},visualDNA:{zh:`Visual DNA`,en:`Visual DNA`},characterMatrix:{zh:`六款角色矩阵`,en:`Six-Figure Character Matrix`},loreLinks:{zh:`宇宙连接`,en:`Universe Links`},futureDrops:{zh:`后续 Drop`,en:`Future Drops`},promptSeed:{zh:`资产 Prompt 种子`,en:`Asset Prompt Seed`},exportTitle:{zh:`IP Bible 草稿`,en:`IP Bible Draft`},riskNotes:{zh:`原创性检查`,en:`Originality Screen`},pinnedTitle:{zh:`本次会话暂存`,en:`Session Pins`},pinnedEmpty:{zh:`还没有暂存概念。`,en:`No concepts pinned yet.`},loadPinned:{zh:`回看`,en:`Load`},biography:{zh:`传记`,en:`Biography`},roleBackground:{zh:`背景`,en:`Background`},desire:{zh:`想要`,en:`Desire`},weakness:{zh:`弱点`,en:`Weakness`},relationship:{zh:`关系`,en:`Relationship`},visualHooks:{zh:`造型钩子`,en:`Visual Hooks`},prototypeOnly:{zh:`浏览器原型内生成；商业化前仍需正式商标和视觉相似性检索。`,en:`Generated inside the browser prototype; formal trademark and visual-similarity clearance is still required before commercialization.`}},twilloop:{titleLine:{zh:`缝环团`,en:`Thread-loop repair residents`},lede:{zh:`诞生于深夜修补台的微型居民，由线轴、梭芯、拉链头、安全别针、布边条和空白洗标构成。它们用一圈圈缝线，把那些快松脱的小情绪重新打成可以收藏的环。`,en:`Tiny residents born on a late-night mending desk, made from spools, bobbins, zipper pulls, safety pins, fabric edges, and blank care labels. They loop loose feelings back into collectible little rituals.`},view:{zh:`查看设定`,en:`View Bible`},wish:{zh:`加入心愿`,en:`Add Wish`},wished:{zh:`已加入心愿`,en:`Wished`},specA:{zh:`6 款试缝阵容`,en:`6 test-stitch figures`},specB:{zh:`1% 隐藏线头`,en:`1% secret loose end`},specC:{zh:`PVC / 布料 / 金属配件`,en:`PVC / fabric / metal details`},idle:{zh:`当前状态：工作室预览，暂未开放抽盒。`,en:`Status: studio preview, not open for draws yet.`},wishedState:{zh:`当前状态：已记录本次浏览心愿，等待未来开放抽盒。`,en:`Status: wish noted for this browsing session, waiting for a future draw release.`},lineupTitle:{zh:`一族同源，不只是换色`,en:`One family, not just color swaps`},lineupCopy:{zh:`每款都保留线环身体、布面脸贴、双针孔眼和标签小脚，同时用不同金属件、缝线结构和修补动作拉开轮廓。`,en:`Every figure keeps the looped body, fabric face patch, twin stitch-dot eyes, and label feet, while different hardware, seam structures, and repair gestures separate the silhouettes.`}},draw:{title:{zh:`雾姆团盲盒抽盒机`,en:`Brumlet Blind Box Machine`},lede:{zh:`当前 LIVE 盲盒放在首屏。单抽试手气，十连追隐藏，所有结果会进入本地收藏墙。`,en:`The live blind box now leads the page. Try one draw, chase the secret with ten, and send every result to your local shelf.`},completion:{zh:`完成度`,en:`Completion`},stock:{zh:`今日余量`,en:`Stock`},wish:{zh:`心愿款`,en:`Wish`},pity:{zh:`距离保底`,en:`Pity left`},rules:{zh:`规则说明`,en:`Rules`},ruleText:{zh:`每次抽盒随机获得 1 个雾姆团角色`,en:`Each draw randomly opens 1 Brumlet figure`},stockSmall:{zh:`当前余量`,en:`stock left`},lever:{zh:`拉动抽盒机进行单抽`,en:`Pull the machine for one draw`},one:{zh:`单抽`,en:`Single`},ten:{zh:`十连`,en:`Ten Draw`},drawing:{zh:`开盒中`,en:`Opening`},soldOut:{zh:`已售罄`,en:`Sold out`},noSecret:{zh:`抽未出隐藏款`,en:`draws without a secret`},statusIdle:{zh:`等待开盒。单抽试手气，十连找雨后隐藏。`,en:`Waiting to open. Try a single draw or chase the rainy-night secret with ten.`},statusSoldOut:{zh:`今日余量已抽完。重置藏品可重新体验。`,en:`Today's stock is gone. Reset the shelf to try again.`},statusOpeningPrefix:{zh:`正在开启`,en:`Opening`},statusOpeningSuffix:{zh:`个 Brumlet 盲盒...`,en:`Brumlet blind boxes...`},statusWishHit:{zh:`心愿款命中`,en:`Wishlist hit`},statusSecret:{zh:`隐藏款出现了，已加入藏品墙。`,en:`A secret appeared and joined your shelf.`},statusRare:{zh:`本轮获得`,en:`This round opened`},statusRareSuffix:{zh:`个稀有款。`,en:`rare figures.`},statusCommon:{zh:`本轮都是常规款，重复款会转化为水珠。`,en:`This round was common; duplicates convert into ink.`},resultTitle:{zh:`抽中结果`,en:`Draw Result`},resultEmpty:{zh:`本轮结果会显示在这里`,en:`This round's result appears here`},allRecords:{zh:`全部记录`,en:`All Records`},reset:{zh:`重置藏品`,en:`Reset collection`},shelfTitle:{zh:`我的收藏`,en:`My Shelf`},shelfCopy:{zh:`已解锁角色会站上展示架`,en:`Unlocked figures stand on the display shelf`},viewAll:{zh:`查看全部`,en:`View All`},emptyWait:{zh:`等待开盒`,en:`Waiting`},emptyCollection:{zh:`当前筛选没有藏品`,en:`No figures match this filter`}},story:{seriesTitle:{zh:`当前系列：每一款都像一小段雨后天气`,en:`Current Drop: each figure feels like a tiny weather moment`},seriesCopy:{zh:`Brumlet 的每个角色都不是单纯换色：它们分别代表调暗、被雨声接住、靠近变暖、被光圈包住、准备出发和黑暗里还有光。`,en:`Brumlet figures are not color swaps: each one represents dimming down, being held by rain, warming up nearby, sitting inside a halo, getting ready to go, or finding light in the dark.`},bibleTitle:{zh:`每个角色先有情绪，再有造型`,en:`Every figure starts as a feeling, then becomes a shape`},bibleCopy:{zh:`雾姆团的核心不是“可爱小雾团”，而是一群努力保存雨后微光的小居民。抽到不同角色时，玩家得到的是一种情绪：被调暗、被接住、靠近变暖、准备出发，或者在黑暗里重新看见光。`,en:`Brumlet is not just a cute fog family. It is a group of small residents trying to preserve post-rain glimmers. Each draw gives the player a feeling: dimmed, held, warmed, ready to leave, or lit again in darkness.`},originTitle:{zh:`雨刚停下的一秒钟`,en:`The second after rain stops`},originCopy:{zh:`玻璃上的水珠、便利店门口的暖风和路灯倒影会慢慢聚在一起，凝成一群圆滚滚的雾姆居民。`,en:`Water drops on glass, warm air by a convenience-store door, and reflected streetlights gather into round little Brumlet residents.`},desireTitle:{zh:`把微光留久一点`,en:`Keep the glimmer a little longer`},desireCopy:{zh:`它们想把快散掉的雾、快熄掉的灯、快消失的倒影，变成可以被放上收藏架的小天气。`,en:`They want fading mist, sleepy lamps, and disappearing reflections to become small weather moments that can sit on a shelf.`},collectTitle:{zh:`收藏一段小情绪`,en:`Collect a small feeling`},collectCopy:{zh:`每一款都对应一种雨后情绪，收藏墙不是数量表，而是一张逐渐亮起来的夜间城市地图。`,en:`Each figure maps to a post-rain feeling, turning the shelf into a night-city map that slowly lights up.`},weakness:{zh:`弱点：`,en:`Weakness: `}},odds:{common:{zh:`常规款合计 66%`,en:`Common total 66%`},rare:{zh:`稀有款合计 33%`,en:`Rare total 33%`},secret:{zh:`隐藏款 1%`,en:`Secret 1%`},pity:{zh:`保底体验 30 抽`,en:`30-draw pity demo`}},collection:{title:{zh:`我的雾姆团藏品墙`,en:`My Brumlet Collection Wall`},filters:{all:{zh:`全部`,en:`All`},owned:{zh:`已拥有`,en:`Owned`},missing:{zh:`未解锁`,en:`Missing`},common:{zh:`常规`,en:`Common`},rare:{zh:`稀有`,en:`Rare`},secret:{zh:`隐藏`,en:`Secret`}},recentTitle:{zh:`最近开盒`,en:`Recent Opens`},recentCopy:{zh:`只保留最近 18 次记录`,en:`Only the latest 18 records are kept`},noHistory:{zh:`还没有开盒记录。`,en:`No draw history yet.`},secretOwned:{zh:`隐藏款已入柜`,en:`Secret in shelf`},secretMissing:{zh:`隐藏款未获得`,en:`Secret missing`}},account:{title:{zh:`artdrew 用户中心`,en:`artdrew Account Center`},introGuest:{zh:`登录后生成收藏者身份，把当前抽盒进度、心愿款和奖励资产汇总成一张会员档案。`,en:`Sign in to create a collector identity and summarize your draw progress, wishlist, and reward assets in one member profile.`},introUser:{zh:`会员档案会汇总当前抽盒进度、奖励资产、心愿款和最近记录。`,en:`Your member profile summarizes draw progress, reward assets, wishlist, and recent opens.`},create:{zh:`创建账户`,en:`Create Account`},login:{zh:`登录`,en:`Sign In`},logout:{zh:`退出登录`,en:`Sign Out`},viewShelf:{zh:`查看收藏室`,en:`View Shelf`},guest:{zh:`游客试玩档案`,en:`Guest Trial Profile`},guestMessage:{zh:`游客试玩中。创建账户后会生成本次体验的会员档案。`,en:`Guest trial active. Creating an account generates a member profile for this session.`},registerMessage:{zh:`创建收藏者身份，继续保存本次体验节奏。`,en:`Create a collector identity and keep this session's rhythm going.`},loginMessage:{zh:`欢迎回来，继续查看你的会员档案。`,en:`Welcome back. Continue into your member profile.`},profileCreatedPrefix:{zh:`欢迎，`,en:`Welcome, `},profileCreatedSuffix:{zh:`。你的 artdrew 会员档案已生成。`,en:`. Your artdrew member profile is ready.`},signedInPrefix:{zh:`已登录为 `,en:`Signed in as `},signedInSuffix:{zh:`。抽盒记录会汇总到账户面板。`,en:`. Draw records now summarize in your account panel.`},signedOutSuffix:{zh:` 已退出。当前仍可继续游客试玩。`,en:` signed out. You can keep playing as a guest.`},signedOutStatus:{zh:`已退出账户，藏品试玩状态仍保留在本机。`,en:`Signed out. Local collection trial state remains on this device.`},memberNo:{zh:`会员编号`,en:`Member No.`},contact:{zh:`联系方式`,en:`Contact`},joined:{zh:`加入日期`,en:`Joined`},progress:{zh:`雾姆团进度`,en:`Brumlet Progress`},progressAria:{zh:`收藏完成度`,en:`Collection completion`},currentWish:{zh:`当前心愿款：`,en:`Current wishlist: `},pityLeft:{zh:`；隐藏保底还差`,en:`; secret pity left `},pityUnit:{zh:` 抽。`,en:` draws.`},authLogin:{zh:`登录账户`,en:`Sign In`},authRegister:{zh:`创建账户`,en:`Create Account`},authTabs:{zh:`账户操作`,en:`Account actions`},registerTab:{zh:`注册`,en:`Register`},nickname:{zh:`昵称`,en:`Nickname`},nicknamePlaceholder:{zh:`例如 雨后收藏家`,en:`e.g. Rain Collector`},contactField:{zh:`邮箱或手机号`,en:`Email or phone`},accessCode:{zh:`体验码`,en:`Demo code`},note:{zh:`本阶段为静态原型，只生成本次会话身份，不保存密码。`,en:`This static prototype only creates an in-session identity and does not store passwords.`},submitRegister:{zh:`创建并进入`,en:`Create and Enter`},submitLogin:{zh:`登录并进入`,en:`Sign In and Enter`},needContact:{zh:`请输入邮箱或手机号。`,en:`Please enter an email or phone number.`},close:{zh:`关闭`,en:`Close`},closeWindow:{zh:`关闭登录窗口`,en:`Close sign-in window`}},loop:{title:{zh:`盲盒循环机制`,en:`Blind-Box Loop System`},intro:{zh:`目标、保底、任务和转化都明示。没有真实付费入口，只做原型体验。`,en:`Goals, pity, missions, and conversion are visible. There is no real payment entry, only a prototype loop.`},walletAria:{zh:`机制资产`,en:`Loop assets`},pityTitle:{zh:`隐藏保底轨道`,en:`Secret Pity Track`},pityCopy:{zh:`30 抽内必出隐藏款；已累计`,en:`A secret is guaranteed within 30 draws; currently`},pityCopyTail:{zh:`抽未出隐藏。`,en:`draws without a secret.`},wishTitle:{zh:`心愿火花`,en:`Wish Sparks`},wishSecret:{zh:`隐藏心愿走隐藏保底`,en:`Secret wishes use the secret pity track`},wishTrigger:{zh:`抽内触发`,en:`draws to trigger`},wishCopyTail:{zh:` 是当前心愿款。非隐藏心愿连续未中会进入保护。`,en:` is the current wishlist figure. Non-secret wishes enter protection after repeated misses.`},rewardTitle:{zh:`奖励工坊`,en:`Reward Workshop`},rewardCopy:{zh:`用任务获得的余光章补货，延长本地试玩池。`,en:`Use mission tokens to restock and extend the local trial pool.`},restockButton:{zh:`余光章补货`,en:`tokens restock`},restTitle:{zh:`节奏保护`,en:`Pace Guard`},restDone:{zh:`已完成一轮深度体验，可以先停一下再回来。`,en:`A full trial loop is complete. Take a pause and come back later.`},restMore:{zh:`再开`,en:`Open`},restMoreTail:{zh:`盒触发休息提醒。`,en:`more boxes to trigger a rest reminder.`},safeNote:{zh:`透明概率 / 可重置 / 无付费入口`,en:`Transparent odds / Resettable / No payment entry`},todayMissions:{zh:`今日任务`,en:`Today missions`},claimed:{zh:`已领取`,en:`Claimed`},claim:{zh:`领取`,en:`Claim`},progress:{zh:`进度`,en:`progress`},firstTitle:{zh:`开盒启动`,en:`First Open`},firstDetail:{zh:`开 1 个盲盒`,en:`Open 1 blind box`},tenTitle:{zh:`十连节奏`,en:`Ten-Draw Rhythm`},tenDetail:{zh:`累计开 10 个盲盒`,en:`Open 10 blind boxes total`},unlockTitle:{zh:`建立图鉴`,en:`Build the Catalog`},unlockDetail:{zh:`解锁 3 款角色`,en:`Unlock 3 figures`},wishMissionTitle:{zh:`锁定心愿`,en:`Set a Wish`},wishMissionDetail:{zh:`主动设置 1 次心愿款`,en:`Set a wishlist figure once`},duplicateTitle:{zh:`重复转化`,en:`Duplicate Conversion`},duplicateDetail:{zh:`获得 3 点重复水珠`,en:`Earn 3 duplicate ink`},missionDonePrefix:{zh:`任务「`,en:`Mission "`},missionDoneMiddle:{zh:`」完成，获得`,en:`" complete, earned`},missionDoneSuffix:{zh:`枚余光章。`,en:`afterglow tokens.`},restockedPrefix:{zh:`已补货`,en:`Restocked`},restockedSuffix:{zh:`盒，继续试玩。`,en:`boxes. Keep playing.`}}},c={"sleep-switch":{quote:`Dimming the rainy night until it stops stinging.`,personality:[`slow to warm`,`quiet`,`caretaker`],emotion:`gently dimmed`,story:`Sleep Switch woke inside a night light by the window, right before it went out. It dislikes glare and always lowers the night until everyone can still see one another.`,desire:`To guard every light that is about to fall asleep.`,weakness:`It worries about disturbing others and sometimes dims itself too far.`,relationship:`It reminds Signal Bead not to flash too fast and keeps one warm square of light for Blackout Bloom.`},"umbra-drop":{quote:`Opening a tiny umbrella to collect soft taps on glass.`,personality:[`sensitive`,`romantic`,`a little shy`],emotion:`held by rain sound`,story:`Umbra Drop fell from the edge of a clear umbrella. It stores tiny sounds from the windowpane inside its umbrella ribs and releases them slowly when the sky clears.`,desire:`To prove quiet rain sounds can be collected too.`,weakness:`It hides inside its umbrella shadow whenever praised.`,relationship:`It follows Halo Puddle and borrows its reflection to practice being less shy.`},ventling:{quote:`Breathing a puff of warm fog from the vent.`,personality:[`reliable`,`stubborn`,`slow moving`],emotion:`warmer when close`,story:`Ventling lives behind the grille by a convenience-store entrance. Its voice is a low breeze; the shell is cool and hard, but a warm mist keeps turning inside.`,desire:`To gather mist that has been blown apart.`,weakness:`It cares so much about direction that turning around takes a long time.`,relationship:`Sleep Switch often asks it to breathe warmth back into cooling window glass.`},"halo-puddle":{quote:`Turning a streetlight reflection into a small home.`,personality:[`gentle`,`unhurried`,`memory keeper`],emotion:`wrapped in a halo`,story:`Halo Puddle rose from the golden ring a streetlight left in a puddle. It lingers because every passerby leaves a little moving shadow behind.`,desire:`To keep brief reflections around a little longer.`,weakness:`It can sink into memories and has trouble saying goodbye.`,relationship:`It is Umbra Drop's practice mirror and Signal Bead's favorite station to pass.`},"signal-bead":{quote:`When the green light blinks, courage goes on the shoulder.`,personality:[`quick`,`brave`,`social`],emotion:`ready to go`,story:`Signal Bead came from a flickering crossing light. It carries a small orange bead to remind everyone that moving forward is allowed.`,desire:`To send one small signal before every hesitation.`,weakness:`It rushes to encourage others and sometimes misses that they are not ready yet.`,relationship:`It keeps trying to make Ventling move faster, while Halo Puddle keeps slowing it down.`},"blackout-bloom":{quote:`After the power goes out, one small window keeps glowing.`,personality:[`quiet`,`mysterious`,`patient`],emotion:`light remains in the dark`,story:`Blackout Bloom appears only when the whole street suddenly loses power. Its body is dark mist, but a tiny lit window on its chest says the night has not fully closed.`,desire:`To prove that even without electricity, a glimmer can bloom.`,weakness:`It fears strong light and fears being called too dark.`,relationship:`Sleep Switch softens its edges, while Umbra Drop hides it inside the rain sound.`}},l={"Pin Sash":{trait:`Pins loose little things before they fall away.`},"Zip Pull":{trait:`One pull opens the silence.`},"Button Guard":{trait:`Guards the last button like a tiny shield.`},"Bobbin Pack":{trait:`Carries a small spool of backup courage.`},"Thimble Hood":{trait:`Bounces softly even after being poked.`},"Loose End":{trait:`Appears when a feeling is about to unravel.`}},u={morrifolio:{cnName:`Paper-margin residents`,launchLabel:`Archived release`,lineupLabel:`6 page-edge figures`,description:`artdrew's first paper-margin themed series, preserving the collecting mood of indie illustration, zine tables, and exhibition labels.`,actionLabel:`View Archive`},brumlet:{cnName:`Rainy micro-weather residents`,launchLabel:`Live draw open`,lineupLabel:`6 figures + 1% secret`,description:`The current featured art-toy drop, formed from rain glass, streetlight halos, and warm vent mist.`,actionLabel:`Enter Draw`},twilloop:{cnName:`Thread-loop repair residents`,launchLabel:`Character bible complete`,lineupLabel:`6 figures + 1% loose-end secret`,description:`A new original art-toy family wound from midnight mending desks, spools, zipper pulls, and fabric-edge strips.`,actionLabel:`View Bible`},"glow-laundry":{cnName:`Night laundromat glimmers`,launchLabel:`World-building in queue`,lineupLabel:`Not revealed`,description:`A future city-glimmer series from coin laundromat steam, drum halos, and lost socks.`,actionLabel:`Remind Me`}},ee=[{id:`all`,label:s.forge.sourceAll},{id:`threshold`,label:s.forge.sourceThreshold},{id:`chiller`,label:s.forge.sourceChiller},{id:`rooftop`,label:s.forge.sourceRooftop}],d=[{id:`all`,label:s.forge.moodAll},{id:`comfort`,label:s.forge.moodComfort},{id:`anticipation`,label:s.forge.moodAnticipation},{id:`signal`,label:s.forge.moodSignal}],te={name:s.forge.scoreName,visual:s.forge.scoreVisual,story:s.forge.scoreStory,product:s.forge.scoreProduct,safety:s.forge.scoreSafety},f=[{id:`latchlit`,dropNo:`DROP 05`,name:`Latchlit`,cnName:`扣灯里`,source:`threshold`,mood:`comfort`,statusLabel:{zh:`GENERATED STUDIO`,en:`GENERATED STUDIO`},location:{zh:`余光街区的旧楼道与半亮门缝`,en:`Old corridors and half-lit door gaps in Afterglow Borough`},coreSentence:{zh:`扣灯里是一群从门扣、钥孔、门铃余光里醒来的门缝居民，把每一次犹豫要不要出门的瞬间做成可收藏的小守卫。`,en:`Latchlit are threshold residents awakened from latches, keyholes, and doorbell afterglow, turning every hesitant moment before leaving into collectible tiny guardians.`},background:{zh:`它们住在余光街区最窄的门缝层。商店打烊后，门扣会先响一下，钥孔会亮一粒很小的光，扣灯里就从那道缝里排队出来巡夜，确认每个想离开的人都带上了勇气。`,en:`They live in the narrow door-gap layer of Afterglow Borough. After closing time, latches click once and keyholes hold a pin of light; Latchlit residents file out to make sure everyone leaving carries a little courage.`},emotionalBase:{zh:`门口的犹豫、出发前的紧张、被守住的安全感`,en:`Threshold hesitation, pre-departure nerves, guarded safety`},tribePersonality:{zh:`谨慎、讲义气、行动前会反复检查，但真正出事时第一个冲到门口。`,en:`Careful, loyal, prone to checking twice before acting, yet first to reach the doorway when something happens.`},conflict:{zh:`它们想让每一道门都能开向新的地方，却又害怕门一旦关上，里面的人会被忘记。`,en:`They want every door to open toward somewhere new, but fear that once a door closes, the person inside may be forgotten.`},collectorFeeling:{zh:`抽到它像收到一个小小的出门护身符。`,en:`Opening one feels like receiving a tiny charm for leaving home.`},visualDNA:[{label:{zh:`主轮廓`,en:`Shape`},value:{zh:`短胖门扣身体、半圆铰链耳、钥孔肚窗`,en:`Squat latch body, half-round hinge ears, keyhole belly window`}},{label:{zh:`脸部`,en:`Face`},value:{zh:`两颗门铃光点眼，无嘴，表情靠倾斜角度变化`,en:`Two doorbell-dot eyes, no mouth, expression through tilt`}},{label:{zh:`材料`,en:`Materials`},value:{zh:`磨砂软胶、半透明门缝光、仿黄铜小件`,en:`Matte vinyl, translucent door-gap glow, faux brass details`}},{label:{zh:`道具`,en:`Props`},value:{zh:`钥牌、合页、小门铃、出口箭头`,en:`Key tags, hinges, tiny doorbells, exit arrows`}}],palette:[`#f8fbff`,`#111111`,`#16c8c2`,`#ff7c3d`,`#ffe08a`,`#b38b4d`],figures:[{name:`Hinge Peeper`,cnName:`合页探头`,rarity:`COMMON`,probability:24,color:`#16c8c2`,quote:{zh:`先探一下，再把门打开一点点。`,en:`Peek first, then open the door a little.`},personality:[{zh:`谨慎`,en:`careful`},{zh:`好奇`,en:`curious`},{zh:`反应快`,en:`quick`}],emotion:{zh:`准备出门`,en:`ready to leave`},biography:{zh:`合页探头出生在一扇反复开合的储物间门上。它负责先把脑袋从缝里伸出去，确认外面的光是不是足够温柔。`,en:`Hinge Peeper was born on a storage-room door that opened too many times. It sticks its head through the gap first to check whether the outside light is gentle enough.`},background:{zh:`它是扣灯里夜巡队的第一眼，总能发现被门框夹住的小担心。`,en:`It is the first glance of the Latchlit patrol and notices small worries caught in doorframes.`},desire:{zh:`想成为最可靠的第一步。`,en:`To become the most reliable first step.`},weakness:{zh:`看见太多可能性时，会卡在门缝里。`,en:`It can get stuck in the gap when it sees too many possibilities.`},relationship:{zh:`总被出口签推着往前，也会替禁入微光保密。`,en:`Exit Tab keeps nudging it forward, and it keeps No-Entry Glow's secrets.`},visualHooks:[{zh:`合页耳朵`,en:`hinge ears`},{zh:`钥孔肚窗`,en:`keyhole belly`},{zh:`探头姿势`,en:`peeking pose`}]},{name:`Keyhole Mop`,cnName:`钥孔拖尾`,rarity:`COMMON`,probability:22,color:`#b9f3ea`,quote:{zh:`把钥孔里的灰擦亮一点。`,en:`Wiping the keyhole until it glows.`},personality:[{zh:`细心`,en:`precise`},{zh:`慢性子`,en:`slow`},{zh:`爱收拾`,en:`tidy`}],emotion:{zh:`被重新看见`,en:`seen again`},biography:{zh:`钥孔拖尾从一粒旧钥匙灰里醒来，尾巴像一小束柔软拖把。它相信再暗的钥孔，只要擦一擦都会亮出方向。`,en:`Keyhole Mop woke from a speck of old key dust, with a tail like a tiny soft mop. It believes even the darkest keyhole can reveal direction after being wiped clean.`},background:{zh:`它维护楼道里的小光点，让迷路的角色能顺着门缝回家。`,en:`It maintains the corridor's little lights so lost residents can follow door gaps home.`},desire:{zh:`想让被忽略的入口重新有用。`,en:`To make ignored entrances useful again.`},weakness:{zh:`太爱打扫，偶尔把线索也擦掉。`,en:`It cleans so hard that it sometimes wipes away clues.`},relationship:{zh:`会向 Twilloop 借备用线，把自己的拖尾重新打结。`,en:`It borrows spare thread from Twilloop to retie its mop tail.`},visualHooks:[{zh:`软拖尾`,en:`soft mop tail`},{zh:`钥孔面罩`,en:`keyhole mask`},{zh:`半透明光尘`,en:`translucent light dust`}]},{name:`Doorbell Dot`,cnName:`门铃点`,rarity:`COMMON`,probability:20,color:`#ff7c3d`,quote:{zh:`叮一下，不是催你，是陪你。`,en:`One chime, not to rush you, but to stay with you.`},personality:[{zh:`外向`,en:`outgoing`},{zh:`有点急`,en:`impatient`},{zh:`很会打气`,en:`encouraging`}],emotion:{zh:`有人在等`,en:`someone is waiting`},biography:{zh:`门铃点是楼道里最亮的一颗橙色提示灯。它不喜欢沉默太久，所以会轻轻叮一下，提醒大家不是所有等待都可怕。`,en:`Doorbell Dot is the brightest orange indicator in the corridor. It dislikes long silence and gives a small chime to remind everyone that not all waiting is scary.`},background:{zh:`它负责把扣灯里和 Brumlet 的信号珠介绍给彼此。`,en:`It introduces the Latchlit crew to Brumlet's Signal Bead.`},desire:{zh:`想让等待变成一件轻一点的事。`,en:`To make waiting feel lighter.`},weakness:{zh:`紧张时会连续响，吵醒整条门缝。`,en:`When nervous, it rings repeatedly and wakes the entire door gap.`},relationship:{zh:`信号珠觉得它太吵，但还是会跟它交换闪烁节奏。`,en:`Signal Bead thinks it is too loud, but still trades blink rhythms with it.`},visualHooks:[{zh:`橙色门铃核心`,en:`orange doorbell core`},{zh:`小圆点眼`,en:`tiny dot eyes`},{zh:`响铃手势`,en:`chime gesture`}]},{name:`Exit Tab`,cnName:`出口签`,rarity:`RARE`,probability:17,color:`#ffe08a`,quote:{zh:`箭头不是命令，是一个可以试试的方向。`,en:`An arrow is not an order, just a direction worth trying.`},personality:[{zh:`果断`,en:`decisive`},{zh:`温柔`,en:`gentle`},{zh:`方向感强`,en:`directional`}],emotion:{zh:`终于迈出去`,en:`finally stepping out`},biography:{zh:`出口签从旧楼道的绿色出口牌边缘掉下来，却不再发绿光，而是变成了暖黄色。它说真正的出口应该先让人安心。`,en:`Exit Tab fell from the edge of an old corridor exit sign. Instead of glowing green, it turned warm yellow because it believes exits should calm people first.`},background:{zh:`它是扣灯里少数知道通往其他 drop 路线的角色。`,en:`It is one of the few Latchlit figures who knows routes to other drops.`},desire:{zh:`想画出一张没有压力的出发地图。`,en:`To draw a map for leaving without pressure.`},weakness:{zh:`遇到没有箭头的地方会短暂失语。`,en:`It goes briefly quiet in places without arrows.`},relationship:{zh:`会带合页探头去 Morrifolio 的页边档案室查旧地图。`,en:`It takes Hinge Peeper to Morrifolio's margin archive to read old maps.`},visualHooks:[{zh:`箭头背旗`,en:`arrow back tab`},{zh:`暖黄半透明边`,en:`warm translucent edge`},{zh:`贴纸脚`,en:`sticker feet`}]},{name:`Brass Nook`,cnName:`铜角守`,rarity:`RARE`,probability:16,color:`#b38b4d`,quote:{zh:`把门角守住，风就不会把话吹散。`,en:`Guard the door corner so the wind cannot scatter the words.`},personality:[{zh:`可靠`,en:`reliable`},{zh:`固执`,en:`stubborn`},{zh:`护短`,en:`protective`}],emotion:{zh:`被保护`,en:`protected`},biography:{zh:`铜角守是一枚旧黄铜护角化成的居民。它身体很重，站在门角时像一块小小镇纸，可以按住快被风吹走的话。`,en:`Brass Nook formed from an old brass corner guard. It is heavy enough to stand like a small paperweight and hold down words before the wind carries them away.`},background:{zh:`它负责看守余光街区的门角仓库，里面存着大家没说出口的短句。`,en:`It guards the corner warehouse, where unsaid short sentences are stored.`},desire:{zh:`想证明笨重也可以很温柔。`,en:`To prove heaviness can be gentle.`},weakness:{zh:`太怕松手，常常错过出发时机。`,en:`It fears letting go and often misses the right moment to leave.`},relationship:{zh:`钥孔拖尾会替它擦亮铜边，暗灯花会在它值夜时留一格光。`,en:`Keyhole Mop polishes its brass edge, and Blackout Bloom leaves it a square of light during night watch.`},visualHooks:[{zh:`黄铜护角壳`,en:`brass corner shell`},{zh:`重心低`,en:`low center of gravity`},{zh:`门角站姿`,en:`corner-guard stance`}]},{name:`No-Entry Glow`,cnName:`禁入微光`,rarity:`SECRET`,probability:1,color:`#111111`,quote:{zh:`不是所有门都要现在打开。`,en:`Not every door needs to open now.`},personality:[{zh:`神秘`,en:`mysterious`},{zh:`克制`,en:`restrained`},{zh:`会等待`,en:`patient`}],emotion:{zh:`被允许暂时不出发`,en:`allowed not to leave yet`},biography:{zh:`禁入微光只在门牌背后出现。它的身体像黑色软胶，胸口有一条很窄的红光，提醒大家停下也可能是一种保护。`,en:`No-Entry Glow appears behind door plates. Its body is black vinyl with a narrow red glow on the chest, reminding everyone that stopping can also protect you.`},background:{zh:`它知道余光街区所有暂时不能进入的房间，但从不炫耀。`,en:`It knows every room in Afterglow Borough that cannot be entered yet, but never boasts.`},desire:{zh:`想让拒绝也变得不刺耳。`,en:`To make refusal sound less harsh.`},weakness:{zh:`怕别人误会它只会阻止。`,en:`It fears being mistaken for someone who only blocks.`},relationship:{zh:`暗灯花理解它的黑，出口签理解它的停。`,en:`Blackout Bloom understands its darkness; Exit Tab understands its pause.`},visualHooks:[{zh:`黑色门牌披风`,en:`black doorplate cape`},{zh:`细红光胸线`,en:`thin red chest glow`},{zh:`隐藏门缝底座`,en:`hidden door-gap base`}]}],loreLinks:[{zh:`门铃点会和 Brumlet 的信号珠交换闪烁节奏，负责余光街区的出发信号。`,en:`Doorbell Dot trades blink rhythms with Brumlet's Signal Bead to manage departure signals.`},{zh:`钥孔拖尾会去 Twilloop 的修补台借线，给旧钥孔重新缝一圈光。`,en:`Keyhole Mop borrows thread from Twilloop's mending desk to stitch light around old keyholes.`},{zh:`出口签会向 Morrifolio 的页边档案室借旧地图，寻找通往下一批 drop 的门。`,en:`Exit Tab borrows old maps from Morrifolio's margin archive to find doors toward future drops.`}],futureDrops:[{zh:`DROP 05A：楼梯间回声，增加扶手、台阶和楼层牌居民。`,en:`DROP 05A: Stairwell Echo, adding handrail, step, and floor-plate residents.`},{zh:`DROP 05B：凌晨门牌，加入夜间配送、门牌反光和丢失便签。`,en:`DROP 05B: Midnight Doorplates, adding delivery-night, reflective plate, and lost-note variants.`}],promptSeed:{zh:`原创潮玩 IP Latchlit / 扣灯里，门扣、钥孔、门铃余光、旧楼道门缝，短胖门扣身体、半圆合页耳、两颗门铃点眼、钥孔肚窗、磨砂软胶和半透明门缝光；六款角色轮廓明显不同；包装只可出现 Latchlit；避免现有玩具 IP、真实品牌、平台标志、艺术家名字、水印和乱码文字。`,en:`Original art-toy IP Latchlit / 扣灯里, inspired by latches, keyholes, doorbell afterglow, old corridor door gaps; squat latch bodies, half-round hinge ears, two doorbell-dot eyes, keyhole belly windows, matte vinyl and translucent door-gap glow; six visibly distinct silhouettes; packaging may only show Latchlit; avoid existing toy IP, real brands, platform marks, artist names, watermarks, and gibberish text.`},riskNotes:[{zh:`名字为生造组合词，当前仅作浏览器原型候选。`,en:`Name is coined for prototype candidate use.`},{zh:`造型基于通用门扣、合页、钥孔和楼道物件，不引用现有角色或品牌版式。`,en:`Visuals use generic latch, hinge, keyhole, and corridor objects without named characters or brand packaging.`},{zh:`商业化前需检索第 28、16、25、35、41、9、42 类。`,en:`Before commercialization, search Nice classes 28, 16, 25, 35, 41, 9, and 42.`}],scores:{name:86,visual:91,story:88,product:87,safety:82}},{id:`frothseal`,dropNo:`DROP 06`,name:`Frothseal`,cnName:`沫封团`,source:`chiller`,mood:`anticipation`,statusLabel:{zh:`GENERATED STUDIO`,en:`GENERATED STUDIO`},location:{zh:`余光街区的便利店冷柜与未撕开的封口膜`,en:`Convenience-store chillers and unopened seals in Afterglow Borough`},coreSentence:{zh:`沫封团是一群从封口膜、气泡、瓶盖冷雾里冒出的软胶居民，收藏每一次“还没打开之前”的期待。`,en:`Frothseal are vinyl residents bubbling from seals, fizz, and cap chill, collecting the anticipation that exists right before something is opened.`},background:{zh:`便利店冷柜关灯后，没被撕开的封口膜会鼓起一点点，里面的气泡互相传消息。沫封团就在这些微小压力里诞生，负责把期待封存到第二天早上。`,en:`After the chiller lights go off, unopened seals puff up slightly and bubbles pass messages inside. Frothseal residents are born from that tiny pressure and keep anticipation sealed until morning.`},emotionalBase:{zh:`期待、忍住不拆、清凉又快要爆开的快乐`,en:`Anticipation, resisting the urge to open, cool fizzing joy`},tribePersonality:{zh:`活泼、嘴硬、喜欢制造仪式感，越紧张越会冒小泡。`,en:`Lively, stubborn, ritual-loving, and prone to bubbling when nervous.`},conflict:{zh:`它们想保护“还没有发生”的快乐，却总有人想立刻把封口撕开。`,en:`They want to protect joy before it happens, while everyone else wants to tear the seal immediately.`},collectorFeeling:{zh:`抽到它像听见冷柜里轻轻啵的一声。`,en:`Opening one feels like hearing a soft pop from a chiller.`},visualDNA:[{label:{zh:`主轮廓`,en:`Shape`},value:{zh:`鼓起的封口膜身体、圆泡泡肩、短瓶盖脚`,en:`Puffed seal body, round bubble shoulders, short cap feet`}},{label:{zh:`脸部`,en:`Face`},value:{zh:`两颗气泡眼，嘴巴藏在封口褶皱里`,en:`Two bubble eyes, mouth hidden in seal folds`}},{label:{zh:`材料`,en:`Materials`},value:{zh:`透明果冻软胶、冷雾渐变、银色封膜纹理`,en:`Clear jelly vinyl, chilled mist gradients, silver seal texture`}},{label:{zh:`道具`,en:`Props`},value:{zh:`封口拉片、瓶盖环、冷凝珠、吸管套`,en:`Pull tabs, cap rings, condensation beads, straw sleeves`}}],palette:[`#f8fbff`,`#111111`,`#d9f7ff`,`#16c8c2`,`#ff7c3d`,`#cfd7df`],figures:[{name:`Pop Seal`,cnName:`啵封贴`,rarity:`COMMON`,probability:24,color:`#16c8c2`,quote:{zh:`先别撕，我还在发光。`,en:`Don't peel yet. I am still glowing.`},personality:[{zh:`兴奋`,en:`excited`},{zh:`护短`,en:`protective`},{zh:`爱卖关子`,en:`teasing`}],emotion:{zh:`期待被保留`,en:`anticipation preserved`},biography:{zh:`啵封贴来自一张鼓起的透明封口膜。它总把自己贴得很紧，因为觉得期待最亮的时候就是还没拆开的时候。`,en:`Pop Seal came from a puffed transparent seal. It sticks tight because anticipation shines brightest before opening.`},background:{zh:`它是沫封团的开场角色，负责建立封口膜身体和泡泡眼语言。`,en:`It is Frothseal's opener, establishing the seal body and bubble-eye language.`},desire:{zh:`想让每次开封都像小型庆典。`,en:`To make every opening feel like a tiny ceremony.`},weakness:{zh:`太怕被撕开，会把自己贴到桌上。`,en:`It fears being peeled and sometimes sticks itself to the counter.`},relationship:{zh:`冷雾珠会帮它降温，银箔冠会嫌它太黏。`,en:`Chill Bead cools it down, while Foil Crown complains that it is too sticky.`},visualHooks:[{zh:`鼓起封膜`,en:`puffed seal`},{zh:`拉片小手`,en:`pull-tab hands`},{zh:`气泡眼`,en:`bubble eyes`}]},{name:`Straw Drift`,cnName:`吸管漂`,rarity:`COMMON`,probability:22,color:`#d9f7ff`,quote:{zh:`我把第一口留给慢一点的人。`,en:`I save the first sip for slower people.`},personality:[{zh:`温和`,en:`mild`},{zh:`拖延`,en:`delaying`},{zh:`会照顾人`,en:`caring`}],emotion:{zh:`不急着打开`,en:`not rushed open`},biography:{zh:`吸管漂住在一只没有拆封的吸管套里。它用透明小尾巴在冷雾上划线，替还没准备好的人争取一分钟。`,en:`Straw Drift lives inside an unopened straw sleeve. With its clear tail, it draws on chill mist and buys one more minute for anyone not ready.`},background:{zh:`它负责把冷柜里的节奏放慢，是沫封团最安静的常规款。`,en:`It slows the rhythm inside the chiller and is the quietest common figure.`},desire:{zh:`想证明慢一点不会让快乐变少。`,en:`To prove joy does not shrink when delayed.`},weakness:{zh:`一遇到催促就会漂到角落。`,en:`When rushed, it drifts into corners.`},relationship:{zh:`光晕潭喜欢它划出的冷雾线。`,en:`Halo Puddle likes the chilled lines it draws.`},visualHooks:[{zh:`吸管套披风`,en:`straw-sleeve cape`},{zh:`透明漂尾`,en:`clear drifting tail`},{zh:`冷雾底座`,en:`chill-mist base`}]},{name:`Cap Ripple`,cnName:`瓶盖涟`,rarity:`COMMON`,probability:20,color:`#ff7c3d`,quote:{zh:`转一下，快乐会有回声。`,en:`Twist once and joy echoes.`},personality:[{zh:`热闹`,en:`loud`},{zh:`乐观`,en:`optimistic`},{zh:`爱转圈`,en:`spinny`}],emotion:{zh:`快乐有回声`,en:`joy echoes`},biography:{zh:`瓶盖涟由瓶盖内侧一圈圈纹路变成。它跑起来会发出细小咔哒声，像把还没打开的快乐提前预演一遍。`,en:`Cap Ripple formed from the inner ridges of a bottle cap. It clicks while running, rehearsing unopened joy in advance.`},background:{zh:`它让沫封团的玩具轮廓从软膜扩展到硬质瓶盖件。`,en:`It expands Frothseal silhouettes from soft seals into harder cap parts.`},desire:{zh:`想把紧绷转成节奏。`,en:`To turn tension into rhythm.`},weakness:{zh:`太兴奋时会把自己拧太紧。`,en:`When overexcited, it twists itself too tight.`},relationship:{zh:`门铃点会跟它合奏，啵封贴负责喊停。`,en:`Doorbell Dot plays rhythm with it, while Pop Seal calls stop.`},visualHooks:[{zh:`瓶盖环肩`,en:`cap-ring shoulders`},{zh:`橙色涟漪纹`,en:`orange ripple ridges`},{zh:`咔哒站姿`,en:`clicking stance`}]},{name:`Foil Crown`,cnName:`银箔冠`,rarity:`RARE`,probability:17,color:`#cfd7df`,quote:{zh:`亮一点不是炫耀，是提醒快乐还没漏气。`,en:`Shining is not bragging; it means the joy has not leaked.`},personality:[{zh:`骄傲`,en:`proud`},{zh:`讲究`,en:`fussy`},{zh:`负责`,en:`responsible`}],emotion:{zh:`仪式感被照亮`,en:`ritual lit up`},biography:{zh:`银箔冠来自一片没有被撕坏的封口银膜。它把边缘折成皇冠，负责检查每个角色身上有没有漏气的小孔。`,en:`Foil Crown came from an unbroken silver seal. It folds its edge into a crown and checks everyone for tiny leaks.`},background:{zh:`它是沫封团的品质监督，增加金属反光和包装仪式感。`,en:`It is Frothseal's quality inspector, adding metallic shine and packaging ritual.`},desire:{zh:`想守住完整的第一眼。`,en:`To protect the complete first impression.`},weakness:{zh:`太在意完美，容易忽略已经很开心。`,en:`It cares so much about perfection that it misses existing happiness.`},relationship:{zh:`Morrifolio 的展签居民会帮它记录每次检查。`,en:`Morrifolio's label residents help record each inspection.`},visualHooks:[{zh:`银箔皇冠`,en:`foil crown`},{zh:`反光披片`,en:`reflective flakes`},{zh:`封膜权杖`,en:`seal wand`}]},{name:`Chill Bead`,cnName:`冷雾珠`,rarity:`RARE`,probability:16,color:`#8fd9d6`,quote:{zh:`冒泡之前，先深呼吸。`,en:`Before bubbling, take a cool breath.`},personality:[{zh:`镇定`,en:`calm`},{zh:`可靠`,en:`reliable`},{zh:`有点迟钝`,en:`slow`}],emotion:{zh:`被降温`,en:`cooled down`},biography:{zh:`冷雾珠从冷柜玻璃上的一颗水珠变成，身体里有缓慢滚动的蓝绿色气泡。它负责给快要爆开的期待降温。`,en:`Chill Bead formed from a bead on chiller glass, with slow blue-green bubbles inside. It cools anticipation before it bursts.`},background:{zh:`它和 Brumlet 同样懂得玻璃上的微天气，是两个系列的自然连接点。`,en:`It understands tiny weather on glass like Brumlet, making it a natural cross-drop bridge.`},desire:{zh:`想让兴奋不必立刻爆炸。`,en:`To let excitement exist without exploding immediately.`},weakness:{zh:`降温过头时，会把场面变得太安静。`,en:`When it cools too much, the room gets too quiet.`},relationship:{zh:`伞影滴会把它的冷雾声收进伞骨里。`,en:`Umbra Drop stores its chill-mist sound inside umbrella ribs.`},visualHooks:[{zh:`透明冷珠身体`,en:`clear chill-bead body`},{zh:`滚动气泡`,en:`rolling bubbles`},{zh:`冷柜玻璃底座`,en:`chiller-glass base`}]},{name:`Flat Spark`,cnName:`失泡火`,rarity:`SECRET`,probability:1,color:`#111111`,quote:{zh:`气泡没了，期待也可以留下来。`,en:`The fizz is gone, but anticipation can remain.`},personality:[{zh:`安静`,en:`quiet`},{zh:`敏感`,en:`sensitive`},{zh:`会自嘲`,en:`self-aware`}],emotion:{zh:`期待落地以后`,en:`after anticipation lands`},biography:{zh:`失泡火只在快乐开封后短暂出现。它身体深黑，胸口有一枚几乎看不见的小泡，像是在告诉大家：落空也有余光。`,en:`Flat Spark appears briefly after joy is opened. Its body is black, with one almost invisible bubble on its chest, saying even deflation has afterglow.`},background:{zh:`它承担隐藏款的情绪反转，让系列不只停在可爱和兴奋。`,en:`It carries the secret figure's emotional reversal, keeping the series from being only cute or excited.`},desire:{zh:`想证明快乐过去以后，仍然值得收藏。`,en:`To prove joy is still collectible after it passes.`},weakness:{zh:`怕别人觉得它扫兴。`,en:`It fears being called a mood killer.`},relationship:{zh:`暗灯花和禁入微光都愿意陪它坐在关灯后的冷柜旁。`,en:`Blackout Bloom and No-Entry Glow sit with it by the dark chiller.`},visualHooks:[{zh:`黑色失泡身体`,en:`black defizzed body`},{zh:`微小胸泡`,en:`tiny chest bubble`},{zh:`开封后纸屑底座`,en:`opened-seal base`}]}],loreLinks:[{zh:`冷雾珠和 Brumlet 的玻璃天气共享冷凝水路径。`,en:`Chill Bead shares condensation routes with Brumlet's glass weather.`},{zh:`银箔冠会请 Morrifolio 记录每次封口检查，形成上市前档案。`,en:`Foil Crown asks Morrifolio to record each seal inspection as pre-launch archive notes.`},{zh:`吸管漂会把未拆封的吸管套送到 Twilloop，做成修补台的临时标签。`,en:`Straw Drift sends unopened sleeves to Twilloop as temporary mending labels.`}],futureDrops:[{zh:`DROP 06A：冷柜雾灯，加入温度贴纸、冰霜脚印和夜班补货车。`,en:`DROP 06A: Chiller Foglight, adding temperature stickers, frost footprints, and night restock carts.`},{zh:`DROP 06B：开封以后，探索失泡火带领的隐藏情绪队。`,en:`DROP 06B: After Opening, following Flat Spark's hidden-emotion crew.`}],promptSeed:{zh:`原创潮玩 IP Frothseal / 沫封团，便利店冷柜、未撕封口膜、气泡、瓶盖冷雾，鼓起封口膜身体、气泡眼、短瓶盖脚、透明果冻软胶和银色封膜纹理；六款角色轮廓明显不同；包装只可出现 Frothseal；避免现有玩具 IP、真实品牌、平台标志、艺术家名字、水印和乱码文字。`,en:`Original art-toy IP Frothseal / 沫封团, inspired by convenience-store chillers, unopened seals, fizz, and cap chill; puffed seal bodies, bubble eyes, short cap feet, clear jelly vinyl, and silver seal textures; six visibly different silhouettes; packaging may only show Frothseal; avoid existing toy IP, real brands, platform marks, artist names, watermarks, and gibberish text.`},riskNotes:[{zh:`不使用真实饮料、便利店或包装品牌标志。`,en:`No real beverage, convenience-store, or packaging brand marks.`},{zh:`角色不是现有食品吉祥物，仅借用通用封口膜、气泡和冷柜材料。`,en:`Characters are not existing food mascots; they use generic seal, bubble, and chiller materials.`},{zh:`若商业化，需要进一步查验英文近似读音和同类玩具/文创商标。`,en:`For commercialization, run additional checks for English phonetic similarity and adjacent toy/stationery marks.`}],scores:{name:88,visual:89,story:86,product:92,safety:80}},{id:`rivetune`,dropNo:`DROP 07`,name:`Rivetune`,cnName:`铆音团`,source:`rooftop`,mood:`signal`,statusLabel:{zh:`GENERATED STUDIO`,en:`GENERATED STUDIO`},location:{zh:`余光街区屋顶的天线架、霓虹垫片和风里的静电`,en:`Rooftop antenna racks, neon washers, and wind static in Afterglow Borough`},coreSentence:{zh:`铆音团是一群从屋顶铆钉、天线静电和霓虹招牌背面诞生的声音居民，收藏那些说不清、却一直在背景里陪着你的杂音。`,en:`Rivetune are sound residents born from rooftop rivets, antenna static, and the backs of neon signs, collecting background noise that quietly keeps you company.`},background:{zh:`余光街区的屋顶有一排不用的天线架。风穿过铆钉孔时会发出很轻的调子，铆音团就顺着这些细声醒来，把没人注意的杂音拧成小小的护身频率。`,en:`Afterglow Borough has a row of unused rooftop antenna racks. Wind hums through rivet holes, waking Rivetune residents, who twist unnoticed noise into tiny protective frequencies.`},emotionalBase:{zh:`背景音、孤独屋顶、被杂音陪伴`,en:`Background sound, lonely rooftops, being accompanied by static`},tribePersonality:{zh:`酷、慢热、喜欢听别人没说完的话，外表金属感很强，内心其实很怕安静。`,en:`Cool, slow to warm, fond of unfinished sentences; metallic outside, quietly afraid of silence inside.`},conflict:{zh:`它们想把城市杂音调成可以安心入睡的频率，但每次霓虹熄灭，频率都会重新乱掉。`,en:`They want to tune city noise into a frequency safe enough for sleep, but every neon shutdown scrambles it again.`},collectorFeeling:{zh:`抽到它像把夜风调到刚好能听见。`,en:`Opening one feels like tuning night wind until it becomes audible.`},visualDNA:[{label:{zh:`主轮廓`,en:`Shape`},value:{zh:`铆钉头身体、天线环角、垫片脚`,en:`Rivet-head body, antenna loop horns, washer feet`}},{label:{zh:`脸部`,en:`Face`},value:{zh:`两颗频谱点眼，脸贴像小小音量表`,en:`Two spectrum-dot eyes, face patch like a tiny level meter`}},{label:{zh:`材料`,en:`Materials`},value:{zh:`金属漆软胶、半透明静电片、霓虹边光`,en:`Metallic vinyl, translucent static fins, neon rim light`}},{label:{zh:`道具`,en:`Props`},value:{zh:`天线、垫片、螺母、破旧招牌背板`,en:`Antennas, washers, nuts, worn sign backplates`}}],palette:[`#f8fbff`,`#111111`,`#235aa6`,`#16c8c2`,`#ff7c3d`,`#cfd7df`],figures:[{name:`Bolt Hum`,cnName:`螺声仔`,rarity:`COMMON`,probability:24,color:`#235aa6`,quote:{zh:`我拧紧一点，夜就不散。`,en:`I tighten a little so the night does not scatter.`},personality:[{zh:`可靠`,en:`reliable`},{zh:`固执`,en:`stubborn`},{zh:`护场`,en:`grounding`}],emotion:{zh:`被固定住`,en:`held in place`},biography:{zh:`螺声仔由屋顶天线架最旧的一颗螺母变成。它喜欢把快散掉的声音拧回原处，哪怕自己因此变得有点重。`,en:`Bolt Hum formed from the oldest nut on a rooftop antenna rack. It tightens scattered sounds back into place, even if that makes it heavy.`},background:{zh:`它是铆音团的基础款，建立金属软胶和频率眼的家族识别。`,en:`It is the core common figure, establishing metallic vinyl and frequency-dot eyes.`},desire:{zh:`想让每段背景音都有落点。`,en:`To give every background sound a place to land.`},weakness:{zh:`太紧绷时会把好听的颤音也拧没。`,en:`When too tense, it tightens away beautiful vibration too.`},relationship:{zh:`风口仔会把暖雾吹过它的螺纹，让声音松一点。`,en:`Ventling blows warm mist through its threads to loosen the sound.`},visualHooks:[{zh:`螺母身体`,en:`nut body`},{zh:`频谱点眼`,en:`spectrum eyes`},{zh:`重金属站姿`,en:`heavy metal stance`}]},{name:`Wire Wink`,cnName:`线闪`,rarity:`COMMON`,probability:22,color:`#16c8c2`,quote:{zh:`闪一下，就知道我还在线。`,en:`One blink means I am still online.`},personality:[{zh:`机灵`,en:`clever`},{zh:`调皮`,en:`playful`},{zh:`社交`,en:`social`}],emotion:{zh:`被远远回应`,en:`answered from afar`},biography:{zh:`线闪从一截没有接上的旧天线里跳出来。它不传真实消息，只负责在深夜给孤单的人回一个小小的闪。`,en:`Wire Wink jumped from an unplugged old antenna. It carries no real messages, only a small night blink for lonely people.`},background:{zh:`它让铆音团和 artdrew 其他系列保持轻微连线。`,en:`It keeps faint signal lines between Rivetune and other artdrew drops.`},desire:{zh:`想证明很远也可以互相回应。`,en:`To prove distance can still answer.`},weakness:{zh:`被忽略太久会乱闪。`,en:`If ignored too long, it blinks chaotically.`},relationship:{zh:`信号珠把它当成屋顶亲戚，常和它比赛谁先亮。`,en:`Signal Bead treats it like a rooftop cousin and races it to blink first.`},visualHooks:[{zh:`天线尾巴`,en:`antenna tail`},{zh:`一侧眨眼`,en:`one-side wink`},{zh:`青色静电片`,en:`teal static fin`}]},{name:`Antenna Bud`,cnName:`天线芽`,rarity:`COMMON`,probability:20,color:`#b9f3ea`,quote:{zh:`风来了，我就长高一点。`,en:`When wind arrives, I grow a little taller.`},personality:[{zh:`敏感`,en:`sensitive`},{zh:`乐观`,en:`hopeful`},{zh:`怕冷`,en:`cold-shy`}],emotion:{zh:`听见远处`,en:`hearing far away`},biography:{zh:`天线芽是一根旧天线顶端长出的软胶小芽。它能听见远处还没有落下的雨，也能听见别人不敢说完的半句话。`,en:`Antenna Bud is a vinyl sprout grown from the tip of an old antenna. It hears rain before it falls and half-sentences before they finish.`},background:{zh:`它负责给铆音团加入更轻的轮廓，平衡金属角色的重量。`,en:`It adds a lighter silhouette to balance the heavy metal figures.`},desire:{zh:`想把远处的声音养成花。`,en:`To grow distant sounds into flowers.`},weakness:{zh:`听得太多会发抖。`,en:`It trembles when it hears too much.`},relationship:{zh:`Umbra Drop 会帮它把过载的雨声收走。`,en:`Umbra Drop helps carry away overloaded rain sound.`},visualHooks:[{zh:`天线小芽`,en:`antenna sprout`},{zh:`柔软环角`,en:`soft loop horns`},{zh:`风向底座`,en:`wind-direction base`}]},{name:`Static Cape`,cnName:`静电披`,rarity:`RARE`,probability:17,color:`#ff7c3d`,quote:{zh:`披上杂音，就不怕太安静。`,en:`Wear static and silence gets less scary.`},personality:[{zh:`酷`,en:`cool`},{zh:`胆小`,en:`timid`},{zh:`会保护人`,en:`protective`}],emotion:{zh:`被杂音盖住`,en:`covered by static`},biography:{zh:`静电披从旧招牌背面的橙色电弧里出现。它把静电披在肩上，挡住突如其来的安静。`,en:`Static Cape appeared from orange arcs behind an old sign. It wears static over its shoulders to block sudden silence.`},background:{zh:`它是稀有款的动作担当，带来披风和电弧造型。`,en:`It is the rare action figure, adding cape and arc shapes.`},desire:{zh:`想给怕安静的人一层声音外套。`,en:`To give sound coats to people afraid of quiet.`},weakness:{zh:`紧张时会电到自己的披风角。`,en:`When nervous, it shocks the tip of its own cape.`},relationship:{zh:`睡眠开关会帮它把静电音量调低。`,en:`Sleep Switch helps lower the volume of its static.`},visualHooks:[{zh:`橙色静电披风`,en:`orange static cape`},{zh:`招牌背板纹`,en:`sign-back texture`},{zh:`电弧手势`,en:`arc gesture`}]},{name:`Neon Washer`,cnName:`霓垫片`,rarity:`RARE`,probability:16,color:`#cfd7df`,quote:{zh:`光从边缘漏出来，也算一首歌。`,en:`Light leaking from the edge is a song too.`},personality:[{zh:`讲究`,en:`precise`},{zh:`温柔`,en:`gentle`},{zh:`慢热`,en:`slow-warm`}],emotion:{zh:`边缘发亮`,en:`edges glowing`},biography:{zh:`霓垫片是一枚被霓虹照久了的金属垫片。它不唱旋律，只让身体边缘一圈圈亮起，像一首很安静的歌。`,en:`Neon Washer is a metal washer steeped in neon light. It does not sing melody; its edges glow in rings like a very quiet song.`},background:{zh:`它把铆音团的声音主题转成更可视化的发光边缘。`,en:`It translates Rivetune's sound theme into visible glowing edges.`},desire:{zh:`想把看不见的声音做成光圈。`,en:`To turn invisible sound into halos.`},weakness:{zh:`太久没有声音时会褪成普通银色。`,en:`Without sound for too long, it fades into plain silver.`},relationship:{zh:`光晕潭会借它的边缘练习新的倒影。`,en:`Halo Puddle borrows its rim to practice new reflections.`},visualHooks:[{zh:`发光垫片环`,en:`glowing washer ring`},{zh:`银色软胶`,en:`silver vinyl`},{zh:`霓虹边光`,en:`neon rim light`}]},{name:`Silent Frequency`,cnName:`静频花`,rarity:`SECRET`,probability:1,color:`#111111`,quote:{zh:`听不见的时候，我还在。`,en:`When you cannot hear it, I am still here.`},personality:[{zh:`神秘`,en:`mysterious`},{zh:`耐心`,en:`patient`},{zh:`孤独`,en:`solitary`}],emotion:{zh:`安静也有频率`,en:`silence has frequency`},biography:{zh:`静频花在所有天线同时沉默时开放。它没有明显的声音，却让周围的角色知道：安静不是空白，而是另一种频率。`,en:`Silent Frequency blooms when every antenna goes quiet. It has no obvious sound, yet teaches everyone that silence is not blank; it is another frequency.`},background:{zh:`它是铆音团的隐藏款，承担系列关于孤独和陪伴的最终答案。`,en:`It is Rivetune's secret figure, carrying the final answer about solitude and companionship.`},desire:{zh:`想让怕安静的人知道自己没有消失。`,en:`To show people afraid of silence that they have not disappeared.`},weakness:{zh:`只有在大家都不说话时才敢开花。`,en:`It dares to bloom only when everyone stops speaking.`},relationship:{zh:`暗灯花会在它开放时关掉最后一盏强光。`,en:`Blackout Bloom turns down the last harsh light when it blooms.`},visualHooks:[{zh:`黑色频率花瓣`,en:`black frequency petals`},{zh:`无声光环`,en:`silent halo`},{zh:`天线根系`,en:`antenna roots`}]}],loreLinks:[{zh:`铆音团住在 Brumlet 能看见的屋顶，负责把雨后信号调成背景音。`,en:`Rivetune lives on rooftops visible to Brumlet, tuning after-rain signals into background sound.`},{zh:`Twilloop 会用备用线固定天线芽，防止它被风吹歪。`,en:`Twilloop uses spare thread to brace Antenna Bud against wind.`},{zh:`Morrifolio 会把静频花的无声频谱印成页边小标。`,en:`Morrifolio prints Silent Frequency's quiet spectrum as margin tags.`}],futureDrops:[{zh:`DROP 07A：招牌背面，扩展霓虹、螺丝和维修贴纸。`,en:`DROP 07A: Behind the Sign, expanding neon, screws, and repair stickers.`},{zh:`DROP 07B：停播频道，加入老收音机、空频道和屋顶风筝线。`,en:`DROP 07B: Off-Air Channel, adding old radios, empty channels, and rooftop kite lines.`}],promptSeed:{zh:`原创潮玩 IP Rivetune / 铆音团，屋顶天线架、铆钉、霓虹招牌背面、风里的静电，铆钉头身体、天线环角、垫片脚、频谱点眼、金属漆软胶和半透明静电片；六款角色轮廓明显不同；包装只可出现 Rivetune；避免现有玩具 IP、真实品牌、平台标志、艺术家名字、水印和乱码文字。`,en:`Original art-toy IP Rivetune / 铆音团, inspired by rooftop antenna racks, rivets, backs of neon signs, and wind static; rivet-head bodies, antenna loop horns, washer feet, spectrum-dot eyes, metallic vinyl, translucent static fins; six visibly distinct silhouettes; packaging may only show Rivetune; avoid existing toy IP, real brands, platform marks, artist names, watermarks, and gibberish text.`},riskNotes:[{zh:`视觉来源是通用屋顶五金、天线和招牌背面，不采用真实电器品牌或音乐平台符号。`,en:`Visual sources are generic rooftop hardware, antennas, and sign backs, with no real electronics brands or music-platform symbols.`},{zh:`角色名避开知名乐队、设备型号和平台名称。`,en:`Character names avoid known bands, device models, and platform names.`},{zh:`商业使用前需补充视觉相似性和商标近似检索。`,en:`Commercial use needs additional visual-similarity and trademark searches.`}],scores:{name:90,visual:88,story:91,product:84,safety:83}}],p=e=>o(e===`COMMON`?s.labels.common:e===`RARE`?s.labels.rare:s.labels.secret),m=e=>{if(a===`zh`)return{title:e.cnName,subtitle:e.name,quote:e.quote,personality:e.personality,emotion:e.emotion,story:e.story,desire:e.desire,weakness:e.weakness,relationship:e.relationship,initial:e.cnName.slice(0,1)};let t=c[e.id];return{title:e.name,subtitle:e.cnName,quote:t.quote,personality:t.personality,emotion:t.emotion,story:t.story,desire:t.desire,weakness:t.weakness,relationship:t.relationship,initial:e.name.slice(0,1)}},ne=e=>a===`zh`?e:{...e,...u[e.id]},re=(e,t)=>a===`zh`?t:l[e]?.trait??t,ie=()=>f[j]??f[0],ae=()=>{let e=f.filter(e=>(M===`all`||e.source===M)&&(N===`all`||e.mood===N));if(e.length)return{candidates:e,exact:!0};let t=f.filter(e=>M===`all`||e.source===M);if(t.length)return{candidates:t,exact:!1};let n=f.filter(e=>N===`all`||e.mood===N);return n.length?{candidates:n,exact:!1}:{candidates:f,exact:!1}},oe=()=>{let{candidates:e,exact:t}=ae();if(e.length<=1)return j=f.findIndex(t=>t.id===e[0]?.id),j<0&&(j=0),t;let n=ie().id,r=e[Math.floor(Math.random()*e.length)]??e[0];for(;r.id===n;)r=e[Math.floor(Math.random()*e.length)]??e[0];let i=f.findIndex(e=>e.id===r.id);return i>=0&&(j=i),t},se=e=>Math.round(Object.values(e).reduce((e,t)=>e+t,0)/Object.values(e).length),ce=e=>o(ee.find(t=>t.id===e)?.label??s.forge.sourceAll),le=e=>o(d.find(t=>t.id===e)?.label??s.forge.moodAll),ue=e=>ee.some(t=>t.id===e),de=e=>d.some(t=>t.id===e),fe=e=>{M=e;let{candidates:t,exact:n}=ae();j=Math.max(0,f.findIndex(e=>e.id===t[0]?.id)),I=``,F=o(n?s.forge.ready:s.forge.closestMatch),Q()},pe=e=>{N=e;let{candidates:t,exact:n}=ae();j=Math.max(0,f.findIndex(e=>e.id===t[0]?.id)),I=``,F=o(n?s.forge.ready:s.forge.closestMatch),Q()},me=(e,t,n)=>e.map(e=>`
        <button class="forge-filter-chip ${e.id===t?`active`:``}" type="button" data-${n}="${e.id}" aria-pressed="${e.id===t}">
          ${o(e.label)}
        </button>
      `).join(``),he=e=>Object.entries(e).map(([e,t])=>`
        <span>
          <strong>${o(te[e])}</strong>
          <i aria-hidden="true"><b style="width:${t}%"></b></i>
          <em>${t}</em>
        </span>
      `).join(``),ge=e=>e.map(e=>o(e)),_e=e=>e===`COMMON`?0:e===`RARE`?1:2,ve=e=>[`# ${e.name} / ${e.cnName}`,``,`- Drop: ${e.dropNo}`,`- Status: ${o(e.statusLabel)}`,`- Location: ${o(e.location)}`,`- Source: ${ce(e.source)}`,`- Mood: ${le(e.mood)}`,`- Core Sentence: ${o(e.coreSentence)}`,`- Emotional Base: ${o(e.emotionalBase)}`,`- Tribe Personality: ${o(e.tribePersonality)}`,`- Conflict / Desire: ${o(e.conflict)}`,`- Collector Feeling: ${o(e.collectorFeeling)}`,``,`## Project Score`,`- Average: ${se(e.scores)}`,...Object.entries(e.scores).map(([e,t])=>`- ${o(te[e])}: ${t}`),``,`## World Background`,o(e.background),``,`## Visual DNA`,...e.visualDNA.map(e=>`- ${o(e.label)}: ${o(e.value)}`),``,`## Character Matrix`,...e.figures.slice().sort((e,t)=>_e(e.rarity)-_e(t.rarity)).flatMap(e=>[`### ${e.name} / ${e.cnName}`,`- Rarity: ${e.rarity}`,`- Probability: ${e.probability}%`,`- Personality: ${ge(e.personality).join(` / `)}`,`- Core Emotion: ${o(e.emotion)}`,`- Biography: ${o(e.biography)}`,`- Background: ${o(e.background)}`,`- Desire: ${o(e.desire)}`,`- Weakness: ${o(e.weakness)}`,`- Relationship: ${o(e.relationship)}`,`- Visual Hooks: ${ge(e.visualHooks).join(` / `)}`,`- Quote: ${o(e.quote)}`,``]),`## Shared Universe Links`,...e.loreLinks.map(e=>`- ${o(e)}`),``,`## Future Drops`,...e.futureDrops.map(e=>`- ${o(e)}`),``,`## Asset Prompt Seed`,o(e.promptSeed),``,`## Originality Screen`,...e.riskNotes.map(e=>`- ${o(e)}`),`- ${o(s.forge.prototypeOnly)}`].join(`
`),ye=async e=>{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0;let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,`true`),t.style.position=`fixed`,t.style.left=`-9999px`,document.body.append(t),t.select();let n=document.execCommand(`copy`);return t.remove(),n},be=`brumlet-collection-v1`,xe=`brumlet-history-v1`,Se=`brumlet-pity-v1`,Ce=`brumlet-wishlist-v1`,we=`brumlet-loop-v1`,Te=48,Ee=30,h=12,De=5,Oe=5,ke=[{id:`all`,label:`全部`},{id:`owned`,label:`已拥有`},{id:`missing`,label:`未解锁`},{id:`common`,label:`常规`},{id:`rare`,label:`稀有`},{id:`secret`,label:`隐藏`}],Ae=()=>{try{return JSON.parse(localStorage.getItem(be)??`{}`)}catch{return{}}},je=()=>{try{return JSON.parse(localStorage.getItem(xe)??`[]`)}catch{return[]}},Me=()=>{let e={tokens:0,duplicateInk:0,wishSparks:0,stockBoost:0,wishSet:!1,claimedMissions:[]};try{let t=JSON.parse(localStorage.getItem(we)??`{}`);return{tokens:Number.isFinite(t.tokens)?Number(t.tokens):e.tokens,duplicateInk:Number.isFinite(t.duplicateInk)?Number(t.duplicateInk):e.duplicateInk,wishSparks:Number.isFinite(t.wishSparks)?Number(t.wishSparks):e.wishSparks,stockBoost:Number.isFinite(t.stockBoost)?Number(t.stockBoost):e.stockBoost,wishSet:!!t.wishSet,claimedMissions:Array.isArray(t.claimedMissions)?t.claimedMissions:[]}}catch{return e}},Ne=e=>{localStorage.setItem(be,JSON.stringify(e))},Pe=e=>{localStorage.setItem(xe,JSON.stringify(e.slice(-18)))},g=()=>{localStorage.setItem(we,JSON.stringify(x))},_=Ae(),v=je(),y=Number(localStorage.getItem(Se)??0),b=localStorage.getItem(Ce)??`blackout-bloom`,x=Me(),S=[],C=`all`,w=!1,T=null,E=o(s.draw.statusIdle),D=null,O=`login`,k=!1,A=o(s.account.guestMessage),j=Math.floor(Math.random()*f.length),M=`all`,N=`all`,P=[],F=``,I=``,Fe=document.querySelector(`#app`);if(!Fe)throw Error(`App root not found`);Fe.innerHTML=`
  <main class="site-shell">
    <nav class="topbar" aria-label="Primary">
      <a class="brand" href="#draw" aria-label="artdrew home">
        <span class="brand-mark" aria-hidden="true">
          <img src="assets/artdrew-logo.svg" alt="" />
        </span>
        <span class="brand-lockup">
          <span class="brand-name">artdrew</span>
          <span class="brand-caption">ART TOY DROP</span>
        </span>
      </a>
      <div class="nav-links">
        <a class="active" href="#draw">抽盒机</a>
        <a href="#drops">上新</a>
        <a href="#forge">生成器</a>
        <a href="#twilloop">新IP</a>
        <a href="#story">故事</a>
        <a href="#collection">收藏室</a>
        <a href="#odds">机制</a>
        <a href="#account">账户</a>
      </div>
      <div class="nav-actions" aria-label="玩家资产">
        <div class="language-switch" role="group" aria-label="语言 / Language">
          <button class="active" type="button" data-language="zh" aria-pressed="true">中</button>
          <button type="button" data-language="en" aria-pressed="false">EN</button>
        </div>
        <div class="wallet-pill">
          <span class="wallet-icon ticket" aria-hidden="true"></span>
          <strong id="walletInk">0</strong>
          <button class="wallet-plus" type="button" aria-label="重复水珠说明">+</button>
        </div>
        <div class="wallet-pill">
          <span class="wallet-icon coin" aria-hidden="true"></span>
          <strong id="walletToken">0</strong>
          <button class="wallet-plus" type="button" aria-label="余光章说明">+</button>
        </div>
        <span class="bag-mark" aria-hidden="true"></span>
        <button class="account-chip" id="accountButton" type="button" aria-label="打开用户账户">
          <span class="avatar-mark" id="walletCompletion" aria-label="已解锁 0 款">0/6</span>
          <span class="account-chip-label" id="accountLabel">登录</span>
        </button>
      </div>
    </nav>

    <section class="hero" id="top">
      <div class="hero-copy">
        <p class="drop-label">DROP 02 / LIVE ON ARTDREW</p>
        <h1>Brumlet</h1>
        <p class="hero-cn">雾姆团</p>
        <p class="hero-slogan">Small weather. Big feelings.</p>
        <p class="hero-lede">Brumlet / 雾姆团已进入 artdrew 的上新板。雨后玻璃、路灯光晕和通风口热气里凝成的小雾团，每一只都收藏一种刚停雨时才会出现的城市微光。</p>
        <div class="hero-actions">
          <a class="button primary" href="#draw">立即抽盒</a>
          <a class="button ghost" href="#drops">查看上新</a>
        </div>
        <div class="drop-stats" aria-label="Drop stats">
          <span><strong>3</strong> 常规款</span>
          <span><strong>2</strong> 稀有款</span>
          <span><strong>1</strong> 隐藏款</span>
          <span><strong id="heroCompletion">0/6</strong> 已收集</span>
          <span><strong id="heroStock">48</strong> 今日余量</span>
        </div>
        <div class="announce-strip" aria-label="公告">
          <span>公告</span>
          <p>artdrew 当前 LIVE DROP：Brumlet / 雾姆团。当前心愿款：<strong id="heroWish">暗灯花</strong></p>
        </div>
      </div>
      <div class="hero-media">
        <img src="assets/brumlet-hero.png" alt="Brumlet 雾姆团盲盒与原创雨后潮玩角色" />
        <span class="hero-tape one" aria-hidden="true"></span>
        <span class="hero-tape two" aria-hidden="true"></span>
      </div>
    </section>

    <section class="drop-board-section" id="drops">
      <div class="drop-board-head">
        <div>
          <p class="eyebrow">DROP BOARD</p>
          <h2>陆续上架的潮流艺术玩具</h2>
        </div>
        <p>这里是 artdrew 的发售板：已上架系列会保留档案，当前 LIVE 系列可以直接试玩抽盒，后续系列会在角色、包装和概率机制完成后开放。</p>
      </div>
      <div class="drop-board" id="dropBoard"></div>
    </section>

    <section class="forge-section" id="forge">
      <div class="forge-shell">
        <div class="forge-copy">
          <p class="eyebrow">IP UNIVERSE FORGE</p>
          <h2>自动生成新的潮玩 IP</h2>
          <p>这个工作台会从 artdrew 的共同世界观里自动生成一套可立项的潮玩 IP：名字、族群性格、世界背景、六款角色、关系网、后续 drop 和资产 prompt 都一次成型。</p>
        </div>
        <div class="forge-controls" aria-label="IP 生成器操作">
          <div class="forge-filter-set">
            <span data-forge-filter-label="source">灵感来源</span>
            <div class="forge-filter-buttons" id="forgeSourceFilters"></div>
          </div>
          <div class="forge-filter-set">
            <span data-forge-filter-label="mood">情绪基调</span>
            <div class="forge-filter-buttons" id="forgeMoodFilters"></div>
          </div>
          <button class="button primary" id="forgeGenerateButton" type="button">生成新 IP</button>
          <button class="button ghost" id="forgePinButton" type="button">暂存本次概念</button>
          <button class="button dark" id="forgeCopyButton" type="button">复制 IP Bible</button>
          <p class="forge-status" id="forgeStatus">准备生成下一套原创 IP。</p>
        </div>
      </div>

      <div class="forge-layout">
        <article class="forge-main" id="forgeMain"></article>
        <aside class="forge-side">
          <article class="forge-universe" id="forgeUniverse"></article>
          <article class="forge-pinned" id="forgePinned"></article>
        </aside>
      </div>

      <div class="forge-character-head">
        <div>
          <p class="eyebrow">CHARACTER MATRIX</p>
          <h3>六款角色矩阵</h3>
        </div>
        <p>浏览器原型内生成；商业化前仍需正式商标和视觉相似性检索。</p>
      </div>
      <div class="forge-character-grid" id="forgeCharacters"></div>
    </section>

    <section class="twilloop-section" id="twilloop">
      <div class="twilloop-hero">
        <div class="twilloop-copy">
          <p class="drop-label twilloop-label">DROP 03 / STUDIO PREVIEW</p>
          <h2>Twilloop</h2>
          <p class="twilloop-cn">缝环团</p>
          <p class="twilloop-slogan">Loose threads, tiny repair rituals.</p>
          <p>诞生于深夜修补台的微型居民，由线轴、梭芯、拉链头、安全别针、布边条和空白洗标构成。它们用一圈圈缝线，把那些快松脱的小情绪重新打成可以收藏的环。</p>
          <div class="twilloop-actions">
            <a class="button primary" href="#twilloop-lineup">查看设定</a>
            <button class="button ghost" id="twilloopWishButton" type="button">加入心愿</button>
          </div>
          <div class="twilloop-specs" aria-label="Twilloop product specs">
            <span>6 款试缝阵容</span>
            <span>1% 隐藏线头</span>
            <span>PVC / 布料 / 金属配件</span>
          </div>
          <p class="twilloop-state" id="twilloopWishState">当前状态：工作室预览，暂未开放抽盒。</p>
        </div>
        <div class="twilloop-media">
          <img src="assets/twilloop-hero.png" alt="Twilloop 缝环团原创线环潮玩与盲盒包装" />
        </div>
      </div>

      <div class="twilloop-lineup" id="twilloop-lineup">
        <div class="twilloop-lineup-copy">
          <p class="eyebrow">IP PREVIEW</p>
          <h3>一族同源，不只是换色</h3>
          <p>每款都保留线环身体、布面脸贴、双针孔眼和标签小脚，同时用不同金属件、缝线结构和修补动作拉开轮廓。</p>
        </div>
        <div class="twilloop-lineup-image">
          <img src="assets/twilloop-lineup.png" alt="Twilloop 缝环团六款原创角色阵容" />
        </div>
        <div class="twilloop-card-grid">
          ${r.map(e=>`
                <article class="twilloop-card ${e.rarity.toLowerCase()}" style="--twilloop-color: ${e.color}">
                  <span>${e.rarity}</span>
                  <h4>${e.cnName}</h4>
                  <p>${e.name}</p>
                  <small>${e.trait}</small>
                </article>
              `).join(``)}
        </div>
      </div>
    </section>

    <section class="draw-section" id="draw">
      <div class="section-heading">
        <p class="eyebrow">BLIND BOX</p>
        <h2>雾姆团抽盒机</h2>
        <p class="draw-lede">当前 LIVE 盲盒放在首屏。单抽试手气，十连追隐藏，所有结果会进入本地收藏墙。</p>
        <div class="section-meter" aria-label="抽盒状态">
          <span>完成度 <strong id="drawCompletion">0%</strong></span>
          <span>今日余量 <strong id="drawStock">48</strong></span>
          <span>心愿款 <strong id="wishName">暗灯花</strong></span>
          <span>距离保底 <strong id="pityRemain">30</strong></span>
        </div>
      </div>

      <div class="draw-layout">
        <div class="machine" aria-live="polite">
          <div class="machine-top">
            <span class="status-dot"></span>
            <span>LIVE DROP</span>
            <strong>02</strong>
          </div>
          <div class="machine-console">
            <aside class="machine-rules">
              <span>规则说明</span>
              <p>每次抽盒随机获得 1 个雾姆团角色</p>
              <strong id="machineStock">48</strong>
              <small>当前余量</small>
            </aside>
            <div class="machine-window">
              <div class="screen-label">
                <span>BOX VIEW</span>
                <strong>Brumlet</strong>
              </div>
              <div class="box-stage" id="boxStage">
                <div class="burst-layer" aria-hidden="true">
                  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
                <div class="blind-box" id="blindBox">
                  <span class="question">?</span>
                </div>
                <div class="stage-shadow"></div>
              </div>
            </div>
            <button class="machine-lever" id="leverButton" type="button" aria-label="拉动抽盒机进行单抽">
              <span></span>
              <strong>PULL</strong>
            </button>
          </div>
          <div class="draw-actions">
            <button class="button primary" id="drawOneButton" type="button">单抽</button>
            <button class="button dark" id="drawTenButton" type="button">十连</button>
          </div>
          <p class="stock-line"><span id="pityCount">0</span> 抽未出隐藏款</p>
          <div class="wish-card" id="wishCard"></div>
          <p class="draw-status" id="drawStatus">等待开盒。单抽试手气，十连找雨后隐藏。</p>
        </div>

        <div class="result-panel">
          <div class="panel-head">
            <div>
              <span>抽中结果</span>
              <p id="resultSummary">本轮结果会显示在这里</p>
            </div>
            <a class="panel-link" href="#collection">全部记录</a>
            <button class="icon-button" id="resetButton" type="button" aria-label="重置藏品">↺</button>
          </div>
          <div class="result-grid" id="resultGrid"></div>
        </div>
      </div>

      <div class="shelf-preview">
        <div class="panel-head">
          <div>
            <span>我的收藏</span>
            <p>已解锁角色会站上展示架</p>
          </div>
          <a class="panel-link" href="#collection">查看全部</a>
        </div>
        <div class="shelf-row" id="shelfPreview"></div>
      </div>

      <div class="loop-panel" id="loopPanel" aria-label="盲盒循环机制"></div>
    </section>

    <section class="series-section" id="series">
      <div class="series-copy">
        <p class="eyebrow">CURRENT DROP</p>
        <h2>当前系列：每一款都像一小段雨后天气</h2>
        <p>Brumlet 的每个角色都不是单纯换色：它们分别代表调暗、被雨声接住、靠近变暖、被光圈包住、准备出发和黑暗里还有光。</p>
      </div>
      <img src="assets/brumlet-lineup.png" alt="Brumlet 雾姆团雨后居民第一版全套角色" />
    </section>

    <section class="story-section" id="story">
      <div class="story-intro">
        <p class="eyebrow">IP BIBLE</p>
        <h2>每个角色先有情绪，再有造型</h2>
        <p>雾姆团的核心不是“可爱小雾团”，而是一群努力保存雨后微光的小居民。抽到不同角色时，玩家得到的是一种情绪：被调暗、被接住、靠近变暖、准备出发，或者在黑暗里重新看见光。</p>
      </div>
      <div class="story-pillars">
        <article>
          <span>ORIGIN</span>
          <h3>雨刚停下的一秒钟</h3>
          <p>玻璃上的水珠、便利店门口的暖风和路灯倒影会慢慢聚在一起，凝成一群圆滚滚的雾姆居民。</p>
        </article>
        <article>
          <span>DESIRE</span>
          <h3>把微光留久一点</h3>
          <p>它们想把快散掉的雾、快熄掉的灯、快消失的倒影，变成可以被放上收藏架的小天气。</p>
        </article>
        <article>
          <span>COLLECT</span>
          <h3>收藏一段小情绪</h3>
          <p>每一款都对应一种雨后情绪，收藏墙不是数量表，而是一张逐渐亮起来的夜间城市地图。</p>
        </article>
      </div>
      <div class="emotion-map" id="emotionMap"></div>
    </section>

    <section class="rarity-section" id="odds" aria-label="概率">
      <div class="rarity-strip">
        <span>常规款合计 66%</span>
        <span>稀有款合计 33%</span>
        <span>隐藏款 1%</span>
        <span>保底体验 30 抽</span>
      </div>
      <div class="odds-grid" id="oddsGrid"></div>
    </section>

    <section class="collection-section" id="collection">
      <div class="section-heading">
        <p class="eyebrow">MY SHELF</p>
        <h2>我的雾姆团藏品墙</h2>
        <div class="collection-summary" id="collectionSummary"></div>
      </div>
      <div class="collection-tools" aria-label="藏品筛选">
        ${ke.map(e=>`
              <button class="filter-chip" type="button" data-filter="${e.id}" aria-pressed="false">
                ${e.label}
              </button>
            `).join(``)}
      </div>
      <div class="collection-grid" id="collectionGrid"></div>
      <div class="recent-panel">
        <div class="panel-head">
          <span>最近开盒</span>
          <p>只保留最近 18 次记录</p>
        </div>
        <div class="recent-grid" id="recentGrid"></div>
      </div>
    </section>

    <section class="account-section" id="account">
      <div class="account-grid">
        <div class="account-hero-card">
          <p class="eyebrow">USER SYSTEM</p>
          <h2>artdrew 用户中心</h2>
          <p id="accountIntro">登录后生成收藏者身份，把当前抽盒进度、心愿款和奖励资产汇总成一张会员档案。</p>
          <div class="account-actions">
            <button class="button primary" id="accountPrimaryAction" type="button" data-auth-open="register">创建账户</button>
            <button class="button ghost" id="accountSecondaryAction" type="button" data-auth-open="login">登录</button>
          </div>
        </div>
        <div class="account-dashboard" id="accountDashboard"></div>
      </div>
    </section>
  </main>

  <div class="auth-modal hidden" id="authModal" role="dialog" aria-modal="true" aria-labelledby="authTitle">
    <button class="auth-backdrop" type="button" data-auth-close aria-label="关闭登录窗口"></button>
    <div class="auth-dialog" id="authDialog"></div>
  </div>
`;var Ie=document.querySelector(`#resultGrid`),Le=document.querySelector(`#collectionGrid`),Re=document.querySelector(`#recentGrid`),L=document.querySelector(`#blindBox`),R=document.querySelector(`#boxStage`),ze=document.querySelector(`#pityCount`),Be=document.querySelector(`#pityRemain`),Ve=document.querySelector(`#heroCompletion`),He=document.querySelector(`#drawCompletion`),Ue=document.querySelector(`#heroWish`),We=document.querySelector(`#wishName`),Ge=document.querySelector(`#heroStock`),Ke=document.querySelector(`#drawStock`),qe=document.querySelector(`#machineStock`),Je=document.querySelector(`#walletInk`),Ye=document.querySelector(`#walletToken`),Xe=document.querySelector(`#walletCompletion`),Ze=document.querySelector(`#drawStatus`),Qe=document.querySelector(`#resultSummary`),$e=document.querySelector(`#collectionSummary`),et=document.querySelector(`#wishCard`),tt=document.querySelector(`#oddsGrid`),z=document.querySelector(`#loopPanel`),nt=document.querySelector(`#shelfPreview`),rt=document.querySelector(`#dropBoard`),it=document.querySelector(`#emotionMap`),at=document.querySelector(`#forgeMain`),ot=document.querySelector(`#forgeUniverse`),st=document.querySelector(`#forgePinned`),ct=document.querySelector(`#forgeCharacters`),lt=document.querySelector(`#forgeStatus`),ut=document.querySelector(`#forgeSourceFilters`),dt=document.querySelector(`#forgeMoodFilters`),ft=document.querySelector(`#forgeGenerateButton`),B=document.querySelector(`#forgePinButton`),pt=document.querySelector(`#forgeCopyButton`),mt=document.querySelectorAll(`[data-filter]`),ht=document.querySelectorAll(`[data-language]`),gt=document.querySelectorAll(`.nav-links a`),V=document.querySelector(`#drawOneButton`),_t=document.querySelector(`#drawTenButton`),H=document.querySelector(`#leverButton`),vt=document.querySelector(`#resetButton`),U=document.querySelector(`#twilloopWishButton`),yt=document.querySelector(`#twilloopWishState`),bt=document.querySelector(`#accountButton`),xt=document.querySelector(`#accountLabel`),St=document.querySelector(`#accountIntro`),W=document.querySelector(`#accountPrimaryAction`),G=document.querySelector(`#accountSecondaryAction`),Ct=document.querySelector(`#accountDashboard`),wt=document.querySelector(`#authModal`),Tt=document.querySelector(`#authDialog`),Et=t=>e.find(e=>e.id===t),K=()=>Et(b)??e[e.length-1],q=()=>Object.values(_).reduce((e,t)=>e+t,0),J=()=>e.filter(e=>(_[e.id]??0)>0).length,Dt=()=>Math.max(0,Te+x.stockBoost-q()),Ot=()=>Math.round(J()/e.length*100),Y=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]??e),kt=()=>`AD-${new Date().getFullYear()}-${Math.floor(1e3+Math.random()*9e3)}`,At=e=>e.trim().replace(/\s+/g,``),jt=e=>{let t=e.trim();return t?(t.split(`@`)[0]||t).slice(0,12):a===`zh`?`artdrew 玩家`:`artdrew player`},Mt=()=>D?J()>=5||q()>=18?a===`zh`?`雾光藏家`:`Mistlight Collector`:J()>=3||q()>=8?a===`zh`?`雨后会员+`:`After-Rain Member+`:a===`zh`?`雨后会员`:`After-Rain Member`:a===`zh`?`游客`:`Guest`,Nt=()=>D?(D.displayName.trim().replace(/\s+/g,``).slice(0,2)||`AD`).toUpperCase():`${J()}/${e.length}`,Pt=e=>{O=e,k=!0,A=o(e===`register`?s.account.registerMessage:s.account.loginMessage),Q()},Ft=()=>{k=!1,Q()},It=(e,t)=>{let n=At(t),r=e.trim()||jt(n);D={displayName:r,handle:`@${r.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g,``).slice(0,16)||`artdrew`}`,contact:n||`demo@artdrew.local`,memberNo:kt(),createdAt:new Date().toLocaleDateString(a===`zh`?`zh-CN`:`en-US`,{month:`2-digit`,day:`2-digit`})},k=!1,A=`${o(s.account.profileCreatedPrefix)}${D.displayName}${o(s.account.profileCreatedSuffix)}`,E=`${o(s.account.signedInPrefix)}${D.displayName}${o(s.account.signedInSuffix)}`,window.location.hash=`#account`,$(),Q()},Lt=()=>{if(y>=Ee-1)return e.find(e=>e.rarity===`SECRET`)??e[0];let t=K();if(x.wishSparks>=h-1&&t.rarity!==`SECRET`)return t;let n=Math.random()*100,r=0;for(let t of e)if(r+=t.probability,n<=r)return t;return e[0]},Rt=e=>{if(w)return;let t=Dt(),n=Math.min(e,t);if(n<=0){E=o(s.draw.statusSoldOut),Q();return}w=!0,S=[],T=null,E=`${o(s.draw.statusOpeningPrefix)} ${n} ${o(s.draw.statusOpeningSuffix)}`,Q(),L?.classList.remove(`reveal`),L?.classList.add(`shake`),window.setTimeout(()=>{L?.classList.remove(`shake`),L?.classList.add(`reveal`);for(let e=0;e<n;e+=1){let e=Lt(),t=(_[e.id]??0)>0;S.push(e),t&&(x.duplicateInk+=e.rarity===`SECRET`?5:e.rarity===`RARE`?2:1),x.wishSparks=e.id===b?0:Math.min(h,x.wishSparks+1),_[e.id]=(_[e.id]??0)+1,v.push(e.id),y=e.rarity===`SECRET`?0:y+1}localStorage.setItem(Se,String(y)),Ne(_),Pe(v),g(),w=!1;let e=K(),t=S.filter(t=>t.id===e.id).length,r=S.filter(e=>e.rarity===`SECRET`).length,i=S.filter(e=>e.rarity===`RARE`).length;T=r?`SECRET`:t?`WISH`:i?`RARE`:`COMMON`;let c=m(e);E=t?a===`zh`?`${o(s.draw.statusWishHit)} ${t} 次：${c.title}。`:`${o(s.draw.statusWishHit)} ${t} time${t>1?`s`:``}: ${c.title}.`:r?o(s.draw.statusSecret):i?`${o(s.draw.statusRare)} ${i} ${o(s.draw.statusRareSuffix)}`:o(s.draw.statusCommon),Q()},520)},zt=(e,n=0,r=!1)=>{let i=e.id===b,c=m(e);return`
    <article class="figure-card ${t[e.rarity]} ${r?`compact`:``} ${n>0?`owned`:`locked`} ${i?`wish`:``}" style="--figure-color: ${e.color}">
      ${r&&n===1?`<span class="new-tag">NEW!</span>`:``}
      <div class="toy-orb" style="--toy-color: ${e.color}">
        <span>${c.initial}</span>
      </div>
      <div>
        <div class="card-line">
          <h3>${c.title}</h3>
          <span class="rarity ${t[e.rarity]}">${p(e.rarity)}</span>
        </div>
        <p>${c.subtitle}</p>
        <div class="personality-row">
          ${c.personality.map(e=>`<span>${e}</span>`).join(``)}
        </div>
        <p class="emotion-line">${c.emotion}</p>
        <blockquote>${c.quote}</blockquote>
        ${r?``:`
              <div class="story-note">
                <strong>${a===`zh`?`小故事`:`Story`}</strong>
                <span>${c.story}</span>
              </div>
              <div class="story-note">
                <strong>${a===`zh`?`想要`:`Desire`}</strong>
                <span>${c.desire}</span>
              </div>
              <div class="story-note">
                <strong>${a===`zh`?`弱点`:`Weakness`}</strong>
                <span>${c.weakness}</span>
              </div>
              <div class="story-note">
                <strong>${a===`zh`?`关系`:`Relationship`}</strong>
                <span>${c.relationship}</span>
              </div>
            `}
        <div class="meta-row">
          <span>${e.probability}%</span>
          <span>${n>0?`x${n}`:o(s.labels.notOwned)}</span>
        </div>
        ${r?``:`
              <div class="card-actions">
                <button class="wish-button" type="button" data-wish-id="${e.id}" aria-pressed="${i}">
                  ${i?a===`zh`?`心愿中`:`Wished`:a===`zh`?`设为心愿`:`Set Wish`}
                </button>
              </div>
            `}
      </div>
    </article>
  `},Bt=()=>`
  <div class="empty-result">
    <span>?</span>
    <p>${o(s.draw.emptyWait)}</p>
  </div>
`,Vt=()=>{if(!Qe)return;if(!S.length){Qe.textContent=o(s.draw.resultEmpty);return}let e=S.reduce((e,t)=>(e[t.rarity]+=1,e),{COMMON:0,RARE:0,SECRET:0});Qe.textContent=`${o(s.labels.common)} ${e.COMMON} / ${o(s.labels.rare)} ${e.RARE} / ${o(s.labels.secret)} ${e.SECRET}`},Ht=()=>{Ie&&(Ie.innerHTML=S.length?S.map(e=>zt(e,_[e.id],!0)).join(``):Bt(),Vt())},Ut=e=>{let t=(_[e.id]??0)>0;return C===`owned`?t:C===`missing`?!t:C===`common`?e.rarity===`COMMON`:C===`rare`?e.rarity===`RARE`:C===`secret`?e.rarity===`SECRET`:!0},Wt=()=>{mt.forEach(e=>{let t=e.dataset.filter===C,n=e.dataset.filter;e.classList.toggle(`active`,t),e.setAttribute(`aria-pressed`,String(t)),n&&s.collection.filters[n]&&(e.textContent=o(s.collection.filters[n]))})},Gt=()=>{if(!Le)return;let t=e.filter(Ut);Le.innerHTML=t.length?t.map(e=>zt(e,_[e.id]??0)).join(``):`<div class="empty-result collection-empty"><span>0</span><p>${o(s.draw.emptyCollection)}</p></div>`},Kt=()=>{nt&&(nt.innerHTML=e.map(e=>{let n=_[e.id]??0,r=m(e);return`
        <article class="shelf-item ${t[e.rarity]} ${n>0?`owned`:`locked`}" style="--toy-color: ${e.color}">
          <div class="shelf-toy"><span>${n>0?r.initial:`?`}</span></div>
          <strong>${r.title}</strong>
          <small>${n>0?`x${n}`:p(e.rarity)}</small>
        </article>
      `}).join(``))},qt=()=>{rt&&(rt.innerHTML=n.map(e=>{let t=ne(e);return`
        <article class="drop-tile ${e.status}" style="--drop-accent: ${e.accent}">
          <div class="drop-art ${e.image?``:`placeholder`}">
            ${e.image?`<img src="${e.image}" alt="${t.cnName} ${e.name} ${a===`zh`?`系列阵容`:`lineup`}" />`:`<span>${e.dropNo}</span>`}
          </div>
          <div class="drop-copy">
            <div class="drop-meta">
              <span>${e.dropNo}</span>
              <strong>${t.statusLabel}</strong>
            </div>
            <h3>${e.name}</h3>
            <p class="drop-cn">${t.cnName}</p>
            <p>${t.description}</p>
            <div class="drop-facts">
              <span>${t.launchLabel}</span>
              <span>${t.lineupLabel}</span>
            </div>
            ${e.href?`<a class="drop-action" href="${e.href}" data-drop-target="${e.id}">${t.actionLabel??o(s.hero.drawAction)}</a>`:`<button class="drop-action pending" type="button" data-drop-target="${e.id}">${t.actionLabel??(a===`zh`?`提醒我`:`Remind Me`)}</button>`}
          </div>
        </article>
      `}).join(``))},Jt=()=>{let e=ie(),n=P.some(t=>t.id===e.id);if(lt&&(lt.textContent=F||o(s.forge.ready)),ft&&(ft.textContent=o(s.forge.generate)),B&&(B.textContent=o(n?s.forge.pinned:s.forge.pin),B.disabled=n),pt&&(pt.textContent=o(s.forge.copy)),ut&&(ut.innerHTML=me(ee,M,`forge-source`)),dt&&(dt.innerHTML=me(d,N,`forge-mood`)),X(`[data-forge-filter-label="source"]`,o(s.forge.sourceFilter)),X(`[data-forge-filter-label="mood"]`,o(s.forge.moodFilter)),at){let t=se(e.scores);at.innerHTML=`
      <div class="forge-title-row">
        <div>
          <p class="drop-label forge-label">${o(s.forge.label)}</p>
          <h3>${e.name}</h3>
          <p class="forge-cn">${e.cnName}</p>
        </div>
        <div class="forge-drop-mark">
          <span>${e.dropNo}</span>
          <strong>${o(e.statusLabel)}</strong>
        </div>
      </div>
      <p class="forge-core">${o(e.coreSentence)}</p>
      <div class="forge-facts">
        <span><strong>${a===`zh`?`发生地`:`Location`}</strong>${o(e.location)}</span>
        <span><strong>${o(s.forge.sourceFilter)}</strong>${ce(e.source)}</span>
        <span><strong>${o(s.forge.moodFilter)}</strong>${le(e.mood)}</span>
        <span><strong>${o(s.forge.personality)}</strong>${o(e.tribePersonality)}</span>
        <span><strong>${o(s.forge.collectorFeeling)}</strong>${o(e.collectorFeeling)}</span>
      </div>
      <div class="forge-score-block">
        <div class="card-line">
          <h4>${o(s.forge.scoreTitle)}</h4>
          <strong>${t}</strong>
        </div>
        <div class="forge-score-grid">
          ${he(e.scores)}
        </div>
      </div>
      <div class="forge-story-grid">
        <article>
          <span>${o(s.forge.background)}</span>
          <p>${o(e.background)}</p>
        </article>
        <article>
          <span>${o(s.forge.conflict)}</span>
          <p>${o(e.conflict)}</p>
        </article>
      </div>
      <div class="forge-dna-block">
        <div class="card-line">
          <h4>${o(s.forge.visualDNA)}</h4>
          <div class="forge-palette" aria-label="${e.name} palette">
            ${e.palette.map(e=>`<i style="--swatch:${e}"></i>`).join(``)}
          </div>
        </div>
        <div class="forge-dna-grid">
          ${e.visualDNA.map(e=>`
                <span>
                  <strong>${o(e.label)}</strong>
                  ${o(e.value)}
                </span>
              `).join(``)}
        </div>
      </div>
      ${I?`
            <div class="forge-export">
              <div class="card-line">
                <h4>${o(s.forge.exportTitle)}</h4>
                <span>${e.name} / ${e.cnName}</span>
              </div>
              <textarea id="forgeExportTextarea" readonly spellcheck="false">${Y(I)}</textarea>
            </div>
          `:``}
    `}ot&&(ot.innerHTML=`
      <span class="account-badge">${o(s.forge.universeTitle)}</span>
      <p>${o(s.forge.universeCopy)}</p>
      <div class="forge-world-chain">
        <span>Morrifolio</span>
        <span>Brumlet</span>
        <span>Twilloop</span>
        <span>${e.name}</span>
      </div>
      <h4>${o(s.forge.loreLinks)}</h4>
      <ul>
        ${e.loreLinks.map(e=>`<li>${o(e)}</li>`).join(``)}
      </ul>
      <h4>${o(s.forge.futureDrops)}</h4>
      <ul>
        ${e.futureDrops.map(e=>`<li>${o(e)}</li>`).join(``)}
      </ul>
    `),st&&(st.innerHTML=`
      <span class="account-badge">${o(s.forge.pinnedTitle)}</span>
      ${P.length?`
            <div class="forge-pin-list">
              ${P.map(e=>`
                    <article>
                      <div>
                        <strong>${e.name}</strong>
                        <small>${e.cnName} / ${e.dropNo}</small>
                      </div>
                      <button class="mini-button" type="button" data-forge-load="${e.id}">${o(s.forge.loadPinned)}</button>
                    </article>
                  `).join(``)}
            </div>
          `:`<p class="muted-line">${o(s.forge.pinnedEmpty)}</p>`}
      <div class="forge-risk">
        <h4>${o(s.forge.riskNotes)}</h4>
        <ul>
          ${e.riskNotes.map(e=>`<li>${o(e)}</li>`).join(``)}
          <li>${o(s.forge.prototypeOnly)}</li>
        </ul>
      </div>
    `),ct&&(ct.innerHTML=e.figures.map(e=>`
          <article class="forge-character ${t[e.rarity]}" style="--forge-color:${e.color}">
            <div class="forge-character-top">
              <div class="forge-sigil" aria-hidden="true"><span></span></div>
              <div>
                <span class="rarity ${t[e.rarity]}">${p(e.rarity)} / ${e.probability}%</span>
                <h4>${a===`zh`?e.cnName:e.name}</h4>
                <p>${a===`zh`?e.name:e.cnName}</p>
              </div>
            </div>
            <blockquote>${o(e.quote)}</blockquote>
            <div class="personality-row">
              ${e.personality.map(e=>`<span>${o(e)}</span>`).join(``)}
            </div>
            <p class="emotion-line">${o(e.emotion)}</p>
            <div class="forge-bio-grid">
              <span><strong>${o(s.forge.biography)}</strong>${o(e.biography)}</span>
              <span><strong>${o(s.forge.roleBackground)}</strong>${o(e.background)}</span>
              <span><strong>${o(s.forge.desire)}</strong>${o(e.desire)}</span>
              <span><strong>${o(s.forge.weakness)}</strong>${o(e.weakness)}</span>
              <span><strong>${o(s.forge.relationship)}</strong>${o(e.relationship)}</span>
              <span><strong>${o(s.forge.visualHooks)}</strong>${ge(e.visualHooks).join(` / `)}</span>
            </div>
          </article>
        `).join(``))},Yt=()=>{if(!et)return;let e=K(),t=_[e.id]??0,n=m(e);et.innerHTML=`
    <div class="wish-card-copy">
      <span>${o(s.labels.wishlist)}</span>
      <strong>${n.title}</strong>
      <small>${t>0?`${o(s.labels.owned)} x${t}`:`${e.probability}% ${o(s.labels.probability)}`}</small>
    </div>
    <button class="mini-button" type="button" data-random-wish>${a===`zh`?`换一款`:`Change`}</button>
  `},Xt=()=>{tt&&(tt.innerHTML=e.map(e=>{let n=m(e);return`
        <article class="odds-card ${t[e.rarity]} ${e.id===b?`wish`:``}">
          <div class="card-line">
            <h3>${n.title}</h3>
            <span class="rarity ${t[e.rarity]}">${p(e.rarity)}</span>
          </div>
          <p>${n.subtitle}</p>
          <small>${n.emotion}</small>
          <div class="odds-bar" aria-label="${n.title} ${o(s.labels.probability)} ${e.probability}%">
            <span style="width: ${e.probability}%"></span>
          </div>
          <strong>${e.probability}%</strong>
        </article>
      `}).join(``))},Zt=()=>{it&&(it.innerHTML=e.map(e=>{let n=m(e);return`
        <article class="emotion-card ${t[e.rarity]}" style="--toy-color: ${e.color}">
          <div class="emotion-orb"><span>${n.initial}</span></div>
          <div>
            <div class="card-line">
              <h3>${n.title}</h3>
              <span class="rarity ${t[e.rarity]}">${p(e.rarity)}</span>
            </div>
            <p class="emotion-line">${n.emotion}</p>
            <p>${n.story}</p>
            <p class="weakness-line">${o(s.story.weakness)}${n.weakness}</p>
            <div class="personality-row">
              ${n.personality.map(e=>`<span>${e}</span>`).join(``)}
            </div>
          </div>
        </article>
      `}).join(``))},Qt=(e,t)=>Math.min(100,Math.round(Math.min(e,t)/t*100)),$t=(e,t,n,r=``)=>`
  <div class="loop-progress ${r}" aria-label="${n} ${Math.min(e,t)} / ${t}">
    <span style="width: ${Qt(e,t)}%"></span>
  </div>
`,en=()=>[{id:`first-draw`,title:o(s.loop.firstTitle),detail:o(s.loop.firstDetail),target:1,reward:1,progress:q()},{id:`ten-draw`,title:o(s.loop.tenTitle),detail:o(s.loop.tenDetail),target:10,reward:3,progress:q()},{id:`three-unlocks`,title:o(s.loop.unlockTitle),detail:o(s.loop.unlockDetail),target:3,reward:2,progress:J()},{id:`set-wish`,title:o(s.loop.wishMissionTitle),detail:o(s.loop.wishMissionDetail),target:1,reward:1,progress:+!!x.wishSet},{id:`duplicate-ink`,title:o(s.loop.duplicateTitle),detail:o(s.loop.duplicateDetail),target:3,reward:2,progress:x.duplicateInk}],tn=()=>{if(!z)return;let e=q(),t=K(),n=m(t),r=Math.max(0,Ee-y),i=t.rarity===`SECRET`?o(s.loop.wishSecret):`${Math.max(0,h-x.wishSparks)} ${o(s.loop.wishTrigger)}`,a=en(),c=x.claimedMissions.length,l=x.tokens<De,u=e>=30?o(s.loop.restDone):`${o(s.loop.restMore)} ${30-e} ${o(s.loop.restMoreTail)}`;z.innerHTML=`
    <div class="loop-head">
      <div>
        <p class="eyebrow">GAME LOOP</p>
        <h3>${o(s.loop.title)}</h3>
        <p>${o(s.loop.intro)}</p>
      </div>
      <div class="loop-wallet" aria-label="${o(s.loop.walletAria)}">
        <span><strong>${x.tokens}</strong> ${o(s.labels.tokens)}</span>
        <span><strong>${x.duplicateInk}</strong> ${o(s.labels.duplicateInk)}</span>
        <span><strong>${c}/${a.length}</strong> ${o(s.labels.tasks)}</span>
      </div>
    </div>

    <div class="loop-grid">
      <article class="loop-card">
        <div class="card-line">
          <h4>${o(s.loop.pityTitle)}</h4>
          <strong>${r}</strong>
        </div>
        <p>${o(s.loop.pityCopy)} ${y} ${o(s.loop.pityCopyTail)}</p>
        ${$t(y,Ee,`${o(s.loop.pityTitle)} ${o(s.loop.progress)}`,`secret`)}
      </article>

      <article class="loop-card wish">
        <div class="card-line">
          <h4>${o(s.loop.wishTitle)}</h4>
          <strong>${i}</strong>
        </div>
        <p>${n.title}${o(s.loop.wishCopyTail)}</p>
        ${$t(x.wishSparks,h,`${o(s.loop.wishTitle)} ${o(s.loop.progress)}`,`wish`)}
      </article>

      <article class="loop-card reward-card">
        <div class="card-line">
          <h4>${o(s.loop.rewardTitle)}</h4>
          <strong>+${x.stockBoost}</strong>
        </div>
        <p>${o(s.loop.rewardCopy)}</p>
        <button class="mini-button loop-action" type="button" data-loop-reward="restock" ${l?`disabled`:``}>
          ${De} ${o(s.loop.restockButton)} +${Oe}
        </button>
      </article>

      <article class="loop-card rest-card">
        <div class="card-line">
          <h4>${o(s.loop.restTitle)}</h4>
          <strong>${e}</strong>
        </div>
        <p>${u}</p>
        <span class="safe-note">${o(s.loop.safeNote)}</span>
      </article>
    </div>

    <div class="mission-list" aria-label="${o(s.loop.todayMissions)}">
      ${a.map(e=>{let t=x.claimedMissions.includes(e.id),n=e.progress>=e.target;return`
            <article class="mission-row ${t?`claimed`:``}">
              <div>
                <h4>${e.title}</h4>
                <p>${e.detail}</p>
                ${$t(e.progress,e.target,`${e.title} ${o(s.loop.progress)}`)}
              </div>
              <button class="mini-button" type="button" data-claim-mission="${e.id}" ${t||!n?`disabled`:``}>
                ${t?o(s.loop.claimed):n?`${o(s.loop.claim)} +${e.reward}`:`${Math.min(e.progress,e.target)}/${e.target}`}
              </button>
            </article>
          `}).join(``)}
    </div>
  `},nn=()=>{if(!Re)return;let e=v.slice(-18).reverse().map(Et).filter(e=>!!e);Re.innerHTML=e.length?e.map(e=>{let n=m(e);return`
            <span class="recent-chip ${t[e.rarity]}" style="--toy-color: ${e.color}">
              ${n.title}
            </span>
          `}).join(``):`<p class="muted-line">${o(s.collection.noHistory)}</p>`},rn=()=>{if(!$e)return;let t=q(),n=J(),r=(_[`blackout-bloom`]??0)>0;$e.innerHTML=`
    <span>${n}/${e.length} ${o(s.labels.unlocked)}</span>
    <span>${t} ${o(s.labels.collectionItem)}</span>
    <span>${o(r?s.collection.secretOwned:s.collection.secretMissing)}</span>
  `},an=()=>{let n=J(),r=q(),i=K(),a=Mt();if(bt?.classList.toggle(`signed-in`,!!D),xt&&(xt.textContent=D?D.displayName:o(s.account.login)),St&&(St.textContent=o(D?s.account.introUser:s.account.introGuest)),W&&(W.textContent=o(D?s.account.viewShelf:s.account.create),W.toggleAttribute(`data-auth-open`,!D),D||(W.dataset.authOpen=`register`),W.toggleAttribute(`data-account-jump`,!!D),D&&(W.dataset.accountJump=`#collection`)),G&&(G.textContent=o(D?s.account.logout:s.account.login),G.toggleAttribute(`data-auth-open`,!D),D||(G.dataset.authOpen=`login`),G.toggleAttribute(`data-sign-out`,!!D)),!Ct)return;let c=v.slice(-5).reverse().map(Et).filter(e=>!!e),l=c.length?c.map(e=>{let n=m(e);return`<span class="recent-chip ${t[e.rarity]}">${n.title}</span>`}).join(``):`<p class="muted-line">${o(s.collection.noHistory)}</p>`,u=m(i);if(!D){Ct.innerHTML=`
      <article class="account-panel account-empty-panel">
        <div class="account-badge">GUEST</div>
        <h3>${o(s.account.guest)}</h3>
        <p>${A}</p>
        <div class="account-stat-grid">
          <span><strong>${n}/${e.length}</strong> ${o(s.labels.unlocked)}</span>
          <span><strong>${r}</strong> ${o(s.labels.collectionItem)}</span>
          <span><strong>${x.tokens}</strong> ${o(s.labels.tokens)}</span>
          <span><strong>${u.title}</strong> ${o(s.labels.wishlist)}</span>
        </div>
        <div class="account-note-row">
          <span>${o(s.labels.noPayment)}</span>
          <span>${o(s.labels.noPassword)}</span>
          <span>${o(s.labels.browserPrototype)}</span>
        </div>
      </article>
    `;return}let ee=Y(D.displayName),d=Y(D.handle),te=Y(D.contact),f=Y(D.memberNo);Ct.innerHTML=`
    <article class="account-panel profile-panel">
      <div class="account-badge">${a}</div>
      <div class="profile-head">
        <div class="profile-avatar">${Nt()}</div>
        <div>
          <h3>${ee}</h3>
          <p>${d}</p>
        </div>
      </div>
      <dl class="profile-list">
        <div><dt>${o(s.account.memberNo)}</dt><dd>${f}</dd></div>
        <div><dt>${o(s.account.contact)}</dt><dd>${te}</dd></div>
        <div><dt>${o(s.account.joined)}</dt><dd>${D.createdAt}</dd></div>
      </dl>
    </article>

    <article class="account-panel">
      <div class="account-badge">DROP 02</div>
      <h3>${o(s.account.progress)}</h3>
      <div class="account-stat-grid">
        <span><strong>${n}/${e.length}</strong> ${o(s.labels.unlocked)}</span>
        <span><strong>${r}</strong> ${o(s.labels.collectionItem)}</span>
        <span><strong>${x.duplicateInk}</strong> ${o(s.labels.duplicateInk)}</span>
        <span><strong>${x.tokens}</strong> ${o(s.labels.tokens)}</span>
      </div>
      <div class="account-progress" aria-label="${o(s.account.progressAria)} ${Ot()}%">
        <span style="width: ${Ot()}%"></span>
      </div>
      <p class="account-mini-copy">${o(s.account.currentWish)}${u.title}${o(s.account.pityLeft)} ${Math.max(0,Ee-y)}${o(s.account.pityUnit)}</p>
    </article>

    <article class="account-panel account-recent-panel">
      <div class="account-badge">RECENT</div>
      <h3>${o(s.collection.recentTitle)}</h3>
      <div class="recent-grid">${l}</div>
    </article>
  `},on=()=>{if(!wt||!Tt)return;if(wt.classList.toggle(`hidden`,!k),!k){Tt.innerHTML=``;return}let e=O===`register`;Tt.innerHTML=`
    <div class="auth-head">
      <div>
        <p class="eyebrow">ARTDREW ID</p>
        <h3 id="authTitle">${o(e?s.account.authRegister:s.account.authLogin)}</h3>
      </div>
      <button class="icon-button" type="button" data-auth-close aria-label="${o(s.account.close)}">×</button>
    </div>
    <div class="auth-tabs" role="tablist" aria-label="${o(s.account.authTabs)}">
      <button type="button" data-auth-mode="login" aria-selected="${O===`login`}">${o(s.account.login)}</button>
      <button type="button" data-auth-mode="register" aria-selected="${O===`register`}">${o(s.account.registerTab)}</button>
    </div>
    <form class="auth-form" id="authForm">
      ${e?`
            <label>
              <span>${o(s.account.nickname)}</span>
              <input name="displayName" autocomplete="nickname" maxlength="18" placeholder="${o(s.account.nicknamePlaceholder)}" />
            </label>
          `:``}
      <label>
        <span>${o(s.account.contactField)}</span>
        <input id="authContact" name="contact" autocomplete="username" placeholder="collector@artdrew.com" required />
      </label>
      <label>
        <span>${o(s.account.accessCode)}</span>
        <input name="accessCode" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="000000" />
      </label>
      <p class="auth-note">${o(s.account.note)}</p>
      <button class="button primary" type="submit">${o(e?s.account.submitRegister:s.account.submitLogin)}</button>
      <p class="auth-message">${A}</p>
    </form>
  `},X=(e,t)=>{let n=document.querySelector(e);n&&(n.textContent=t)},Z=(e,t)=>{let n=document.querySelector(e);if(!n)return;let r=Array.from(n.childNodes).find(e=>e.nodeType===Node.TEXT_NODE);if(r){r.textContent=` ${t}`;return}n.append(document.createTextNode(` ${t}`))},sn=(e,t)=>{let n=document.querySelector(e)?.nextElementSibling;n instanceof HTMLParagraphElement&&(n.textContent=t)},cn=()=>{let e=document.querySelector(`.twilloop-card-grid`);e&&(e.innerHTML=r.map(e=>`
        <article class="twilloop-card ${e.rarity.toLowerCase()}" style="--twilloop-color: ${e.color}">
          <span>${e.rarity===`COMMON`?o(s.labels.common):e.rarity===`RARE`?o(s.labels.rare):o(s.labels.secret)}</span>
          <h4>${a===`zh`?e.cnName:e.name}</h4>
          <p>${a===`zh`?e.name:e.cnName}</p>
          <small>${re(e.name,e.trait)}</small>
        </article>
      `).join(``))},ln=()=>{document.documentElement.lang=a===`zh`?`zh-CN`:`en`,document.title=o(s.meta.title),document.querySelector(`meta[name="description"]`)?.setAttribute(`content`,o(s.meta.description)),ht.forEach(e=>{let t=e.dataset.language===a;e.classList.toggle(`active`,t),e.setAttribute(`aria-pressed`,String(t))});let e=[`draw`,`drops`,`forge`,`twilloop`,`story`,`collection`,`odds`,`account`];gt.forEach((t,n)=>{let r=e[n];r&&(t.textContent=o(s.nav[r]))}),document.querySelector(`.nav-actions`)?.setAttribute(`aria-label`,a===`zh`?`玩家资产`:`Player assets`);let t=document.querySelectorAll(`.wallet-plus`);t[0]?.setAttribute(`aria-label`,a===`zh`?`重复水珠说明`:`Duplicate ink info`),t[1]?.setAttribute(`aria-label`,a===`zh`?`余光章说明`:`Afterglow token info`),bt?.setAttribute(`aria-label`,o(D?s.account.viewShelf:s.account.login)),X(`.hero-cn`,o(s.hero.nameLine)),X(`.hero-slogan`,o(s.hero.slogan)),X(`.hero-lede`,o(s.hero.lede)),X(`.hero-actions .button.primary`,o(s.hero.drawAction)),X(`.hero-actions .button.ghost`,o(s.hero.dropsAction)),Z(`.drop-stats span:nth-child(1)`,o(s.hero.statsCommon)),Z(`.drop-stats span:nth-child(2)`,o(s.hero.statsRare)),Z(`.drop-stats span:nth-child(3)`,o(s.hero.statsSecret)),Z(`.drop-stats span:nth-child(4)`,o(s.hero.statsCollected)),Z(`.drop-stats span:nth-child(5)`,o(s.hero.statsStock)),X(`.announce-strip span`,o(s.hero.announce));let n=document.querySelector(`.announce-strip p`);n?.firstChild?.nodeType===Node.TEXT_NODE&&(n.firstChild.textContent=o(s.hero.announceText)),X(`.drop-board-head h2`,o(s.drops.title)),X(`.drop-board-head > p`,o(s.drops.intro)),X(`.forge-copy h2`,o(s.forge.title)),X(`.forge-copy p:not(.eyebrow)`,o(s.forge.intro)),document.querySelector(`.forge-controls`)?.setAttribute(`aria-label`,a===`zh`?`IP 生成器操作`:`IP generator actions`),X(`.forge-character-head h3`,o(s.forge.characterMatrix)),X(`.forge-character-head > p`,o(s.forge.prototypeOnly)),X(`.twilloop-cn`,o(s.twilloop.titleLine)),X(`.twilloop-copy .twilloop-slogan`,`Loose threads, tiny repair rituals.`),sn(`.twilloop-copy .twilloop-slogan`,o(s.twilloop.lede)),X(`.twilloop-actions .button.primary`,o(s.twilloop.view)),U&&(U.textContent=o(i?s.twilloop.wished:s.twilloop.wish)),yt&&(yt.textContent=o(i?s.twilloop.wishedState:s.twilloop.idle));let r=document.querySelectorAll(`.twilloop-specs span`);[s.twilloop.specA,s.twilloop.specB,s.twilloop.specC].forEach((e,t)=>{r[t]&&(r[t].textContent=o(e))}),X(`.twilloop-lineup-copy h3`,o(s.twilloop.lineupTitle)),X(`.twilloop-lineup-copy p:not(.eyebrow)`,o(s.twilloop.lineupCopy)),cn(),X(`.draw-section .section-heading h2`,o(s.draw.title)),X(`.draw-section .draw-lede`,o(s.draw.lede)),Z(`.section-meter span:nth-child(1)`,o(s.draw.completion)),Z(`.section-meter span:nth-child(2)`,o(s.draw.stock)),Z(`.section-meter span:nth-child(3)`,o(s.draw.wish)),Z(`.section-meter span:nth-child(4)`,o(s.draw.pity)),X(`.machine-rules span`,o(s.draw.rules)),X(`.machine-rules p`,o(s.draw.ruleText)),X(`.machine-rules small`,o(s.draw.stockSmall)),H?.setAttribute(`aria-label`,o(s.draw.lever)),Z(`.stock-line`,o(s.draw.noSecret)),X(`.result-panel .panel-head span`,o(s.draw.resultTitle)),X(`.result-panel .panel-link`,o(s.draw.allRecords)),vt?.setAttribute(`aria-label`,o(s.draw.reset)),X(`.shelf-preview .panel-head span`,o(s.draw.shelfTitle)),X(`.shelf-preview .panel-head p`,o(s.draw.shelfCopy)),X(`.shelf-preview .panel-link`,o(s.draw.viewAll)),z?.setAttribute(`aria-label`,o(s.loop.title)),X(`.series-copy h2`,o(s.story.seriesTitle)),X(`.series-copy p:not(.eyebrow)`,o(s.story.seriesCopy)),X(`.story-intro h2`,o(s.story.bibleTitle)),X(`.story-intro p:not(.eyebrow)`,o(s.story.bibleCopy));let c=document.querySelectorAll(`.story-pillars article`);[[s.story.originTitle,s.story.originCopy],[s.story.desireTitle,s.story.desireCopy],[s.story.collectTitle,s.story.collectCopy]].forEach(([e,t],n)=>{c[n]?.querySelector(`h3`)?.replaceChildren(document.createTextNode(o(e))),c[n]?.querySelector(`p`)?.replaceChildren(document.createTextNode(o(t)))});let l=document.querySelectorAll(`.rarity-strip span`);[s.odds.common,s.odds.rare,s.odds.secret,s.odds.pity].forEach((e,t)=>{l[t]&&(l[t].textContent=o(e))}),X(`.collection-section .section-heading h2`,o(s.collection.title)),document.querySelector(`.collection-tools`)?.setAttribute(`aria-label`,a===`zh`?`藏品筛选`:`Collection filters`),X(`.recent-panel .panel-head span`,o(s.collection.recentTitle)),X(`.recent-panel .panel-head p`,o(s.collection.recentCopy)),X(`.account-hero-card h2`,o(s.account.title)),document.querySelector(`.auth-backdrop`)?.setAttribute(`aria-label`,o(s.account.closeWindow))},un=()=>{let t=J(),n=Ot(),r=Dt(),i=Math.max(0,30-y),c=m(K());ze&&(ze.textContent=String(y)),Be&&(Be.textContent=String(i)),Ve&&(Ve.textContent=`${t}/${e.length}`),He&&(He.textContent=`${n}%`),Ue&&(Ue.textContent=c.title),We&&(We.textContent=c.title),Ge&&(Ge.textContent=String(r)),Ke&&(Ke.textContent=String(r)),qe&&(qe.textContent=String(r)),Je&&(Je.textContent=String(x.duplicateInk)),Ye&&(Ye.textContent=String(x.tokens)),Xe&&(Xe.textContent=Nt(),Xe.setAttribute(`aria-label`,D?a===`zh`?`当前账户 ${D.displayName}`:`Current account ${D.displayName}`:a===`zh`?`已解锁 ${t} 款，共 ${e.length} 款`:`${t} of ${e.length} figures unlocked`)),Ze&&(Ze.textContent=E),R&&(R.classList.toggle(`celebrate`,!!T),R.classList.toggle(`tone-common`,T===`COMMON`),R.classList.toggle(`tone-rare`,T===`RARE`),R.classList.toggle(`tone-secret`,T===`SECRET`),R.classList.toggle(`tone-wish`,T===`WISH`));let l=r<=0;V&&(V.disabled=w||l,V.textContent=o(w?s.draw.drawing:s.draw.one)),_t&&(_t.disabled=w||l,_t.textContent=o(l?s.draw.soldOut:s.draw.ten)),H&&(H.disabled=w||l,H.classList.toggle(`pulling`,w))},Q=()=>{ln(),un(),qt(),Jt(),Ht(),Wt(),Gt(),Kt(),Yt(),Xt(),Zt(),tn(),nn(),rn(),an(),on()},dn=e=>ke.some(t=>t.id===e),fn=e=>{let t=e?.closest(`[data-auth-open]`),n=e?.closest(`[data-account-jump]`),r=e?.closest(`[data-sign-out]`);if(t?.dataset.authOpen===`login`||t?.dataset.authOpen===`register`)return Pt(t.dataset.authOpen),!0;if(n?.dataset.accountJump)return window.location.hash=n.dataset.accountJump,$(),!0;if(r){let e=D?.displayName??(a===`zh`?`账户`:`Account`);return D=null,k=!1,A=`${e}${o(s.account.signedOutSuffix)}`,E=o(s.account.signedOutStatus),Q(),!0}return!1},pn=e=>{a!==e&&(a=e,E=o(s.draw.statusIdle),F=``,I=``,D||(A=o(k?O===`register`?s.account.registerMessage:s.account.loginMessage:s.account.guestMessage)),Q())};ht.forEach(e=>{e.addEventListener(`click`,()=>{(e.dataset.language===`zh`||e.dataset.language===`en`)&&pn(e.dataset.language)})}),bt?.addEventListener(`click`,()=>{if(D){window.location.hash=`#account`,$();return}Pt(`login`)}),W?.addEventListener(`click`,e=>{fn(e.currentTarget)}),G?.addEventListener(`click`,e=>{fn(e.currentTarget)}),ft?.addEventListener(`click`,()=>{F=oe()?o(s.forge.generated):o(s.forge.closestMatch),I=``,E=F,Q()}),ut?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-forge-source]`);ue(t?.dataset.forgeSource)&&fe(t.dataset.forgeSource)}),dt?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-forge-mood]`);de(t?.dataset.forgeMood)&&pe(t.dataset.forgeMood)}),B?.addEventListener(`click`,()=>{let e=ie();if(P.some(t=>t.id===e.id)){F=o(s.forge.pinDuplicate),Q();return}P=[...P,e],F=o(s.forge.pinSaved),E=F,Q()}),pt?.addEventListener(`click`,()=>{let e=ve(ie());I=e,ye(e).then(e=>{F=o(e?s.forge.copied:s.forge.exportReady),E=F,Q()}).catch(()=>{F=o(s.forge.exportReady),E=F,Q()})}),st?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-forge-load]`)?.dataset.forgeLoad,n=t?f.findIndex(e=>e.id===t):-1;n<0||(j=n,F=a===`zh`?`已回看暂存概念。`:`Pinned concept loaded.`,I=``,Q())}),wt?.addEventListener(`click`,e=>{let t=e.target;if(t.closest(`[data-auth-close]`)){Ft();return}let n=t.closest(`[data-auth-mode]`);(n?.dataset.authMode===`login`||n?.dataset.authMode===`register`)&&(O=n.dataset.authMode,A=o(O===`register`?s.account.registerMessage:s.account.loginMessage),Q())}),wt?.addEventListener(`submit`,e=>{let t=e.target.closest(`#authForm`);if(!t)return;e.preventDefault();let n=new FormData(t),r=String(n.get(`contact`)??``).trim(),i=String(n.get(`displayName`)??``).trim();if(!r){A=o(s.account.needContact),Q();return}It(i,r)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&k&&Ft()}),V?.addEventListener(`click`,()=>Rt(1)),_t?.addEventListener(`click`,()=>Rt(10)),H?.addEventListener(`click`,()=>Rt(1)),rt?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-drop-target]`);if(!t?.dataset.dropTarget)return;let r=n.find(e=>e.id===t.dataset.dropTarget);r?.href||(E=r?.id===`morrifolio`?a===`zh`?`Morrifolio / 墨里弗里已保留为 artdrew 上架档案；当前 LIVE 抽盒是 Brumlet / 雾姆团。`:`Morrifolio is preserved as an artdrew release archive; the current live draw is Brumlet.`:a===`zh`?`${r?.cnName??`新系列`} 还在筹备中，当前可试玩 DROP 02：雾姆团。`:`${ne(r??n[n.length-1]).cnName??`A new series`} is still in planning; DROP 02: Brumlet is playable now.`,Q())}),U?.addEventListener(`click`,()=>{i=!i,U.textContent=o(i?s.twilloop.wished:s.twilloop.wish),U.classList.toggle(`active`,i),yt&&(yt.textContent=o(i?s.twilloop.wishedState:s.twilloop.idle)),E=i?a===`zh`?`Twilloop / 缝环团已加入本次浏览心愿；当前可试玩 DROP 02：雾姆团。`:`Twilloop has been added to this browsing session's wish list; DROP 02: Brumlet is playable now.`:a===`zh`?`已取消 Twilloop / 缝环团本次浏览心愿。`:`Twilloop has been removed from this browsing session's wish list.`,Q()}),mt.forEach(e=>{e.addEventListener(`click`,()=>{dn(e.dataset.filter)&&(C=e.dataset.filter,Q())})}),Le?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-wish-id]`);if(!t?.dataset.wishId)return;b=t.dataset.wishId,x.wishSet=!0,g(),localStorage.setItem(Ce,b);let n=m(K());T=null,E=a===`zh`?`已将 ${n.title} 设为心愿款。`:`${n.title} is now your wishlist figure.`,Q()}),et?.addEventListener(`click`,t=>{if(!t.target.closest(`[data-random-wish]`))return;let n=e.filter(e=>e.id!==b),r=n[Math.floor(Math.random()*n.length)]??e[0];b=r.id,x.wishSet=!0,g(),localStorage.setItem(Ce,b),T=null;let i=m(r);E=a===`zh`?`已将 ${i.title} 设为心愿款。`:`${i.title} is now your wishlist figure.`,Q()}),z?.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-claim-mission]`),r=t.closest(`[data-loop-reward]`);if(n?.dataset.claimMission){let e=n.dataset.claimMission,t=en().find(t=>t.id===e),r=x.claimedMissions.includes(e);t&&!r&&t.progress>=t.target&&(x.tokens+=t.reward,x.claimedMissions.push(e),g(),E=`${o(s.loop.missionDonePrefix)}${t.title}${o(s.loop.missionDoneMiddle)} ${t.reward} ${o(s.loop.missionDoneSuffix)}`,Q());return}r?.dataset.loopReward===`restock`&&x.tokens>=De&&(x.tokens-=De,x.stockBoost+=Oe,g(),E=`${o(s.loop.restockedPrefix)} ${Oe} ${o(s.loop.restockedSuffix)}`,Q())}),vt?.addEventListener(`click`,()=>{_={},v=[],S=[],y=0,x={tokens:0,duplicateInk:0,wishSparks:0,stockBoost:0,wishSet:!1,claimedMissions:[]},w=!1,T=null,E=a===`zh`?`已重置本地藏品。可以重新开盒。`:`Local collection reset. You can open boxes again.`,localStorage.removeItem(be),localStorage.removeItem(xe),localStorage.removeItem(Se),localStorage.removeItem(we),Q()});var mn=()=>{let e=window.location.hash.slice(1),t=e?document.getElementById(decodeURIComponent(e)):null;if(!t)return;let n=document.documentElement.style.scrollBehavior,r=document.querySelector(`.topbar`)?.getBoundingClientRect().height??0,i=t.getBoundingClientRect().top+window.scrollY-r-16;document.documentElement.style.scrollBehavior=`auto`,window.scrollTo({top:Math.max(0,i),behavior:`auto`}),window.setTimeout(()=>{document.documentElement.style.scrollBehavior=n},0)},hn=()=>{[30,160,360].forEach(e=>{window.setTimeout(mn,e)})},$=()=>{let e=window.location.hash||`#draw`;gt.forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`href`)===e)})};Q(),$(),hn(),window.addEventListener(`hashchange`,()=>{$(),hn()});