/**
 * **gitleaks.io** - Package from pantry: gitleaks.io
 *
 * @domain `gitleaks.io`
 *
 * @install `launchpad install gitleaks.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitleaksio
 * console.log(pkg.name)        // "gitleaks.io"
 * console.log(pkg.description) // "Package from pantry: gitleaks.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitleaks-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitleaksioPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitleaks.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitleaks.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gitleaks.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gitleaks.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gitleaks.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gitleaks.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitleaks.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitleaksioPackage = typeof gitleaksioPackage
