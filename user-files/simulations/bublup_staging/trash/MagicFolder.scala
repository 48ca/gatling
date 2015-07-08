//package bublup_staging

//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//import scala.concurrent.duration._
//
//class MagicFolder extends Simulation {
//
//  object Folder {
//
  //  val folder = exec(http("Home") // let's give proper names, they are displayed in the reports, and used as keys
 //     .options("""url="jhoughton.me&title=jhoughton.me&snippet=jhoughton.me"""") 
//	  .header("Authorization","Token Fl60B6Yy2k-MAViH1UGzsw")
//	  .get("/api/v1/folder_options"))
 // }
//
 // val httpConf = http
//    .baseURL("http://webservice-staging.bublup.com/")
//	.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
//    .doNotTrackHeader("1")
//    .acceptLanguageHeader("en-US,en;q=0.5")
//    .acceptEncodingHeader("gzip, deflate")
//    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")
//
//  // Now, we can write the scenario as a composition
//  val scn = scenario("Magic Folders").exec(Folder.folder)
//  setUp(scn.inject(atOnceUsers(100)).protocols(httpConf))
//}
//#!/bin/bash
//#curl -4 -H "Authorization: Token Fl60B6Yy2k-MAViH1UGzsw" \
//	--data url="jhoughton.me&title=hello&snippet=hello" https://webservice-staging.bublup.com/api/v1/folder_options
//printf "\n"
