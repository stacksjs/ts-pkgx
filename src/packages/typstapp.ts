/**
 * **typst.app** - Package from pantry: typst.app
 *
 * @domain `typst.app`
 *
 * @install `launchpad install typst.app`
 * @dependencies `openssl.org^1.1`, `rust-lang.org^1.80`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.typstapp
 * console.log(pkg.name)        // "typst.app"
 * console.log(pkg.description) // "Package from pantry: typst.app"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/typst-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const typstappPackage = {
  /**
   * The display name of this package.
   */
  name: 'typst.app' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'typst.app' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: typst.app' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install typst.app' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'rust-lang.org^1.80',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/typst.app/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TypstappPackage = typeof typstappPackage
