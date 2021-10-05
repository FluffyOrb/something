import { Level } from './api.model';

export interface NotificationResponse {
  uid: string;
  timestamp: Date;
  level: Level;
  message: string;
  details: string;
}
