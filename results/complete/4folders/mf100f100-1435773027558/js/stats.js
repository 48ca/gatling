var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9864",
        "ko": "136"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "289",
        "ko": "79"
    },
    "maxResponseTime": {
        "total": "25966",
        "ok": "25966",
        "ko": "10044"
    },
    "meanResponseTime": {
        "total": "2051",
        "ok": "2077",
        "ko": "184"
    },
    "standardDeviation": {
        "total": "3627",
        "ok": "3644",
        "ko": "850"
    },
    "percentiles1": {
        "total": "322",
        "ok": "323",
        "ko": "80"
    },
    "percentiles2": {
        "total": "1560",
        "ok": "1605",
        "ko": "85"
    },
    "percentiles3": {
        "total": "11208",
        "ok": "11215",
        "ko": "225"
    },
    "percentiles4": {
        "total": "16551",
        "ok": "16558",
        "ko": "254"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6794,
        "percentage": 68
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 283,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2787,
        "percentage": 28
    },
    "group4": {
        "name": "failed",
        "count": 136,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.407",
        "ok": "98.055",
        "ko": "1.352"
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
        "ok": "9864",
        "ko": "136"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "289",
        "ko": "79"
    },
    "maxResponseTime": {
        "total": "25966",
        "ok": "25966",
        "ko": "10044"
    },
    "meanResponseTime": {
        "total": "2051",
        "ok": "2077",
        "ko": "184"
    },
    "standardDeviation": {
        "total": "3627",
        "ok": "3644",
        "ko": "850"
    },
    "percentiles1": {
        "total": "322",
        "ok": "323",
        "ko": "80"
    },
    "percentiles2": {
        "total": "1560",
        "ok": "1605",
        "ko": "85"
    },
    "percentiles3": {
        "total": "11208",
        "ok": "11215",
        "ko": "225"
    },
    "percentiles4": {
        "total": "16551",
        "ok": "16558",
        "ko": "254"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6794,
        "percentage": 68
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 283,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2787,
        "percentage": 28
    },
    "group4": {
        "name": "failed",
        "count": 136,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.407",
        "ok": "98.055",
        "ko": "1.352"
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
