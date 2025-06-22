/**
 * **shards** - Package from pantry: crystal-lang.org/shards
 *
 * @domain `crystal-lang.org/shards`
 *
 * @install `launchpad install crystal-lang.org/shards`
 * @dependencies `hboehm.info/gc^8`, `pyyaml.org/libyaml^0`, `crystal-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.crystallangorgshards
 * console.log(pkg.name)        // "shards"
 * console.log(pkg.description) // "Package from pantry: crystal-lang.org/shards"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crystal-lang-org/shards.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const crystallangorgshardsPackage = {
  /**
   * The display name of this package.
   */
  name: 'shards' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crystal-lang.org/shards' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crystal-lang.org/shards' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crystal-lang.org/shards' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crystal-lang.org/shards -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crystal-lang.org/shards' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'hboehm.info/gc^8',
    'pyyaml.org/libyaml^0',
    'crystal-lang.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crystal-lang.org/shards/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CrystallangorgshardsPackage = typeof crystallangorgshardsPackage
