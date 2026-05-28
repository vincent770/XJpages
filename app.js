const fallbackPhoto =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Karakul-muztagh-ata-d04.jpg?width=1200";

const points = {
  urumqi: { name: "乌鲁木齐", lat: 43.8256, lng: 87.6168 },
  s101: { name: "S101百里丹霞", lat: 43.708, lng: 86.18 },
  anjihai: { name: "安集海大峡谷", lat: 44.0704, lng: 85.181 },
  kuitun: { name: "奎屯/独山子", lat: 44.3266, lng: 84.8892 },
  qiaerma: { name: "乔尔玛", lat: 43.825, lng: 84.085 },
  bayinbuluk: { name: "巴音布鲁克", lat: 43.031, lng: 84.159 },
  longchi: { name: "大小龙池", lat: 42.316, lng: 83.396 },
  kuqaCanyon: { name: "天山神秘大峡谷", lat: 42.144, lng: 83.072 },
  kuqa: { name: "库车", lat: 41.7174, lng: 82.962 },
  aksu: { name: "阿克苏", lat: 41.1688, lng: 80.2606 },
  alar: { name: "阿拉尔", lat: 40.5479, lng: 81.2814 },
  hotan: { name: "和田/墨玉", lat: 37.1168, lng: 79.9225 },
  shache: { name: "莎车", lat: 38.4145, lng: 77.2458 },
  kashgar: { name: "喀什", lat: 39.4704, lng: 75.9898 },
  baisha: { name: "白沙湖", lat: 38.347, lng: 75.082 },
  karakul: { name: "喀拉库勒湖", lat: 38.435, lng: 75.058 },
};

