/**
 * **jumppad.dev** - Package from pantry: jumppad.dev
 *
 * @domain `jumppad.dev`
 *
 * @install `launchpad install jumppad.dev`
 * @dependencies `go.dev=1.21.5`, `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jumppaddev
 * console.log(pkg.name)        // "jumppad.dev"
 * console.log(pkg.description) // "Package from pantry: jumppad.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jumppad-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jumppaddevPackage = {
  /**
   * The display name of this package.
   */
  name: 'jumppad.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jumppad.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jumppad.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install jumppad.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev=1.21.5',
    'gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jumppad.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JumppaddevPackage = typeof jumppaddevPackage
