
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
        console.log("************************");
        if (needFresh) {
            needFresh = false;
            showPage(false, true)
        } else {
            if(needSentADLog){
                needSentADLog = false;
                if (ADMsg != null && ADMsg.schedules != undefined && ADMsg.schedules[0] != undefined &&  gameStatus!=3) {
                    sentInnerAdshow("img", ADMsg, "G0003", "1", "1", "1", "", "");
                    sentThirdAdshow("img", ADMsg);
                }
            }

            if (startLoginFlag && changeLoginFlag) {
                console.log("登录成功");
                startLoginFlag = false;
                changeLoginFlag = false;

                sentLog("okr_web_clicked_result", '{"page_name":"春节活动登录弹窗","activity_name":"春节集卡活动","login_result":"登录成功"}');
                _czc.push(['_trackEvent', '春节活动登录弹窗', '春节集卡活动', '登录成功', '', '']);

                if (document.getElementById("myAwardPage").style.display == "block") {
                    console.log(_curHomeBtn);
                    $("#" + _curHomeBtn).trigger("itemClick");
                }
                if (document.getElementById("getOtherAward1").style.display == "block") {
                    $("#otherBtn2").trigger("itemClick");
                }
                if (document.getElementById("myAllowancePage").style.display == "block") {
                    $(".allowanceInfo1").css("display","block");
                    $(".allowanceInfo2").css("display","none");
                    $("#allowanceLogin").css("display","none");
                    $("#allowanceValueBox").css("display","block");
                    map = new coocaakeymap($(".coocaa_btn"), null, "btn-focus", function() {}, function(val) {}, function(obj) {});
                    getAllNotGetAllowance();
                }


            } else if (startLoginFlag) {
                console.log("登录失败");
                startLoginFlag = false;
                changeLoginFlag = false;
                sentLog("okr_web_clicked_result", '{"page_name":"春节活动登录弹窗","activity_name":"春节集卡活动","login_result":"登录失败"}');
                _czc.push(['_trackEvent', '春节活动登录弹窗', '春节集卡活动', '登录失败', '', '']);
            } else {
                console.log("不提交登录日志");
                startLoginFlag = false;
                changeLoginFlag = false;
                if(document.getElementById("myAllowancePage").style.display == "block"){
                    sentLog("okr_web_page_show", '{"page_name":"我的津贴页面","activity_name":"春节集卡活动"}');
                    _czc.push(['_trackEvent', '春节集卡活动', '我的津贴页面曝光', '', '', '']);
                }else{
                    sentLog("okr_web_page_show", '{"page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","link_type":"' + link_type + '"}');
                    _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '曝光', '', '']);
                }
            }
        }
    },
    handlepause: function() {
        console.log("===========================pause==========");
    },
    handleBackButton: function() {

    },
    handleBackButtonDown: function() {
        // console.log("==============="+$(".window").css("display")+"=========="+$(".finishwindow").css("display"));
        // if(removeBackButton){
        //     return;
        // }
        // else if ($("#rulePage").css("display") == "block") {
        //     console.log("hideNeedUpdate--------------------");
        //     $("#mainbox").show();
        //     $("#rulePage").hide();
        //     map = new coocaakeymap($(".coocaabtn"), $("#rule"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        //     sentLog("okr_web_page_show", '{"page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","link_type":"' + link_type + '"}');
        //     _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '曝光', '', '']);
        //     if (ADMsg != null && ADMsg.schedules != undefined && ADMsg.schedules[0] != undefined && gameStatus!=3) {
        //         sentInnerAdshow("img", ADMsg, "G0004", "1", "1", "1", "", "");
        //         sentThirdAdshow("img", ADMsg);
        //     }
        // } else if ($("#needUpdate").css("display") == "block") {
        //     console.log("hideNeedUpdate--------------------");
        //     if($("#myAllowancePage").css("display") == "block"){
        //         console.log("hideNeedUpdate--------------------");
        //         hideToast(2);
        //     }else{
        //         console.log("hideNeedUpdate--------------------");
        //         hideToast(1);
        //     }
        // } else if ($(".window").css("display") == "block" || $(".finishwindow").css("display") == "block" || $("#compoundWindow").css("display") == "block") {
        //     $("#blackBg").hide();
        //     $(".window").hide();
        //     $(".finishwindow").hide();
        //     showPage(false, false);
        // } else if (document.getElementById("dialogPage").style.display == "block") {
        //     if (document.getElementById("getFoca").style.display == "block") {
        //         $("#getFoca").css("display", "none");
        //         $("#detain").css("display", "block");
        //         map = new coocaakeymap($(".coocaa_btn3"), document.getElementById("detainBtn2"), "btn-focus", function() {}, function(val) {}, function(obj) {});
        //     } else {
        //         $("#dialogPage").css("display", "none");
        //         $("#sendPrizeFail").css("display", "none");
        //         $(".secondDialog").css("display", "none");
        //         if (document.getElementById("myAwardPage").style.display == "block") {
        //             getMyAwards(2);
        //         } else {
        //             canClick = true;
        //             showPage(false, false);
        //             map = new coocaakeymap($(".coocaabtn"), document.getElementById("overChance"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        //         }
        //     }
        // } else {
        //     if (document.getElementById("myAllowancePage").style.display == "block") {
        //         if(document.getElementById("allowanceRulePage").style.display == "block"){
        //             $("#allowanceRulePage").css("display", "none");
        //             map = new coocaakeymap($(".coocaa_btn"), document.getElementById("whatisallowance"), "btn-focus", function() {}, function(val) {}, function(obj) {});
        //         }else{
        //             if (document.getElementById("myAwardPage").style.display == "block") {
        //                 $("#myAwardPage").css("display", "block");
        //                 $("#myAllowancePage").css("display", "none");
        //                 sentLog("okr_web_page_show", '{"page_name":"我的奖励页面","activity_name":"春节集卡活动"}');
        //                 _czc.push(['_trackEvent', '我的奖励页面', '春节集卡活动', '', '', '']);
        //                 map = new coocaakeymap($(".coocaa_btn2"), document.getElementById("allowanceAward"), "btn-focus", function() {}, function(val) {}, function(obj) {});
        //             } else {
        //                 $("#myAllowancePage").css("display", "none");
        //                 // map = new coocaakeymap($(".coocaabtn"), document.getElementById("allowance"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        //                 sentLog("okr_web_page_show", '{"page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","link_type":"' + link_type + '"}');
        //                 _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '曝光', '', '']);
        //                 if (ADMsg != null && ADMsg.schedules != undefined && ADMsg.schedules[0] != undefined && gameStatus!=3) {
        //                     sentInnerAdshow("img", ADMsg, "G0004", "1", "1", "1", "", "");
        //                     sentThirdAdshow("img", ADMsg);
        //                 }
        //                 needRememberFocus = true;
        //                 rememberBtn = "#allowance";
        //                 showPage(false,false);
        //             }
        //         }
        //     } else {
        //         if (document.getElementById("myAwardPage").style.display == "block") {
        //             $("#myAwardPage").css("display", "none");
        //             if(gameStatus == 3){
        //                 console.log("--------------------"+hasFinalAward);
        //                 if(hasFinalAward){
        //                     // map = new coocaakeymap($(".finishWindowBtn"), document.getElementById("finishMyAwardGet"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        //                     // $("#finishMyAwardGet").trigger("itemFocus");
        //                     showPage(false,false);
        //                 }else{
        //                     // map = new coocaakeymap($(".finishWindowBtn"), document.getElementById("finishMyAward"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        //                     showPage(false,false);
        //                 }
        //             }else{
        //                 map = new coocaakeymap($(".coocaabtn"), document.getElementById("mygift"), "btnFocus", function() {}, function(val) {}, function(obj) {});
        //                 needRememberFocus = true;
        //                 rememberBtn = "#mygift";
        //                 showPage(false,false);
        //             }
        //             sentLog("okr_web_page_show", '{"page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","link_type":"' + link_type + '"}');
        //             _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '曝光', '', '']);
        //             if (ADMsg != null && ADMsg.schedules != undefined && ADMsg.schedules[0] != undefined && gameStatus!=3) {
        //                 sentInnerAdshow("img", ADMsg, "G0004", "1", "1", "1", "", "");
        //                 sentThirdAdshow("img", ADMsg);
        //             }
        //         } else {
        //             navigator.app.exitApp();
        //         }
        //     }
        // }
        navigator.app.exitApp();
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
                $("#buyZoneImg").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/720/index/buyzoneimg2.png)");
                $("#missionImg").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/720/index/missionimg1.png)");
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
            console.log("data=====" + JSON.stringify(a))
            $.ajax({
                type: "post",
                async: true,
                url: adressIp + "/light/active/tv/source",
                data: { cNickName: nick_name, MAC: macAddress, cChip: TVchip, cModel: TVmodel, cEmmcCID: emmcId, cUDID: activityId, cSize: message.panel, cChannel: "coocaa", aSdk: message.androidsdk, cTcVersion: message.version.replace(/\.*/g, ""), cBrand: message.brand },
                dataType: "json",
                // timeout: 20000,
                success: function(data) {
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
        listenPlayer();
        getLocationInfo();
    }
};


app.initialize();
//监听播放器
function listenPlayer() {
    coocaaosapi.addCommonListener(function(message) {
        console.log("--------------->commonListen==" + message.web_player_event);
        if(message.web_player_event == "on_start") {
            console.log("on_start 开始播放");
            if(_bPlayFormalAdsVideo == true) { //正式广告，提交数据采集
                sentInnerAdshow(ADMsg,"","","","",actionId,_adsTaskId.toString(), "true");
            }
        }
        if(message.web_player_event == "on_complete") {
            console.log("广告播放完成----_adsTaskId:"+_adsTaskId);
            if(_bPlayFormalAdsVideo == true) {//第三方监测:播放完成
                sentThirdAdshow("videoEnd",ADMsg);
                _bPlayFormalAdsVideo = false;//reset
            }
            //加机会
            if(!hasfinishvideo){
                addChance(1,_adsTaskId);
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
                sentInnerAdshow(ADMsg,"","","","",actionId.toString(),_adsTaskId.toString(), "false");
//					playAdsBackupVideo();
            }
            toastWhenPlayVideoError();
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
}

function startAndSendLog() {
    startLoginFlag = true;
    startLogin(needQQ);
    sentLog("okr_web_page_show", '{"page_name":"春节活动登录弹窗","activity_name":"春节集卡活动"}');
    _czc.push(['_trackEvent', '春节活动登录弹窗', '春节集卡活动', '', '', '']);
}

//保留小数
function toDecimal(x) {
    var val = Number(x)
    if(!isNaN(parseFloat(val))) {
        val = val.toFixed(2);//把 Number 四舍五入为指定小数位数的数字。
    }
    return  val;
}

function getRedPacketsQrcode(activityId, rememberId, userKeyId, id, width, height) {
    console.log(rememberId + "--" + userKeyId + "--" + id);
    var ajaxTimeoutFive = $.ajax({
        type: "GET",
        async: true,
        timeout: 5000,
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
            "luckyDrawCode": "SpringFestival",
            "channel": "coocaa",
            "type": 24
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

function initMap(setFocus) {
    initBtn();
    var setFocus = setFocus;
    if (needRememberFocus&&gameStatus!=2&&gameStatus!=3) {
        needRememberFocus = false;
        setFocus = rememberBtn;
    }
    setFocuss = setFocus;
    console.log("--------" + setFocus);
    map = new coocaakeymap($(".coocaabtn"), $(setFocus), "btnFocus", function() {}, function(val) {}, function(obj) {});
    $(setFocus).trigger("itemFocus");

    if (needshowdialog1) {
        sentLog("okr_web_page_show", '{"page_name":"主活动页面任务完成弹窗","activity_name":"春节集卡活动"}');
        _czc.push(['_trackEvent', '春节集卡活动', '主活动页面任务完成弹窗', '', '', '']);
        needshowdialog1 = false;
        console.log("展示任务完成弹窗");
        $("#blackBg").show();
        $("#indexWindow").show();
        $("#finishMissionWindow").show();
        $("#addchanceaftermission").html(addNum);
        map = new coocaakeymap($("#finishMissionWindow"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
    }
    else if (needshowdialog2) {
        sentLog("okr_web_page_show", '{"page_name":"主活动页面最后一天提示弹窗","activity_name":"春节集卡活动"}');
        _czc.push(['_trackEvent', '春节集卡活动', '主活动页面最后一天提示弹窗', '', '', '']);
        needshowdialog2 = false;
        console.log("展示最后一天提示弹窗");
        $("#blackBg").show();
        $("#indexWindow").show();
        $("#lastDayWindow").show();
        map = new coocaakeymap($("#lastDayWindow"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
    }
    else if (needshowdialog3) {
        sentLog("okr_web_page_show", '{"page_name":"主活动页面交易完成弹窗","activity_name":"春节集卡活动"}');
        _czc.push(['_trackEvent', '春节集卡活动', '主活动页面交易完成弹窗', '', '', '']);
        needshowdialog3 = false;
        console.log("展示交易完成弹窗");
        $("#blackBg").show();
        $("#indexWindow").show();
        $("#dealFinishWindow").show();
        map = new coocaakeymap($("#dealFinishWindow .homewindowbtn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
    }
    else if (needshowdialog4) {
        sentLog("okr_web_page_show", '{"page_name":"主活动页面合成弹窗","activity_name":"春节集卡活动"}');
        _czc.push(['_trackEvent', '春节集卡活动', '主活动页面合成弹窗', '', '', '']);
        removeBackButton = true;
        needshowdialog4 = false;
        $("#blackBg").show();
        console.log("展示合成弹窗");
        $("#compound").show();
        setTimeout(hecheng, 1000)

        function hecheng() {
            $(".fbox").css({ "top": "413px", "left": "853px", "opacity": "0" })
        }
        setTimeout(showCenter, 2000);

        function showCenter() {
            $("#b10").show();
            $("#b10").css({ "top": "225px", "left": "634px", "opacity": "1" })
        }
        setTimeout(showFinalWindow, 3500);

        function showFinalWindow() {
            removeBackButton = false;
            $("#b10").hide();
            $("#compoundWindow").show();
            map = new coocaakeymap($("#compoundWindow .homewindowbtn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
        }
    }
    else if (needshowdialog5) {
        sentLog("okr_web_page_show", '{"page_name":"主活动页面瓜分弹窗","activity_name":"春节集卡活动"}');
        _czc.push(['_trackEvent', '春节集卡活动', '主活动页面瓜分弹窗', '', '', '']);
        needshowdialog5 = false;
        console.log("展示瓜分弹窗");
        $("#blackBg").show();
        $("#indexWindow").show();
        $("#enjoyAwardWindow").show();
        $("#enjoyAwardWindowWord").html(finalawardInfo.awardInfo.bonus+"元");
        map = new coocaakeymap($("#enjoyAwardWindow"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
    }
}
function initBtn() {
    $(".replaceBtn1").unbind("itemFocus").bind("itemFocus", function() {
        $("#gameDraw").show();
        $("#gamePanel").css("transform", "translate3D(-1280px, 0, 0)");
        setTimeout(function (){
            $("#gameMap").hide();
            map = new coocaakeymap($(".coocaabtn"), $("#drawBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            $("#drawBtn").trigger("itemFocus");
        },200)

    })
    $(".replaceBtn2").unbind("itemFocus").bind("itemFocus", function() {
        $("#gameMap").show();
        $("#gamePanel").css("transform", "translate3D(0, 0, 0)");
        setTimeout(function (){
            $("#gameDraw").hide();
            map = new coocaakeymap($(".coocaabtn"), $("#mapBtn"), "btnFocus", function() {}, function(val) {}, function(obj) {});
            $("#mapBtn").trigger("itemFocus");
        },200)

    })
    $(".gameBtn").unbind("itemFocus").bind("itemFocus", function() {
        $("#mainbox").css("transform", "translate3D(0, 0, 0)");
        if($("#gameMap").css("display") == "block"){
            $(".topbtn").attr("downtarget","#mapBtn");
        }else{
            $(".topbtn").attr("downtarget","#drawBtn");
        }
        $("#drawBtnBorder").show();
    })
    $(".gameBtn").unbind("itemBlur").bind("itemBlur", function() {
        $("#drawBtnBorder").hide();
    })
    $(".mission").unbind("itemFocus").bind("itemFocus", function() {
        $("#mainbox").css("transform", "translate3D(0, -400px, 0)");
        if($("#gameMap").css("display") == "block"){
            $(".mission").attr("uptarget","#mapBtn");
        }else{
            $(".mission").attr("uptarget","#drawBtn");
        }
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
        getParamAndStart(this,false);
    })
    $("#question").unbind("itemClick").bind("itemClick", function(){
        diceCanClick = true;
        var _this = this;
        if($(_this).attr("remainingNumber")==0){
            showAndHideToast("已经回答过问题了，试试其他任务");
            return;
        }
        var date = 3;
        $("#questionbox").show();
        $(".answerbtn").attr("right","false");
        $("#ques").html(_interlucationsArrayYinhe[date-1].question);
        $("#answer1").html(_interlucationsArrayYinhe[date-1].answerA);
        $("#answer2").html(_interlucationsArrayYinhe[date-1].answerB);
        if(_interlucationsArrayYinhe[date-1].right == "A"){
            $("#answer1").attr("right","true");
        }else{
            $("#answer2").attr("right","true");
        }
        $("#answer3").attr("right","other");
        $("#answer3").attr("action",JSON.stringify(_interlucationsArrayYinhe[date-1].jump));
        $("#answer5").attr("action",JSON.stringify(_interlucationsArrayYinhe[date-1].jump));
        map = new coocaakeymap($(".answerbtn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
        $(".answerbtn").unbind("itemClick").bind("itemClick", function(){
            var thisRight = $(this).attr("right");
            if(thisRight == "true"){
                console.log("true");
                $(".answerbtn").hide();
                $("#answer4").show();
                $("#answer6").show();
                addChance("1",$(_this).attr("taskId"),"1");
                map = new coocaakeymap($(".answerResultbtn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
            }else if(thisRight == "false"){
                console.log("false");
                $(".answerbtn").hide();
                $("#answer4").show();
                $("#answer5").show();
                addChance("1",$(_this).attr("taskId"),"0");
                map = new coocaakeymap($(".answerResultbtn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
            }else{
                console.log("other");
                getParamAndStart(this,false);
            }
            $("#answer4").unbind("itemClick").bind("itemClick", function(){
                // getParamAndStart(this,false);
            })
            $("#answer5").unbind("itemClick").bind("itemClick", function(){
                getParamAndStart(this,false);
            })
            $("#answer6").unbind("itemClick").bind("itemClick", function(){

            })
        })
    })

    $(".normaltask").unbind("itemClick").bind("itemClick", function(){
        console.log("-------------"+$(".normaltask").index($(this)))
        var taskId = ($(this).attr("taskId"));
        hasfinishvideo = ($(this).attr("remainingNumber"))>0?false:true;
        var _this = this;
        console.log("================="+taskId);
        if($(this).attr("taskType") == "jump"){
            getParamAndStart(this,true)
        }else if($(this).attr("taskType") == "video"){
            if(hasfinishvideo){
                showAndHideToast("即将跳转，完成后回来,已经完成不加机会");
            }else{
                showAndHideToast("即将跳转，完成后回来");
            }

            setTimeout(function () {
                diceCanClick = true;
                selectAd("video",null,"CCADTV10015","","","","",actionId,$(_this).attr("taskId"),$(_this).attr("url"));
            },2000);
        }else{}
    })

    $("#mapBtn").unbind("itemClick").bind("itemClick", function(){
        if(diceCanClick){
            diceCanClick = false;
            if(lotteryNum > 0){
                startMapFunc()
            }else{
                var hasfinishNum = 0;
                for(var i=0;i<4;i++){
                    if($(".mission:eq("+i+")").attr("remainingNumber")>0){
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
        var nowHours = new Date().getHours();
        if(nowHours==11||nowHours==12||nowHours==19||nowHours==20||nowHours==21){
            //调用领取接口
            if(loginstatus=="true"){
                getAllowance();
            }else{
                startLogin(needQQ);
            }
        }else{
            if(nowHours<11 || (nowHours>12&&nowHours<19)){
                //稍后再来
                showAndHideToast("还没到领取时间哦，请稍后再来")
            }else {
                if(startDayNum == 9){
                    //结束
                    showAndHideToast("领取活动已经结束")
                }else{
                    //稍后再来
                    showAndHideToast("还没到领取时间哦，请稍后再来")
                }
            }
        }
    })






    $("#finishMyAwardGet").unbind("itemFocus").bind("itemFocus", function() {
        $("#youhave").css("margin-top", "0px");
    })
    $("#finishMyAwardBtn").unbind("itemFocus").bind("itemFocus", function() {
        $("#youhave").css("margin-top", "-890px");
    })

    $("#finishMyAward").unbind("itemClick").bind("itemClick", function() {
        sentLog("okr_web_button_click", '{"button_name":"我的奖励","page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","link_type":"' + link_type + '"}');
        _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '我的奖励点击', '', '']);
        $("#myAwardPage").css("display", "block");
        getMyAwards(2);
    })
    $("#finishMyAwardGet").unbind("itemClick").bind("itemClick", function() {
        sentLog("okr_web_button_click", '{"button_name":"领取","page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","link_type":"' + link_type + '"}');
        _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '领取点击', '', '']);
        $("#myAwardPage").css("display", "block");
        getMyAwards(2);
    })
    $("#finishMyAwardBtn").unbind("itemClick").bind("itemClick", function() {
        sentLog("okr_web_button_click", '{"button_name":"我的奖励","page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","link_type":"' + link_type + '"}');
        _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '我的奖励点击', '', '']);
        $("#myAwardPage").css("display", "block");
        getMyAwards(2);
    })

    $("#finishMissionWindow").unbind("itemClick").bind("itemClick", function() {
        $("#blackBg").hide();
        $(".window").hide();
        initMap(setFocuss);
    })
    $("#lastDayWindow").unbind("itemClick").bind("itemClick", function() {
        $("#blackBg").hide();
        $(".window").hide();
        initMap(setFocuss);
    })
    $("#dealbtn1").unbind("itemClick").bind("itemClick", function() {
        $("#blackBg").hide();
        $(".window").hide();
        initMap(setFocuss);
    })
    $("#dealbtn2").unbind("itemClick").bind("itemClick", function() {
        $("#blackBg").hide();
        $(".window").hide();
        coocaaosapi.startNewBrowser4(mydealurl+isTrade, function() { needFresh = true; }, function() {});
    })
    $("#compoundbtn1").unbind("itemClick").bind("itemClick", function() {
        $("#blackBg").hide();
        $(".window").hide();
        showPage(false, false);
    })
    $("#compoundbtn2").unbind("itemClick").bind("itemClick", function() {
        $("#blackBg").hide();
        $(".window").hide();
        coocaaosapi.startNewBrowser3(taskurl, function() {
            needFresh = true;
        }, function() {});
    })
    $("#getAwardWindow").unbind("itemClick").bind("itemClick", function() {})
    $("#enjoyAwardWindow").unbind("itemClick").bind("itemClick", function() {
        $("#enjoyAwardWindow").hide();
        $("#getAwardWindow").show();
        $("#getAwardWindowWord").html(finalawardInfo.awardInfo.bonus);
        map = new coocaakeymap($("#getAwardWindow"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
        getRedPacketsQrcode(finalawardInfo.lotteryActiveId, finalawardInfo.lotteryRememberId, finalawardInfo.userKeyId, "getAwardWindowCode", 200, 200);
    })


    $("#rule").unbind("itemClick").bind("itemClick", function() {
        sentLog("okr_web_button_click", '{"button_name":"活动细则","page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","link_type":"' + link_type + '"}');
        _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '活动细则点击', '', '']);
        $("#mainbox").hide();
        $("#rulePage").show();
        sentLog("okr_web_page_show", '{"page_name":"活动细则页面","activity_name":"春节集卡活动"}');
        _czc.push(['_trackEvent', '春节集卡活动', '活动细则页面', '', '', '']);
        map = new coocaakeymap($("#ruleInner"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
    })
    $("#allowance").unbind("itemBlur").bind("itemBlur", function() {
        console.log("loginstatus====================="+loginstatus);
        if(loginstatus == "true"){
            $("#allowance").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/720/index/allowance1.png)")
        }else{
            $("#allowance").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/720/index/dailingqu.png)")
        }
    })

    $("#allowance").unbind("itemClick").bind("itemClick", function() {
        console.log("点击了购物津贴+跳转页面");

        $("#myAllowancePage").css("display", "block");
        $("#allowanceItemBox").stop(true, true).animate({ scrollTop: 0 }, { duration: 0, easing: "swing" });
        if(loginstatus == "true"){
            $(".allowanceInfo1").css("display","block");
            $(".allowanceInfo2").css("display","none");
            $("#allowanceLogin").css("display","none");
            $("#allowanceValueBox").css("display","block");
            getAllNotGetAllowance();
        }else{
            $(".allowanceInfo1").css("display","none");
            $(".allowanceInfo2").css("display","block");
            $("#allowanceLogin").css("display","block");
            $("#allowanceValueBox").css("display","none");
        }
            map = new coocaakeymap($(".coocaa_btn"), $("#allowanceItem1"), "btn-focus", function() {}, function(val) {}, function(obj) {});

            sentLog("okr_web_button_click", '{"button_name":"可用津贴","page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","link_type":"' + link_type + '"}');
            _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '可用津贴点击', '', '']);
            sentLog("okr_web_page_show", '{"page_name":"我的津贴页面","activity_name":"春节集卡活动"}');
            _czc.push(['_trackEvent', '春节集卡活动', '我的津贴页面曝光', '', '', '']);
    })

    $("#mygift").unbind("itemClick").bind("itemClick", function() {
        sentLog("okr_web_button_click", '{"button_name":"我的奖励","page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","link_type":"' + link_type + '"}');
        _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '我的奖励点击', '', '']);
        sentLog("okr_web_page_show", '{"page_name":"我的奖励","activity_name":"春节集卡活动","last_page_name":"春节集卡活动主页"}');
        _czc.push(['_trackEvent', '春节集卡活动', '我的奖励曝光', '', '', '']);
        $("#myAwardPage").css("display", "block");
        getMyAwards(2);
    })

    $(".topbtn").unbind("itemFocus").bind("itemFocus", function() {
        if (gameStatus == 2) {
            $(".topbtn").attr("downtarget", "#myCard");
        }
    })
    $("#allowance").unbind("itemFocus").bind("itemFocus", function() {
        console.log("loginstatus====================="+loginstatus);
        if(loginstatus == "false"){
            console.log("loginstatus====================="+loginstatus);
            $("#allowance .onfocus").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/720/index/dailingquluojiao.png)")
        }else{
            console.log("loginstatus====================="+loginstatus);
            $("#allowance .onfocus").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/720/index/allowancefocus.png)")
        }
        if (gameStatus == 2) {
            $(".topbtn").attr("downtarget", "#myCard");
        }
    })
    $("#myCard").unbind("itemFocus").bind("itemFocus", function() {
        $("#myCard").attr("lefttarget", "#missionBtn");
        if (isTrade) {
            $("#myCard").attr("righttarget", "#buyZoneBtn");
        }
        // console.log("2222222222222222222222222222222"+(parseInt($("#mainbox").offset().top)<-500)+"============================="+$("#mainbox").offset().top);
        if(($("#mainbox").offset().top)<-500){
            // console.log("-------------")
            if (ADMsg != null && ADMsg.schedules != undefined && ADMsg.schedules[0] != undefined &&  gameStatus!=3) {
                sentInnerAdshow(ADMsg, "G0003", "1", "1", "1", "", "");
                sentThirdAdshow("img", ADMsg);
            }
        }
        $("#arrows").show();
        $("#mainbox").css("transform", "translate3D(0, -" + 0 + "px, 0)");
    })

    $("#myCard").unbind("itemClick").bind("itemClick", function() {
        sentLog("okr_web_button_click", '{"button_name":"更多我的福卡","page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","link_type":"' + link_type + '"}');
        _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '更多我的福卡点击', '', '']);
        coocaaosapi.startNewBrowser4(mycardurl+isTrade, function() {
            needFresh = true;
            rememberBtn = "#myCard";
            needRememberFocus = true
        }, function() {});
    })

    $("#missionBtn").unbind("itemClick").bind("itemClick", function() {
        sentLog("okr_web_button_click", '{"button_name":"进去看看","page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","link_type":"' + link_type + '"}');
        _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '进去看看点击', '', '']);
        coocaaosapi.startNewBrowser3(taskurl, function() {
            needFresh = true;
            rememberBtn = "#missionBtn";
            needRememberFocus = true
        }, function() {});
    })

    $("#buyZoneBtn").unbind("itemClick").bind("itemClick", function() {
        sentLog("okr_web_button_click", '{"button_name":"更多交易","page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","link_type":"' + link_type + '"}');
        _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '更多交易点击', '', '']);
        coocaaosapi.startNewBrowser4(marketurl+isTrade, function() {
            needFresh = true;
            rememberBtn = "#buyZoneBtn";
            needRememberFocus = true
        }, function() {});
    })

    $("#overChance").unbind("itemClick").bind("itemClick", function() {
        sentLog("okr_web_button_click", '{"button_name":"剩余抽卡机会","page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","link_type":"' + link_type + '"}');
        _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '更多交易点击', '', '']);
        if(!canClick){
            console.log('操作过于频繁，稍后再试');
            return false;
        }else{
            canClick = false;
            console.log("开始抽奖");
            console.log("------------------"+remainNum);
            if (remainNum>0) {
                startDrawFunc("lottery");
            } else{
                canClick = true;
                console.log("没有抽卡机会");
                sentLog("okr_web_page_show", '{"page_name":"没有抽卡机会弹窗","activity_name":"春节集卡活动"}');
                _czc.push(['_trackEvent', '春节集卡活动', '没有抽卡机会弹窗曝光', '', '', '']);
                $("#dialogPage").css("display","block");
                $("#noChance").css("display","block");
                map = new coocaakeymap($(".coocaa_btn3"), null, "btn-focus", function() {}, function(val) {}, function(obj) {});
            }
        }
        // var nowTime = new Date().getTime();
        // var clickTime = $("#overChance").attr("ctime");
        // if(clickTime != 'undefined' && (nowTime - clickTime < 3000)) {
        //     console.log('操作过于频繁，稍后再试');
        //     return false;
        // } else {
        //     console.log("开始抽奖");
        //     $("#overChance").attr("ctime", nowTime);
        //     console.log("------------------"+remainNum);
        //     if (remainNum>0) {
        //         startDrawFunc("lottery");
        //     } else{
        //         console.log("没有抽卡机会");
        //         sentLog("okr_web_page_show", '{"page_name":"没有抽卡机会弹窗","activity_name":"春节集卡活动"}');
        //         _czc.push(['_trackEvent', '春节集卡活动', '没有抽卡机会弹窗曝光', '', '', '']);
        //         $("#dialogPage").css("display","block");
        //         $("#noChance").css("display","block");
        //         map = new coocaakeymap($(".coocaa_btn3"), null, "btn-focus", function() {}, function(val) {}, function(obj) {});
        //     }
        // }
    })
	
	
	//	林心旺
	//---------------------------------
	$("#drawBtn").unbind("itemClick").bind("itemClick", function() {
		console.log("开始抽奖");
		var score = 470;
		score -= 100;
		if(score < 0) {
			for(i = 1; i <= 11; i++) {
				$(".qiu_" + i).removeClass("wieyi_" + i);
			}
			console.log("没有积分");
		} else {
			draw()
		}
	});
	//---------------------------------
}
//领取津贴接口
function getAllowance() {
    $.ajax({
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
            if(data.code == "50100") { //服务器返回正常
                $("#getallowancesuccess").show();
                map = new coocaakeymap($("#getallowancesuccessbtn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
                $("#getallowancesuccessbtn").unbind("itemClick").bind("itemClick",function(){

                })
            }
            else if(data.code == "50003") {
                if(startDayNum == 9){
                    //结束
                    showAndHideToast("领取活动已经结束");
                }else{
                    //稍后再来
                    showAndHideToast("还没到领取时间哦，请稍后再来");
                }
            }
            else if(data.code == "50046") {
                showAndHideToast("还没到领取时间哦，请稍后再来");
            }
            else if(data.code == "50004") {
                showAndHideToast("已经领取过该时段的津贴");
            }else {
                showAndHideToast("已经领取过该时段的津贴");
                console.log('领取津贴信息接口异常');
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
//获取跳转参数并执行[福利街]
function getParamAndStart(obj,needCheckVersion) {
    var startAction = $(obj).attr("action");
    console.log(startAction)
    var pkgname = JSON.parse(startAction).packagename||JSON.parse(startAction).packageName;
    var bywhat = JSON.parse(startAction).bywhat;
    var byvalue = JSON.parse(startAction).byvalue;
    var needversioncode = JSON.parse(startAction).versioncode||JSON.parse(startAction).versionCode;
    var hasversioncode = "";
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
                    $("#needUpdate").show();
                    $("#blackBg").show();
                    $("#needUpdate").css("background", "url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/index/movieupdate.png)");
                    map = new coocaakeymap($("#needUpdate"), $("#needUpdate"), "btnFocus", function() {}, function(val) {}, function(obj) {});
                    toastTimeout = setTimeout(function(){
                        hideToast(1)
                    }, 5000);
                }  else if (pkgname == "com.coocaa.mall") {
                    $("#needUpdate").show();
                    $("#blackBg").show();
                    $("#needUpdate").css("background", "url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/index/mallupdate.png)");
                    map = new coocaakeymap($("#needUpdate"), $("#needUpdate"), "btnFocus", function() {}, function(val) {}, function(obj) {});
                    toastTimeout = setTimeout(function(){
                        hideToast(1)
                    }, 5000);
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
                        if((activityCenterVersion < 103010) || (browserVersion < 104039)) {
                            console.log("活动中心或浏览器版本太低，需要后台升级，显示弹窗");
                            showAndHideToast("模块加载中。。。");
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
                                if(cAppVersion<7410022){
                                    //lowVersion----自身加机会【仍需判断】
                                    startLowVersion(needAddChance);
                                }else{
                                    if(needAddChance){
                                        startNewVersion();
                                    }else{
                                        startLowVersion(needAddChance);
                                    }
                                }
                            }  else if (pkgname == "com.coocaa.mall") {
                                if(mallVersion<3410022){
                                    startLowVersion(needAddChance);
                                }else{
                                    if(needAddChance){
                                        startNewVersion();
                                    }else{
                                        startLowVersion(needAddChance);
                                    }
                                }
                            }
                            function startLowVersion(needAddChance) {
                                console.log("olg------------------------------"+needAddChance);
                                if(needAddChance){addChance(1,$(obj).attr("taskId"),0)}
                                showAndHideToast("即将跳转，完成后回来");
                                setTimeout(function () {
                                    diceCanClick = true;
                                    coocaaosapi.startCommonNormalAction(param1, param2, param3, param4, param5, str, function() { needSentADLog = false; }, function() {});
                                },2000);
                            }
                            function startNewVersion() {
                                console.log("new------------------------------");
                                showAndHideToast("即将跳转，完成后回来");
                                str = JSON.parse(str);
                                var external = {"taskId":$(obj).attr("taskId"),"id":actionId,"userKeyId":userKeyId, "countDownTime":10, "verify_key":new Date().getTime(), "subTask":"0"};
                                var doubleEggs_Active = {"doubleEggs_Active":external};
                                str.push(doubleEggs_Active);
                                str = JSON.stringify(str);
                                setTimeout(function () {
                                    diceCanClick = true;
                                    coocaaosapi.startCommonNormalAction(param1, param2, param3, param4, param5, str, function() { needSentADLog = false; }, function() {});
                                },2000);
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
                if(taskType == 1){
                    //刷新页面状态:
                    getMyTasksList();
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
        map = new coocaakeymap($(".coocaabtn"), $(".block:eq(" + remembernum + ")"), "btnFocus", function() {}, function(val) {}, function(obj) {});
    }else{
        map = new coocaakeymap($(".coocaa_btn"), $(".allowanceItemLi:eq(" + _curAllBtn + ")"), "btn-focus", function() {}, function(val) {}, function(obj) {});
    }
}
//展示并隐藏toast，不抢焦点
function showAndHideToast(text,obj,stopDice) {
    clearInterval(interval_diceMove);
    $("#diceIcon_1").stop(true,true);
    if(stopDice){
        $("#diceIcon_1").attr('class', 'dice-icon-1');
        $("#diceIcon_1").css({ marginTop: "0", marginLeft: "0" });
        $("#diceIcon_1").addClass("dice_aim"+obj.diceNumber);
    }
    $("#normalToast span").html(text);
    $("#normalToast").show();
    setTimeout(function () {
        $("#normalToast").hide();
    },2000);
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
        data: { cAppVersion:cAppVersion, id: actionId, cChip: TVchip, cModel: TVmodel, cUDID: activityId, MAC: macAddress, cEmmcCID: emmcId, cOpenId: cOpenId, cNickName: nick_name,province:_province,city:_city},
        dataType: "json",
        // timeout: 20000,
        success: function(data) {
            console.log("掷骰子返回状态：" + JSON.stringify(data));
            if(data.code == 50100){
                var obj = data.data;
                setTimeout(function(){showAndHideToast("恭喜您，可以往前走"+obj.diceNumber+"步",obj,true)},4000);
                setTimeout(function(){mapMove(obj,false)},5300);
            }else{
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
            var obj1,obj2=null;
            if(obj.ifSpeedUp){
                obj2 = obj.speedUpRemember;
                setTimeout(function(){mapMove(obj2,true)},2000);
            }
        }
        i++; //继续前进
    }, 500);
}
//页面初始化或刷新
function showPage(first, resume) {
    console.log("$$$$$$$$$$$$$$$$$$====" + first + "===========" + resume);
    // if(loginstatus == "true"){
    //     $("#allowanceBtn").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/720/index/allowance1.png)")
    // }else{
    //     $("#allowanceBtn").css("background-image","url(http://sky.fs.skysrt.com/statics/webvip/webapp/springfestival/720/index/dailingqu.png)")
    // }
    if (first) {
        checkVersion();
    }
    console.log("---" + macAddress + "------" + TVchip + "-----" + TVmodel + "------" + emmcId + "--------" + activityId + "---------" + access_token + "-------" + cOpenId);
    $.ajax({
        type: "post",
        async: true,
        url: adressIp + "/building/ludo/init",
        data: { capsuleId:capsuleId, id: actionId, cChip: TVchip, cModel: TVmodel, cUDID: activityId, MAC: macAddress, cEmmcCID: emmcId, cOpenId: cOpenId, cNickName: nick_name},
        dataType: "json",
        // timeout: 20000,
        success: function(data) {
            console.log("初始化返回状态：" + JSON.stringify(data));
            showAwardInfo();
            getMyTasksList();
            if(data.code == 50100){
                lotteryNum = data.data.lotteryNum;
                cardsNum = data.data.cardsNum;
                nowPosition = data.data.nowPosition;
                startDayNum = data.data.startDayNum;
                capsuleIsStart = data.data.capsuleIsStart;
                beginTime = new Date(data.data.capsuleBeginTime).getTime();
                endTime = new Date(data.data.capsuleEndTime).getTime();
                nowTime = new Date(data.data.systemTime).getTime();
                todayFirst = data.data.todayFirst;
                userKeyId = data.data.userKeyId;
                if(cardsNum>0 && capsuleIsStart && first){
                    $("#gamePanel").css("transform", "translate3D(-1280px, 0, 0)");
                    $("#gameDraw").show();
                }else{
                    $("#gameMap").show();
                }
                $(".map").removeClass("focus");
                $("#map"+nowPosition).addClass("focus");
                if(lotteryNum>0){
                    $("#mapChance").html("(剩余"+lotteryNum+"次机会)");
                }else{
                    $("#mapChance").html("点击解锁游戏机会");
                }

                if(startDayNum<5){
                    $("#bannerWord").html("集齐周年卡片4月18日0元赢创维最新款电视");
                }else if(startDayNum == 5){
                    $("#bannerWord").html("距离418终极奖励开启还有1天");
                }else if(startDayNum == 6){
                    $("#cutdownNum").html("");
                    clearInterval(intervalForCutdown);
                    intervalForCutdown = setInterval(function(){showTime(1)}, 1000);
                    // showTime();
                }else if(startDayNum>6&&startDayNum<9){
                    $("#bannerWord").html("剩余xx台电视大奖，集齐周年卡片0元带走");
                }else{
                    intervalForCutdown = setInterval(function(){showTime(2)}, 1000);
                }

            }else if(data.code==50003){
                $("#bannerWord").html("活动已结束~获奖名单稍后公布");
            }
            selectChipInfo();
        },
        error: function(error) {
            selectChipInfo();
            console.log("-----------访问失败---------" + JSON.stringify(error));
        }
    });
    showOperation(first);

}
//查询碎片信息
function selectChipInfo() {
    $.ajax({
        type: "post",
        async: true,
        url: adressIp + "/building/ludo/chip-info",
        data: { id: actionId, cChip: TVchip, cModel: TVmodel, cUDID: activityId, MAC: macAddress, cEmmcCID: emmcId, cOpenId: cOpenId, cNickName: nick_name,cHomepageVersion:cAppVersion,province:_province,city:_city},
        dataType: "json",
        // timeout: 20000,
        success: function(data) {
            console.log("卡片信息：====="+JSON.stringify(data));
            if(data.code == 50100){
                haveUnReceive = data.data.haveUnReceive;
                if(haveUnReceive){$("#awardCircle").show()}else{$("#awardCircle").hide()}
                $(".lc4").html(data.data.lc4Num+"片");
                $(".lc1").html(data.data.lc1Num+"片");
                $(".lc8").html(data.data.lc8Num+"片");
                $("#gameMap .lc418").html(cardsNum+"套");
                $("#tips .tiplc418").html(cardsNum);

                $(".draw4cl").html(data.data.lc4Num);
                $(".draw1cl").html(data.data.lc1Num);
                $(".draw8cl").html(data.data.lc8Num);
                $(".draw418cl").html(cardsNum);
                $(".draw418").html(cardsNum);
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
                $("#bannerWord").html("距离418终极奖励开启还有"+hour + "时" + minute + "分" + second + "秒");
            }else{
                $("#bannerWord").html("活动剩余"+hour + "时" + minute + "分" + second + "秒，418终极电视大奖最后召集");
            }
        } else if (minute > 0) {
            if(type == 1){
                $("#bannerWord").html("距离418终极奖励开启还有"+ minute + "分" + second + "秒");
            }else{
                $("#bannerWord").html("活动剩余"+ minute + "分" + second + "秒，418终极电视大奖最后召集");
            }
        } else if(second > 0){
            if(type == 1){
                $("#bannerWord").html("距离418终极奖励开启还有" + second + "秒");
            }else{
                $("#bannerWord").html("活动剩余"+ second + "秒，418终极电视大奖最后召集");
            }
            if(second == 1){
                setTimeout(function () {
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
    var couponStation = {};
    var businessOrder = ["影视", "购物", "教育", "应用"];
    var tag_id = "";
    // if(needQQ){tag_id = 103188}else {tag_id = 103187}//test
    if (needQQ) { tag_id = 103228 } else { tag_id = 103229 }
    $("#payZone").html('<div id="allowanceGet" class="allowanceGet operationmap coocaabtn"><div class="text">&nbsp;</div></div>');
    // var header = JSON.stringify({cUDID:activityId,MAC:macAddress,cModel:TVmodel,cChip:TVchip,cSize:deviceInfo.panel,cTcVersion:deviceInfo.version.replace(/\.*/g, ""),cFMode:"Default",cPattern:"normal","cBrand":"Skyworth"});
    var header = JSON.stringify({});
    $.ajax({
        type: "get",
        async: true,
        url: operationurl,
        data: { page: 1, page_size: 6, tag_id: tag_id ,mode:"simple",content_type:"Tab",header:header},
        dataType: "json",
        timeout: 8000,
        success: function(data) {
            // console.log("运营数据==="+JSON.stringify(data));
            var operationData = data;
            var payZone = document.getElementById("payZone");
            var tabInner = "";
            for (var i = 0; i < operationData.data.length; i++) {
                for (var j = 0; j < operationData.data[i].baseBlocks.length; j++) {
                    var action_this = JSON.parse(operationData.data[i].baseBlocks[j].action);
                    if(action_this.params.allowance != undefined){
                        if(loginstatus == "true"){
                            var tabItem = '<div class="operationblock operationmap coocaabtn" action='+JSON.stringify(JSON.parse(operationData.data[i].baseBlocks[j].action))+' style="background-image:url('+operationData.data[i].baseBlocks[j].imgs.poster.images[0]+')"><div class="text" style="background-color: red">使用津贴再减'+action_this.params.allowance+'元</div></div>';
                        }else{
                            var tabItem = '<div class="operationblock operationmap coocaabtn" action='+JSON.stringify(JSON.parse(operationData.data[i].baseBlocks[j].action))+' style="background-image:url('+operationData.data[i].baseBlocks[j].imgs.poster.images[0]+')"><div class="text"  style="background-color: red">领取津贴再减'+action_this.params.allowance+'元</div></div>';
                        }
                    }else{
                        var tabItem = '<div class="operationblock operationmap coocaabtn" action='+JSON.stringify(JSON.parse(operationData.data[i].baseBlocks[j].action))+' style="background-image:url('+operationData.data[i].baseBlocks[j].imgs.poster.images[0]+')"><div class="text">&nbsp;</div></div>';
                    }
                    tabInner += tabItem;
                }
            }
            $("#payZone").append(tabInner);


            if($("#gameMap").css("display")=="block"){
                initMap("#mapBtn");
            }else if($("#gameDraw").css("display")=="block"){
                initMap("#drawBtn");
            }else{
                initMap(null);
            }
            if (showMainShow) {
                sentLog("okr_web_page_show", '{"page_name":"春节集卡活动主页","activity_name":"春节集卡活动","page_type":"' + page_type + '","open_id":"' + (cOpenId || "空") + '","link_type":"' + link_type + '"}');
                _czc.push(['_trackEvent', '春节集卡活动', '春节集卡活动主页', '曝光', '', '']);
            }

        },
        error: function(error) {
            initMap("#overChance")
            console.log("-----------访问失败---------" + JSON.stringify(error));
        }
    });
}
//获取中奖信息
function showAwardInfo() {
    $("#gameMapNewsul").html("");
    $.ajax({
        type: "get",
        async: true,
        url: adressIp + "/building/common/news",
        data: { id: actionId },
        dataType: "json",
        // timeout: 20000,
        success: function(data) {
            // console.log("中奖喜讯返回状态：" + JSON.stringify(data));
            var box = document.getElementById("gameMapNewsul");
            var tabInner = "";
            for (var i = 0; i < data.data.fakeNews.length; i++) {
                var tabItem = '<li>'+data.data.fakeNews[i].nickName.substr(0,4)+' 掷骰子获得 '+data.data.fakeNews[i].awardName.substr(0,10)+'</li>';
                tabInner += tabItem;
            }
            $("#gameMapNewsul").append(tabInner);
            showAwardlist("#gameMapNews", "#gameMapNewsul", "2");
        },
        error: function(error) {
            console.log("-----------访问失败---------" + JSON.stringify(error));
        }
    });
}
//获取广告信息
function selectAd(type,boxId, appid, game_id, game_scene, game_panel, game_position, activity_id, task_id, backUrl) {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@"+appid+"--"+game_id+"=="+game_scene+"--"+game_panel+"=="+game_position+"---"+activity_id+"=="+task_id);
    coocaaosapi.getAdData(appid, game_id, game_scene, game_panel, game_position, activity_id, task_id, function(msg) {
        console.log("admsg====" + msg);
        ADMsg = JSON.parse(msg);
        _adsTaskId = task_id;
        if(ADMsg == null || ADMsg == undefined || ADMsg == "{}"){
           console.log("获取广告丢失=====================================");
        }else{
            if (JSON.parse(msg).total > 0) {
                console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                if(type=="img"){
                    $("#" + boxId).css("backgroundImage", "url(" + JSON.parse(msg).schedules[0].content + ")");
                    sentInnerAdshow(JSON.parse(msg), game_id, game_scene, game_panel, game_position, activity_id, task_id,"true");
                }else{
                    var url = ADMsg.schedules[0].content;
                    console.log("广告数据正常 url:"+url);
                    _bPlayFormalAdsVideo = true;
                    coocaaosapi.startCommonWebview("", url, "广告视频", "1080", "1920", "", "广告1", "广告2", function(message) {
                        console.log(message);
                    }, function(error) {
                        console.log("startCommonWebview-"+error);
                    });
                    sentThirdAdshow("videoStart", JSON.parse(msg));
                }

                sentThirdAdshow("img", JSON.parse(msg));
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
        console.log("sent  inner  log  success===" + msg);
    }, function(err) {
        console.log("sent  inner  log  err===" + err);
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
    if (activityCenterVersion < 103010) {
        coocaaosapi.createDownloadTask(
            "https://apk-sky-fs.skysrt.com/uploads/20190109/20190109191141936672.apk",
            "67EF020FE82A5BBF1D3F9E719886EB8A",
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
        $.ajax({
            type: "GET",
            async: true,
            url: allowanceUrl,
            // data: {clientId:"YS_BETA",authenticationType:"openid",authenticationValue :cOpenId,currentTimestamp:new Date().getTime()},
            data: {clientId:allowanceClientId,authenticationType:"openid",authenticationValue :cOpenId,currentTimestamp:new Date().getTime()},
            dataType:"jsonp",
            jsonp:"callback",
            success: function(data){
                console.log("sent------------------"+JSON.stringify(data));
                if(data.code == 0 ){//用户拥有津贴是否大于0
                    $("#allowanceValue").html((data.data.totalSubsidy/100) + "元");
                    $("#allowanceNum").html((data.data.totalSubsidy/100) + "元");
                    $("#allowanceMoney").html('<span style="font-size: 56px;">' + (data.data.totalSubsidy/100) + '</span>元');
                }else{
                    $("#allowanceValue").html("0元");
                    $("#allowanceNum").html("0元");
                    $("#allowanceMoney").html('<span style="font-size: 56px;">' +0 + '</span>元');
                }
            },
            error: function(){
                $("#allowanceValue").html("0元");
                $("#allowanceNum").html("0元");
                $("#allowanceMoney").html('<span style="font-size: 56px;">' +0 + '</span>元');
            }
        });

}
//获取我的任务信息
function getMyTasksList(initData) {
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
            if(data.code == "50100") { //服务器返回正常
                var taskOrder = ["jump","video","ask"];
                var taskList = data.data;
                var missionBoxNum = 0;
                var overTask = 0;
                for(var i=0;i<3;i++){
                    if(taskList[taskOrder[i]]!=undefined){
                        for(var j=0;j<taskList[taskOrder[i]].length;j++){
                            $(".mission:eq("+missionBoxNum+")").attr("taskId",taskList[taskOrder[i]][j].taskId);
                            $(".mission:eq("+missionBoxNum+")").attr("taskType",taskOrder[i]);
                            $(".mission:eq("+missionBoxNum+")").attr("remainingNumber",taskList[taskOrder[i]][j].remainingNumber);
                            $(".mission:eq("+missionBoxNum+")").attr("countdown",taskList[taskOrder[i]][j].countdown);
                            $(".mission:eq("+missionBoxNum+")").attr("jumpBgImgUrl",taskList[taskOrder[i]][j].jumpBgImgUrl);
                            $(".mission:eq("+missionBoxNum+")").attr("jumpImgUrl",taskList[taskOrder[i]][j].jumpImgUrl);
                            $(".mission:eq("+missionBoxNum+")").attr("jumpRemindImgUrl",taskList[taskOrder[i]][j].jumpRemindImgUrl);
                            if(taskOrder[i] == "jump"){
                                $(".mission:eq("+missionBoxNum+")").attr("action",taskList[taskOrder[i]][j].param);
                            }else if(taskOrder[i] == "video"){
                                $(".mission:eq("+missionBoxNum+")").attr("url",taskList[taskOrder[i]][j].param);
                            }
                            if(taskList[taskOrder[i]][j].remainingNumber == 0){
                                overTask++;
                            }
                            missionBoxNum++;
                        }
                    }
                }
                $("#missionListTitle span").html(overTask);
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

//扭蛋机抽奖动效
function draw() {
	var number = Math.floor(4 * Math.random() + 1);
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
		switch(number) {
			case 1:
				$(".zjdl").children("span").addClass("diaL_one");
				break;
			case 2:
				$(".zjdl").children("span").addClass("diaL_two");
				break;
			case 3:
				$(".zjdl").children("span").addClass("diaL_three");
				break;
			case 4:
				$(".zjdl").children("span").addClass("diaL_four");
				break;
		}
		$(".zjdl").removeClass("none").addClass("dila_Y");
		setTimeout(function() {
			switch(number) {
				case 1:
					console.log("抽到了一等奖");
					break;
				case 2:
					console.log("抽到了二等奖");
					break;
				case 3:
					console.log("抽到了三等奖");
					break;
				case 4:
					console.log("抽到了四等奖");
					break;
				case 5:
					console.log("抽到了五等奖");
					break;
				case 6:
					console.log("抽到了六等奖");
					break;
				case 7:
					console.log("抽到了七等奖");
					break;
			}
		}, 900);
	}, 1500);
	//取消动画
	setTimeout(function() {
		$(".zjdl").addClass("none").removeClass("dila_Y");
		$(".zjdl").children("span").removeAttr('class');
	}, 2500);
}
