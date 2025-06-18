/**
 * **jbang.dev** - Package from pantry: jbang.dev
 *
 * @domain `jbang.dev`
 *
 * @install `launchpad install jbang.dev`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jbangdev
 * console.log(pkg.name)        // "jbang.dev"
 * console.log(pkg.description) // "Package from pantry: jbang.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jbang-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jbangdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'jbang.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jbang.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jbang.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install jbang.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jbang.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JbangdevPackage = typeof jbangdevPackage
