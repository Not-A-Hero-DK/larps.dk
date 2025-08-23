import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    // Mock localStorage
    window.localStorage = {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    } as any;

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockReturnValue({ matches: false }),
    });

    document.documentElement.setAttribute = vi.fn();

    TestBed.configureTestingModule({ providers: [ThemeService] });
    service = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have currentTheme signal', () => {
    expect(service.currentTheme).toBeDefined();
    expect(service.currentTheme()).toBe('dark');
  });

  it('should toggle theme', () => {
    expect(service.currentTheme()).toBe('dark');
    service.toggleTheme();
    expect(service.currentTheme()).toBe('light');
    service.toggleTheme();
    expect(service.currentTheme()).toBe('dark');
  });

  it('should set theme', () => {
    service.setTheme('light');
    expect(service.currentTheme()).toBe('light');
    service.setTheme('dark');
    expect(service.currentTheme()).toBe('dark');
  });

  it('should have setTheme method', () => {
    expect(service.setTheme).toBeDefined();
    service.setTheme('light');
    expect(service.setTheme).toHaveBeenCalledWith('light');
  });
});
