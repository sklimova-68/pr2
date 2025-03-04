var wms_layers = [];

var format_lab1_0 = new ol.format.GeoJSON();
var features_lab1_0 = format_lab1_0.readFeatures(json_lab1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_0.addFeatures(features_lab1_0);
var lyr_lab1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_0, 
                style: style_lab1_0,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_0.png" /> lab1'
            });
var format_building_house_1 = new ol.format.GeoJSON();
var features_building_house_1 = format_building_house_1.readFeatures(json_building_house_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_1.addFeatures(features_building_house_1);
var lyr_building_house_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_1, 
                style: style_building_house_1,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_1.png" /> building_house'
            });
var format_building_yes_2 = new ol.format.GeoJSON();
var features_building_yes_2 = format_building_yes_2.readFeatures(json_building_yes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_yes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_yes_2.addFeatures(features_building_yes_2);
var lyr_building_yes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_yes_2, 
                style: style_building_yes_2,
                popuplayertitle: 'building_yes',
                interactive: true,
                title: '<img src="styles/legend/building_yes_2.png" /> building_yes'
            });
var format_4_3 = new ol.format.GeoJSON();
var features_4_3 = format_4_3.readFeatures(json_4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_3.addFeatures(features_4_3);
var lyr_4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4_3, 
                style: style_4_3,
                popuplayertitle: '4',
                interactive: true,
                title: '<img src="styles/legend/4_3.png" /> 4'
            });
var format_2_4 = new ol.format.GeoJSON();
var features_2_4 = format_2_4.readFeatures(json_2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_4.addFeatures(features_2_4);
var lyr_2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_4, 
                style: style_2_4,
                popuplayertitle: '2',
                interactive: true,
                title: '<img src="styles/legend/2_4.png" /> 2'
            });
var format_3_5 = new ol.format.GeoJSON();
var features_3_5 = format_3_5.readFeatures(json_3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_5.addFeatures(features_3_5);
var lyr_3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_5, 
                style: style_3_5,
                popuplayertitle: '3',
                interactive: true,
                title: '<img src="styles/legend/3_5.png" /> 3'
            });

        var lyr_YandexSatellite_6 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_7 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_lab1_0.setVisible(true);lyr_building_house_1.setVisible(true);lyr_building_yes_2.setVisible(true);lyr_4_3.setVisible(true);lyr_2_4.setVisible(true);lyr_3_5.setVisible(true);lyr_YandexSatellite_6.setVisible(true);lyr_OSMStandard_7.setVisible(true);
