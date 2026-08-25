import * as React from "react"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]"
    
    const variants = {
      default: "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg",
      outline: "border border-border/60 bg-transparent shadow-sm hover:bg-accent/10 hover:text-primary hover:border-primary/50 hover:-translate-y-0.5",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    }
    
    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
    }

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`

    if (href) {
      return (
        <Link href={href} className={classes}>
          {props.children}
        </Link>
      )
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
