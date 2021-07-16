;(function (window,document){
    'use strict';
    let _onloadFun = window.onload;
    if(typeof _onloadFun != 'function'){
        window.onload = dnsDetect;
    }else{
        _onloadFun();
        dnsDetect();
    }
    
    function dnsDetect(){
        let head = document.head || document.getElementsByTagName('head')[0];
        let body = document.body || document.getElementsByTagName('body')[0];
        
        let style = document.createElement('style');
        head.appendChild(style);
        style.type = 'text/css';
        let css = `.dns-detect {
                        position:fixed;
                        top: 0;
                        right: 0;
                        left: 0;
                        height: 38px;
                        display: flex;
                        justify-content: space-between;
                        background-color: #211c25;
                        color: #ffffff;
                        box-sizing:border-box;
                        z-index:19;
                        overflow:hidden;
                        padding: 0 1.5rem;
                        border-bottom: 1px solid #382e3e;
                        animation:.5s dns-show forwards;
                        opacity: 0;
                    }
                    .dns-open{
                        animation:.5s dns-show forwards;
                    }
                    .dns-close{
                        animation:.5s dns-close forwards;
                    }
                    @keyframes dns-show {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    @keyframes dns-close {
                        from {
                            opacity: 1;
                        }
                        to {
                            opacity: 0;
                        }
                    }
                    .dns-detect >.dns-close-warp{
                        
                    }
                    .dns-detect >.dns-success {
                        display:flex;
                        justify-content: space-around;
                        align-items:center;
                        font-size: 14px !important;
                    }
                    .dns-detect >.dns-success::before {
                        content:'';
                        width:9px;
                        height:9px;
                        flex: none;
                        border-radius:50%;
                        display: block;
                        margin-right:10px;
                        background-color:#4cce35;
                        box-shadow:0 0 8px 0 #98ff85;
                    }
                    .dns-detect >.dns-danger {
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        font-size: 14px !important;
                    }
                    .dns-detect >.dns-danger::before {
                        content:'';
                        width:9px;
                        height:9px;
                        border-radius:50%;
                        display:block;
                        margin-right:10px;
                        background-color:#f36262;
                        box-shadow:0 0 8px 0 #ff9e9e;
                    }
                    .dns-detect >.span_warp{
                        display:flex;
                        align-items:center;
                    }
                    .dns-detect >.span_warp >.ip {
                        font-size: 14px !important;
                        margin-right: 20px;
                    }
                    .dns-detect >.span_warp >.isp {
                        font-size: 14px !important;
                        margin-right: 20px;
                    }
                    .dns-detect >.span_warp >.dns-close-warp{
                        font-size: 14px !important;
                        cursor: pointer;
                        width: 15px;
                        height: 15px;
                        line-height: 13px;
                        background: #bfbfbf;
                        text-align: center;
                        border-radius: 50%;
                        color: #211c25;
                    }
                    .dns-detect >.span_warp >.dns-close-warp:hover{
                        background: #e8e8e8;
                    }
                    .dns-detect >.span_warp >.dns-close-warp:active{
                        background: #b7b7b7;
                    }
                    
                    #app.dns-open-app {
                        padding-top: 38px;
                        transition: all .5s ease;
                    }
                    #app.dns-open-app .navbar{
                        top: 38px;
                        transition: all .5s ease;
                    }
                    #app.dns-open-app .sidebar{
                        top: calc(3.6rem + 38px);
                        transition: all .5s ease;
                    }
                    
                    #app.dns-close-app {
                        padding-top: 0 !important;
                        transition: all .5s ease;
                    }
                    #app.dns-close-app .navbar{
                        top: 0 !important;
                        transition: all .5s ease;
                    }
                    #app.dns-close-app .sidebar{
                        top: 3.6rem !important;
                        transition: all .5s ease;
                    }
                    
                    @media (max-width: 890px){
                        .dns-detect{
                           height: 88px;
                           flex-wrap: wrap;
                           padding: 15px 1.5rem;
                        }
                        .dns-detect >.span_warp >.dns-close-warp{
                            border-top-right-radius: 0;
                            border-top-left-radius: 0;
                            border-bottom-right-radius: 0;
                            position: absolute;
                            right: 0;
                            top: 0;
                            width: 25px;
                            height: 25px;
                            line-height: 23px;
                            font-size: 18px !important;
                        }
                        #app.dns-open-app {
                            padding-top: 88px;
                            transition: all .5s ease;
                        }
                        #app.dns-open-app .navbar{
                            top: 88px;
                            transition: all .5s ease;
                        }
                        #app.dns-open-app .sidebar{
                            transition: all .5s ease;
                        }
                        .dns-detect >.span_warp{
                            margin-left: 19px;
                            flex-wrap: wrap;
                        }
                    }
                    @media (max-width: 450px){
                        .dns-detect{
                           height: 120px;
                           flex-wrap: wrap;
                           padding: 20px 1.5rem;
                        }
                        .dns-detect >.dns-success{
                            margin-right:20px;
                            align-items: baseline;
                        }
                        .dns-detect >.dns-danger{
                            margin-right:20px
                            align-items: baseline;
                        }
                        #app.dns-open-app {
                            padding-top: 120px;
                            transition: all .5s ease;
                        }
                        #app.dns-open-app .navbar{
                            top: 120px;
                            transition: all .5s ease;
                        }
                        #app.dns-open-app .sidebar{
                            top: calc(3.6rem + 88px);
                            transition: all .5s ease;
                        }
                    }
                    `;
        if(style.styleSheet){
            style.styleSheet.cssText = css;
        }else{
            style.appendChild(document.createTextNode(css));
        }
    
        let dns_html = document.createElement('div');
        dns_html.classList.add('dns-detect','dns-open');

        let _span = document.createElement('span');
        
        let _ip_warp = document.createElement('div');
        _ip_warp.classList.add('span_warp');
        
        let _ip_span = document.createElement('span');
        _ip_span.classList.add('ip');
        
        let _isp_span = document.createElement('span');
        _isp_span.classList.add('isp');
        
        let _close_span = document.createElement('span');
        _close_span.innerHTML = "&times";
        _close_span.classList.add('dns-close-warp');
        _close_span.onclick = function(){
            document.querySelector('.dns-detect').classList.add('dns-close');
            document.querySelector('#app').classList.add('dns-close-app')
        }

        
        function Ajax(params) {
            params = params || {};
            params.data = params.data || {};
            var _json = params.jsonp ? jsonp(params): json(params); // 判断是json还是jsonp
            function json(params) { // 普通请求
                params.type = (params.type || 'GET').toUpperCase(); // 设置请求默认类型
                var urlData = formatParams(params.data); // 对数据进行格式化
                var xhr = null; // 对xhr进行初始化
                if (window.XMLHttpRequest) {
                    xhr = new window.XMLHttpRequest();
                } else {
                    xhr = new ActiveXObject('Microsoft.XMLHTTP');
                }
                var headers = params.headers || {};
                if (params.type === 'GET') {
                    xhr.open(params.type, params.url + '?' + urlData, true);
                    setHeaders(xhr, headers);
                    xhr.send(null);
                } else {
                    xhr.open(params.type, params.url, true);
                    setHeaders(xhr, headers);
                    xhr.send(JSON.stringify(params.data));
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        var status = xhr.status;
                        if (status >= 200 && status < 300) {
                            var response = '';
                            var type = xhr.getResponseHeader('Content-Type');
                            if (type.indexOf('xml') !== -1 && xhr.responseXML) { // xml格式
                                response = xhr.responseXML;
                            } else if (type.indexOf('application/json') !== -1) { // JSON格式
                                response = JSON.parse(xhr.responseText);
                            } else {
                                response = xhr.responseText; // 字符串格式
                            }
                            params.success && params.success(response);
                        } else {
                            params.error && params.error(status);
                        }
                    }
                }
            }
            function jsonp(params) {
                var callbackName = params.jsonp; // 回调函数名
                var head = document.getElementsByTagName('head')[0];
                params.data['callback'] = callbackName;
                var data = formatParams(params.data);
                var script = document.createElement('script');
                head.appendChild(script);
                // 创建jsonp函数，成功后自动让success函数调用，在自动删除
                window[callbackName] = function (json) { // 设置回调，获取后台数据后才执行
                    head.removeChild(script);
                    clearTimeout(script.timer);
                    window[callbackName] = null;
                    params.success && params.success(json);
                };
                script.src = params.url + '?' + data; // 设置src的时候才开始向后台请求数据
                if (params.time) { // 限定时间
                    script.timer = setTimeout(function () {
                        window[callbackName] = null;
                        head.removeChild(script);
                        params.error && params.error({
                            message: '超时'
                        })
                    }, params.time);
                }
        
            }
            function formatParams(data) {
                // 使用 encodeURIComponent 对 URI的某部分编码
                var arr = [];
                for (var key in data) {
                    arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                }
                // 添加随机数，防止缓存
                arr.push('v=' + random());
                return arr.join('&');
            }
            function random() {
                return Math.floor(Math.random() * 10000 + 500);
            }
            function setHeaders(xhr, headers) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
        }
        
        //创建 Promise
        const Promise_ip = new Promise((resolve, reject) => {
            //获取 ip
            Ajax({
                url: 'https://api.ip.gs/LrkBCZ29O15Gv6St',
                headers: {
                  'Content-Type': 'application/json'
                },
                jsonp: 'getip',
                time: 10000,
                success(res) {
                    _ip_span.innerText = `IP Address: ${res.ip}`;
                    _isp_span.innerText = `ISP: ${res.isp}`;
                    _ip_warp.appendChild(_ip_span);
                    _ip_warp.appendChild(_isp_span);
                    _ip_warp.appendChild(_close_span);
                    dns_html.appendChild(_ip_warp)
                    resolve()
                },
                error(status) {
                    _ip_span.innerText = `Failed to get IP address`;
                    _ip_span.innerText = `Failed to get ISP`;
                    _ip_warp.appendChild(_ip_span);
                    _ip_warp.appendChild(_isp_span);
                    _ip_warp.appendChild(_close_span);
                    dns_html.appendChild(_ip_warp)
                    resolve()
                }
            });
            
        });
        
        const Promise_dns = new Promise((resolve, reject) => {
            //检测dns
            Ajax({
                url: 'https://check.dns.sh/',
                success(res){
                    _span.innerText = 'You are using DNS.SB. Your DNS requests are encrypted!';
                    _span.classList.add('dns-success');
                    dns_html.appendChild(_span);
                    resolve()
                },
                error(status){
                    _span.innerText = 'You are not using DNS.SB :(';
                    _span.classList.add('dns-danger');
                    dns_html.appendChild(_span);
                    resolve()
                }
            });
       });
       
       Promise.all([Promise_ip, Promise_dns]).then((res) => {
           body.appendChild(dns_html);
           document.querySelector('#app').classList.add('dns-open-app');
       });
    }
})(window,document);
