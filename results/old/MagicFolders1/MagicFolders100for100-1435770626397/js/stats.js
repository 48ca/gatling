var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9848",
        "ko": "152"
    },
    "minResponseTime": {
        "total": "287",
        "ok": "287",
        "ko": "60206"
    },
    "maxResponseTime": {
        "total": "60377",
        "ok": "2639",
        "ko": "60377"
    },
    "meanResponseTime": {
        "total": "1245",
        "ok": "335",
        "ko": "60214"
    },
    "standardDeviation": {
        "total": "7326",
        "ok": "102",
        "ko": "16"
    },
    "percentiles1": {
        "total": "318",
        "ok": "318",
        "ko": "60212"
    },
    "percentiles2": {
        "total": "328",
        "ok": "328",
        "ko": "60217"
    },
    "percentiles3": {
        "total": "470",
        "ok": "360",
        "ko": "60226"
    },
    "percentiles4": {
        "total": "60207",
        "ok": "748",
        "ko": "60267"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9767,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 80,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 152,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "63.848",
        "ok": "62.878",
        "ko": "0.97"
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
        "total": "10000",
        "ok": "9848",
        "ko": "152"
    },
    "minResponseTime": {
        "total": "287",
        "ok": "287",
        "ko": "60206"
    },
    "maxResponseTime": {
        "total": "60377",
        "ok": "2639",
        "ko": "60377"
    },
    "meanResponseTime": {
        "total": "1245",
        "ok": "335",
        "ko": "60214"
    },
    "standardDeviation": {
        "total": "7326",
        "ok": "102",
        "ko": "16"
    },
    "percentiles1": {
        "total": "318",
        "ok": "318",
        "ko": "60212"
    },
    "percentiles2": {
        "total": "328",
        "ok": "328",
        "ko": "60217"
    },
    "percentiles3": {
        "total": "470",
        "ok": "360",
        "ko": "60226"
    },
    "percentiles4": {
        "total": "60207",
        "ok": "748",
        "ko": "60267"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9767,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 80,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 152,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "63.848",
        "ok": "62.878",
        "ko": "0.97"
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
