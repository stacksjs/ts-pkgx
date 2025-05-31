/**
 * **dart** - The Dart SDK, including the VM, JS and Wasm compilers, analysis, core libraries, and more.
 *
 * @domain `dart.dev`
 * @programs `dart`, `dartaotruntime`
 * @version `3.8.1` (36 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/dart-dev.md
 * @install `sh <(curl https://pkgx.sh) +dart.dev -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dartdev
 * console.log(pkg.name)        // "dart"
 * console.log(pkg.description) // "The Dart SDK, including the VM, JS and Wasm com..."
 * console.log(pkg.programs)    // ["dart", "dartaotruntime"]
 * console.log(pkg.versions[0]) // "3.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dart-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dartdevPackage = {
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +dart.dev -- $SHELL -i' as const,
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
  fullPath: 'dart.dev' as const,
  aliases: [] as const,
}

export type DartdevPackage = typeof dartdevPackage
