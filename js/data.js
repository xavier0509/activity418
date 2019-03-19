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


// var operationurl="http://api.home.skysrt.com/v1/tvos/getWebPageContent";
// var operationurl="http://172.20.155.91:8080/tvos/getWebPageContent";
var operationurl="http://beta-api-home.skysrt.com/tvos/getWebPageContent";

var enurl = "https://webapp.skysrt.com/springfestival19/address/index.html?";
// var enurl = "http://beta.webapp.skysrt.com/zy/address/index.html?";//实体奖url

var allowanceUrl = "https://jintie.coocaa.com/api/subsidy/v1/query-userSubsidyInfo-byToken"
var allowanceClientId = "YS_RELEASE";
// var allowanceUrl = "http://172.20.155.209:6081/api/subsidy/v1/query-userSubsidyInfo-byToken"  //查询津贴地址
// var allowanceClientId = "YS_BETA";


var showMove = false;//是否展示动效

var browserVersion = 0;
var cAppVersion = 0;
var activityCenterVersion = 0;
var mallVersion = 0;

var ADMsg = null;

var lotteryNum = 0;
var startDayNum = 0;
var capsuleIsStart = false;
var todayFirst = false;
var cardsNum = 0;
var nowPosition = "";

var _province = "";
var _city = "";
var interval_diceMove = null;
var diceCanClick = true;

// var lc4Num = 0;
// var lc1Num = 0;
// var lc8Num = 0;
// var lc418Num = 0;
var haveMarge = false;
var haveUnReceive = false;









var needSentADLog = false;
var needFresh = false;
var actEnd = false;
var awardToast = false;
var marqueeInterval1 = null;
var marqueeInterval2 = null;
var userIp = "";
var startLoginFlag = false;
var changeLoginFlag = false;

var needshowdialog1 = false; //任务完成弹窗
var needshowdialog2 = false;//最后一天提示
var needshowdialog3 = false;//交易成功弹窗
var needshowdialog4 = false;//合成弹窗
var needshowdialog5 = false;//开奖弹窗
var intervalForCutdown = null;
var localChanceNum = 0;
var gameStatus = 0;//0未开始；1正常期；2冻结期；3开奖结束期
var isTrade = false;
var rememberBtn = null;//用于刷新页面后定位焦点
var needRememberFocus = false;//是否需要定位焦点的标志
var remembernum = "0";//福利街版块如果版本不符合，弹窗提示后重新new焦点
var toastTimeout = null;
var remainNum = 0;
var addNum = 0;
var setFocuss = null;
var hasFinalAward = false;
var _isLessThanHalfhour = false;
var page_type = "";//开启状态;
var link_type = "";//首行影视链接、首行教育链接、首行购物链接、首行应用链接


var _curHomeBtn = ""; //记录我的奖励页面点击的btn
var removeBackButton = false;
var collectNum = 0;
var _curAllBtn = 0; //记录我的津贴页面点击的btn
var isActiveEndFirstIn = false;
var finalawardInfo = null;


var notGetAllowanceArray = [];//记录未领取的津贴
var notGetAllowanceIndex = 0;//记录未领取津贴的数组下标

var canClick = true;


var _interlucationsArrayYinhe = [
    //题目， 答案A，答案B，正确答案，出现日期， 用户是否做过此题
    {businessName: "影视活动爱奇艺", question: "奇异果VIP会员每月免费赠送几张点播券?", answerA:"A.2张", answerB:"B.4张", right: "B", date: 1,
        jump: {business:"browser",type:"browser", packageName:"com.coocaa.app_browser", action:"coocaa.intent.action.browser",countDownTime:10,"subTask":0,param:{"url":"http://img.sky.fs.skysrt.com/movie_homepage_images/20180823/20180823202553287008_1920x1080.jpg"}}}
    ,{businessName: "影视活动爱奇艺", question: "开通奇异果VIP可以送多少时长的手机端爱奇艺会员?", answerA:"A.同开通时间", answerB:"B.只送1个月", right: "A", date: 2,
        jump: {business:"browser",type:"browser", packageName:"com.coocaa.app_browser", action:"coocaa.intent.action.browser",countDownTime:10,"subTask":0,param:{"url":"https://webapp.skysrt.com/appstore/righ_aiqiyi/index.html?part=2"}}}
    ,{businessName: "影视", question: "沈腾一个月花光十亿，是那部电影的情节?", answerA:"A.羞羞的铁拳", answerB:"B.西虹市首富", right: "B", date: 3,
        jump: {"byvalue": "coocaa.intent.vip.center",
            "packagename": "com.tianci.movieplatform",
            "dowhat": "startActivity",
            "versioncode": "-1",
            "params": {
                "business_type": "0",
                "source_id": "5"
            },
            "bywhat": "action"}}
    ,{businessName: "影视", question: "赵丽颖、冯绍峰在哪部电视剧里饰演夫妻?", answerA:"A.知否知否", answerB:"B.扶摇", right: "A", date: 4,
        jump: {business:"movie",type:"detailinfo", packageName:"com.tianci.movieplatform", action:"coocaa.intent.movie.detailinfo",countDownTime:10,"subTask":0,param:{"id":"_oqy_216266201"}}}
    ,{businessName: "教育", question: "教育频道下新推出的成人教育频道叫什么名字？", answerA:"A.TV课堂", answerB:"B.兴趣课堂", right: "A", date: 5,
        jump: {business:"movie",type:"commonlist", packageName:"com.tianci.movieplatform", action:"coocaa.intent.action.HOME_COMMON_LIST",countDownTime:10,"subTask":0,param:{"id":"102987"}}}
    ,{businessName: "教育", question: "少儿VIP年卡春节期间售价是多少?", answerA:"A.339元/年", answerB:"B.169元/年", right: "B", date: 6,
        jump: {business:"movie",type:"movie", packageName:"com.tianci.movieplatform", action:"coocaa.intent.vip.center",countDownTime:10,"subTask":0,param:{"business_type": "1", "source_id": "57"}, versionCode: "3180001"}}
    ,{businessName: "教育", question: "教育VIP可以观看多少个学龄段的内容?", answerA:"A.12个年级", answerB:"B.某个选定的年级", right: "A", date: 7,
        jump: {business:"movie",type:"commonlist", packageName:"com.tianci.movieplatform", action:"coocaa.intent.action.HOME_COMMON_LIST",countDownTime:10,"subTask":0,param:{"id":"10738"}, versionCode: "3180001"}}
    ,{businessName: "购物", question: "双立人是哪个国家的品牌?", answerA:"A.德国", answerB:"B.美国", right: "A", date: 8,
        jump: {business:"mall",type:"commonlist", packageName:"com.tianci.movieplatform", action:"coocaa.intent.action.HOME_COMMON_LIST",countDownTime:10,"subTask":0,param:{"id":"102930"}}}
    ,{businessName: "购物", question: "购物商品支持扫描下单吗?", answerA:"A.支持", answerB:"B.不支持", right: "A", date: 9,
        jump: {business:"mall",type:"commonlist", packageName:"com.tianci.movieplatform", action:"coocaa.intent.action.HOME_COMMON_LIST",countDownTime:10,"subTask":0,param:{"id":"102930"}}}
]
