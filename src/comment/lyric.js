function parseLyric(text) {
    //先按行分割
    var lyric = text.split('n'); 
    //新建一个数组存放最后结果
    lrc = new Array(); 
    var _l = lyric.length;
    for(i=0;i<_l;i++) {
        //正则匹配播放时间返回一个数组
        var sj = lyric[i].match(/[d{2}:d{2}((.|:)d{2})]/g);
        //获得该行歌词正文 
        var _lrc = lyric[i].replace(/[d{2}:d{2}((.|:)d{2})]/g,"");
        //过滤掉空行等非歌词正文部分
        if(sj != null) { 
            //可能有多个时间标签对应一句歌词的情况，用一个循环解决
            var _ll = sj.length;
            for(j=0;j<_ll;j++){
                var _s=sj[j];
                var min = Number(String(_s.match(/[d{2}/i)).slice(1));
                var sec = parseFloat(String(_s.match(/d{2}.d{2}/i)));
                //换算时间，保留两位小数
                var _t = Math.round((min  60 + sec)100)/100;
                //把时间和对应的歌词保存到数组
                lrc.push([_t,_lrc]);
            }
        }
    }
    //重新按时间排序
    lrc.sort(function(a,b){
        return a[0]-b[0];    
    });
    return lrc;
}