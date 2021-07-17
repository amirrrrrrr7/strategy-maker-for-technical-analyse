$(document).ready(function() {

    var x =0;

    function indicList() {

        //if select rsi
        if ($(this).val() == 2) {
            $('.rsi-form').dialog('open');
            $(this).val(1);
        }
        //if select macd 
        else if ($(this).val() == 3) {
            $('.macd-form').dialog('open');
            $(this).val(1);
        }
        //if select sma
        else if ($(this).val() == 4) {
            $('.sma-form').dialog('open');
            $(this).val(1);
        }
        //if select ema
        else if ($(this).val() == 5) {
            $('.ema-form').dialog('open');
            $(this).val(1);
        }

        //if select wma
        else if ($(this).val() == 6) {
            $('.wma-form').dialog('open');
            $(this).val(1);
        }

        //if select vwma
        else if ($(this).val() == 7) {
            $('.vwma-form').dialog('open');
            $(this).val(1);
        }

        //if select stochastic
        else if ($(this).val() == 8) {
            $('.stochastic-form').dialog('open');
            $(this).val(1);
        }

        //if select stochastic Fast
        else if ($(this).val() == 9) {
            $('.stochasticFast-form').dialog('open');
            $(this).val(1);
        }

        //if select stochastic Full
        else if ($(this).val() == 10) {
            $('.stochasticFull-form').dialog('open');
            $(this).val(1);
        }

        //if select cci
        else if ($(this).val() == 11) {
            $('.CCI-form').dialog('open');
            $(this).val(1);
        }

        //if select adx
        else if ($(this).val() == 12) {
            $('.ADX-form').dialog('open');
            $(this).val(1);
        }

        //if select atr
        else if ($(this).val() == 13) {
            $('.ATR-form').dialog('open');
            $(this).val(1);
        }

        //if select bolinger bands
        else if ($(this).val() == 14) {
            $('.BBands-form').dialog('open');
            $(this).val(1);
        }

        //if select parabolic sar
        else if ($(this).val() == 15) {
            $('.PSAR-form').dialog('open');
            $(this).val(1);
        }

        //if select ichimoku
        else if ($(this).val() == 16) {
            $('.ichi-form').dialog('open');
            $(this).val(1);
        }

        //if select momentum
        else if ($(this).val() == 17) {
            $('.momentum-form').dialog('open');
            $(this).val(1);
        }

        //if select williams R
        else if ($(this).val() == 18) {
            $('.williamsR-form').dialog('open');
            $(this).val(1);
        }

        //if select rate of change
        else if ($(this).val() == 19) {
            $('.roc-form').dialog('open');
            $(this).val(1);
        }

        //if select aroon
        else if ($(this).val() == 20) {
            $('.aroon-form').dialog('open');
            $(this).val(1);
        }
    }

    // if select indic-list
    $("#indic-list").on("change", indicList);
    //================================

    // if select price-list

    $('#price-list').change(function() {

        //if select open
        if ($(this).val() == 2) {
            $('.opn-form').dialog('open');
            $(this).val(1);
        }
        //if select high
        else if ($(this).val() == 3) {
            $('.high-form').dialog('open');
            $(this).val(1);
        }
        //if select low
        else if ($(this).val() == 4) {
            $('.lw-form').dialog('open');
            $(this).val(1);
        }
        //if select close
        else if ($(this).val() == 5) {
            $('.cls-form').dialog('open');
            $(this).val(1);
        }

    });

    //===============================

    //if select parenthesis-list

    $('#prnts-list').change(function() {

        //if select open parenthesis
        if ($(this).val() == 2) {
            $('.result').append('<span> ( </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append('"par[',x,']" : {');
            x += 1;
            $(this).val(1);
        }
        //if select close parenthesis
        else if ($(this).val() == 3) {
            $('.result').append('<span> ) </span>');
            $('.json').append('<span>}</span>');
            $(this).val(1);
        }
    });

    //===============================

    //if select operators-list

    $('#op-list').change(function() {

        //if select greater than 
        if ($(this).val() == 2) {
            $('.result').append('<span> بزرگتر از </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operato[',x,']" : ">" ,');
            x += 1;
            $(this).val(1);
        }
        //if select lower than 
        else if ($(this).val() == 3) {
            $('.result').append('<span> کوچکتر از </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operator[',x,']" : "<" ,');
            x += 1;
            $(this).val(1);
        }

        //if select greater or equal
        else if ($(this).val() == 4) {
            $('.result').append('<span> بزرگتر یا مساوی با </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operator[',x,']": ">=" ,');
            x += 1;
            $(this).val(1);
        }

        //if select lower or equal  
        else if ($(this).val() == 5) {
            $('.result').append('<span> کوچکتر یا مساوی با </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operator[',x,']": "<=" ,');
            x += 1;
            $(this).val(1);
        }

        //if select equal
        else if ($(this).val() == 6) {
            $('.result').append('<span>  مساوی با </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operator[',x,']": "==" ,');
            x += 1;
            $(this).val(1);
        }

        //if select cross to up
        else if ($(this).val() == 7) {
            $('.result').append('<span> متقاطع رو به بالا با </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operator[',x,']": "crossUp(a,b)" ,');
            x += 1;
            $(this).val(1);
        }

        //if select cross to down
        else if ($(this).val() == 8) {
            $('.result').append('<span> متقاطع رو به پایین با </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operator[',x,']": "crossDown(a,b)" ,');
            x += 1;
            $(this).val(1);
        }

        //if select plus
        else if ($(this).val() == 9) {
            $('.result').append('<span> به اضافه ی </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operator[',x,']": "+" ,');
            x += 1;
            $(this).val(1);
        }

        //if select mines 
        else if ($(this).val() == 10) {
            $('.result').append('<span> منهای </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operator[',x,']": "-" ,');
            x += 1;
            $(this).val(1);
        }

        //if select multplex 
        else if ($(this).val() == 11) {
            $('.result').append('<span> ضربدر </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operator[',x,']": "*" ,');
            x += 1;
            $(this).val(1);
        }

        //if select divide
        else if ($(this).val() == 12) {
            $('.result').append('<span> تقسیم بر </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "operator[',x,']": "/" ,');
            x += 1;
            $(this).val(1);
        }
    });

    //================================

    //if click volume button
    $('#vol-btn').click(function() {
        $('.vol-form').dialog('open');
    })

    //if click amount button
    $('#amnt-btn').click(function() {
        $('.amnt-form').dialog('open');
    })

    //================================

    // if select done-list
    $('#done-list').change(function() {

        // if select be
        if ($(this).val() == 2) {
            $('.result').append(' <span> بود </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(' , "strategy[',x,']": " ',$("input[name='str']:checked").attr('id'),' "} ]');
            x += 1;
            $(this).val(1);
        }
        // if select and
        else if ($(this).val() == 3) {
            $('.result').append(' <span> بود و </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "and[',x,']":"true" },{ ');
            x += 1;
            $(this).val(1);
        }
        // if select or
        else if ($(this).val() == 4) {
            $('.result').append(' <span> بود یا </span>');
            $('.json').append('<span></span>');
            $('.json :last-child').append(', "or[',x,']":"true" } , { ');
            x += 1;
            $(this).val(1);
        }
    });

    //==========================================

    // jquery ui

    $(function() {
        $( ".button-tools" ).button();
        $("input[type='radio']").checkboxradio();
        $("input[type='checkbox']").checkboxradio();
        $('#id_stock').button();

        // ============ indicators submits ==============
        
        // rsi form
        $(".rsi-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:340,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit rsi form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور rsi با دوره ی ', $('#rsi-inpt').val(), ' خط rsi ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"rsi[',x,']": ', $('#rsi-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#rsi-inpt').val('');
                    }
                }
            }
        );
        // =====================

        // macd form
        $(".macd-form").dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit macd form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور macd با مقادیر میانگین متحرک اول ',$('#macd-inpt1').val(), ' و با مقدار میانگین متحرک دوم ',$('#macd-inpt2').val(), ' و سیگنال ',$('#macd-inpt3').val(),' ',$("input[name='line']:checked").val());
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"macdFast[',x,']": ', $('#macd-inpt1').val(),' , ','"macdSlow[',x,']": ', $('#macd-inpt2').val(),' , ','"macdSignal[',x,']": ', $('#macd-inpt3').val(),' , ','"lineMACD[',x,']":" ',$("input[name='line']:checked").attr('id'),' "');
                        x += 1;
                        $(this).dialog("close");
                        $('#macd-inpt1').val('');
                        $('#macd-inpt2').val('');
                        $('#macd-inpt3').val('');
                    }
                }
            }
        );
        // =====================

        // sma form
        $(".sma-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:350,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit sma form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور sma با دوره ی ', $('#sma-inpt').val(), ' خط sma ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"sma[',x,']":', $('#sma-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#sma-inpt').val('');
                    }
                }
            }
        );

        // =====================

        // ema form
        $(".ema-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:350,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit ema form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور EMA با دوره ی ', $('#ema-inpt').val(), ' خط EMA ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"ema[',x,']":', $('#ema-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#ema-inpt').val('');
                    }
                }
            }
        );

        // =====================

        // wma form
        $(".wma-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:350,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit wma form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور WMA با دوره ی ', $('#wma-inpt').val(), ' خط AV ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"AverageWeighted[',x,']":', $('#wma-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#wma-inpt').val('');
                    }
                }
            }
        );
        
        // =====================

        // vwma form
        $(".vwma-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:380,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit vwma form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور VWMA با دوره ی ', $('#vwma-inpt').val(), ' خط VWMA ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"vwma[',x,']":', $('#vwma-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#vwma-inpt').val('');
                    }
                }
            }
        );

        // =====================

        // stochastic form
        $(".stochastic-form").dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit stochastic form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور Stochastic با مقادیر دوره ی ',$('#stochastic-inpt1').val(), ' و دوره ی dFast ',$('#stochastic-inpt2').val(), ' و دوره ی dSlow ',$('#stochastic-inpt3').val(),' ',$("input[name='perc']:checked").val());
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"stochastic[',x,']": ', $('#stochastic-inpt1').val(),' , ','"stochasticDFast[',x,']": ', $('#stochastic-inpt2').val(),' , ','"stochasticDSlow[',x,']": ', $('#stochastic-inpt3').val(),' , ','"lineStoch[',x,']":" ',$("input[name='perc']:checked").attr('id'),' "');
                        x += 1;
                        $(this).dialog("close");
                        $('#stochastic-inpt1').val('');
                        $('#stochastic-inpt2').val('');
                        $('#stochastic-inpt3').val('');
                    }
                }
            }
        );

        // =====================

        // stochastic Fast form
        $(".stochasticFast-form").dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit stochastic Fast form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور Stochastic Fast با مقادیر دوره ی ',$('#stochasticFast-inpt1').val(), ' و دوره ی dFast ',$('#stochasticFast-inpt2').val(),' ',$("input[name='percFast']:checked").val());
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"stochasticFast[',x,']": ', $('#stochasticFast-inpt1').val(),' , ','"stochasticFastDFast[',x,']": ', $('#stochasticFast-inpt2').val(),' , ','"lineStochFast[',x,']":" ',$("input[name='percFast']:checked").attr('id'),' "');
                        x += 1;
                        $(this).dialog("close");
                        $('#stochasticFast-inpt1').val('');
                        $('#stochasticFast-inpt2').val('');
                    }
                }
            }
        );

        // =====================

        // stochastic Full form
        $(".stochasticFull-form").dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit stochastic Full form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور Stochastic Full با مقادیر دوره ی ',$('#stochasticFull-inpt1').val(), ' و دوره ی dFast ',$('#stochasticFull-inpt2').val(), ' و دوره ی dSlow ',$('#stochasticFull-inpt3').val(),' ',$("input[name='percFull']:checked").val());
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"stochasticFull[',x,']": ', $('#stochasticFull-inpt1').val(),' , ','"stochasticFullDFast[',x,']": ', $('#stochasticFull-inpt2').val(),' , ','"stochasticFullDSlow[',x,']": ', $('#stochasticFull-inpt3').val(),' , ','"lineStochFull[',x,']":" ',$("input[name='percFull']:checked").attr('id'),' "');
                        x += 1;
                        $(this).dialog("close");
                        $('#stochasticFull-inpt1').val('');
                        $('#stochasticFull-inpt2').val('');
                        $('#stochasticFull-inpt3').val('');
                    }
                }
            }
        );

        // =====================

        // cci form
        $(".CCI-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:350,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit cci form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور CCI با دوره ی ', $('#CCI-inpt').val(), ' خط CCI ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"CCI[',x,']":', $('#CCI-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#CCI-inpt').val('');
                    }
                }
            }
        );

        // =====================

        // adx form
        $(".ADX-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:350,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit adx form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور ADX با دوره ی ', $('#ADX-inpt').val(), ' خط ADX ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"ADX[',x,']":', $('#ADX-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#ADX-inpt').val('');
                    }
                }
            }
        );

        // atr form
        $(".ATR-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:350,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit atr form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور ATR با دوره ی ', $('#ATR-inpt').val(), ' خط ATR ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"ATR[',x,']":', $('#ATR-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#ATR-inpt').val('');
                    }
                }
            }
        );

        // =====================

        // bolinger bands form
        $(".BBands-form").dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit bolinger bands form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور Bolinger Bands با مقادیر دوره ی ',$('#BBands-inpt1').val(), ' و دوره ی dev factor ',$('#BBands-inpt2').val(),' ',$("input[name='BBands']:checked").val());
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"BBands[',x,']": ', $('#BBands-inpt1').val(),' , ','"BBandsDevFactor[',x,']": ', $('#BBands-inpt2').val(),' , ','"lineBBands[',x,']":" ',$("input[name='BBands']:checked").attr('id'),' "');
                        x += 1;
                        $(this).dialog("close");
                        $('#BBands-inpt1').val('');
                        $('#BBands-inpt2').val('');
                    }
                }
            }
        );

        // =====================

        // parabolic sar form
        $(".PSAR-form").dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit parabolic sar form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور Parabolic SAR با مقادیر دوره ی ',$('#PSAR-inpt1').val(), ' و دوره ی at ',$('#PSAR-inpt2').val(), ' و دوره ی at max ',$('#PSAR-inpt3').val(), ' خط PSAR ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"PSAR[',x,']": ', $('#PSAR-inpt1').val(),' , ','"PSARat[',x,']": ', $('#PSAR-inpt2').val(),' , ','"PSARatMax[',x,']": ', $('#PSAR-inpt3').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#PSAR-inpt1').val('');
                        $('#PSAR-inpt2').val('');
                        $('#PSAR-inpt3').val('');
                    }
                }
            }
        );

        // =====================

        // ichimoku form
        $(".ichi-form").dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit ichioku form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور Ichimoku با مقادیر tenkan ',$('#ichi-inpt1').val(), ' و kijun ',$('#ichi-inpt2').val(), ' و senkou ',$('#ichi-inpt3').val(), ' و senkou-leud ',$('#ichi-inpt4').val(), ' و chikou ',$('#ichi-inpt5').val(),' ',$("input[name='ichi']:checked").val());
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"tenkan[',x,']": ', $('#ichi-inpt1').val(),' , ','"kijun[',x,']": ', $('#ichi-inpt2').val(),' , ','"senkou[',x,']": ', $('#ichi-inpt3').val(),' , ','"senkouLeud[',x,']": ', $('#ichi-inpt4').val(),' , ','"chikou[',x,']": ', $('#ichi-inpt5').val(),' , ','"lineIchi[',x,']":" ',$("input[name='ichi']:checked").attr('id'),' "');
                        x += 1;
                        $(this).dialog("close");
                        $('#ichi-inpt1').val('');
                        $('#ichi-inpt2').val('');
                        $('#ichi-inpt3').val('');
                        $('#ichi-inpt4').val('');
                        $('#ichi-inpt5').val('');
                    }
                }
            }
        );

        // =====================

        // momentum form
        $(".momentum-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:450,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit momentum form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور Momentum با دوره ی ', $('#momentum-inpt').val(), ' خط Momentum ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"momentum[',x,']":', $('#momentum-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#momentum-inpt').val('');
                    }
                }
            }
        );

        // =====================

        // williams R form
        $(".williamsR-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:450,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit williams R form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور Williams R با دوره ی ', $('#williamsR-inpt').val(), ' خط Williams R ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"williamsR[',x,']":', $('#williamsR-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#williamsR-inpt').val('');
                    }
                }
            }
        );

        // =====================

        // rate of change form
        $(".roc-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:450,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit rate of change form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور Rate of Change با دوره ی ', $('#roc-inpt').val(), ' خط ROC ');
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"Roc[',x,']":', $('#roc-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#roc-inpt').val('');
                    }
                }
            }
        );

        // =====================

        // aroon form
        $(".aroon-form").dialog(
            {
                modal:true,
                autoOpen:false,
                width:350,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },
                
                // submit aroon form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' اندیکاتور Aroon با دوره ی ', $('#aroon-inpt').val(),' ',$("input[name='aroon']:checked").val());
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"aroonIndicator[',x,']":', $('#aroon-inpt').val(),' , ','"lineAroon[',x,']":" ',$("input[name='aroon']:checked").attr('id'),' "');
                        x += 1;
                        $(this).dialog("close");
                        $('#aroon-inpt').val('');
                    }
                }
            }
        );

        // =============================

        // ============ price submits ==============

        // open form
        $('.opn-form').dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },

                // submit open form
                buttons:{
                    "ثبت":function(){
                        
                        if ($('input.today').is(':checked')) {
                            $('.result').append('<span> قیمت آغازین امروز</span>');
                            $('.json').append('<span></span>');
                            $('.json :last-child').append('"open[',x,']":', 0);
                            x += 1;
                            $('input.today').prop('checked', false);
                            $(this).dialog("close");
                        } else {
                            $('.result').append('<span></span>');
                            $('.result :last-child').append(' قیمت آغازین ', $('#opn-inpt').val(), ' روز قبل ');
                            $('.json').append('<span></span>');
                            $('.json :last-child').append('"open[',x,']": -', $('#opn-inpt').val());
                            x += 1;
                            $(this).dialog("close");
                            $('#opn-inpt').val('');
                        }
                    }
                }
            }
        );
        // =====================

        // high form
        $('.high-form').dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },

                // submit high form
                buttons:{
                    "ثبت":function(){
                        if ($('input.today').is(':checked')) {
                            $('.result').append('<span> بالاترین قیمت امروز </span>');
                            $('.json').append('<span></span>');
                            $('.json :last-child').append('"high[',x,']":', 0);
                            x += 1;
                            $('input.today').prop('checked', false);
                            $(this).dialog("close");
                        } else {
                            $('.result').append('<span></span>');
                            $('.result :last-child').append(' بالاترین قیمت ', $('#high-inpt').val(), ' روز قبل ');
                            $('.json').append('<span></span>');
                            $('.json :last-child').append('"high[',x,']": -', $('#high-inpt').val());
                            x += 1;
                            $(this).dialog("close");
                            $('#high-inpt').val('');
                        }
                    }
                }
            }
        );
        // =====================

        // low form
        $('.lw-form').dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },

                // submit low form
                buttons:{
                    "ثبت":function(){
                        if ($('input.today').is(':checked')) {
                            $('.result').append('<span> پایین ترین قیمت امروز </span>');
                            $('.json').append('<span></span>');
                            $('.json :last-child').append('"low[',x,']":', 0);
                            x += 1;
                            $('input.today').prop('checked', false);
                            $(this).dialog("close");
                        } else {
                            $('.result').append('<span></span>');
                            $('.result :last-child').append(' پایین ترین قیمت ', $('#lw-inpt').val(), ' روز قبل ');
                            $('.json').append('<span></span>');
                            $('.json :last-child').append('"low[',x,']": -', $('#lw-inpt').val());
                            x += 1;
                            $(this).dialog("close");
                            $('#lw-inpt').val('');
                        }
                    }
                }
            }
        );
        // =====================

        //close form
        $('.cls-form').dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },

                // submit close form
                buttons:{
                    "ثبت":function(){
                        if ($('input.today').is(':checked')) {
                            $('.result').append('<span> قیمت پایانی امروز </span>');
                            $('.json').append('<span></span>');
                            $('.json :last-child').append('"close[',x,']":', 0);
                            x += 1;
                            $('input.today').prop('checked', false);
                            $(this).dialog("close");
                        } else {
                            $('.result').append('<span></span>');
                            $('.result :last-child').append(' قیمت پایانی ', $('#cls-inpt').val(), ' روز قبل ');
                            $('.json').append('<span></span>');
                            $('.json :last-child').append('"close[',x,']": -', $('#cls-inpt').val());
                            x += 1;
                            $(this).dialog("close");
                            $('#cls-inpt').val('');
                        }
                    }
                }
            }
        )

        // =====================

        // =============================

        // volume form
        $('.vol-form').dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },

                // submit value form
                buttons:{
                    "ثبت":function(){
                        if ($('input.today').is(':checked')) {
                            $('.result').append('<span> حجم امروز </span>');
                            $('.json').append('<span></span>');
                            $('.json :last-child').append('"volume[',x,']":', 0);
                            x += 1;
                            $('input.today').prop('checked', false);
                            $(this).dialog("close");
                        } else {
                            $('.result').append('<span></span>');
                            $('.result :last-child').append(' حجم ', $('#vol-inpt').val(), ' روز قبل ');
                            $('.json').append('<span></span>');
                            $('.json :last-child').append('"volume[',x,']": -', $('#vol-inpt').val());
                            x += 1;
                            $(this).dialog("close");
                            $('#vol-inpt').val('');
                        }
                    }
                }
            }
        );
        // =====================

        // amount form
            $('.amnt-form').dialog(
            {
                modal:true,
                autoOpen:false,
                show:{
                    effect:"fadeIn",
                    duration:500
                },
                hide:{
                    effect:"fadeOut",
                    duration:500
                },

                // submit amount form
                buttons:{
                    "ثبت":function(){
                        $('.result').append('<span></span>');
                        $('.result :last-child').append(' مقدار ', $('#amnt-inpt').val());
                        $('.json').append('<span></span>');
                        $('.json :last-child').append('"amount[',x,']":', $('#amnt-inpt').val());
                        x += 1;
                        $(this).dialog("close");
                        $('#amnt-inpt').val('');
                    }
                }
            }
        );
        // =====================
    });

    //buy or sell condition
    $('input[name="str"]').change(function() {
        if ($('input#buystr').is(':checked')) {
            $('#done').val('بخر');
            $('#done').css({
                'color': 'rgb(49, 49, 49)',
                'background-color':'rgb(144, 207, 186)',
                'border':'solid 1px rgb(72, 184, 146)'
            });
        } else {
            $('#done').val('بفروش');
            $('#done').css({
                'color': '#fefefe',
                'background-color':'#d169699c',
                'border':'solid 1px red'
            })

        }
    })
    // =====================

    // delete button
    $('#del').click(function() {
        $('.result :last-child').remove();
        $('.json :last-child').remove();
        x -= 1;
    })
    // =====================

    // done button
    $('#done').click(function() {
       $('#id_some_str').val($('.hidden span').text());
       $("#id_persian_text").val($('.result').text());
    //    console.log(JSON.stringify(($('.hidden span').text())))
       $.post("URL",
       JSON.stringify(($('.hidden span').text())),
        function(data,status){
        console.log("Data: " + data + "\nStatus: " + status);
        })
    });
    // =====================

    // select list style
    $('.select-list').focus(function(){
        $(this).css({'background-color':'#007FFF',
    'color':'white',
    'border':'solid 1px #003EFF'})
    });
    $('.select-list').blur(function(){
        $(this).css({'background-color':'#ededed9c',
    'color':'black',
    'border':'solid 1px silver'})
    });
    // =====================

})
