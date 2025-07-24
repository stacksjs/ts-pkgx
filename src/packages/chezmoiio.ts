/**
 * **chezmoi.io** - Package from pantry: chezmoi.io
 *
 * @domain `chezmoi.io`
 *
 * @install `launchpad install chezmoi.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.chezmoiio
 * console.log(pkg.name)        // "chezmoi.io"
 * console.log(pkg.description) // "Package from pantry: chezmoi.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chezmoi-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chezmoiioPackage = {
  /**
   * The display name of this package.
   */
  name: 'chezmoi.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chezmoi.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: chezmoi.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install chezmoi.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +chezmoi.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install chezmoi.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/chezmoi.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ChezmoiioPackage = typeof chezmoiioPackage
