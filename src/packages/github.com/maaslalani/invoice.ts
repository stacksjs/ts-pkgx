/**
 * **invoice** - Command line invoice generator
 *
 * @domain `github.com/maaslalani/invoice`
 * @programs `invoice`
 * @version `0.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install invoice`
 * @name `invoice`
 * @dependencies `go.dev^1.20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.invoice
 * // Or access via domain
 * const samePkg = pantry.githubcommaaslalaniinvoice
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "invoice"
 * console.log(pkg.description) // "Command line invoice generator"
 * console.log(pkg.programs)    // ["invoice"]
 * console.log(pkg.versions[0]) // "0.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/maaslalani/invoice.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const invoicePackage = {
  /**
   * The display name of this package.
   */
  name: 'invoice' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/maaslalani/invoice' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command line invoice generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/maaslalani/invoice/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install invoice' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'invoice',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type InvoicePackage = typeof invoicePackage
