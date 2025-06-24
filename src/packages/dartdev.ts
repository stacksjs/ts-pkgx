/**
 * **dart.dev** - Package from pantry: dart.dev
 *
 * @domain `dart.dev`
 *
 * @install `launchpad install dart.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dartdev
 * console.log(pkg.name)        // "dart.dev"
 * console.log(pkg.description) // "Package from pantry: dart.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dart-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dartdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'dart.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dart.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dart.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dart.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dart.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dart.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dart.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DartdevPackage = typeof dartdevPackage
