var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15500",
        "ok": "15294",
        "ko": "206"
    },
    "minResponseTime": {
        "total": "297",
        "ok": "297",
        "ko": "60208"
    },
    "maxResponseTime": {
        "total": "61219",
        "ok": "59980",
        "ko": "61219"
    },
    "meanResponseTime": {
        "total": "4573",
        "ok": "3823",
        "ko": "60218"
    },
    "standardDeviation": {
        "total": "9219",
        "ok": "6623",
        "ko": "72"
    },
    "percentiles1": {
        "total": "1932",
        "ok": "1879",
        "ko": "60210"
    },
    "percentiles2": {
        "total": "3774",
        "ok": "3710",
        "ko": "60218"
    },
    "percentiles3": {
        "total": "17721",
        "ok": "11285",
        "ko": "60220"
    },
    "percentiles4": {
        "total": "60208",
        "ok": "42196",
        "ko": "60362"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2361,
        "percentage": 15
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1890,
        "percentage": 12
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 11043,
        "percentage": 71
    },
    "group4": {
        "name": "failed",
        "count": 206,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "96.736",
        "ok": "95.45",
        "ko": "1.286"
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
        "total": "15500",
        "ok": "15294",
        "ko": "206"
    },
    "minResponseTime": {
        "total": "297",
        "ok": "297",
        "ko": "60208"
    },
    "maxResponseTime": {
        "total": "61219",
        "ok": "59980",
        "ko": "61219"
    },
    "meanResponseTime": {
        "total": "4573",
        "ok": "3823",
        "ko": "60218"
    },
    "standardDeviation": {
        "total": "9219",
        "ok": "6623",
        "ko": "72"
    },
    "percentiles1": {
        "total": "1937",
        "ok": "1879",
        "ko": "60210"
    },
    "percentiles2": {
        "total": "3774",
        "ok": "3710",
        "ko": "60218"
    },
    "percentiles3": {
        "total": "17721",
        "ok": "11285",
        "ko": "60220"
    },
    "percentiles4": {
        "total": "60209",
        "ok": "42196",
        "ko": "60362"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2361,
        "percentage": 15
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1890,
        "percentage": 12
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 11043,
        "percentage": 71
    },
    "group4": {
        "name": "failed",
        "count": 206,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "96.736",
        "ok": "95.45",
        "ko": "1.286"
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
