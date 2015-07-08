package bublup_staging

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

	val httpProtocol = http
		.baseURL("http://ocsp.apple.com")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-us")
		.authorizationHeader("Token nTVIQQEu3sgFY_ezYCobRg")
		.connection("keep-alive")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18")

	val headers_0 = Map("User-Agent" -> "ocspd/1.0.3")

	val headers_1 = Map("Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")

	val headers_2 = Map("Accept" -> "text/css,*/*;q=0.1")

	val headers_41 = Map("User-Agent" -> "Safari/10600.3.18 CFNetwork/720.2.4 Darwin/14.1.0 (x86_64)")

    val uri1 = "metrics.apple.com"
    val uri2 = "http://images.apple.com"
    val uri3 = "http://www.apple.com"
    val uri4 = "http://ocsp.apple.com/ocsp-wwdr02"
    val uri5 = "sr.symcd.com"

	val scn = scenario("RecordedSimulation")
		.exec(http("request_0")
			.get("http://" + uri5 + "/MFYwVKADAgEAME0wSzBJMAkGBSsOAwIaBQAEFHQkFGcGn%2FXgmD9ePhproGUqVBV1BBQBWavn3ToLWaZkY9bPIAdX1ZHnagIQBEwVunm%2BuwEKnXqAVcmnEQ%3D%3D")
			.headers(headers_0)
			.resources(http("request_1")
			.get(uri3 + "/")
			.headers(headers_1),
            http("request_2")
			.get(uri3 + "/wss/fonts/?family=Myriad+Set+Pro&v=1")
			.headers(headers_2),
            http("request_3")
			.get(uri3 + "/home/styles/home.css")
			.headers(headers_2),
            http("request_4")
			.get(uri3 + "/home/styles/promos.css")
			.headers(headers_2),
            http("request_5")
			.get(uri3 + "/v/home/bx/styles/home.built.css")
			.headers(headers_2),
            http("request_6")
			.get(uri3 + "/v/home/bx/scripts/head.built.js"),
            http("request_7")
			.get(uri3 + "/v/home/bx/scripts/home.built.js"),
            http("request_8")
			.get(uri2 + "/ac/globalheader/1.1/styles/globalheader.css")
			.headers(headers_2),
            http("request_9")
			.get(uri2 + "/metrics/ac-analytics/0.2/scripts/ac-analytics.js"),
            http("request_10")
			.get(uri2 + "/ac/globalheader/1.1/scripts/globalheader.js"),
            http("request_11")
			.get(uri3 + "/wss/fonts/Myriad-Set-Pro/v1/myriad-set-pro_ultralight.woff"),
            http("request_12")
			.get(uri3 + "/wss/fonts/Myriad-Set-Pro/v1/myriad-set-pro_thin.woff"),
            http("request_13")
			.get(uri2 + "/ac/globalheader/1.1/images/lang/en-US/tab_store.svg"),
            http("request_14")
			.get(uri3 + "/wss/fonts/Myriad-Set-Pro/v1/myriad-set-pro_semibold.woff"),
            http("request_15")
			.get(uri3 + "/wss/fonts/Myriad-Set-Pro/v1/myriad-set-pro_medium.woff"),
            http("request_16")
			.get(uri3 + "/wss/fonts/Myriad-Set-Pro/v1/myriad-set-pro_text.woff"),
            http("request_17")
			.get(uri2 + "/ac/globalheader/1.1/images/tab_watch.svg"),
            http("request_18")
			.get(uri2 + "/ac/globalheader/1.1/images/tab_iphone.svg"),
            http("request_19")
			.get(uri2 + "/ac/globalheader/1.1/images/tab_mac.svg"),
            http("request_20")
			.get(uri2 + "/ac/globalheader/1.1/images/tab_ipad.svg"),
            http("request_21")
			.get(uri2 + "/ac/globalheader/1.1/images/lang/en-US/tab_support.svg"),
            http("request_22")
			.get(uri2 + "/global/elements/flags/16x16/usa_2x.png"),
            http("request_23")
			.get(uri2 + "/ac/globalheader/1.1/images/tab_music.svg"),
            http("request_24")
			.get(uri3 + "/wss/fonts/Myriad-Set-Pro/v1/myriad-set-pro_bold.woff"),
            http("request_25")
			.get(uri3 + "/v/home/bx/ac-assets/fonts/AppleIcons-Thin.woff"),
            http("request_26")
			.get(uri3 + "/v/home/bx/ac-assets/fonts/AppleIcons-Ultralight.woff"),
            http("request_27")
			.get(uri2 + "/v/home/bx/images/music_logo_medium_2x.png"),
            http("request_28")
			.get(uri2 + "/v/home/bx/images/watch_logo_medium_2x.png"),
            http("request_29")
			.get(uri3 + "/v/home/bx/ac-assets/fonts/AppleIcons-Text.woff"),
            http("request_30")
			.get(uri2 + "/v/home/bx/images/home_hero_watch_medium_2x.png"),
            http("request_31")
			.get("http://" + uri1 + "/b/ss/appleglobal,applehome/1/H.27/s18340788132045?AQB=1&ndh=1&t=1%2F6%2F2015%2012%3A11%3A39%203%20240&fid=031F2A5E2005F21A-23D64E8610DF238F&pageName=apple%20-%20index%2Ftab%20%28us%29&g=http%3A%2F%2Fwww.apple.com%2F&cc=USD&ch=www.us.homepage&server=new%20approach%20ac-analytics&c4=D%3Dg&c5=macintel%202x&c9=10.10.x&c18=quicktime%207.x&c20=non-store%20kiosk&c25=direct%20entry&c48=1&c49=D%3D2AC4259A0501140D-4000010FC024A528&c50=homepage%3D2&v54=http%3A%2F%2Fwww.apple.com%2F&h1=www.us.homepage&s=1440x900&c=24&j=1.6&v=Y&k=Y&bw=1264&bh=774&p=Default%20Browser%20Helper%3BJava%20Applet%20Plug-in%3BQuickTime%20Plug-in%207.7.3%3BWebKit%20built-in%20PDF%3B&AQE=1"),
            http("request_32")
			.get(uri2 + "/v/home/bx/images/promo_ios_large_2x.jpg"),
            http("request_33")
			.get(uri2 + "/v/home/bx/images/home_hero_iphone_medium_2x.png"),
            http("request_34")
			.get(uri2 + "/v/home/bx/images/home_hero_ipad_medium_2x.png"),
            http("request_35")
			.get(uri2 + "/v/home/bx/images/music_hero_medium_2x.jpg"),
            http("request_36")
			.get(uri2 + "/v/home/bx/images/promo_osx_large_2x.jpg"),
            http("request_37")
			.get(uri2 + "/v/home/bx/images/promo_watch_os_large_2x.jpg"),
            http("request_38")
			.get(uri2 + "/v/home/bx/images/home_hero_macbook_medium_2x.png"),
            http("request_39")
			.get(uri2 + "/v/home/bx/images/promo_keynote_large_2x.jpg"),
            http("request_40")
			.get(uri2 + "/home/images/og.jpg?201506300817"),
            http("request_41")
			.get(uri3 + "/apple-touch-icon-precomposed.png")
			.headers(headers_41)
			.check(status.is(404)),
            http("request_42")
			.get(uri3 + "/favicon.ico"),
            http("request_43")
			.get(uri3 + "/apple-touch-icon.png")
			.headers(headers_41)))
		.pause(9)
		.exec(http("request_44")
			.get("/ocsp-wwdr02/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFADrDMz0cWy6RiOj1S%2BY1D32MKkdBBSIJxcJqbYYYIvs67r2R1nFUlSjtwIIPJxtqFYlBSk%3D")
			.headers(headers_0)
			.resources(http("request_45")
			.get(uri4 + "/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFADrDMz0cWy6RiOj1S%2BY1D32MKkdBBSIJxcJqbYYYIvs67r2R1nFUlSjtwIILCbb7bH0z6Q%3D")
			.headers(headers_0)))
		.pause(13)
		.exec(http("request_46")
			.get(uri3 + "/?_=1435767050417"))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}