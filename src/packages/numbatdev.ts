/**
 * **numbat.dev** - Package from pantry: numbat.dev
 *
 * @domain `numbat.dev`
 *
 * @install `launchpad install numbat.dev`
 * @dependencies `rust-lang.org^1.56`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.numbatdev
 * console.log(pkg.name)        // "numbat.dev"
 * console.log(pkg.description) // "Package from pantry: numbat.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/numbat-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const numbatdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'numbat.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'numbat.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: numbat.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install numbat.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org^1.56',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/numbat.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NumbatdevPackage = typeof numbatdevPackage
