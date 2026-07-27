import type { UserNotificationPreferences } from '@omni-stellar-velar/types';

export interface PreferencesStore {
  getForUser(userId: string): Promise<UserNotificationPreferences>;
}
