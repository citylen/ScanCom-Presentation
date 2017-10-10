var jssor_1_slider;
jssor_1_slider_init = function () {

    var jssor_1_options = {
        $AutoPlay: true,
        $Idle: 0,
        $AutoPlaySteps: 4,
        $SlideDuration: 40000,
        $SlideEasing: $Jease$.$Linear,
        $FillMode: 4,
        $PauseOnHover: 0,
        $SlideWidth: 2700,
        $Cols: 1
    };

    jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    function ScaleSlider() {
        var uniwin = {
            width: window.innerWidth || document.documentElement.clientWidth
            || document.body.offsetWidth,
            height: window.innerHeight || document.documentElement.clientHeight
            || document.body.offsetHeight
        };
        jssor_1_slider.$ScaleHeight(uniwin.height);
        document.getElementById("ct_Wrapper").style.width = uniwin.width;
        document.getElementById("ct_Wrapper").style.height = uniwin.height;
        //document.getElementById("ct_001Image").style.height = uniwin.height;
        //alert(uniwin.width + " - " + uniwin.height);

    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
};
jssor_1_slider_init();

function n_Set2ScreenHeight(ct_Control) {
    ct_Control.height = screen.height;
    alert(ct_Control)
}
//$('#ct_001Modal').on('show.bs.modal', function () {
//    jssor_1_slider.$Pause();
//});
//$('#ct_001Modal').on('hidden.bs.modal', function () {
//    jssor_1_slider.$Play();
//});

