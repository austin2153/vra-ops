import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterDataComponent } from './cluster-data.component';

describe('ClusterDataComponent', () => {
  let component: ClusterDataComponent;
  let fixture: ComponentFixture<ClusterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
