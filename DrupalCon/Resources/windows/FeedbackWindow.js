/**
 * This file is part of DrupalCon Mobile.
 *
 * DrupalCon Mobile is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DrupalCon Mobile is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DrupalCon Mobile.  If not, see <http://www.gnu.org/licenses/>.
 */

(function() {

  DrupalCon.ui.createFeedbackWindow = function(settings) {
    Drupal.setDefaults(settings, {
      title: 'title here',
      address: '',
      tabGroup: undefined
    });

    var feedbackWindow = Titanium.UI.createWindow({
      id: 'feedbackWindow',
      title: settings.title,
      backgroundColor: '#FFF',
      tabGroup: settings.tabGroup,
      barColor: '#000'
    });

    var web = Ti.UI.createWebView({
      url:settings.address
    });

    feedbackWindow.add(web);

    return feedbackWindow;
  };

})();