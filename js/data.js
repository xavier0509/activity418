var accountVersion = ""; // 账户版本
var cAppVersion = ""; //影视版本
var deviceInfo = ""; //设备信息
var macAddress = ""; //mac
var TVmodel = ""; //机型
var TVchip = ""; //机芯
var activityId = ""; //激活id
var emmcId = "";//emmcid;
var loginstatus = false; //登录状态-string
var tencentWay = ""; //腾讯源机器调用登录的要求（both,qq,weixin)
var user_flag = ""; //下单传递用户标识1-token；2-openid
var access_token = ""; //token值
var login_type = ""; //下单拓展信息 0-手机；1-qq;2-weixin
var vuserid = ""; //vuserid
var showFlag = ""; //用于判断当前账户是否发生改变，防止多次监听到账户变化多次刷新页面
var cOpenId = "";
var nick_name = "";
var movieSource = "";
var needQQ = false;
var avatar = "";
var qqtoken = null;

var gameVersion = 0;
var showprogress = 0;
var waitApkInstallFunc = "";
var downToast = "";
var downGameFalse = false;
var startActionReplace = "coocaa.intent.action.HOME";

var actionStatus = "start";
var actionId = "";
var capsuleId = "";

// var adressIp = "https://restful.skysrt.com";
// var orderUrl = "https://api-business.skysrt.com/v3/order/genOrderByJsonp.html?data=";

var adressIp = "http://beta.restful.lottery.coocaatv.com";
var orderUrl = "http://172.20.132.182:8090/v3/order/genOrderByJsonp.html?data=";


var operationurl="http://api.home.skysrt.com/v1/tvos/getWebPageContent";
// var operationurl="http://beta-api-home.skysrt.com/tvos/getWebPageContent";

//var enurl = "https://webapp.skysrt.com/activity418/address/index.html?";
 var enurl = "http://beta.webapp.skysrt.com/zy/address/index.html?";//实体奖url

// var allowanceUrl = "https://jintie.coocaa.com/api/subsidy/v1/query-userSubsidyInfo-byToken"
// var allowanceClientId = "YS_RELEASE";
var allowanceUrl = "http://172.20.155.209:6081/api/subsidy/v1/query-userSubsidyInfo-byToken"  //查询津贴地址
var allowanceClientId = "YS_BETA";

var vipstartUrl = "http://dev.business.video.tc.skysrt.com/v3/web/actCenter/index.html"; 
//var vipstartUrl = "https://api-business.skysrt.com/v3/web/actCenter/index.html"; //正式地址

var showMove = false;//是否展示动效

var browserVersion = 0;
var cAppVersion = 0;
var activityCenterVersion = 0;
var mallVersion = 0;

var ADMsg1 = null;//视频任务广告
var ADMsg2 = null;//大富翁冠名
var ADMsg3 = null;//扭蛋冠名
var ADMsg4 = null;//大富翁奖品位
var ADMsg5 = null;//弹窗广告位
var lotteryNum = 0;
var startDayNum = 0;
var userKeyId = "";
var capsuleIsStart = false;
var todayFirst = false;
var activeFirst = false;
var cardsNum = 0;
var cardsNum4 = 0;
var cardsNum1 = 0;
var cardsNum8 = 0;
var beginTime = null;
var endTime = null;
var nowTime = null;
var nowPosition = "";
var nowPosition = "";
var alter = "";
var alterType = "";

var _province = "";
var _city = "";
var interval_diceMove = null;
var diceCanClick = true;

var haveMarge = false;
var haveUnReceive = false;
var needAddChance = false;
var haveGiftChip = "";
var chipKey = false;
var intervalForCutdown = null;
var _adsTaskId = "";
var _bPlayFormalAdsVideo = false;//播放的是否正式广告:  false:播放的是任务视频， true:正式广告视频
var hasfinishvideo = false;//是否加过广告机会

var needFresh = false;
var rememberBtn = null;//用于刷新页面后定位焦点
var needRememberFocus = false;//是否需要定位焦点的标志

var speak7type = "answer";
var hasOverTask = 0;
var speak1,speak2,speak3,speak4,speak5,speak6,speak7,speak8 = false;
var str1,str2,str3,str4,str5,str6,str7,str8 = "";

