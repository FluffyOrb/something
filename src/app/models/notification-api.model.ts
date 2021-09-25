import { Level } from 'src/app/models/api.model';

export interface NotificationResponse {
  uid: string;
  timestamp: Date;
  level: Level;
  message: string;
  details: string;
}
