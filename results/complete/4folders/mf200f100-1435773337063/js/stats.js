var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "17647",
        "ko": "2353"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "290",
        "ko": "79"
    },
    "maxResponseTime": {
        "total": "61215",
        "ok": "59738",
        "ko": "61215"
    },
    "meanResponseTime": {
        "total": "5906",
        "ok": "4702",
        "ko": "14933"
    },
    "standardDeviation": {
        "total": "11525",
        "ok": "7037",
        "ko": "25794"
    },
    "percentiles1": {
        "total": "2994",
        "ok": "3094",
        "ko": "262"
    },
    "percentiles2": {
        "total": "4520",
        "ok": "4526",
        "ko": "479"
    },
    "percentiles3": {
        "total": "33781",
        "ok": "18659",
        "ko": "60225"
    },
    "percentiles4": {
        "total": "60223",
        "ok": "37430",
        "ko": "60265"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2669,
        "percentage": 13
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1632,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13346,
        "percentage": 67
    },
    "group4": {
        "name": "failed",
        "count": 2353,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "125.748",
        "ok": "110.954",
        "ko": "14.794"
    }
},
contents: {
"request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "20000",
        "ok": "17647",
        "ko": "2353"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "290",
        "ko": "79"
    },
    "maxResponseTime": {
        "total": "61215",
        "ok": "59738",
        "ko": "61215"
    },
    "meanResponseTime": {
        "total": "5906",
        "ok": "4702",
        "ko": "14933"
    },
    "standardDeviation": {
        "total": "11525",
        "ok": "7037",
        "ko": "25794"
    },
    "percentiles1": {
        "total": "2994",
        "ok": "3094",
        "ko": "262"
    },
    "percentiles2": {
        "total": "4520",
        "ok": "4525",
        "ko": "479"
    },
    "percentiles3": {
        "total": "33781",
        "ok": "18659",
        "ko": "60225"
    },
    "percentiles4": {
        "total": "60223",
        "ok": "37430",
        "ko": "60265"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2669,
        "percentage": 13
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1632,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13346,
        "percentage": 67
    },
    "group4": {
        "name": "failed",
        "count": 2353,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "125.748",
        "ok": "110.954",
        "ko": "14.794"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
