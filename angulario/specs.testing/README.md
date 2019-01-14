# Methods

## Describe is a header and the it is the list of test

describe('Value service testing', () => {
    it('#getValue should return real value', () => {
    })
}); 

## Before each test it execute this command
There is also beforeAll, afterEach, afterAll ...

beforeEach(() => { 
    service = new ValueService(); 
});


## DoneFn 
It is used for async methods. At the end you should call done() method
-
(done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });

## Fake method 

Create a face method and cast it as a service. Often it is used inside 
beforeEach method. 
-
const fake =  { getValue: () => 'fake value' };
masterService = new MasterService(fake as ValueService);
expect(masterService.getValue()).toBe('fake value');
-
const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
const stubValue = 'stub value';
valueServiceSpy.getValue.and.returnValue(stubValue); => Tell getValue method to send always the stubValue
-
masterService = new MasterService(valueServiceSpy);
masterService.getValue() => This will always be the stubValue

## TestBed

TestBed is used to avoid the dependencies that a class provide. Instead of
creating a new class we simply use TestBed to have the instance. It's
a container of service (Dependency injection).
It's different from creating a service. in TestBed we only provide services
-
beforeEach(() => {
  TestBed.configureTestingModule({ providers: [ValueService] });
  service = TestBed.get(ValueService);
});
-
const spy = jasmine.createSpyObj('ValueService', ['getValue']);
TestBed.configureTestingModule({
    providers: [
      MasterService,
      { provide: ValueService, useValue: spy } =>  Provide the service and its (spy) dependency
    ]
  });

// Inject both the service-to-test and its (spy) dependency
masterService = TestBed.get(MasterService);
valueServiceSpy = TestBed.get(ValueService);

## HTTP services

- Create a spy as any other methods
beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  ... => better to use TestBed
});

- How to use
const heros: Hero[] ="[{id:1,name:'A'},{id:2,name:'B'}]
httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

=> HeroService is also a spy service. Method getHeroes use the http.get service
heroService.getHeroes().subscribe(
    heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
    fail
  );

expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

## Component class

- A component is a simple class that we can test. Here create a component
and test the click function. 
const comp = new LightswitchComponent();
expect(comp.isOn).toBe(false, 'off at first');
comp.clicked();
expect(comp.isOn).toBe(true, 'on after click');

- Test Input, Output methods
@Input() hero: Hero;
@Output() selected = new EventEmitter<Hero>();
click() { this.selected.emit(this.hero); }
.
const comp = new DashboardHeroComponent();
const hero: Hero = { id: 42, name: 'Test' };
comp.hero = hero;
comp.selected.subscribe(selectedHero => expect(selectedHero).toBe(hero));
comp.click();

- TestBed is also work with component. Provide component and it-s dependencies
TestBed.configureTestingModule({
providers: [
  WelcomeComponent,
  { provide: UserService, useClass: MockUserService }
]

comp = TestBed.get(WelcomeComponent);
userService = TestBed.get(UserService);

## Html view
- This create the html view in the browser
let fixture: ComponentFixture<BannerComponent>;
fixture = TestBed.createComponent(BannerComponent);
const component = fixture.componentInstance;
expect(component).toBeDefined();

- Test html of the welcome page
const bannerElement: HTMLElement = fixture.nativeElement;
expect(bannerElement.textContent).toContain('banner works!');

- Query the html
const bannerElement: HTMLElement = fixture.nativeElement;
const p = bannerElement.querySelector('p');
expect(p.textContent).toEqual('banner works!');

- Debug Element
The properties of the nativeElement depend upon the runtime environment. 
You could be running these tests on a non-browser platform that doesn't 
have a DOM or whose DOM-emulation doesn't support the full HTMLElement API.
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;

- By.css('')
The server-side renderer might not support the full HTML element API. 
If it doesn't support querySelector, the previous test could fail.
const bannerDe: DebugElement = fixture.debugElement;
const paragraphDe = bannerDe.query(By.css('p'));
const p: HTMLElement = paragraphDe.nativeElement;
expect(p.textContent).toEqual('banner works!');

## Html actions

- detectChanges
You must tell the TestBed to perform data binding by calling fixture.detectChanges().
Only then does the <h1> have the expected title.

component.title = 'Test Title';
fixture.detectChanges();
expect(h1.textContent).toContain('Test Title');

- Automatic change detection. 
No need to use the detectChanges method
TestBed.configureTestingModule({
  declarations: [ BannerComponent ],
  providers: [
    { provide: ComponentFixtureAutoDetect, useValue: true }
  ]
});

- dispatchEvent()
To simulate user input, you can find the input element and set its value property.
.simulate user entering a new name into the input box
nameInput.value = 'quick BROWN  fOx';
.dispatch a DOM event so that Angular learns of input value change.
nameInput.dispatchEvent(newEvent('input'));
.Tell Angular to update the display binding through the title pipe
fixture.detectChanges();
expect(nameDisplay.textContent).toBe('Quick Brown  Fox');

- Method to get services
userService = fixture.debugElement.injector.get(UserService);
userService = TestBed.get(UserService);

## Async

- fakeAsync() + tick()
The tick() function accepts milliseconds as parameter (defaults to 0 if not provided). 
The parameter represents how much the virtual clock advances. For example, if you have 
a setTimeout(fn, 100) in a fakeAsync() test, you need to use tick(100) to trigger the fn callback.
.
it('should run timeout callback with delay after call tick with millis', fakeAsync(() => {
     let called = false;
     setTimeout(() => { called = true; }, 100);
     tick(100);                     
     expect(called).toBe(true);
   }));
.
it('should get Date diff correctly in fakeAsync', fakeAsync(() => {
     const start = Date.now();
     tick(100);
     const end = Date.now();
     expect(end - start).toBe(100);
   }));

let result = null;
of ('hello').pipe(delay(1000)).subscribe(v => { result = v; });
expect(result).toBeNull();
tick(1000);
expect(result).toBe('hello');

- Same thing with jasmin clcik
(window as any)['__zone_symbol__fakeAsyncPatchLock'] = true;
import 'zone.js/dist/zone-testing';

beforeEach(() => { jasmine.clock().install(); });
  afterEach(() => { jasmine.clock().uninstall(); });
  it('should auto enter fakeAsync', () => {
    // is in fakeAsync now, don't need to call fakeAsync(testFn)
    let called = false;
    setTimeout(() => { called = true; }, 100);
    jasmine.clock().tick(100);
    expect(called).toBe(true);
  });


# Testing results

- toBe()
expect(masterService.getValue())
      .toBe(stubValue, 'service returned stub value');

- .calls.count() + toBe
- Number of call for the getValue method should be one
expect(valueServiceSpy.getValue.calls.count())
      .toBe(1, 'spy method was called once');

- .calls.mostRecent().returnValue + toBe
- The last value of the getValue method should be stubValue
expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);

- toMatch()
const comp = new LightswitchComponent();
expect(comp.message).toMatch(/is off/i, 'off at first');
comp.clicked();
expect(comp.message).toMatch(/is on/i, 'on after clicked');

- toBeUndefined()
expect(comp.welcome).toBeUndefined();

- toBeDefined()
 expect(component).toBeDefined();

- toContain()
expect(comp.welcome).toContain(userService.user.name);

- not.
expect(comp.welcome).toContain('log in');
expect(comp.welcome).not.toContain(userService.user.name);

- throwError
getQuoteSpy.and.returnValue(throwError('TwainService test failure'));

