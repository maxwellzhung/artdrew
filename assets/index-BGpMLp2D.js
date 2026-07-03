(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`sleep-switch`,name:`Sleep Switch`,cnName:`睡眠开关`,rarity:`COMMON`,color:`#8fd9d6`,probability:24,quote:`把雨夜调到不会刺眼的亮度。`,personality:[`慢热`,`安静`,`会照顾人`],emotion:`被温柔调暗`,story:`睡眠开关从窗边一盏快要熄掉的小夜灯里醒来。它不喜欢刺眼的亮度，总会把夜晚调到刚好能看见彼此的程度。`,desire:`想守住每一盏快睡着的灯。`,weakness:`太怕打扰别人，常常把自己也调得太暗。`,relationship:`会提醒信号珠别闪得太急，也常替暗灯花留一格暖光。`},{id:`umbra-drop`,name:`Umbra Drop`,cnName:`伞影滴`,rarity:`COMMON`,color:`#c7b6ff`,probability:22,quote:`撑一把小伞，收集玻璃上的轻响。`,personality:[`敏感`,`浪漫`,`有点爱躲`],emotion:`被雨声接住`,story:`伞影滴是透明雨伞边缘落下的一颗小水珠。它会把玻璃上细小的雨声收进伞骨里，等到天晴再慢慢放出来。`,desire:`想证明安静的雨声也可以被收藏。`,weakness:`一被夸就躲进伞影里。`,relationship:`经常跟在光晕潭旁边，借它的倒影练习不害羞。`},{id:`ventling`,name:`Ventling`,cnName:`风口仔`,rarity:`COMMON`,color:`#c8d1d7`,probability:20,quote:`从通风口吐出一口暖雾。`,personality:[`可靠`,`固执`,`行动慢`],emotion:`靠近一点就暖`,story:`风口仔住在便利店门口的通风格栅后面。它说话像低低的风声，外表冷硬，身体里却一直存着一小团热气。`,desire:`想把被风吹散的雾重新聚起来。`,weakness:`太重视方向感，转身很慢。`,relationship:`常被睡眠开关请去给快冷掉的窗格补一口暖气。`},{id:`halo-puddle`,name:`Halo Puddle`,cnName:`光晕潭`,rarity:`RARE`,color:`#ffe08a`,probability:17,quote:`把路灯倒影圈成小小的家。`,personality:[`温柔`,`慢悠悠`,`记忆力好`],emotion:`被光圈包住`,story:`光晕潭从路灯倒在水洼里的金色圆圈里浮出来。它不急着离开，因为每个经过的人都会在它身上留下一点晃动的影子。`,desire:`想把短暂的倒影留久一点。`,weakness:`容易沉迷回忆，不太会说再见。`,relationship:`是伞影滴的练习镜子，也是信号珠最喜欢路过的站点。`},{id:`signal-bead`,name:`Signal Bead`,cnName:`信号珠`,rarity:`RARE`,color:`#ff7c3d`,probability:16,quote:`等绿灯闪一下，就把勇气挂上肩。`,personality:[`急性子`,`勇敢`,`社交能量高`],emotion:`准备出发`,story:`信号珠来自斑马线旁忽明忽暗的提示灯。它把橙色小珠挂在身上，专门提醒大家：可以向前走了。`,desire:`想在每次犹豫前发出一个小信号。`,weakness:`太急着鼓励别人，偶尔忽略对方还没准备好。`,relationship:`总想带风口仔跑快一点，却常被光晕潭劝慢下来。`},{id:`blackout-bloom`,name:`Blackout Bloom`,cnName:`暗灯花`,rarity:`SECRET`,color:`#11151c`,probability:1,quote:`停电以后，替窗格留一朵微光。`,personality:[`安静`,`神秘`,`很会等待`],emotion:`黑暗里还有光`,story:`暗灯花只在整条街突然停电时出现。它的身体像一团深色雾气，胸口却亮着一格很小的窗，提醒大家夜晚没有完全关闭。`,desire:`想证明没有电的时候，微光也可以开花。`,weakness:`害怕被强光照见，也害怕别人说它太暗。`,relationship:`睡眠开关会替它调暗边缘，伞影滴则负责把它藏进雨声里。`}],t={COMMON:`common`,RARE:`rare`,SECRET:`secret`},n=[{id:`morrifolio`,dropNo:`DROP 01`,name:`Morrifolio`,cnName:`墨里弗里`,status:`archive`,statusLabel:`ARCHIVE`,launchLabel:`已上架档案`,lineupLabel:`6 款页边居民`,description:`artdrew 首个纸页边角主题系列，记录独立插画、zine 摊位和展会标签的收藏气质。`,accent:`#ee3028`,image:`assets/morrifolio-lineup.png`,actionLabel:`查看档案`},{id:`brumlet`,dropNo:`DROP 02`,name:`Brumlet`,cnName:`雾姆团`,status:`live`,statusLabel:`LIVE`,launchLabel:`现已开放抽盒`,lineupLabel:`6 款 + 1% 隐藏`,description:`从雨后玻璃、路灯光晕和通风口热气里凝成的当前主推潮流艺术玩具。`,accent:`#31d6cf`,image:`assets/brumlet-lineup.png`,href:`#draw`,actionLabel:`进入抽盒`},{id:`twilloop`,dropNo:`DROP 03`,name:`Twilloop`,cnName:`缝环团`,status:`next`,statusLabel:`STUDIO PREVIEW`,launchLabel:`设定已完成`,lineupLabel:`6 款 + 1% 隐藏线头`,description:`从深夜修补台、线轴、拉链头和布边条里绕出的新原创潮玩居民。`,accent:`#235aa6`,image:`assets/twilloop-lineup.png`,href:`#twilloop`,actionLabel:`查看设定`},{id:`glow-laundry`,dropNo:`DROP 04`,name:`Glow Laundry`,cnName:`夜洗房`,status:`studio`,statusLabel:`PLANNING`,launchLabel:`世界观排期中`,lineupLabel:`未公开`,description:`把投币洗衣房的热雾、滚筒光圈和遗失袜子做成后续城市微光角色。`,accent:`#ff7c3d`}],r=[{name:`Pin Sash`,cnName:`别针披带`,rarity:`COMMON`,color:`#c83f31`,trait:`把松掉的小事先别住。`},{name:`Zip Pull`,cnName:`拉链头`,rarity:`COMMON`,color:`#235aa6`,trait:`一拉开，就把沉默放出来。`},{name:`Button Guard`,cnName:`纽扣盾`,rarity:`COMMON`,color:`#f1bf2d`,trait:`负责守住最后一颗纽扣。`},{name:`Bobbin Pack`,cnName:`梭芯包`,rarity:`RARE`,color:`#8bcfbd`,trait:`背着一小卷备用勇气。`},{name:`Thimble Hood`,cnName:`顶针盔`,rarity:`RARE`,color:`#f2eee2`,trait:`被戳到也会轻轻回弹。`},{name:`Loose End`,cnName:`暗夜线头`,rarity:`SECRET`,color:`#111111`,trait:`只在心事快散开时出现。`}],i=!1,a=`zh`,o=e=>e[a],s={meta:{title:{zh:`artdrew | Brumlet 雾姆团抽盒与 Twilloop 缝环团预览`,en:`artdrew | Brumlet Blind Box and Twilloop Studio Preview`},description:{zh:`artdrew 潮流艺术玩具上新与盲盒抽盒浏览器版体验，当前 LIVE DROP 为 Brumlet / 雾姆团，新 IP 预览为 Twilloop / 缝环团。`,en:`artdrew is a browser prototype for collectible art-toy drops and blind-box draws, featuring the live Brumlet drop and the Twilloop studio preview.`}},nav:{top:{zh:`首页`,en:`Home`},drops:{zh:`上新`,en:`Drops`},twilloop:{zh:`新IP`,en:`New IP`},draw:{zh:`抽盒机`,en:`Draw`},story:{zh:`故事`,en:`Story`},collection:{zh:`收藏室`,en:`Shelf`},odds:{zh:`机制`,en:`Odds`},account:{zh:`账户`,en:`Account`}},labels:{common:{zh:`常规款`,en:`Common`},rare:{zh:`稀有款`,en:`Rare`},secret:{zh:`隐藏款`,en:`Secret`},collectionItem:{zh:`件藏品`,en:`items`},unlocked:{zh:`已解锁`,en:`unlocked`},tasks:{zh:`任务`,en:`missions`},duplicateInk:{zh:`重复水珠`,en:`Duplicate ink`},tokens:{zh:`余光章`,en:`Afterglow tokens`},wishlist:{zh:`心愿款`,en:`Wishlist`},noPayment:{zh:`无真实付费`,en:`No real payments`},noPassword:{zh:`不保存密码`,en:`No password storage`},browserPrototype:{zh:`浏览器原型`,en:`Browser prototype`},notOwned:{zh:`未获得`,en:`Not owned`},owned:{zh:`已拥有`,en:`Owned`},probability:{zh:`抽中概率`,en:`draw odds`}},hero:{nameLine:{zh:`雾姆团`,en:`A rainy micro-weather art toy drop`},slogan:{zh:`Art is not chosen. It is drawn.`,en:`Art is not chosen. It is drawn.`},lede:{zh:`Brumlet / 雾姆团已进入 artdrew 的上新板。雨后玻璃、路灯光晕和通风口热气里凝成的小雾团，每一只都收藏一种刚停雨时才会出现的城市微光。`,en:`Brumlet is live on artdrew. These tiny weather spirits form from rain-streaked glass, lamp halos, and warm vents, each holding a city glimmer that appears just after the rain stops.`},drawAction:{zh:`立即抽盒`,en:`Draw Now`},dropsAction:{zh:`查看上新`,en:`View Drops`},statsCommon:{zh:`常规款`,en:`common`},statsRare:{zh:`稀有款`,en:`rare`},statsSecret:{zh:`隐藏款`,en:`secret`},statsCollected:{zh:`已收集`,en:`collected`},statsStock:{zh:`今日余量`,en:`today stock`},announce:{zh:`公告`,en:`Notice`},announceText:{zh:`artdrew 当前 LIVE DROP：Brumlet / 雾姆团。当前心愿款：`,en:`Current artdrew LIVE DROP: Brumlet. Current wishlist figure: `}},drops:{eyebrow:{zh:`DROP BOARD`,en:`DROP BOARD`},title:{zh:`陆续上架的潮流艺术玩具`,en:`Collectible art toys arriving on artdrew`},intro:{zh:`这里是 artdrew 的发售板：已上架系列会保留档案，当前 LIVE 系列可以直接试玩抽盒，后续系列会在角色、包装和概率机制完成后开放。`,en:`This is artdrew's release board: archived drops keep their records, the live drop can be played now, and future series open after their characters, packaging, and odds systems are finished.`}},twilloop:{titleLine:{zh:`缝环团`,en:`Thread-loop repair residents`},lede:{zh:`诞生于深夜修补台的微型居民，由线轴、梭芯、拉链头、安全别针、布边条和空白洗标构成。它们用一圈圈缝线，把那些快松脱的小情绪重新打成可以收藏的环。`,en:`Tiny residents born on a late-night mending desk, made from spools, bobbins, zipper pulls, safety pins, fabric edges, and blank care labels. They loop loose feelings back into collectible little rituals.`},view:{zh:`查看设定`,en:`View Bible`},wish:{zh:`加入心愿`,en:`Add Wish`},wished:{zh:`已加入心愿`,en:`Wished`},specA:{zh:`6 款试缝阵容`,en:`6 test-stitch figures`},specB:{zh:`1% 隐藏线头`,en:`1% secret loose end`},specC:{zh:`PVC / 布料 / 金属配件`,en:`PVC / fabric / metal details`},idle:{zh:`当前状态：工作室预览，暂未开放抽盒。`,en:`Status: studio preview, not open for draws yet.`},wishedState:{zh:`当前状态：已记录本次浏览心愿，等待未来开放抽盒。`,en:`Status: wish noted for this browsing session, waiting for a future draw release.`},lineupTitle:{zh:`一族同源，不只是换色`,en:`One family, not just color swaps`},lineupCopy:{zh:`每款都保留线环身体、布面脸贴、双针孔眼和标签小脚，同时用不同金属件、缝线结构和修补动作拉开轮廓。`,en:`Every figure keeps the looped body, fabric face patch, twin stitch-dot eyes, and label feet, while different hardware, seam structures, and repair gestures separate the silhouettes.`}},draw:{title:{zh:`雾姆团抽盒机`,en:`Brumlet Draw Machine`},completion:{zh:`完成度`,en:`Completion`},stock:{zh:`今日余量`,en:`Stock`},wish:{zh:`心愿款`,en:`Wish`},pity:{zh:`距离保底`,en:`Pity left`},rules:{zh:`规则说明`,en:`Rules`},ruleText:{zh:`每次抽盒随机获得 1 个雾姆团角色`,en:`Each draw randomly opens 1 Brumlet figure`},stockSmall:{zh:`当前余量`,en:`stock left`},lever:{zh:`拉动抽盒机进行单抽`,en:`Pull the machine for one draw`},one:{zh:`单抽`,en:`Single`},ten:{zh:`十连`,en:`Ten Draw`},drawing:{zh:`开盒中`,en:`Opening`},soldOut:{zh:`已售罄`,en:`Sold out`},noSecret:{zh:`抽未出隐藏款`,en:`draws without a secret`},statusIdle:{zh:`等待开盒。单抽试手气，十连找雨后隐藏。`,en:`Waiting to open. Try a single draw or chase the rainy-night secret with ten.`},statusSoldOut:{zh:`今日余量已抽完。重置藏品可重新体验。`,en:`Today's stock is gone. Reset the shelf to try again.`},statusOpeningPrefix:{zh:`正在开启`,en:`Opening`},statusOpeningSuffix:{zh:`个 Brumlet 盲盒...`,en:`Brumlet blind boxes...`},statusWishHit:{zh:`心愿款命中`,en:`Wishlist hit`},statusSecret:{zh:`隐藏款出现了，已加入藏品墙。`,en:`A secret appeared and joined your shelf.`},statusRare:{zh:`本轮获得`,en:`This round opened`},statusRareSuffix:{zh:`个稀有款。`,en:`rare figures.`},statusCommon:{zh:`本轮都是常规款，重复款会转化为水珠。`,en:`This round was common; duplicates convert into ink.`},resultTitle:{zh:`抽中结果`,en:`Draw Result`},resultEmpty:{zh:`本轮结果会显示在这里`,en:`This round's result appears here`},allRecords:{zh:`全部记录`,en:`All Records`},reset:{zh:`重置藏品`,en:`Reset collection`},shelfTitle:{zh:`我的收藏`,en:`My Shelf`},shelfCopy:{zh:`已解锁角色会站上展示架`,en:`Unlocked figures stand on the display shelf`},viewAll:{zh:`查看全部`,en:`View All`},emptyWait:{zh:`等待开盒`,en:`Waiting`},emptyCollection:{zh:`当前筛选没有藏品`,en:`No figures match this filter`}},story:{seriesTitle:{zh:`当前系列：每一款都像一小段雨后天气`,en:`Current Drop: each figure feels like a tiny weather moment`},seriesCopy:{zh:`Brumlet 的每个角色都不是单纯换色：它们分别代表调暗、被雨声接住、靠近变暖、被光圈包住、准备出发和黑暗里还有光。`,en:`Brumlet figures are not color swaps: each one represents dimming down, being held by rain, warming up nearby, sitting inside a halo, getting ready to go, or finding light in the dark.`},bibleTitle:{zh:`每个角色先有情绪，再有造型`,en:`Every figure starts as a feeling, then becomes a shape`},bibleCopy:{zh:`雾姆团的核心不是“可爱小雾团”，而是一群努力保存雨后微光的小居民。抽到不同角色时，玩家得到的是一种情绪：被调暗、被接住、靠近变暖、准备出发，或者在黑暗里重新看见光。`,en:`Brumlet is not just a cute fog family. It is a group of small residents trying to preserve post-rain glimmers. Each draw gives the player a feeling: dimmed, held, warmed, ready to leave, or lit again in darkness.`},originTitle:{zh:`雨刚停下的一秒钟`,en:`The second after rain stops`},originCopy:{zh:`玻璃上的水珠、便利店门口的暖风和路灯倒影会慢慢聚在一起，凝成一群圆滚滚的雾姆居民。`,en:`Water drops on glass, warm air by a convenience-store door, and reflected streetlights gather into round little Brumlet residents.`},desireTitle:{zh:`把微光留久一点`,en:`Keep the glimmer a little longer`},desireCopy:{zh:`它们想把快散掉的雾、快熄掉的灯、快消失的倒影，变成可以被放上收藏架的小天气。`,en:`They want fading mist, sleepy lamps, and disappearing reflections to become small weather moments that can sit on a shelf.`},collectTitle:{zh:`收藏一段小情绪`,en:`Collect a small feeling`},collectCopy:{zh:`每一款都对应一种雨后情绪，收藏墙不是数量表，而是一张逐渐亮起来的夜间城市地图。`,en:`Each figure maps to a post-rain feeling, turning the shelf into a night-city map that slowly lights up.`},weakness:{zh:`弱点：`,en:`Weakness: `}},odds:{common:{zh:`常规款合计 66%`,en:`Common total 66%`},rare:{zh:`稀有款合计 33%`,en:`Rare total 33%`},secret:{zh:`隐藏款 1%`,en:`Secret 1%`},pity:{zh:`保底体验 30 抽`,en:`30-draw pity demo`}},collection:{title:{zh:`我的雾姆团藏品墙`,en:`My Brumlet Collection Wall`},filters:{all:{zh:`全部`,en:`All`},owned:{zh:`已拥有`,en:`Owned`},missing:{zh:`未解锁`,en:`Missing`},common:{zh:`常规`,en:`Common`},rare:{zh:`稀有`,en:`Rare`},secret:{zh:`隐藏`,en:`Secret`}},recentTitle:{zh:`最近开盒`,en:`Recent Opens`},recentCopy:{zh:`只保留最近 18 次记录`,en:`Only the latest 18 records are kept`},noHistory:{zh:`还没有开盒记录。`,en:`No draw history yet.`},secretOwned:{zh:`隐藏款已入柜`,en:`Secret in shelf`},secretMissing:{zh:`隐藏款未获得`,en:`Secret missing`}},account:{title:{zh:`artdrew 用户中心`,en:`artdrew Account Center`},introGuest:{zh:`登录后生成收藏者身份，把当前抽盒进度、心愿款和奖励资产汇总成一张会员档案。`,en:`Sign in to create a collector identity and summarize your draw progress, wishlist, and reward assets in one member profile.`},introUser:{zh:`会员档案会汇总当前抽盒进度、奖励资产、心愿款和最近记录。`,en:`Your member profile summarizes draw progress, reward assets, wishlist, and recent opens.`},create:{zh:`创建账户`,en:`Create Account`},login:{zh:`登录`,en:`Sign In`},logout:{zh:`退出登录`,en:`Sign Out`},viewShelf:{zh:`查看收藏室`,en:`View Shelf`},guest:{zh:`游客试玩档案`,en:`Guest Trial Profile`},guestMessage:{zh:`游客试玩中。创建账户后会生成本次体验的会员档案。`,en:`Guest trial active. Creating an account generates a member profile for this session.`},registerMessage:{zh:`创建收藏者身份，继续保存本次体验节奏。`,en:`Create a collector identity and keep this session's rhythm going.`},loginMessage:{zh:`欢迎回来，继续查看你的会员档案。`,en:`Welcome back. Continue into your member profile.`},profileCreatedPrefix:{zh:`欢迎，`,en:`Welcome, `},profileCreatedSuffix:{zh:`。你的 artdrew 会员档案已生成。`,en:`. Your artdrew member profile is ready.`},signedInPrefix:{zh:`已登录为 `,en:`Signed in as `},signedInSuffix:{zh:`。抽盒记录会汇总到账户面板。`,en:`. Draw records now summarize in your account panel.`},signedOutSuffix:{zh:` 已退出。当前仍可继续游客试玩。`,en:` signed out. You can keep playing as a guest.`},signedOutStatus:{zh:`已退出账户，藏品试玩状态仍保留在本机。`,en:`Signed out. Local collection trial state remains on this device.`},memberNo:{zh:`会员编号`,en:`Member No.`},contact:{zh:`联系方式`,en:`Contact`},joined:{zh:`加入日期`,en:`Joined`},progress:{zh:`雾姆团进度`,en:`Brumlet Progress`},progressAria:{zh:`收藏完成度`,en:`Collection completion`},currentWish:{zh:`当前心愿款：`,en:`Current wishlist: `},pityLeft:{zh:`；隐藏保底还差`,en:`; secret pity left `},pityUnit:{zh:` 抽。`,en:` draws.`},authLogin:{zh:`登录账户`,en:`Sign In`},authRegister:{zh:`创建账户`,en:`Create Account`},authTabs:{zh:`账户操作`,en:`Account actions`},registerTab:{zh:`注册`,en:`Register`},nickname:{zh:`昵称`,en:`Nickname`},nicknamePlaceholder:{zh:`例如 雨后收藏家`,en:`e.g. Rain Collector`},contactField:{zh:`邮箱或手机号`,en:`Email or phone`},accessCode:{zh:`体验码`,en:`Demo code`},note:{zh:`本阶段为静态原型，只生成本次会话身份，不保存密码。`,en:`This static prototype only creates an in-session identity and does not store passwords.`},submitRegister:{zh:`创建并进入`,en:`Create and Enter`},submitLogin:{zh:`登录并进入`,en:`Sign In and Enter`},needContact:{zh:`请输入邮箱或手机号。`,en:`Please enter an email or phone number.`},close:{zh:`关闭`,en:`Close`},closeWindow:{zh:`关闭登录窗口`,en:`Close sign-in window`}},loop:{title:{zh:`盲盒循环机制`,en:`Blind-Box Loop System`},intro:{zh:`目标、保底、任务和转化都明示。没有真实付费入口，只做原型体验。`,en:`Goals, pity, missions, and conversion are visible. There is no real payment entry, only a prototype loop.`},walletAria:{zh:`机制资产`,en:`Loop assets`},pityTitle:{zh:`隐藏保底轨道`,en:`Secret Pity Track`},pityCopy:{zh:`30 抽内必出隐藏款；已累计`,en:`A secret is guaranteed within 30 draws; currently`},pityCopyTail:{zh:`抽未出隐藏。`,en:`draws without a secret.`},wishTitle:{zh:`心愿火花`,en:`Wish Sparks`},wishSecret:{zh:`隐藏心愿走隐藏保底`,en:`Secret wishes use the secret pity track`},wishTrigger:{zh:`抽内触发`,en:`draws to trigger`},wishCopyTail:{zh:` 是当前心愿款。非隐藏心愿连续未中会进入保护。`,en:` is the current wishlist figure. Non-secret wishes enter protection after repeated misses.`},rewardTitle:{zh:`奖励工坊`,en:`Reward Workshop`},rewardCopy:{zh:`用任务获得的余光章补货，延长本地试玩池。`,en:`Use mission tokens to restock and extend the local trial pool.`},restockButton:{zh:`余光章补货`,en:`tokens restock`},restTitle:{zh:`节奏保护`,en:`Pace Guard`},restDone:{zh:`已完成一轮深度体验，可以先停一下再回来。`,en:`A full trial loop is complete. Take a pause and come back later.`},restMore:{zh:`再开`,en:`Open`},restMoreTail:{zh:`盒触发休息提醒。`,en:`more boxes to trigger a rest reminder.`},safeNote:{zh:`透明概率 / 可重置 / 无付费入口`,en:`Transparent odds / Resettable / No payment entry`},todayMissions:{zh:`今日任务`,en:`Today missions`},claimed:{zh:`已领取`,en:`Claimed`},claim:{zh:`领取`,en:`Claim`},progress:{zh:`进度`,en:`progress`},firstTitle:{zh:`开盒启动`,en:`First Open`},firstDetail:{zh:`开 1 个盲盒`,en:`Open 1 blind box`},tenTitle:{zh:`十连节奏`,en:`Ten-Draw Rhythm`},tenDetail:{zh:`累计开 10 个盲盒`,en:`Open 10 blind boxes total`},unlockTitle:{zh:`建立图鉴`,en:`Build the Catalog`},unlockDetail:{zh:`解锁 3 款角色`,en:`Unlock 3 figures`},wishMissionTitle:{zh:`锁定心愿`,en:`Set a Wish`},wishMissionDetail:{zh:`主动设置 1 次心愿款`,en:`Set a wishlist figure once`},duplicateTitle:{zh:`重复转化`,en:`Duplicate Conversion`},duplicateDetail:{zh:`获得 3 点重复水珠`,en:`Earn 3 duplicate ink`},missionDonePrefix:{zh:`任务「`,en:`Mission "`},missionDoneMiddle:{zh:`」完成，获得`,en:`" complete, earned`},missionDoneSuffix:{zh:`枚余光章。`,en:`afterglow tokens.`},restockedPrefix:{zh:`已补货`,en:`Restocked`},restockedSuffix:{zh:`盒，继续试玩。`,en:`boxes. Keep playing.`}}},c={"sleep-switch":{quote:`Dimming the rainy night until it stops stinging.`,personality:[`slow to warm`,`quiet`,`caretaker`],emotion:`gently dimmed`,story:`Sleep Switch woke inside a night light by the window, right before it went out. It dislikes glare and always lowers the night until everyone can still see one another.`,desire:`To guard every light that is about to fall asleep.`,weakness:`It worries about disturbing others and sometimes dims itself too far.`,relationship:`It reminds Signal Bead not to flash too fast and keeps one warm square of light for Blackout Bloom.`},"umbra-drop":{quote:`Opening a tiny umbrella to collect soft taps on glass.`,personality:[`sensitive`,`romantic`,`a little shy`],emotion:`held by rain sound`,story:`Umbra Drop fell from the edge of a clear umbrella. It stores tiny sounds from the windowpane inside its umbrella ribs and releases them slowly when the sky clears.`,desire:`To prove quiet rain sounds can be collected too.`,weakness:`It hides inside its umbrella shadow whenever praised.`,relationship:`It follows Halo Puddle and borrows its reflection to practice being less shy.`},ventling:{quote:`Breathing a puff of warm fog from the vent.`,personality:[`reliable`,`stubborn`,`slow moving`],emotion:`warmer when close`,story:`Ventling lives behind the grille by a convenience-store entrance. Its voice is a low breeze; the shell is cool and hard, but a warm mist keeps turning inside.`,desire:`To gather mist that has been blown apart.`,weakness:`It cares so much about direction that turning around takes a long time.`,relationship:`Sleep Switch often asks it to breathe warmth back into cooling window glass.`},"halo-puddle":{quote:`Turning a streetlight reflection into a small home.`,personality:[`gentle`,`unhurried`,`memory keeper`],emotion:`wrapped in a halo`,story:`Halo Puddle rose from the golden ring a streetlight left in a puddle. It lingers because every passerby leaves a little moving shadow behind.`,desire:`To keep brief reflections around a little longer.`,weakness:`It can sink into memories and has trouble saying goodbye.`,relationship:`It is Umbra Drop's practice mirror and Signal Bead's favorite station to pass.`},"signal-bead":{quote:`When the green light blinks, courage goes on the shoulder.`,personality:[`quick`,`brave`,`social`],emotion:`ready to go`,story:`Signal Bead came from a flickering crossing light. It carries a small orange bead to remind everyone that moving forward is allowed.`,desire:`To send one small signal before every hesitation.`,weakness:`It rushes to encourage others and sometimes misses that they are not ready yet.`,relationship:`It keeps trying to make Ventling move faster, while Halo Puddle keeps slowing it down.`},"blackout-bloom":{quote:`After the power goes out, one small window keeps glowing.`,personality:[`quiet`,`mysterious`,`patient`],emotion:`light remains in the dark`,story:`Blackout Bloom appears only when the whole street suddenly loses power. Its body is dark mist, but a tiny lit window on its chest says the night has not fully closed.`,desire:`To prove that even without electricity, a glimmer can bloom.`,weakness:`It fears strong light and fears being called too dark.`,relationship:`Sleep Switch softens its edges, while Umbra Drop hides it inside the rain sound.`}},l={"Pin Sash":{trait:`Pins loose little things before they fall away.`},"Zip Pull":{trait:`One pull opens the silence.`},"Button Guard":{trait:`Guards the last button like a tiny shield.`},"Bobbin Pack":{trait:`Carries a small spool of backup courage.`},"Thimble Hood":{trait:`Bounces softly even after being poked.`},"Loose End":{trait:`Appears when a feeling is about to unravel.`}},u={morrifolio:{cnName:`Paper-margin residents`,launchLabel:`Archived release`,lineupLabel:`6 page-edge figures`,description:`artdrew's first paper-margin themed series, preserving the collecting mood of indie illustration, zine tables, and exhibition labels.`,actionLabel:`View Archive`},brumlet:{cnName:`Rainy micro-weather residents`,launchLabel:`Live draw open`,lineupLabel:`6 figures + 1% secret`,description:`The current featured art-toy drop, formed from rain glass, streetlight halos, and warm vent mist.`,actionLabel:`Enter Draw`},twilloop:{cnName:`Thread-loop repair residents`,launchLabel:`Character bible complete`,lineupLabel:`6 figures + 1% loose-end secret`,description:`A new original art-toy family wound from midnight mending desks, spools, zipper pulls, and fabric-edge strips.`,actionLabel:`View Bible`},"glow-laundry":{cnName:`Night laundromat glimmers`,launchLabel:`World-building in queue`,lineupLabel:`Not revealed`,description:`A future city-glimmer series from coin laundromat steam, drum halos, and lost socks.`,actionLabel:`Remind Me`}},d=e=>o(e===`COMMON`?s.labels.common:e===`RARE`?s.labels.rare:s.labels.secret),f=e=>{if(a===`zh`)return{title:e.cnName,subtitle:e.name,quote:e.quote,personality:e.personality,emotion:e.emotion,story:e.story,desire:e.desire,weakness:e.weakness,relationship:e.relationship,initial:e.cnName.slice(0,1)};let t=c[e.id];return{title:e.name,subtitle:e.cnName,quote:t.quote,personality:t.personality,emotion:t.emotion,story:t.story,desire:t.desire,weakness:t.weakness,relationship:t.relationship,initial:e.name.slice(0,1)}},p=e=>a===`zh`?e:{...e,...u[e.id]},ee=(e,t)=>a===`zh`?t:l[e]?.trait??t,m=`brumlet-collection-v1`,te=`brumlet-history-v1`,ne=`brumlet-pity-v1`,h=`brumlet-wishlist-v1`,re=`brumlet-loop-v1`,ie=48,g=30,_=12,v=5,ae=5,oe=[{id:`all`,label:`全部`},{id:`owned`,label:`已拥有`},{id:`missing`,label:`未解锁`},{id:`common`,label:`常规`},{id:`rare`,label:`稀有`},{id:`secret`,label:`隐藏`}],se=()=>{try{return JSON.parse(localStorage.getItem(m)??`{}`)}catch{return{}}},ce=()=>{try{return JSON.parse(localStorage.getItem(te)??`[]`)}catch{return[]}},le=()=>{let e={tokens:0,duplicateInk:0,wishSparks:0,stockBoost:0,wishSet:!1,claimedMissions:[]};try{let t=JSON.parse(localStorage.getItem(re)??`{}`);return{tokens:Number.isFinite(t.tokens)?Number(t.tokens):e.tokens,duplicateInk:Number.isFinite(t.duplicateInk)?Number(t.duplicateInk):e.duplicateInk,wishSparks:Number.isFinite(t.wishSparks)?Number(t.wishSparks):e.wishSparks,stockBoost:Number.isFinite(t.stockBoost)?Number(t.stockBoost):e.stockBoost,wishSet:!!t.wishSet,claimedMissions:Array.isArray(t.claimedMissions)?t.claimedMissions:[]}}catch{return e}},ue=e=>{localStorage.setItem(m,JSON.stringify(e))},de=e=>{localStorage.setItem(te,JSON.stringify(e.slice(-18)))},y=()=>{localStorage.setItem(re,JSON.stringify(w))},b=se(),x=ce(),S=Number(localStorage.getItem(ne)??0),C=localStorage.getItem(h)??`blackout-bloom`,w=le(),T=[],E=`all`,D=!1,O=null,k=o(s.draw.statusIdle),A=null,j=`login`,M=!1,N=o(s.account.guestMessage),fe=document.querySelector(`#app`);if(!fe)throw Error(`App root not found`);fe.innerHTML=`
  <main class="site-shell">
    <nav class="topbar" aria-label="Primary">
      <a class="brand" href="#top" aria-label="artdrew home">
        <span class="brand-mark" aria-hidden="true">
          <img src="assets/artdrew-logo.svg" alt="" />
        </span>
        <span class="brand-lockup">
          <span class="brand-name">artdrew</span>
          <span class="brand-caption">ART TOY DROP</span>
        </span>
      </a>
      <div class="nav-links">
        <a class="active" href="#top">首页</a>
        <a href="#drops">上新</a>
        <a href="#twilloop">新IP</a>
        <a href="#draw">抽盒机</a>
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
        ${oe.map(e=>`
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
`;var pe=document.querySelector(`#resultGrid`),me=document.querySelector(`#collectionGrid`),he=document.querySelector(`#recentGrid`),P=document.querySelector(`#blindBox`),F=document.querySelector(`#boxStage`),ge=document.querySelector(`#pityCount`),_e=document.querySelector(`#pityRemain`),ve=document.querySelector(`#heroCompletion`),ye=document.querySelector(`#drawCompletion`),be=document.querySelector(`#heroWish`),xe=document.querySelector(`#wishName`),Se=document.querySelector(`#heroStock`),Ce=document.querySelector(`#drawStock`),we=document.querySelector(`#machineStock`),Te=document.querySelector(`#walletInk`),Ee=document.querySelector(`#walletToken`),I=document.querySelector(`#walletCompletion`),De=document.querySelector(`#drawStatus`),Oe=document.querySelector(`#resultSummary`),ke=document.querySelector(`#collectionSummary`),Ae=document.querySelector(`#wishCard`),je=document.querySelector(`#oddsGrid`),L=document.querySelector(`#loopPanel`),Me=document.querySelector(`#shelfPreview`),Ne=document.querySelector(`#dropBoard`),Pe=document.querySelector(`#emotionMap`),Fe=document.querySelectorAll(`[data-filter]`),Ie=document.querySelectorAll(`[data-language]`),Le=document.querySelectorAll(`.nav-links a`),R=document.querySelector(`#drawOneButton`),z=document.querySelector(`#drawTenButton`),B=document.querySelector(`#leverButton`),Re=document.querySelector(`#resetButton`),V=document.querySelector(`#twilloopWishButton`),H=document.querySelector(`#twilloopWishState`),ze=document.querySelector(`#accountButton`),Be=document.querySelector(`#accountLabel`),Ve=document.querySelector(`#accountIntro`),U=document.querySelector(`#accountPrimaryAction`),W=document.querySelector(`#accountSecondaryAction`),He=document.querySelector(`#accountDashboard`),G=document.querySelector(`#authModal`),Ue=document.querySelector(`#authDialog`),We=t=>e.find(e=>e.id===t),K=()=>We(C)??e[e.length-1],q=()=>Object.values(b).reduce((e,t)=>e+t,0),J=()=>e.filter(e=>(b[e.id]??0)>0).length,Ge=()=>Math.max(0,ie+w.stockBoost-q()),Ke=()=>Math.round(J()/e.length*100),Y=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]??e),qe=()=>`AD-${new Date().getFullYear()}-${Math.floor(1e3+Math.random()*9e3)}`,Je=e=>e.trim().replace(/\s+/g,``),Ye=e=>{let t=e.trim();return t?(t.split(`@`)[0]||t).slice(0,12):a===`zh`?`artdrew 玩家`:`artdrew player`},Xe=()=>A?J()>=5||q()>=18?a===`zh`?`雾光藏家`:`Mistlight Collector`:J()>=3||q()>=8?a===`zh`?`雨后会员+`:`After-Rain Member+`:a===`zh`?`雨后会员`:`After-Rain Member`:a===`zh`?`游客`:`Guest`,Ze=()=>A?(A.displayName.trim().replace(/\s+/g,``).slice(0,2)||`AD`).toUpperCase():`${J()}/${e.length}`,Qe=e=>{j=e,M=!0,N=o(e===`register`?s.account.registerMessage:s.account.loginMessage),Q()},$e=()=>{M=!1,Q()},et=(e,t)=>{let n=Je(t),r=e.trim()||Ye(n);A={displayName:r,handle:`@${r.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g,``).slice(0,16)||`artdrew`}`,contact:n||`demo@artdrew.local`,memberNo:qe(),createdAt:new Date().toLocaleDateString(a===`zh`?`zh-CN`:`en-US`,{month:`2-digit`,day:`2-digit`})},M=!1,N=`${o(s.account.profileCreatedPrefix)}${A.displayName}${o(s.account.profileCreatedSuffix)}`,k=`${o(s.account.signedInPrefix)}${A.displayName}${o(s.account.signedInSuffix)}`,window.location.hash=`#account`,$(),Q()},tt=()=>{if(S>=g-1)return e.find(e=>e.rarity===`SECRET`)??e[0];let t=K();if(w.wishSparks>=_-1&&t.rarity!==`SECRET`)return t;let n=Math.random()*100,r=0;for(let t of e)if(r+=t.probability,n<=r)return t;return e[0]},nt=e=>{if(D)return;let t=Ge(),n=Math.min(e,t);if(n<=0){k=o(s.draw.statusSoldOut),Q();return}D=!0,T=[],O=null,k=`${o(s.draw.statusOpeningPrefix)} ${n} ${o(s.draw.statusOpeningSuffix)}`,Q(),P?.classList.remove(`reveal`),P?.classList.add(`shake`),window.setTimeout(()=>{P?.classList.remove(`shake`),P?.classList.add(`reveal`);for(let e=0;e<n;e+=1){let e=tt(),t=(b[e.id]??0)>0;T.push(e),t&&(w.duplicateInk+=e.rarity===`SECRET`?5:e.rarity===`RARE`?2:1),w.wishSparks=e.id===C?0:Math.min(_,w.wishSparks+1),b[e.id]=(b[e.id]??0)+1,x.push(e.id),S=e.rarity===`SECRET`?0:S+1}localStorage.setItem(ne,String(S)),ue(b),de(x),y(),D=!1;let e=K(),t=T.filter(t=>t.id===e.id).length,r=T.filter(e=>e.rarity===`SECRET`).length,i=T.filter(e=>e.rarity===`RARE`).length;O=r?`SECRET`:t?`WISH`:i?`RARE`:`COMMON`;let c=f(e);k=t?a===`zh`?`${o(s.draw.statusWishHit)} ${t} 次：${c.title}。`:`${o(s.draw.statusWishHit)} ${t} time${t>1?`s`:``}: ${c.title}.`:r?o(s.draw.statusSecret):i?`${o(s.draw.statusRare)} ${i} ${o(s.draw.statusRareSuffix)}`:o(s.draw.statusCommon),Q()},520)},rt=(e,n=0,r=!1)=>{let i=e.id===C,c=f(e);return`
    <article class="figure-card ${t[e.rarity]} ${r?`compact`:``} ${n>0?`owned`:`locked`} ${i?`wish`:``}" style="--figure-color: ${e.color}">
      ${r&&n===1?`<span class="new-tag">NEW!</span>`:``}
      <div class="toy-orb" style="--toy-color: ${e.color}">
        <span>${c.initial}</span>
      </div>
      <div>
        <div class="card-line">
          <h3>${c.title}</h3>
          <span class="rarity ${t[e.rarity]}">${d(e.rarity)}</span>
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
  `},it=()=>`
  <div class="empty-result">
    <span>?</span>
    <p>${o(s.draw.emptyWait)}</p>
  </div>
