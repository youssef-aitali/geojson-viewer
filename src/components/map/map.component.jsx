import React, { useEffect, useRef } from 'react';
import './map.style.scss';
import { loadModules } from 'esri-loader';

const Map = () => {
	const mapRef = useRef();

	useEffect(() => {
		// lazy load the required ArcGIS API for JavaScript modules and CSS
		loadModules([ 'esri/Map', 'esri/views/MapView', 'esri/widgets/BasemapToggle' ], {
			css: true
		}).then(([ ArcGISMap, MapView, BasemapToggle ]) => {
			const map = new ArcGISMap({
				basemap: 'topo-vector'
			});

			// load the map view at the ref's DOM node
			const view = new MapView({
				container: mapRef.current,
				map: map,
				center: [ -8, 28.9 ],
				zoom: 6
			});

			const basemapToggle = new BasemapToggle({
				view: view,
				nextBasemap: 'satellite'
			});

			view.ui.add(basemapToggle, 'bottom-right');

			return () => {
				if (view) {
					// destroy the map view
					view.container = null;
				}
			};
		});
	});

	return <div className="webmap" ref={mapRef} />;
};

export default Map;
