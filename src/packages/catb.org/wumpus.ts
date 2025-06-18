/**
 * **wumpus** - Exact clone of the ancient BASIC Hunt the Wumpus game
 *
 * @domain `catb.org/wumpus`
 * @programs `wumpus`, `superhack`
 * @version `1.10.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +catb.org/wumpus -- $SHELL -i`
 * @aliases `wumpus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.wumpus
 * // Or access via domain
 * const samePkg = pantry.catborgwumpus
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "catb.org/wumpus"
 * console.log(pkg.description) // "Exact clone of the ancient BASIC Hunt the Wumpu..."
 * console.log(pkg.programs)    // ["wumpus", "superhack"]
 * console.log(pkg.versions[0]) // "1.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/catb-org/wumpus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wumpusPackage = {
  /**
   * The display name of this package.
   */
  name: 'catb.org/wumpus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'catb.org/wumpus' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Exact clone of the ancient BASIC Hunt the Wumpus game' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/catb.org/wumpus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +catb.org/wumpus -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wumpus',
    'superhack',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.10.0',
    '1.9.0',
    '1.8.0',
    '1.6.0',
    '1.5.0',
    '1.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'wumpus',
  ] as const,
  fullPath: 'catb.org/wumpus' as const,
}

export type WumpusPackage = typeof wumpusPackage