var layersList = [lyr_lab1_0,lyr_building_house_1,lyr_building_yes_2,lyr_4_3,lyr_2_4,lyr_3_5,lyr_YandexSatellite_6,lyr_OSMStandard_7];
lyr_lab1_0.set('fieldAliases', {'name': 'name', });
lyr_building_house_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_building_yes_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_4_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'operator': 'operator', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'fee': 'fee', 'opening_hours': 'opening_hours', 'beauty': 'beauty', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'lit': 'lit', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'bin': 'bin', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'shop': 'shop', 'amenity': 'amenity', 'kerb': 'kerb', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'name:war': 'name:war', 'name:vi': 'name:vi', 'name:vep': 'name:vep', 'name:tr': 'name:tr', 'name:tl': 'name:tl', 'name:tk': 'name:tk', 'name:sv': 'name:sv', 'name:sh': 'name:sh', 'name:roa-rup': 'name:roa-rup', 'name:pnb': 'name:pnb', 'name:pa': 'name:pa', 'name:no': 'name:no', 'name:nn': 'name:nn', 'name:lv': 'name:lv', 'name:lb': 'name:lb', 'name:it': 'name:it', 'name:io': 'name:io', 'name:id': 'name:id', 'name:hy': 'name:hy', 'name:gl': 'name:gl', 'name:ga': 'name:ga', 'name:fa': 'name:fa', 'name:el': 'name:el', 'name:af': 'name:af', 'railway': 'railway', 'traffic_calming': 'traffic_calming', 'leisure': 'leisure', 'crossing': 'crossing', 'summit:category': 'summit:category', 'ford': 'ford', 'tourism': 'tourism', 'westra_ref': 'westra_ref', 'rtsa_scale': 'rtsa_scale', 'mountain_pass': 'mountain_pass', 'alt_name': 'alt_name', 'name:tt': 'name:tt', 'name:he': 'name:he', 'is_in:country': 'is_in:country', 'ref:en': 'ref:en', 'ref': 'ref', 'official_name:sk': 'official_name:sk', 'official_name:ru': 'official_name:ru', 'official_name:fr': 'official_name:fr', 'official_name:es': 'official_name:es', 'official_name:en': 'official_name:en', 'official_name:be': 'official_name:be', 'official_name': 'official_name', 'name:eo': 'name:eo', 'name:da': 'name:da', 'name:be': 'name:be', 'natural': 'natural', 'historic': 'historic', 'rapids': 'rapids', 'waterway': 'waterway', 'name:zh': 'name:zh', 'ele': 'ele', 'addr:district': 'addr:district', 'highway': 'highway', 'alt_name:pl': 'alt_name:pl', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'start_date': 'start_date', 'source:population': 'source:population', 'population:date': 'population:date', 'population': 'population', 'place': 'place', 'old_name': 'old_name', 'official_status': 'official_status', 'name:zh-Hant': 'name:zh-Hant', 'name:zh-Hans': 'name:zh-Hans', 'name:uk': 'name:uk', 'name:sr': 'name:sr', 'name:sl': 'name:sl', 'name:sk': 'name:sk', 'name:ru:word_stress': 'name:ru:word_stress', 'name:ru': 'name:ru', 'name:ro': 'name:ro', 'name:pt': 'name:pt', 'name:pl': 'name:pl', 'name:nl': 'name:nl', 'name:lt': 'name:lt', 'name:ko': 'name:ko', 'name:ja': 'name:ja', 'name:hu': 'name:hu', 'name:hr': 'name:hr', 'name:fr': 'name:fr', 'name:fi': 'name:fi', 'name:eu': 'name:eu', 'name:et': 'name:et', 'name:es': 'name:es', 'name:en': 'name:en', 'name:de': 'name:de', 'name:cs': 'name:cs', 'name:ca': 'name:ca', 'name:ar': 'name:ar', 'name': 'name', 'int_name': 'int_name', 'contact:youtube': 'contact:youtube', 'contact:website': 'contact:website', 'contact:vk': 'contact:vk', 'contact:telegram': 'contact:telegram', 'contact:phone': 'contact:phone', 'contact:ok': 'contact:ok', 'contact:email': 'contact:email', 'check_date': 'check_date', 'capital': 'capital', 'admin_level': 'admin_level', 'addr:region': 'addr:region', 'addr:country': 'addr:country', });
lyr_2_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'public_transport:version': 'public_transport:version', 'ref': 'ref', 'distance': 'distance', 'old_ref': 'old_ref', 'network': 'network', 'type': 'type', 'to': 'to', 'route': 'route', 'name': 'name', 'from': 'from', });
lyr_3_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'status': 'status', 'maxspeed': 'maxspeed', 'barrier': 'barrier', 'footway': 'footway', 'generator:method': 'generator:method', 'width': 'width', 'arete': 'arete', 'maxweight:signed': 'maxweight:signed', 'building:part': 'building:part', 'power': 'power', 'maxheight': 'maxheight', 'travers:category': 'travers:category', 'incline': 'incline', 'layer': 'layer', 'foot': 'foot', 'bridge': 'bridge', 'bicycle': 'bicycle', 'access': 'access', 'voltage': 'voltage', 'usage': 'usage', 'railway': 'railway', 'gauge': 'gauge', 'frequency': 'frequency', 'electrified': 'electrified', 'name:tt': 'name:tt', 'name:os': 'name:os', 'name:nl': 'name:nl', 'name:ko': 'name:ko', 'name:eo': 'name:eo', 'name:el': 'name:el', 'name:be': 'name:be', 'name:az': 'name:az', 'border_type': 'border_type', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:bxr': 'name:bxr', 'alt_name:tyv': 'alt_name:tyv', 'gis-lab:status': 'gis-lab:status', 'maritime': 'maritime', 'source:url': 'source:url', 'natural': 'natural', 'junction': 'junction', 'name:mn': 'name:mn', 'source:name': 'source:name', 'name:hu': 'name:hu', 'name:yrk': 'name:yrk', 'name:ket': 'name:ket', 'name:evn': 'name:evn', 'gvr:code': 'gvr:code', 'name:uk': 'name:uk', 'intermittent': 'intermittent', 'tunnel': 'tunnel', 'name:zh': 'name:zh', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'name:tyv': 'name:tyv', 'name:pl': 'name:pl', 'name:kjh': 'name:kjh', 'name:ka': 'name:ka', 'name:hy': 'name:hy', 'name:ca': 'name:ca', 'alt_name:ru': 'alt_name:ru', 'alt_name': 'alt_name', 'maxspeed:type': 'maxspeed:type', 'lanes': 'lanes', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'old_ref': 'old_ref', 'highway': 'highway', 'boundary': 'boundary', 'admin_level': 'admin_level', 'waterway': 'waterway', 'name:ru': 'name:ru', 'name:ro': 'name:ro', 'name:pt': 'name:pt', 'name:la': 'name:la', 'name:ja': 'name:ja', 'name:it': 'name:it', 'name:fr': 'name:fr', 'name:es': 'name:es', 'name:en': 'name:en', 'name:de': 'name:de', 'name:cs': 'name:cs', 'name': 'name', 'int_name': 'int_name', 'boat': 'boat', });
lyr_lab1_0.set('fieldImages', {'name': 'TextEdit', });
lyr_building_house_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'TextEdit', });
lyr_building_yes_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'type': '', 'name': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_4_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'operator': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'fee': '', 'opening_hours': '', 'beauty': '', 'addr:postcode': '', 'addr:housenumber': '', 'lit': '', 'tactile_paving': '', 'shelter': '', 'bin': '', 'bench': '', 'public_transport': '', 'bus': '', 'shop': '', 'amenity': '', 'kerb': '', 'foot': '', 'bicycle': '', 'barrier': '', 'name:war': '', 'name:vi': '', 'name:vep': '', 'name:tr': '', 'name:tl': '', 'name:tk': '', 'name:sv': '', 'name:sh': '', 'name:roa-rup': '', 'name:pnb': '', 'name:pa': '', 'name:no': '', 'name:nn': '', 'name:lv': '', 'name:lb': '', 'name:it': '', 'name:io': '', 'name:id': '', 'name:hy': '', 'name:gl': '', 'name:ga': '', 'name:fa': '', 'name:el': '', 'name:af': '', 'railway': '', 'traffic_calming': '', 'leisure': '', 'crossing': '', 'summit:category': '', 'ford': '', 'tourism': '', 'westra_ref': '', 'rtsa_scale': '', 'mountain_pass': '', 'alt_name': '', 'name:tt': '', 'name:he': '', 'is_in:country': '', 'ref:en': '', 'ref': '', 'official_name:sk': '', 'official_name:ru': '', 'official_name:fr': '', 'official_name:es': '', 'official_name:en': '', 'official_name:be': '', 'official_name': '', 'name:eo': '', 'name:da': '', 'name:be': '', 'natural': '', 'historic': '', 'rapids': '', 'waterway': '', 'name:zh': '', 'ele': '', 'addr:district': '', 'highway': '', 'alt_name:pl': '', 'wikipedia': '', 'wikidata': '', 'start_date': '', 'source:population': '', 'population:date': '', 'population': '', 'place': '', 'old_name': '', 'official_status': '', 'name:zh-Hant': '', 'name:zh-Hans': '', 'name:uk': '', 'name:sr': '', 'name:sl': '', 'name:sk': '', 'name:ru:word_stress': '', 'name:ru': '', 'name:ro': '', 'name:pt': '', 'name:pl': '', 'name:nl': '', 'name:lt': '', 'name:ko': '', 'name:ja': '', 'name:hu': '', 'name:hr': '', 'name:fr': '', 'name:fi': '', 'name:eu': '', 'name:et': '', 'name:es': '', 'name:en': '', 'name:de': '', 'name:cs': '', 'name:ca': '', 'name:ar': '', 'name': '', 'int_name': '', 'contact:youtube': '', 'contact:website': '', 'contact:vk': '', 'contact:telegram': '', 'contact:phone': '', 'contact:ok': '', 'contact:email': '', 'check_date': '', 'capital': '', 'admin_level': '', 'addr:region': '', 'addr:country': '', });
lyr_2_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'public_transport:version': '', 'ref': '', 'distance': '', 'old_ref': '', 'network': '', 'type': '', 'to': '', 'route': '', 'name': '', 'from': '', });
lyr_3_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'status': '', 'maxspeed': '', 'barrier': '', 'footway': '', 'generator:method': '', 'width': '', 'arete': '', 'maxweight:signed': '', 'building:part': '', 'power': '', 'maxheight': '', 'travers:category': '', 'incline': '', 'layer': '', 'foot': '', 'bridge': '', 'bicycle': '', 'access': '', 'voltage': '', 'usage': '', 'railway': '', 'gauge': '', 'frequency': '', 'electrified': '', 'name:tt': '', 'name:os': '', 'name:nl': '', 'name:ko': '', 'name:eo': '', 'name:el': '', 'name:be': '', 'name:az': '', 'border_type': '', 'name:etymology:wikidata': '', 'name:bxr': '', 'alt_name:tyv': '', 'gis-lab:status': '', 'maritime': '', 'source:url': '', 'natural': '', 'junction': '', 'name:mn': '', 'source:name': '', 'name:hu': '', 'name:yrk': '', 'name:ket': '', 'name:evn': '', 'gvr:code': '', 'name:uk': '', 'intermittent': '', 'tunnel': '', 'name:zh': '', 'wikipedia': '', 'wikidata': '', 'name:tyv': '', 'name:pl': '', 'name:kjh': '', 'name:ka': '', 'name:hy': '', 'name:ca': '', 'alt_name:ru': '', 'alt_name': '', 'maxspeed:type': '', 'lanes': '', 'surface': '', 'ref': '', 'oneway': '', 'old_ref': '', 'highway': '', 'boundary': '', 'admin_level': '', 'waterway': '', 'name:ru': '', 'name:ro': '', 'name:pt': '', 'name:la': '', 'name:ja': '', 'name:it': '', 'name:fr': '', 'name:es': '', 'name:en': '', 'name:de': '', 'name:cs': '', 'name': '', 'int_name': '', 'boat': '', });
lyr_lab1_0.set('fieldLabels', {'name': 'no label', });
lyr_building_house_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_building_yes_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_4_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'operator': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'fee': 'no label', 'opening_hours': 'no label', 'beauty': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'lit': 'no label', 'tactile_paving': 'no label', 'shelter': 'no label', 'bin': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'shop': 'no label', 'amenity': 'no label', 'kerb': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'name:war': 'no label', 'name:vi': 'no label', 'name:vep': 'no label', 'name:tr': 'no label', 'name:tl': 'no label', 'name:tk': 'no label', 'name:sv': 'no label', 'name:sh': 'no label', 'name:roa-rup': 'no label', 'name:pnb': 'no label', 'name:pa': 'no label', 'name:no': 'no label', 'name:nn': 'no label', 'name:lv': 'no label', 'name:lb': 'no label', 'name:it': 'no label', 'name:io': 'no label', 'name:id': 'no label', 'name:hy': 'no label', 'name:gl': 'no label', 'name:ga': 'no label', 'name:fa': 'no label', 'name:el': 'no label', 'name:af': 'no label', 'railway': 'no label', 'traffic_calming': 'no label', 'leisure': 'no label', 'crossing': 'no label', 'summit:category': 'no label', 'ford': 'no label', 'tourism': 'no label', 'westra_ref': 'no label', 'rtsa_scale': 'no label', 'mountain_pass': 'no label', 'alt_name': 'no label', 'name:tt': 'no label', 'name:he': 'no label', 'is_in:country': 'no label', 'ref:en': 'no label', 'ref': 'no label', 'official_name:sk': 'no label', 'official_name:ru': 'no label', 'official_name:fr': 'no label', 'official_name:es': 'no label', 'official_name:en': 'no label', 'official_name:be': 'no label', 'official_name': 'no label', 'name:eo': 'no label', 'name:da': 'no label', 'name:be': 'no label', 'natural': 'no label', 'historic': 'no label', 'rapids': 'no label', 'waterway': 'no label', 'name:zh': 'no label', 'ele': 'no label', 'addr:district': 'no label', 'highway': 'no label', 'alt_name:pl': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'start_date': 'no label', 'source:population': 'no label', 'population:date': 'no label', 'population': 'no label', 'place': 'no label', 'old_name': 'no label', 'official_status': 'no label', 'name:zh-Hant': 'no label', 'name:zh-Hans': 'no label', 'name:uk': 'no label', 'name:sr': 'no label', 'name:sl': 'no label', 'name:sk': 'no label', 'name:ru:word_stress': 'no label', 'name:ru': 'no label', 'name:ro': 'no label', 'name:pt': 'no label', 'name:pl': 'no label', 'name:nl': 'no label', 'name:lt': 'no label', 'name:ko': 'no label', 'name:ja': 'no label', 'name:hu': 'no label', 'name:hr': 'no label', 'name:fr': 'no label', 'name:fi': 'no label', 'name:eu': 'no label', 'name:et': 'no label', 'name:es': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'name:cs': 'no label', 'name:ca': 'no label', 'name:ar': 'no label', 'name': 'no label', 'int_name': 'no label', 'contact:youtube': 'no label', 'contact:website': 'no label', 'contact:vk': 'no label', 'contact:telegram': 'no label', 'contact:phone': 'no label', 'contact:ok': 'no label', 'contact:email': 'no label', 'check_date': 'no label', 'capital': 'no label', 'admin_level': 'no label', 'addr:region': 'no label', 'addr:country': 'no label', });
lyr_2_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'public_transport:version': 'no label', 'ref': 'no label', 'distance': 'no label', 'old_ref': 'no label', 'network': 'no label', 'type': 'no label', 'to': 'no label', 'route': 'no label', 'name': 'no label', 'from': 'no label', });
lyr_3_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'status': 'no label', 'maxspeed': 'no label', 'barrier': 'no label', 'footway': 'no label', 'generator:method': 'no label', 'width': 'no label', 'arete': 'no label', 'maxweight:signed': 'no label', 'building:part': 'no label', 'power': 'no label', 'maxheight': 'no label', 'travers:category': 'no label', 'incline': 'no label', 'layer': 'no label', 'foot': 'no label', 'bridge': 'no label', 'bicycle': 'no label', 'access': 'no label', 'voltage': 'no label', 'usage': 'no label', 'railway': 'no label', 'gauge': 'no label', 'frequency': 'no label', 'electrified': 'no label', 'name:tt': 'no label', 'name:os': 'no label', 'name:nl': 'no label', 'name:ko': 'no label', 'name:eo': 'no label', 'name:el': 'no label', 'name:be': 'no label', 'name:az': 'no label', 'border_type': 'no label', 'name:etymology:wikidata': 'no label', 'name:bxr': 'header label - visible with data', 'alt_name:tyv': 'header label - visible with data', 'gis-lab:status': 'no label', 'maritime': 'no label', 'source:url': 'no label', 'natural': 'no label', 'junction': 'no label', 'name:mn': 'no label', 'source:name': 'no label', 'name:hu': 'no label', 'name:yrk': 'no label', 'name:ket': 'no label', 'name:evn': 'no label', 'gvr:code': 'no label', 'name:uk': 'no label', 'intermittent': 'no label', 'tunnel': 'no label', 'name:zh': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'name:tyv': 'no label', 'name:pl': 'no label', 'name:kjh': 'no label', 'name:ka': 'no label', 'name:hy': 'no label', 'name:ca': 'no label', 'alt_name:ru': 'no label', 'alt_name': 'no label', 'maxspeed:type': 'no label', 'lanes': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'old_ref': 'no label', 'highway': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'waterway': 'no label', 'name:ru': 'no label', 'name:ro': 'no label', 'name:pt': 'no label', 'name:la': 'no label', 'name:ja': 'no label', 'name:it': 'no label', 'name:fr': 'no label', 'name:es': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'name:cs': 'no label', 'name': 'no label', 'int_name': 'no label', 'boat': 'no label', });
lyr_3_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});