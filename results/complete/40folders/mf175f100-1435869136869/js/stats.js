var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "17500",
        "ok": "14729",
        "ko": "2771"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "306",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "61227",
        "ok": "60082",
        "ko": "61227"
    },
    "meanResponseTime": {
        "total": "7689",
        "ok": "7008",
        "ko": "11312"
    },
    "standardDeviation": {
        "total": "12413",
        "ok": "8821",
        "ko": "23322"
    },
    "percentiles1": {
        "total": "3727",
        "ok": "3901",
        "ko": "227"
    },
    "percentiles2": {
        "total": "6437",
        "ok": "6608",
        "ko": "259"
    },
    "percentiles3": {
        "total": "38556",
        "ok": "26701",
        "ko": "60216"
    },
    "percentiles4": {
        "total": "60217",
        "ok": "45581",
        "ko": "60236"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 289,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 170,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14270,
        "percentage": 82
    },
    "group4": {
        "name": "failed",
        "count": 2771,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "109.469",
        "ok": "92.135",
        "ko": "17.334"
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
        "total": "17500",
        "ok": "14729",
        "ko": "2771"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "306",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "61227",
        "ok": "60082",
        "ko": "61227"
    },
    "meanResponseTime": {
        "total": "7689",
        "ok": "7008",
        "ko": "11312"
    },
    "standardDeviation": {
        "total": "12413",
        "ok": "8821",
        "ko": "23322"
    },
    "percentiles1": {
        "total": "3727",
        "ok": "3900",
        "ko": "227"
    },
    "percentiles2": {
        "total": "6437",
        "ok": "6608",
        "ko": "259"
    },
    "percentiles3": {
        "total": "38556",
        "ok": "26701",
        "ko": "60217"
    },
    "percentiles4": {
        "total": "60217",
        "ok": "45581",
        "ko": "60236"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 289,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 170,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14270,
        "percentage": 82
    },
    "group4": {
        "name": "failed",
        "count": 2771,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "109.469",
        "ok": "92.135",
        "ko": "17.334"
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
