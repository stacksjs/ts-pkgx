/**
 * **taplo.tamasfe.dev** - Package from pantry: taplo.tamasfe.dev
 *
 * @domain `taplo.tamasfe.dev`
 *
 * @install `launchpad install taplo.tamasfe.dev`
 * @dependencies `rust-lang.org>=1.56`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.taplotamasfedev
 * console.log(pkg.name)        // "taplo.tamasfe.dev"
 * console.log(pkg.description) // "Package from pantry: taplo.tamasfe.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taplo-tamasfe-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const taplotamasfedevPackage = {
  /**
   * The display name of this package.
   */
  name: 'taplo.tamasfe.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taplo.tamasfe.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: taplo.tamasfe.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install taplo.tamasfe.dev' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/taplo.tamasfe.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TaplotamasfedevPackage = typeof taplotamasfedevPackage
