// // 二度押し防止
// (function($) {
//     $.fn.stopDoubleSubmit = function() {
//         var $formSource = $(this);
//         $formSource.unbind('submit');
//         $formSource.submit(function() {
//             $formSource.submit(function(evt) {
//                 evt.preventDefault();
//                 evt.stopPropagation();
//             });
//         });
//     }
// })(jQuery);

// // clickOnceに二度押し防止をバインド
// $(function() {
//     $('.clickOnce').stopDoubleSubmit();
// });


//全角 →　半角
function valReplace(val){
    if (!val) {
        return val;
    } else {
        if(val.match(/[０-９]/)) {
            val = val.replace(/[０-９]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            });
        }
        if(val.match(/[^！＂＃＄％＆＇（）＊＋，－．ー−／：；＜＝＞？＠［＼］＾＿｀｛｜｝]+/)) {
            val = val.replace(/[！＂＃＄％＆＇（）＊＋，－．ー／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            }).replace(/[‐－―ー−]/g, '-');
        }
        if(val.match(/　/)) {
            val = val.replace(/　/g," ");
        }
        return val;
    }
};

// 全角 →　半角（追加）
function valReplaceAdd(val){
        if (!val) {
                return val;
        } else {
                if(val.match(/[Ａ-Ｚａ-ｚ０-９]/)) {
                        val = val.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
                                return String.fromCharCode(s.charCodeAt(0) - 65248);
                        });
                }
                if(val.match(/[－．ー－＿]+/)) {
                        val = val.replace(/[．＿]/g, function (s) {
                                return String.fromCharCode(s.charCodeAt(0) - 65248);
                        }).replace(/[‐－―ー－]/g, '-');
                }
                return val;
        }
};

//半角 →　全角
function valReplaceFull(val){
    if (!val) {
        return val;
    } else {
        if(val.match(/[０-９]/)) {
            val = val.replace(/[０-９]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            });
        }
        if(val.match(/[A-Za-z0-9-!"#$%&'()=<>,.?_\[\]{}@^~\\]/)) {
            val = val.replace(/[A-Za-z0-9-!"#$%&'()=<>,.?_\[\]{}@^~\\]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) + 65248);
            });
        }
        if(val.match(/ /)) {
            val = val.replace(/ /g,"　");
        }
        if(val.match(/[ｦ-ﾟ]/)) {
            val = hankaku(val);
        }
        return val;
    }
};

function hankaku(val){
    var kanaMap = {
        'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
        'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
        'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
        'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
        'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
        'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
        'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
        'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
        'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
        'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
        'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
        'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
        'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
        'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
        'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
        'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
        'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
        'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
        '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
    };
    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return val
    .replace(reg, function (match) {
        return kanaMap[match];
    })
    .replace(/ﾞ/g, '゛')
    .replace(/ﾟ/g, '゜');
};


//半角置き換え
$(".inputReplace").blur(function(){
    var val = $(this).val();
    $(this).val(valReplace(val));
});

//半角置き換え(add)
$(".inputReplaceAdd").blur(function(){
    var val = $(this).val();
    $(this).val(valReplaceAdd(val));
});

//全角置き換え
$(".inputReplaceFull").blur(function(){
    var val = $(this).val();
    $(this).val(valReplaceFull(val));
});

// カタカナ補完後の後処理
$( ".inputCompanyKana,.inputName01,.inputName02").change(function() {
    var val = $(this).val();
    var kanaclass = '.' + $(this).data('linkclass');
    var kanaval = $(kanaclass).val();

    $(this).val(valReplaceFull(val));
    // $(kanaclass).val(errKanaCk(kanaval,kanaclass));
    // $(kanaclass).val(valReplaceFull(kanaval));
});
