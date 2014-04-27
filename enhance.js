var link = document.createElement('link');
link.href =  chrome.extension.getURL('enhance.css');
link.rel = 'stylesheet';
document.documentElement.insertBefore(link);


$("#header h1").after($("<div id='plugin_area'><span class='on_vpn'>ON VPN</span></div>"))

var deselectedClasses = [
	"models.CustomerOccupationTest.class",
	"models.CustomerProfileTest.class",
	"models.CustomerResetPasswordTest.class",
	"service.CEFAnalysisServiceTest.class",
	"service.CustomerServiceTest.class",
	"service.ETFAnalysisServiceTest.class",
	"service.GlobalLoginServiceTest.class",
	"service.MembershipServiceTest.class",
	"controllers.CustomersControllerTest.class"
]

var onVpn = $("#plugin_area .on_vpn");
onVpn.click(function(){
	if(onVpn.hasClass("selected")){
		onVpn.removeClass("selected");
		$(".notest").removeClass("notest").addClass("test");
	}else{
		onVpn.addClass("selected");
		$(deselectedClasses).each(function(i,v){
			$("div[id='"+v+"']").removeAttr("class").addClass("notest");
		});
	}
});
