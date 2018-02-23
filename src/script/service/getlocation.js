'use strict';

angular.module('app').factory('location', ['$rootScope', function ($rootScope) {

    var locationServes = {
        "longitude": '',
        "latitude": '',
        "all": '',
        "shi": '',
        "qu": '',
        "jiedao": ''
    };
    (function () {
        var geolocation = new BMap.Geolocation();

        geolocation.getCurrentPosition(
            //获取位置信息成功
            function (position) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    locationServes.longitude = position.point.lng;
                    console.log(locationServes)
                    locationServes.latitude = position.point.lat;
                    // 根据坐标得到地址描述
                    getGeo();
                }
            }, {
                // 指示浏览器获取高精度的位置，默认为false
                enableHighAccuracy: false,
                // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
                // timeout: 5000,
                // 最长有效期(30S)，在重复获取地理位置时，此参数指定多久再次获取位置
                maximumAge: 30 * 1000
            });
        function getGeo() {
            var myGeo = new BMap.Geocoder();
            // 根据坐标得到地址描述
            myGeo.getLocation(new BMap.Point(locationServes.longitude, locationServes.latitude),
                function (result) {
                console.log(result)
                    if (result) {
                        locationServes.all = result.addressComponents.city + result.addressComponents.district + result.addressComponents.street;
                        locationServes.shi = result.addressComponents.city;
                        locationServes.qu = result.addressComponents.district;
                        locationServes.jiedao = result.addressComponents.street;
                    } else {
                        alert("定位失败,地址解析失败");
                    }
                });
        };
    })();



  return locationServes;

}]);
