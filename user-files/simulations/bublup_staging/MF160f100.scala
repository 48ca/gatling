package bublup_staging

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class MF160f100 extends Simulation {

	val httpProtocol = http
		.baseURL("https://webservice-staging.bublup.com")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.authorizationHeader("Token Fl60B6Yy2k-MAViH1UGzsw")
		.contentTypeHeader("application/x-www-form-urlencoded")
		.userAgentHeader("curl/7.37.1")



    val uri1 = "webservice-staging.bublup.com"

	val scn = scenario("MagicFoldersAuto")
		.exec(http("request_0")
			.post("/api/v1/folder_options")
			.formParam("url", "jhoughton.me")
			.formParam("title", "hello")
			.formParam("snippet", "hello"))

	setUp(scn.inject(rampUsers(16000) over (100 seconds))).protocols(httpProtocol)
}
