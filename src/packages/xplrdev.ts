/**
 * **xplr.dev** - Package from pantry: xplr.dev
 *
 * @domain `xplr.dev`
 *
 * @install `launchpad install xplr.dev`
 * @dependencies `rust-lang.org>=1.56`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xplrdev
 * console.log(pkg.name)        // "xplr.dev"
 * console.log(pkg.description) // "Package from pantry: xplr.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xplr-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xplrdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'xplr.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xplr.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xplr.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install xplr.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xplr.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XplrdevPackage = typeof xplrdevPackage
