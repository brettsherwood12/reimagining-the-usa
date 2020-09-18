var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NewStates_1 = new ol.format.GeoJSON();
var features_NewStates_1 = format_NewStates_1.readFeatures(json_NewStates_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewStates_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewStates_1.addFeatures(features_NewStates_1);
var lyr_NewStates_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NewStates_1, 
                style: style_NewStates_1,
                interactive: true,
    title: 'New States<br />\
    <img src="styles/legend/NewStates_1_0.png" /> 737400 - 1420500 <br />\
    <img src="styles/legend/NewStates_1_1.png" /> 1420500 - 4658400 <br />\
    <img src="styles/legend/NewStates_1_2.png" /> 4658400 - 6108800 <br />\
    <img src="styles/legend/NewStates_1_3.png" /> 6108800 - 7701500 <br />\
    <img src="styles/legend/NewStates_1_4.png" /> 7701500 - 10300300 <br />\
    <img src="styles/legend/NewStates_1_5.png" /> 10300300 - 19225600 <br />'
        });
var format_UrbanAreas_2 = new ol.format.GeoJSON();
var features_UrbanAreas_2 = format_UrbanAreas_2.readFeatures(json_UrbanAreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanAreas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanAreas_2.addFeatures(features_UrbanAreas_2);
var lyr_UrbanAreas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UrbanAreas_2, 
                style: style_UrbanAreas_2,
                interactive: false,
                title: '<img src="styles/legend/UrbanAreas_2.png" /> Urban Areas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NewStates_1.setVisible(true);lyr_UrbanAreas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NewStates_1,lyr_UrbanAreas_2];
lyr_NewStates_1.set('fieldAliases', {'Name': 'Name', 'Population': 'Population', });
lyr_UrbanAreas_2.set('fieldAliases', {'GeoId': 'GeoId', 'Name': 'Name', });
lyr_NewStates_1.set('fieldImages', {'Name': 'TextEdit', 'Population': 'TextEdit', });
lyr_UrbanAreas_2.set('fieldImages', {'GeoId': 'TextEdit', 'Name': 'TextEdit', });
lyr_NewStates_1.set('fieldLabels', {'Name': 'inline label', 'Population': 'inline label', });
lyr_UrbanAreas_2.set('fieldLabels', {'GeoId': 'no label', 'Name': 'no label', });
lyr_UrbanAreas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});