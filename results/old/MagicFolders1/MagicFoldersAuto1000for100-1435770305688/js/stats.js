var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100000",
        "ok": "10464",
        "ko": "89536"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "334",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "94108",
        "ok": "91041",
        "ko": "94108"
    },
    "meanResponseTime": {
        "total": "3691",
        "ok": "12288",
        "ko": "2686"
    },
    "standardDeviation": {
        "total": "12657",
        "ok": "12605",
        "ko": "12277"
    },
    "percentiles1": {
        "total": "0",
        "ok": "7635",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "14950",
        "ko": "0"
    },
    "percentiles3": {
        "total": "24298",
        "ok": "39968",
        "ko": "4415"
    },
    "percentiles4": {
        "total": "60599",
        "ok": "59014",
        "ko": "60644"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 315,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 170,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9979,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 89536,
        "percentage": 90
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "551.584",
        "ok": "57.718",
        "ko": "493.866"
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
        "total": "100000",
        "ok": "10464",
        "ko": "89536"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "334",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "94108",
        "ok": "91041",
        "ko": "94108"
    },
    "meanResponseTime": {
        "total": "3691",
        "ok": "12288",
        "ko": "2686"
    },
    "standardDeviation": {
        "total": "12657",
        "ok": "12605",
        "ko": "12277"
    },
    "percentiles1": {
        "total": "0",
        "ok": "7634",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "14954",
        "ko": "0"
    },
    "percentiles3": {
        "total": "24298",
        "ok": "39968",
        "ko": "4415"
    },
    "percentiles4": {
        "total": "60599",
        "ok": "59014",
        "ko": "60644"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 315,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 170,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9979,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 89536,
        "percentage": 90
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "551.584",
        "ok": "57.718",
        "ko": "493.866"
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
