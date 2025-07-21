/**
 * **graphite.sil.org** - Package from pantry: graphite.sil.org
 *
 * @domain `graphite.sil.org`
 *
 * @install `launchpad install graphite.sil.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.graphitesilorg
 * console.log(pkg.name)        // "graphite.sil.org"
 * console.log(pkg.description) // "Package from pantry: graphite.sil.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/graphite-sil-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const graphitesilorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'graphite.sil.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'graphite.sil.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: graphite.sil.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install graphite.sil.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +graphite.sil.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install graphite.sil.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/graphite.sil.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GraphitesilorgPackage = typeof graphitesilorgPackage