`,at=()=>{if(!Oe)return;if(!T.length){Oe.textContent=o(s.draw.resultEmpty);return}let e=T.reduce((e,t)=>(e[t.rarity]+=1,e),{COMMON:0,RARE:0,SECRET:0});Oe.textContent=`${o(s.labels.common)} ${e.COMMON} / ${o(s.labels.rare)} ${e.RARE} / ${o(s.labels.secret)} ${e.SECRET}`},ot=()=>{pe&&(pe.innerHTML=T.length?T.map(e=>rt(e,b[e.id],!0)).join(``):it(),at())},st=e=>{let t=(b[e.id]??0)>0;return E===`owned`?t:E===`missing`?!t:E===`common`?e.rarity===`COMMON`:E===`rare`?e.rarity===`RARE`:E===`secret`?e.rarity===`SECRET`:!0},ct=()=>{Fe.forEach(e=>{let t=e.dataset.filter===E,n=e.dataset.filter;e.classList.toggle(`active`,t),e.setAttribute(`aria-pressed`,String(t)),n&&s.collection.filters[n]&&(e.textContent=o(s.collection.filters[n]))})},lt=()=>{if(!me)return;let t=e.filter(st);me.innerHTML=t.length?t.map(e=>rt(e,b[e.id]??0)).join(``):`<div class="empty-result collection-empty"><span>0</span><p>${o(s.draw.emptyCollection)}</p></div>`},ut=()=>{Me&&(Me.innerHTML=e.map(e=>{let n=b[e.id]??0,r=f(e);return`
        <article class="shelf-item ${t[e.rarity]} ${n>0?`owned`:`locked`}" style="--toy-color: ${e.color}">
          <div class="shelf-toy"><span>${n>0?r.initial:`?`}</span></div>
          <strong>${r.title}</strong>
          <small>${n>0?`x${n}`:d(e.rarity)}</small>
        </article>
      `}).join(``))},dt=()=>{Ne&&(Ne.innerHTML=n.map(e=>{let t=p(e);return`
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
      `}).join(``))},ft=()=>{if(!Ae)return;let e=K(),t=b[e.id]??0,n=f(e);Ae.innerHTML=`
    <div class="wish-card-copy">
      <span>${o(s.labels.wishlist)}</span>
      <strong>${n.title}</strong>
      <small>${t>0?`${o(s.labels.owned)} x${t}`:`${e.probability}% ${o(s.labels.probability)}`}</small>
    </div>
    <button class="mini-button" type="button" data-random-wish>${a===`zh`?`换一款`:`Change`}</button>
  `},pt=()=>{je&&(je.innerHTML=e.map(e=>{let n=f(e);return`
        <article class="odds-card ${t[e.rarity]} ${e.id===C?`wish`:``}">
          <div class="card-line">
            <h3>${n.title}</h3>
            <span class="rarity ${t[e.rarity]}">${d(e.rarity)}</span>
          </div>
          <p>${n.subtitle}</p>
          <small>${n.emotion}</small>
          <div class="odds-bar" aria-label="${n.title} ${o(s.labels.probability)} ${e.probability}%">
            <span style="width: ${e.probability}%"></span>
          </div>
          <strong>${e.probability}%</strong>
        </article>
      `}).join(``))},mt=()=>{Pe&&(Pe.innerHTML=e.map(e=>{let n=f(e);return`
        <article class="emotion-card ${t[e.rarity]}" style="--toy-color: ${e.color}">
          <div class="emotion-orb"><span>${n.initial}</span></div>
          <div>
            <div class="card-line">
              <h3>${n.title}</h3>
              <span class="rarity ${t[e.rarity]}">${d(e.rarity)}</span>
            </div>
            <p class="emotion-line">${n.emotion}</p>
            <p>${n.story}</p>
            <p class="weakness-line">${o(s.story.weakness)}${n.weakness}</p>
            <div class="personality-row">
              ${n.personality.map(e=>`<span>${e}</span>`).join(``)}
            </div>
          </div>
        </article>
      `}).join(``))},ht=(e,t)=>Math.min(100,Math.round(Math.min(e,t)/t*100)),gt=(e,t,n,r=``)=>`
  <div class="loop-progress ${r}" aria-label="${n} ${Math.min(e,t)} / ${t}">
    <span style="width: ${ht(e,t)}%"></span>
  </div>
