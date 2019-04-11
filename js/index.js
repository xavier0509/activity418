
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", this.handleBackButton, false);
        document.addEventListener("backbuttondown", this.handleBackButtonDown, false);
        document.addEventListener("resume", this.handleresume, false);
        document.addEventListener("pause", this.handlepause, false);
        document.addEventListener("homebutton", this.homeButtonFunction, false);
    },
    homeButtonFunction:function () {
        console.log("-----------按了主页键------------");
      	exitAll();
    },
    handleresume: function() {
        entertime = new Date().getTime();
        console.log("************************");
        if (needFresh) {
            var pagename = "";
            var page_type = "";
            if($("#gamePanel").offset().left < -600){
                pagename = "扭蛋机活动";
                if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
            }else{
                pagename = "大富翁活动";
                if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
            }
            sentLog("okr_web_page_show", '{"page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', pagename, '曝光', '', '']);
            needFresh = false;
            showPage(false, true)
        } else {
            if(startLoginFlag && changeLoginFlag){
                console.log("登录成功");
                startLoginFlag = false;
                changeLoginFlag = false;
				if ($("#dialogPage").css("display") == "block"&&$("#getOtherAward1").css("display") == "block") {
					isGetAwardAfterLogined = "true";
					$("#otherBtn2").trigger("itemClick");
				}
				if ($("#myAwardPage").css("display") == "block") {
                    console.log(_curHomeBtn);
                    $("#" + _curHomeBtn).trigger("itemClick");
                    if (_curHomeBtn == "allowanceAward") {
                    	console.log("我的奖励页面的津贴点击启登录成功后");
                    	getAllNotGetAllowance();
                    }
                }
				if ($("#allowancePage").css("display") == "block") {
					console.log("------2");
			        getAllNotGetAllowance();
                }
                sentLog("okr_web_clicked_result", '{"page_name":"418活动登录弹窗","activity_name":"418活动","login_result":"登录成功"}');
                _czc.push(['_trackEvent', '418活动', '418活动登录弹窗', '登录成功', '', '']);
                if(loginstatus == "true"){
                    $("#allowanceBtn").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/allowance.png)");
                    $("#allowanceBtn img").attr("src","http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/allowancefocus.png");
                }else{
                    $("#allowanceBtn").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/newdailingqu.png)");
                    $("#allowanceBtn img").attr("src","http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/newdailingqufocus.png");
                }
            }else if (startLoginFlag) {
                console.log("登录失败");
                startLoginFlag = false;
                changeLoginFlag = false;
                sentLog("okr_web_clicked_result", '{"page_name":"418活动登录弹窗","activity_name":"418活动","login_result":"登录失败"}');
                _czc.push(['_trackEvent', '418活动', '418活动登录弹窗', '登录失败', '', '']);
            }else if($("#allowancePage").css("display") == "block"){
            	sentLog("okr_web_page_show", '{"page_name":"我的津贴页面","activity_name":"418活动"}');
            	_czc.push(['_trackEvent', '418活动', "我的津贴页面", '曝光', '', '']);
            }else if($("#myAwardPage").css("display") == "block"){
            	if ($("#dialogPage").css("display") == "block") {
            		if ($("#redHasGet").css("display") == "block") {
            			map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("redHasGetBtn"), "btn-focus", function() {}, function(val) {}, function(obj) {});
            		}else if($("#redNotGet").css("display") == "block"){
            			map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("redQrcode"), "btn-focus", function() {}, function(val) {}, function(obj) {});
            		}else if($("#otherNotGet").css("display") == "block"){
            			map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherInfo3"), "btn-focus", function() {}, function(val) {}, function(obj) {});
            		}else if($("#otherHasGet").css("display") == "block"){
            			map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("hasGotInfo4"), "btn-focus", function() {}, function(val) {}, function(obj) {});
            		}
            	} else{
            		getMyAwards(2);
            	}
            	sentLog("okr_web_page_show", '{"page_name":"我的奖励页面","activity_name":"418活动"}');
	            _czc.push(['_trackEvent', '418活动', "我的奖励页面", '曝光', '', '']);
            }else {
                if($("#questionbox").css("display") == "block"){
                    sentLog("okr_web_page_show", '{"page_name":"问答任务页面","activity_name":"418活动"}');
                    _czc.push(['_trackEvent', '418活动', "问答任务页面", '曝光', '', '']);
                    if (ADMsg5 != null && ADMsg5.schedules != undefined && ADMsg5.schedules[0] != undefined) {
                        sentInnerAdshow(ADMsg5, "G0006", "1", "1", "1", "", "","");
                        sentThirdAdshow("img", ADMsg5);
                    }
                }
                var pagename = "";
                var page_type = "";
                if($("#gamePanel").offset().left < -600){
                    pagename = "扭蛋机活动";
                    if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
                }else{
                    pagename = "大富翁活动";
                    if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
                }
                sentLog("okr_web_page_show", '{"page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
                _czc.push(['_trackEvent', '418活动', pagename, '曝光', '', '']);
            }
        }
    },
    handlepause: function() {
        leavetime = new Date().getTime();
        console.log("===========================pause=========="+(leavetime-entertime));
        sentLog("okr_web_clicked_result", '{"activity_duration":"'+(leavetime-entertime)+'","activity_name":"418活动"}');
        _czc.push(['_trackEvent', '418活动', '停留时长', '',(leavetime-entertime), '']);
    },
    handleBackButton: function() {

    },
    handleBackButtonDown: function() {
        if(removeBackButton){
            return;
        }
        else if ($("#rulePage").css("display") == "block") {
            $("#mainbox").show();
            $("#rulePage").hide();
            map = new coocaakeymap($(".coocaabtn"), $("#ruleBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            var pagename = "";
            var page_type = "";
            if($("#gamePanel").offset().left < -600){
                if (ADMsg3 != null && ADMsg3.schedules != undefined && ADMsg3.schedules[0] != undefined) {
                    sentInnerAdshow(ADMsg3, "G0006", "3", "1", "1", "", "","");
                    sentThirdAdshow("img", ADMsg3);
                }
                pagename = "扭蛋机活动";
                if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
            }else{
                if (ADMsg2 != null && ADMsg2.schedules != undefined && ADMsg2.schedules[0] != undefined) {
                    sentInnerAdshow(ADMsg2, "G0006", "2", "1", "1", "", "","");
                    sentThirdAdshow("img", ADMsg2);
                }
                if (ADMsg4 != null && ADMsg4.schedules != undefined && ADMsg4.schedules[0] != undefined) {
                    sentInnerAdshow(ADMsg4, "G0006", "2", "2", "1", "", "","");
                    sentThirdAdshow("img", ADMsg4);
                }
                pagename = "大富翁活动";
                if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
            }
            sentLog("okr_web_page_show", '{"page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', pagename, '曝光', '', '']);
        }
        else if($("#questionbox").css("display") == "block"){
            $("#clickOkSure").show();
            $(".answerbtn").show();
            $("#ques").show();
            $("#rightanswer").hide();
            $("#erroranswer").hide();
            $("#answer4").hide();
            $("#answer5").hide();
            $("#answer6").hide();
            $("#questionbox").hide();
            $("#blackBg").hide();
            needRememberFocus=true;
            rememberBtn = "#question";
            showPage(false,false);
        }
        else if($("#getallowancesuccess").css("display") == "block"){
            selectMyAllowanceNum();
            $("#blackBg").hide();
            $("#getallowancesuccess").hide();
            initMap("#allowanceGet",false);
        }
        else if($("#compoundWindow").css("display") == "block"){
            $("#compoundWindow").hide();
            $("#blackBg").hide();
            if($("#gamePanel").offset().left > -600){

            }else{
                donotSentReplacebtnLog = true;
                $(".replaceBtn2").trigger("itemFocus");
            }
            initMap("#mapBtn",true);
        }
        else if($("#addChanceWindow").css("display") == "block"){
            $("#addChanceWindow").hide();
            $("#blackBg").hide();
            // $("#gamePanel").css("transform", "translate3D(0, 0, 0)");
            // $("#gameMap").show();
            // $("#gameDraw").hide();
            if($("#gamePanel").offset().left > -600){

            }else{
                donotSentReplacebtnLog = true;
                $(".replaceBtn2").trigger("itemFocus");
            }
            initMap("#mapBtn",false);
        }else if($("#allowancePage").css("display") == "block"){
        	$("#allowancePage").css("display","none");
        	console.log(allowancePageForm);
        	if (allowancePageForm == "mainbox") {
        		var pagename = "";
	            var page_type = "";
	            if($("#gamePanel").offset().left < -600){
	                if (ADMsg3 != null && ADMsg3.schedules != undefined && ADMsg3.schedules[0] != undefined) {
	                    sentInnerAdshow(ADMsg3, "G0006", "3", "1", "1", "", "","");
	                    sentThirdAdshow("img", ADMsg3);
	                }
	                pagename = "扭蛋机活动";
	                if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
	            }else{
	                if (ADMsg2 != null && ADMsg2.schedules != undefined && ADMsg2.schedules[0] != undefined) {
	                    sentInnerAdshow(ADMsg2, "G0006", "2", "1", "1", "", "","");
	                    sentThirdAdshow("img", ADMsg2);
	                }
	                if (ADMsg4 != null && ADMsg4.schedules != undefined && ADMsg4.schedules[0] != undefined) {
	                    sentInnerAdshow(ADMsg4, "G0006", "2", "2", "1", "", "","");
	                    sentThirdAdshow("img", ADMsg4);
	                }
	                pagename = "大富翁活动";
	                if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
	            }
	            sentLog("okr_web_page_show", '{"page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
	            _czc.push(['_trackEvent', '418活动', pagename, '曝光', '', '']);
	            
        		showPage(false,false);
        		$("#mainbox").css("display","block");
        		map = new coocaakeymap($(".coocaabtn"), $("#allowanceBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        	} else{
        		$("#myAwardPage").css("display","block");
        		map = new coocaakeymap($(".coocaa_btn2"), null, "btn-focus", function() {}, function(val) {}, function(obj) {});
        		sentLog("okr_web_page_show", '{"page_name":"我的奖励页面","activity_name":"418活动"}');
				_czc.push(['_trackEvent', '418活动', '我的奖励页面', '曝光', '', '']);
        	}
        }else if($("#myAwardPage").css("display") == "block"){
        	if ($("#dialogPage").css("display") == "block") {
        		$("#dialogPage").css("display","none");
        		$(".secondDialog").css("display","none");
        		getMyAwards(2);
        	} else{
        		var pagename = "";
	            var page_type = "";
	            if($("#gamePanel").offset().left < -600){
	                if (ADMsg3 != null && ADMsg3.schedules != undefined && ADMsg3.schedules[0] != undefined) {
	                    sentInnerAdshow(ADMsg3, "G0006", "3", "1", "1", "", "","");
	                    sentThirdAdshow("img", ADMsg3);
	                }
	                pagename = "扭蛋机活动";
	                if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
	            }else{
	                if (ADMsg2 != null && ADMsg2.schedules != undefined && ADMsg2.schedules[0] != undefined) {
	                    sentInnerAdshow(ADMsg2, "G0006", "2", "1", "1", "", "","");
	                    sentThirdAdshow("img", ADMsg2);
	                }
	                if (ADMsg4 != null && ADMsg4.schedules != undefined && ADMsg4.schedules[0] != undefined) {
	                    sentInnerAdshow(ADMsg4, "G0006", "2", "2", "1", "", "","");
	                    sentThirdAdshow("img", ADMsg4);
	                }
	                pagename = "大富翁活动";
	                if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
	            }
                if(gameStatus == 3){
                    pagename = "结束页面";
                }
	            sentLog("okr_web_page_show", '{"page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
	            _czc.push(['_trackEvent', '418活动', pagename, '曝光', '', '']);
	            
        		showPage(false,false);
        		$("#myAwardPage").css("display","none");
        		$("#mainbox").css("display","block");
        		map = new coocaakeymap($(".coocaabtn"), $("#myAwardBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        	}
        }else{
        	if ($("#dialogPage").css("display") == "block") {
        		$("#dialogPage").css("display","none");
        		console.log($("#gamePanel").offset().left);
        		console.log($("#gamePanel").offset().left < -600);
        		if($("#gamePanel").offset().left < -600){
        			map = new coocaakeymap($(".coocaabtn"), $("#drawBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        			$("#drawBtn").trigger("itemFocus");
        		}else{
        			map = new coocaakeymap($(".coocaabtn"), $("#mapBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        			$("#mapBtn").trigger("itemFocus");
        		}
        		if ($("#getOtherAward1").css("display") == "block"&&$("#otherBtn2").attr("awardTypeId") == 6) {
        			console.log("抽中碎片时的返回");
        			showPage(false,false);
        		}
        		if($("#getOtherAward2").css("display") == "block"){
        			console.log("抽中套卡时的返回");
        			selectChipInfo();
        		}
        		$(".secondDialog").css("display","none");
        	} else{
        		exitAll();
        	}
        }
    },

    onDeviceReady: function() {
        cordova.require("coocaaosapi");
        app.receivedEvent('deviceready');
        app.triggleButton();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelectorAll('.received');
        // listeningElement.setAttribute('style', 'display:none;');
        for (var i = 0, j = receivedElement.length; i < j; i++) {
            // receivedElement[i].setAttribute('style', 'display:block;');
        }
        /*receivedElement.setAttribute('style', 'display:block;');*/

        console.log('Received Event: ' + id);
        actionId = getUrlParam("id");
        capsuleId = getUrlParam("capsuleId");
        coocaaosapi.getBaseInfo(function(msg) {
            console.log("-----------baseinfo-------" + JSON.stringify(msg));
            if (msg.totalMem > 1.1 * 1024 * 1024 * 1024) {
                showMove = true;
            }else{
                $("#mainbox").css("transition","all 0s");
            }
        }, function(err) {
            console.log("-----------baseinfo-------" + JSON.stringify(err));
        })
        coocaaosapi.getDeviceInfo(function(message) {
            deviceInfo = message;
            if (deviceInfo.version < '6') {
                android.getPropertiesValue("persist.service.homepage.pkg", function(data) {
                    var val = data.propertiesValue;
                    if ("com.tianci.movieplatform" == val) {
                        startActionReplace = "coocaa.intent.action.HOME.Translucent";
                    } else {
                        startActionReplace = "coocaa.intent.movie.home";
                    }
                });
            }
            coocaaosapi.getIpInfo(function(msg) {
                userIp = msg.ip;
            }, function() {})
            console.log("deviceinfo==============" + JSON.stringify(deviceInfo))
            macAddress = message.mac;
            TVmodel = message.model;
            TVchip = message.chip;
            activityId = message.activeid;
            if (message.emmcid == "" || message.emmcid == null) {
                emmcId = "123456";
                  } else {
                emmcId = message.emmcid;
            }
            var a = { MAC: macAddress, cChip: TVchip, cModel: TVmodel, cEmmcCID: emmcId, cUDID: activityId, cSize: message.panel, cChannel: "coocaa" };
            console.log("data=====" + JSON.stringify(a));
            var startTime = new Date().getTime();
            $.ajax({
                type: "post",
                async: true,
                url: adressIp + "/light/active/tv/source",
                data: { cNickName: nick_name, MAC: macAddress, cChip: TVchip, cModel: TVmodel, cEmmcCID: emmcId, cUDID: activityId, cSize: message.panel, cChannel: "coocaa", aSdk: message.androidsdk, cTcVersion: message.version.replace(/\.*/g, ""), cBrand: message.brand },
                dataType: "json",
                // timeout: 20000,
                success: function(data) {
                    _czc.push(['_trackEvent', '418活动', "我的奖品信息返回时长", '',(new Date().getTime()-startTime), '' ]);
                    console.log("电视源返回状态：" + JSON.stringify(data));
                    if (data.code == 0) {
                        movieSource = data.data.source;
                        if (movieSource == "tencent") {
                            needQQ = true;
                        }else{}
                    }
                    hasLogin(needQQ, true, true);
                },
                error: function(error) {
                    needQQ = true;
                    hasLogin(needQQ, true, true);
                    console.log("-----------访问失败---------" + JSON.stringify(error));
                }
            });
        }, function(error) { console.log("get deviceinfo error") })
    },
    triggleButton: function() {
        cordova.require("coocaaosapi");
        listenUserChange();
        listenPlayerStatus();
        getLocationInfo();
    }
};


app.initialize();
//监听播放器
function listenPlayerStatus() {
    console.log("--------------->commonListen==");
    coocaaosapi.addCommonListener(function(message) {
        console.log("--------------->commonListen==" + JSON.stringify(message));
        if(message.web_player_event == "on_start") {
            console.log("on_start 开始播放");
            if(_bPlayFormalAdsVideo == true) { //正式广告，提交数据采集
                sentInnerAdshow(ADMsg1,"","","","",actionId,_adsTaskId.toString(), "true");
            }
        }
        if(message.web_player_event == "on_complete") {
            console.log("广告播放完成----_adsTaskId:"+_adsTaskId);
            if(_bPlayFormalAdsVideo == true) {//第三方监测:播放完成
                sentThirdAdshow("videoEnd",ADMsg1);
                _bPlayFormalAdsVideo = false;//reset
            }
            //加机会
            if(!hasfinishvideo){
                addChance("0",_adsTaskId);
            }
            //数据复位
            ADMsg = null;
            _adsTaskId = undefined;
        }
        if(message.web_player_event == "on_error") {
            console.log("on_error 播放失败");
            //正式广告播放失败，清除flag，播备用视频
            if(_bPlayFormalAdsVideo == true) {
                _bPlayFormalAdsVideo = false;
                sentInnerAdshow(ADMsg1,"","","","",actionId.toString(),_adsTaskId.toString(), "false");
//					playAdsBackupVideo();
            }
            showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/playerror.png",4000);
        }
        if(message.web_player_event == "on_interrupt") {
            console.log("on_interrupt 播放中断");
            //清除flag
            if(_bPlayFormalAdsVideo == true) {
                _bPlayFormalAdsVideo = false;
            }
        }
    });
}
//获取省市
function getLocationInfo() {
    coocaaosapi.getDeviceLocation(function(message) {
        console.log("location " + message.location);
        _province = message.location.split(",")[0];
        _city = message.location.split(",")[1];
        console.log(_province + "--" + _city);
    }, function(error) {
        console.log(error);
    });
}

//监听账户变化
function listenUserChange() {
    coocaaosapi.addUserChanggedListener(function(message) {
        console.log("监听到账户发生变化");
        changeLoginFlag = true;
        hasLogin(needQQ, false, false);
    });
    if(document.getElementById("allowancePage").style.display=="block"){
    	console.log("津贴页面账户发生变化，默认登录");
    	$("#loginbox").css("display","none");
		$("#notLoginNum").css("display","none");
		$("#LoginedNum").css("display","block");
    	map = new coocaakeymap($(".coocaabtn2"), $(".everyAllowanceLi:eq(0)"), "btnFocus", function() {}, function(val) {}, function(obj) {});
    }
}

function startAndSendLog() {
    startLoginFlag = true;
    startLogin(needQQ);
    sentLog("okr_web_page_show", '{"page_name":"418活动登录弹窗","activity_name":"418活动"}');
    _czc.push(['_trackEvent', '418活动', '418活动登录弹窗', '曝光', '', '']);
}

//保留小数
function toDecimal(x) {
    var val = Number(x);
    if(!isNaN(parseFloat(val))) {
        val = val.toFixed(2);//把 Number 四舍五入为指定小数位数的数字。
    }
    val = Number(val);
    return  val;
}

function getRedPacketsQrcode(activityId, rememberId, userKeyId, id, width, height) {
    console.log(rememberId + "--" + userKeyId + "--" + id);
    var ajaxTimeoutFive = $.ajax({
        type: "GET",
        async: true,
        timeout: 7000,
        dataType: 'jsonp',
        jsonp: "callback",
        url: adressIp + "/v3/lottery/verify/wechat/qrCode",
        data: {
            "activeId": activityId,
            "MAC": macAddress,
            "cChip": TVchip,
            "cModel": TVmodel,
            "cEmmcCID": emmcId,
            "cUDID": activityId,
            "accessToken": access_token,
            "cOpenId": cOpenId,
            "cNickName": nick_name,
            "rememberId": rememberId,
            "userKeyId": userKeyId,
            "luckyDrawCode": "2019418act",
            "channel": "coocaa",
            "type": 26
        },
        success: function(data) {
            console.log(JSON.stringify(data));
            if (data.code == "200") {
                document.getElementById(id).innerHTML = "";
                var str = data.data;
                var qrcode = new QRCode(document.getElementById(id), {
                    width: width,
                    height: height
                });
                qrcode.makeCode(str);
            }
        },
        error: function() {
            console.log("获取失败");
            document.getElementById(id).innerHTML = "获取失败，请稍后重试";
        },
        complete: function(XMLHttpRequest, status) {
            console.log("lxw -------------complete------------------" + status);
            if (status == 'timeout') {
                ajaxTimeoutFive.abort();
            }
        }
    });
}

//绘制二维码
function drawQrcode(id, url, wh) {
    document.getElementById(id).innerHTML = "";
    var qrcode = new QRCode(document.getElementById(id), {
        width: wh,
        height: wh
    });
    qrcode.makeCode(url);
}

function exit() {
    navigator.app.exitApp();
}
function exitAll() {
    navigator.app.exitAll();
}
var appDown = {
    //移除监听
    removeApklisten: function() {
        coocaaosapi.removeAppTaskListener(function(message) {});
    },
    //监听下载状态
    listenApp: function() {
        coocaaosapi.addAppTaskListener(function(message) {
            console.log("msg.status ==" + message.status + "======url======" + message.url + "=========num=====" + showprogress);
            if (message.status == "ON_DOWNLOADING") {
                if (showprogress != message.progress) {
                    showprogress = message.progress;
                }
            } else if (message.status == "ON_COMPLETE") {
                waitApkInstallFunc = setTimeout('appDown.downFail()', 120000);
            } else if (message.status == "ON_STOPPED") {
                appDown.downFail()
            } else if (message.status == "ON_REMOVED" && message.url == "https://apk-sky-fs.skysrt.com/uploads/20181030/20181030114924347482.apk") {
                clearTimeout(waitApkInstallFunc);
                var a = '{ "pkgList": ["com.coocaa.ie"] }'
                coocaaosapi.getAppInfo(a, function(message) {
                    console.log("getAppInfo====" + message);
                    var b = "com.coocaa.ie";
                    gameVersion = JSON.parse(message)[b].versionCode;
                }, function(error) {
                    console.log("getAppInfo----error" + JSON.stringify(error))
                });
                appDown.removeApklisten();
            }
        });
    },

    //下载安装失败
    downFail: function() {
        downToast = "游戏加载失败，正在重试...";
        downGameFalse = true;
        clearTimeout(waitApkInstallFunc);
        appDown.removeApklisten();
    },

    //下载安装apk
    createDownloadTask: function(apkurl, md5, title, pkgname, appid, iconurl) {
        coocaaosapi.createDownloadTask(
            apkurl, md5, title, pkgname, appid, iconurl,
            function(message) {
                downToast = "游戏正在努力加载中~请在加载完毕后再次点击进入";
            },
            function(error) {
                console.log(error);
                console.log("调用失败");
            }
        )
    },
}
function showSpeak() {
    var speakArry = [];
    var speakStatus = [speak1,speak2,speak3,speak4,speak5,speak6,speak7,speak8];
    var speakStr = [str1,str2,str3,str4,str5,str6,str7,str8];
    for(var i=0;i<8;i++){
        if(speakStatus[i]){
            speakArry.push(speakStr[i]);
            speakStatus[i] = false;
        }
    }
    console.log("显示数组====="+speakArry);
    var intervalNum = 0;
    var speakInter = setInterval(aaa,5000);
    aaa();
    function aaa() {
        if(intervalNum == speakArry.length){
            setTimeout(function(){
                $("#map"+nowPosition).html("");
                clearInterval(speakInter);
            },5000);

        }else{
            $("#map"+nowPosition).html("<div class='foxspeak'><div>"+speakArry[intervalNum]+"</div></div>");
            setTimeout(function(){
                $("#map"+nowPosition).html("");
            },4900)
            intervalNum++;
        }
    }
}
function mergeShow(dialog) {
    $("#blackBg").show();
    console.log("展示合成弹窗");
    $("#compound").show();
    setTimeout(hecheng, 1000)

    function hecheng() {
        $(".fbox").css({ "top": "276px", "left": "576px", "opacity": "0" })
    }
    setTimeout(showCenter, 2000);

    function showCenter() {
        $("#b418").show();
        $("#b418").css({ "top": "100px", "left": "379px", "opacity": "1" })
    }
    setTimeout(function(){showFinalWindow(dialog)}, 3500);
}
function showFinalWindow(dialog) {
    if (ADMsg5 != null && ADMsg5.schedules != undefined && ADMsg5.schedules[0] != undefined) {
        sentInnerAdshow(ADMsg5, "G0006", "1", "1", "1", "", "","");
        sentThirdAdshow("img", ADMsg5);
    }
    removeBackButton = false;
    $("#b418").hide();
    if(dialog == "needshowdialog1"){
        sentLog("okr_web_page_show", '{"page_name":"活动弹窗","activity_name":"418活动","page_type":"418数字卡被动合成弹窗的曝光"}');
        _czc.push(['_trackEvent', '418活动', "418数字卡被动合成弹窗的曝光", '曝光', '', '']);
        $(".midqrcode").hide();
        $(".qrcodetitle").hide();
        $(".midcard").css("left","576px");
        $("#compoundWindow").show();
        $("#compoundWindow").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/jichengkapian1.png)");
        $(".midcard").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/card418.png)");
        $(".topword").html("418周年狂欢正在进行中，送您一张周年卡片");
        $(".bottomword1").html("当前已拥有<span>"+cardsNum+"</span>套418周年卡片");
        $(".bottom2").html("快去参与“扭一扭”0元赢电视！");
        map = new coocaakeymap($(".compoundbtn"), $("#compoundbtn1"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        $("#compoundbtn1").trigger("itemFocus");
    }else if(dialog == "needshowdialog3"){
        sentLog("okr_web_page_show", '{"page_name":"活动弹窗","activity_name":"418活动","page_type":"418数字卡主动合成弹窗的曝光"}');
        _czc.push(['_trackEvent', '418活动', "418数字卡主动合成弹窗的曝光", '曝光', '', '']);
        if(needQQ){
            $(".midqrcode").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/tencentqrcode.png)");
        }else{
            $(".midqrcode").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/yinheqrcode.png)");
        }
        $("#compoundbtn2").hide();
        $("#compoundbtn1").css("left","563px");
        $("#compoundWindow").show();
        $("#compoundWindow").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/jichengkapian1.png)");
        $(".midcard").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/card418.png)");
        $(".topword").css("top","60px");
        $(".topword").html("成功解锁第2阶段抽奖资格");
        $(".bottomword1").html("当前已拥有<span>"+cardsNum+"</span>套418周年卡片");
        $(".bottom2").html("4月18日邀你“扭一扭”赢创维新品电视！");
        map = new coocaakeymap($(".compoundbtn"), $("#compoundbtn1"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        $("#compoundbtn1").trigger("itemFocus");
    }else if(dialog == "needshowdialog4"){
        sentLog("okr_web_page_show", '{"page_name":"活动弹窗","activity_name":"418活动","page_type":"418数字卡主动合成弹窗的曝光"}');
        _czc.push(['_trackEvent', '418活动', "418数字卡主动合成弹窗的曝光", '曝光', '', '']);
        $(".midqrcode").hide();
        $(".qrcodetitle").hide();
        $(".midcard").css("left","576px");
        $("#compoundWindow").show();
        $("#compoundWindow").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/jichengkapian1.png)");
        $(".midcard").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/card418.png)");
        $(".topword").css("top","60px");
        $(".topword").html("获得第2阶段抽奖资格<br>有机会0元带走创维新品电视！");
        $(".bottomword1").html("当前已拥有<span>"+cardsNum+"</span>套418周年卡片");
        $(".bottom2").html("快去参与“扭一扭”0元赢电视！");
        map = new coocaakeymap($(".compoundbtn"), $("#compoundbtn1"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        $("#compoundbtn1").trigger("itemFocus");
    }
}
function initMap(setFocus,needShowSpeak) {
    if(loginstatus == "true"){
        selectMyAllowanceNum();
    }else{
        getMyAwards(3);
    }

    initBtn();
    console.log("--------" + needRememberFocus+"========="+rememberBtn);
    var setFocus = setFocus;
    if (needRememberFocus) {
        needRememberFocus = false;
        setFocus = rememberBtn;
    }
    rememberSetFocus = setFocus;
    console.log("--------" + setFocus);
    map = new coocaakeymap($("#deviceready"), null, "btnFocustest", function() {}, function(val) {}, function(obj) {});

    setTimeout(function(){
        console.log("---------"+needShowSpeak);
        if (needshowdialog1) {
            removeBackButton = true;
            needshowdialog1 = false;
            map = new coocaakeymap($("#compound"), $("#compound"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            mergeShow("needshowdialog1");
        }
        else if (needshowdialog2) {
            needshowdialog2 = false;
            $("#blackBg").show();
            $(".midqrcode").hide();
            $(".qrcodetitle").hide();
            $("#compoundbtn2").hide();
            $("#compoundbtn1").css("left","563px");
            $(".midcard").css("left","576px");
            $("#compoundWindow").show();
            if (ADMsg5 != null && ADMsg5.schedules != undefined && ADMsg5.schedules[0] != undefined) {
                sentInnerAdshow(ADMsg5, "G0006", "1", "1", "1", "", "","");
                sentThirdAdshow("img", ADMsg5);
            }
            $("#compoundWindow").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/zengsongkapian1.png)");
            if(chipKey == "lc4"){
                $(".midcard").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/card4.png)");
            }else if(chipKey == "lc1"){
                $(".midcard").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/card1.png)");
            }else{
                $(".midcard").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/card8.png)");
            }
            $(".topword").html("418周年狂欢正在进行中，送您一张周年卡片");
            $(".bottomword1").html("集齐一套418卡片有机会0元赢创维电视");
            $(".bottom2").html("快去掷骰子赢周年卡片吧！");
            map = new coocaakeymap($(".compoundbtn"), $("#compoundbtn1"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            $("#compoundbtn1").trigger("itemFocus");
        }
        else if (needshowdialog3) {
            removeBackButton = true;
            needshowdialog3 = false;
            map = new coocaakeymap($("#compound"), $("#compound"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            mergeShow("needshowdialog3");
        }
        else if (needshowdialog4) {
            removeBackButton = true;
            needshowdialog4 = false;
            map = new coocaakeymap($("#compound"), $("#compound"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            mergeShow("needshowdialog4");
        }
        else if (needshowdialog5) {
            removeBackButton = true;
            needshowdialog5 = false;
            map = new coocaakeymap($("#compound"), $("#compound"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            mergeShow("needshowdialog5");
        }
        else if (needshowdialog6) {
            removeBackButton = true;
            needshowdialog6 = false;
            map = new coocaakeymap($("#compound"), $("#compound"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            mergeShow("needshowdialog6");
        }
        else if (needshowdialog7) {
            needshowdialog7 = false;
            $("#addChanceWindow").show();
            if (ADMsg5 != null && ADMsg5.schedules != undefined && ADMsg5.schedules[0] != undefined) {
                sentInnerAdshow(ADMsg5, "G0006", "1", "1", "1", "", "","");
                sentThirdAdshow("img", ADMsg5);
            }
            $("#blackBg").show();
            sentLog("okr_web_page_show", '{"page_name":"活动弹窗","activity_name":"418活动","page_type":"增加游戏机会的弹窗"}');
            _czc.push(['_trackEvent', '418活动', "增加游戏机会的弹窗", '曝光', '', '']);
            if(alterType == "jump"){
                $("#addChanceWindow .addchancep1").html("恭喜完成跳转任务");
                sentLog("okr_web_clicked_result", '{"page_name":"跳转浏览任务页面","activity_name":"418活动","browse_result":"浏览成功"}');
                _czc.push(['_trackEvent', '418活动', "跳转浏览任务页面", '浏览成功', '', '']);
            }else if(alterType == "video"){
                $("#addChanceWindow .addchancep1").html("恭喜完成视频任务");
                sentLog("okr_web_clicked_result", '{"page_name":"跳转浏览任务页面","activity_name":"418活动","browse_result":"浏览成功"}');
                _czc.push(['_trackEvent', '418活动', "跳转浏览任务页面", '浏览成功', '', '']);
            }else if(alterType == "buy"){
                sentLog("okr_web_clicked_result", '{"page_name":"付费任务","activity_name":"418活动","pay_result":"支付完成"}');
                _czc.push(['_trackEvent', '418活动', "付费任务", '支付完成', '', '']);
                $("#addChanceWindow .addchancep1").html("恭喜完成付费任务");
            }
            if(alter == "1"){
                $("#addChanceWindow .addchancep3").css("background-image",'url("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/addchance1.png")');
            }else if(alter == "2"){
                $("#addChanceWindow .addchancep3").css("background-image",'url("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/addchance2.png")');
            }else if(alter == "5"){
                $("#addChanceWindow .addchancep3").css("background-image",'url("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/addchance5.png")');
            }
            console.log("-------------弹窗落焦----------")
            map = new coocaakeymap($(".addchancep4"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
            $("#addChanceWindowBtn").unbind("itemClick").bind("itemClick", function() {
                $("#addChanceWindow").hide();
                $("#blackBg").hide();
                // map = new coocaakeymap($(".coocaabtn"), $("#mapBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
                // $("#mapBtn").trigger("itemFocus");
                if($("#gamePanel").offset().left > -600){

                }else{
                    donotSentReplacebtnLog = true;
                    $(".replaceBtn2").trigger("itemFocus");
                }
                initMap("#mapBtn",true);
            })
        }else if(needShowSpeak){
            showSpeak();
            map = new coocaakeymap($(".coocaabtn"), $(setFocus), "btnFocus", function() {}, function(val) {}, function(obj) {});
            $(setFocus).trigger("itemFocus");
        }else{
            map = new coocaakeymap($(".coocaabtn"), $(setFocus), "btnFocus", function() {}, function(val) {}, function(obj) {});
            $(setFocus).trigger("itemFocus");
        }
    },600)
}
function initBtn() {
    $(".replaceBtn1").unbind("itemFocus").bind("itemFocus", function() {
        $(".rightBtn img").attr("src","");
        if (ADMsg3 != null && ADMsg3.schedules != undefined && ADMsg3.schedules[0] != undefined) {
            sentInnerAdshow(ADMsg3, "G0006", "3", "1", "1", "", "","");
            sentThirdAdshow("img", ADMsg3);
        }
        $("#gameDraw").show();
        $("#gamePanel").css("transform", "translate3D(-1280px, 0, 0)");
        setTimeout(function (){
            map = new coocaakeymap($(".coocaabtn"), $("#drawBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            $("#drawBtn").trigger("itemFocus");
        },200)
        var pagename = "";
        var page_type = "";
            pagename = "扭蛋机活动";
            if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
        sentLog("okr_web_page_show", '{"page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
        _czc.push(['_trackEvent', '418活动', pagename, '曝光', '', '']);
        var pagename = "";
        var page_type = "";
        pagename = "大富翁活动";
        if(gameStatus == "3"){page_type="大富翁已结束"}else{page_type="大富翁已开始"}
        if(!donotSentReplacebtnLog){
            sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"","button_state":"","button_name":"右键切换活动","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', "右键切换活动", "", '', '']);
        }
        else{
            donotSentReplacebtnLog = false;
        }
    })
    $(".replaceBtn2").unbind("itemFocus").bind("itemFocus", function() {
        $(".rightBtn img").attr("src","http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/rightBtn.gif");
        if (ADMsg2 != null && ADMsg2.schedules != undefined && ADMsg2.schedules[0] != undefined) {
            sentInnerAdshow(ADMsg2, "G0006", "2", "1", "1", "", "","");
            sentThirdAdshow("img", ADMsg2);
        }
        if (ADMsg4 != null && ADMsg4.schedules != undefined && ADMsg4.schedules[0] != undefined) {
            sentInnerAdshow(ADMsg4, "G0006", "2", "2", "1", "", "","");
            sentThirdAdshow("img", ADMsg4);
        }
        $("#gameMap").show();
        $("#gamePanel").css("transform", "translate3D(0, 0, 0)");
        setTimeout(function (){
            map = new coocaakeymap($(".coocaabtn"), $("#mapBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            $("#mapBtn").trigger("itemFocus");
        },200)
        var pagename = "";
        var page_type = "";
            pagename = "大富翁活动";
            if(gameStatus == "3"){page_type="大富翁已结束"}else{page_type="大富翁已开始"}
        sentLog("okr_web_page_show", '{"page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
        _czc.push(['_trackEvent', '418活动', pagename, '曝光', '', '']);
        var pagename = "";
        var page_type = "";
        pagename = "扭蛋机活动";
        if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
        if(!donotSentReplacebtnLog){
            sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"","button_state":"","button_name":"左键切换活动","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', "左键切换活动", "", '', '']);
        }else{
            donotSentReplacebtnLog = false;
        }
    })
    $(".gameBtn").unbind("itemFocus").bind("itemFocus", function() {
        var a =  $("#gamePanel").offset().left;
        console.log("------------------------------top--"+a);
        if( $("#mainbox").offset().top<0){
            if($("#gamePanel").offset().left < -600){
                if (ADMsg3 != null && ADMsg3.schedules != undefined && ADMsg3.schedules[0] != undefined) {
                    sentInnerAdshow(ADMsg3, "G0006", "3", "1", "1", "", "","");
                    sentThirdAdshow("img", ADMsg3);
                }
            }else{
                if (ADMsg2 != null && ADMsg2.schedules != undefined && ADMsg2.schedules[0] != undefined) {
                    sentInnerAdshow(ADMsg2, "G0006", "2", "1", "1", "", "","");
                    sentThirdAdshow("img", ADMsg2);
                }
                if (ADMsg4 != null && ADMsg4.schedules != undefined && ADMsg4.schedules[0] != undefined) {
                    sentInnerAdshow(ADMsg4, "G0006", "2", "2", "1", "", "","");
                    sentThirdAdshow("img", ADMsg4);
                }
            }
        }
        $("#mainbox").css("transform", "translate3D(0, 0, 0)");
        if($("#gamePanel").offset().left > -600){
            $(".topbtn").attr("downtarget","#mapBtn");
        }else{
            $(".topbtn").attr("downtarget","#drawBtn");
        }
        $("#drawBtnBorder").show();
    })
    $(".gameBtn").unbind("itemBlur").bind("itemBlur", function() {
        $("#drawBtnBorder").hide();
    })
    $("#mapBtn").bind("itemFocus", function() {
        if(gameStatus!=0){
            $("#mapBtn").css({
                "width": "362px",
                "height":"260px",
                "top": "345px",
                "left":"412px",
                "background-image":"url('')",
                "background-image":"url('http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmapbtn.gif')"
            })
        }
    })
    $("#mapBtn").bind("itemBlur", function() {
        if(gameStatus!=0){
            $("#mapBtn").css({
                "width": "251px",
                "height":"86px",
                "top": "435px",
                "left":"464px",
                "background-image":"url('http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/mapbtn.png')"
            })
        }

    })
    $("#compoundbtn1").unbind("itemFocus").bind("itemFocus", function() {
        $("#compoundbtnborder2").hide();
        $("#compoundbtnborder1").show();
    })
    $("#compoundbtn2").unbind("itemFocus").bind("itemFocus", function() {
        $("#compoundbtnborder1").hide();
        $("#compoundbtnborder2").show();
    })
    $(".topbtn").unbind("itemFocus").bind("itemFocus", function() {
        $("#mainbox").css("transform", "translate3D(0, 0, 0)");
        if($("#gamePanel").offset().left > -600){
            $(".topbtn").attr("downtarget","#mapBtn");
        }else{
            $(".topbtn").attr("downtarget","#drawBtn");
        }
    })
    $(".mission").unbind("itemFocus").bind("itemFocus", function() {
        $("#mainbox").css("transform", "translate3D(0, -400px, 0)");
        // if(gameStatus != 3){
            if($("#gamePanel").offset().left >-600){
                $(".mission").attr("uptarget","#mapBtn");
            }else{
                $(".mission").attr("uptarget","#drawBtn");
            }
        // }
    })
    $(".operationmap").unbind("itemFocus").bind("itemFocus", function() {
        var blockNum = $(".operationmap").index($(this));
        if(blockNum <　3){
            $("#mainbox").css("transform", "translate3D(0, -600px, 0)");
        }else{
            // var translate = Math.floor((blockNum+1)/4)*(-200)+(-400) > -720?Math.floor((blockNum+1)/4)*(-200)+(-400):-720;
            var translate = Math.floor((blockNum+1)/4)*(-270)+(-600) ;
            $("#mainbox").css("transform", "translate3D(0, "+translate+"px, 0)");
        }
    })

    $(".operationblock").unbind("itemClick").bind("itemClick", function() {
        remembernum = $(".operationblock").index($(this));
        // console.log("---------------------------action============"+$(this).attr("action"));
        getParamAndStart(this,false);
    })
    $(".operationmore").unbind("itemClick").bind("itemClick", function() {
        var btnname = "付费任务";
        var pagename = "";
        var page_type = "";
        if($("#gamePanel").offset().left < -600){
            pagename = "扭蛋机活动";
            if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
        }else{
            pagename = "大富翁活动";
            if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
        }
        var button_state="已完成";
        sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"更多商品","button_state":"'+button_state+'","button_name":"'+btnname+'","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
        _czc.push(['_trackEvent', '418活动', btnname+"点击", button_state, '', '']);
        rememberAllowancebtnFlag = "2";
        donotSentAllowanceBtnLog = true;
        $("#allowanceBtn").trigger("itemClick");
    })
    $("#question").unbind("itemClick").bind("itemClick", function(){
        var _this = this;
        if(donotSentMissionBtnLog){
            donotSentMissionBtnLog = false;
        }else{
            var pagename = "";
            var page_type = "";
            if($("#gamePanel").offset().left < -600){
                pagename = "扭蛋机活动";
                if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
            }else{
                pagename = "大富翁活动";
                if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
            }
            var button_state = "";
            if($(_this).attr("remainingNumber")==0){
                button_state="已完成";
            }else{button_state="未完成"}
            sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"'+$(_this).attr("taskName")+'","button_state":"'+button_state+'","button_name":"答题任务","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', "答题任务点击", button_state, '', '']);
        }

        diceCanClick = true;
        if($(_this).attr("remainingNumber")==0){
            showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/yijinghuidaguo.png",4000);
            return;
        }else{
            showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/dati.png",4000);
            setTimeout(startanswer,4000)
        }
        function startanswer() {
            sentLog("okr_web_page_show", '{"page_name":"问答任务页面","activity_name":"418活动"}');
            _czc.push(['_trackEvent', '418活动', "问答任务页面", '曝光', '', '']);
            var date = startDayNum>9?9:startDayNum;
            var questionList=null;
            if(needQQ){
                questionList = _interlucationsArrayTencent;
            }else{
                questionList = _interlucationsArrayYinhe;
            }
            if (ADMsg5 != null && ADMsg5.schedules != undefined && ADMsg5.schedules[0] != undefined) {
                sentInnerAdshow(ADMsg5, "G0006", "1", "1", "1", "", "","");
                sentThirdAdshow("img", ADMsg5);
            }
            $("#questionbox").show();
            $("#blackBg").show();
            $(".answerbtn").attr("right","false");
            $("#ques div").html(questionList[date-1].question);
            $("#answer1").html(questionList[date-1].answerA);
            $("#answer2").html(questionList[date-1].answerB);
            if(questionList[date-1].right == "A"){
                $("#answer1").attr("right","true");
            }else{
                $("#answer2").attr("right","true");
            }
            $("#answer3").attr("right","other");
            $("#answer3").attr("action",JSON.stringify(questionList[date-1].jump));
            $("#answer5").attr("action",JSON.stringify(questionList[date-1].jump));
            map = new coocaakeymap($(".answerbtn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
            $(".answerbtn").unbind("itemClick").bind("itemClick", function(){
                var thisRight = $(this).attr("right");
                $("#clickOkSure").hide();
                if(thisRight == "true"){
                    sentLog("okr_web_clicked_result", '{"page_name":"问答任务页面","activity_name":"418活动","question_result":"回答成功"}');
                    _czc.push(['_trackEvent', '418活动', "问答任务页面", '回答成功', '', '']);
                    console.log("true");
                    $(".answerbtn").hide();
                    $("#ques").hide();
                    $("#rightanswer").show();
                    $("#answer4").show();
                    $("#answer6").show();
                    addChance("1",$(_this).attr("taskId"),"1");
                    map = new coocaakeymap($(".answerResultbtn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
                }else if(thisRight == "false"){
                    sentLog("okr_web_clicked_result", '{"page_name":"问答任务页面","activity_name":"418活动","question_result":"回答错误"}');
                    _czc.push(['_trackEvent', '418活动', "问答任务页面", '回答错误', '', '']);
                    console.log("false");
                    $(".answerbtn").hide();
                    $("#ques").hide();
                    $("#erroranswer").show();
                    $("#answer4").show();
                    $("#answer5").show();
                    addChance("1",$(_this).attr("taskId"),"0");
                    map = new coocaakeymap($(".answerResultbtn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
                }else{
                    sentLog("okr_web_clicked_result", '{"page_name":"问答任务页面","activity_name":"418活动","question_result":"偷看答案"}');
                    _czc.push(['_trackEvent', '418活动', "问答任务页面", '偷看答案', '', '']);
                    console.log("other");
                    donotSentStartParamBtnLog = true;
                    getParamAndStart(this,false);
                }
                $("#answer4").unbind("itemClick").bind("itemClick", function(){
                    $("#clickOkSure").show();
                    $("#questionbox").hide();
                    $(".answerbtn").show();
                    $("#ques").show();
                    $("#rightanswer").hide();
                    $("#erroranswer").hide();
                    $("#answer4").hide();
                    $("#answer5").hide();
                    $("#answer6").hide();
                    $("#blackBg").hide();
                    var hasfinishNum = 0;
                    for(var i=0;i<4;i++){
                        if($(".mission:eq("+i+")").attr("remainingNumber")>0){
                            if(thisRight == "true"){
                                needRememberFocus=true;
                                rememberBtn = ".mission:eq("+i+")";
                                showPage(false,false);
                                break;
                            }else{
                                map = new coocaakeymap($(".coocaabtn"), $(".mission:eq("+i+")"), "btnFocus", function() {}, function(val) {}, function(obj) {});
                                break;
                            }
                        }else{hasfinishNum++}
                    }
                    if(hasfinishNum == 4){
                        if(thisRight == "true"){
                            needRememberFocus=true;
                            rememberBtn = "#allowanceGet";
                            showPage(false,false);
                        }else{
                            $("#allowanceGet").trigger("itemFocus");
                            map = new coocaakeymap($(".coocaabtn"), $("#allowanceGet"), "btnFocus", function() {}, function(val) {}, function(obj) {});
                        }
                    }
                })
                $("#answer5").unbind("itemClick").bind("itemClick", function(){
                    donotSentStartParamBtnLog = true;
                    getParamAndStart(this,false);
                })
                $("#answer6").unbind("itemClick").bind("itemClick", function(){
                    $("#clickOkSure").show();
                    $(".answerbtn").show();
                    $("#ques").show();
                    $("#rightanswer").hide();
                    $("#answer4").hide();
                    $("#answer6").hide();
                    $("#questionbox").hide();
                    $("#blackBg").hide();
                    showPage(false,false);
                })
            })
        }
    })

    $(".normaltask").unbind("itemClick").bind("itemClick", function(){
        console.log("-------------"+$(".normaltask").index($(this)))
        var taskId = ($(this).attr("taskId"));
        var _this = this;
        hasfinishvideo = ($(this).attr("remainingNumber"))>0?false:true;
        if($(this).attr("taskType") == "jump"){
            getParamAndStart(this,true)
        }else if($(this).attr("taskType") == "video"){
            if(donotSentMissionBtnLog){
                donotSentMissionBtnLog = false;
            }else{
                var _this = this;
                var pagename = "";
                var page_type = "";
                if($("#gamePanel").offset().left < -600){
                    pagename = "扭蛋机活动";
                    if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
                }else{
                    pagename = "大富翁活动";
                    if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
                }
                var button_state = "";
                if($(_this).attr("remainingNumber")==0){
                    button_state="已完成";
                }else{button_state="未完成"}
                sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"'+$(_this).attr("taskName")+'","button_state":"'+button_state+'","button_name":"浏览任务","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
                _czc.push(['_trackEvent', '418活动', "浏览任务点击", button_state, '', '']);
            }
            if(hasfinishvideo){
                showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/bujiajihui.png",4000);
            }else{
                // needFresh = true;
                needRememberFocus = true;
                rememberBtn = ".mission:eq("+$('.mission').index($(_this))+")";
                showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/jijiangtiaozhuan.png",4000);
            }

            setTimeout(function () {
                diceCanClick = true;
                // selectAd(type,boxId, appid, game_id, game_scene, game_panel, game_position, activity_id, task_id, backUrl,adPosition);
                selectAd("video",null,"CCADTV10015","","","","",actionId,$(_this).attr("taskId"),$(_this).attr("url"),"1");
            },4000);
        }else{}
    })

    $("#mapBtn").unbind("itemClick").bind("itemClick", function(){
        if(gameStatus == 0){return;}
    	curDrawBtnName = "mapBtn";
        if(diceCanClick){
            var pagename = "";
            var page_type = "";
            var button_state = "";
            if(lotteryNum > 0){
                button_state="有掷骰子机会";
            }else{button_state="无掷骰子机会"}
            pagename = "大富翁活动";
            if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
            sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"","button_state":"'+button_state+'","button_name":"【掷骰子】按钮","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', "【掷骰子】按钮", button_state, '', '']);
            if(gameStatus == 3){return};
            diceCanClick = false;
            if(lotteryNum > 0){
                startMapFunc()
            }else{
                var hasfinishNum = 0;
                for(var i=0;i<4;i++){
                    if($(".mission:eq("+i+")").attr("remainingNumber")>0){
                        donotSentMissionBtnLog = true;
                        $(".mission:eq("+i+")").trigger("itemClick");
                        break;
                        //数据采集时需要排除
                    }else{hasfinishNum++}
                }
                if(hasfinishNum == 4){
                    diceCanClick = true;
                    $("#allowanceGet").trigger("itemFocus");
                    map = new coocaakeymap($(".coocaabtn"), $("#allowanceGet"), "btnFocus", function() {}, function(val) {}, function(obj) {});
                }
            }
        }else{return}
    })

    $("#allowanceGet").unbind("itemClick").bind("itemClick", function(){
        var allowance_price = "0";
        var nowHours = new Date().getHours();
        if((nowHours>=0&&nowHours<=12)||(nowHours>=22)){
            allowance_price = "50";
        }else{
            allowance_price = "100";
        }
        if(nowHours==11||nowHours==12||nowHours==19||nowHours==20||nowHours==21){
            //调用领取接口
            if(loginstatus=="true"){
                getAllowance();
            }else{
                // startLogin(needQQ);
                startAndSendLog()
            }
        }else{
            var button_state = "";

            if(nowHours<11 || (nowHours>12&&nowHours<19)){
                button_state = "没到领取时间";
                //稍后再来
                showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/jintieweidaoshijian.png",3000);
            }else {
                if(startDayNum == 9){
                    //结束
                    button_state = "津贴已派发完了";
                    showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/jintieyijinglingwan.png",3000);
                }else{
                    //稍后再来
                    button_state = "没到领取时间";
                    showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/jintieweidaoshijian.png",3000);
                }
            }

            var btnname = "津贴领取入口 ";
            var pagename = "";
            var page_type = "";
            if($("#gamePanel").offset().left < -600){
                pagename = "扭蛋机活动";
                if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋已结束"}
            }else{
                pagename = "大富翁活动";
                if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
            }
            sentLog("okr_web_button_click", '{"allowance_price":"'+allowance_price+'","task_name":"","button_state":"'+button_state+'","button_name":"'+btnname+'","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', "津贴点击"+allowance_price, button_state, '', '']);
        }
    })
    $("#compoundbtn1").unbind("itemClick").bind("itemClick", function() {
        $("#compoundWindow").hide();
        $("#blackBg").hide();
        if($("#gamePanel").offset().left > -600){

        }else{
            donotSentReplacebtnLog = true;
            $(".replaceBtn2").trigger("itemFocus");
        }
        initMap("#mapBtn",true);
    });
    $("#compoundbtn2").unbind("itemClick").bind("itemClick", function() {
        $("#compoundWindow").hide();
        $("#blackBg").hide();
        needshowdialog7 = false;
        if($("#gamePanel").offset().left < -600){

        }else{
            donotSentReplacebtnLog = true;
            $(".replaceBtn1").trigger("itemFocus");
        }
        initMap("#drawBtn",true);

    });
    $("#ruleBtn").unbind("itemClick").bind("itemClick", function() {
        var pagename = "";
        var page_type = "";
        if($("#gamePanel").offset().left < -600){
            pagename = "扭蛋机活动";
            if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
        }else{
            pagename = "大富翁活动";
            if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
        }
        sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"","button_state":"","button_name":"活动细则","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
        _czc.push(['_trackEvent', '418活动', "活动细则按钮", "点击", '', '']);
        $("#mainbox").hide();
        $("#rulePage").show();
        sentLog("okr_web_page_show", '{"page_name":"活动细则页面","activity_name":"418活动"}');
        _czc.push(['_trackEvent', '418活动', '活动细则页面', '', '', '']);
        map = new coocaakeymap($("#ruleInner"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
    })
    $(".endbtn").unbind("itemFocus").bind("itemFocus", function() {
        if($(".endbtn").index($(this)) == 0){$(".endbox").css("margin-top","0")}else{$(".endbox").css("margin-top","-720px")};
    })
    $(".endbtn").unbind("itemClick").bind("itemClick", function() {
        donotSentAwardBtnLog = true;
        rememberEndBtn = $(".endbtn").index($(this));
        $("#endGamePage").css("display", "none");
        $("#myAwardPage").css("display", "block");
        sentLog("okr_web_page_show", '{"page_name":"我的奖励页面","activity_name":"418活动"}');
		_czc.push(['_trackEvent', '418活动', '我的奖励页面', '曝光', '', '']);
        _curHomeBtn = "";
        getMyAwards(2);
    })

	//	林心旺
	//---------------------------------
	$("#drawBtn").bind("itemFocus", function() {
		console.log("获得焦点");
		$("#aroundGif").attr("src","http://sky.fs.skysrt.com/statics/webvip/webapp/418/images/around2.gif");
		$("#drawBtnBorder").css("display","block");
	});
	$("#drawBtn").bind("itemBlur", function() {
		$("#drawBtnBorder").css("display","none");
	});
	$("#drawBtn").unbind("itemClick").bind("itemClick", function() {
		console.log("开始抽奖");
		curDrawBtnName = "drawBtn";
		if(!capsuleIsStart){
            var pagename = "";
            var page_type = "";
            var button_state = "";
            if(cardsNum > 0){
                button_state="有抽奖机会";
            }else{button_state="无抽奖机会"}
            pagename = "扭蛋机活动";
            if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
            sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"","button_state":"'+button_state+'","button_name":"【扭一扭】按钮","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', "【扭一扭】按钮", button_state, '', '']);
            showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/huodongweikaishi.png",3000);
            return;
        }
		var nowTime = new Date().getTime();
        var clickTime = $("#drawBtn").attr("ctime");
        if(clickTime != 'undefined' && (nowTime - clickTime < 3000)) {
            console.log('操作过于频繁，稍后再试');
            return false;
        } else {
	 		var pagename = "";
        	var page_type = "";
        	var button_state = "";
        	if(cardsNum > 0){
            	button_state="有抽奖机会";
        	}else{button_state="无抽奖机会"}
        	pagename = "扭蛋机活动";
        	if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
        	sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"","button_state":"'+button_state+'","button_name":"【扭一扭】按钮","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
        	_czc.push(['_trackEvent', '418活动', "【扭一扭】按钮", button_state, '', '']);
        	$("#drawBtn").attr("ctime", nowTime);
			if(cardsNum > 0) {
				$("#aroundpng").css("display","block");
				$("#aroundGif").css("display","none");
				$("#aroundpng").attr("class","around901");
				setTimeout(function(){
					startEggFunc();
					$("#aroundGif").css("display","block");
					$("#aroundpng").css("display","none");
					$("#aroundpng").attr("class","around90");
				},1000);
			} else {
				for(i = 1; i <= 11; i++) {
					$(".qiu_" + i).removeClass("wieyi_" + i);
				}
				console.log("没有机会");
				showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/nochance.png",3000);
			}
		}
	});
	$("#allowanceBtn").unbind("itemClick").bind("itemClick", function() {
        needRememberFocus = true;
        if(rememberAllowancebtnFlag == "2"){
            rememberBtn = ".operationmore";
            rememberAllowancebtnFlag = "0";
        }else if(rememberAllowancebtnFlag == "3"){
            rememberBtn = "#allowanceGet";
            rememberAllowancebtnFlag = "0";
        }else{
            rememberBtn = "#allowanceBtn";
        }
		allowancePageForm = "mainbox";
	    if(donotSentAllowanceBtnLog ){
            donotSentAllowanceBtnLog = false;
        }else{
            var pagename = "";
            var page_type = "";
            if($("#gamePanel").offset().left < -600){
                pagename = "扭蛋机活动";
                if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
            }else{
                pagename = "大富翁活动";
                if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
            }
            var button_state="";
            if(loginstatus=="true"){
                button_state = "可使用津贴";
            }else{
                button_state = "待领取津贴";
            }
            sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"","button_state":"'+button_state+'","button_name":"可用津贴","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', "可用津贴按钮"+button_state, "点击", '', '']);
        }
        $("#mainbox").css("display", "none");
        $("#allowancePage").css("display", "block");
        getAllowanceInfo(1);//1表示需要初始化焦点
        sentLog("okr_web_page_show", '{"page_name":"我的津贴页面","activity_name":"418活动"}');
		_czc.push(['_trackEvent', '418活动', '我的津贴页面', '曝光', '', '']);
        if(loginstatus=="true"){
            getAllNotGetAllowance();
        }
	});
	$("#loginbox").unbind("itemClick").bind("itemClick", function() {
		console.log("点击了登录按钮");
		startAndSendLog();
	});
	$("#myAwardBtn").unbind("itemClick").bind("itemClick", function() {
        needRememberFocus = true;
	    rememberBtn = "#myAwardBtn";
	    if(donotSentAwardBtnLog){
            donotSentAwardBtnLog = false;
        }else{
            var pagename = "";
            var page_type = "";
            if($("#gamePanel").offset().left < -600){
                pagename = "扭蛋机活动";
                if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
            }else{
                pagename = "大富翁活动";
                if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
            }
            sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"","button_state":"","button_name":"我的奖励","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', "我的奖励按钮", "点击", '', '']);
        }
		$("#mainbox").css("display", "none");
        $("#myAwardPage").css("display", "block");
        sentLog("okr_web_page_show", '{"page_name":"我的奖励页面","activity_name":"418活动"}');
		_czc.push(['_trackEvent', '418活动', '我的奖励页面', '曝光', '', '']);
        _curHomeBtn = "";
        getMyAwards(2);
    });
    $("#noAwardBtn").unbind("itemClick").bind("itemClick", function() {
        console.log("点击了去玩游戏");
        needRememberFocus = false;
        $("#myAwardPage").css("display", "none");
        $("#mainbox").css("display", "block");
		if($("#gamePanel").offset().left > -600){

        }else{
            donotSentReplacebtnLog = true;
            $(".replaceBtn2").trigger("itemFocus");
        }
        initMap("#mapBtn",true);
    });
    $("#redHasGetBtn").unbind("itemClick").bind("itemClick", function() {
        if (gameStatus == 3) {
        	console.log("点击了查看中奖名单");
        	showPage(false,false);
        	$("#dialogPage").css("display", "none");
	        $("#redHasGet").css("display", "none");
        } else{
        	console.log("点击了继续参与");
        	$("#mainbox").css("display", "block");
	        $("#dialogPage").css("display", "none");
	        $("#redHasGet").css("display", "none");
	        $("#myAwardPage").css("display", "none");
	        if($("#gamePanel").offset().left < -600){
				map = new coocaakeymap($(".coocaabtn"), $("#drawBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
				$("#drawBtn").trigger("itemFocus");
			}else{
				map = new coocaakeymap($(".coocaabtn"), $("#mapBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
				$("#mapBtn").trigger("itemFocus");
			}
        }
    });
    $("#redQrcode").unbind("itemClick").bind("itemClick", function() {
    	console.log("点击未领取红包二维码");
    	$("#mainbox").css("display", "block");
        $("#dialogPage").css("display", "none");
        $(".secondDialog").css("display", "none");
        $("#redNotGet").css("display", "none");
        //加个判断  奖励页面还是抽奖弹窗
        if (document.getElementById("myAwardPage").style.display == "block") {
        	map = new coocaakeymap($(".coocaa_btn2"), null, "btn-focus", function() {}, function(val) {}, function(obj) {});
        } else{
        	map = new coocaakeymap($(".coocaa_btn"), $("#mapBtn"), "btn-focus", function() {}, function(val) {}, function(obj) {});
        }
    });
    $("#otherInfo3,#hasGotInfo4").unbind("itemClick").bind("itemClick", function() {
    	console.log("点击未领取实物奖的弹窗");
    	$("#mainbox").css("display", "block");
        $("#dialogPage").css("display", "none");
        $("#otherNotGet").css("display", "none");
        $("#otherHasGet").css("display", "none");
        //记录奖励页面的点击按钮的id,在此处赋值
        map = new coocaakeymap($(".coocaa_btn2"), null, "btn-focus", function() {}, function(val) {}, function(obj) {});
    });
    $("#otherBtn1,#otherBtn3").unbind("itemClick").bind("itemClick", function() {
        console.log("点击了继续掷骰子");
        $("#mainbox").css("display", "block");
        $("#dialogPage").css("display", "none");
        $("#getOtherAward1").css("display", "none");
        $("#getOtherAward2").css("display", "none");

    	var _curId = $(this).attr("id");
    	if ($(this).attr("awardType")==6) {
    		if (_curId=="otherBtn1") {
    			showPage(false,false);
    		} else if(_curId=="otherBtn3"){
                map = new coocaakeymap($(".coocaabtn"), document.getElementById(curDrawBtnName), "btnFocus", function() {}, function(val) {}, function(obj) {});
    			selectChipInfo()
    		}
    	}else{
            map = new coocaakeymap($(".coocaabtn"), document.getElementById(curDrawBtnName), "btnFocus", function() {}, function(val) {}, function(obj) {});
        }
    	var curPagename = "";
    	var curBtnName = "";
    	var curAwardName = "";
		var curAwardType = "";
		var curAwardTypeName = "";
		var curGoodsId = "";
		console.log(_curId+"---"+curDrawBtnName);
    	if (_curId=="otherBtn1") {
    		curBtnName = $("#otherBtn1 .btnName").html();
    		curAwardName = $("#otherBtn2").attr("awardName");
    		curAwardType = $("#otherBtn2").attr("awardTypeId");
	    	if(curDrawBtnName == "mapBtn"){
	    		curPagename = "【大富翁中奖】";
	        }else{
	        	curPagename = "【扭蛋机中奖】";
	        }
	        if (curAwardType==2) {
    			curAwardTypeName = "实物";
    		}else if(curAwardType==6){
    			curAwardTypeName = "418卡片";
    		}else if(curAwardType==7){
    			curAwardTypeName = "红包";
    		}else if(curAwardType==13){
    			curGoodsId = $("#otherBtn2").attr("awardGoodsId");
    			curAwardTypeName = "特权-购物";
    		}else if(curAwardType==17){
    			curAwardTypeName = "津贴";
    		}else if(curAwardType==19){
    			curAwardTypeName = "金币";
    		}
    	}else if(_curId=="otherBtn3") {
    		curBtnName = $("#otherBtn3 .btnName").html();
    		curPagename = "【大富翁中奖】";
    		curAwardName = $("#otherBtn4").attr("awardName");
    		curAwardType = $("#otherBtn4").attr("awardTypeId");
    		if (curAwardType==2) {
    			curAwardTypeName = "实物";
    		}else if(curAwardType==6){
    			curAwardTypeName = "418卡片";
    		}else if(curAwardType==7){
    			curAwardTypeName = "红包";
    		}else if(curAwardType==13){
    			curGoodsId = $("#otherBtn2").attr("awardGoodsId");
    			curAwardTypeName = "特权-购物";
    		}else if(curAwardType==17){
    			curAwardTypeName = "津贴";
    		}else if(curAwardType==19){
    			curAwardTypeName = "金币";
    		}
    	}
    	sentLog("okr_web_button_click", '{"page_name":"'+curPagename+'","activity_name":"418活动","button_name":"'+curBtnName+'","award_type":"'+curAwardTypeName+'","goods_id":"'+curGoodsId+'","award_name":"'+curAwardName+'"}');
        _czc.push(['_trackEvent', '418活动', curPagename, curBtnName+"--"+curAwardTypeName, '', '']);
    });
    $("#otherBtn2").unbind("itemClick").bind("itemClick", function() {
        console.log("点击了领取奖励");
        otherBtn2ClickFunc();
        var curPagename = "";
    	var curBtnName = "";
    	var curAwardName = "";
		var curAwardType = "";
		var curAwardTypeName = "";
		var curGoodsId = "";
		curBtnName = $("#otherBtn2 .btnName").html();
		curAwardName = $("#otherBtn2").attr("awardName");
		console.log(curDrawBtnName);
		if(curDrawBtnName == "mapBtn"){
    		curPagename = "【大富翁中奖】";
        }else{
        	curPagename = "【扭蛋机中奖】";
        }
		curAwardType = $("#otherBtn2").attr("awardTypeId");
        if (curAwardType==2) {
			curAwardTypeName = "实物";
		}else if(curAwardType==6){
			curAwardTypeName = "418卡片";
		}else if(curAwardType==7){
			curAwardTypeName = "红包";
		}else if(curAwardType==13){
			curGoodsId = $("#otherBtn2").attr("awardGoodsId");
			curAwardTypeName = "特权-购物";
		}else if(curAwardType==17){
			curAwardTypeName = "津贴";
		}else if(curAwardType==19){
			curAwardTypeName = "金币";
		}
    	sentLog("okr_web_button_click", '{"page_name":"'+curPagename+'","activity_name":"418活动","button_name":"'+curBtnName+'","award_type":"'+curAwardTypeName+'","goods_id":"'+curGoodsId+'","award_name":"'+curAwardName+'"}');
        _czc.push(['_trackEvent', '418活动', "大富翁中奖", curBtnName+"--"+curAwardTypeName, '', '']);
    });
    $("#otherBtn4").unbind("itemClick").bind("itemClick", function() {
        console.log("点击了0元赢电视");
        selectChipInfo();
        $("#dialogPage").css("display", "none");
        $("#getOtherAward1").css("display", "none");
        $("#getOtherAward2").css("display", "none");
        donotSentReplacebtnLog = true;
        $(".replaceBtn1").trigger("itemFocus");
        map = new coocaakeymap($(".coocaabtn"), document.getElementById("drawBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
    	var curBtnName = $("#otherBtn4 .btnName").html();
    	var curAwardName = $("#otherBtn4").attr("awardName");
    	var curAwardType = $("#otherBtn4").attr("awardTypeId");
    	sentLog("okr_web_button_click", '{"page_name":"【大富翁中奖】","activity_name":"418活动","button_name":"'+curBtnName+'","award_type":"'+curAwardType+'","goods_id":" ","award_name":"'+curAwardName+'"}');
        _czc.push(['_trackEvent', '418活动', "大富翁中奖", curBtnName+"--"+curAwardName, '', '']);
    });
    $("#tvBtn1").unbind("itemClick").bind("itemClick", function() {
		console.log("点击了抽中大奖的继续扭一扭");
		selectChipInfo();
		$("#dialogPage").css("display", "none");
		$("#getTvAward").css("display", "none");
		var curGoodsId = "";
		var curAwardType = $("#tvBtn2").attr("awardTypeId");
		var curAwardName = $("#tvBtn2").attr("awardName");
		map = new coocaakeymap($(".coocaabtn"), document.getElementById("drawBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
		sentLog("okr_web_button_click", '{"page_name":"【扭蛋机中奖】","activity_name":"418活动","button_name":"继续扭一扭","award_type":"实物-TV","goods_id":"'+curGoodsId+'","award_name":"'+curAwardName+'"}');
        _czc.push(['_trackEvent', '418活动', "扭蛋机中奖", curBtnName+"--"+curAwardName, '', '']);
	});
	$("#tvBtn2").unbind("itemClick").bind("itemClick", function() {
		console.log("点击了抽中大奖的立即领取");
		var curGoodsId = "";
		var curAwardName = $("#tvBtn2").attr("awardName");
    	sentLog("okr_web_button_click", '{"page_name":"扭蛋机中奖","activity_name":"418活动","button_name":"立即领取","award_type":"实物-TV","goods_id":"'+curGoodsId+'","award_name":"'+curAwardName+'"}');
        _czc.push(['_trackEvent', '418活动', "大富翁中奖", "立即领取--实物-TV", '', '']);
		
		var _kActiveId = $("#tvBtn2").attr("activeId");
	    var _kAwardId = $("#tvBtn2").attr("awardId");
	    var _kRememberId = $("#tvBtn2").attr("rememberId");
	    var _kUserKeyId = $("#tvBtn2").attr("userKeyId");
	    var _kAwardTypeId = $("#tvBtn2").attr("awardTypeId");
	    var _kAwardName = $("#tvBtn2").attr("awardName");
	    var _kAwardTime = $("#tvBtn2").attr("awardTime");
	    var _kAwardUrl = $("#tvBtn2").attr("awardUrl");
		
		if (loginstatus == "false") {
            console.log("领取实物奖励+启登录");
            startAndSendLog();
        } else {
            console.log("领取实物奖励+展示二维码");
            $(".secondDialog").css("display", "none");
            $("#otherNotGet").css("display", "block");
            $("#otherInfo1").html("奖品名称:&nbsp;&nbsp;" + _kAwardName);
            $("#otherInfo2").html("发放时间:&nbsp;&nbsp;" + _kAwardTime);
            map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherInfo3"), "btn-focus", function() {}, function(val) {}, function(obj) {});
            var enstr = enurl + "activeId=" + _kActiveId + "&rememberId=" + _kRememberId + "&userKeyId=" + _kUserKeyId + "&access_token=" + access_token;
            drawQrcode("otherQrcode", enstr, 125);
        }
	});
	//---------------------------------
}

function initBtnAfter(){
	$(".everyAllowanceLi").unbind("itemFocus").bind("itemFocus", function() {
		var _fIndex = $(".everyAllowanceLi").index($(this));
		var _itemWidth = $(".everyAllowanceLi:eq(0)").outerHeight(true) + 15;
		var floorNum = Math.floor(_fIndex/5);
		var myScrollTopValue = _itemWidth * floorNum;
		$("#everyAllowanceBox").stop(true, true).animate({scrollTop: myScrollTopValue}, {duration: 0,easing: "swing"});
	});
	$(".everyAllowanceLi").unbind("itemClick").bind("itemClick", function() {
		var _fIndex = $(".everyAllowanceLi").index($(this));
		if (_fIndex == ($(".everyAllowanceLi").length-1)) {
			coocaaosapi.startHomeCommonList("102930",function(){},function(){});
			sentLog("okr_web_button_click", '{"page_name":"我的津贴页面","activity_name":"418活动","button_name":"浏览更多"}');
	        _czc.push(['_trackEvent', '418活动', "津贴页面津贴的点击", "浏览更多", '', '']);
		} else{
			donotSentStartParamBtnLog = true;
			getParamAndStart(this,false);
			var curBtnName = $(this).attr("taskName");
			console.log(curBtnName);
			sentLog("okr_web_button_click", '{"page_name":"我的津贴页面","activity_name":"418活动","button_name":"'+curBtnName+'"}');
	        _czc.push(['_trackEvent', '418活动', "津贴页面津贴的点击", curBtnName, '', '']);
		}
	});
	
	$(".myAwards").unbind("itemFocus").bind("itemFocus", function() {
        var _index1 = $(".myAwards").index($(this)); //btn是第几个
        var _index2 = $(".awardTabs").index($(this).parent()); //btn所在的盒子是第几个
        var boxHeight = 0;
        var myScrollTopValue = 0;
        if (_index2 == 0) {
            myScrollTopValue = 0;
            var _index3 = $("#allowanceTabs .myAwards").index($(this)); //btn是第几个津贴奖励
            var _curLine = Math.floor(_index3/2);
            var _itemWidth = $("#allowanceTabs .myAwards:eq(0)").outerHeight(true);
            console.log(_index3+"--"+_curLine+"--"+_itemWidth);
            
        } else if (_index2 == 1) {
            myScrollTopValue = $(".awardTabs")[0].offsetHeight + 12;
            var _index3 = $("#redTabs .myAwards").index($(this)); //btn是第几个津贴奖励
            var _curLine = Math.floor(_index3/2);
            var _itemWidth = $("#redTabs .myAwards:eq(0)").outerHeight(true);
            console.log(_index3+"--"+_curLine+"--"+_itemWidth);
            myScrollTopValue += _curLine*_itemWidth;
        } else if (_index2 == 2) {
            myScrollTopValue = $(".awardTabs")[0].offsetHeight + $(".awardTabs")[1].offsetHeight + 24;
        	var _index3 = $("#entityTabs .myAwards").index($(this)); //btn是第几个津贴奖励
            var _curLine = Math.floor(_index3/3);
            var _itemWidth = $("#entityTabs .myAwards:eq(0)").outerHeight(true);
            console.log(_index3+"--"+_curLine+"--"+_itemWidth);
            myScrollTopValue += _curLine*_itemWidth;
        } else if (_index2 == 3) {
            myScrollTopValue = $(".awardTabs")[0].offsetHeight + $(".awardTabs")[1].offsetHeight + $(".awardTabs")[2].offsetHeight + 36;
        	var _index3 = $("#packageTabs .myAwards").index($(this)); //btn是第几个津贴奖励
            var _curLine = Math.floor(_index3/3);
            var _itemWidth = $("#packageTabs .myAwards:eq(0)").outerHeight(true);
            console.log(_index3+"--"+_curLine+"--"+_itemWidth);
            myScrollTopValue += _curLine*_itemWidth;
        } else if (_index2 == 4) {
            myScrollTopValue = $(".awardTabs")[0].offsetHeight + $(".awardTabs")[1].offsetHeight + $(".awardTabs")[2].offsetHeight + $(".awardTabs")[3].offsetHeight + 48;
        	var _index3 = $("#goldcoinTabs .myAwards").index($(this)); //btn是第几个津贴奖励
            var _curLine = Math.floor(_index3/2);
            var _itemWidth = $("#goldcoinTabs .myAwards:eq(0)").outerHeight(true);
            console.log(_index3+"--"+_curLine+"--"+_itemWidth);
            myScrollTopValue += _curLine*_itemWidth;
        }
        $("#myAwardBox").stop(true, true).animate({ scrollTop: myScrollTopValue }, { duration: 0, easing: "swing" });
    });
    $(".myAwards").unbind("itemClick").bind("itemClick", function() {
        var _clickIndex = $(".myAwards").index($(this));
        var _awardId = $(this).attr("awardId");
        var _awardName = $(this).attr("awardName");
        var _awardTime = $(this).attr("awardTime");
        var _awardType = $(this).attr("awardType");
        var _awardUrl = $(this).attr("awardUrl");
        var _awardState = $(this).attr("awardState");
        var _lotteryActiveId = $(this).attr("lotteryActiveId");
        var _rememberId = $(this).attr("rememberId");
        var _userkeyId = $(this).attr("userkeyId");
        _curHomeBtn = $(this).attr("id");
        console.log(_curHomeBtn);
        console.log(_awardName+";"+_awardTime+";"+_awardType+";"+_awardState+";"+_lotteryActiveId+";"+_rememberId+";"+_userkeyId);
        console.log(loginstatus);
        if (_awardType == 17) {
            if (loginstatus == "false") {
                console.log("点击了购物津贴+启登录");
                startAndSendLog();
            } else {
                console.log("点击了购物津贴+跳转页面");
                var curNum = document.getElementById("myallowanceNum").innerHTML;
                console.log(curNum);
                if (curNum == 0) {
                	$("#mainbox").css("display", "block");
                	$("#myAwardPage").css("display", "none");
                	map = new coocaakeymap($(".coocaabtn"), $("#allowanceGet"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            		$("#allowanceGet").trigger("itemFocus");
            		
            		var pagename = "";
		            var page_type = "";
		            if($("#gamePanel").offset().left < -600){
		                pagename = "扭蛋机活动";
		                if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
		            }else{
		                pagename = "大富翁活动";
		                if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
		            }
		            sentLog("okr_web_page_show", '{"page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
		            _czc.push(['_trackEvent', '418活动', pagename, '曝光', '', '']);
                } else{
                	getAllowanceInfo(1);
			        $("#mainbox").css("display", "none");
			        $("#myAwardPage").css("display", "none");
			        $("#allowancePage").css("display", "block");
			        sentLog("okr_web_page_show", '{"page_name":"我的津贴页面","activity_name":"418活动"}');
					_czc.push(['_trackEvent', '418活动', '我的津贴页面', '曝光', '', '']);
			        allowancePageForm = "allowancePage";
	        		getAllNotGetAllowance();
                }
                sentLog("okr_web_button_click", '{"page_name":"我的奖励页面","activity_name":"418活动","button_name":"津贴"}');
            	_czc.push(['_trackEvent', '418活动', "我的奖励页面", "津贴的点击", '', '']);
            }
        }
        if (_awardType == 7) {
            var _redNumber = $(this).attr("redNumber");
            console.log("点击了红包");
            if (loginstatus == "false") {
                console.log("点击了红包+启登录");
                startAndSendLog();
            } else {
            	console.log("点击了红包+展示信息");
                $("#dialogPage").css("display", "block");
                if (ADMsg5 != null && ADMsg5.schedules != undefined && ADMsg5.schedules[0] != undefined) {
		            sentInnerAdshow(ADMsg5, "G0006", "1", "1", "1", "", "","");
		            sentThirdAdshow("img", ADMsg5);
		        }
                sentLog("okr_web_button_click", '{"page_name":"我的奖励页面","activity_name":"418活动","button_name":"红包"}');
            	_czc.push(['_trackEvent', '418活动', "我的奖励页面", "红包的点击", '', '']);
                if (_awardState == 0) {
                    console.log("点击了红包+显示二维码");
                    $(".secondDialog").css("display", "none");
                    $("#redNotGet").css("display", "block");
                    $("#redContent").html('<span style="font-size: 65px;">' + _redNumber + '</span>元');
                    console.log(_lotteryActiveId + "--" + _rememberId + "--" + _userkeyId);
                    getRedPacketsQrcode(_lotteryActiveId, _rememberId, _userkeyId, "redQrcode", 175, 175);
                    map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("redQrcode"), "btn-focus", function() {}, function(val) {}, function(obj) {});
                } else {
                    console.log("点击了红包+显示领取信息");
                    $(".secondDialog").css("display", "none");
                    $("#redHasGet").css("display", "block");
                    if (gameStatus == 3) {
                    	$("#redHasGetBtn .btnName").html("查看中奖名单");
                    } else{
                    	$("#redHasGetBtn .btnName").html("继续参与");
                    }
                    map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("redHasGetBtn"), "btn-focus", function() {}, function(val) {}, function(obj) {});
                }
            }
        }
        if (_awardType == 2) {
            if (loginstatus == "false") {
                console.log("点击了实物奖+启登录");
                startAndSendLog();
            } else {
            	console.log("点击了实物奖+展示奖品");
            	if (ADMsg5 != null && ADMsg5.schedules != undefined && ADMsg5.schedules[0] != undefined) {
		            sentInnerAdshow(ADMsg5, "G0006", "1", "1", "1", "", "","");
		            sentThirdAdshow("img", ADMsg5);
		        }
            	
                $("#dialogPage").css("display", "block");
                sentLog("okr_web_button_click", '{"page_name":"我的奖励页面","activity_name":"418活动","button_name":"实物"}');
            	_czc.push(['_trackEvent', '418活动', "我的奖励页面", "实物的点击", '', '']);
                if (_awardState == 0) {
                    console.log("点击了实物奖+显示二维码");
                    $("#otherInfo1").html("奖品名称:&nbsp;&nbsp;" + _awardName);
                    $("#otherInfo2").html("发放时间:&nbsp;&nbsp;" + _awardTime);
                    $(".secondDialog").css("display", "none");
                    $("#otherNotGet").css("display", "block");
                    $("#otherQrcode").css("display", "block");
                    map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherInfo3"), "btn-focus", function() {}, function(val) {}, function(obj) {});
                    var enstr = enurl + "activeId=" + _lotteryActiveId + "&rememberId=" + _rememberId + "&userKeyId=" + _userkeyId + "&access_token=" + access_token;
                    drawQrcode("otherQrcode", enstr, 125);
                } else {
                    console.log("点击了实物奖+显示领取信息");
                    var _awardAddress = $(this).attr("awardAddress");
                    var _userPhone = $(this).attr("userPhone");
                    var _userName = $(this).attr("userName");
                    $(".secondDialog").css("display", "none");
                    $("#otherHasGet").css("display", "block");
                    $("#hasGotInfo1").html("奖品名称:&nbsp;&nbsp;" + _awardName);
                    $("#hasGotInfo2").html("发放时间:&nbsp;&nbsp;" + _awardTime);
                    $("#hasGotInfo3").html("联系人:&nbsp;&nbsp;" + _userName);
                    $("#hasGotInfo4").html("联系电话:&nbsp;&nbsp;" + _userPhone);
                    $("#hasGotInfo5").html("收货地址:&nbsp;&nbsp;" + _awardAddress);
                    map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("hasGotInfo4"), "btn-focus", function() {}, function(val) {}, function(obj) {});
                }
            }
        }
        if (_awardType == 13) {
        	sentLog("okr_web_button_click", '{"page_name":"我的奖励页面","activity_name":"418活动","button_name":"特权"}');
            _czc.push(['_trackEvent', '418活动', "我的奖励页面", "特权的点击", '', '']);
            
            var _curVipType = $(this).attr('vipType');
            var _curVipId = $(this).attr('vipId');
            var _curVipUrl = $(this).attr('awardUrl');
            console.log(_curVipType+"---"+_curVipId +"--"+_curVipUrl);
            if (_curVipType == "product") {
            	console.log("点击了特权商品");
            	coocaaosapi.startAppShopDetail(_curVipId, function() {}, function() {});
            } else{
            	console.log("点击了特价产品包");
            	var packurl = vipstartUrl + '?data={"product_id":"'+_curVipId+'","activity_id":"'+actionId+'","activity_name":"418活动","bg_url":"'+_curVipUrl+'"}';
        		coocaaosapi.startNewBrowser(packurl, function() {}, function() {});
            }
        }
        if (_awardType == 19){
        	if (loginstatus == "false") {
                console.log("点击了金币奖+启登录");
                startAndSendLog();
            } else {
            	if (_awardState == 0) {
	        		console.log("领取金币+成功后跳转金币页面");
	        		sendPrizes(_awardName, _awardId, _rememberId, _userkeyId, _awardType, _lotteryActiveId, movieSource, 1);
	        	}
	        	var coinUrl = 'https://goldshop.coocaa.com/';
	        	coocaaosapi.startNewBrowser5(coinUrl, function() {}, function() {});
	        	sentLog("okr_web_button_click", '{"page_name":"我的奖励页面","activity_name":"418活动","button_name":"金币"}');
            	_czc.push(['_trackEvent', '418活动', "我的奖励页面", "金币的点击", '', '']);
        	}
        }
    });
}
//领取津贴接口
function getAllowance() {
    var ajaxTimeoutOne= $.ajax({
        type: "POST",
        async: true,
        timeout: 10000,
        dataType: 'json',
        url: adressIp + "/building/ludo/subsidyRecord",
        data: {
            //公共参数-start-
            "MAC": macAddress,
            "cChip": TVchip,
            "cModel": TVmodel,
            "cEmmcCID": emmcId,
            "cUDID": activityId,
            "accessToken": access_token,
            "cOpenId": cOpenId,
            "cNickName": nick_name,
            //公共参数-end-
            "id": actionId,
            "subsidyey": ""
        },
        success: function(data) {
            console.log("领取津贴信息=========================="+JSON.stringify(data));
            var button_state = "";
            if(data.code == "50100") { //服务器返回正常
                button_state = "领取成功";
                $("#blackBg").show();
                $("#getallowancesuccess").show();
                map = new coocaakeymap($("#getallowancesuccess"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
                $("#getallowancesuccess").unbind("itemClick").bind("itemClick",function(){
                    selectMyAllowanceNum();
                    $("#blackBg").hide();
                    $("#getallowancesuccess").hide();
                    donotSentAllowanceBtnLog = true;
                    rememberAllowancebtnFlag = "3";
                    $("#allowanceBtn").trigger("itemClick");
                })
            }
            else if(data.code == "50003") {
                button_state = "没到领取时间";
                if(startDayNum == 9){
                    //结束
                    showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/jintieyijinglingwan.png",3000);
                }else{
                    //稍后再来
                    showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/jintieweidaoshijian.png",3000);
                }
            }
            else if(data.code == "50046") {
                button_state = "没到领取时间";
                showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/jintieweidaoshijian.png",3000);
            }
            else if(data.code == "50004") {
                button_state = "已领取过";
                showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/yijinglingguo.png",3000);
            }else {
                button_state = "领取失败";
                showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/lingqushibai.png",3000);
                console.log('领取津贴信息接口异常');
            }
            var allowance_price = "0";
            var nowHours = new Date().getHours();
            if((nowHours>=0&&nowHours<=12)||(nowHours>=22)){
                allowance_price = "50";
            }else{
                allowance_price = "100";
            }
            var btnname = "津贴领取入口 ";
            var pagename = "";
            var page_type = "";
            if($("#gamePanel").offset().left < -600){
                pagename = "扭蛋机活动";
                if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
            }else{
                pagename = "大富翁活动";
                if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
            }
            sentLog("okr_web_button_click", '{"allowance_price":"'+allowance_price+'","task_name":"","button_state":"'+button_state+'","button_name":"'+btnname+'","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
            _czc.push(['_trackEvent', '418活动', "津贴点击"+allowance_price, button_state, '', '']);
        },
        error: function(err) {
            console.log(JSON.stringify(err));
        },
        complete: function(XMLHttpRequest, status) {
            console.log("-------------complete------------------" + status);
            if(status == 'timeout') {
                ajaxTimeoutOne.abort();
            }
        }
    });
}
//获取跳转参数并执行[福利街]
function getParamAndStart(obj,needCheckVersion) {
    if(donotSentStartParamBtnLog || donotSentMissionBtnLog){
        donotSentStartParamBtnLog = false;
        donotSentMissionBtnLog = false;
    }else{
        var btnname = "";
        if(needCheckVersion){
            btnname = "浏览任务";
        }else{
            btnname = "付费任务";
        }
        var _this = obj;
        var pagename = "";
        var page_type = "";
        if($("#gamePanel").offset().left < -600){
            pagename = "扭蛋机活动";
            if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
        }else{
            pagename = "大富翁活动";
            if(gameStatus == "3"){page_type="大富翁已结束"}else {page_type="大富翁已开始"}
        }
        var button_state = "";
        if($(_this).attr("remainingNumber")==0){
            button_state="已完成";
        }else{button_state="未完成"}
        sentLog("okr_web_button_click", '{"allowance_price":"","task_name":"'+$(_this).attr("taskName")+'","button_state":"'+button_state+'","button_name":"'+btnname+'","page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
        _czc.push(['_trackEvent', '418活动', btnname+"点击", button_state, '', '']);
    }


    var startAction = $(obj).attr("action");
    console.log(startAction)
    var pkgname = JSON.parse(startAction).packagename||JSON.parse(startAction).packageName;
    var bywhat = JSON.parse(startAction).bywhat;
    var byvalue = JSON.parse(startAction).byvalue;
    var needversioncode = JSON.parse(startAction).versioncode||JSON.parse(startAction).versionCode;
    var hasversioncode = "";
    var jumpBgImgUrl = $(obj).attr("jumpBgImgUrl");
    var jumpImgUrl = $(obj).attr("jumpImgUrl");
    var jumpRemindImgUrl = $(obj).attr("jumpRemindImgUrl");
    var countdown = $(obj).attr("countdown");
    var a = '{ "pkgList": ["' + pkgname + '"] }';
    var param1 = "",
        param2 = "",
        param3 = "",
        param4 = "",
        param5 = "";
    var str = "[]";
    coocaaosapi.getAppInfo(a, function(message) {
        console.log("getAppInfo====" + message);
        if (JSON.parse(message)[pkgname].status == -1) {
            coocaaosapi.startAppStoreDetail(pkgname, function() {}, function() {});
        } else {
            hasversioncode = JSON.parse(message)[pkgname].versionCode;
            // hasversioncode = "307";
            if (bywhat == "activity" || bywhat == "class") {
                param1 = pkgname;
                param2 = byvalue;
            } else if (bywhat == "uri") {
                param1 = pkgname;
                param5 = byvalue
            } else if (bywhat == "pkg") {
                param1 = pkgname;
            } else if (bywhat == "action") {
                param1 = "action";
                param2 = byvalue;
                param3 = pkgname;
            }
            if (JSON.stringify(JSON.parse(startAction).params) != "{}") {
                str = '[' + JSON.stringify(JSON.parse(startAction).params).replace(/,/g, "},{") + ']'
            }
            if (hasversioncode < needversioncode) {
                if (pkgname == "com.tianci.movieplatform") {
                    showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/movieupdate.png",4000,"","");
                    return;
                    // $("#needUpdate").show();
                    // $("#blackBg").show();
                    // $("#needUpdate").css("background", "url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/index/movieupdate.png)");
                    // map = new coocaakeymap($("#needUpdate"), $("#needUpdate"), "btnFocus", function() {}, function(val) {}, function(obj) {});
                    // toastTimeout = setTimeout(function(){
                    //     hideToast(1)
                    // }, 5000);
                }  else if (pkgname == "com.coocaa.mall") {
                    showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/mallupdate.png",4000,"","");
                    return;
                    // $("#needUpdate").show();
                    // $("#blackBg").show();
                    // $("#needUpdate").css("background", "url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/index/mallupdate.png)");
                    // map = new coocaakeymap($("#needUpdate"), $("#needUpdate"), "btnFocus", function() {}, function(val) {}, function(obj) {});
                    // toastTimeout = setTimeout(function(){
                    //     hideToast(1)
                    // }, 5000);
                }
                console.log("当前版本过低，请前往应用圈搜索进行升级");
            } else {
                if(needCheckVersion){
                    var apkVersion = [];
                    var apkArry = ["com.coocaa.activecenter","com.coocaa.app_browser","com.coocaa.mall","com.tianci.movieplatform"];
                    var app = '{ "pkgList": ["com.coocaa.activecenter","com.coocaa.app_browser","com.coocaa.mall","com.tianci.movieplatform"] }';
                    coocaaosapi.getAppInfo(app, function(message) {
                        console.log("getAppInfo====" + message);
                        for(var i=0;i<4;i++){
                            apkVersion.push(JSON.parse(message)[apkArry[i]].versionCode);
                        }
                        activityCenterVersion = apkVersion[0];
                        browserVersion = apkVersion[1];
                        mallVersion = apkVersion[2];
                        cAppVersion = apkVersion[3];
                        console.log("===activityCenterVersion=="+activityCenterVersion+"===browserVersion=="+browserVersion+"==mallVersion=="+mallVersion+"==cAppVersion=="+cAppVersion);
                        if((activityCenterVersion < 103015) || (browserVersion < 104039)) {
                            console.log("活动中心或浏览器版本太低，需要后台升级，显示弹窗");
                            showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/mokuaijiazai.png",4000);
                            return;
                        } else {//版本满足需求，才真正执行按键判断:
                            console.log("剩余可完成次数======="+$(obj).attr("remainingNumber"));
                            if($(obj).attr("remainingNumber")!=undefined&&$(obj).attr("remainingNumber")!=0){
                                console.log("剩余可完成次数======="+$(obj).attr("remainingNumber"));
                                needAddChance = true;
                            }else{
                                needAddChance = false;
                            }
                            if (pkgname == "com.tianci.movieplatform") {
                                if(cAppVersion<7020028){
                                    //lowVersion----自身加机会【仍需判断】
                                    startLowVersion(needAddChance);
                                }else{
                                    if(needAddChance){
                                        startNewVersion("false");
                                    }else{
                                        // startLowVersion(needAddChance);
                                        startNewVersion("true");
                                    }
                                }
                            }  else if (pkgname == "com.coocaa.mall") {
                                if(mallVersion<31100003){
                                    startLowVersion(needAddChance);
                                }else{
                                    if(needAddChance){
                                        startNewVersion("false");
                                    }else{
                                        // startLowVersion(needAddChance);
                                        startNewVersion("true");
                                    }
                                }
                            }
                            function startLowVersion(needAddChance) {
                                console.log("olg------------------------------"+needAddChance);
                                if(needAddChance){
                                    addChance("1",$(obj).attr("taskId"),0);
                                    showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/jijiangtiaozhuan.png",4000);
                                    needFresh = true;
                                    needRememberFocus = true;
                                    rememberBtn = ".mission:eq("+$('.mission').index($(obj))+")";
                                }else{
                                    showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/bujiajihui.png",4000);
                                }
                                setTimeout(function () {
                                    diceCanClick = true;
                                    coocaaosapi.startCommonNormalAction(param1, param2, param3, param4, param5, str, function() { needSentADLog = false; }, function() {});
                                },4000);
                            }
                            function startNewVersion(isFinish) {
                                console.log("new------------------------------");
                                if(isFinish == "true"){
                                    showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/bujiajihui.png",4000);
                                }else{
                                    showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/jijiangtiaozhuan.png",4000);
                                }

                                str = JSON.parse(str);
                                var external = {"taskId":$(obj).attr("taskId"),"id":actionId,"userKeyId":userKeyId, "countDownTime":countdown, "verify_key":new Date().getTime(), "subTask":"0","isFinish":isFinish,"jumpBgImgUrl":jumpBgImgUrl,"jumpImgUrl":jumpImgUrl,"jumpRemindImgUrl":jumpRemindImgUrl,"serverUrl":adressIp+"/building"};
                                var doubleEggs_Active = {"doubleEggs_Active":external};
                                str.push(doubleEggs_Active);
                                str = JSON.stringify(str);
                                setTimeout(function () {
                                    needFresh = true;
                                    needRememberFocus = true;
                                    rememberBtn = ".mission:eq("+$('.mission').index($(obj))+")";
                                    diceCanClick = true;
                                    coocaaosapi.startCommonNormalAction(param1, param2, param3, param4, param5, str, function() { needSentADLog = false; }, function() {});
                                },4000);
                            }
                        }
                    }, function(error) {
                        console.log("getAppInfo----error" + JSON.stringify(error));
                    });
                }
                else{
                    coocaaosapi.startCommonNormalAction(param1, param2, param3, param4, param5, str, function() { needSentADLog = false; }, function() {});
                }
            }
        }
    }, function(error) {
        console.log("getAppInfo----error" + JSON.stringify(error));
        coocaaosapi.startAppStoreDetail(pkgname, function() {}, function() {});
    });
}
//完成任务时，增加机会接口:
function addChance(taskType, taskId, askResult) {
    console.log("taskType:"+taskType+",taskId:"+taskId);
    $.ajax({
        type: "post",
        async: true,
        timeout: 10000,
        url: adressIp+"/building/task/finish-task",
        data: {
            taskId:taskId
            ,activeId:actionId
            ,userKeyId:userKeyId
            ,askResult: askResult
            ,"cOpenId": cOpenId
            ,"cNickName": nick_name
        },//,chanceSource:2,subTask:0,cOpenId:_openId},
        dataType: "json",
        success: function(data) {
            console.log("------------addChanceWhenFinishTask----result-------------"+JSON.stringify(data));
            if(data.code == 50100){
                if(taskType == "1"){
                    //刷新页面状态:
                    getMyTasksList(false);
                }else if(taskType == "0"){
                    showPage(false, false);
                }
            }else if(data.code == 91009){
                console.log("任务已过期");
                if (askResult == 1){ //如果是问答任务，且回答正确，因为任务已过期，所以不显示加机会。
                    $("#interlucationAnswerToastId .interlucationTitleClass").html("恭喜回答正确!");
                }
            }
        },
        error: function(error) {
            console.log("--------访问失败" + JSON.stringify(error));
        }
    });
}
//信息滚动效果
function showAwardlist(box, inner, name) {
    if (name == "1") {
        clearInterval(marqueeInterval1);
    } else {
        clearInterval(marqueeInterval2);
    }
    var boxHeight = $(box).height();
    var listHeight = $(inner).height();
    var screenNum = Math.ceil(listHeight / boxHeight);
    console.log("---" + boxHeight + "---" + listHeight + "----" + screenNum + "---")
    var a = 1;
    if (screenNum > 1) {
        if (name == "1") {
            marqueeInterval1 = setInterval(marquee, 3000);
        } else {
            marqueeInterval2 = setInterval(marquee, 3000);
        }
    }

    function marquee() {
        $(inner).css("transform", "translate3D(0, -" + a * boxHeight + "px, 0)");
        a++;
        if (a == screenNum) { a = 0 }
    }
}
//隐藏提示框
function hideToast(pageNum) {
    clearTimeout(toastTimeout);
    $("#blackBg").hide();
    $("#needUpdate").hide();
    if(pageNum == 1){
        map = new coocaakeymap($(".coocaabtn"), $(".operationblock:eq(" + remembernum + ")"), "btnFocus", function() {}, function(val) {}, function(obj) {});
    }else{
        map = new coocaakeymap($(".coocaa_btn"), $(".allowanceItemLi:eq(" + _curAllBtn + ")"), "btn-focus", function() {}, function(val) {}, function(obj) {});
    }
}
//展示并隐藏toast，不抢焦点
function showAndHideToast(text,time,obj,stopDice,specialType) {
    clearInterval(interval_diceMove);
    $("#diceIcon_1").stop(true,true);
    if(specialType){
        $("#specialToast").css("background-image","url("+text+")");
        $("#specialToast").show();
        setTimeout(function () {
            $("#specialToast").hide();
        },time);
    }else{
        if(stopDice){
            $("#diceIcon_1").attr('class', 'dice-icon-1');
            $("#diceIcon_1").css({ marginTop: "0", marginLeft: "0" });
            $("#diceIcon_1").addClass("dice_aim"+obj.diceNumber);
        }
        $("#normalToast span").css("background-image","url("+text+")");
        $("#normalToast").show();
        // $("#blackBg").show();
        setTimeout(function () {
            $("#normalToast").hide();
            $("#speedNum").html("");
            // $("#blackBg").hide();
        },time);
    }
}
//掷骰子接口
function startMapFunc() {
    diceMove();
    interval_diceMove = setInterval(function() {
        diceMove();
    },3000);
    $.ajax({
        type: "post",
        async: true,
        url: adressIp + "/building/ludo/lottery",
        data: { cHomepageVersion:cAppVersion, id: actionId, cChip: TVchip, cModel: TVmodel, cUDID: activityId, MAC: macAddress, cEmmcCID: emmcId, cOpenId: cOpenId, cNickName: nick_name,province:_province,city:_city},
        dataType: "json",
        // timeout: 20000,
        success: function(data) {
            console.log("掷骰子返回状态：" + JSON.stringify(data));
            if(data.code == 50100){
                lotteryNum = data.data.lotteryNum;
                if(lotteryNum>0){
                    $("#mapChance").html("(剩余"+lotteryNum+"次机会)");
                }else{
                    $("#mapChance").html("点击解锁游戏机会");
                }
                var obj = data.data;
                // setTimeout(function(){showAndHideToast("恭喜您，可以往前走"+obj.diceNumber+"步",obj,true)},4000);
                setTimeout(function(){mapMove(obj,false)},4000);
            }else{
                showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/tryagain.png",2000);
                diceCanClick = true;
                clearInterval(interval_diceMove);
            }
        },
        error: function(error) {
            diceCanClick = true;
            clearInterval(interval_diceMove);
            console.log("-----------访问失败---------" + JSON.stringify(error));
        }
    });
}
//骰子转动效果
function diceMove() {
    var dice = $("#diceIcon_1");
    $("#diceIcon_1").attr("class", "dice-icon-1");
    dice.animate({ marginLeft: '+2px' }, 100, function() {
        dice.addClass("dice_aimt");
    }).delay(200).animate({ marginTop: '-28px', marginLeft: '10px' }, 200, function() {
        dice.removeClass("dice_aimt").addClass("dice_aims");
    }).delay(200).animate({ marginTop: '-10px', marginLeft: '-22px' }, 200, function() {
        dice.removeClass("dice_aimt").addClass("dice_aimt");
    }).delay(200).animate({ marginTop: '-30px', marginLeft: '-10px' }, 200, function() {
        dice.removeClass("dice_aims").addClass("dice_aime");
    }).animate({ marginTop: '12px', marginLeft: '10px' }, 200, function() {
        dice.removeClass("dice_aimt").addClass("dice_aimt");
    }).animate({ marginTop: '-26px', marginLeft: '-20px' }, 200, function() {
        dice.removeClass("dice_aime").addClass("dice_aims");
    }).animate({ marginTop: '-16px', marginLeft: '-18px' }, 200, function() {
        dice.removeClass("dice_aims").addClass("dice_aimt");
    }).animate({ marginTop: '-28px', marginLeft: '10px' }, 200, function() {
        dice.removeClass("dice_aimt").addClass("dice_aime");
    }).animate({ marginTop: '-13px', marginLeft: '-26px' }, 200, function() {
        dice.removeClass("dice_aime").addClass("dice_aims");
    }).delay(200).animate({ opacity: 'show', }, 600, function() {
        dice.removeClass("dice_aims").addClass("dice_aimt");
    }).animate({ marginTop: '0px', marginLeft: '0px' }, 200, function() {
        dice.removeClass("dice_aime").addClass("dice_aims");
    }).animate({ marginTop: '12px', marginLeft: '10px' }, 200, function() {
        dice.removeClass("dice_aimt").addClass("dice_aimt");
    }).animate({ marginTop: '-28px', marginLeft: '-20px' }, 200, function() {
        dice.removeClass("dice_aime").addClass("dice_aims");
    }).animate({ marginTop: '-16px', marginLeft: '-18px' }, 200, function() {
        dice.removeClass("dice_aims").addClass("dice_aimt");
    }).animate({ marginTop: '-26px', marginLeft: '10px' }, 200, function() {
        dice.removeClass("dice_aimt").addClass("dice_aime");
    }).animate({ marginTop: '-13px', marginLeft: '-26px' }, 200, function() {
        dice.removeClass("dice_aime").addClass("dice_aims");
    }).delay(200).animate({ opacity: 'show', }, 600, function() {
        dice.removeClass("dice_aims").addClass("dice_aimt");
    }).animate({ marginTop: '0px', marginLeft: '0px' }, 200, function() {
        dice.removeClass("dice_aimt").addClass("dice-icon-1");
    });
}
//跳格子效果
function mapMove(obj,isSecondMove) {
    clearInterval(interval_diceMove);
    $("#diceIcon_1").stop(true,true);
    $("#diceNum").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newnum"+obj.diceNumber+".png)");
    $("#diceNum").show();
    $("#diceNum").addClass("showmove");
    setTimeout(removeClass, 1500)
    function removeClass() {
        $("#diceNum").hide();
        $("#diceNum").removeClass("showmove")
    }
    nowPosition = obj.nowPosition;
    var i = (obj.nowPosition == 15) ? 1 : obj.nowPosition;
    var step = obj.nextPosition;
    if(!isSecondMove){
        $("#diceIcon_1").attr('class', 'dice-icon-1');
        $("#diceIcon_1").css({ marginTop: "0", marginLeft: "0" });
        $("#diceIcon_1").addClass("dice_aim"+obj.diceNumber);
    }
    var time = setInterval(function() {
        if(i == 1){$("#map15").removeClass("focus");}
        $("#map" + i).addClass("focus");
        $("#map" + (i - 1)).removeClass("focus");

        if (i == step) {
            diceCanClick = true;
            clearInterval(time); //如果到达指定位置则停止
            var obj1=obj;
            var obj2=null;
            if(obj.ifSpeedUp){
                obj2 = obj.speedUpRemember;
                //setTimeout(function(){mapMove(obj2,true)},2000);
            }
            setTimeout(function () {
                handleTheDrawData(obj1,obj2);
            },600)

        }
        i++; //继续前进
    }, 500);
}
//触发vip
function triggerVipFunction() {
    $.ajax({
        type: "post",
        async: true,
        url: adressIp + "/building/ludo/get-vip-type",
        data: {
            id: actionId,
            cChip: TVchip,
            cModel: TVmodel,
            cUDID: activityId,
            MAC: macAddress,
            cEmmcCID: emmcId,
            cOpenId: cOpenId,
            cNickName: nick_name,
            thirdUserId:qqtoken,
            loginType:login_type,
            vuserid:vuserid
        },
        dataType: "json",
        // timeout: 20000,
        success: function(data) {
        },
        error: function(error) {
            console.log("-----------访问失败---------" + JSON.stringify(error));
        },
        complete: function(XMLHttpRequest, status) {
            console.log("-------------complete------------------" + status);
        }
    });
}
//页面初始化或刷新
function showPage(first, resume) {
    console.log("$$$$$$$$$$$$$$$$$$====" + first + "===========" + resume);
    // selectAd(type,boxId, appid, game_id, game_scene, game_panel, game_position, activity_id, task_id, backUrl,adPosition)
    selectAd("img","adstation1","CCADTV10017","G0006","2","1","1","","","","2");
    setTimeout(function(){selectAd("img","adstation2","CCADTV10017","G0006","3","1","1","","","","3");},1)
    setTimeout(function(){selectAd("img","adstation4","CCADTV10017","G0006","2","2","1","","","","4");},50)
    setTimeout(function(){selectAd("img","adstation3","CCADTV10017","G0006","1","1","1","","","","5");},100)
    if(loginstatus == "true"){
        $("#allowanceBtn").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/allowance.png)");
        $("#allowanceBtn img").attr("src","http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/allowancefocus.png");
    }else{
        $("#allowanceBtn").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/newdailingqu.png)");
        $("#allowanceBtn img").attr("src","http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/newdailingqufocus.png");
    }
    if (first) {
        checkVersion();
    }
    var source = "yinhe";
    if(needQQ){source = "tencent"}else{source="yinhe"}
    var startInitTime = new Date().getTime();
    console.log("---" + macAddress + "------" + TVchip + "-----" + TVmodel + "------" + emmcId + "--------" + activityId + "---------" + access_token + "-------" + cOpenId);
    $.ajax({
        type: "post",
        async: true,
        url: adressIp + "/building/ludo/init",
        data: { loginType:login_type,vuserid:vuserid,source:source,capsuleId:capsuleId, id: actionId, cChip: TVchip, cModel: TVmodel, cUDID: activityId, MAC: macAddress, cEmmcCID: emmcId, cOpenId: cOpenId, cNickName: nick_name},
        dataType: "json",
        // timeout: 20000,
        success: function(data) {
            _czc.push(['_trackEvent', '418活动', "初始化时长", '', (new Date().getTime()-startInitTime),'']);
            console.log("初始化时长：" + (new Date().getTime()-startInitTime));
            console.log("初始化返回状态：" + JSON.stringify(data));
            showAwardInfo();
            selectChipInfo();
            // data={code:50003};
            if(data.code == 50100){
                $("#topMain").show();
                gameStatus = 1;
                lotteryNum = data.data.lotteryNum;
                cardsNum = data.data.cardsNum;
                nowPosition = data.data.nowPosition;
                startDayNum = data.data.startDayNum;
                capsuleIsStart = data.data.capsuleIsStart;
                beginTime = new Date(data.data.capsuleBeginTime).getTime();
                endTime = new Date(data.data.capsuleEndTime).getTime();
                nowTime = new Date(data.data.systemTime).getTime();
                todayFirst = data.data.todayFirst;
                activeFirst = data.data.activeFirst;
                userKeyId = data.data.userKeyId;
                alter = data.data.alter;
                if(todayFirst&&loginstatus=="true"){
                    setTimeout(triggerVipFunction,100);
                }
                if(alter>0){
                    alterType = data.data.alterType;
                    needshowdialog7 = true;
                }
                if(cardsNum>0 && capsuleIsStart && first){
                    $("#gamePanel").css("transform", "translate3D(-1280px, 0, 0)");
                    $("#gameDraw").show();
                    setTimeout(function () {
                        $("#gameMap").show();
                    },300)
                    setTimeout(function(){
                        if (ADMsg3 != null && ADMsg3.schedules != undefined && ADMsg3.schedules[0] != undefined) {
                            sentInnerAdshow(ADMsg3, "G0006", "3", "1", "1", "", "","");
                            sentThirdAdshow("img", ADMsg3);
                        }
                    },1000)
                }else{
                    if(first){
                        $("#gameMap").show();
                        setTimeout(function () {
                            $("#gameDraw").show();
                        },300)
                        setTimeout(function(){
                            if (ADMsg2 != null && ADMsg2.schedules != undefined && ADMsg2.schedules[0] != undefined) {
                                sentInnerAdshow(ADMsg2, "G0006", "2", "1", "1", "", "","");
                                sentThirdAdshow("img", ADMsg2);
                            }
                            if (ADMsg4 != null && ADMsg4.schedules != undefined && ADMsg4.schedules[0] != undefined) {
                                sentInnerAdshow(ADMsg4, "G0006", "2", "2", "1", "", "","");
                                sentThirdAdshow("img", ADMsg4);
                            }
                        },1000)
                    }else{}
                }
                showOperation(first);
                if(capsuleIsStart){
                    $("#tips").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/huorejinxingzhong.png)");
                    $("#tips1").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/tiping.png)");
                    $("#drawBtn").css("background-image", "url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/images/eggbtnbg.png)");
                	$("#activityHasStart").css("display","block");
                	$("#activityNotStart").css("display","none");
                }else{
					$("#drawBtn").css("background-image", "url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/images/eggbtnbg2.png)");
                	$("#activityNotStart").css("display","block");
                	$("#activityHasStart").css("display","none");
                }
                $(".map").removeClass("focus");
                $("#map"+nowPosition).addClass("focus");
                if(lotteryNum>0){
                    $("#mapChance").html("(剩余"+lotteryNum+"次机会)");
                }else{
                    $("#mapChance").html("点击解锁游戏机会");
                }

                var nowHours = new Date().getHours();
                if(nowHours==11||nowHours==12){
                    //调用领取接口
                    $("#allowanceGet").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/50/11dian.png)");
                }
                else if(nowHours==19||nowHours==20||nowHours==21){
                    $("#allowanceGet").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/100/19dian.png)");
                }
                else{
                    if(nowHours<11 ){
                        //稍后再来
                        $("#allowanceGet").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/50/xiachang1.png)");
                    }else if(nowHours>12&&nowHours<19) {
                        $("#allowanceGet").css("background-image", "url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/100/xiachang2.png)");
                    }else{
                        if(startDayNum == 9){
                            //结束
                            $("#allowanceGet").css("background-image", "url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/100/jieshu.png)");
                        }else{
                            //稍后再来
                            $("#allowanceGet").css("background-image", "url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/50/mingtian.png)");
                        }
                    }
                }

                if(startDayNum<4){
                    $("#todayaward").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/daisen.gif)");
                }else if(startDayNum < 7){
                    $("#todayaward").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/iphone.gif)");
                }else{
                    $("#todayaward").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/macbook.gif)");
                }
                getMyTasksList(true);
            }
            else if(data.code==50002){
                gameStatus = 0;
                $("#mainbox").hide();
                $("#waitPage").show();
                _czc.push(['_trackEvent', '418活动', '未开始页面曝光', '', '','']);
                map = new coocaakeymap($("#waitPage"), $("#waitPage"), "btnFocus", function() {}, function(val) {}, function(obj) {});
                $("#waitPage").unbind("itemClick").bind("itemClick",function(){
                    return;
                })
            }
            else if(data.code==50003){
                showOperation(first);
                gameStatus = 3;
                $("#bannerWord").html("活动已结束~获奖名单稍后公布");
                $("#mapBtn").addClass("finishAct");
                // $("#mapBtn").removeClass("coocaabtn");
                $("#tips").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/yijieshu.png)");
                $("#tips1").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/tipend.png)");
                $("#mainbox").hide();
                $("#endGamePage").show();
                if(rememberEndBtn == 0){$(".endbox").css("margin-top","0")}else{$(".endbox").css("margin-top","-720px")};
            }

        },
        error: function(error) {
            showOperation(first);
            selectChipInfo();
            console.log("-----------访问失败---------" + JSON.stringify(error));
        }
    });

}
//小狐狸说话信息
function speakToast(overtask){
    if(activeFirst){
        speak1 = true;
        str1="投掷骰子每到一格都有奖励哦！快来试试~";
    }
    if(startDayNum<6){
        speak2 = true;
        if(startDayNum<4){
            str2="大富翁<span>今日大奖</span>是<span>戴森三件套</span>，参与即有机会获得快掷骰子参与吧！";
        }else{
            str2="大富翁<span>今日大奖</span>是<span>iPhone XS</span>，参与即有机会获得快掷骰子参与吧！";
        }
        if(cardsNum==0){
            speak3 = true;
            str3="还在等什么呢,最新创维电视正在等您，快集齐418周年卡片吧！";
        }else{
            if(todayFirst){
                speak4 = true;
                str4="您已有<span>"+cardsNum+"</span>套418卡片，可0元赢新品电视，<span>4月18日开奖，</span>记得回来哦！";
            }
        }
    }
    else{
        if(cardsNum==0){
            speak3 = true;
            str3="还在等什么呢,最新创维电视正在等您，快集齐418周年卡片吧！";
        }else{
            speak4 = true;
            str4="您已有<span>"+cardsNum+"</span>套418卡片，可0元赢新品电视，<span>4月18日开奖，</span>记得回来哦！";
        }
        if(todayFirst){
            speak2 = true;
            if(startDayNum == 6){
                str2='终极大奖开启！集齐418周年卡片赢新品电视！快去"扭一扭"吧！';
            }else{
                var random = Math.random();
                if(startDayNum < 7){
                    if(random>0.5){
                        str2='终极大奖开启！集齐418周年卡片赢新品电视！快去"扭一扭"吧！';
                    }else {
                        str2 = "大富翁<span>今日大奖</span>是<span>iPhone XS</span>，快掷骰子参与吧！";
                    }
                }else{
                    if(random>0.5){
                        str2='终极大奖开启！集齐418周年卡片赢新品电视！快去"扭一扭"吧！';
                    }else {
                        str2 = "大富翁<span>今日大奖</span>是<span>新款苹果电脑</span>，快掷骰子参与吧！";
                    }
                }
            }
        }
    }


    if(lotteryNum == 0){
        if(overtask == 4){
            speak8 = true;
            str8="哎呀机会又用完啦！试试付费任务解锁机会！";
        }else{
            speak7 = true;
            str7="哎呀机会用完啦！今日完成趣味答题可<span>再获得1次机会哦！</span>";
            for(var i=0;i<3;i++){
                if($(".mission:eq("+i+")").attr("remainingNumber")>0){
                    speak7type = "jump";
                    str7="哎呀机会用完啦！去浏览指定内容解锁更多机会~";
                    break;
                }else{}
            }
        }
    }else{
        speak8 = false;
        speak7 = false;
    }
}
//查询碎片信息
function selectChipInfo() {
    $.ajax({
        type: "post",
        async: true,
        url: adressIp + "/building/ludo/chip-info",
        data: {
        	capsuleId:capsuleId, 
        	id: actionId, 
        	cChip: TVchip, 
        	cModel: TVmodel, 
        	cUDID: activityId, 
        	MAC: macAddress, 
        	cEmmcCID: emmcId, 
        	cOpenId: cOpenId, 
        	cNickName: nick_name,
        	cHomepageVersion:cAppVersion,
        	province:_province,
        	city:_city
        },
        dataType: "json",
        // timeout: 20000,
        success: function(data) {
            console.log("卡片信息：====="+JSON.stringify(data));
            if(data.code == 50100){
            	cardsNum = data.data.lc418Num;
            	cardsNum4 = data.data.lc4Num;
            	cardsNum1 = data.data.lc1Num;
            	cardsNum8 = data.data.lc8Num;
                haveUnReceive = data.data.haveUnReceive;
                if(haveUnReceive){$("#awardCircle").show()}else{$("#awardCircle").hide()}
                $(".lc4").html((data.data.lc4Num+cardsNum)+"片");
                $(".lc1").html((data.data.lc1Num+cardsNum)+"片");
                $(".lc8").html((data.data.lc8Num+cardsNum)+"片");
                $("#gameMap .lc418").html("已集齐"+cardsNum+"套");
                // $("#tips .tiplc418").html(cardsNum);

                $(".draw4cl").html((data.data.lc4Num+cardsNum));
                $(".draw1cl").html((data.data.lc1Num+cardsNum));
                $(".draw8cl").html((data.data.lc8Num+cardsNum));
                $(".draw418cl").html(cardsNum);
                $(".draw418").html(cardsNum);
                $("#aroundNum").html("X"+cardsNum);

                haveGiftChip = data.data.haveGiftChip;
                haveMarge = data.data.haveMarge;
                chipKey = data.data.chipKey;
                if(haveGiftChip){
                    if(haveMarge){
                        //赠送一张并合成,赠送的是chipKey
                        needshowdialog1 = true;
                    }else{
                        //赠送一张但没合成,赠送的是chipKey
                        needshowdialog2 = true;
                    }
                }else {
                    if(haveMarge){
                        //正常玩合成
                        if(startDayNum<6){
                            //需预约码
                            needshowdialog3 = true;
                        }else {
                            //无需预约码
                            needshowdialog4 = true;
                        }
                    }
                }
            }
        },
        error: function(error) {
            console.log("-----------访问失败---------" + JSON.stringify(error));
        },
        complete: function(XMLHttpRequest, status) {
            console.log("-------------complete------------------" + status);
            if(status == 'timeout') {
                ajaxTimeoutOne.abort();
            }
        }
    });
}
function showTime(type) {
    nowTime = nowTime + 1000;
    if(type == 1){
        var cutdown = beginTime - nowTime;
    }else{
        var cutdown = endTime - nowTime;
    }
    var transTime = Math.ceil(cutdown / 1000 / 60 / 60 / 24);
    if (transTime > 1) {
        if(type == 1){
            $("#bannerWord").html("距离418终极奖励开启还有"+transTime+"天");
        }else{
            $("#bannerWord").html("活动剩余"+transTime+"天，418终极电视大奖最后召集");
        }
    } else if (transTime == 1) {
        var hour = Math.floor(cutdown / 1000 / 60 / 60);
        var minute = Math.floor((cutdown - hour * 60 * 60 * 1000) / 1000 / 60);
        var second = Math.floor((cutdown - hour * 60 * 60 * 1000 - minute * 60 * 1000) / 1000);
        if (hour > 0) {
            if(type == 1){
                // $("#bannerWord").html("距离418终极奖励开启还有"+hour + "时" + minute + "分" + second + "秒");
                $("#bannerWord").html("距离418终极奖励开启还有"+hour + "小时" );
            }else{
                // $("#bannerWord").html("活动剩余"+hour + "时" + minute + "分" + second + "秒，418终极电视大奖最后召集");
                $("#bannerWord").html("活动剩余"+hour + "小时，418终极电视大奖最后召集" );
            }
        } else if (minute > 0) {
            if(type == 1){
                // $("#bannerWord").html("距离418终极奖励开启还有"+ minute + "分" + second + "秒");
                $("#bannerWord").html("距离418终极奖励开启还有"+ minute + "分");
            }else{
                // $("#bannerWord").html("活动剩余"+ minute + "分" + second + "秒，418终极电视大奖最后召集");
                $("#bannerWord").html("活动剩余"+ minute + "分，418终极电视大奖最后召集");
            }
        } else if(second > 0){
            if(type == 1){
                $("#bannerWord").html("距离418终极奖励开启还有" + second + "秒");
            }else{
                $("#bannerWord").html("活动剩余"+ second + "秒，418终极电视大奖最后召集");
            }
            if(second == 1){
                setTimeout(function () {
                    $(".freshneedhide").hide();
                    $("#mainbox").show();
                    showPage(false,false);
                    console.log("***********刷新页面************");
                    clearInterval(intervalForCutdown);
                },1000);
            }
        }else{
            console.log("========================"+second);
            showPage(false,false);
            console.log("***********刷新页面************");
            clearInterval(intervalForCutdown);
        }
    } else {
        clearInterval(intervalForCutdown);

    }
}
//获取福利街运营内容
function showOperation(showMainShow) {
    console.log("开始获取运营数据===");
    var tag_id = "";
    var startOperationTime = new Date().getTime();
    // if(needQQ){tag_id = 103621}else {tag_id = 103622}//test
    if (needQQ) { tag_id = 103673 } else { tag_id = 103672 }
    $("#payZone").html('<div id="allowanceGet" class="allowanceGet operationmap coocaabtn"><div class="sureGet">按【确定】键 立即领取</div><div class="text">&nbsp;</div></div>');
    var header = JSON.stringify({cUDID:activityId,MAC:macAddress,cModel:TVmodel,cChip:TVchip,cSize:deviceInfo.panel,cTcVersion:deviceInfo.version.replace(/\.*/g, ""),cFMode:"Default",cPattern:"normal","cBrand":"Skyworth"});
    // var header = JSON.stringify({});
    $.ajax({
        type: "get",
        async: true,
        url: operationurl,
        data: { page: 1, page_size: 6, tag_id: tag_id ,mode:"simple",content_type:"Tab",header:header},
        dataType: "json",
        timeout: 8000,
        success: function(data) {
            _czc.push(['_trackEvent', '418活动', "得到运营数据时长", '', (new Date().getTime()-startOperationTime),'' ]);
            console.log("得到运营数据时长==="+(new Date().getTime()-startOperationTime));
            var operationData = data;
            var payZone = document.getElementById("payZone");
            var tabInner = "";
            for (var i = 0; i < operationData.data.length; i++) {
                for (var j = 0; j < operationData.data[i].baseBlocks.length; j++) {
                    var action_this = JSON.parse(operationData.data[i].baseBlocks[j].action);
                    // console.log("---------action=================="+JSON.stringify(JSON.parse(operationData.data[i].baseBlocks[j].action)));
                    if(action_this.params.allowance != undefined){
                        if(loginstatus == "true"){
                            var tabItem = '<div class="operationblock operationmap coocaabtn" taskName="'+operationData.data[i].baseBlocks[j].title+'" action='+JSON.stringify(JSON.parse(operationData.data[i].baseBlocks[j].action))+' style="background-image:url('+operationData.data[i].baseBlocks[j].imgs.poster.images[0]+')"><div class="sureGet">按【确定】键 看详情购买</div><div class="text show" >使用津贴再减<span>'+action_this.params.allowance+'</span>元</div></div>';
                        }else{
                            var tabItem = '<div class="operationblock operationmap coocaabtn" taskName="'+operationData.data[i].baseBlocks[j].title+'" action='+JSON.stringify(JSON.parse(operationData.data[i].baseBlocks[j].action))+' style="background-image:url('+operationData.data[i].baseBlocks[j].imgs.poster.images[0]+')"><div class="sureGet">按【确定】键 看详情购买</div><div class="text show"  >领取津贴再减<span>'+action_this.params.allowance+'</span>元</div></div>';
                        }
                    }else{
                        var tabItem = '<div class="operationblock operationmap coocaabtn" taskName="'+operationData.data[i].baseBlocks[j].title+'" action='+JSON.stringify(JSON.parse(operationData.data[i].baseBlocks[j].action))+' style="background-image:url('+operationData.data[i].baseBlocks[j].imgs.poster.images[0]+')"><div class="sureGet">按【确定】键 看详情购买</div><div class="text">&nbsp;</div></div>';
                    }
                    tabInner += tabItem;
                }
            }
            $("#payZone").append(tabInner);
            $("#payZone").append('<div class="operationmore operationmap coocaabtn"  style="background-image:url(http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newmain/newoperationmore.jpg)"><div class="sureGet">按【确定】键 看详情购买</div><div class="text">&nbsp;</div></div>');

            pagefrom = getUrlParam("pageform");
            console.log("+++++++++++++++++++++++++"+($("#gamePanel").offset().left));
            if(gameStatus == 3){
                initBtn();
                map = new coocaakeymap($(".endbtn"), $(".endbtn:eq("+rememberEndBtn+")"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            }
            else if (pagefrom != null && pagefrom != undefined && showMainShow) {
                if(pagefrom == "task1"){
                    initMap(".normaltask:eq(0)",showMainShow);
                }else if(pagefrom == "task2"){
                    initMap(".normaltask:eq(1)",showMainShow);
                }else if(pagefrom == "task3"){
                    initMap(".normaltask:eq(2)",showMainShow);
                }else if(pagefrom == "allowance"){
                    initMap("#allowanceGet",showMainShow);
                }else{
                    initMap(null,showMainShow);
                }
            }
            else if(showMainShow){
                if(cardsNum>0 && capsuleIsStart){
                    initMap("#drawBtn",showMainShow);
                }else{
                    initMap("#mapBtn",showMainShow);
                }
            }
            else if($("#gamePanel").offset().left > -600){
                initMap("#mapBtn",showMainShow);
            }else if($("#gamePanel").offset().left < -600){
                initMap("#drawBtn",showMainShow);
            }else{
                initMap(null,showMainShow);
            }
            if (showMainShow) {
                entertime = new Date().getTime();
                var pagename = "";
                var page_type = "";
                if(gameStatus == 3){
                    pagename = "结束页面";
                }
                else if(cardsNum>0&&capsuleIsStart){
                    pagename = "扭蛋机活动";
                    if(gameStatus == "3"){page_type="扭蛋已结束"}else if(capsuleIsStart){page_type="扭蛋已开始"}else{page_type="扭蛋未开始"}
                }else{
                    pagename = "大富翁活动";
                    if(gameStatus == "3"){page_type="大富翁已结束"}else{page_type="大富翁已开始"}
                }

                sentLog("okr_web_page_show", '{"page_name":"'+pagename+'","activity_name":"418活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","movie_source":"' + movieSource + '"}');
                _czc.push(['_trackEvent', '418活动', pagename, '曝光', '', '']);

                sentLog("okr_web_clicked_result", '{"activity_name":"418活动","load_duration":"' + (entertime-startLoadTime) + '"}');
                _czc.push(['_trackEvent', '418活动', '加载时长', '', (entertime-startLoadTime),'']);
            }

        },
        error: function(error) {
            initMap(null,showMainShow);
            console.log("-----------访问失败---------" + JSON.stringify(error));
        }
    });
}
// //获取中奖信息
// function showAwardInfo() {
//     $("#gameMapNewsul").html("");
//     $.ajax({
//         type: "get",
//         async: true,
//         url: adressIp + "/building/common/news",
//         data: { id: actionId },
//         dataType: "json",
//         // timeout: 20000,
//         success: function(data) {
//             // console.log("中奖喜讯返回状态：" + JSON.stringify(data));
//             var box = document.getElementById("gameMapNewsul");
//             var tabInner = "";
//             for (var i = 0; i < data.data.fakeNews.length; i++) {
//                 var tabItem = '<li>'+data.data.fakeNews[i].nickName.substr(0,4)+' 掷骰子获得 '+data.data.fakeNews[i].awardName.substr(0,10)+'</li>';
//                 tabInner += tabItem;
//             }
//             $("#gameMapNewsul").append(tabInner);
//             showAwardlist("#gameMapNews", "#gameMapNewsul", "2");
//         },
//         error: function(error) {
//             console.log("-----------访问失败---------" + JSON.stringify(error));
//         }
//     });
// }
function showAwardInfo() {
    $("#gameMapNewsul").html("");
    var startTime = new Date().getTime();
    $.ajax({
        type: "get",
        async: true,
        url: adressIp + "/building/ludo/tv-news",
        data: { capsuleId: capsuleId },
        dataType: "json",
        // timeout: 20000,
        success: function(data) {
            console.log("中奖喜讯返回状态：" + JSON.stringify(data));
            _czc.push(['_trackEvent', '418活动', "中奖喜讯返回时长", '', (new Date().getTime()-startTime),'' ]);
            var tabInner = "";
            for (var i = 0; i < data.data.newsModelList.length; i++) {
                var tabItem = '<li>'+data.data.newsModelList[i].nickName.substr(0,6)+' '+data.data.newsModelList[i].awardName.substr(0,14)+'</li>';
                tabInner += tabItem;
            }
            $("#gameMapNewsul").append(tabInner);
            showAwardlist("#gameMapNews", "#gameMapNewsul", "1");
            $(".overTvNum").html(data.data.overTvNumber);
            $(".joinNum").html(data.data.joinUsers);
            if(startDayNum<4){
                $("#bannerWord").html("集齐周年卡片4月18日0元赢创维最新款电视");
            }else if(startDayNum < 6){
                $("#bannerWord").html("");
                clearInterval(intervalForCutdown);
                intervalForCutdown = setInterval(function(){showTime(1)}, 1000);
                // showTime();
            }else if(startDayNum>=6&&startDayNum<9){
                $("#bannerWord").html("剩余"+data.data.overTvNumber+"台电视大奖，集齐周年卡片0元带走");
            }else{
                intervalForCutdown = setInterval(function(){showTime(2)}, 1000);
            }
        },
        error: function(error) {
            console.log("-----------访问失败---------" + JSON.stringify(error));
        }
    });
}
//获取广告信息
function selectAd(type,boxId, appid, game_id, game_scene, game_panel, game_position, activity_id, task_id, backUrl,adPosition) {//backurl---视频广告时的备用地址,adPosition----整个活动页面内广告位置
    console.log("@@@@@@@@@@@@@@@@@@@@@@@"+appid+"--"+game_id+"=="+game_scene+"--"+game_panel+"=="+game_position+"---"+activity_id+"=="+task_id);
    coocaaosapi.getAdData(appid, game_id, game_scene, game_panel, game_position, activity_id, task_id, function(msg) {
        // console.log("admsg"+adPosition+"====" + msg);
        if(adPosition == "1"){
            ADMsg1 = JSON.parse(msg);
        }else if(adPosition=="2"){
            ADMsg2 = JSON.parse(msg);
        }else if(adPosition=="3"){
            ADMsg3 = JSON.parse(msg);
        }else if(adPosition=="4"){
            ADMsg4 = JSON.parse(msg);
        }else if(adPosition=="5"){
            ADMsg5 = JSON.parse(msg);
        }

        _adsTaskId = task_id;
        if(JSON.parse(msg) == null || JSON.parse(msg) == undefined || JSON.parse(msg) == "{}"){
           console.log("获取广告丢失=====================================");
        }else{
            if (JSON.parse(msg).total > 0) {
                console.log("^^^^^^^^^^^^"+boxId+"^^^^^^^^^^^^^^"+JSON.parse(msg).schedules[0].content);
                if(type=="img"){
                    $("." + boxId).css("backgroundImage", "url(" + JSON.parse(msg).schedules[0].content + ")");
                    // sentInnerAdshow(JSON.parse(msg), game_id, game_scene, game_panel, game_position, activity_id, task_id,"true");
                }else{
                    var url = JSON.parse(msg).schedules[0].content;
                    console.log("广告数据正常 url:"+url);
                    _bPlayFormalAdsVideo = true;
                    coocaaosapi.startCommonWebview("", url, "广告视频", "1080", "1920", "", "广告1", "广告2", function(message) {
                        console.log(message);
                    }, function(error) {
                        console.log("startCommonWebview-"+error);
                    });
                    sentThirdAdshow("videoStart", JSON.parse(msg));
                    sentThirdAdshow("img", JSON.parse(msg));
                }

                // sentThirdAdshow("img", JSON.parse(msg));
            } else {
                console.log("广告total为0，没有投广告^^^^^^^^^^^");
                if(type == "video"){
                    coocaaosapi.startCommonWebview("", backUrl, "广告视频", "1080", "1920", "", "广告1", "广告2", function(message) {
                        console.log(message);
                    }, function(error) {
                        console.log("startCommonWebview-"+error);
                    });
                }
            }
        }

    }, function(error) {})
}
//广告内部提交
function sentInnerAdshow(msg, game_id, game_scene, game_panel, game_position, activity_id, task_id,result) {
    coocaaosapi.submitAdData(JSON.stringify(msg.schedules[0]), game_id, game_scene, game_panel, game_position, activity_id, task_id,result, function(msg) {
        console.log("sent  inner  log  success===" + game_scene);
    }, function(err) {
        console.log("sent  inner  log  err===" + game_scene);
    })
}
//广告第三方监测
function sentThirdAdshow(type, msg) {
    var thirdUrl = "";
    if (type == "img") {
        thirdUrl = JSON.stringify(msg.schedules[0].track_url);
    } else if (type == "videoStart") {
        thirdUrl = JSON.stringify(msg.schedules[0].player_start_tracks);
    } else if (type == "videoEnd") {
        thirdUrl = JSON.stringify(msg.schedules[0].player_end_tracks);
    }
    coocaaosapi.submitThirdAdData(thirdUrl, msg.schedules[0].schedule_id, msg.schedules[0].order_id, msg.schedules[0].adspace_id, function(msg) {
        console.log("sent  third  log  success===" + msg);
    }, function(err) {
        console.log("sent  third  log  err===" + err);
    })
}
//加载立即检测版本
function checkVersion() {
    if (activityCenterVersion < 103015) {
        coocaaosapi.createDownloadTask(
            "https://apk-sky-fs.skysrt.com/uploads/20190403/20190403141921936543.apk",
            "A80A891472EF2F1AA7E6A9139AAC2BAD",
            "活动中心",
            "com.coocaa.activecenter",
            "26417",
            "http://img.sky.fs.skysrt.com//uploads/20170415/20170415110115834369.png",
            function() {},
            function() {});
    }
    if (browserVersion < 104039) {
        coocaaosapi.createDownloadTask(
            "https://apk-sky-fs.skysrt.com/uploads/20190112/20190112092209221535.apk",
            "C7390841A72A7AC3FBCD67A0332FDFC0",
            "活动浏览器",
            "com.coocaa.app_browser",
            "26423",
            "http://img.sky.fs.skysrt.com//uploads/20170415/20170415110115834369.png",
            function() {},
            function() {})
    }
}
//查找我的津贴
function selectMyAllowanceNum() {
    var startTime = new Date().getTime();
    $.ajax({
        type: "GET",
        async: true,
        url: allowanceUrl,
        // data: {clientId:"YS_BETA",authenticationType:"openid",authenticationValue :cOpenId,currentTimestamp:new Date().getTime()},
        data: {clientId:allowanceClientId,authenticationType:"openid",authenticationValue :cOpenId,currentTimestamp:new Date().getTime()},
        dataType:"jsonp",
        jsonp:"callback",
        success: function(data){
            //console.log("sent------------------"+JSON.stringify(data));
            _czc.push(['_trackEvent', '418活动', "查找我的津贴返回时长", '', (new Date().getTime()-startTime),'' ]);
            if(data.code == 0 ){//用户拥有津贴是否大于0
            	changeAllowanceNum(data.data.totalSubsidy/100);
            }else{
            	changeAllowanceNum(0);
            }
        },
        error: function(){
        	changeAllowanceNum(0);
        }
    });
}
//获取我的任务信息
function getMyTasksList(needCheckSpeak) {
    var startTime = new Date().getTime();
    var ajaxTimeoutOne = $.ajax({
        type: "get",
        async: true,
        timeout: 10000,
        dataType: 'json',
        url: adressIp + "/building/task/u-task",
        data: {
            //公共参数-start-
            "MAC": macAddress,
            "cChip": TVchip,
            "cModel": TVmodel,
            "cEmmcCID": emmcId,
            "cUDID": activityId,
            "accessToken": access_token,
            "cOpenId": cOpenId,
            "cNickName": nick_name,
            //公共参数-end-
            "id": actionId,
            "source": (movieSource == "tencent") ? "tencent" : "iqiyi"
        },
        success: function(data) {
            console.log("任务信息=========================="+JSON.stringify(data));
            _czc.push(['_trackEvent', '418活动', "任务信息返回时长", '',(new Date().getTime()-startTime), '' ]);
            if(data.code == "50100") { //服务器返回正常
                var taskOrder = ["jump","video","ask"];
                var taskList = data.data;
                var missionBoxNum = 0;
                var overTask = 0;
                for(var i=0;i<3;i++){
                    if(taskList[taskOrder[i]]!=undefined){
                        for(var j=0;j<taskList[taskOrder[i]].length;j++){
                            $(".mission:eq("+missionBoxNum+")").attr("taskId",taskList[taskOrder[i]][j].taskId);
                            $(".mission:eq("+missionBoxNum+")").attr("taskName",taskList[taskOrder[i]][j].taskName);
                            $(".mission:eq("+missionBoxNum+")").attr("taskType",taskOrder[i]);
                            $(".mission:eq("+missionBoxNum+")").attr("remainingNumber",taskList[taskOrder[i]][j].remainingNumber);
                            $(".mission:eq("+missionBoxNum+")").attr("countdown",taskList[taskOrder[i]][j].countdown);
                            $(".mission:eq("+missionBoxNum+")").attr("jumpBgImgUrl",taskList[taskOrder[i]][j].jumpBgImgUrl);
                            $(".mission:eq("+missionBoxNum+")").attr("jumpImgUrl",taskList[taskOrder[i]][j].jumpImgUrl);
                            $(".mission:eq("+missionBoxNum+")").attr("jumpRemindImgUrl",taskList[taskOrder[i]][j].jumpRemindImgUrl);
                            $(".mission:eq("+missionBoxNum+")").css("background-image","url("+taskList[taskOrder[i]][j].imgUrl+")");
                            if(taskOrder[i] == "jump"){
                                $(".mission:eq("+missionBoxNum+")").attr("action",taskList[taskOrder[i]][j].param);
                            }else if(taskOrder[i] == "video"){
                                $(".mission:eq("+missionBoxNum+")").attr("url",taskList[taskOrder[i]][j].param);
                            }
                            if(taskList[taskOrder[i]][j].remainingNumber == 0){
                                if(taskOrder[i] == "ask"){$("#finishicon").show()}
                                overTask++;
                            }
                            missionBoxNum++;
                        }
                    }
                }
                hasOverTask = overTask;
                $("#missionListTitle span").html(overTask);
                if(needCheckSpeak){
                    speakToast(hasOverTask);
                }
            }else {
                console.log('获取任务接口异常');
            }
        },
        error: function(err) {
            console.log(JSON.stringify(err));
        },
        complete: function(XMLHttpRequest, status) {
            console.log("-------------complete------------------" + status);
            if(status == 'timeout') {
                ajaxTimeoutOne.abort();
            }
        }
    });
}

//展示我的津贴页面
function getAllowanceInfo(num){
	document.getElementById("everyAllowanceUl").innerHTML = "";
    var tag_id = "";
    // if(needQQ){tag_id = 103633}else {tag_id = 103634}//test
    if (needQQ) { tag_id = 103674 } else { tag_id = 103675 }
    var header = JSON.stringify({cUDID:activityId,MAC:macAddress,cModel:TVmodel,cChip:TVchip,cSize:deviceInfo.panel,cTcVersion:deviceInfo.version.replace(/\.*/g, ""),cFMode:"Default",cPattern:"normal","cBrand":"Skyworth"});
    var ajaxTimeoutOne =  $.ajax({
        type: "get",
        async: true,
        url: operationurl,
        data: { page: 1, page_size: 6, tag_id: tag_id ,mode:"simple",content_type:"Tab",header:header},
        dataType: "json",
        timeout: 8000,
        success: function(data) {
            //console.log("运营数据==="+JSON.stringify(data));
            if(data.data.length>0){
				var liListItems = "";
				for(var i = 0; i < data.data.length; i++) {
					for (var j = 0; j < data.data[i].baseBlocks.length; j++) {
						var action_this = JSON.parse(data.data[i].baseBlocks[j].action);
                        if(loginstatus == "true"){
                        	liListItems += '<div class="everyAllowanceLi coocaabtn2" taskName="'+data.data[i].baseBlocks[j].title+'" action='+JSON.stringify(JSON.parse(data.data[i].baseBlocks[j].action))+'><img class="everyAllItem" src="'+data.data[i].baseBlocks[j].imgs.poster.images[0]+'"/><div class="everyAllBorder"></div><div class="everyAllInfo">使用津贴再减<span>'+action_this.params.allowance+'</span>元</div><div class="everyAllWarm">按【确定键】看详情购买</div></div>';
                        }else{
                        	liListItems += '<div class="everyAllowanceLi coocaabtn2" taskName="'+data.data[i].baseBlocks[j].title+'" action='+JSON.stringify(JSON.parse(data.data[i].baseBlocks[j].action))+'><img class="everyAllItem" src="'+data.data[i].baseBlocks[j].imgs.poster.images[0]+'"/><div class="everyAllBorder"></div><div class="everyAllInfo">领取津贴再减<span>'+action_this.params.allowance+'</span>元</div><div class="everyAllWarm">按【确定键】看详情购买</div></div>';
                        }
					}
				}
				liListItems += '<div class="everyAllowanceLi coocaabtn2" taskName="查看更多商品"><img class="everyAllItem" src="http://sky.fs.skysrt.com/statics/webvip/webapp/418/images/more.jpg"/><div class="everyAllBorder"></div><div class="everyAllWarm">按【确定键】看详情购买</div></div>';
				$("#everyAllowanceUl").append(liListItems);
				for (var k=0;k<$(".everyAllowanceLi").length;k++) {
					var curBtnId = "myAllowance" + k;
					$(".everyAllowanceLi:eq("+k+")").attr("id",curBtnId);
					if (k>1&&(k%5==0)) {
						var upBtnId = "#myAllowance" + (k-5);
						$(".everyAllowanceLi:eq("+k+")").attr("upTarget",upBtnId);
					}
				}
            }else{
            	console.log("获取信息出错");
            }
        },
        error: function(error) {
            console.log("-----------访问失败---------" + JSON.stringify(error));
        },
        complete: function(XMLHttpRequest, status) {　　　　
			if(status == 'timeout') {　　　　　
				ajaxTimeoutOne.abort();　　　　
			}
        	if (loginstatus == "true") {
				$("#loginbox").css("display","none");
				$("#notLoginNum").css("display","none");
				$("#LoginedNum").css("display","block");
				if(num == 1){
					map = new coocaakeymap($(".coocaabtn2"), null, "btn-focus", function() {}, function(val) {}, function(obj) {});
				}
			} else{
				console.log("未登录");
				$("#loginbox").css("display","block");
				$("#notLoginNum").css("display","block");
				$("#LoginedNum").css("display","none");
				if(num == 1){
					map = new coocaakeymap($(".coocaabtn2"), null, "btn-focus", function() {}, function(val) {}, function(obj) {});
				}
			}
			initBtnAfter();
        }
    });
}
//我的奖品
function getMyAwards(num) {
    console.log(macAddress + "--" + TVchip + "--" + TVmodel + "--" + emmcId + "--" + activityId);
    console.log(access_token + "--" + cOpenId + "--" + nick_name + "--" + actionId);
    $("#myAwardBox").css("display","none");
    $("#hasAwardLine").css("display","none");
    $("#noAwardBox1").css("display","none");
    $("#noAwardBox2").css("display","none");
    var startTime = new Date().getTime();
    var ajaxTimeoutOne = $.ajax({
        type: "get",
        async: true,
        timeout: 10000,
        dataType: 'json',
        url: adressIp + "/building/ludo/u-award",
        data: {
        	"id" : actionId,
        	"cUDID": activityId,
        	"MAC": macAddress,
        	"cModel": TVmodel,
        	"cChip": TVchip
        },
        success: function(data) {
            _czc.push(['_trackEvent', '418活动', "我的奖品信息返回时长", '', (new Date().getTime()-startTime) ,'']);
            console.log(JSON.stringify(data));
            if (data.code == 50100) {
                if (data.data == undefined){
                    data.data = [];
                }
                console.log(data.data.length);
                if (data.data.length == 0) {
                    if(num == 3){
                        console.log("津贴为0"+loginstatus);
                        $("#homeAllowanceNum").html("0");
                        $("#allowanceNum").html("0");
                        $("#myallowanceNum").html("0");
                        return;
                    }
                    console.log("没有奖品");
                    console.log(gameStatus);
                    if (gameStatus == 3) {
                        console.log("没有奖品+活动已结束");
                        $("#noAwardBox2").css("display", "block");
                        map = new coocaakeymap($(".coocaa_btn2"), document.getElementById("noAwardBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
                    } else {
                        console.log("没有奖品+活动未结束");
                        $("#noAwardBox1").css("display", "block");
                        map = new coocaakeymap($(".coocaa_btn2"), document.getElementById("noAwardBtn"), "btn-focus", function() {}, function(val) {}, function(obj) {});
                    }
                    notGetAllowanceArray = [];
                }else {
                    var _arr0 = new Array(); //津贴
                    var _arr1 = new Array(); //红包
                    var _arr2 = new Array(); //实体将
                    var _arr3 = new Array(); //特价产品包
                    var _arr4 = new Array(); //金币
                    notGetAllowanceArray = [];
                    for (var i = 0; i < data.data.length; i++) {
                        var _time = data.data[i].awardTime;
                        _time = _time.substr(0, 10);
                        var objItem = {
                            "awardName": data.data[i].awardName,
                            "awardTime": _time,
                            "awardType": data.data[i].awardTypeId,
                            "awardUrl": data.data[i].awardUrl,
                            "state": data.data[i].awardExchangeFlag,
                            "userkeyId": data.data[i].userKeyId,
                            "awardId": data.data[i].awardId,
                            "rememberId": data.data[i].lotteryRememberId,
                            "lotteryActiveId": data.data[i].lotteryActiveId,
                        }
                        if (data.data[i].awardTypeId == "17") {
                            //购物津贴
                            objItem.price = data.data[i].awardInfo.price;
                            _arr0.push(objItem);
                            if(data.data[i].awardExchangeFlag == "0"){
                            	notGetAllowanceArray.push(objItem);
                            }
                        } else if (data.data[i].awardTypeId == "7") {
                            objItem.redNumber = data.data[i].awardInfo.bonus;
                            _arr1.push(objItem);
                        } else if (data.data[i].awardTypeId == "2") {
                            if (data.data[i].awardExchangeFlag == 1) {
                                if (data.data[i].addressEntity.province == data.data[i].addressEntity.city) {
                                    objItem.awardAddress = data.data[i].addressEntity.city + data.data[i].addressEntity.area + data.data[i].addressEntity.address;
                                } else {
                                    objItem.awardAddress = data.data[i].addressEntity.province + data.data[i].addressEntity.city + data.data[i].addressEntity.area + data.data[i].addressEntity.address;
                                }
                                objItem.userPhone = data.data[i].addressEntity.userPhone;
                                objItem.userName = data.data[i].addressEntity.userName;
                            }
                            _arr2.push(objItem);
                        } else if (data.data[i].awardTypeId == "13") {
                        	objItem.vipType = data.data[i].awardInfo.vipType;
                            objItem.vipId = data.data[i].awardInfo.id;
                            _arr3.push(objItem);
                        } else if (data.data[i].awardTypeId == "19") {
                        	console.log(JSON.stringify(data.data[i]));
                        	objItem.coinNumber = data.data[i].awardInfo.coinNum;
                            _arr4.push(objItem);
                        }
                    }
                    if(num == 3&&_arr0.length!=0){
                        console.log("有津贴"+loginstatus);
                        var allMoney = 0;
                        for (var i = 0; i < _arr0.length; i++) {
                        	//allMoney += toDecimal(_arr0[i].price);
                            if (_arr0[i].state == 0) {
                                allMoney += toDecimal(_arr0[i].price);
                            }
                        }
                        allMoney = toDecimal(allMoney);
                        console.log(allMoney);
                        changeAllowanceNum(allMoney);
                        return;
                    }
                    if (_arr0.length + _arr1.length + _arr2.length + _arr3.length + _arr4.length == 0) {
                        console.log("没有奖品");
                        if (gameStatus == 3) {
                            console.log("没有奖品+活动已结束");
                            $("#noAwardBox2").css("display", "block");
                            map = new coocaakeymap($(".coocaa_btn2"), document.getElementById("noAwardBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
                        } else {
                            console.log("没有奖品+活动未结束");
                            $("#noAwardBox1").css("display", "block");
                            map = new coocaakeymap($(".coocaa_btn2"), document.getElementById("noAwardBtn"), "btn-focus", function() {}, function(val) {}, function(obj) {});
                        }
                    } else {
                        console.log("有奖品"+_arr2.length);
                        document.getElementById("redTabs").innerHTML = '';
                        document.getElementById("entityTabs").innerHTML = '';
                        document.getElementById("packageTabs").innerHTML = '';
                        document.getElementById("goldcoinTabs").innerHTML = '';
                        showMyAward(_arr0, _arr1, _arr2, _arr3, _arr4, num);
                    }
                }
            } else {
                console.log("data.code != 50100");
            }
        },
        error: function() {
            console.log("-----------------------error");
        },
        complete: function(XMLHttpRequest, status) {
            console.log("-------------complete------------------" + status);
            if (status == 'timeout') {
                ajaxTimeoutOne.abort();
            }
        }
    });
}
//生成我的奖品
function showMyAward(arr0, arr1, arr2, arr3, arr4, num) {
    console.log(JSON.stringify(arr0));
    console.log(JSON.stringify(arr1));
    console.log(JSON.stringify(arr2));
    console.log(JSON.stringify(arr3));
    console.log(JSON.stringify(arr4));
    $("#myAwardBox").css("display", "block");
    $("#hasAwardLine").css("display", "block");
    if (arr0.length != 0) {
    	$("#allowanceBox").css("display", "inline-block");
        var allMoney = 0;
        for (var i = 0; i < arr0.length; i++) {
        	//allMoney += toDecimal(arr0[i].price);
            if (arr0[i].state == 0) {
       			allMoney += toDecimal(arr0[i].price);	
            }
        }
        allMoney = toDecimal(allMoney);
        console.log(allMoney);
        if(loginstatus == "false"){
        	changeAllowanceNum(allMoney);
            if (allMoney != 0) {
		        $("#allowanceAward").attr('awardType', arr0[0].awardType);
		        $("#allowanceAward").attr('awardState', 0);
            }
        }else{
        	selectMyAllowanceNum();
        }
    }
    if (arr1.length != 0) {
        $("#redBox").css("display", "inline-block");
        var _cardRedNum = 0; //记录已领取的红包总额
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i].state == 1) {
            	console.log(toDecimal(arr1[i].redNumber));
            	console.log(typeof(toDecimal(arr1[i].redNumber)));
                _cardRedNum += toDecimal(arr1[i].redNumber);
            } else if (arr1[i].state == 0) {
                var redDiv = document.createElement("div");
                redDiv.setAttribute('id', 'redAward' + i);
                redDiv.setAttribute('awardType', arr1[i].awardType);
                redDiv.setAttribute('awardState', arr1[i].state);
                redDiv.setAttribute('rememberId', arr1[i].rememberId);
                redDiv.setAttribute('userkeyId', arr1[i].userkeyId);
                redDiv.setAttribute('awardName', arr1[i].awardName);
                redDiv.setAttribute('awardTime', arr1[i].awardTime);
                redDiv.setAttribute('redNumber', arr1[i].redNumber);
                redDiv.setAttribute('lotteryActiveId', arr1[i].lotteryActiveId);
                redDiv.setAttribute('class', 'myAwards redAwardNotGot coocaa_btn2');
                if(arr1[i].lotteryActiveId == actionId){
                	 redDiv.innerHTML = '<div class="myawardsImg1"></div><div class="myawardsBorder"></div><div class="redBtn">待领取</div><div class="redUnit">元</div><div class="redMoney">'+arr1[i].redNumber+'</div><div class="cumulative">累计</div>';
                }else{
                	 redDiv.innerHTML = '<div class="myawardsImg2"></div><div class="myawardsBorder"></div><div class="redBtn">待领取</div><div class="redUnit">元</div><div class="redMoney">'+arr1[i].redNumber+'</div><div class="cumulative">累计</div>';
                }
                $("#redTabs").append(redDiv);
            }
        }
        console.log(_cardRedNum);
        _cardRedNum = toDecimal(_cardRedNum);
        if (_cardRedNum != 0) {
            var redDiv = document.createElement("div");
            redDiv.setAttribute('id', 'redAwardHasGot');
            redDiv.setAttribute('awardType', 7);
            redDiv.setAttribute('awardState', 1);
            redDiv.setAttribute('class', 'myAwards coocaa_btn2');
            redDiv.innerHTML = '<div class="myawardsImg"></div><div class="myawardsBorder"></div><div class="redBtn">已领取</div><div class="redUnit">元</div><div class="redMoney">'+_cardRedNum+'</div><div class="cumulative">累计</div>';
            $("#redTabs").append(redDiv);
            $("#redHasGetNum").html(_cardRedNum);
        }
    }
    if (arr2.length != 0) {
        $("#entityBox").css("display", "inline-block");
        for (var i = 0; i < arr2.length; i++) {
            var entityDiv = document.createElement("div");
            entityDiv.setAttribute('id', 'entityAward' + i);
            entityDiv.setAttribute('awardState', arr2[i].state);
            entityDiv.setAttribute('awardType', arr2[i].awardType);
            entityDiv.setAttribute('rememberId', arr2[i].rememberId);
            entityDiv.setAttribute('userkeyId', arr2[i].userkeyId);
            entityDiv.setAttribute('awardName', arr2[i].awardName);
            entityDiv.setAttribute('awardTime', arr2[i].awardTime);
            entityDiv.setAttribute('lotteryActiveId', arr2[i].lotteryActiveId);
            entityDiv.setAttribute('class', 'myAwards coocaa_btn2');
			
            if (arr2[i].state == 0) {
                entityDiv.innerHTML = '<div class="myawardsImg"><img class="entityImg" src="'+arr2[i].awardUrl+'"/><div class="entityName"><div class="entitySon">'+arr2[i].awardName+'</div></div><div class="entityStatus notget"></div></div><div class="myawardsBorder"></div>';
            } else {
                entityDiv.setAttribute('awardAddress', arr2[i].awardAddress);
                entityDiv.setAttribute('userPhone', arr2[i].userPhone);
                entityDiv.setAttribute('userName', arr2[i].userName);
				entityDiv.innerHTML = '<div class="myawardsImg"><img class="entityImg" src="'+arr2[i].awardUrl+'"/><div class="entityName"><div class="entitySon">'+arr2[i].awardName+'</div></div><div class="entityStatus hasgot"></div></div><div class="myawardsBorder"></div>';
            }
            $("#entityTabs").append(entityDiv);
        }
    }
    if (arr3.length != 0) {
        $("#packageBox").css("display", "inline-block");
        for (var i = 0; i < arr3.length; i++) {
            var packageDiv = document.createElement("div");
            packageDiv.setAttribute('id', 'packageAward' + i);
            packageDiv.setAttribute('awardType', arr3[i].awardType);
            packageDiv.setAttribute('awardState', arr3[i].state);
            packageDiv.setAttribute('rememberId', arr3[i].rememberId);
            packageDiv.setAttribute('userkeyId', arr3[i].userkeyId);
            packageDiv.setAttribute('awardName', arr3[i].awardName);
            packageDiv.setAttribute('awardTime', arr3[i].awardTime);
            packageDiv.setAttribute('vipType', arr3[i].vipType);
            packageDiv.setAttribute('vipId', arr3[i].vipId);
            packageDiv.setAttribute('awardUrl', arr3[i].awardUrl);
            packageDiv.setAttribute('lotteryActiveId', arr3[i].lotteryActiveId);
            packageDiv.setAttribute('class', 'myAwards coocaa_btn2');
            //packageDiv.innerHTML = '<div class="myawardsImg"><img class="packageImg" src="'+arr3[i].awardUrl+'"/><div class="packageName"><div class="packageSon">'+arr3[i].awardName+'</div></div><div class="packageStatus hasgot"></div></div><div class="myawardsBorder"></div>';
           	if (arr3[i].vipType == "product") {
           		packageDiv.innerHTML = '<div class="myawardsImg"><div class="packageImg packageImg1" style="background-image: url('+arr3[i].awardUrl+')"></div><div class="packageName"><div class="packageSon">'+arr3[i].awardName+'</div></div><div class="packageStatus hasgot"></div></div><div class="myawardsBorder"></div>';
           	} else if(arr3[i].vipType == "yinhe" ||arr3[i].vipType == "6" ){
           		console.log("特权-影视");
           		packageDiv.innerHTML = '<div class="myawardsImg"><div class="packageImg packageImg2"></div><div class="packageName"><div class="packageSon">'+arr3[i].awardName+'</div></div><div class="packageStatus hasgot"></div></div><div class="myawardsBorder"></div>';
           	} else if(arr3[i].vipType == "jiaoyuvip"){
           		console.log("特权-教育");
           		packageDiv.innerHTML = '<div class="myawardsImg"><div class="packageImg packageImg3"></div><div class="packageName"><div class="packageSon">'+arr3[i].awardName+'</div></div><div class="packageStatus hasgot"></div></div><div class="myawardsBorder"></div>';
           	} else if(arr3[i].vipType == "shaoervip"){
           		console.log("特权-少儿");
           		packageDiv.innerHTML = '<div class="myawardsImg"><div class="packageImg packageImg4"></div><div class="packageName"><div class="packageSon">'+arr3[i].awardName+'</div></div><div class="packageStatus hasgot"></div></div><div class="myawardsBorder"></div>';
           	}
            $("#packageTabs").append(packageDiv);
        }
    }
    if (arr4.length != 0) {
        $("#goldcoinBox").css("display", "inline-block");
        var allGoldCion1 = 0;//未领取总额
        var allGoldCion2 = 0;//已领取总额
        var KNumber = 0;//记录最后一个未领取金币奖励的索引
        for (var i = 0; i < arr4.length; i++) {
            if (arr4[i].state == 0) {
            	KNumber = i;
            	allGoldCion1 += toDecimal(arr4[i].coinNumber);
            }else{
            	allGoldCion2 += toDecimal(arr4[i].coinNumber);
            }
        }
        allGoldCion1 = toDecimal(allGoldCion1);
        allGoldCion2 = toDecimal(allGoldCion2);
        if (allGoldCion1 != 0) {
        	console.log(KNumber);
        	var goldcoinDiv = document.createElement("div");
            goldcoinDiv.setAttribute('id', 'goldcoinNotGot');
            goldcoinDiv.setAttribute('awardId', arr4[KNumber].awardId);
            goldcoinDiv.setAttribute('awardType', arr4[KNumber].awardType);
            goldcoinDiv.setAttribute('awardState', arr4[KNumber].state);
            goldcoinDiv.setAttribute('rememberId', arr4[KNumber].rememberId);
            goldcoinDiv.setAttribute('userkeyId', arr4[KNumber].userkeyId);
            goldcoinDiv.setAttribute('awardName', arr4[KNumber].awardName);
            goldcoinDiv.setAttribute('awardTime', arr4[KNumber].awardTime);
            goldcoinDiv.setAttribute('lotteryActiveId', arr4[KNumber].lotteryActiveId);
            goldcoinDiv.setAttribute('class', 'myAwards coocaa_btn2');
        	
            goldcoinDiv.innerHTML = '<div class="myawardsImg"><div class="goldcoinNum">'+allGoldCion1+'</div><div class="goldcoinStatus notget"></div></div><div class="myawardsBorder"></div>';
            $("#goldcoinTabs").append(goldcoinDiv);
        }
        if (allGoldCion2 != 0) {
            var goldcoinDiv2 = document.createElement("div");
            goldcoinDiv2.setAttribute('id', 'goldcoinHasGot');
            goldcoinDiv2.setAttribute('awardType', 19);
            goldcoinDiv2.setAttribute('awardState', 1);
            goldcoinDiv2.setAttribute('class', 'myAwards coocaa_btn2');
            goldcoinDiv2.innerHTML = '<div class="myawardsImg"><div class="goldcoinNum">'+allGoldCion2+'</div><div class="goldcoinStatus hasgot"></div></div><div class="myawardsBorder"></div>';
            $("#goldcoinTabs").append(goldcoinDiv2);
        }
    }
    initBtnAfter();
    if (num == 2) {
    	if (_curHomeBtn==""||_curHomeBtn==null) {
			$(".myAwards:eq(0)").trigger("itemFocus");
		} else{
			console.log(_curHomeBtn);
			console.log($("#goldcoinNotGot").length);
			console.log($(".redAwardNotGot").length);
			if ($("#"+_curHomeBtn).length == 0) {
				if (_curHomeBtn == "goldcoinNotGot") {
					_curHomeBtn = "goldcoinHasGot";
				} else{
					_curHomeBtn = "redAwardHasGot";
				}
			}
	    	console.log(_curHomeBtn);
			$("#"+_curHomeBtn).trigger("itemFocus");
		}
	    map = new coocaakeymap($(".coocaa_btn2"), document.getElementById(_curHomeBtn), "btn-focus", function() {}, function(val) {}, function(obj) {});
    }
}

function handleTheDrawData(obj1,obj2){
	if (obj2 == "" || obj2 == null ) {
		console.log("抽到普通奖励");
		showThisAwardDialog(obj1.rememberModel);		
	} else{
		console.log("抽到加速神器");
		//当前前进步数
		var curNum = obj2.diceNumber;
		$("#speedNum").html(curNum);
        sentLog("okr_web_page_show", '{"page_name":"活动弹窗","activity_name":"418活动","page_type":"加速卡toast曝光"}');
        _czc.push(['_trackEvent', '418活动', "加速卡toast曝光", '曝光', '', '']);
		showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/jiasushenqi.png",2000);
		setTimeout(function(){mapMove(obj2,true)},2000);
	}
}
function showThisAwardDialog(awardObj) {
    console.log(JSON.stringify(awardObj));
    var _cawardTime = awardObj.awardTime; //获奖时间
    _cawardTime = _cawardTime.substr(0, 10);
    $("#otherBtn2").attr("activeId", awardObj.lotteryActiveId);
    $("#otherBtn2").attr("awardId", awardObj.awardId);
    $("#otherBtn2").attr("rememberId", awardObj.lotteryRememberId);
    $("#otherBtn2").attr("userKeyId", awardObj.userKeyId);
    $("#otherBtn2").attr("awardTypeId", awardObj.awardTypeId);
    $("#otherBtn2").attr("awardName", awardObj.awardName);
    $("#otherBtn2").attr("awardTime", _cawardTime);
    $("#otherBtn2").attr("awardUrl", awardObj.awardUrl);
    
    $(".secondDialog").css("display", "none");
    
    if (awardObj.awardTypeId == 2) {
        console.log("抽到实物奖");
        $("#dialogPage").css("display", "block");
        $("#getOtherAward1").css("display", "block");
        $("#otherAwardName1").html('恭喜获得'+awardObj.awardName);
        $("#otherBtn1 .btnName").html("继续掷骰子");
        $("#otherBtn2 .btnName").html("立即领取");
        $(".eachAwardStyle").css("display", "none");
        $("#entityAwardBox").css("display", "block");
        $("#entityAwardImg").attr("src",awardObj.awardUrl);
        $("#otherAwardInfo1").css("display", "block");
        if(!capsuleIsStart){
    		console.log("418之前");
    		$("#otherAwardInfo1").css("line-height", "38px");
    		$("#otherAwardInfo1").html("再接再厉！集齐周年卡片4月18日赢千元电视!");	
        }else{
        	$("#otherAwardInfo1").css("line-height", "18px");
        	$("#otherAwardInfo1").html("集418周年卡赢新品电视火热进行中，<br/>再来一次集更多周年卡吧！");
        }
        map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
    	
    	sentLog("okr_web_page_show", '{"page_name":"【大富翁中奖】","activity_name":"418活动","award_type":"实物","award_name":"'+awardObj.awardName+'"}');
        _czc.push(['_trackEvent', '418活动', "【大富翁中奖】", awardObj.awardName, '', '']);
    }
    if (awardObj.awardTypeId == 6) {
    	//判断是418碎片还是418全套
    	console.log(awardObj.awardInfo.focaKey);
    	if (awardObj.awardInfo.focaKey != "lc418") {
    		console.log("抽到418碎片");
    		$("#otherBtn1").attr("awardType","6");
    		$("#dialogPage").css("display", "block");
	        $("#getOtherAward1").css("display", "block");
	        $("#otherAwardName1").html('恭喜获得'+awardObj.awardName);
	        $("#otherBtn1 .btnName").html("继续掷骰子");
	        $("#otherBtn2 .btnName").html("查看我的奖励");
	        $(".eachAwardStyle").css("display", "none");
	        $("#cardAwardBox").css("display", "block");
	        $("#cardAwardImg").attr("src",awardObj.awardUrl);
	        $("#otherAwardInfo1").css("display", "block");
	        if(!capsuleIsStart){
	        	$("#otherAwardInfo1").css("line-height", "38px");
	        	$("#otherAwardInfo1").html("再接再厉！集齐周年卡片4月18日赢新品电视！");
	        }else{
	        	$("#otherAwardInfo1").css("line-height", "18px");
	        	$("#otherAwardInfo1").html("集齐418卡片现在可0元赢新品电视！<br/>再来一次集更多卡片吧~");
	        }
    		map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn1"), "btn-focus", function() {}, function(val) {}, function(obj) {});
    		
    		sentLog("okr_web_page_show", '{"page_name":"【大富翁中奖】","activity_name":"418活动","award_type":"418碎片","award_name":"'+awardObj.awardName+'"}');
        	_czc.push(['_trackEvent', '418活动', "【大富翁中奖】", awardObj.awardName, '', '']);
    	} else{
    		console.log("走完一圈,送418全套");
    		$("#otherBtn3").attr("awardType","6");
    		$("#dialogPage").css("display", "block");
    		$("#getOtherAward2").css("display", "block");
    		$("#otherBtn4").attr("awardTypeId", awardObj.awardTypeId);
    		$("#otherBtn4").attr("awardName", awardObj.awardName);
    		if(!capsuleIsStart){
    			console.log("418之前,展示预约二维码");
//  			$("#otherAwardName2").css("top","57px");
//  			$("#cardAwardInfo1").css("display","block");
    			$("#cardAwardBox1").css("display","block");
    			$("#cardAwardBox2").css("display","none");
    			if (movieSource == "tencent") {
    				$("#cardQrcode").attr("src","http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/tencentqrcode.png");
    			} else{
    				$("#cardQrcode").attr("src","http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/window/yinheqrcode.png");
    			}
    			$("#cardAwardImg1").attr("src",awardObj.awardUrl);
//  			$("#cardAwardInfo2").css("left","200px");
//  			$("#cardAwardInfo2").css("width","255px");
    			$("#cardAwardInfo2").html("当前已拥有"+(cardsNum+1)+"套418周年卡片");
    			$("#cardAwardInfo3").html("继续玩游戏集卡片4月18日0元赢电视");
    			$("#otherBtn4").css("display","none");
    			$("#otherBtn3").css("left","247px");
    			map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn3"), "btn-focus", function() {}, function(val) {}, function(obj) {});
    		}else{
    			console.log("418之后,不展示预约二维码");
//  			$("#otherAwardName2").css("top","70px");
//  			$("#cardAwardInfo1").css("display","none");
    			$("#cardAwardBox2").css("display","block");
    			$("#cardAwardBox1").css("display","none");
    			$("#cardAwardImg2").attr("src",awardObj.awardUrl);
//  			$("#cardAwardInfo2").css("left","125px");
//  			$("#cardAwardInfo2").css("width","420px");
    			$("#cardAwardInfo2").html("当前已拥有"+(cardsNum+1)+"套418周年碎片");
    			$("#cardAwardInfo3").html("快去参与“扭一扭”0元赢电视！");
    			$("#otherBtn4").css("display","block");
    			$("#otherBtn3").css("left","128px");
    			map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn4"), "btn-focus", function() {}, function(val) {}, function(obj) {});
    		}
    		sentLog("okr_web_page_show", '{"page_name":"【大富翁中奖】","activity_name":"418活动","award_type":"418全套","award_name":"'+awardObj.awardName+'"}');
        	_czc.push(['_trackEvent', '418活动', "【大富翁中奖】", awardObj.awardName, '', '']);
            sentLog("okr_web_page_show", '{"page_name":"活动弹窗","activity_name":"418活动","page_type":"418数字卡主动合成弹窗的曝光"}');
            _czc.push(['_trackEvent', '418活动', "418数字卡主动合成弹窗的曝光", '曝光', '', '']);
    	}
    }
    if (awardObj.awardTypeId == 7) {
        console.log("抽到红包");
        $("#dialogPage").css("display", "block");
        $("#getOtherAward1").css("display", "block");
        $("#otherAwardName1").html("恭喜获得"+awardObj.awardName);
        $("#otherBtn1 .btnName").html("继续掷骰子");
        $("#otherBtn2 .btnName").html("领取红包");
        $(".eachAwardStyle").css("display", "none");
        $("#redAwardBox").css("display", "block");
        $("#redAwardImg").attr("src",awardObj.awardUrl);
        $("#otherAwardInfo1").css("display", "block");
        $("#otherBtn2").attr("redNumber", awardObj.awardInfo.bonus);
        $("#otherAwardInfo1").css("line-height", "38px");
        if(awardObj.lotteryActiveId == actionId){
        	$("#otherAwardInfo1").html("当前大富翁红包可领取金额为"+awardObj.awardInfo.bonus+"元,可累计提现哦!");
        }else{
        	$("#otherAwardInfo1").html("当前扭一扭红包可领取金额为"+awardObj.awardInfo.bonus+"元,可累计提现哦!");
        }
        map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
    	
    	sentLog("okr_web_page_show", '{"page_name":"【大富翁中奖】","activity_name":"418活动","award_type":"红包","award_name":"'+awardObj.awardName+'"}');
        _czc.push(['_trackEvent', '418活动', "【大富翁中奖】", awardObj.awardName, '', '']);
    }
    if(awardObj.awardTypeId == 13){
    	console.log("抽到特权购买奖品");
    	var vipType = awardObj.awardInfo.vipType;
    	var vipid = awardObj.awardInfo.id;
    	var vipImgUrl = awardObj.awardUrl;
    	var packurl = "";
    	var _award_type = "";
    	if(vipType == "product"){
    		console.log("抽中特权-购物");
    		$("#otherBtn2").attr("awardGoodsId", vipid);
    		$("#otherBtn2").attr("awardVIPType", vipType);
    		_award_type = "特权-购物";
    		
    		$("#dialogPage").css("display", "block");
	        $("#getOtherAward1").css("display", "block");
	        $("#otherAwardName1").html("恭喜获得"+awardObj.awardName);
	        $("#otherBtn1 .btnName").html("继续掷骰子");
	        $("#otherBtn2 .btnName").html("领取折扣");
	        $(".eachAwardStyle").css("display", "none");
	        $("#vipAwardBox").css("display", "block");
	        $("#vipAwardImg").attr("src",vipImgUrl);
	        $("#otherAwardInfo1").css("display", "block");
	        $("#otherAwardInfo1").css("line-height", "38px");
    		$("#otherAwardInfo1").html("*商品已放入【我的奖励】，该特权价格不可叠加津贴使用~");
    		map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
    	}else{
    		if(vipType == "yinhe"||vipType == "6"){
    			console.log("抽中特权-影视");
    			$("#dialogPage").css("display", "none");
                packurl = vipstartUrl + '?data={"product_id":"'+vipid+'","activity_id":"'+actionId+'","activity_name":"418活动","bg_url":"'+vipImgUrl+'"}';
    			_award_type = "特权-影视";
    		}
    		if(vipType == "jiaoyuvip"){
	    		console.log("抽中特权-教育");
	    		$("#dialogPage").css("display", "none");
                packurl = vipstartUrl + '?data={"product_id":"'+vipid+'","activity_id":"'+actionId+'","activity_name":"418活动","bg_url":"'+vipImgUrl+'"}';
	    		_award_type = "特权-教育";
    		}
    		if(vipType == "shaoervip"){
	    		console.log("抽中特权-少儿");
	    		$("#dialogPage").css("display", "none");
                packurl = vipstartUrl + '?data={"product_id":"'+vipid+'","activity_id":"'+actionId+'","activity_name":"418活动","bg_url":"'+vipImgUrl+'"}';
	    		_award_type = "特权-少儿";
    		}
    		coocaaosapi.startNewBrowser(packurl, function() {}, function() {});
    	}
    	sentLog("okr_web_page_show", '{"page_name":"【大富翁中奖】","activity_name":"418活动","award_type":"'+_award_type+'","goods_id":"'+awardObj.awardInfo.id+'","award_name":"'+awardObj.awardName+'"}');
        _czc.push(['_trackEvent', '418活动', "【大富翁中奖】", awardObj.awardName, '', '']);
    }
    if (awardObj.awardTypeId == 17) {
        console.log("抽到津贴");
        $("#dialogPage").css("display", "block");
        $("#getOtherAward1").css("display", "block");
        $("#otherAwardName1").html("恭喜获得"+awardObj.awardName);
        $("#otherBtn1 .btnName").html("继续掷骰子");
        $("#otherBtn2 .btnName").html("立即使用");
        $(".eachAwardStyle").css("display", "none");
        $("#allAwardBox").css("display", "block");
        $("#allowAwardImg").attr("src",awardObj.awardUrl);
        $("#otherAwardInfo1").css("display", "none");
        $("#otherAwardInfo1").html("  ");
        map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
        if (loginstatus == "true") {
        	sendPrizes(awardObj.awardName, awardObj.awardId, awardObj.lotteryRememberId, awardObj.userKeyId, awardObj.awardTypeId, awardObj.lotteryActiveId, movieSource, 1);
        } else{
        	getMyAwards(3);
        }
        sentLog("okr_web_page_show", '{"page_name":"【大富翁中奖】","activity_name":"418活动","award_type":"津贴","award_name":"'+awardObj.awardName+'")}');
        _czc.push(['_trackEvent', '418活动', "【大富翁中奖】", awardObj.awardName, '', '']);
    }
    if(awardObj.awardTypeId == 19){
    	console.log("抽到金币");
    	$("#dialogPage").css("display", "block");
        $("#getOtherAward1").css("display", "block");
        $("#otherAwardName1").html("恭喜获得"+awardObj.awardName);
        $("#otherBtn1 .btnName").html("继续掷骰子");
        $("#otherBtn2 .btnName").html("去兑换");
        $(".eachAwardStyle").css("display", "none");
        $("#coinAwardBox").css("display", "block");
    	$("#coinAwardImg").attr("src",awardObj.awardUrl);
        $("#otherAwardInfo1").css("display", "block");
        $("#otherAwardInfo1").css("line-height", "38px");
        $("#otherAwardInfo1").html("金币可在狐狸乐园兑换奖励/大转盘抽奖哦!");
        
        if (loginstatus == "true") {
        	sendPrizes(awardObj.awardName, awardObj.awardId, awardObj.lotteryRememberId, awardObj.userKeyId, awardObj.awardTypeId, awardObj.lotteryActiveId, movieSource, 1);
        }
        
        map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
    	sentLog("okr_web_page_show", '{"page_name":"【大富翁中奖】","activity_name":"418活动","award_type":"金币","award_name":"'+awardObj.awardName+'")}');
        _czc.push(['_trackEvent', '418活动', "【大富翁中奖】", awardObj.awardName, '', '']);
    }
}
//领取奖励
function otherBtn2ClickFunc() {
    var _kActiveId = $("#otherBtn2").attr("activeId");
    var _kAwardId = $("#otherBtn2").attr("awardId");
    var _kRememberId = $("#otherBtn2").attr("rememberId");
    var _kUserKeyId = $("#otherBtn2").attr("userKeyId");
    var _kAwardTypeId = $("#otherBtn2").attr("awardTypeId");
    var _kAwardName = $("#otherBtn2").attr("awardName");
    var _kAwardTime = $("#otherBtn2").attr("awardTime");
    var _kAwardUrl = $("#otherBtn2").attr("awardUrl");
	
	console.log(_kAwardTypeId);
    if (_kAwardTypeId == 2) {
        if (loginstatus == "false") {
            console.log("领取实物奖励+启登录");
            startAndSendLog();
        } else {
            console.log("领取实物奖励+展示二维码");
            $(".secondDialog").css("display", "none");
            $("#otherNotGet").css("display", "block");
            $("#otherInfo1").html("奖品名称:&nbsp;&nbsp;" + _kAwardName);
            $("#otherInfo2").html("发放时间:&nbsp;&nbsp;" + _kAwardTime);
            map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherInfo3"), "btn-focus", function() {}, function(val) {}, function(obj) {});
            var enstr = enurl + "activeId=" + _kActiveId + "&rememberId=" + _kRememberId + "&userKeyId=" + _kUserKeyId + "&access_token=" + access_token;
            drawQrcode("otherQrcode", enstr, 125);
        }
    }
    if (_kAwardTypeId == 6){
    	console.log("领取卡片奖励+查看我的奖励");
    	$("#getOtherAward1").css("display","none");
    	$("#dialogPage").css("display","none");
    	$("#mainbox").css("display","none");
    	$("#myAwardPage").css("display","block");
    	sentLog("okr_web_page_show", '{"page_name":"我的奖励页面","activity_name":"418活动"}');
		_czc.push(['_trackEvent', '418活动', '我的奖励页面', '曝光', '', '']);
    	_curHomeBtn = "";
    	getMyAwards(2);
    }
    if (_kAwardTypeId == 7) {
        var _redNumber = $("#otherBtn2").attr("redNumber");
        console.log(_redNumber);
        if (loginstatus == "false") {
            console.log("领取红包奖励+启登录");
            startAndSendLog();
        } else {
            console.log("领取红包奖励+展示二维码");
            $(".secondDialog").css("display", "none");
            $("#redNotGet").css("display", "block");
            if(_kActiveId == actionId){
	        	$("#redStrongPart").html("大富翁");
	        }else{
	        	$("#redStrongPart").html("扭一扭");
	        }
            $("#redContent").html('<span style="font-size: 65px;">' + _redNumber + '</span>元');
            console.log(_kActiveId + "--" + _kRememberId + "--" + _kUserKeyId);
            getRedPacketsQrcode(_kActiveId, _kRememberId, _kUserKeyId, "redQrcode", 175, 175);
            map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("redQrcode"), "btn-focus", function() {}, function(val) {}, function(obj) {});
        }
    }
    if (_kAwardTypeId == 13) {
    	console.log("点击了特价商品的领取折扣");
    	var awardGoodsId = $("#otherBtn2").attr("awardGoodsId");
    	console.log(awardGoodsId);
        sentLog("okr_web_button_click", '{"page_name":"大富翁活动","activity_name":"418活动","button_name":"领取折扣","award_type":"特权-商品","goods_id":"'+awardGoodsId+'","award_name":"'+_kAwardName+'"}');
        _czc.push(['_trackEvent', '418活动', "大富翁活动", "领取折扣", '', '']);
    	coocaaosapi.startAppShopDetail(awardGoodsId, function() {}, function() {});
    }
    if (_kAwardTypeId == 17) {
        console.log("点击了津贴奖励的马上领取");
        if (loginstatus == "false") {
            console.log("领取津贴奖励+启登录");
            startAndSendLog();
        } else {
			getAllowanceInfo(1);//1表示需要初始化焦点
			$(".secondDialog").css("display", "none");
			$("#dialogPage").css("display", "none");
	        $("#mainbox").css("display", "none");
	        $("#allowancePage").css("display", "block");
	        sentLog("okr_web_page_show", '{"page_name":"我的津贴页面","activity_name":"418活动"}');
			_czc.push(['_trackEvent', '418活动', '我的津贴页面', '曝光', '', '']);
	        getAllNotGetAllowance();
	        if(isGetAwardAfterLogined == "true"){
	        	console.log("登录后领取津贴");
	        	sendPrizes(_kAwardName, _kAwardId, _kRememberId, _kUserKeyId, _kAwardTypeId, _kActiveId, movieSource, 1);
	        	isGetAwardAfterLogined = "false";
	        }
        }
    }
    if (_kAwardTypeId == 19) {
        console.log("点击了金币的去兑换");
        if (loginstatus == "false") {
            console.log("领取津贴奖励+启登录");
            startAndSendLog();
        } else {
        	if(isGetAwardAfterLogined == "true"){
	        	console.log("登录后领取金币");
	        	sendPrizes(_kAwardName, _kAwardId, _kRememberId, _kUserKeyId, _kAwardTypeId, _kActiveId, movieSource, 1);
	        	isGetAwardAfterLogined = "false";
	        }
        	var coinUrl = 'https://goldshop.coocaa.com/';
        	coocaaosapi.startNewBrowser5(coinUrl, function() {}, function() {});
        }
    }
}
//领取优惠券并跳转津贴页面
function sendPrizes(oAwardName, oAwardId, oRememberId, oUserKeyId, oType, oActiveId, oQsource, pagestate) {
    console.log(oAwardId + "--" + oRememberId + "--" + oUserKeyId + "--" + oType + "--" + oActiveId);
    if(oQsource != "tencent") {
        oQsource = "iqiyi";
    }
    console.log(oQsource);
    var ajaxTimeoutFive = $.ajax({
        type: "GET",
        async: true,
        timeout: 5000,
        dataType: 'jsonp',
        jsonp: "callback",
        url: adressIp + "/v3/lottery/verify/receive",
        data: {
            "cUDID": activityId,
            "activeId": oActiveId,
            "awardId": oAwardId,
            "rememberId": oRememberId,
            "awardTypeId": oType,
            "userKeyId": oUserKeyId,
            "MAC": macAddress,
            "cOpenId": cOpenId,
            "source": oQsource
        },
        success: function(data) {
            console.log(JSON.stringify(data));
            if(data.code == "50100") {
                console.log("领取成功");
                if(oType == 17){
                	console.log("领取津贴奖励");
	                selectMyAllowanceNum();
	                console.log(isGetAwardAfterLogined);
	                sentLog("okr_web_clicked_result", '{"page_name":"领取奖品","activity_name":"418活动","award_type":"津贴","award_name":"'+oAwardName+'","receive_result":"领取成功"}');
                	_czc.push(['_trackEvent', '418活动', '领取津贴奖品', '领取津贴成功', '', '']);
                }else if(oType == 19){
                	console.log("领取金币奖励+跳转");
                	sentLog("okr_web_clicked_result", '{"page_name":"领取奖品","activity_name":"418活动","award_type":"金币","award_name":"'+oAwardName+'","receive_result":"领取成功"}');
                	_czc.push(['_trackEvent', '418活动', '领取金币奖品', '领取金币成功', '', '']);
                }
            } else {
                console.log("领取失败");
				if(oType == 17&&pagestate != 2){
					console.log("领取津贴奖励失败");
					sentLog("okr_web_clicked_result", '{"page_name":"领取奖品","activity_name":"418活动","award_type":"津贴","award_name":"'+oAwardName+'","receive_result":"领取失败"}');
                	_czc.push(['_trackEvent', '418活动', '领取津贴奖品', '领取津贴失败', '', '']);
				}else if(oType == 19&&pagestate != 2){
                	console.log("领取金币奖励失败");
                	sentLog("okr_web_clicked_result", '{"page_name":"领取奖品","activity_name":"418活动","award_type":"金币","award_name":"'+oAwardName+'","receive_result":"领取失败"}');
                	_czc.push(['_trackEvent', '418活动', '领取金币奖品', '领取金币失败', '', '']);
                }
            }
        },
        error: function() {
            console.log("领取失败");
            if (oType == 17) {
            	if (pagestate != 2) {
					$("#sendPrizeFail").css("display", "block");
					setTimeout(function(){
						$("#sendPrizeFail").css("display", "none");
					},3000);
				}
            }
            if(oType == 17&&pagestate != 2){
                console.log("领取津贴奖励失败");
                sentLog("okr_web_clicked_result", '{"page_name":"领取奖品","activity_name":"418活动","award_type":"津贴","award_name":"'+oAwardName+'","receive_result":"领取失败"}');
                _czc.push(['_trackEvent', '418活动', '领取津贴奖品', '领取津贴失败', '', '']);
            }else if(oType == 19&&pagestate != 2){
                console.log("领取金币奖励失败");
                sentLog("okr_web_clicked_result", '{"page_name":"领取奖品","activity_name":"418活动","award_type":"金币","award_name":"'+oAwardName+'","receive_result":"领取失败"}');
                _czc.push(['_trackEvent', '418活动', '领取金币奖品', '领取金币失败', '', '']);
            }
        },
        complete: function(XMLHttpRequest, status) {
            console.log("-------------complete------------------" + status);
            if(status == 'timeout') {
                ajaxTimeoutFive.abort();
            }
        }
    });
}
//获取未领取津贴并领取
function getAllNotGetAllowance(){
    console.log(JSON.stringify(notGetAllowanceArray));
    if (notGetAllowanceArray.length == 0) {
        selectMyAllowanceNum();
    } else{
        notGetAllowanceIndex = notGetAllowanceArray.length - 1;
        for(var j=0;j<notGetAllowanceArray.length; j++){
            setTimeout(function(){
                console.log(notGetAllowanceIndex);
                var allowAwardName = notGetAllowanceArray[notGetAllowanceIndex].awardName;
                var allowAwardId = notGetAllowanceArray[notGetAllowanceIndex].awardId;
                var allowRememberId = notGetAllowanceArray[notGetAllowanceIndex].rememberId;
                var allowUserKeyId = notGetAllowanceArray[notGetAllowanceIndex].userkeyId;
                var allowAwardTypeId = notGetAllowanceArray[notGetAllowanceIndex].awardType;
                var allowActiveId = notGetAllowanceArray[notGetAllowanceIndex].lotteryActiveId;
                if (notGetAllowanceIndex > 1) {
                    notGetAllowanceIndex = notGetAllowanceIndex - 1;
                } else{
                    notGetAllowanceIndex = 0;
                }
                console.log(allowAwardId+"--"+allowRememberId+"--"+allowUserKeyId+"--"+allowAwardTypeId+"--"+allowActiveId);
                sendPrizes(allowAwardName,allowAwardId,allowRememberId,allowUserKeyId,allowAwardTypeId,allowActiveId,movieSource,2);
            },100*(j+1));
        }
    }
}
//扭蛋机抽奖接口
function startEggFunc() {
    $.ajax({
        type: "post",
        async: true,
        url: adressIp + "/building/ludo/lottery-buy",
        data: {
        	id: actionId, 
        	capsuleId:capsuleId,
        	cUDID: activityId, 
        	MAC: macAddress, 
        	cModel: TVmodel, 
        	cChip: TVchip, 
        	cHomepageVersion:cAppVersion,
        	cOpenId: cOpenId, 
        	cNickName: nick_name,
        	province:_province,
        	city:_city
        },
        dataType: "json",
        // timeout: 20000,
        success: function(data) {
            console.log("扭蛋返回状态：" + JSON.stringify(data));
            if(data.code == 50100){
                cardsNum = data.data.remainingNumber;
                console.log("---------------------"+cardsNum4+"----------"+cardsNum);
                $("#gameDraw .draw418cl").html(cardsNum);
                $("#gameMap .lc418").html("已集齐"+cardsNum+"套");
                $(".lc4").html((cardsNum4+cardsNum)+"片");
                $(".lc1").html((cardsNum1+cardsNum)+"片");
                $(".lc8").html((cardsNum8+cardsNum)+"片");
                $(".draw4cl").html(cardsNum4+cardsNum);
                $(".draw1cl").html(cardsNum1+cardsNum);
                $(".draw8cl").html(cardsNum8+cardsNum);
                $("#aroundNum").html("X"+cardsNum);
                draw(data.data);
            }else{
            	console.log("扭蛋机抽奖接口出错");
            	showAndHideToast("http://sky.fs.skysrt.com/statics/webvip/webapp/418/main/newtoast/tryagain.png",2000);
            }
        },
        error: function(error) {
            console.log("-----------访问失败---------" + JSON.stringify(error));
        }
    });
}

//扭蛋机抽奖动效
function draw(obj) {
	var cAwardType = obj.awardTypeId;
	for(i = 1; i <= 11; i++) {
		$(".qiu_" + i).removeClass("diaol_" + i);
		$(".qiu_" + i).addClass("wieyi_" + i);
	};
	setTimeout(function() {
		for(i = 1; i <= 11; i++) {
			$(".qiu_" + i).removeClass("wieyi_" + i);
		}
	}, 1500);
	setTimeout(function() {
		console.log(cAwardType);
		if(cAwardType == 2){
			console.log("抽中实物奖");
			$(".zjdl").children("span").addClass("diaL_one");
		}
		if (cAwardType == 7) {
			console.log("抽中实红包奖");
			$(".zjdl").children("span").addClass("diaL_two");
		}
		if (cAwardType == 17) {
			console.log("抽中津贴");
			$(".zjdl").children("span").addClass("diaL_three");
		}
		$(".zjdl").removeClass("none").addClass("dila_Y");
		setTimeout(function() {
			console.log(cAwardType);
			showEggAwardDialog(obj);
		}, 900);
	}, 1500);
	//取消动画
	setTimeout(function() {
		$(".zjdl").addClass("none").removeClass("dila_Y");
		$(".zjdl").children("span").removeAttr('class');
	}, 2500);
}
//展示扭蛋奖励
function showEggAwardDialog(obj){
	console.log(JSON.stringify(obj));
	var _cawardTime = obj.awardTime; //获奖时间
    _cawardTime = _cawardTime.substr(0, 10);
    $("#otherBtn2").attr("activeId", obj.lotteryActiveId);
    $("#otherBtn2").attr("awardId", obj.awardId);
    $("#otherBtn2").attr("rememberId", obj.lotteryRememberId);
    $("#otherBtn2").attr("userKeyId", obj.userKeyId);
    $("#otherBtn2").attr("awardTypeId", obj.awardTypeId);
    $("#otherBtn2").attr("awardName", obj.awardName);
    $("#otherBtn2").attr("awardTime", _cawardTime);
    $("#otherBtn2").attr("awardUrl", obj.awardUrl);
    
    $(".secondDialog").css("display", "none");
	if (obj.awardTypeId == 2) {
		console.log("抽中实物奖");
		$("#dialogPage").css("display", "block");
//		var isTv = 0;//区分是其他实体将还是电视
//		if (isTv == 1) {
			console.log("抽中电视");
			$("#getTvAward").css("display", "block");
			var _cawardTime = obj.awardTime; //获奖时间
		    _cawardTime = _cawardTime.substr(0, 10);
		    $("#tvBtn2").attr("activeId", obj.lotteryActiveId);
		    $("#tvBtn2").attr("awardId", obj.awardId);
		    $("#tvBtn2").attr("rememberId", obj.lotteryRememberId);
		    $("#tvBtn2").attr("userKeyId", obj.userKeyId);
		    $("#tvBtn2").attr("awardTypeId", obj.awardTypeId);
		    $("#tvBtn2").attr("awardName", obj.awardName);
		    $("#tvBtn2").attr("awardTime", _cawardTime);
		    $("#tvBtn2").attr("awardUrl", obj.awardUrl);
			map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("tvBtn1"), "btn-focus", function() {}, function(val) {}, function(obj) {});
//		} else{
//			console.log("抽中其他实体将");
//	        $("#getOtherAward1").css("display", "block");
//	        $("#otherAwardName1").html('恭喜获得'+obj.awardName);
//	        $("#otherBtn1 .btnName").html("继续抽奖");
//	        $("#otherBtn2 .btnName").html("立即领取");
//	        $(".eachAwardStyle").css("display", "none");
//	        $("#entityAwardBox").css("display", "block");
//	        $("#entityAwardImg").attr("src",obj.awardUrl);
//	        $("#otherAwardInfo1").css("display", "block");
//	        if(!capsuleIsStart){
//	    		console.log("418之前");
//	    		$("#otherAwardInfo1").html("再接再厉！集齐周年卡片4月18日赢千元电视!");	
//	        }else{
//	        	$("#otherAwardInfo1").html("集418周年卡赢新品电视火热进行中，<br/>再来一次集更多周年卡吧！");
//	        }
//	        map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
//		}
		sentLog("okr_web_page_show", '{"page_name":"【扭蛋机中奖】","activity_name":"418活动","award_type":"实物","award_name":"'+obj.awardName+'"}');
        _czc.push(['_trackEvent', '418活动', "【扭蛋机中奖】", obj.awardName, '', '']);
	}
	if (obj.awardTypeId == 7) {
		console.log("抽中红包");
		$("#dialogPage").css("display", "block");
        $("#getOtherAward1").css("display", "block");
        $("#otherAwardName1").html("恭喜获得"+obj.awardName);
        $("#otherBtn1 .btnName").html("继续抽奖");
        $("#otherBtn2 .btnName").html("领取红包");
        $(".eachAwardStyle").css("display", "none");
        $("#redAwardBox").css("display", "block");
        $("#redAwardImg").attr("src",obj.awardUrl);
        $("#otherBtn2").attr("redNumber", obj.awardInfo.bonus);
        $("#otherAwardInfo1").css("display", "block");
        $("#otherAwardInfo1").html("当前扭一扭红包可领取金额为"+obj.awardInfo.bonus+"元,可累计提现哦!");
        map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
		sentLog("okr_web_page_show", '{"page_name":"【扭蛋机中奖】","activity_name":"418活动","award_type":"红包","award_name":"'+obj.awardName+'"}');
        _czc.push(['_trackEvent', '418活动', "【扭蛋机中奖】", obj.awardName, '', '']);
	}
	if (obj.awardTypeId == 17) {
		console.log("抽中津贴");
		$("#dialogPage").css("display", "block");
        $("#getOtherAward1").css("display", "block");
        $("#otherAwardName1").html("恭喜获得"+obj.awardName);
        $("#otherBtn1 .btnName").html("继续抽奖");
        $("#otherBtn2 .btnName").html("立即使用");
        $(".eachAwardStyle").css("display", "none");
        $("#allAwardBox").css("display", "block");
        $("#allowAwardImg").attr("src",obj.awardUrl);
        $("#otherAwardInfo1").css("display", "none");
        $("#otherAwardInfo1").html("  ");
        sentLog("okr_web_page_show", '{"page_name":"【扭蛋机中奖】","activity_name":"418活动","award_type":"津贴","award_name":"'+obj.awardName+'"}');
        _czc.push(['_trackEvent', '418活动', "【扭蛋机中奖】", obj.awardName, '', '']);
        
        map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("otherBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
        if (loginstatus == "true") {
        	sendPrizes(obj.awardName, obj.awardId, obj.lotteryRememberId, obj.userKeyId, obj.awardTypeId, obj.lotteryActiveId, movieSource, 1);
        } else{
        	getMyAwards(3);
        }
	}
}

function changeAllowanceNum(num){
	$("#homeAllowanceNum").html(num);
    $("#allowanceNum").html(num);
    $("#myallowanceNum").html(num);
}









