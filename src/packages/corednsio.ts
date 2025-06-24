/**
 * **coredns.io** - Package from pantry: coredns.io
 *
 * @domain `coredns.io`
 *
 * @install `launchpad install coredns.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.corednsio
 * console.log(pkg.name)        // "coredns.io"
 * console.log(pkg.description) // "Package from pantry: coredns.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/coredns-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const corednsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'coredns.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'coredns.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: coredns.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install coredns.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +coredns.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install coredns.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/coredns.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CorednsioPackage = typeof corednsioPackage
