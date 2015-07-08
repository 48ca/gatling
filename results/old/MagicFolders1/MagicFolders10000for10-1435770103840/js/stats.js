var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100000",
        "ok": "6935",
        "ko": "93065"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "372",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "75493",
        "ok": "64654",
        "ko": "75493"
    },
    "meanResponseTime": {
        "total": "1048",
        "ok": "13285",
        "ko": "136"
    },
    "standardDeviation": {
        "total": "5538",
        "ok": "13439",
        "ko": "2740"
    },
    "percentiles1": {
        "total": "0",
        "ok": "7617",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "17703",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4961",
        "ok": "41989",
        "ko": "1"
    },
    "percentiles4": {
        "total": "35515",
        "ok": "56844",
        "ko": "304"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 225,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 111,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6599,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 93065,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1123.861",
        "ok": "77.94",
        "ko": "1045.921"
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
        "ok": "6935",
        "ko": "93065"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "372",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "75493",
        "ok": "64654",
        "ko": "75493"
    },
    "meanResponseTime": {
        "total": "1048",
        "ok": "13285",
        "ko": "136"
    },
    "standardDeviation": {
        "total": "5538",
        "ok": "13439",
        "ko": "2740"
    },
    "percentiles1": {
        "total": "0",
        "ok": "7623",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "17684",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4961",
        "ok": "41989",
        "ko": "1"
    },
    "percentiles4": {
        "total": "35515",
        "ok": "56844",
        "ko": "304"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 225,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 111,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6599,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 93065,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1123.861",
        "ok": "77.94",
        "ko": "1045.921"
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
