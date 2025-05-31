/**
 * **jless** - jless is a command-line JSON viewer designed for reading, exploring, and searching through JSON data.
 *
 * @domain `jless.io`
 * @programs `jless`
 * @version `0.9.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/jless-io.md
 * @install `sh <(curl https://pkgx.sh) jless`
 * @dependencies `linuxx.org/xcb@1`, `x.org/xcb@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jlessio
 * console.log(pkg.name)        // "jless"
 * console.log(pkg.description) // "jless is a command-line JSON viewer designed fo..."
 * console.log(pkg.programs)    // ["jless"]
 * console.log(pkg.versions[0]) // "0.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jless-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jlessioPackage = {
  /**
   * The display name of this package.
   */
  name: 'jless' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jless.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'jless is a command-line JSON viewer designed for reading, exploring, and searching through JSON data.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jless.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) jless' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jless',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxx.org/xcb@1',
    'x.org/xcb@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.0',
  ] as const,
  fullPath: 'jless.io' as const,
  aliases: [] as const,
}

export type JlessioPackage = typeof jlessioPackage
