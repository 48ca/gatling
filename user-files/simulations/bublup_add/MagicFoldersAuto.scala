package bublup_add

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class MagicFoldersAuto extends Simulation {

	val httpProtocol = http
		.baseURL("http://www.wikipedia.org")
		.inferHtmlResources()
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate, sdch")
		.acceptLanguageHeader("en-US,en;q=0.8")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36")



    val uri1 = "www.wikipedia.org"

	val scn = scenario("MagicFoldersAuto")
		.exec(http("request_0")
			.get("/")
			.check(status.is(301)))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}