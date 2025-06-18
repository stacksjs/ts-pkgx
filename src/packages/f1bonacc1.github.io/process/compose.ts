/**
 * **f1bonacc1.github.io/process-compose** - pkgx package
 *
 * @domain `f1bonacc1.github.io/process/compose`
 *
 * @install `pkgx f1bonacc1.github.io/process-compose`
 * @name `process-compose`
 * @aliases `f1bonacc1.github.io/process-compose`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.f1bonacc1githubioprocesscompose
 * // Or access via domain
 * const samePkg = pantry.f1bonacc1githubioprocesscompose
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "process-compose"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/f1bonacc1-github-io/process/compose.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const f1bonacc1githubioprocesscomposePackage = {
  /**
   * The display name of this package.
   */
  name: 'process-compose' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'f1bonacc1.github.io/process/compose' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx f1bonacc1.github.io/process-compose' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'f1bonacc1.github.io/process-compose',
  ] as const,
  fullPath: 'f1bonacc1.github.io/process-compose' as const,
}

export type F1bonacc1githubioprocesscomposePackage = typeof f1bonacc1githubioprocesscomposePackage
