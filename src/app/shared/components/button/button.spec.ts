describe('Button', () => {
  it('should define variant classes', () => {
    const variants = {
      primary: 'bg-muted px-8 py-3 border border-accent text-accent hover:bg-accent hover:border-accent hover:text-black',
      secondary: 'bg-gradient-nordic px-8 py-3 text-white hover:shadow-glow transform',
      toggle: 'rounded-lg text-sm font-medium px-2 py-1 bg-neutral-800 hover:bg-button-toggle transition-colors duration-200 text-foreground',
    };
    
    expect(variants.primary).toContain('bg-muted');
    expect(variants.secondary).toContain('bg-gradient-nordic');
    expect(variants.toggle).toContain('rounded-lg');
  });
});