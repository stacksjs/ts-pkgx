/**
 * **protoc** - Protocol Buffers - Google's data interchange format
 *
 * @domain `protobuf.dev`
 * @programs `protoc`
 * @version `32.0.0` (44 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install protoc`
 * @aliases `protoc`
 * @dependencies `zlib.net^1`, `abseil.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.protoc
 * // Or access via domain
 * const samePkg = pantry.protobufdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Protocol Buffers"
 * console.log(pkg.description) // "Protocol Buffers - Google's data interchange fo..."
 * console.log(pkg.programs)    // ["protoc"]
 * console.log(pkg.versions[0]) // "32.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/protobuf-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protocPackage = {
  /**
   * The display name of this package.
   */
  name: 'Protocol Buffers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'protobuf.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Protocol Buffers - Google\'s data interchange format' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/protobuf.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install protoc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'protoc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'abseil.io',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '32.0.0',
    '31.1.0',
    '31.0.0',
    '30.2.0',
    '30.1.0',
    '30.0.0',
    '29.5.0',
    '29.4.0',
    '29.3.0',
    '29.2.0',
    '29.1.0',
    '29.0.0',
    '28.3.0',
    '28.2.0',
    '28.1.0',
    '28.0.0',
    '27.5.0',
    '27.4.0',
    '27.3.0',
    '27.2.0',
    '27.1.0',
    '27.0.0',
    '26.1.0',
    '26.0.0',
    '25.8.0',
    '25.7.0',
    '25.6.0',
    '25.5.0',
    '25.4.0',
    '25.3.0',
    '25.2.0',
    '25.1.0',
    '25.0.0',
    '24.4.0',
    '24.3.0',
    '24.2.0',
    '24.1.0',
    '23.4.0',
    '23.3.0',
    '23.2.0',
    '23.1.0',
    '23.0.0',
    '22.5.0',
    '21.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'protoc',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) protoc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install protoc' as const,
}

export type ProtocPackage = typeof protocPackage
