'use client'

import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'toggle'
  className?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  disabled = false,
  onClick = undefined,
}: Readonly<ButtonProps>) {
  const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background disabled:pointer-events-none disabled:opacity-50 rounded-md transition-all duration-300 cursor-pointer'

  const variants = {
    primary: 'bg-muted px-8 py-3 border border-accent text-accent hover:bg-accent hover:border-accent hover:text-white',
    secondary: 'bg-gradient-nordic px-8 py-3 text-white hover:shadow-glow transform',
    toggle:
      'rounded-lg text-sm font-medium px-2 py-1 bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200',
  }

  return href ? (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} aria-disabled={disabled}>
      {children}
    </Link>
  ) : (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
