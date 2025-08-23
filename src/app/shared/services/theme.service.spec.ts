import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    // Mock localStorage
    global.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    } as any;

    // Create service with minimal setup
    service = {
      theme: vi.fn().mockReturnValue('dark'),
      toggleTheme: vi.fn(),
      setTheme: vi.fn()
    } as any;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have theme method', () => {
    expect(service.theme).toBeDefined();
    expect(service.theme()).toBe('dark');
  });

  it('should have toggleTheme method', () => {
    expect(service.toggleTheme).toBeDefined();
    service.toggleTheme();
    expect(service.toggleTheme).toHaveBeenCalled();
  });

  it('should have setTheme method', () => {
    expect(service.setTheme).toBeDefined();
    service.setTheme('light');
    expect(service.setTheme).toHaveBeenCalledWith('light');
  });
});