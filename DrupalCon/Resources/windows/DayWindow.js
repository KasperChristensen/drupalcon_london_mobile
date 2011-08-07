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

  var uiEnabled = true;

  DrupalCon.ui.createDayWindow = function(tabGroup) {

    // Create table view data object.
    var data = [];
    data.push({title:'My Schedule', hasChild:true, color:'#000', backgroundColor:'#fff', selectedBackgroundColor: '#f3f3f3', scheduleListing: true, mySchedule: true});
    data.push({title:'Registration', hasChild:true, color:'#000', backgroundColor:'#fff', backgroundSelectedColor:'#0779BE', scheduleListing: false, url: 'pages/registration.html'});
    data.push({title:'Monday 22nd August', hasChild:true, color:'#000', backgroundColor:'#fff', backgroundSelectedColor:'#0779BE', scheduleListing: false, url: 'pages/2011-08-22.html'});
    data.push({title:'Tuesday 23rd August', hasChild:true, color:'#000', backgroundColor:'#fff', backgroundSelectedColor:'#0779BE', start_date:'2011-08-23T00:00:00', end_date:'2011-08-24T00:00:00', scheduleListing: true});
    data.push({title:'Wednesday 24th August', hasChild:true, color:'#000', backgroundColor:'#fff', backgroundSelectedColor:'#0779BE', start_date:'2011-08-24T00:00:00', end_date:'2011-08-25T00:00:00', scheduleListing: true});
    data.push({title:'Thursday 25th August', hasChild:true, color:'#000', backgroundColor:'#fff', backgroundSelectedColor:'#0779BE', start_date:'2011-08-25T00:00:00', end_date:'2011-08-26T00:00:00', scheduleListing: true});
    data.push({title:'Friday 26th August', hasChild:true, color:'#000', backgroundColor:'#fff', backgroundSelectedColor:'#0779BE', scheduleListing: false, url: 'pages/2011-08-26.html'});
    data.push({title:'Birds of a Feather', hasChild:true, color:'#000', backgroundColor:'#fff', backgroundSelectedColor:'#0779BE', scheduleListing: false, url: 'pages/bofs.html'});

    var dayWindow = Titanium.UI.createWindow({
      id: 'win1',
      title: 'Schedule',
      backgroundColor: '#fff',
      tabGroup: tabGroup,
      barColor: '#000'
    });

    // create table view
    var tableview = Titanium.UI.createTableView({
      data: data
    });

    // add table view to the window
    dayWindow.add(tableview);

    dayWindow.addEventListener('focus', function() {
      uiEnabled = true;
    });

    // create table view event listener
    tableview.addEventListener('click', function(e) {
      if (uiEnabled) {
        uiEnabled = false;
        var currentTab = (Ti.Platform.name == 'android') ? Titanium.UI.currentTab : dayWindow.tabGroup.activeTab;
        if (e.rowData.scheduleListing) {
        	if(e.rowData.mySchedule) {
        		currentTab.open(DrupalCon.ui.createMyScheduleWindow({
        			title: e.rowData.title,
        			tabGroup: currentTab
        		}), {animated:true});
        	}
        	else {
	          currentTab.open(DrupalCon.ui.createSessionsWindow({
	            title: e.rowData.title,
	            start_date: e.rowData.start_date,
	            end_date: e.rowData.end_date,
	            tabGroup: currentTab
	          }), {animated:true});
          }
        }
        else {
          currentTab.open(DrupalCon.ui.createHtmlWindow({
            title: e.rowData.title,
            url: e.rowData.url,
            tabGroup: currentTab
          }), {animated:true});
        }
      }
    });

//    dayWindow.addEventListener('open', function() {
//      var buttons = [];
//      buttons.push({
//        title: "Update",
//        clickevent: function () {
//          Ti.fireEvent('drupalcon:update_data');
//        }
//      });
//      menu.init({
//        win: dayWindow,
//        buttons: buttons
//      });
//    });


    return dayWindow;
  };

})();