`,_t=()=>[{id:`first-draw`,title:o(s.loop.firstTitle),detail:o(s.loop.firstDetail),target:1,reward:1,progress:q()},{id:`ten-draw`,title:o(s.loop.tenTitle),detail:o(s.loop.tenDetail),target:10,reward:3,progress:q()},{id:`three-unlocks`,title:o(s.loop.unlockTitle),detail:o(s.loop.unlockDetail),target:3,reward:2,progress:J()},{id:`set-wish`,title:o(s.loop.wishMissionTitle),detail:o(s.loop.wishMissionDetail),target:1,reward:1,progress:+!!w.wishSet},{id:`duplicate-ink`,title:o(s.loop.duplicateTitle),detail:o(s.loop.duplicateDetail),target:3,reward:2,progress:w.duplicateInk}],vt=()=>{if(!L)return;let e=q(),t=K(),n=f(t),r=Math.max(0,g-S),i=t.rarity===`SECRET`?o(s.loop.wishSecret):`${Math.max(0,_-w.wishSparks)} ${o(s.loop.wishTrigger)}`,a=_t(),c=w.claimedMissions.length,l=w.tokens<v,u=e>=30?o(s.loop.restDone):`${o(s.loop.restMore)} ${30-e} ${o(s.loop.restMoreTail)}`;L.innerHTML=`
    <div class="loop-head">
      <div>
        <p class="eyebrow">GAME LOOP</p>
        <h3>${o(s.loop.title)}</h3>
        <p>${o(s.loop.intro)}</p>
      </div>
      <div class="loop-wallet" aria-label="${o(s.loop.walletAria)}">
        <span><strong>${w.tokens}</strong> ${o(s.labels.tokens)}</span>
        <span><strong>${w.duplicateInk}</strong> ${o(s.labels.duplicateInk)}</span>
        <span><strong>${c}/${a.length}</strong> ${o(s.labels.tasks)}</span>
      </div>
    </div>

    <div class="loop-grid">
      <article class="loop-card">
        <div class="card-line">
          <h4>${o(s.loop.pityTitle)}</h4>
          <strong>${r}</strong>
        </div>
        <p>${o(s.loop.pityCopy)} ${S} ${o(s.loop.pityCopyTail)}</p>
        ${gt(S,g,`${o(s.loop.pityTitle)} ${o(s.loop.progress)}`,`secret`)}
      </article>

      <article class="loop-card wish">
        <div class="card-line">
          <h4>${o(s.loop.wishTitle)}</h4>
          <strong>${i}</strong>
        </div>
        <p>${n.title}${o(s.loop.wishCopyTail)}</p>
        ${gt(w.wishSparks,_,`${o(s.loop.wishTitle)} ${o(s.loop.progress)}`,`wish`)}
      </article>

      <article class="loop-card reward-card">
        <div class="card-line">
          <h4>${o(s.loop.rewardTitle)}</h4>
          <strong>+${w.stockBoost}</strong>
        </div>
        <p>${o(s.loop.rewardCopy)}</p>
        <button class="mini-button loop-action" type="button" data-loop-reward="restock" ${l?`disabled`:``}>
          ${v} ${o(s.loop.restockButton)} +${ae}
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
      ${a.map(e=>{let t=w.claimedMissions.includes(e.id),n=e.progress>=e.target;return`
            <article class="mission-row ${t?`claimed`:``}">
              <div>
                <h4>${e.title}</h4>
                <p>${e.detail}</p>
                ${gt(e.progress,e.target,`${e.title} ${o(s.loop.progress)}`)}
              </div>
              <button class="mini-button" type="button" data-claim-mission="${e.id}" ${t||!n?`disabled`:``}>
                ${t?o(s.loop.claimed):n?`${o(s.loop.claim)} +${e.reward}`:`${Math.min(e.progress,e.target)}/${e.target}`}
              </button>
            </article>
          `}).join(``)}
    </div>
  `},yt=()=>{if(!he)return;let e=x.slice(-18).reverse().map(We).filter(e=>!!e);he.innerHTML=e.length?e.map(e=>{let n=f(e);return`
            <span class="recent-chip ${t[e.rarity]}" style="--toy-color: ${e.color}">
              ${n.title}
            </span>
          `}).join(``):`<p class="muted-line">${o(s.collection.noHistory)}</p>`},bt=()=>{if(!ke)return;let t=q(),n=J(),r=(b[`blackout-bloom`]??0)>0;ke.innerHTML=`
    <span>${n}/${e.length} ${o(s.labels.unlocked)}</span>
    <span>${t} ${o(s.labels.collectionItem)}</span>
    <span>${o(r?s.collection.secretOwned:s.collection.secretMissing)}</span>
  `},xt=()=>{let n=J(),r=q(),i=K(),a=Xe();if(ze?.classList.toggle(`signed-in`,!!A),Be&&(Be.textContent=A?A.displayName:o(s.account.login)),Ve&&(Ve.textContent=o(A?s.account.introUser:s.account.introGuest)),U&&(U.textContent=o(A?s.account.viewShelf:s.account.create),U.toggleAttribute(`data-auth-open`,!A),A||(U.dataset.authOpen=`register`),U.toggleAttribute(`data-account-jump`,!!A),A&&(U.dataset.accountJump=`#collection`)),W&&(W.textContent=o(A?s.account.logout:s.account.login),W.toggleAttribute(`data-auth-open`,!A),A||(W.dataset.authOpen=`login`),W.toggleAttribute(`data-sign-out`,!!A)),!He)return;let c=x.slice(-5).reverse().map(We).filter(e=>!!e),l=c.length?c.map(e=>{let n=f(e);return`<span class="recent-chip ${t[e.rarity]}">${n.title}</span>`}).join(``):`<p class="muted-line">${o(s.collection.noHistory)}</p>`,u=f(i);if(!A){He.innerHTML=`
      <article class="account-panel account-empty-panel">
        <div class="account-badge">GUEST</div>
        <h3>${o(s.account.guest)}</h3>
        <p>${N}</p>
        <div class="account-stat-grid">
          <span><strong>${n}/${e.length}</strong> ${o(s.labels.unlocked)}</span>
          <span><strong>${r}</strong> ${o(s.labels.collectionItem)}</span>
          <span><strong>${w.tokens}</strong> ${o(s.labels.tokens)}</span>
          <span><strong>${u.title}</strong> ${o(s.labels.wishlist)}</span>
        </div>
        <div class="account-note-row">
          <span>${o(s.labels.noPayment)}</span>
          <span>${o(s.labels.noPassword)}</span>
          <span>${o(s.labels.browserPrototype)}</span>
        </div>
      </article>
    `;return}let d=Y(A.displayName),p=Y(A.handle),ee=Y(A.contact),m=Y(A.memberNo);He.innerHTML=`
    <article class="account-panel profile-panel">
      <div class="account-badge">${a}</div>
      <div class="profile-head">
        <div class="profile-avatar">${Ze()}</div>
        <div>
          <h3>${d}</h3>
          <p>${p}</p>
        </div>
      </div>
      <dl class="profile-list">
        <div><dt>${o(s.account.memberNo)}</dt><dd>${m}</dd></div>
        <div><dt>${o(s.account.contact)}</dt><dd>${ee}</dd></div>
        <div><dt>${o(s.account.joined)}</dt><dd>${A.createdAt}</dd></div>
      </dl>
    </article>

    <article class="account-panel">
      <div class="account-badge">DROP 02</div>
      <h3>${o(s.account.progress)}</h3>
      <div class="account-stat-grid">
        <span><strong>${n}/${e.length}</strong> ${o(s.labels.unlocked)}</span>
        <span><strong>${r}</strong> ${o(s.labels.collectionItem)}</span>
        <span><strong>${w.duplicateInk}</strong> ${o(s.labels.duplicateInk)}</span>
        <span><strong>${w.tokens}</strong> ${o(s.labels.tokens)}</span>
      </div>
      <div class="account-progress" aria-label="${o(s.account.progressAria)} ${Ke()}%">
        <span style="width: ${Ke()}%"></span>
      </div>
      <p class="account-mini-copy">${o(s.account.currentWish)}${u.title}${o(s.account.pityLeft)} ${Math.max(0,g-S)}${o(s.account.pityUnit)}</p>
    </article>

    <article class="account-panel account-recent-panel">
      <div class="account-badge">RECENT</div>
      <h3>${o(s.collection.recentTitle)}</h3>
      <div class="recent-grid">${l}</div>
    </article>
  `},St=()=>{if(!G||!Ue)return;if(G.classList.toggle(`hidden`,!M),!M){Ue.innerHTML=``;return}let e=j===`register`;Ue.innerHTML=`
    <div class="auth-head">
      <div>
        <p class="eyebrow">ARTDREW ID</p>
        <h3 id="authTitle">${o(e?s.account.authRegister:s.account.authLogin)}</h3>
      </div>
      <button class="icon-button" type="button" data-auth-close aria-label="${o(s.account.close)}">×</button>
    </div>
    <div class="auth-tabs" role="tablist" aria-label="${o(s.account.authTabs)}">
      <button type="button" data-auth-mode="login" aria-selected="${j===`login`}">${o(s.account.login)}</button>
      <button type="button" data-auth-mode="register" aria-selected="${j===`register`}">${o(s.account.registerTab)}</button>
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
      <p class="auth-message">${N}</p>
    </form>
  `},X=(e,t)=>{let n=document.querySelector(e);n&&(n.textContent=t)},Z=(e,t)=>{let n=document.querySelector(e);if(!n)return;let r=Array.from(n.childNodes).find(e=>e.nodeType===Node.TEXT_NODE);if(r){r.textContent=` ${t}`;return}n.append(document.createTextNode(` ${t}`))},Ct=(e,t)=>{let n=document.querySelector(e)?.nextElementSibling;n instanceof HTMLParagraphElement&&(n.textContent=t)},wt=()=>{let e=document.querySelector(`.twilloop-card-grid`);e&&(e.innerHTML=r.map(e=>`
        <article class="twilloop-card ${e.rarity.toLowerCase()}" style="--twilloop-color: ${e.color}">
          <span>${e.rarity===`COMMON`?o(s.labels.common):e.rarity===`RARE`?o(s.labels.rare):o(s.labels.secret)}</span>
          <h4>${a===`zh`?e.cnName:e.name}</h4>
          <p>${a===`zh`?e.name:e.cnName}</p>
          <small>${ee(e.name,e.trait)}</small>
        </article>
      `).join(``))},Tt=()=>{document.documentElement.lang=a===`zh`?`zh-CN`:`en`,document.title=o(s.meta.title),document.querySelector(`meta[name="description"]`)?.setAttribute(`content`,o(s.meta.description)),Ie.forEach(e=>{let t=e.dataset.language===a;e.classList.toggle(`active`,t),e.setAttribute(`aria-pressed`,String(t))});let e=[`top`,`drops`,`twilloop`,`draw`,`story`,`collection`,`odds`,`account`];Le.forEach((t,n)=>{let r=e[n];r&&(t.textContent=o(s.nav[r]))}),document.querySelector(`.nav-actions`)?.setAttribute(`aria-label`,a===`zh`?`玩家资产`:`Player assets`);let t=document.querySelectorAll(`.wallet-plus`);t[0]?.setAttribute(`aria-label`,a===`zh`?`重复水珠说明`:`Duplicate ink info`),t[1]?.setAttribute(`aria-label`,a===`zh`?`余光章说明`:`Afterglow token info`),ze?.setAttribute(`aria-label`,o(A?s.account.viewShelf:s.account.login)),X(`.hero-cn`,o(s.hero.nameLine)),X(`.hero-slogan`,o(s.hero.slogan)),X(`.hero-lede`,o(s.hero.lede)),X(`.hero-actions .button.primary`,o(s.hero.drawAction)),X(`.hero-actions .button.ghost`,o(s.hero.dropsAction)),Z(`.drop-stats span:nth-child(1)`,o(s.hero.statsCommon)),Z(`.drop-stats span:nth-child(2)`,o(s.hero.statsRare)),Z(`.drop-stats span:nth-child(3)`,o(s.hero.statsSecret)),Z(`.drop-stats span:nth-child(4)`,o(s.hero.statsCollected)),Z(`.drop-stats span:nth-child(5)`,o(s.hero.statsStock)),X(`.announce-strip span`,o(s.hero.announce));let n=document.querySelector(`.announce-strip p`);n?.firstChild?.nodeType===Node.TEXT_NODE&&(n.firstChild.textContent=o(s.hero.announceText)),X(`.drop-board-head h2`,o(s.drops.title)),X(`.drop-board-head > p`,o(s.drops.intro)),X(`.twilloop-cn`,o(s.twilloop.titleLine)),X(`.twilloop-copy .twilloop-slogan`,`Loose threads, tiny repair rituals.`),Ct(`.twilloop-copy .twilloop-slogan`,o(s.twilloop.lede)),X(`.twilloop-actions .button.primary`,o(s.twilloop.view)),V&&(V.textContent=o(i?s.twilloop.wished:s.twilloop.wish)),H&&(H.textContent=o(i?s.twilloop.wishedState:s.twilloop.idle));let r=document.querySelectorAll(`.twilloop-specs span`);[s.twilloop.specA,s.twilloop.specB,s.twilloop.specC].forEach((e,t)=>{r[t]&&(r[t].textContent=o(e))}),X(`.twilloop-lineup-copy h3`,o(s.twilloop.lineupTitle)),X(`.twilloop-lineup-copy p:not(.eyebrow)`,o(s.twilloop.lineupCopy)),wt(),X(`.draw-section .section-heading h2`,o(s.draw.title)),Z(`.section-meter span:nth-child(1)`,o(s.draw.completion)),Z(`.section-meter span:nth-child(2)`,o(s.draw.stock)),Z(`.section-meter span:nth-child(3)`,o(s.draw.wish)),Z(`.section-meter span:nth-child(4)`,o(s.draw.pity)),X(`.machine-rules span`,o(s.draw.rules)),X(`.machine-rules p`,o(s.draw.ruleText)),X(`.machine-rules small`,o(s.draw.stockSmall)),B?.setAttribute(`aria-label`,o(s.draw.lever)),Z(`.stock-line`,o(s.draw.noSecret)),X(`.result-panel .panel-head span`,o(s.draw.resultTitle)),X(`.result-panel .panel-link`,o(s.draw.allRecords)),Re?.setAttribute(`aria-label`,o(s.draw.reset)),X(`.shelf-preview .panel-head span`,o(s.draw.shelfTitle)),X(`.shelf-preview .panel-head p`,o(s.draw.shelfCopy)),X(`.shelf-preview .panel-link`,o(s.draw.viewAll)),L?.setAttribute(`aria-label`,o(s.loop.title)),X(`.series-copy h2`,o(s.story.seriesTitle)),X(`.series-copy p:not(.eyebrow)`,o(s.story.seriesCopy)),X(`.story-intro h2`,o(s.story.bibleTitle)),X(`.story-intro p:not(.eyebrow)`,o(s.story.bibleCopy));let c=document.querySelectorAll(`.story-pillars article`);[[s.story.originTitle,s.story.originCopy],[s.story.desireTitle,s.story.desireCopy],[s.story.collectTitle,s.story.collectCopy]].forEach(([e,t],n)=>{c[n]?.querySelector(`h3`)?.replaceChildren(document.createTextNode(o(e))),c[n]?.querySelector(`p`)?.replaceChildren(document.createTextNode(o(t)))});let l=document.querySelectorAll(`.rarity-strip span`);[s.odds.common,s.odds.rare,s.odds.secret,s.odds.pity].forEach((e,t)=>{l[t]&&(l[t].textContent=o(e))}),X(`.collection-section .section-heading h2`,o(s.collection.title)),document.querySelector(`.collection-tools`)?.setAttribute(`aria-label`,a===`zh`?`藏品筛选`:`Collection filters`),X(`.recent-panel .panel-head span`,o(s.collection.recentTitle)),X(`.recent-panel .panel-head p`,o(s.collection.recentCopy)),X(`.account-hero-card h2`,o(s.account.title)),document.querySelector(`.auth-backdrop`)?.setAttribute(`aria-label`,o(s.account.closeWindow))},Et=()=>{let t=J(),n=Ke(),r=Ge(),i=Math.max(0,30-S),c=f(K());ge&&(ge.textContent=String(S)),_e&&(_e.textContent=String(i)),ve&&(ve.textContent=`${t}/${e.length}`),ye&&(ye.textContent=`${n}%`),be&&(be.textContent=c.title),xe&&(xe.textContent=c.title),Se&&(Se.textContent=String(r)),Ce&&(Ce.textContent=String(r)),we&&(we.textContent=String(r)),Te&&(Te.textContent=String(w.duplicateInk)),Ee&&(Ee.textContent=String(w.tokens)),I&&(I.textContent=Ze(),I.setAttribute(`aria-label`,A?a===`zh`?`当前账户 ${A.displayName}`:`Current account ${A.displayName}`:a===`zh`?`已解锁 ${t} 款，共 ${e.length} 款`:`${t} of ${e.length} figures unlocked`)),De&&(De.textContent=k),F&&(F.classList.toggle(`celebrate`,!!O),F.classList.toggle(`tone-common`,O===`COMMON`),F.classList.toggle(`tone-rare`,O===`RARE`),F.classList.toggle(`tone-secret`,O===`SECRET`),F.classList.toggle(`tone-wish`,O===`WISH`));let l=r<=0;R&&(R.disabled=D||l,R.textContent=o(D?s.draw.drawing:s.draw.one)),z&&(z.disabled=D||l,z.textContent=o(l?s.draw.soldOut:s.draw.ten)),B&&(B.disabled=D||l,B.classList.toggle(`pulling`,D))},Q=()=>{Tt(),Et(),dt(),ot(),ct(),lt(),ut(),ft(),pt(),mt(),vt(),yt(),bt(),xt(),St()},Dt=e=>oe.some(t=>t.id===e),Ot=e=>{let t=e?.closest(`[data-auth-open]`),n=e?.closest(`[data-account-jump]`),r=e?.closest(`[data-sign-out]`);if(t?.dataset.authOpen===`login`||t?.dataset.authOpen===`register`)return Qe(t.dataset.authOpen),!0;if(n?.dataset.accountJump)return window.location.hash=n.dataset.accountJump,$(),!0;if(r){let e=A?.displayName??(a===`zh`?`账户`:`Account`);return A=null,M=!1,N=`${e}${o(s.account.signedOutSuffix)}`,k=o(s.account.signedOutStatus),Q(),!0}return!1},kt=e=>{a!==e&&(a=e,k=o(s.draw.statusIdle),A||(N=o(M?j===`register`?s.account.registerMessage:s.account.loginMessage:s.account.guestMessage)),Q())};Ie.forEach(e=>{e.addEventListener(`click`,()=>{(e.dataset.language===`zh`||e.dataset.language===`en`)&&kt(e.dataset.language)})}),ze?.addEventListener(`click`,()=>{if(A){window.location.hash=`#account`,$();return}Qe(`login`)}),U?.addEventListener(`click`,e=>{Ot(e.currentTarget)}),W?.addEventListener(`click`,e=>{Ot(e.currentTarget)}),G?.addEventListener(`click`,e=>{let t=e.target;if(t.closest(`[data-auth-close]`)){$e();return}let n=t.closest(`[data-auth-mode]`);(n?.dataset.authMode===`login`||n?.dataset.authMode===`register`)&&(j=n.dataset.authMode,N=o(j===`register`?s.account.registerMessage:s.account.loginMessage),Q())}),G?.addEventListener(`submit`,e=>{let t=e.target.closest(`#authForm`);if(!t)return;e.preventDefault();let n=new FormData(t),r=String(n.get(`contact`)??``).trim(),i=String(n.get(`displayName`)??``).trim();if(!r){N=o(s.account.needContact),Q();return}et(i,r)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&M&&$e()}),R?.addEventListener(`click`,()=>nt(1)),z?.addEventListener(`click`,()=>nt(10)),B?.addEventListener(`click`,()=>nt(1)),Ne?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-drop-target]`);if(!t?.dataset.dropTarget)return;let r=n.find(e=>e.id===t.dataset.dropTarget);r?.href||(k=r?.id===`morrifolio`?a===`zh`?`Morrifolio / 墨里弗里已保留为 artdrew 上架档案；当前 LIVE 抽盒是 Brumlet / 雾姆团。`:`Morrifolio is preserved as an artdrew release archive; the current live draw is Brumlet.`:a===`zh`?`${r?.cnName??`新系列`} 还在筹备中，当前可试玩 DROP 02：雾姆团。`:`${p(r??n[n.length-1]).cnName??`A new series`} is still in planning; DROP 02: Brumlet is playable now.`,Q())}),V?.addEventListener(`click`,()=>{i=!i,V.textContent=o(i?s.twilloop.wished:s.twilloop.wish),V.classList.toggle(`active`,i),H&&(H.textContent=o(i?s.twilloop.wishedState:s.twilloop.idle)),k=i?a===`zh`?`Twilloop / 缝环团已加入本次浏览心愿；当前可试玩 DROP 02：雾姆团。`:`Twilloop has been added to this browsing session's wish list; DROP 02: Brumlet is playable now.`:a===`zh`?`已取消 Twilloop / 缝环团本次浏览心愿。`:`Twilloop has been removed from this browsing session's wish list.`,Q()}),Fe.forEach(e=>{e.addEventListener(`click`,()=>{Dt(e.dataset.filter)&&(E=e.dataset.filter,Q())})}),me?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-wish-id]`);if(!t?.dataset.wishId)return;C=t.dataset.wishId,w.wishSet=!0,y(),localStorage.setItem(h,C);let n=f(K());O=null,k=a===`zh`?`已将 ${n.title} 设为心愿款。`:`${n.title} is now your wishlist figure.`,Q()}),Ae?.addEventListener(`click`,t=>{if(!t.target.closest(`[data-random-wish]`))return;let n=e.filter(e=>e.id!==C),r=n[Math.floor(Math.random()*n.length)]??e[0];C=r.id,w.wishSet=!0,y(),localStorage.setItem(h,C),O=null;let i=f(r);k=a===`zh`?`已将 ${i.title} 设为心愿款。`:`${i.title} is now your wishlist figure.`,Q()}),L?.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-claim-mission]`),r=t.closest(`[data-loop-reward]`);if(n?.dataset.claimMission){let e=n.dataset.claimMission,t=_t().find(t=>t.id===e),r=w.claimedMissions.includes(e);t&&!r&&t.progress>=t.target&&(w.tokens+=t.reward,w.claimedMissions.push(e),y(),k=`${o(s.loop.missionDonePrefix)}${t.title}${o(s.loop.missionDoneMiddle)} ${t.reward} ${o(s.loop.missionDoneSuffix)}`,Q());return}r?.dataset.loopReward===`restock`&&w.tokens>=v&&(w.tokens-=v,w.stockBoost+=ae,y(),k=`${o(s.loop.restockedPrefix)} ${ae} ${o(s.loop.restockedSuffix)}`,Q())}),Re?.addEventListener(`click`,()=>{b={},x=[],T=[],S=0,w={tokens:0,duplicateInk:0,wishSparks:0,stockBoost:0,wishSet:!1,claimedMissions:[]},D=!1,O=null,k=a===`zh`?`已重置本地藏品。可以重新开盒。`:`Local collection reset. You can open boxes again.`,localStorage.removeItem(m),localStorage.removeItem(te),localStorage.removeItem(ne),localStorage.removeItem(re),Q()});var At=()=>{let e=window.location.hash.slice(1),t=e?document.getElementById(decodeURIComponent(e)):null;if(!t)return;let n=document.documentElement.style.scrollBehavior,r=document.querySelector(`.topbar`)?.getBoundingClientRect().height??0,i=t.getBoundingClientRect().top+window.scrollY-r-16;document.documentElement.style.scrollBehavior=`auto`,window.scrollTo({top:Math.max(0,i),behavior:`auto`}),window.setTimeout(()=>{document.documentElement.style.scrollBehavior=n},0)},$=()=>{let e=window.location.hash||`#top`;Le.forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`href`)===e)})};Q(),$(),window.setTimeout(At,30),window.addEventListener(`hashchange`,()=>{$(),window.setTimeout(At,0)});