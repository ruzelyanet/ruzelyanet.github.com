(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
            var routes, setRoutes;

            routes = [
                'dashboard/add',

                'archive/single',

                'ui/typography', 'ui/buttons', 'ui/icons', 'ui/grids', 'ui/widgets', 'ui/components', 'ui/boxes', 'ui/timeline', 'ui/pricing-tables', 'ui/cards',

                'table/static', 'table/dynamic', 'table/responsive',

                'form/layouts', 'form/validation', 'form/wizard',

                'chart/echarts', 'chart/echarts-line', 'chart/echarts-bar', 'chart/echarts-pie', 'chart/echarts-scatter', 'chart/echarts-more',

                'page/feedback', 'page/404', 'page/500', 'page/blank', 'page/forgot-password', 'page/confirm-email', 'page/invoice', 'page/lock-screen', 'page/profile', 'page/signin', 'page/signup',

                'app/mail/inbox', 'app/mail/single',

                'app/tasks'
            ]

            setRoutes = function(route) {
                var config, url;
                url = '/' + route;
                config = {
                    url: url,
                    templateUrl: 'app/' + route + '.html'
                };
                $stateProvider.state(route, config);
                return $stateProvider;
            };

            routes.forEach(function(route) {
                return setRoutes(route);
            });

            $urlRouterProvider
                .when('/', '/dashboard')
                .otherwise('/dashboard');


            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/dashboard/dashboard.html'
                })
                .state('archive', {
                    url: '/archive',
                    templateUrl: 'app/archive/archive.html'
                })
                
                .state('partner', {
                    url: '/partner',
                    templateUrl: 'app/partner/partner.html',
                })
                .state('sites', {
                    url: '/sites',
                    templateUrl: 'app/sites/sites.html',
                })
                .state('pay', {
                    url: '/pay',
                    templateUrl: 'app/pay/pay.html',
                })
                .state('shop', {
                    url: '/shop',
                    templateUrl: 'app/shop/shop.html',
                })
                .state('shop/add', {
                    url: '/shop/add',
                    templateUrl: 'app/shop/add.html',
                })

                .state('knowbase', {
                    url: '/knowbase',
                    templateUrl: 'app/knowbase/knowbase.html',
                })
                .state('knowbase/category', {
                    url: '/knowbase/category',
                    templateUrl: 'app/knowbase/category.html',
                    
                })
                .state('knowbase/add', {
                    url: '/knowbase/add',
                    templateUrl: 'app/knowbase/add.html',
                })
                .state('generator', {
                    url: '/generator',
                    templateUrl: 'app/generator/generator.html',
                })
                .state('generator/step2', {
                    url: '/generator/step2',
                    templateUrl: 'app/generator/step2.html',
                })
                .state('news', {
                    url: '/news',
                    templateUrl: 'app/news/news.html',   
                })
                .state('news/add', {
                    url: '/news/add',
                    templateUrl: 'app/news/add.html',
                })
                .state('rocketnews', {
                    url: '/rocketnews',
                    templateUrl: 'app/rocketnews/news.html',
                })
                .state('rocketnews/add', {
                    url: '/rocketnews/add',
                    templateUrl: 'app/rocketnews/add.html',
                })
                .state('notifications', {
                    url: '/notifications',
                    templateUrl: 'app/notifications/notifications.html',
                })
                .state('site-generator', {
                    url: '/site-generator',
                    templateUrl: 'app/site-generator/site-generator.html',
                })
                .state('ui/maps', {
                    url: '/ui/maps',
                    templateUrl: 'app/ui/maps.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'googlemap',
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            });
                        }]
                    }
                })
                .state('form/elements', {
                    url: '/form/elements',
                    templateUrl: 'app/form/elements.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'textAngular',
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            });
                        }]
                    }
                })
                .state('app/mail/compose', {
                    url: '/app/mail/compose',
                    templateUrl: 'app/app/mail/compose.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'textAngular',
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            });
                        }]
                    }
                })
                .state('app/calendar', {
                    url: '/app/calendar',
                    templateUrl: 'app/app/calendar.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'fullcalendar'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                            .then(function() {
                                return $ocLazyLoad.load([
                                    'app/app/calendar/calendar.module.js',
                                    'app/app/calendar/calendar.controller.js'
                                ])
                            });
                        }]
                    }
                })
            ;
        }]
    );

})(); 