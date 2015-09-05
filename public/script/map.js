/**
 * Created by prism on 9/5/15.
 */
var geocoder = new google.maps.Geocoder();
function init() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                zoom: 14,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker = new google.maps.Marker();
            marker.setPosition(myLatlng);
            marker.setMap(map);

            geocoder.geocode({'latLng': myLatlng}, function(results, status) {
                if(status == google.maps.GeocoderStatus.OK) { if(results[0]) {
                    $('#address_current').text(results[0].formatted_address);
                }
                else {
                    alert('No results found');
                }
                }
                else {
                    var error = { 'ZERO_RESULTS': 'We Could Not Find Your Address' }
                    $('#address_new').html('' + error[status] + ''); } });
        }, function() {
            alert("Your browser does not support Geolocation. Update to Google Chrome or Firefox");
        });
    }
}
google.maps.event.addDomListener(window, 'load', init);