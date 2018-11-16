# Methods

- Describe is a header and the it is the list of test
describe('Value service testing', () => {
    it('#getValue should return real value', () => {
    })
}); 

- Before each test it execute this command
beforeEach(() => { 
    service = new ValueService(); 
});

There is also beforeAll, afterEach, afterAll ...

- DoneFn is used for async methods. At the end you should call done() method
(done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });

- Fake method. Create a face method and cast it as a service. 
Often it is used inside the beforeEach method. 

it('#getValue should return faked value from a fake object', () => {
    const fake =  { getValue: () => 'fake value' };
    masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake value');
  });

- Create a spy service
create 'getValue' spy on an object representing the ValueService
set the value to return when the 'getValue' spy is called.

const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
const stubValue = 'stub value';
valueServiceSpy.getValue.and.returnValue(stubValue); 

masterService = new MasterService(valueServiceSpy);
masterService.getValue() => This will always be the stubValue

# Jasmin Commands

