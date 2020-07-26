import { CandidatesCV2Module } from './candidates-cv2.module';

describe('CandidatesCV2Module', () => {
  let candidatesCV2Module: CandidatesCV2Module;

  beforeEach(() => {
    candidatesCV2Module = new CandidatesCV2Module();
  });

  it('should create an instance', () => {
    expect(candidatesCV2Module).toBeTruthy();
  });
});
