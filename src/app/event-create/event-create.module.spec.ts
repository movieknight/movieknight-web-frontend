import { EventCreateModule } from './event-create.module';

describe('EventCreateModule', () => {
  let eventCreateModule: EventCreateModule;

  beforeEach(() => {
    eventCreateModule = new EventCreateModule();
  });

  it('should create an instance', () => {
    expect(eventCreateModule).toBeTruthy();
  });
});
