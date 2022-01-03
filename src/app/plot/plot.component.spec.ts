import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayerStatsService } from '../stats.service';
import { PlotComponent } from './plot.component';

describe('PlotComponent', () => {
  let component: PlotComponent;
  let fixture: ComponentFixture<PlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PlayerStatsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('check functionality of getData', () => {
  //   const fixture = TestBed.createComponent(PlotComponent);
  //   const app = fixture.componentInstance;
  //   app.getData()
  //   console.log('weeks', app.weeks)
  //   expect(app.weeks.length).toBeGreaterThan(0)
  // })
});
