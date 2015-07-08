var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "13085",
        "ko": "6915"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "343",
        "ko": "79"
    },
    "maxResponseTime": {
        "total": "63536",
        "ok": "60396",
        "ko": "63536"
    },
    "meanResponseTime": {
        "total": "8461",
        "ok": "8979",
        "ko": "7480"
    },
    "standardDeviation": {
        "total": "13950",
        "ok": "9996",
        "ko": "19296"
    },
    "percentiles1": {
        "total": "3802",
        "ok": "5114",
        "ko": "382"
    },
    "percentiles2": {
        "total": "7414",
        "ok": "9712",
        "ko": "513"
    },
    "percentiles3": {
        "total": "49630",
        "ok": "35220",
        "ko": "60220"
    },
    "percentiles4": {
        "total": "60289",
        "ok": "51677",
        "ko": "60487"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 217,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 97,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12771,
        "percentage": 64
    },
    "group4": {
        "name": "failed",
        "count": 6915,
        "percentage": 35
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "123.686",
        "ok": "80.921",
        "ko": "42.764"
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
        "ok": "13085",
        "ko": "6915"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "343",
        "ko": "79"
    },
    "maxResponseTime": {
        "total": "63536",
        "ok": "60396",
        "ko": "63536"
    },
    "meanResponseTime": {
        "total": "8461",
        "ok": "8979",
        "ko": "7480"
    },
    "standardDeviation": {
        "total": "13950",
        "ok": "9996",
        "ko": "19296"
    },
    "percentiles1": {
        "total": "3802",
        "ok": "5114",
        "ko": "382"
    },
    "percentiles2": {
        "total": "7413",
        "ok": "9711",
        "ko": "513"
    },
    "percentiles3": {
        "total": "49630",
        "ok": "35220",
        "ko": "60220"
    },
    "percentiles4": {
        "total": "60289",
        "ok": "51677",
        "ko": "60487"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 217,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 97,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12771,
        "percentage": 64
    },
    "group4": {
        "name": "failed",
        "count": 6915,
        "percentage": 35
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "123.686",
        "ok": "80.921",
        "ko": "42.764"
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
