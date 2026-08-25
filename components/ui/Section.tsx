import * as React from "react"

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={`py-16 md:py-24 lg:py-32 ${className || ""}`}
    {...props}
  />
))
Section.displayName = "Section"

export { Section }
