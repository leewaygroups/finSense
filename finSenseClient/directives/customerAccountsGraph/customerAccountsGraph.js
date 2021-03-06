myApp.directive('customerAccountsGraph', [function () {

    var customerAccountsGraphCtrl = ['$scope', function ($scope) {


        var filter;

        /**
         * DOM utility functions
         */
        var _ = {
            $: function (id) {
                return document.getElementById(id);
            },

            all: function (selectors) {
                return document.querySelectorAll(selectors);
            },

            removeClass: function (selectors, cssClass) {
                var nodes = document.querySelectorAll(selectors);
                var l = nodes.length;
                for (i = 0; i < l; i++) {
                    var el = nodes[i];
                    // Bootstrap compatibility
                    el.className = el.className.replace(cssClass, '');
                }
            },

            addClass: function (selectors, cssClass) {
                var nodes = document.querySelectorAll(selectors);
                var l = nodes.length;
                for (i = 0; i < l; i++) {
                    var el = nodes[i];
                    // Bootstrap compatibility
                    if (-1 == el.className.indexOf(cssClass)) {
                        el.className += ' ' + cssClass;
                    }
                }
            },

            show: function (selectors) {
                this.removeClass(selectors, 'hidden');
            },

            hide: function (selectors) {
                this.addClass(selectors, 'hidden');
            },

            toggle: function (selectors, cssClass) {
                var cssClass = cssClass || "hidden";
                var nodes = document.querySelectorAll(selectors);
                var l = nodes.length;
                for (i = 0; i < l; i++) {
                    var el = nodes[i];
                    //el.style.display = (el.style.display != 'none' ? 'none' : '' );
                    // Bootstrap compatibility
                    if (-1 !== el.className.indexOf(cssClass)) {
                        el.className = el.className.replace(cssClass, '');
                    } else {
                        el.className += ' ' + cssClass;
                    }
                }
            }
        };


        function updatePane(graph, filter) {
            // get max degree
            var maxDegree = 0,
                categories = {};

            // read nodes
            graph.nodes().forEach(function (n) {
                maxDegree = Math.max(maxDegree, graph.degree(n.id));
                categories[n.attributes.acategory] = true;
            })

            // min degree
            _.$('min-degree').max = maxDegree;
            _.$('max-degree-value').textContent = maxDegree;

            // node category
            var nodecategoryElt = _.$('node-category');
            Object.keys(categories).forEach(function (c) {
                var optionElt = document.createElement("option");
                optionElt.text = c;
                nodecategoryElt.add(optionElt);
            });

            // reset button
            _.$('reset-btn').addEventListener("click", function (e) {
                _.$('min-degree').value = 0;
                _.$('min-degree-val').textContent = '0';
                _.$('node-category').selectedIndex = 0;
                filter.undo().apply();
                _.$('dump').textContent = '';
                _.hide('#dump');
            });

            // export button
            _.$('export-btn').addEventListener("click", function (e) {
                var chain = filter.serialize();
                console.log(chain);
                _.$('dump').textContent = JSON.stringify(chain);
                _.show('#dump');
            });
        }

        // Initialize sigma with the dataset:
        //   e-Diaspora Moroccan corpus of websites
        //   by Dana Diminescu & Matthieu Renault
        //   http://www.e-diasporas.fr/wp/moroccan.html
        sigma.parsers.gexf('testData/moroccan-ediaspora.gexf', {
            container: 'graph-container',
            settings: {
                edgeColor: 'default',
                defaultEdgeColor: '#ccc'
            }
        }, function (s) {
            // Initialize the Filter API
            filter = sigma.plugins.filter(s);

            updatePane(s.graph, filter);

            function applyMinDegreeFilter(e) {
                var v = e.target.value;
                _.$('min-degree-val').textContent = v;

                filter.undo('min-degree')
                    .nodesBy(
                        function (n, options) {
                            return this.graph.degree(n.id) >= options.minDegreeVal;
                        }, {
                            minDegreeVal: +v
                        },
                        'min-degree'
                    )
                    .apply();
            }

            function applyCategoryFilter(e) {
                var c = e.target[e.target.selectedIndex].value;
                filter
                    .undo('node-category')
                    .nodesBy(
                        function (n, options) {
                            return !c.length || n.attributes[options.property] === c;
                        }, {
                            property: 'acategory'
                        },
                        'node-category'
                    )
                    .apply();
            }

            _.$('min-degree').addEventListener("input", applyMinDegreeFilter); // for Chrome and FF
            _.$('min-degree').addEventListener("change", applyMinDegreeFilter); // for IE10+, that sucks
            _.$('node-category').addEventListener("change", applyCategoryFilter);
        });

        
    }];

    return {
        restric: 'AE',
        replace: true,
        templateUrl: 'directives/customerAccountsGraph/template.html',
        controller: customerAccountsGraphCtrl,
        scope: {
            customer: '='
        }
    };

}]);