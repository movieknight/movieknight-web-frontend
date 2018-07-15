import { RecommendationModule } from './recommendation.module';

describe('RecommendationModule', () => {
  let recommendationModule: RecommendationModule;

  beforeEach(() => {
    recommendationModule = new RecommendationModule();
  });

  it('should create an instance', () => {
    expect(recommendationModule).toBeTruthy();
  });
});
