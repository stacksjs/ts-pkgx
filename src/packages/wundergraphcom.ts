/**
 * **wunderctl** - WunderGraph is a Backend for Frontend Framework to optimize frontend, fullstack and backend developer workflows through API Composition.
 *
 * @domain `wundergraph.com`
 * @programs `wunderctl`
 * @version `0.181.0` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install wunderctl`
 * @aliases `wunderctl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.wunderctl
 * // Or access via domain
 * const samePkg = pantry.wundergraphcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wundergraph.com"
 * console.log(pkg.description) // "WunderGraph is a Backend for Frontend Framework..."
 * console.log(pkg.programs)    // ["wunderctl"]
 * console.log(pkg.versions[0]) // "0.181.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wundergraph-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wunderctlPackage = {
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
  description: 'WunderGraph is a Backend for Frontend Framework to optimize frontend, fullstack and backend developer workflows through API Composition.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wundergraph.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install wunderctl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wunderctl',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.181.0',
    '0.180.2',
    '0.180.1',
    '0.180.0',
    '0.179.1',
    '0.179.0',
    '0.178.0',
    '0.177.0',
    '0.176.3',
    '0.176.2',
    '0.176.1',
    '0.176.0',
    '0.175.0',
    '0.174.0',
    '0.173.0',
    '0.172.0',
    '0.171.0',
    '0.170.0',
    '0.169.3',
    '0.169.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'wunderctl',
  ] as const,
}

export type WunderctlPackage = typeof wunderctlPackage
