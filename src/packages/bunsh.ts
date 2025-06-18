/**
 * **bun.sh** - Package from pantry: bun.sh
 *
 * @domain `bun.sh`
 *
 * @install `launchpad install bun.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bunsh
 * console.log(pkg.name)        // "bun.sh"
 * console.log(pkg.description) // "Package from pantry: bun.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bun-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bunshPackage = {
  /**
   * The display name of this package.
   */
  name: 'bun.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bun.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: bun.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install bun.sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bun.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BunshPackage = typeof bunshPackage
