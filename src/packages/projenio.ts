/**
 * **projen.io** - Package from pantry: projen.io
 *
 * @domain `projen.io`
 *
 * @install `launchpad install projen.io`
 * @dependencies `nodejs.org^22 || ^20 || ^18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.projenio
 * console.log(pkg.name)        // "projen.io"
 * console.log(pkg.description) // "Package from pantry: projen.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/projen-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projenioPackage = {
  /**
   * The display name of this package.
   */
  name: 'projen.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'projen.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: projen.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install projen.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +projen.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install projen.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^22 || ^20 || ^18',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/projen.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ProjenioPackage = typeof projenioPackage
