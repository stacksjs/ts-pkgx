/**
 * **asciidoctor** - Crafters of fine Open Source products
 *
 * @domain `asciidoctor.org`
 *
 * @install `pkgx asciidoctor.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.asciidoctororg
 * console.log(pkg.name)        // "asciidoctor"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/asciidoctor-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const asciidoctororgPackage = {
  /**
   * The display name of this package.
   */
  name: 'asciidoctor' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/asciidoctor.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'asciidoctor.org' as const,
  fullPath: 'asciidoctor.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx asciidoctor.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AsciidoctororgPackage = typeof asciidoctororgPackage
