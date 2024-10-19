const mockData = [
  {
    type: 'Zones',
    subtype: 'Zone 1',
    objects: [
      { name: 'Sensor 1 Camera 1', status: 'STABLE' },
      { name: 'Sensor 2 Camera 2', status: 'UNSTABLE' },
      { name: 'Sensor 3 Camera 3', status: 'DISCONNECTED' },
    ],
  },
  {
    type: 'Zones',
    subtype: 'Zone 2',
    objects: [
      { name: 'Sensor 4 Camera 4', status: 'STABLE' },
      { name: 'Sensor 5 Camera 5', status: 'UNSTABLE' },
      { name: 'Sensor 6 Camera 6', status: 'DISCONNECTED' },
    ],
  },
  {
    type: 'Zones',
    subtype: 'Zone 3',
    objects: [
      { name: 'Sensor 7 Camera 7', status: 'STABLE' },
      { name: 'Sensor 8 Camera 8', status: 'DISCONNECTED' },
    ],
  },
  {
    type: 'Sites',
    subtype: 'Site 1',
    objects: [
      { name: 'Sensor 9 Camera 9', status: 'STABLE' },
      { name: 'Sensor 10 Camera 10', status: 'UNSTABLE' },
    ],
  },
  {
    type: 'Sites',
    subtype: 'Site 2',
    objects: [
      { name: 'Sensor 11 Camera 11', status: 'DISCONNECTED' },
      { name: 'Sensor 12 Camera 12', status: 'STABLE' },
    ],
  },
  {
    type: 'Sites',
    subtype: 'Site 3',
    objects: [
      { name: 'Sensor 13 Camera 13', status: 'STABLE' },
      { name: 'Sensor 14 Camera 14', status: 'DISCONNECTED' },
      { name: 'Sensor 15 Camera 15', status: 'UNSTABLE' },
    ],
  },
  {
    type: 'Placemarks',
    subtype: 'Placemark 1',
    objects: [
      { name: 'Sensor 16 Camera 16', status: 'STABLE' },
      { name: 'Sensor 17 Camera 17', status: 'UNSTABLE' },
    ],
  },
  {
    type: 'Placemarks',
    subtype: 'Placemark 2',
    objects: [
      { name: 'Sensor 18 Camera 18', status: 'DISCONNECTED' },
      { name: 'Sensor 19 Camera 19', status: 'STABLE' },
      { name: 'Sensor 20 Camera 20', status: 'UNSTABLE' },
    ],
  },
  {
    type: 'Placemarks',
    subtype: 'Placemark 3',
    objects: [
      { name: 'Sensor 21 Camera 21', status: 'STABLE' },
      { name: 'Sensor 22 Camera 22', status: 'DISCONNECTED' },
    ],
  },
  {
    type: 'Layers',
    subtype: 'Layer 1',
    objects: [
      { name: 'Sensor 23 Camera 23', status: 'STABLE' },
      { name: 'Sensor 24 Camera 24', status: 'UNSTABLE' },
    ],
  },
  {
    type: 'Layers',
    subtype: 'Layer 2',
    objects: [
      { name: 'Sensor 25 Camera 25', status: 'DISCONNECTED' },
      { name: 'Sensor 26 Camera 26', status: 'STABLE' },
    ],
  },
  {
    type: 'Layers',
    subtype: 'Layer 3',
    objects: [
      { name: 'Sensor 27 Camera 27', status: 'STABLE' },
      { name: 'Sensor 28 Camera 28', status: 'UNSTABLE' },
      { name: 'Sensor 29 Camera 29', status: 'DISCONNECTED' },
    ],
  },
  {
    type: 'Layers',
    subtype: 'Layer 4',
    objects: [
      { name: 'Sensor 30 Camera 30', status: 'STABLE' },
      { name: 'Sensor 31 Camera 31', status: 'DISCONNECTED' },
    ],
  },
  {
    type: 'Zones',
    subtype: 'Zone 4',
    objects: [
      { name: 'Sensor 32 Camera 32', status: 'UNSTABLE' },
      { name: 'Sensor 33 Camera 33', status: 'STABLE' },
      { name: 'Sensor 34 Camera 34', status: 'DISCONNECTED' },
    ],
  },
  {
    type: 'Sites',
    subtype: 'Site 4',
    objects: [
      { name: 'Sensor 35 Camera 35', status: 'STABLE' },
      { name: 'Sensor 36 Camera 36', status: 'DISCONNECTED' },
    ],
  },
  {
    type: 'Placemarks',
    subtype: 'Placemark 4',
    objects: [
      { name: 'Sensor 37 Camera 37', status: 'STABLE' },
      { name: 'Sensor 38 Camera 38', status: 'UNSTABLE' },
    ],
  },
  {
    type: 'Layers',
    subtype: 'Layer 5',
    objects: [
      { name: 'Sensor 39 Camera 39', status: 'STABLE' },
      { name: 'Sensor 40 Camera 40', status: 'DISCONNECTED' },
    ],
  },
];


module.exports = { mockData };
