var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VDINESSLUXURY_1 = new ol.format.GeoJSON();
var features_VDINESSLUXURY_1 = format_VDINESSLUXURY_1.readFeatures(json_VDINESSLUXURY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VDINESSLUXURY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VDINESSLUXURY_1.addFeatures(features_VDINESSLUXURY_1);
var lyr_VDINESSLUXURY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VDINESSLUXURY_1, 
                style: style_VDINESSLUXURY_1,
                popuplayertitle: "VDI NESS LUXURY",
                interactive: true,
                title: '<img src="styles/legend/VDINESSLUXURY_1.png" /> VDI NESS LUXURY'
            });

lyr_OSMStandard_0.setVisible(true);lyr_VDINESSLUXURY_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_VDINESSLUXURY_1];
lyr_VDINESSLUXURY_1.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'PRENOM_f': 'PRENOM_f', 'FACEBOOK A': 'FACEBOOK A', 'VILLE': 'VILLE', });
lyr_VDINESSLUXURY_1.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'PRENOM_f': 'TextEdit', 'FACEBOOK A': 'TextEdit', 'VILLE': 'TextEdit', });
lyr_VDINESSLUXURY_1.set('fieldLabels', {'id': 'inline label - always visible', 'Nom': 'inline label - always visible', 'PRENOM_f': 'inline label - always visible', 'FACEBOOK A': 'inline label - always visible', 'VILLE': 'inline label - always visible', });
lyr_VDINESSLUXURY_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});