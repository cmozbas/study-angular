# AngularioModules

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# ARCHITECTURE


/*
> Explain with core.module:
	- app.module import CoreModule and init a name
	- core.module create a userservice with an optinal given name
	- As soon as app.module import the core.module, it can now use the <app-title> component
	which was declared in core.module

> Explain userService
	- User service is created with or without a name
	- In the core.module userService is created and overrided with name given
	- We don't have to give a name
*/
AppModule
	imports 
		BrowserModule
		CoreModule
		AppRoutingModule
							AppRoutingModule
							imports
								ContactModule					=> Default route
								RouterModule.forRoot(routes)
							exports
								RouterModule
		
	declarations	
		AppComponent
		
	bootstrap
		AppComponent

		
SharedModule	
	imports
		CommonModule
	
	declarations
		AwesomePipe
		HighlightDirective
	
	exports						=> All modules that the application use exported by shared module, then will be available on other module
		AwesomePipe
		HighlightDirective
		CommonModule
		FormsModule				=> Export allow to other modules to use these module

		
CoreModule
	imports
		CommonModule
	
	declarations
		TitleComponent
		
	exports						
		TitleComponent
	
	providers
		UserService
		
		
HeroModule
	imports
		SharedModule 
		HeroRoutingModule
							HeroRoutingModule
							imports
								RouterModule.forChild(routes)
							exports
								RouterModule
	declarations
		HeroComponent
		HeroDetailComponent
		HeroListComponent

		
CrisisModule
	imports
		CommonModule
		CrisisRoutingModule
							CrisisRoutingModule
							imports
								RouterModule.forChild(routes)
							exports
								RouterModule

	declarations
		CrisisDetailComponent
		CrisisListComponent
		
	providers
		CrisisService

		
ContactModule
	imports
		SharedModule
		ContactRoutingModule
							ContactRoutingModule
							imports
								RouterModule.forChild(routes)
							exports
								RouterModule
		
	declarations
		ContactComponent
		
	providers
		ContactService
		
		
		
		