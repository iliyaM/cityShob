export interface Entity {
  type: EntityType;
  subtype: string;
  objects: Sensor[];
}

export interface Sensor {
  name: string;
  status: ConnectionStatus;
}

export enum EntityType {
  ZONES = 'Zones',
  SITES = 'Sites',
  PLACEMARKS = 'Placemarks',
  LAYERS = 'Layers',
  ALL = 'all'
}

export enum ConnectionStatus {
  STABLE = 'STABLE',
  UNSTABLE = 'UNSTABLE',
  DISCONNECTED = 'DISCONNECTED'
}
