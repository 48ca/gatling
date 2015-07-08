var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "9867",
        "ko": "10133"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "373",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "75511",
        "ok": "60810",
        "ko": "75511"
    },
    "meanResponseTime": {
        "total": "8621",
        "ok": "9849",
        "ko": "7425"
    },
    "standardDeviation": {
        "total": "15827",
        "ok": "11176",
        "ko": "19232"
    },
    "percentiles1": {
        "total": "2594",
        "ok": "5488",
        "ko": "309"
    },
    "percentiles2": {
        "total": "7093",
        "ok": "10943",
        "ko": "544"
    },
    "percentiles3": {
        "total": "59960",
        "ok": "36038",
        "ko": "60232"
    },
    "percentiles4": {
        "total": "60513",
        "ok": "55493",
        "ko": "60552"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 178,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 193,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9496,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 10133,
        "percentage": 51
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "129.749",
        "ok": "64.012",
        "ko": "65.737"
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
        "ok": "9867",
        "ko": "10133"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "373",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "75511",
        "ok": "60810",
        "ko": "75511"
    },
    "meanResponseTime": {
        "total": "8621",
        "ok": "9849",
        "ko": "7425"
    },
    "standardDeviation": {
        "total": "15827",
        "ok": "11176",
        "ko": "19232"
    },
    "percentiles1": {
        "total": "2594",
        "ok": "5487",
        "ko": "309"
    },
    "percentiles2": {
        "total": "7092",
        "ok": "10934",
        "ko": "544"
    },
    "percentiles3": {
        "total": "59960",
        "ok": "36038",
        "ko": "60232"
    },
    "percentiles4": {
        "total": "60513",
        "ok": "55493",
        "ko": "60552"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 178,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 193,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9496,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 10133,
        "percentage": 51
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "129.749",
        "ok": "64.012",
        "ko": "65.737"
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
