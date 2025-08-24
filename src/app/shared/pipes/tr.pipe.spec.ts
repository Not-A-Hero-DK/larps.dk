import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslatePipe } from './tr.pipe';
import { LocaleService } from '../services/locale.service';

describe('TranslatePipe', () => {
  let pipe: TranslatePipe;
  let localeService: LocaleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TranslatePipe,
        LocaleService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    pipe = TestBed.inject(TranslatePipe);
    localeService = TestBed.inject(LocaleService);
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform key using locale service', () => {
    // Mock the translate method
    const translateSpy = vi.spyOn(localeService, 'translate').mockReturnValue('Test Translation');
    
    const result = pipe.transform('test.key');
    
    expect(translateSpy).toHaveBeenCalledWith('test.key');
    expect(result).toBe('Test Translation');
  });

  it('should return key if translation not found', () => {
    vi.spyOn(localeService, 'translate').mockReturnValue('test.key');
    
    const result = pipe.transform('test.key');
    
    expect(result).toBe('test.key');
  });
});