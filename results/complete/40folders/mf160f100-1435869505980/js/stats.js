var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "16000",
        "ok": "14657",
        "ko": "1343"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "300",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "61395",
        "ok": "57056",
        "ko": "61395"
    },
    "meanResponseTime": {
        "total": "6771",
        "ok": "5971",
        "ko": "15509"
    },
    "standardDeviation": {
        "total": "10967",
        "ok": "7800",
        "ko": "26183"
    },
    "percentiles1": {
        "total": "3563",
        "ok": "3663",
        "ko": "233"
    },
    "percentiles2": {
        "total": "5692",
        "ok": "5687",
        "ko": "60205"
    },
    "percentiles3": {
        "total": "35066",
        "ok": "21379",
        "ko": "60217"
    },
    "percentiles4": {
        "total": "60216",
        "ok": "40258",
        "ko": "60227"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 861,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 424,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13372,
        "percentage": 84
    },
    "group4": {
        "name": "failed",
        "count": 1343,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "110.056",
        "ok": "100.819",
        "ko": "9.238"
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
        "total": "16000",
        "ok": "14657",
        "ko": "1343"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "300",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "61395",
        "ok": "57056",
        "ko": "61395"
    },
    "meanResponseTime": {
        "total": "6771",
        "ok": "5971",
        "ko": "15509"
    },
    "standardDeviation": {
        "total": "10967",
        "ok": "7800",
        "ko": "26183"
    },
    "percentiles1": {
        "total": "3563",
        "ok": "3663",
        "ko": "234"
    },
    "percentiles2": {
        "total": "5692",
        "ok": "5687",
        "ko": "60205"
    },
    "percentiles3": {
        "total": "35066",
        "ok": "21379",
        "ko": "60217"
    },
    "percentiles4": {
        "total": "60216",
        "ok": "40247",
        "ko": "60227"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 861,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 424,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13372,
        "percentage": 84
    },
    "group4": {
        "name": "failed",
        "count": 1343,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "110.056",
        "ok": "100.819",
        "ko": "9.238"
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
