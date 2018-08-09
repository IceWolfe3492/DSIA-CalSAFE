/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EvacuationsComponent } from './evacuations.component';

let component: EvacuationsComponent;
let fixture: ComponentFixture<EvacuationsComponent>;

describe('evacuations component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EvacuationsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EvacuationsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
