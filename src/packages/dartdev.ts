/**
 * **dart** - The Dart SDK, including the VM, JS and Wasm compilers, analysis, core libraries, and more.
 *
 * @domain `dart.dev`
 * @programs `dart`, `dartaotruntime`
 * @version `3.8.2` (37 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dart`
 * @name `dart`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dart
 * // Or access via domain
 * const samePkg = pantry.dartdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dart"
 * console.log(pkg.description) // "The Dart SDK, including the VM, JS and Wasm com..."
 * console.log(pkg.programs)    // ["dart", "dartaotruntime"]
 * console.log(pkg.versions[0]) // "3.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dart-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dartPackage = {
  /**
   * The display name of this package.
   */
  name: 'dart' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dart.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Dart SDK, including the VM, JS and Wasm compilers, analysis, core libraries, and more.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dart.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dart' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dart',
    'dartaotruntime',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.8.2',
    '3.8.1',
    '3.8.0',
    '3.7.3',
    '3.7.2',
    '3.7.1',
    '3.7.0',
    '3.6.2',
    '3.6.1',
    '3.6.0',
    '3.5.4',
    '3.5.3',
    '3.5.2',
    '3.5.1',
    '3.5.0',
    '3.4.4',
    '3.4.3',
    '3.4.2',
    '3.4.1',
    '3.4.0',
    '3.3.4',
    '3.3.3',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.6',
    '3.2.5',
    '3.2.4',
    '3.2.3',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '3.1.5',
    '3.1.4',
    '3.1.3',
    '3.1.2',
    '3.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dart.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dart' as const,
}

export type DartPackage = typeof dartPackage
