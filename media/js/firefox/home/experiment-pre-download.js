/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function(Mozilla) {
    'use strict';

    // Test criteria is Windows on desktop only.
    if (window.site.platform !== 'windows') {
        return;
    }

    var cop = new Mozilla.TrafficCop({
        id: 'experiment-firefox-home-pre-download',
        variations: {
            'v=a': 33,
            'v=b': 33,
            'v=c': 33
        }
    });

    cop.init();

})(window.Mozilla);
