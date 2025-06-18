/**
 * **getsynth.com** - Package from pantry: getsynth.com
 *
 * @domain `getsynth.com`
 *
 * @install `launchpad install getsynth.com`
 * @dependencies `rust-lang.org^1.65`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getsynthcom
 * console.log(pkg.name)        // "getsynth.com"
 * console.log(pkg.description) // "Package from pantry: getsynth.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getsynth-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getsynthcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'getsynth.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getsynth.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: getsynth.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install getsynth.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org^1.65',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getsynth.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GetsynthcomPackage = typeof getsynthcomPackage
