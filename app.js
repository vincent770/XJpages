const points = {
  shanghai: { name: "上海", lat: 31.2304, lng: 121.4737 },
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
    title: "上海飞乌鲁木齐",
    stay: "乌鲁木齐",
    distance: "市内约 20-40 km",
    driveTime: "约 0.5-1 h",
    route: [points.shanghai, points.urumqi],
    transport: "航班 + 市内取车",
    schedule: [
      "抵达乌鲁木齐，统一取车、验车、熟悉车辆功能。",
      "采购车上补给：饮用水、零食、防晒、常用药、垃圾袋。",
      "晚餐可选大巴扎/和田二街，控制饮酒，第二天进入自驾状态。",
    ],
    stops: ["乌鲁木齐机场", "取车点", "市区晚餐"],
    notes: [
      "验车重点看轮胎、备胎、玻璃水、刹车、车损照片和保险救援电话。",
      "每车建立小群或车队编号，确认第二天集合时间和第一目的地。",
    ],
    mapLink: "https://uri.amap.com/navigation?from=121.4737,31.2304,%E4%B8%8A%E6%B5%B7&to=87.6168,43.8256,%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90&mode=car",
  },
  {
    id: "d2",
    day: "D2",
    date: "6.20 周六",
    title: "乌鲁木齐 → S101国防公路 → 安集海大峡谷 → 奎屯",
    stay: "奎屯/独山子",
    distance: "约 400 km",
    driveTime: "约 7-8 h",
    route: [points.urumqi, points.s101, points.anjihai, points.kuitun],
    transport: "自驾",
    schedule: [
      "早出发进入 S101，沿途看丹霞、峡谷、草原过渡景观。",
      "中午在可停车镇区或服务点简餐，避免把正餐放到偏僻路段。",
      "下午前往安集海大峡谷，傍晚抵达奎屯/独山子入住。",
    ],
    stops: ["S101百里丹霞", "肯斯瓦特方向", "安集海大峡谷", "奎屯/独山子"],
    notes: [
      "S101弯多、路面和天气变化快，车队不要追车，遇落石路段快速通过。",
      "安集海大峡谷边缘土质松散，拍照设安全线，不靠近悬崖边。",
      "当天不要安排夜间赶路，给第二天独库留足体力。",
    ],
    mapLink: "https://uri.amap.com/navigation?from=87.6168,43.8256,%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90&to=84.8892,44.3266,%E5%A5%8E%E5%B1%AF&mode=car",
  },
  {
    id: "d3",
    day: "D3",
    date: "6.21 周日",
    title: "独山子 → 独库公路北中段 → 乔尔玛 → 巴音布鲁克",
    stay: "巴音布鲁克",
    distance: "约 430 km",
    driveTime: "约 8.5-10 h",
    route: [points.kuitun, points.qiaerma, points.bayinbuluk],
    transport: "自驾",
    schedule: [
      "早晨从独山子方向进入独库公路，雪山、达坂、峡谷路段集中出现。",
      "午间在乔尔玛/那拉提方向补给休息，司机换人。",
      "傍晚抵达巴音布鲁克，视体力和天气安排九曲十八弯日落。",
    ],
    stops: ["独库公路起点段", "乔尔玛", "巴音布鲁克草原", "九曲十八弯"],
    notes: [
      "独库公路受落石、积雪、降雨和交通管制影响很大，必须当天查路况。",
      "山路连续弯道多，乘员容易晕车，前排备晕车药和塑料袋。",
      "巴音布鲁克夜间气温低，入住后加衣，减少剧烈活动。",
    ],
    mapLink: "https://uri.amap.com/navigation?from=84.8892,44.3266,%E7%8B%AC%E5%B1%B1%E5%AD%90&to=84.159,43.031,%E5%B7%B4%E9%9F%B3%E5%B8%83%E9%B2%81%E5%85%8B&mode=car",
  },
  {
    id: "d4",
    day: "D4",
    date: "6.22 周一",
    title: "巴音布鲁克 → 独库南段 → 大小龙池 → 天山神秘大峡谷 → 库车",
    stay: "库车",
    distance: "约 280 km",
    driveTime: "约 5.5-7 h",
    route: [points.bayinbuluk, points.longchi, points.kuqaCanyon, points.kuqa],
    transport: "自驾",
    schedule: [
      "上午穿越独库南段，景观从高山草甸逐渐变成红色峡谷。",
      "中途停靠大小龙池，控制停留时间，给峡谷游览留余量。",
      "下午进入天山神秘大峡谷，结束后前往库车入住。",
    ],
    stops: ["独库南段", "大小龙池", "天山神秘大峡谷", "库车夜市"],
    notes: [
      "峡谷景区遇强降雨、山洪预警或景区关闭时，直接调整为库车市区活动。",
      "下坡路段多用发动机制动，避免长时间踩刹车导致热衰减。",
      "这天拍摄点多，团队要约定每站停留时间。",
    ],
    mapLink: "https://uri.amap.com/navigation?from=84.159,43.031,%E5%B7%B4%E9%9F%B3%E5%B8%83%E9%B2%81%E5%85%8B&to=82.962,41.7174,%E5%BA%93%E8%BD%A6&mode=car",
  },
  {
    id: "d5",
    day: "D5",
    date: "6.23 周二",
    title: "库车 → 克孜尔千佛洞/库车王府 → 阿克苏",
    stay: "阿克苏",
    distance: "约 260 km",
    driveTime: "约 3-4 h",
    route: [points.kuqa, points.aksu],
    transport: "自驾",
    schedule: [
      "上午轻松出发，可选库车王府或克孜尔千佛洞。",
      "午后走高速前往阿克苏，抵达后洗车、补给、检查车辆。",
      "晚上安排团队正餐或自由活动，作为独库后恢复日。",
    ],
    stops: ["库车市区", "克孜尔千佛洞可选", "阿克苏"],
    notes: [
      "这天是全线缓冲日，若前两天因独库管制延误，可压缩可选景点。",
      "补满油，检查胎压和车身情况，为第二天沙漠公路做准备。",
    ],
    mapLink: "https://uri.amap.com/navigation?from=82.962,41.7174,%E5%BA%93%E8%BD%A6&to=80.2606,41.1688,%E9%98%BF%E5%85%8B%E8%8B%8F&mode=car",
  },
  {
    id: "d6",
    day: "D6",
    date: "6.24 周三",
    title: "阿克苏 → 阿拉尔 → G580阿和沙漠公路 → 和田/墨玉",
    stay: "和田/墨玉",
    distance: "约 560 km",
    driveTime: "约 7.5-9 h",
    route: [points.aksu, points.alar, points.hotan],
    transport: "自驾",
    schedule: [
      "早出发前往阿拉尔，进入 G580 阿和沙漠公路。",
      "沙漠段以行车体验和安全停车点拍照为主，不做长时间暴晒停留。",
      "傍晚抵达和田/墨玉，安排清淡晚餐和早休息。",
    ],
    stops: ["阿拉尔", "G580阿和沙漠公路", "和田/墨玉"],
    notes: [
      "本版将住宿调整到和田/墨玉，避免原计划当天硬赶莎车造成疲劳驾驶。",
      "沙漠公路出发前满油，备水，不随意下道，不在低能见度或大风沙时冒进。",
      "车内空调连续运行，注意乘员补水，司机避免午后犯困。",
    ],
    mapLink: "https://uri.amap.com/navigation?from=80.2606,41.1688,%E9%98%BF%E5%85%8B%E8%8B%8F&to=79.9225,37.1168,%E5%92%8C%E7%94%B0&mode=car",
  },
  {
    id: "d7",
    day: "D7",
    date: "6.25 周四",
    title: "和田/墨玉 → 莎车 → 喀什",
    stay: "喀什",
    distance: "约 500 km",
    driveTime: "约 6-7.5 h",
    route: [points.hotan, points.shache, points.kashgar],
    transport: "自驾",
    schedule: [
      "上午从和田/墨玉出发，沿南疆城镇带前往莎车。",
      "莎车短停，可选叶尔羌汗王陵或老城街区，控制在 1.5-2 小时。",
      "下午抵达喀什，晚上逛喀什古城，适合安排正式团建晚餐。",
    ],
    stops: ["和田/墨玉", "莎车", "喀什古城"],
    notes: [
      "今天仍是长距离驾驶，莎车不要停留过久，避免夜间进喀什。",
      "到喀什后确认边境通行证办理情况，为 D8 帕米尔方向做准备。",
    ],
    mapLink: "https://uri.amap.com/navigation?from=79.9225,37.1168,%E5%92%8C%E7%94%B0&to=75.9898,39.4704,%E5%96%80%E4%BB%80&mode=car",
  },
  {
    id: "d8",
    day: "D8",
    date: "6.26 周五",
    title: "喀什 → 白沙湖 → 喀拉库勒湖 → 喀什",
    stay: "喀什",
    distance: "约 420 km",
    driveTime: "约 7-8 h",
    route: [points.kashgar, points.baisha, points.karakul, points.kashgar],
    transport: "自驾往返",
    schedule: [
      "清晨从喀什出发，沿中巴友谊公路前往白沙湖。",
      "中午前后到喀拉库勒湖，天气好时可远眺慕士塔格峰。",
      "下午返程回喀什，晚上整理行李和还车资料。",
    ],
    stops: ["白沙湖", "喀拉库勒湖", "慕士塔格峰观景方向", "喀什"],
    notes: [
      "需要边境管理区通行证，证件随身携带，遇检查主动配合。",
      "喀拉库勒湖海拔约 3600 米，少跑跳，不饮酒，轻微不适先休息补水。",
      "高原天气变化快，带厚外套，遇雨雪或大风按当天管制调整。",
    ],
    mapLink: "https://uri.amap.com/navigation?from=75.9898,39.4704,%E5%96%80%E4%BB%80&to=75.058,38.435,%E5%96%80%E6%8B%89%E5%BA%93%E5%8B%92%E6%B9%96&mode=car",
  },
  {
    id: "d9",
    day: "D9",
    date: "6.27 周六",
    title: "喀什飞上海",
    stay: "返程",
    distance: "市内约 15-30 km",
    driveTime: "约 0.5-1 h",
    route: [points.kashgar, points.shanghai],
    transport: "市内还车 + 航班",
    schedule: [
      "早餐后按航班时间还车，处理油量、车损、违章押金等事项。",
      "预留机场安检和团队行李整理时间。",
      "返程上海，团建结束。",
    ],
    stops: ["喀什市区", "喀什机场", "上海"],
    notes: [
      "建议选择下午或傍晚航班，上午不安排远距离活动。",
      "车辆还车时拍照留底，确认租车平台订单状态。",
    ],
    mapLink: "https://uri.amap.com/navigation?from=75.9898,39.4704,%E5%96%80%E4%BB%80&to=121.4737,31.2304,%E4%B8%8A%E6%B5%B7&mode=car",
  },
];

