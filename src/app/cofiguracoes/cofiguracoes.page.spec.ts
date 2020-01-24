import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CofiguracoesPage } from './cofiguracoes.page';

describe('CofiguracoesPage', () => {
  let component: CofiguracoesPage;
  let fixture: ComponentFixture<CofiguracoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CofiguracoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CofiguracoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
