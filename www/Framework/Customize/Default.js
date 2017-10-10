function n_AdjustMenuPadding() {
	var v_Width = $(window).width();
	var ct_MainMenu = document.getElementById("ct_MainMenu");
	var cts_li = ct_MainMenu.getElementsByTagName("li");
	var padding;

	//document.getElementById("ct_Test").innerHTML = v_Width;
	if (v_Width >= 1000) {
		if (v_Width < 1200)
			padding = Math.floor((v_Width - 1000) / 5);
		else
			padding = Math.round((1200 - 1000) / 5);
		for (i = 0; i < cts_li.length; i++) {
			cts_li[i].style.paddingLeft = padding + "px";
		}
	}
	else {
		for (i = 0; i < cts_li.length; i++) {
			cts_li[i].style.removeProperty("padding-left");
		}
	}
}
function n_Iframe169Scale(p_IframeID)
{
	var ct_Iframe = $("#" + p_IframeID);
	var v_Width = ct_Iframe.width();
	ct_Iframe.height((v_Width * 9) / 16);
	return v_Width;
}
window.onload = function () {
    n_AdjustMenuPadding();
    if (n_Init())
		n_Init();
}
window.onresize = function () {
    n_AdjustMenuPadding();
	if (n_OnResize())
		n_OnResize();
}