var needshowdialog1 = false; //赠卡、合成
var needshowdialog2 = false;//赠卡、未合成
var needshowdialog3 = false;//正常合成18之前
var needshowdialog4 = false;//正常合成18之后
var needshowdialog5 = false;//走一圈18前
var needshowdialog6 = false;//走一圈18后
var needshowdialog7 = false;//赠送机会
var removeBackButton = false;
var marqueeInterval1 = null;
var marqueeInterval2 = null;

var startLoadTime = null;//开始加载时间
var entertime = null;//加载完成时间
var leavetime = null;//离开时间
var gameStatus = 0;//0未开始；1正常期；2冻结期；3开奖结束期
var rememberSetFocus = null;
var pagefrom = null;
var donotSentReplacebtnLog = false;//不要传左右切换的日志，true就是不要传
var donotSentStartParamBtnLog = false;//不要传通用方法的日志，true就是不要传
var donotSentAllowanceBtnLog = false;//不要传津贴点击的日志，true就是不要传
var donotSentMissionBtnLog = false;//不要传任务点击的日志，true就是不要传
var donotSentAwardBtnLog = false;//不要传任务点击的日志，true就是不要传
var toastTimeout = null;
var startLoginFlag = false;
var changeLoginFlag = false;
var userIp = "";
var needSentADLog = false;
var remembernum = "0";//福利街版块如果版本不符合，弹窗提示后重新new焦点
var rememberEndBtn = 0;

var rememberAllowancebtnFlag = "0";//2---更多商品   3-----津贴领取按钮

var curDrawBtnName = "mapBtn";//记录点击的抽奖按钮的名字
var allowancePageForm = "mainbox";//记录进入津贴页面的上一个页面
var _curHomeBtn = ""; //记录我的奖励页面点击的btn
var _curAllBtn = 0; //记录我的津贴页面点击的btn
var notGetAllowanceArray = [];//记录未领取的津贴
var notGetAllowanceIndex = 0;//记录未领取津贴的数组下标
var isGetAwardAfterLogined = "fasle";//记录是否是登陆后领取奖励


var _interlucationsArrayTencent = [
    //题目， 答案A，答案B，正确答案，出现日期， 用户是否做过此题
    {businessName: "教育", question: "哪个频道可以学习健身课程/中医养生/科学启蒙课程?", answerA:"A:购物频道", answerB:"B:TV课堂", right: "B",
        jump: {"byvalue": "coocaa.intent.action.HOME_COMMON_LIST",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "102831"
            },
            "bywhat": "action"}
    },
    {businessName: "影视活动", question: "超级影视VIP权益=TV端会员权益+腾讯视频VIP权益(手机、电脑、PAD)吗?", answerA:"A:是的", answerB:"B:不是", right: "A",
        jump: {"byvalue": "coocaa.intent.vip.center",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "source_id": "5"
            },
            "bywhat": "action"}
    },
    {businessName: "影视内容", question: "电视剧《都挺好》中饰演苏家老二苏明成的演员是?", answerA:"A:郭京飞", answerB:"B:陆毅", right: "A",
        jump: {"byvalue": "coocaa.intent.movie.detailinfo",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "_otx_wu1e7mrffzvibjy"
            },
            "bywhat": "action"}
    },
    {businessName: "购物", question: "荣耀SL轨睡眠按摩椅是否包括足底按摩?", answerA:"A:包括", answerB:"B:不包括", right: "A",
        jump: {"byvalue": "coocaa.intent.action.HOME_COMMON_LIST",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "102930"
            },
            "bywhat": "action"}
    },
    {businessName: "教育", question: "孩子想看动画片/儿歌/早教/英文/绘本/故事去哪个频道?", answerA:"A:少儿频道", answerB:"B:体育频道", right: "A",
        jump: {"byvalue": "coocaa.intent.action.HOME_COMMON_LIST",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "103177"
            },
            "bywhat": "action"}
    },
    {businessName: "影视活动", question: "超级影视VIP周年庆大促进行中，年卡特惠价是几折？", answerA:"A:4.8折", answerB:"B:7折", right: "A",
        jump: {"byvalue": "coocaa.intent.vip.center",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "source_id": "5"
            },
            "bywhat": "action"}
    },
    {businessName: "影视内容", question: "周星驰贺岁片《新喜剧之王》男主演是谁?", answerA:"A:黄渤", answerB:"B:王宝强", right: "B",
        jump: {"byvalue": "coocaa.intent.movie.detailinfo",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "_otx_lt0w27nj9tpfllw"
            },
            "bywhat": "action"}
    },
    {businessName: "购物", question: "食材净化器可以去除食物的什么部分？", answerA:"A:营养成分", answerB:"B:农药", right: "B",
        jump: {"byvalue": "coocaa.intent.action.HOME_COMMON_LIST",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "102930"
            },
            "bywhat": "action"}
    },
    {businessName: "教育", question: "哪个频道学习小学、初高中课程/语数英辅导/健身瑜伽/芭蕾吉他?", answerA:"A:教育", answerB:"B:购物", right: "A",
        jump: {"byvalue": "coocaa.intent.action.HOME_COMMON_LIST",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "10738"
            },
            "bywhat": "action"}
    }
]

