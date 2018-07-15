export interface IEvent {
  id?: number;
  title: string;
  description?: string;
  public?: boolean;
  owner: string;
  user_limit?: number;
}
