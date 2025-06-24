/**
 * **wumpus** - Package from pantry: catb.org/wumpus
 *
 * @domain `catb.org/wumpus`
 *
 * @install `launchpad install catb.org/wumpus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.catborgwumpus
 * console.log(pkg.name)        // "wumpus"
 * console.log(pkg.description) // "Package from pantry: catb.org/wumpus"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/catb-org/wumpus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const catborgwumpusPackage = {
  /**
   * The display name of this package.
   */
  name: 'wumpus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'catb.org/wumpus' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: catb.org/wumpus' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install catb.org/wumpus' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +catb.org/wumpus -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install catb.org/wumpus' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/catb.org/wumpus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CatborgwumpusPackage = typeof catborgwumpusPackage
