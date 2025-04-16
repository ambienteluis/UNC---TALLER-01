var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_OSM1901117_1 = new ol.format.GeoJSON();
var features_OSM1901117_1 = format_OSM1901117_1.readFeatures(json_OSM1901117_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSM1901117_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSM1901117_1.addFeatures(features_OSM1901117_1);
var lyr_OSM1901117_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSM1901117_1, 
                style: style_OSM1901117_1,
                popuplayertitle: 'OSM 1901117',
                interactive: true,
                title: '<img src="styles/legend/OSM1901117_1.png" /> OSM 1901117'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_OSM1901117_1.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_OSM1901117_1];
lyr_OSM1901117_1.set('fieldAliases', {'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_OSM1901117_1.set('fieldImages', {'osm_id': '', 'class': '', 'type': '', 'name': '', 'address': '', 'extratags': '', });
lyr_OSM1901117_1.set('fieldLabels', {'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_OSM1901117_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});