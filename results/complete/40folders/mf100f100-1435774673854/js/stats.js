var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "295",
        "ok": "295",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2807",
        "ok": "2807",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "395",
        "ok": "395",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "percentiles1": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles2": {
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "percentiles3": {
        "total": "767",
        "ok": "767",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1509",
        "ok": "1508",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9541,
        "percentage": 95
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 150,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 309,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.674",
        "ok": "99.674",
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "295",
        "ok": "295",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2807",
        "ok": "2807",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "395",
        "ok": "395",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "percentiles1": {
        "total": "323",
        "ok": "322",
        "ko": "-"
    },
    "percentiles2": {
        "total": "338",
        "ok": "337",
        "ko": "-"
    },
    "percentiles3": {
        "total": "767",
        "ok": "767",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1509",
        "ok": "1508",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9541,
        "percentage": 95
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 150,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 309,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.674",
        "ok": "99.674",
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
