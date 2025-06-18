/**
 * **flutter.dev** - Package from pantry: flutter.dev
 *
 * @domain `flutter.dev`
 *
 * @install `launchpad install flutter.dev`
 * @dependencies `git-scm.org`, `tukaani.org/xz`, `gnu.org/which`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.flutterdev
 * console.log(pkg.name)        // "flutter.dev"
 * console.log(pkg.description) // "Package from pantry: flutter.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flutter-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flutterdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'flutter.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flutter.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: flutter.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install flutter.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
    'tukaani.org/xz',
    'gnu.org/which',
    'curl.se',
    'info-zip.org/zip',
    'info-zip.org/unzip',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/flutter.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FlutterdevPackage = typeof flutterdevPackage
