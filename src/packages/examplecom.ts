/**
 * Package definition for Example Package (example.com)
 */
import type { PkgxPackage } from '../types'

export const examplecomPackage: PkgxPackage = {
  name: 'Example Package',
  domain: 'example.com',
  description: 'A sample package to test the renderer',
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/blob/main/projects/example.com/package.yml',
  homepageUrl: 'https://example.com',
  githubUrl: 'https://github.com/example/package',
  installCommand: 'pkgx example.com',
  programs: ['sample', 'example'],
  companions: ['helper'],
  dependencies: ['lib1', 'lib2'],
  versions: ['1.0.0', '2.0.0'],
  aliases: ['sample', 'example'],
  fullPath: 'example.com',
}
