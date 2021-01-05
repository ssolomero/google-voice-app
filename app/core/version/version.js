'use strict';

angular.module('google-voice-app.version', [
  'google-voice-app.version.interpolate-filter',
  'google-voice-app.version.version-directive'
])

.value('version', '0.1');
