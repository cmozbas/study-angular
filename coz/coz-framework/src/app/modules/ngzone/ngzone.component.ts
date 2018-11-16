
import { Component, NgZone } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'angular-ngzone',
    templateUrl: './ngzone.component.html',
})

export class NgzoneComponent {
    progress: number = 0;
    label: string;

    constructor(private _ngZone: NgZone) { }

    // Loop inside the Angular zone
    // so the UI DOES refresh after each setTimeout cycle
    processWithinAngularZone() {
        this.label = 'inside';
        this.progress = 0;
        this._increaseProgress(() => console.log('Inside Done!'));
    }

    // Loop outside of the Angular zone
    // so the UI DOES NOT refresh after each setTimeout cycle
    processOutsideOfAngularZone() {
        this.label = 'outside';
        this.progress = 0;

        this._ngZone.runOutsideAngular(() => {
            this._increaseProgress(() => {
                // reenter the Angular zone and display done
                this._ngZone.run(() => { console.log('Outside Done!') });
            });
        });
    }

    // Here the changes of progress attribut won't be watched (don't require UI updates)
    _increaseProgress(doneCallback: () => void) {
        this.progress += 1;
        console.log(`Current progress: ${this.progress}%`);

        // This will be called before run method which end the function
        this.label = `start: ${this.progress}%`;

        if (this.progress < 100) {
            window.setTimeout(() => this._increaseProgress(doneCallback), 10);
        } else {
            // End of the zone
            console.log(`Done with: ${this.progress}%`);
            doneCallback();
        }

        // This wont be called after run
        // This wont be called after run
        this.label = `hello: ${this.progress}%`;
    }

}
