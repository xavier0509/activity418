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
var userKeyId = "";
var capsuleIsStart = false;
var todayFirst = false;
var activeFirst = false;
var cardsNum = 0;
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





var needSentADLog = false;
var actEnd = false;
var awardToast = false;
var userIp = "";
var startLoginFlag = false;
var changeLoginFlag = false;
var localChanceNum = 0;
var isTrade = false;
var remembernum = "0";//福利街版块如果版本不符合，弹窗提示后重新new焦点
var toastTimeout = null;
var remainNum = 0;
var addNum = 0;
var hasFinalAward = false;
var _isLessThanHalfhour = false;
var page_type = "";//开启状态;
var link_type = "";//首行影视链接、首行教育链接、首行购物链接、首行应用链接
var _curHomeBtn = ""; //记录我的奖励页面点击的btn
var collectNum = 0;
var _curAllBtn = 0; //记录我的津贴页面点击的btn
var isActiveEndFirstIn = false;
var finalawardInfo = null;
var notGetAllowanceArray = [];//记录未领取的津贴
var notGetAllowanceIndex = 0;//记录未领取津贴的数组下标
var canClick = true;


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
    {businessName: "影视活动", question: "超级影视VIP会员可以免费看4K或1080p高清画质的影片吗?", answerA:"A:可以", answerB:"B:不可以", right: "A",
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
    {businessName: "影视活动", question: "奇异果VIP会员可以免费看4K或1080p高清画质的影片吗?", answerA:"A:可以", answerB:"B:不可以", right: "A",
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



var myAwardObj = {
	"code": "50100",
	"msg": "成功",
	"data": [{
		"lotteryActiveId": 119,
		"awardId": 101,
		"lotteryRememberId": 101,
		"awardName": "津贴一",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "17",
		"userKeyId": "49971737",
		"awardExchangeFlag": 1,
		"awardInfo": {
			"id": "",
			"addByDay": "false",
			"price": "50"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 102,
		"lotteryRememberId": 101,
		"awardName": "津贴二",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "17",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"id": "",
			"addByDay": "false",
			"price": "10"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 102,
		"lotteryRememberId": 101,
		"awardName": "津贴三",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "17",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"id": "",
			"addByDay": "false",
			"price": "20"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 201,
		"lotteryRememberId": 201,
		"awardName": "现金红包1",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "7",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"id": "",
			"addByDay": "false",
			"bonus": "0.66"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 202,
		"lotteryRememberId": 202,
		"awardName": "现金红包2",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "7",
		"userKeyId": "49971737",
		"awardExchangeFlag": 1,
		"awardInfo": {
			"id": "",
			"addByDay": "false",
			"bonus": "0.33"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 203,
		"lotteryRememberId": 203,
		"awardName": "现金红包3",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "7",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"id": "",
			"addByDay": "false",
			"bonus": "6.66"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 301,
		"lotteryRememberId": 301,
		"awardName": "黄金项链1",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "2",
		"userKeyId": "49971737",
		"awardExchangeFlag": 1,
		"addressEntity": {
			"province": "广东省1",
			"city": "深圳市",
			"area": "宝安区",
			"address": "石岩街道",
			"userPhone": "11011211999",
			"userName": "林心旺"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	},  {
		"lotteryActiveId": 119,
		"awardId": 302,
		"lotteryRememberId": 302,
		"awardName": "黄金项链2",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "2",
		"userKeyId": "49971737",
		"awardExchangeFlag": 1,
		"addressEntity": {
			"province": "广东省2",
			"city": "深圳市",
			"area": "宝安区",
			"address": "石岩街道",
			"userPhone": "11011211999",
			"userName": "林心旺"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 867,
		"lotteryRememberId": 53,
		"awardName": "黄金项链——12",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "2",
		"userKeyId": "49971737",
		"awardExchangeFlag": 1,
		"addressEntity": {
			"province": "广东省3",
			"city": "深圳市",
			"area": "宝安区",
			"address": "石岩街道"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 871,
		"lotteryRememberId": 52,
		"awardName": "金币1",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "19",
		"userKeyId": "49971737",
		"awardExchangeFlag": 1,
		"awardInfo": {
			"id": "",
			"addByDay": "false",
			"num": "13579"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 502,
		"lotteryRememberId": 502,
		"awardName": "金币2",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "19",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"id": "",
			"addByDay": "false",
			"num": "10"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 503,
		"lotteryRememberId": 503,
		"awardName": "金币3",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "19",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"id": "",
			"addByDay": "false",
			"num": "20"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 504,
		"lotteryRememberId": 504,
		"awardName": "金币4",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "19",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"id": "",
			"addByDay": "false",
			"num": "30"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 401,
		"lotteryRememberId": 401,
		"awardName": "特权购买购物",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "13",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"vipType": "product",
			"id": "123",
			"addByDay": "false"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 402,
		"lotteryRememberId": 402,
		"awardName": "特权购买少儿vip",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "13",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"vipType": "shaoervip",
			"id": "123",
			"addByDay": "false"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 403,
		"lotteryRememberId": 403,
		"awardName": "特权购买教育vip",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "13",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"vipType": "jiaoyuvip",
			"id": "123",
			"addByDay": "false"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 404,
		"lotteryRememberId": 404,
		"awardName": "特权购买爱奇艺影视vip",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "13",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"vipType": "yinhe",
			"id": "123",
			"addByDay": "false"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 119,
		"awardId": 405,
		"lotteryRememberId": 405,
		"awardName": "特权购买腾讯影视vip",
		"awardUrl": "http://172.20.155.51//",
		"awardTypeId": "13",
		"userKeyId": "49971737",
		"awardExchangeFlag": 0,
		"awardInfo": {
			"vipType": "6",
			"id": "123",
			"addByDay": "false"
		},
		"awardTime": "2019-03-22 16:30:27",
		"seq": 11,
		"remainingNumber": 0
	}, {
		"lotteryActiveId": 113,
		"awardId": 0,
		"lotteryRememberId": 2,
		"awardName": "赠送的周年卡片",
		"awardTypeId": "6",
		"userKeyId": "49971737",
		"userOpenId": "69e6aac4306611e6ba4200163e022eda",
		"awardExchangeFlag": 1,
		"awardInfo": {
			"focaKey": "lc1"
		},
		"awardTime": "2019-03-22 15:28:28",
		"seq": 0,
		"remark": "首次进入418第二阶段赠送获得",
		"remainingNumber": 0
	}]
}

