import { Question } from '../types'

export const questions: Question[] = [
  {
    id: 1,
    text: '面对突如其来的压力，你的反应最接近哪一种？',
    options: [
      { text: '立刻爆发出最强状态——压力就是我的兴奋剂', scores: { speed: 4, power: 3, courage: 4 } },
      { text: '先稳住呼吸，把局面拆解清楚再一步步解决', scores: { technique: 4, focus: 4 } },
      { text: '告诉自己"考验耐力的时候到了"，保持节奏慢慢来', scores: { endurance: 4, rhythm: 3 } },
      { text: '第一时间找周围的人商量，大家一起扛过去', scores: { teamwork: 4, elegance: 2 } },
    ],
  },
  {
    id: 2,
    text: '你更喜欢哪种能量输出方式？',
    options: [
      { text: '短时间极限爆发，燃尽了也无所谓，要的就是那一刻', scores: { speed: 4, power: 4, courage: 3 } },
      { text: '稳定持续地输出，像一台永远不熄火的引擎', scores: { rhythm: 4, endurance: 3, focus: 3 } },
      { text: '关键节点精准发力，平时保存实力、蓄势待发', scores: { technique: 4, focus: 3, power: 2 } },
      { text: '配合团队节奏，大家一起输出才最有力量', scores: { teamwork: 4, rhythm: 3 } },
    ],
  },
  {
    id: 3,
    text: '你觉得自己在团队里更接近什么角色？',
    options: [
      { text: '冲在最前面的破局者——我先上，你们跟', scores: { speed: 3, power: 3, courage: 4 } },
      { text: '给所有人分析局势、制定战术的指挥官', scores: { technique: 4, focus: 4, elegance: 2 } },
      { text: '默默稳定输出的中坚力量——队友倒下之前我绝不会倒', scores: { endurance: 4, rhythm: 3, focus: 3 } },
      { text: '连接所有人的粘合剂——没有我，队伍就是一盘散沙', scores: { teamwork: 5, elegance: 3 } },
    ],
  },
  {
    id: 4,
    text: '一个很高的目标摆在面前，你的心态是？',
    options: [
      { text: '直接冲！不试怎么知道自己能跳多高', scores: { courage: 5, speed: 3, power: 3 } },
      { text: '我可以一步一步来，每一次尝试都在靠近', scores: { rhythm: 3, endurance: 3, technique: 3 } },
      { text: '先找一个最佳角度，用最优美的姿态跃过去', scores: { technique: 4, elegance: 4, focus: 3 } },
      { text: '找几个队友一起上，配合着翻过去', scores: { teamwork: 4, elegance: 2, rhythm: 2 } },
    ],
  },
  {
    id: 5,
    text: '你最喜欢哪种胜利方式？',
    options: [
      { text: '一路领先，到终点时把所有人甩在身后——统治级碾压', scores: { speed: 5, power: 3, courage: 2 } },
      { text: '后程发力，最后一段突然逆袭反超——全场都没想到', scores: { endurance: 4, rhythm: 3, focus: 3 } },
      { text: '每个环节都完美执行，用无懈可击的技术拿下胜利', scores: { technique: 5, focus: 3, elegance: 2 } },
      { text: '和队友一起举起奖杯——一个人赢不够爽，一群人赢才对味', scores: { teamwork: 5, elegance: 2, rhythm: 2 } },
    ],
  },
  {
    id: 6,
    text: '遇到比你强的对手时，你的真实反应是？',
    options: [
      { text: '肾上腺素瞬间拉满！更想和他正面较量了', scores: { courage: 5, speed: 3, power: 3 } },
      { text: '表面冷静观察，暗中找到他的弱点再精准出击', scores: { technique: 4, focus: 4 } },
      { text: '按自己的节奏来，不被他干扰——他强任他强', scores: { rhythm: 4, endurance: 3, focus: 2 } },
      { text: '欣赏强者的同时默默学习，有机会就去请教', scores: { elegance: 3, teamwork: 3, focus: 3 } },
    ],
  },
  {
    id: 7,
    text: '你做事情的习惯更接近哪种？',
    options: [
      { text: '说干就干，速度第一，先动起来再说', scores: { speed: 5, power: 3, courage: 2 } },
      { text: '先画一张详细的路线图，每一步都清晰可见', scores: { technique: 4, focus: 4 } },
      { text: '不急不躁，保持自己的稳定节奏，时间会给出答案', scores: { rhythm: 4, endurance: 3, focus: 2 } },
      { text: '先问一圈身边朋友的意见，综合各方信息再出发', scores: { teamwork: 4, elegance: 3 } },
    ],
  },
  {
    id: 8,
    text: '你怎么看待人生中的"障碍"？',
    options: [
      { text: '加速冲过去！障碍就是用来突破的——栏架在那里就是等着被我跨的', scores: { courage: 4, speed: 3, power: 3 } },
      { text: '每一个障碍都有自己的节奏，找准了就能优雅地过去', scores: { rhythm: 4, technique: 3, elegance: 3 } },
      { text: '障碍让我停下来重新审视方向，有时候绕一下也不丢人', scores: { focus: 4, endurance: 3 } },
      { text: '人生就是接力——把障碍交给擅长处理的人，信任你的队友', scores: { teamwork: 5, elegance: 2 } },
    ],
  },
  {
    id: 9,
    text: '周末你最可能选择哪种充电方式？',
    options: [
      { text: '高强度运动——跑步、打球、举铁，不出汗不痛快', scores: { speed: 3, power: 3, courage: 3 } },
      { text: '安静地看书、学习、钻研一个感兴趣的领域', scores: { technique: 4, focus: 4 } },
      { text: '长跑、骑行、游泳——享受长时间沉浸在自己的节奏里', scores: { endurance: 4, rhythm: 3, focus: 2 } },
      { text: '约朋友聚会聊天，社交才是最好的能量来源', scores: { teamwork: 4, elegance: 3 } },
    ],
  },
  {
    id: 10,
    text: '面临一个重大决定时，你的状态是？',
    options: [
      { text: '凭直觉快速拍板——犹豫就会败北，错了再改', scores: { courage: 4, speed: 3, power: 2 } },
      { text: '收集大量信息、反复推演、做精确的分析和判断', scores: { technique: 5, focus: 4 } },
      { text: '给自己充分的时间，等待最好的时机再出手', scores: { endurance: 3, rhythm: 3, focus: 3 } },
      { text: '听听身边最重要的人怎么说，他们的意见对我很重要', scores: { teamwork: 4, elegance: 3 } },
    ],
  },
  {
    id: 11,
    text: '你希望别人怎么描述你的风格？',
    options: [
      { text: '"这人启动速度快得离谱，永远第一个冲出去"', scores: { speed: 5, power: 3, courage: 2 } },
      { text: '"稳如磐石，越到关键时刻越靠得住"', scores: { endurance: 3, focus: 4, rhythm: 3 } },
      { text: '"每一个动作都像教科书，精准又好看"', scores: { technique: 4, elegance: 4, focus: 2 } },
      { text: '"在队伍里最有感染力的人，有他在所有人都更卖力"', scores: { teamwork: 5, courage: 2, elegance: 2 } },
    ],
  },
  {
    id: 12,
    text: '如果人生是一场田径赛，你最想听到的解说词是？',
    options: [
      { text: '"天哪这爆发力！一起跑就确立了绝对优势！"', scores: { speed: 4, power: 4, courage: 3 } },
      { text: '"他/她的节奏控制太完美了，全程没有一丝波动"', scores: { rhythm: 5, technique: 3, focus: 2 } },
      { text: '"不可思议！后半程居然还有余力，还在加速！"', scores: { endurance: 5, focus: 3, courage: 2 } },
      { text: '"这一棒的交接堪称教科书！团队的胜利！"', scores: { teamwork: 5, elegance: 2, rhythm: 2 } },
    ],
  },
]
