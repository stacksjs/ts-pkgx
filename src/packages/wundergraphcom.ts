/**
 * **wundergraph.com** - Package from pantry: wundergraph.com
 *
 * @domain `wundergraph.com`
 *
 * @install `launchpad install wundergraph.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wundergraphcom
 * console.log(pkg.name)        // "wundergraph.com"
 * console.log(pkg.description) // "Package from pantry: wundergraph.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wundergraph-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wundergraphcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'wundergraph.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wundergraph.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wundergraph.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wundergraph.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +wundergraph.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install wundergraph.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wundergraph.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WundergraphcomPackage = typeof wundergraphcomPackage