const days = [
  {
    id: "d1",
    day: "D1",
    date: "6.19 周五",
    title: "上海 → 乌鲁木齐",
    subtitle: "抵达、取车、补给，建立车队执行节奏。",
    stay: "乌鲁木齐",
    transport: "航班 + 市内取车",
    distance: "市内 20-40 km",
    driveTime: "0.5-1 h",
    depart: "按航班",
    risk: "低",
    theme: "抵达适应",
    route: [points.urumqi],
    roadNames: ["乌鲁木齐机场路", "市区道路", "酒店/取车点连接路"],
    roadConditions: ["以城市道路为主，重点不在驾驶强度，而在取车、验车、补给。", "机场到市区可能遇晚高峰，建议不要把正式团建安排太晚。"],
    notes: ["验车拍照：四周车身、轮胎、备胎、玻璃、仪表盘油量和里程。", "每车建立小群，确认司机、乘客、车队编号和第二天集合点。"],
    scenery: ["大巴扎或和田二街适合轻松晚餐。", "第一晚控制饮酒，第二天进入 S101 自驾状态。"],
    steps: ["抵达乌鲁木齐", "统一取车验车", "采购水、零食、防晒、药品", "市区晚餐后早休息"],
    labels: [{ text: "乌鲁木齐取车补给", lat: 43.82, lng: 87.62 }],
    photo: {
      tag: "Arrival",
      title: "乌鲁木齐集合日",
      desc: "这一天的目标是把车辆、补给和团队协同准备好，为第二天正式自驾留出体力。",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Urumqi%20city%20view.jpg?width=1200",
      credit: "照片参考：Wikimedia Commons，如加载失败会使用帕米尔备用图。",
    },
  },
  {
    id: "d2",
    day: "D2",
    date: "6.20 周六",
    title: "乌鲁木齐 → S101国防公路 → 安集海大峡谷 → 奎屯",
    subtitle: "从城市切入丹霞、峡谷和草原过渡景观，是全线第一段正式自驾。",
    stay: "奎屯/独山子",
    transport: "自驾",
    distance: "约 400 km",
    driveTime: "7-8 h",
    depart: "08:00 前",
    risk: "中",
    theme: "丹霞公路",
    route: [points.urumqi, points.s101, points.anjihai, points.kuitun],
    roadNames: ["G30连霍高速", "S101国防公路", "安集海峡谷连接路"],
    roadConditions: ["S101 弯道、起伏和无服务区路段较多，雨后或大风天路肩砂石更多。", "安集海大峡谷附近风大、边缘土质松散，只在安全区域短停拍照。"],
    notes: ["乌鲁木齐出城前满油，S101 中段补给少，午餐不要压到偏僻路段。", "车队不要追车，遇落石、施工和牲畜横穿时放慢通过。"],
    scenery: ["S101 丹霞、峡谷、草原过渡景观适合车队第一张合影。", "安集海大峡谷只看安全区域，不靠近悬崖边。"],
    steps: ["乌鲁木齐出城", "转入 S101 国防公路", "安集海大峡谷短停", "傍晚抵达奎屯/独山子"],
    labels: [
      { text: "G30 连霍高速", lat: 43.77, lng: 87.05 },
      { text: "S101 国防公路", lat: 43.7, lng: 86.08 },
      { text: "安集海大峡谷", lat: 44.05, lng: 85.25 },
    ],
    photo: {
      tag: "Canyon Road",
      title: "S101 与峡谷边缘",
      desc: "第一段自驾景观密度高，但也容易因为拍照拖慢节奏，建议每站提前限定停留时间。",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Anjihai%20Grand%20Canyon.jpg?width=1200",
      credit: "照片参考：Wikimedia Commons / 安集海大峡谷相关图片。",
    },
  },
  {
    id: "d3",
    day: "D3",
    date: "6.21 周日",
    title: "独山子 → 独库公路北中段 → 乔尔玛 → 巴音布鲁克",
    subtitle: "全线山路强度最高的一天之一，达坂、弯道、天气和管制是核心变量。",
    stay: "巴音布鲁克",
    transport: "自驾",
    distance: "约 430 km",
    driveTime: "8.5-10 h",
    depart: "07:30 前",
    risk: "高",
    theme: "独库北段",
    route: [points.kuitun, points.qiaerma, points.bayinbuluk],
    roadNames: ["G217独库公路北段", "乔尔玛方向", "独库中段草原路"],
    roadConditions: ["独库北段连续弯道、长坡、落石和临时交通管制都可能出现。", "山区天气变化快，遇雨雪、浓雾或交警管制时不硬闯。"],
    notes: ["出发前查路况，独山子补满油；前排备晕车药和塑料袋。", "每 2 小时左右休息或换手，避免傍晚后继续压山路。"],
    scenery: ["独库达坂、乔尔玛纪念地、巴音布鲁克草原是当天重点。", "如体力和天气允许，巴音布鲁克九曲十八弯可看日落。"],
    steps: ["独山子进入独库", "雪山达坂与峡谷路段", "乔尔玛补给休息", "抵达巴音布鲁克"],
    labels: [
      { text: "G217 独库北段", lat: 44.02, lng: 84.55 },
      { text: "乔尔玛", lat: 43.83, lng: 84.08 },
      { text: "草原山路", lat: 43.35, lng: 84.12 },
    ],
    photo: {
      tag: "Mountain Road",
      title: "独库公路山地段",
      desc: "当天不是单纯赶路，而是全线驾驶风险最高的山地段之一，拍摄和停车都要服从路况。",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/G217_Duku.jpg?width=1200",
      credit: "照片参考：Wikimedia Commons / 独库公路相关图片。",
    },
  },
  {
    id: "d4",
    day: "D4",
    date: "6.22 周一",
    title: "巴音布鲁克 → 独库南段 → 大小龙池 → 天山神秘大峡谷 → 库车",
    subtitle: "从高山草甸进入红色峡谷，驾驶强度较 D3 下降但景点停留更多。",
    stay: "库车",
    transport: "自驾",
    distance: "约 280 km",
    driveTime: "5.5-7 h",
    depart: "08:00 前",
    risk: "中高",
    theme: "独库南段",
    route: [points.bayinbuluk, points.longchi, points.kuqaCanyon, points.kuqa],
    roadNames: ["G217独库公路南段", "大小龙池路段", "天山神秘大峡谷景区路"],
    roadConditions: ["独库南段下坡和连续弯较多，注意刹车热衰减。", "峡谷景区遇强降雨、山洪预警或关闭通知时直接调整为库车市区。"],
    notes: ["大小龙池短停即可，给峡谷游览留出余量。", "当天拍摄点多，车队长要提前明确每站集合时间。"],
    scenery: ["大小龙池适合短暂停靠。", "天山神秘大峡谷适合集体照和轻徒步。", "晚上可安排库车夜市或轻松晚餐。"],
    steps: ["巴音布鲁克出发", "穿越独库南段", "大小龙池短停", "天山神秘大峡谷", "库车入住"],
    labels: [
      { text: "G217 独库南段", lat: 42.65, lng: 83.78 },
      { text: "大小龙池", lat: 42.32, lng: 83.4 },
      { text: "库车峡谷路", lat: 42.1, lng: 83.05 },
    ],
    photo: {
      tag: "Red Canyon",
      title: "库车峡谷地貌",
      desc: "高山、湖泊和红色峡谷在一天内切换，适合做团建照片素材日。",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Keziya%20Grand%20Canyon%20Kuqa.jpg?width=1200",
      credit: "照片参考：Wikimedia Commons / 库车峡谷相关图片。",
    },
  },
  {
    id: "d5",
    day: "D5",
    date: "6.23 周二",
    title: "库车 → 克孜尔千佛洞/库车王府 → 阿克苏",
    subtitle: "独库后缓冲修整日，驾驶强度低，适合补给、洗车和调整团队状态。",
    stay: "阿克苏",
    transport: "自驾",
    distance: "约 260 km",
    driveTime: "3-4 h",
    depart: "09:30 左右",
    risk: "低",
    theme: "龟兹文化",
    route: [points.kuqa, points.aksu],
    roadNames: ["G3012吐和高速", "库车市区道路", "阿克苏市区道路"],
    roadConditions: ["以高速和城市道路为主，是全线强度最低的一天。", "若 D3/D4 因管制延误，可压缩文化点，把今天作为缓冲。"],
    notes: ["抵达阿克苏后补油、补水、检查轮胎和车辆底盘外观。", "晚上适合安排正式团建餐或恢复性自由活动。"],
    scenery: ["库车王府或克孜尔千佛洞二选一。", "这天更适合文化体验和休整，不建议把景点排满。"],
    steps: ["库车轻松出发", "可选文化点", "G3012 前往阿克苏", "车辆检查与补给"],
    labels: [
      { text: "G3012 吐和高速", lat: 41.45, lng: 81.6 },
      { text: "龟兹文化段", lat: 41.72, lng: 82.96 },
    ],
    photo: {
      tag: "Culture Buffer",
      title: "龟兹文化与修整日",
      desc: "把节奏从连续山路里拉回来，为第二天沙漠公路准备车辆和体力。",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kizil_caves_2006_10_01.jpg?width=1200",
      credit: "照片参考：Wikimedia Commons / 克孜尔石窟相关图片。",
    },
  },
  {
    id: "d6",
    day: "D6",
    date: "6.24 周三",
    title: "阿克苏 → 阿拉尔 → G580阿和沙漠公路 → 和田/墨玉",
    subtitle: "长距离穿越塔克拉玛干边缘，距离和持续驾驶是全天重点。",
    stay: "和田/墨玉",
    transport: "自驾",
    distance: "约 560 km",
    driveTime: "7.5-9 h",
    depart: "07:30 前",
    risk: "高",
    theme: "沙漠公路",
    route: [points.aksu, points.alar, points.hotan],
    roadNames: ["G580阿和沙漠公路", "阿拉尔连接线", "塔克拉玛干沙漠段"],
    roadConditions: ["长距离、日晒强、补给稀疏，G580 阿和沙漠公路是当天核心。", "大风沙、低能见度或车辆异常时不冒进，不随意离开公路。"],
    notes: ["阿克苏出发前满油，进入沙漠段前确认水、胎压、离线地图。", "司机午后容易犯困，车队应安排固定休息点和换手。"],
    scenery: ["沙漠公路直线段适合车队照，但只在安全停车区短停。", "傍晚抵达后安排清淡晚餐和早休息。"],
    steps: ["阿克苏早出发", "阿拉尔补给确认", "进入 G580 阿和沙漠公路", "抵达和田/墨玉"],
    labels: [
      { text: "阿拉尔连接线", lat: 40.9, lng: 80.9 },
      { text: "G580 阿和沙漠公路", lat: 39.4, lng: 80.55 },
      { text: "塔克拉玛干沙漠段", lat: 38.45, lng: 80.25 },
    ],
    photo: {
      tag: "Desert Crossing",
      title: "塔克拉玛干沙漠公路",
      desc: "这是全线里程最长的一天，页面会把距离和驾驶时间突出显示，提醒团队把安全放在景观之前。",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tarim_Desert_Highway_-_Desert_Scene%2C_Xinjiang%2C_China.jpg?width=1200",
      credit: "照片参考：Wikimedia Commons / 塔里木沙漠公路相关图片。",
    },
  },
  {
    id: "d7",
    day: "D7",
    date: "6.25 周四",
    title: "和田/墨玉 → 莎车 → 喀什",
    subtitle: "沿南疆城镇带进入喀什，仍是长距离驾驶，莎车建议短停。",
    stay: "喀什",
    transport: "自驾",
    distance: "约 500 km",
    driveTime: "6-7.5 h",
    depart: "08:00 前",
    risk: "中",
    theme: "南疆城镇带",
    route: [points.hotan, points.shache, points.kashgar],
    roadNames: ["G3012吐和高速", "莎车连接线", "喀什入城道路"],
    roadConditions: ["以高速和国道为主，距离仍长。", "莎车短停即可，避免拖到夜间进喀什。"],
    notes: ["和田/墨玉出发前满油，进喀什后确认 D8 边境通行证和早餐。", "喀什城区行人和车辆密度更高，入城后放慢。"],
    scenery: ["莎车可选叶尔羌汗王陵或老城街区短停。", "晚上喀什古城适合正式团建晚餐。"],
    steps: ["和田/墨玉出发", "南疆城镇带行驶", "莎车短停", "喀什入住与古城晚餐"],
    labels: [
      { text: "G3012 南疆高速", lat: 38.0, lng: 78.2 },
      { text: "莎车短停", lat: 38.41, lng: 77.25 },
      { text: "喀什入城", lat: 39.35, lng: 76.25 },
    ],
    photo: {
      tag: "Kashgar Night",
      title: "喀什古城团建夜",
      desc: "长距离驾驶后进入喀什，晚间活动要轻松，但这是全线最适合团队聚餐的一晚。",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kashgar%20old%20town.jpg?width=1200",
      credit: "照片参考：Wikimedia Commons / 喀什古城相关图片。",
    },
  },
  {
    id: "d8",
    day: "D8",
    date: "6.26 周五",
    title: "喀什 → 白沙湖 → 喀拉库勒湖 → 喀什",
    subtitle: "帕米尔高原往返日，证件、海拔、天气和返程时间是核心。",
    stay: "喀什",
    transport: "自驾往返",
    distance: "约 420 km",
    driveTime: "7-8 h",
    depart: "07:00 前",
    risk: "高",
    theme: "帕米尔高原",
    route: [points.kashgar, points.baisha, points.karakul, points.kashgar],
    roadNames: ["G314中巴友谊公路", "白沙湖路段", "喀拉库勒湖高原路"],
    roadConditions: ["G314 海拔上升明显，白沙湖和喀湖方向天气变化快。", "如遇雨雪、大风或身体不适，可改为白沙湖短线往返。"],
    notes: ["边境管理区通行证和身份证随身，遇检查主动配合。", "喀拉库勒湖约 3600 米，少跑跳、不饮酒，轻微不适先休息补水。"],
    scenery: ["白沙湖、喀拉库勒湖、慕士塔格峰方向是全线大片日。", "厚外套、热水、葡萄糖放在车内易拿位置。"],
    steps: ["喀什清晨出发", "沿 G314 中巴友谊公路上行", "白沙湖停靠", "喀拉库勒湖观景", "返回喀什"],
    labels: [
      { text: "G314 中巴友谊公路", lat: 38.93, lng: 75.55 },
      { text: "白沙湖", lat: 38.35, lng: 75.08 },
      { text: "喀拉库勒湖 约3600m", lat: 38.44, lng: 75.06 },
    ],
    photo: {
      tag: "Pamir Plateau",
      title: "喀拉库勒湖与慕士塔格峰",
      desc: "全线最有视觉记忆点的一天，但也是海拔和证件要求最需要提前确认的一天。",
      url: fallbackPhoto,
      credit: "照片：Wikimedia Commons / Karakul-muztagh-ata-d04。",
    },
  },
  {
    id: "d9",
    day: "D9",
    date: "6.27 周六",
    title: "喀什 → 上海",
    subtitle: "市区还车、行李整理、返程，重点是留足机场时间。",
    stay: "返程",
    transport: "市内还车 + 航班",
    distance: "市内 15-30 km",
    driveTime: "0.5-1 h",
    depart: "按航班",
    risk: "低",
    theme: "返程还车",
    route: [points.kashgar],
    roadNames: ["喀什市区道路", "喀什机场路", "还车点连接路"],
    roadConditions: ["以市区道路和机场路为主，重点是还车、行李和安检时间。"],
    notes: ["还车拍照留底，确认油量、车损、违章押金规则。", "建议选择下午或傍晚航班，上午不安排远距离活动。"],
    scenery: ["酒店或机场简单合影即可。", "把票据、照片和租车订单统一留存。"],
    steps: ["早餐后整理行李", "按油量规则还车", "前往喀什机场", "返程上海"],
    labels: [{ text: "喀什还车返程", lat: 39.47, lng: 75.99 }],
    photo: {
      tag: "Return",
      title: "喀什返程日",
      desc: "最后一天减少活动，把还车和机场时间做稳，避免因为押金、油量或行李影响返程。",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kashgar%20old%20city.jpg?width=1200",
      credit: "照片参考：Wikimedia Commons / 喀什相关图片。",
    },
  },
];

