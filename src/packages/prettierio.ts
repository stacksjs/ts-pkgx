/**
 * **prettier.io** - Package from pantry: prettier.io
 *
 * @domain `prettier.io`
 *
 * @install `launchpad install prettier.io`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.prettierio
 * console.log(pkg.name)        // "prettier.io"
 * console.log(pkg.description) // "Package from pantry: prettier.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/prettier-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const prettierioPackage = {
  /**
   * The display name of this package.
   */
  name: 'prettier.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'prettier.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: prettier.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install prettier.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +prettier.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install prettier.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/prettier.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PrettierioPackage = typeof prettierioPackage
