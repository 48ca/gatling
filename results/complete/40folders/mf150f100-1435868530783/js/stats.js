var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15000",
        "ok": "15000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3100",
        "ok": "3100",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "455",
        "ok": "455",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "298",
        "ok": "298",
        "ko": "-"
    },
    "percentiles1": {
        "total": "343",
        "ok": "343",
        "ko": "-"
    },
    "percentiles2": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1176",
        "ok": "1176",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1810",
        "ok": "1810",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13726,
        "percentage": 92
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 545,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 729,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "147.192",
        "ok": "147.192",
        "ko": "-"
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
        "total": "15000",
        "ok": "15000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3100",
        "ok": "3100",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "455",
        "ok": "455",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "298",
        "ok": "298",
        "ko": "-"
    },
    "percentiles1": {
        "total": "343",
        "ok": "343",
        "ko": "-"
    },
    "percentiles2": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1176",
        "ok": "1176",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1810",
        "ok": "1810",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13726,
        "percentage": 92
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 545,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 729,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "147.192",
        "ok": "147.192",
        "ko": "-"
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