const colors = ["#087365", "#e24d3f", "#257f9a", "#8a6f00", "#4e8f43", "#b85b28", "#9f3a2f", "#326fd1", "#56616a"];
const routeCache = new Map();
let activeDayId = "d2";
let activeRenderId = 0;

const tabsEl = document.querySelector("#day-tabs");
const overviewEl = document.querySelector("#overview-grid");
const globalChecksEl = document.querySelector("#global-checks");
const toastEl = document.querySelector("#toast");
const dayPhoto = document.querySelector("#day-photo");

const map = L.map("route-map", {
  scrollWheelZoom: false,
  zoomControl: true,
}).setView([41.2, 82.5], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const layerGroup = L.layerGroup().addTo(map);

function storageKey(dayId, field) {
  return `xj-trip:${dayId}:${field}`;
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  window.setTimeout(() => toastEl.classList.remove("is-visible"), 1800);
}

function renderTabs() {
  tabsEl.innerHTML = days
    .map(
      (day) => `
        <button class="day-tab ${day.id === activeDayId ? "is-active" : ""}" type="button" data-day="${day.id}">
          <b>${day.day}</b>
          <span>${day.date}<small>${day.distance} · ${day.driveTime}</small></span>
        </button>
      `,
    )
    .join("");
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderDayContent(day) {
  document.querySelector("#board-day").textContent = `${day.day} · ${day.date} · ${day.transport}`;
  document.querySelector("#board-title").textContent = day.title;
  document.querySelector("#board-subtitle").textContent = day.subtitle;
  document.querySelector("#metric-distance").textContent = day.distance;
  document.querySelector("#metric-drive").textContent = day.driveTime;
  document.querySelector("#metric-depart").textContent = day.depart;
  document.querySelector("#metric-risk").textContent = day.risk;

  dayPhoto.src = day.photo.url;
  dayPhoto.alt = `${day.day} ${day.photo.title}`;
  dayPhoto.onerror = () => {
    if (dayPhoto.src !== fallbackPhoto) dayPhoto.src = fallbackPhoto;
  };
  document.querySelector("#photo-tag").textContent = day.photo.tag;
  document.querySelector("#photo-title").textContent = day.photo.title;
  document.querySelector("#photo-desc").textContent = day.photo.desc;
  document.querySelector("#photo-credit").textContent = day.photo.credit;

  document.querySelector("#road-tags").innerHTML = day.roadNames.map((road) => `<span>${road}</span>`).join("");
  document.querySelector("#route-steps").innerHTML = listItems(day.steps);
  document.querySelector("#road-conditions").innerHTML = listItems(day.roadConditions);
  document.querySelector("#day-notes").innerHTML = listItems(day.notes);
  document.querySelector("#scenery-list").innerHTML = listItems(day.scenery);

  const statusEl = document.querySelector("#day-status");
  const noteEl = document.querySelector("#day-note");
  statusEl.value = localStorage.getItem(storageKey(day.id, "status")) || "未确认";
  noteEl.value = localStorage.getItem(storageKey(day.id, "note")) || "";
}

async function getRoadGeometry(day) {
  const fallback = day.route.map((point) => [point.lat, point.lng]);
  if (day.route.length < 2) return fallback;
  if (routeCache.has(day.id)) return routeCache.get(day.id);

  const coords = day.route.map((point) => `${point.lng},${point.lat}`).join(";");
  const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`;
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 9000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    const data = await response.json();
    const geometry = data.routes?.[0]?.geometry?.coordinates;
    if (data.code !== "Ok" || !geometry) throw new Error("No route geometry");
    const mapped = geometry.map(([lng, lat]) => [lat, lng]);
    routeCache.set(day.id, mapped);
    return mapped;
  } catch {
    routeCache.set(day.id, fallback);
    return fallback;
  } finally {
    window.clearTimeout(timer);
  }
}

function addRoadLabels(day, color) {
  day.labels.forEach((label) => {
    L.marker([label.lat, label.lng], {
      interactive: false,
      icon: L.divIcon({
        className: "road-label",
        html: `<span style="--label-color:${color}">${label.text}</span>`,
      }),
    }).addTo(layerGroup);
  });
}

async function renderMap(day) {
  const renderId = ++activeRenderId;
  layerGroup.clearLayers();

  const color = colors[days.findIndex((item) => item.id === day.id) % colors.length];
  const geometry = await getRoadGeometry(day);
  if (renderId !== activeRenderId) return;

  const bounds = day.route.map((point) => [point.lat, point.lng]);
  if (geometry.length > 1) {
    const line = L.polyline(geometry, {
      color,
      weight: 6,
      opacity: 0.9,
    }).addTo(layerGroup);
    line.bindPopup(`
      <strong>${day.day} ${day.title}</strong><br>
      距离：${day.distance}｜驾驶：${day.driveTime}<br>
      主要道路：${day.roadNames.join(" / ")}
    `);
    geometry.forEach((coord) => bounds.push(coord));
  }

  day.route.forEach((point, index) => {
    const marker = L.circleMarker([point.lat, point.lng], {
      radius: index === 0 || index === day.route.length - 1 ? 8 : 6,
      color: "#fff",
      weight: 2,
      fillColor: color,
      fillOpacity: 1,
    }).addTo(layerGroup);
    marker.bindPopup(`<strong>${point.name}</strong><br>${day.day} · ${day.title}`);
  });

  addRoadLabels(day, color);
  if (bounds.length === 1) {
    map.setView(bounds[0], 10);
  } else {
    map.fitBounds(bounds, { padding: [36, 36] });
  }
}

function setActiveDay(dayId) {
  activeDayId = dayId;
  const day = days.find((item) => item.id === dayId) || days[1];
  renderTabs();
  renderDayContent(day);
  renderMap(day);
}

function renderOverview() {
  overviewEl.innerHTML = days
    .map(
      (day) => `
        <article class="overview-card">
          <header>
            <h3>${day.day} ${day.date}</h3>
            <strong>${day.risk}</strong>
          </header>
          <p><strong>${day.title}</strong></p>
          <p>${day.distance} · ${day.driveTime} · ${day.theme}</p>
        </article>
      `,
    )
    .join("");
}

function renderGlobalChecks() {
  const checks = [
    "每车至少 2 名驾驶员，驾驶证和身份证随身。",
    "租车订单、保险、救援电话、车辆照片同步到团建群。",
    "D3 前一晚和当天早晨查独库公路管制。",
    "D6 沙漠公路前满油、备水、下载离线地图。",
    "D8 前确认边境管理区通行证和高原保暖装备。",
  ];

  globalChecksEl.innerHTML = checks
    .map((check, index) => {
      const key = `xj-trip:global-check:${index}`;
      const checked = localStorage.getItem(key) === "1" ? "checked" : "";
      return `
        <label class="check-item">
          <input type="checkbox" data-check-key="${key}" ${checked} />
          <span>${check}</span>
        </label>
      `;
    })
    .join("");
}

function currentDay() {
  return days.find((day) => day.id === activeDayId) || days[1];
}

async function copySummary() {
  const day = currentDay();
  const text = `${day.day} ${day.date}｜${day.title}
距离：${day.distance}
驾驶时间：${day.driveTime}
建议出发：${day.depart}
住宿：${day.stay}
主要道路：${day.roadNames.join(" / ")}
路况：${day.roadConditions.join(" ")}
注意：${day.notes.join(" ")}`;

  try {
    await navigator.clipboard.writeText(text);
    showToast("今日简报已复制");
  } catch {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.append(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    showToast("今日简报已复制");
  }
}

tabsEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button) return;
  setActiveDay(button.dataset.day);
});

document.querySelector("#day-status").addEventListener("change", (event) => {
  localStorage.setItem(storageKey(activeDayId, "status"), event.target.value);
  showToast("确认状态已保存");
});

document.querySelector("#day-note").addEventListener("input", (event) => {
  localStorage.setItem(storageKey(activeDayId, "note"), event.target.value);
});

globalChecksEl.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='checkbox']")) return;
  localStorage.setItem(event.target.dataset.checkKey, event.target.checked ? "1" : "0");
});

document.querySelector("#copy-summary").addEventListener("click", copySummary);
document.querySelector("#print-page").addEventListener("click", () => window.print());

renderTabs();
renderOverview();
renderGlobalChecks();
setActiveDay(activeDayId);
