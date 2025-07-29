/**
 * **invoice** - Package from pantry: github.com/maaslalani/invoice
 *
 * @domain `github.com/maaslalani/invoice`
 *
 * @install `launchpad install github.com/maaslalani/invoice`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommaaslalaniinvoice
 * console.log(pkg.name)        // "invoice"
 * console.log(pkg.description) // "Package from pantry: github.com/maaslalani/invoice"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/maaslalani/invoice.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommaaslalaniinvoicePackage = {
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
  description: 'Package from pantry: github.com/maaslalani/invoice' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/maaslalani/invoice' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/maaslalani/invoice -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/maaslalani/invoice' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/maaslalani/invoice/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommaaslalaniinvoicePackage = typeof githubcommaaslalaniinvoicePackage
