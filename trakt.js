/*
trakt.js v0.0.1
trakt angular service
Written by Tyson Bailey
*/
angular.module('show', []).factory('$show', ['$http',
    function($http) {
        return {
            seasons: function(api_key, query, page_limit) {
                var method = 'JSONP';
                var url = 'http://api.trakt.tv/show/seasons.json/' + api_key + '/' + query;
                return $http({
                    method: method,
                    url: url + "apikey=" + api_key +
                        +'&callback=JSON_CALLBACK'
                });
            }
        };
    }
]);
