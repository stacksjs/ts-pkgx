/**
 * **jsonnet.org** - Package from pantry: jsonnet.org
 *
 * @domain `jsonnet.org`
 *
 * @install `launchpad install jsonnet.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jsonnetorg
 * console.log(pkg.name)        // "jsonnet.org"
 * console.log(pkg.description) // "Package from pantry: jsonnet.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jsonnet-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jsonnetorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'jsonnet.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jsonnet.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jsonnet.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jsonnet.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jsonnet.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jsonnet.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jsonnet.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JsonnetorgPackage = typeof jsonnetorgPackage