const colors = [
  "#0f766e",
  "#dc8b21",
  "#277da1",
  "#9d4edd",
  "#5a8f29",
  "#c2410c",
  "#b91c1c",
  "#2563eb",
  "#475569",
];

const map = L.map("route-map", {
  scrollWheelZoom: false,
  zoomControl: true,
}).setView([41.2, 82.5], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const layerGroup = L.layerGroup().addTo(map);
const controls = document.querySelector("#map-controls");
const selectedDay = document.querySelector("#selected-day");
const dayList = document.querySelector("#day-list");
const routeCache = new Map();
let activeRenderId = 0;

function renderControls() {
  const all = document.createElement("button");
  all.type = "button";
  all.textContent = "全线";
  all.className = "is-active";
  all.dataset.day = "all";
  controls.append(all);

  days.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.day;
    button.dataset.day = item.id;
    controls.append(button);
  });

  controls.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLButtonElement)) return;
    controls.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("is-active", button === event.target);
    });
    renderMap(event.target.dataset.day);
  });
}

async function getRoadGeometry(day) {
  const fallback = day.route.map((point) => [point.lat, point.lng]);
  if (day.transport.includes("航班")) return fallback;
  if (routeCache.has(day.id)) return routeCache.get(day.id);

  const coords = day.route.map((point) => `${point.lng},${point.lat}`).join(";");
  const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`;
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    const data = await response.json();
    if (data.code !== "Ok" || !data.routes?.[0]?.geometry?.coordinates) {
      routeCache.set(day.id, fallback);
      return fallback;
    }
    const geometry = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    routeCache.set(day.id, geometry);
    return geometry;
  } catch {
    routeCache.set(day.id, fallback);
    return fallback;
  } finally {
    window.clearTimeout(timer);
  }
}

async function renderMap(dayId = "all") {
  const renderId = ++activeRenderId;
  layerGroup.clearLayers();
  const visibleDays =
    dayId === "all" ? days.filter((item) => !item.transport.includes("航班")) : days.filter((item) => item.id === dayId);
  const bounds = [];
  const dayGeometries = await Promise.all(
    visibleDays.map(async (day) => ({
      day,
      geometry: await getRoadGeometry(day),
    })),
  );

  if (renderId !== activeRenderId) return;

  dayGeometries.forEach(({ day }, index) => {
    day.route.forEach((point) => bounds.push([point.lat, point.lng]));
    if (dayId !== "all") {
      selectedDay.innerHTML = `
        <strong>${day.day} ${day.date}</strong>
        ${day.title}<br>
        <b>${day.distance}</b> · ${day.driveTime} · 住宿：${day.stay}
      `;
    } else if (index === 0) {
      selectedDay.innerHTML = `
        <strong>全线预览</strong>
        当前仅展示新疆自驾段，方便查看每天路线；D1/D9 航班段可单独点击查看。
      `;
    }
  });

  dayGeometries.forEach(({ day, geometry }) => {
    const color = colors[days.findIndex((item) => item.id === day.id) % colors.length];

    if (geometry.length > 1) {
      const line = L.polyline(geometry, {
        color,
        weight: day.id === "d1" || day.id === "d9" ? 2 : 5,
        opacity: day.id === "d1" || day.id === "d9" ? 0.45 : 0.85,
        dashArray: day.transport.includes("航班") ? "8 8" : null,
      }).addTo(layerGroup);
      line.bindPopup(`<strong>${day.day} ${day.title}</strong><br>${day.distance} · ${day.driveTime}`);
    }

    day.route.forEach((point, pointIndex) => {
      const marker = L.circleMarker([point.lat, point.lng], {
        radius: pointIndex === 0 || pointIndex === day.route.length - 1 ? 7 : 5,
        color: "#ffffff",
        weight: 2,
        fillColor: color,
        fillOpacity: 1,
      }).addTo(layerGroup);
      marker.bindPopup(`<strong>${point.name}</strong><br>${day.day} · ${day.title}`);
    });
  });

  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [34, 34] });
  }
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderDays() {
  dayList.innerHTML = days
    .map(
      (day) => `
        <article class="day-card" id="${day.id}">
          <div class="day-card__head">
            <div class="day-badge">
              <span>${day.day}</span>
              <small>${day.date}</small>
            </div>
            <div class="day-title">
              <h3>${day.title}</h3>
              <p>${day.transport} · 住宿：${day.stay}</p>
            </div>
            <div class="day-metrics" aria-label="${day.day} 行程数据">
              <span class="pill">${day.distance}</span>
              <span class="pill">${day.driveTime}</span>
            </div>
          </div>
          <div class="day-card__body">
            <div class="info-block">
              <h4>当天安排</h4>
              <ul>${listItems(day.schedule)}</ul>
              <a class="map-link" href="${day.mapLink}" target="_blank" rel="noreferrer">打开导航参考</a>
            </div>
            <div class="info-block">
              <h4>主要停靠点</h4>
              <ul>${listItems(day.stops)}</ul>
            </div>
            <div class="info-block">
              <h4>驾驶及注意事项</h4>
              <ul>${listItems(day.notes)}</ul>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

renderControls();
renderDays();
renderMap();
