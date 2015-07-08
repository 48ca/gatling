var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "14542",
        "ko": "5458"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "377",
        "ko": "79"
    },
    "maxResponseTime": {
        "total": "61471",
        "ok": "59787",
        "ko": "61471"
    },
    "meanResponseTime": {
        "total": "7627",
        "ok": "7244",
        "ko": "8647"
    },
    "standardDeviation": {
        "total": "13429",
        "ok": "9281",
        "ko": "20735"
    },
    "percentiles1": {
        "total": "3469",
        "ok": "3915",
        "ko": "286"
    },
    "percentiles2": {
        "total": "6251",
        "ok": "6685",
        "ko": "443"
    },
    "percentiles3": {
        "total": "47380",
        "ok": "27964",
        "ko": "60221"
    },
    "percentiles4": {
        "total": "60241",
        "ok": "50484",
        "ko": "60399"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 424,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 427,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13691,
        "percentage": 68
    },
    "group4": {
        "name": "failed",
        "count": 5458,
        "percentage": 27
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "124.774",
        "ok": "90.723",
        "ko": "34.051"
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
        "ok": "14542",
        "ko": "5458"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "377",
        "ko": "79"
    },
    "maxResponseTime": {
        "total": "61471",
        "ok": "59787",
        "ko": "61471"
    },
    "meanResponseTime": {
        "total": "7627",
        "ok": "7244",
        "ko": "8647"
    },
    "standardDeviation": {
        "total": "13429",
        "ok": "9281",
        "ko": "20735"
    },
    "percentiles1": {
        "total": "3469",
        "ok": "3923",
        "ko": "286"
    },
    "percentiles2": {
        "total": "6251",
        "ok": "6685",
        "ko": "443"
    },
    "percentiles3": {
        "total": "47380",
        "ok": "28007",
        "ko": "60221"
    },
    "percentiles4": {
        "total": "60241",
        "ok": "50484",
        "ko": "60399"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 424,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 427,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13691,
        "percentage": 68
    },
    "group4": {
        "name": "failed",
        "count": 5458,
        "percentage": 27
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "124.774",
        "ok": "90.723",
        "ko": "34.051"
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