var _interlucationsArrayYinhe = [
    //题目， 答案A，答案B，正确答案，出现日期， 用户是否做过此题
    {businessName: "教育", question: "哪个频道可以学习健身课程/中医养生/科学启蒙课程?", answerA:"A:购物频道", answerB:"B:TV课堂", right: "B",
        jump: {"byvalue": "coocaa.intent.action.HOME_COMMON_LIST",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "102987"
            },
            "bywhat": "action"}
    },
    {businessName: "影视活动", question: "购买奇异果VIP会赠送等时长的爱奇艺移动端VIP权益吗？", answerA:"A:赠送", answerB:"B:不赠送", right: "A",
        jump: {"byvalue": "coocaa.intent.vip.center",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "source_id": "1"
            },
            "bywhat": "action"}
    },
    {businessName: "影视内容", question: "电视剧《都挺好》中饰演苏家老二苏明成的演员是?", answerA:"A:郭京飞", answerB:"B:陆毅", right: "A",
        jump: {"byvalue": "coocaa.intent.movie.detailinfo",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "_oqy_225915601"
            },
            "bywhat": "action"}
    },
    {businessName: "购物", question: "荣耀SL轨睡眠按摩椅是否包括足底按摩?", answerA:"A:包括", answerB:"B:不包括", right: "A",
        jump: {"byvalue": "coocaa.intent.action.HOME_COMMON_LIST",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "102930"
            },
            "bywhat": "action"}
    },
    {businessName: "教育", question: "孩子想看动画片/儿歌/早教/英文/绘本/故事去哪个频道?", answerA:"A:少儿频道", answerB:"B:体育频道", right: "A",
        jump: {"byvalue": "coocaa.intent.action.HOME_COMMON_LIST",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "103178"
            },
            "bywhat": "action"}
    },
    {businessName: "影视活动", question: "奇异果VIP周年庆大促进行中，年卡特惠价是几折？", answerA:"A:7折", answerB:"B:5折", right: "B",
        jump: {"byvalue": "coocaa.intent.vip.center",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "source_id": "1"
            },
            "bywhat": "action"}
    },
    {businessName: "影视内容", question: "周星驰贺岁片《新喜剧之王》男主演是谁?", answerA:"A:黄渤", answerB:"B:王宝强", right: "B",
        jump: {"byvalue": "coocaa.intent.movie.detailinfo",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "_oqy_1630560500"
            },
            "bywhat": "action"}
    },
    {businessName: "购物", question: "食材净化器可以去除食物的什么部分？", answerA:"A:营养成分", answerB:"B:农药", right: "B",
        jump: {"byvalue": "coocaa.intent.action.HOME_COMMON_LIST",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "102930"
            },
            "bywhat": "action"}
    },
    {businessName: "教育", question: "哪个频道学习小学、初高中课程/语数英辅导/健身瑜伽/芭蕾吉他?", answerA:"A:教育", answerB:"B:购物", right: "A",
        jump: {"byvalue": "coocaa.intent.action.HOME_COMMON_LIST",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "id": "10738"
            },
            "bywhat": "action"}
    }
]
